import { isValidPhoneNumber, getExampleNumber, type CountryCode } from "libphonenumber-js/mobile";
import examples from "libphonenumber-js/examples.mobile.json";

/**
 * The country selected in react-phone-input-2: its dial code (e.g. "91")
 * and ISO 3166-1 alpha-2 code (e.g. "in"). Both are needed because dial
 * codes aren't unique per country (+1 is US/Canada/etc.), so libphonenumber-js's
 * per-country numbering-plan lookup requires the ISO code.
 *
 * `format` is react-phone-input-2's own display mask for the country, taken
 * from its `CountryData` on `onChange`. It's round-tripped through
 * `computeMobileValue` so callers can keep tracking "did the country
 * change" across renders, but it's not used for length/validity decisions
 * here — see getMobileDigitRange for why.
 */
export interface PhoneCountry {
  dialCode: string;
  countryCode: string;
  format?: string;
}

const DEFAULT_COUNTRY: PhoneCountry = { dialCode: "91", countryCode: "in" };

function getDigits(value: string | undefined | null): string {
  return (value || "").replace(/\D/g, "");
}

function getNationalNumber(value: string, dialCode: string): string {
  const digits = getDigits(value);
  const dc = getDigits(dialCode);
  return dc && digits.startsWith(dc) ? digits.slice(dc.length) : digits;
}

function toIsoCountry(countryCode: string | undefined): CountryCode | undefined {
  const iso = (countryCode || "").toUpperCase();
  return iso ? (iso as CountryCode) : undefined;
}

const exampleNationalCache = new Map<string, string | null>();

function getExampleNational(iso: CountryCode): string | null {
  if (exampleNationalCache.has(iso)) {
    return exampleNationalCache.get(iso)!;
  }
  const example = getExampleNumber(iso, examples);
  const national = example ? example.nationalNumber : null;
  exampleNationalCache.set(iso, national);
  return national;
}

const MIN_SWEEP_LENGTH = 4;
const MAX_SWEEP_LENGTH = 15;

/** A same-length-or-longer candidate national number that preserves the
 * real example number's leading digits (the part numbering-plan patterns
 * actually key off), padding or trimming only its tail. */
function buildCandidate(exampleNational: string, length: number): string {
  if (exampleNational.length >= length) {
    return exampleNational.slice(0, length);
  }
  return exampleNational + "1".repeat(length - exampleNational.length);
}

const digitRangeCache = new Map<string, { min: number; max: number } | null>();

/**
 * The real min/max mobile-number digit range for a country, derived
 * entirely from libphonenumber-js's own metadata — no hardcoded per-country
 * table. For each candidate length from 4 to 15 we build a national number
 * that keeps the country's real example mobile number's leading digits
 * (so the numbering-plan's leading-digit rules still match) and ask
 * `isValidPhoneNumber` whether a mobile number of that length is valid.
 * The shortest and longest lengths that come back valid are the range.
 *
 * This replaces an earlier design that collapsed every country to a single
 * "example number length" — correct for fixed-length countries (India,
 * UK, US) but wrong for countries whose real mobile numbering plan spans
 * a range (e.g. Indonesia, legitimately 9-12 digits).
 */
export function getMobileDigitRange(country: PhoneCountry | null): { min: number; max: number } | null {
  const c = country || DEFAULT_COUNTRY;
  const iso = toIsoCountry(c.countryCode);
  if (!iso) {
    return null;
  }

  if (digitRangeCache.has(iso)) {
    return digitRangeCache.get(iso)!;
  }

  const exampleNational = getExampleNational(iso);
  const dialCode = getDigits(c.dialCode);

  let range: { min: number; max: number } | null = null;
  if (exampleNational) {
    let min: number | null = null;
    let max: number | null = null;
    for (let length = MIN_SWEEP_LENGTH; length <= MAX_SWEEP_LENGTH; length++) {
      const candidate = buildCandidate(exampleNational, length);
      const full = `+${dialCode}${candidate}`;
      if (isValidPhoneNumber(full, iso)) {
        if (min === null) {
          min = length;
        }
        max = length;
      }
    }
    range = min !== null && max !== null ? { min, max } : null;
  }

  digitRangeCache.set(iso, range);
  return range;
}

/**
 * Catches numbers that are format-valid per the numbering plan (right
 * length, allowed leading digit) but obviously not a real subscriber
 * number — a single digit repeated (6666666666) or a straight run
 * (1234567890, 9876543210, wrapping through 0). libphonenumber-js only
 * checks numbering-plan shape, so it accepts these; this is a separate,
 * deliberately generic (country-agnostic) sanity check on top of it.
 */
function isObviouslyFakeNumber(national: string): boolean {
  if (national.length < 4) {
    return false;
  }

  if (/^(\d)\1+$/.test(national)) {
    return true;
  }

  let ascending = true;
  let descending = true;
  for (let i = 1; i < national.length; i++) {
    const prev = Number(national[i - 1]);
    const curr = Number(national[i]);
    if (curr !== (prev + 1) % 10) ascending = false;
    if (curr !== (prev + 9) % 10) descending = false;
  }
  return ascending || descending;
}

/**
 * Validates a mobile number against its selected country's real numbering
 * plan — not just a digit count, but the actual mobile-number pattern
 * (leading digits included), via libphonenumber-js's `isValidPhoneNumber`.
 * If the country isn't recognized, falls back to a permissive 6-15 digit
 * check so a real number is never falsely rejected for lack of data.
 */
export function getMobileError(value: string, country: PhoneCountry | null): string {
  const c = country || DEFAULT_COUNTRY;
  const dc = getDigits(c.dialCode);
  const national = getNationalNumber(value, dc);

  if (!national) {
    return "Mobile number is required";
  }

  if (isObviouslyFakeNumber(national)) {
    return "Enter a valid mobile number";
  }

  const iso = toIsoCountry(c.countryCode);
  if (!iso) {
    return national.length >= 6 && national.length <= 15 ? "" : "Enter a valid mobile number";
  }

  if (isValidPhoneNumber(`+${dc}${national}`, iso)) {
    return "";
  }

  const range = getMobileDigitRange(c);
  if (range && (national.length < range.min || national.length > range.max)) {
    return range.min === range.max
      ? `Enter a valid ${range.max}-digit mobile number`
      : `Enter a valid mobile number (${range.min}-${range.max} digits)`;
  }

  return "Enter a valid mobile number";
}

/** Digit count of the number typed so far, excluding the dial code. */
export function countNationalDigits(value: string, country: PhoneCountry | null): number {
  const c = country || DEFAULT_COUNTRY;
  return getNationalNumber(value, c.dialCode).length;
}

/**
 * Builds the mobile value to store in form state from a react-phone-input-2
 * onChange event. Two things a raw pass-through of `value` doesn't do:
 *  - caps the typed number at the selected country's max mobile length
 *  - when the user switches country, clears out digits typed for the
 *    previous country instead of keeping a now-meaningless leftover mix
 */
export function computeMobileValue(
  rawValue: string,
  country: PhoneCountry,
  prevCountry: PhoneCountry | null
): {
  formattedValue: string;
  dialCode: string;
  countryCode: string;
  format?: string;
  countryChanged: boolean;
} {
  const dialCode = getDigits(country.dialCode);
  const countryCode = (country.countryCode || "").toLowerCase();
  const format = country.format;
  const countryChanged = prevCountry !== null && prevCountry.countryCode !== countryCode;

  if (countryChanged) {
    return { formattedValue: `+${dialCode} `, dialCode, countryCode, format, countryChanged };
  }

  const allDigits = getDigits(rawValue);
  let numberOnly = allDigits.startsWith(dialCode) ? allDigits.slice(dialCode.length) : allDigits;

  const range = getMobileDigitRange({ dialCode, countryCode, format });
  numberOnly = numberOnly.slice(0, range?.max ?? 15);

  return { formattedValue: `+${dialCode} ${numberOnly}`, dialCode, countryCode, format, countryChanged };
}

/**
 * react-phone-input-2's own key handling always appends to (or trims the
 * end of) the number and ignores the browser's text selection — so
 * select-all-then-retype or select-all-then-backspace silently leaves old
 * digits behind instead of replacing/clearing them, letting a stale digit
 * merge into whatever the user types next. This detects that case (a
 * Backspace/Delete/digit keystroke while a range of the field is selected)
 * so the caller can override it: clear the number or start it fresh with
 * the typed digit, exactly like a normal text input would.
 *
 * It also blocks a digit keystroke outright — returning "block" — once the
 * number already has the selected country's max digit count. This exists
 * because react-phone-input-2 doesn't reliably re-render a shorter
 * controlled `value` back into the visible `<input>` after the user has
 * typed past the real max (e.g. typing 12 digits for an 8-digit country
 * leaves "777 777 777 777" on screen even though the capped React state —
 * and thus what actually gets submitted — correctly holds only 8). Since
 * `preventDefault()` on keydown stops the character from ever reaching the
 * input, this keeps the displayed digits from ever exceeding the real
 * limit instead of just fixing it after the fact.
 */
export function getPhoneKeydownOverride(
  target: HTMLInputElement,
  key: string,
  value: string,
  country: PhoneCountry | null
): { digit: string } | "block" | null {
  const hasSelection =
    target.selectionStart !== null &&
    target.selectionEnd !== null &&
    target.selectionEnd - target.selectionStart > 0;

  if (hasSelection) {
    if (key === "Backspace" || key === "Delete") {
      return { digit: "" };
    }

    if (/^[0-9]$/.test(key)) {
      return { digit: key };
    }

    return null;
  }

  if (/^[0-9]$/.test(key)) {
    const range = getMobileDigitRange(country);
    if (range !== null && countNationalDigits(value, country) >= range.max) {
      return "block";
    }
  }

  return null;
}
