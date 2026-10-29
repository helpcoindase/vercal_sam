"use client";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ASSET_PREFIX } from "../../../../config";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { li } from "framer-motion/client";
import { link } from "fs";
interface TreatmentItem {
  icon: string;
  title: string;
  link: string;
}
interface TreatmentData {
  [key: string]: TreatmentItem[];
}

/* =========================
   Language Detection Config
========================= */
/* ------------ Country Code Sets ------------ */

const ARABIC_COUNTRY_CODES = new Set([
  "DZ",
  "BH",
  "TD",
  "KM",
  "DJ",
  "EG",
  "IQ",
  "JO",
  "KW",
  "LB",
  "LY",
  "MR",
  "SA",
  "AE",
  "QA",
  "OM",
  "YE",
  "SD",
  "TN",
  "MA",
]);

const FRENCH_COUNTRY_CODES = new Set([
  "FR",
  "BE",
  "CH",
  "CA",
  "LU",
  "MC",
  "CI",
  "SN",
  "ML",
  "NE",
  "TG",
  "BF",
  "BJ",
  "CD",
  "CG",
  "GA",
  "CM",
]);

const GERMAN_COUNTRY_CODES = new Set(["DE", "AT", "CH", "LI", "LU"]);

const ITALIAN_COUNTRY_CODES = new Set(["IT", "CH", "SM", "VA"]);

const RUSSIAN_COUNTRY_CODES = new Set(["RU", "BY", "KG", "KZ", "TJ"]);

const SPANISH_COUNTRY_CODES = new Set([
  "ES",
  "MX",
  "AR",
  "CO",
  "CL",
  "PE",
  "VE",
  "EC",
  "UY",
  "PY",
  "BO",
  "CR",
  "PA",
  "SV",
  "HN",
  "NI",
  "GT",
  "DO",
  "CU",
]);

// ✅ ASIA → FORCE ENGLISH DEFAULT
const ASIA_COUNTRY_CODES = new Set([
  "IN",
  "CN",
  "JP",
  "KR",
  "TH",
  "VN",
  "MY",
  "SG",
  "ID",
  "PH",
  "BD",
  "PK",
  "LK",
  "NP",
  "MM",
  "KH",
  "LA",
  "MN",
  "IR",
  "AF",
]);

/* ------------ FINAL AUTO-DETECT FUNCTION ------------ */

function detectAutoLang(): string {
  if (typeof navigator === "undefined") return "en";

  const candidates =
    navigator.languages && navigator.languages.length
      ? navigator.languages
      : [navigator.language];

  const primary = candidates[0] || "en"; // e.g. en-IN, ar-SA, fr-FR
  const [langRaw, regionRaw] = primary.split("-");
  const lang = (langRaw || "").toLowerCase();
  const region = (regionRaw || "").toUpperCase();

  /* ✅ 1) ASIA → FORCE ENGLISH */
  if (region && ASIA_COUNTRY_CODES.has(region)) return "en";

  /* ✅ 2) REGION → LANGUAGE */
  if (region && ARABIC_COUNTRY_CODES.has(region)) return "ar";
  if (region && FRENCH_COUNTRY_CODES.has(region)) return "fr";
  if (region && GERMAN_COUNTRY_CODES.has(region)) return "de";
  if (region && ITALIAN_COUNTRY_CODES.has(region)) return "it";
  if (region && RUSSIAN_COUNTRY_CODES.has(region)) return "ru";
  if (region && SPANISH_COUNTRY_CODES.has(region)) return "es";

  /* ✅ 3) LANGUAGE FALLBACK */
  if (lang === "ar") return "ar";
  if (lang === "fr") return "fr";
  if (lang === "de") return "de";
  if (lang === "it") return "it";
  if (lang === "ru") return "ru";
  if (lang === "es") return "es";

  /* ✅ 4) FINAL DEFAULT */
  return "en";
}

/* =========================
   Language Button
========================= */

const LanguageButton = () => {
  const [selectedLang, setSelectedLang] = useState<string>("en"); // default: English / original

  // Generate possible cookie domains
  const getCookieDomains = (): string[] => {
    const host = window.location.hostname; // e.g. "www.samwarthika.co.in"
    const parts = host.split(".");
    const domains = new Set<string>();

    // current host
    domains.add(host);
    domains.add("." + host);

    if (parts.length >= 2) {
      const last2 = parts.slice(-2).join("."); // e.g. "co.in" or "samwarthika.in"
      domains.add(last2);
      domains.add("." + last2);
    }

    if (parts.length >= 3) {
      const last3 = parts.slice(-3).join("."); // e.g. "samwarthika.co.in"
      domains.add(last3);
      domains.add("." + last3);
    }

    return Array.from(domains);
  };

  const getCookieLang = () => {
    if (typeof document === "undefined") return "";
    const cookie = document.cookie
      .split("; ")
      .find((c) => c.startsWith("googtrans="));
    if (!cookie) return "";
    try {
      const raw = decodeURIComponent(cookie.split("=")[1]); // "/en/hi" or "/en/ar"
      const parts = raw.split("/");
      return parts[2] || "";
    } catch {
      return "";
    }
  };

  const setGoogTransCookie = (lang: string) => {
    const value = encodeURIComponent(`/en/${lang}`);
    const maxAge = 31536000; // 1 year

    // host-only
    document.cookie = `googtrans=${value};path=/;max-age=${maxAge}`;

    // all domain variants
    const domains = getCookieDomains();
    domains.forEach((domain) => {
      try {
        document.cookie = `googtrans=${value};path=/;domain=${domain};max-age=${maxAge}`;
      } catch {
        // ignore invalid domain attempts
      }
    });

    console.log("[GT] set googtrans to", `/en/${lang}`, "for domains", domains);
  };

  const clearGoogTransCookie = () => {
    const past = "Thu, 01 Jan 1970 00:00:00 GMT";

    // host-only
    document.cookie = `googtrans=;expires=${past};path=/;`;

    // all domain variants
    const domains = getCookieDomains();
    domains.forEach((domain) => {
      try {
        document.cookie = `googtrans=;expires=${past};path=/;domain=${domain};`;
      } catch {
        // ignore invalid domain attempts
      }
    });

    console.log("[GT] cleared googtrans for domains", domains);
  };

  /* ------------ Init: cookie or auto-detect ------------ */

  useEffect(() => {
    const cookieLang = getCookieLang();

    if (cookieLang) {
      // User already chose something before
      setSelectedLang(cookieLang);
      return;
    }

    // No cookie yet → auto-detect based on browser
    const autoLang = detectAutoLang();
    setSelectedLang(autoLang);

    if (autoLang !== "en") {
      setGoogTransCookie(autoLang);
      setTimeout(() => {
        window.location.reload();
      }, 100);
    }
  }, []);

  /* ------------ Manual change ------------ */

  const handleLanguageChange = (lang: string) => {
    if (!lang) return;

    setSelectedLang(lang);

    if (lang === "en") {
      clearGoogTransCookie();
    } else {
      setGoogTransCookie(lang);
    }

    setTimeout(() => {
      window.location.reload();
    }, 100);
  };

  // return (
  //   <div
  //     className="fixed max-[480px]:bottom-[64px] bottom-4 right-4 z-[9999] notranslate"
  //     translate="no">
  //     <div className="bg-white border border-gray-300 rounded-md shadow-md px-3 py-2 flex gap-2 cursor-pointer">
  //       <span className="text-[16px] font-medium m-0">🌐</span>

  //       <label className="sr-only" htmlFor="language-select">
  //         Choose Language
  //       </label>

  //       <select
  //         id="language-select"
  //         value={selectedLang}
  //         onChange={(e) => handleLanguageChange(e.target.value)}
  //         className="bg-transparent text-[16px] border-none outline-none cursor-pointer notranslate"
  //         translate="no">
  //         <option value="en">English</option>
  //         <option value="ar">Arabic</option>
  //         <option value="fr">French</option>
  //         <option value="de">German</option>
  //         <option value="it">Italian</option>
  //         <option value="ru">Russian</option>
  //         <option value="es">Spanish</option>
  //       </select>
  //     </div>
  //   </div>
  // );

  return (
    <div
      className="z-[9999] notranslate w-fit max-[1280px]:!block max-[1280px]:absolute max-[1280px]:right-0 max-[1280px]:bottom-[32%] max-[480px]:absolute max-[480px]:right-0 max-[480px]:bottom-[90px] "
      translate="no">
      <div className="bg-white border border-gray-300 rounded-md shadow-md px-3 py-2 flex gap-2 cursor-pointer">
        <span className="text-[16px] font-medium m-0">🌐</span>

        <label className="sr-only" htmlFor="language-select">
          Choose Language
        </label>

        <select
          id="language-select"
          aria-label="Select Language"
          value={selectedLang}
          onChange={(e) => handleLanguageChange(e.target.value)}
          className="bg-transparent text-[16px] border-none outline-none cursor-pointer notranslate text-[var(--primary)]"
          translate="no">
          <option value="en">English</option>
          <option value="ar">Arabic</option>
          <option value="fr">French</option>
          <option value="de">German</option>
          <option value="it">Italian</option>
          <option value="ml">Malayalam</option>
          <option value="ru">Russian</option>
          <option value="es">Spanish</option>
        </select>
      </div>
    </div>
  );
};
export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuClosed, setIsMenuClosed] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const handleMouseEnter = (menuName: string) => {
    setOpenDropdown(menuName);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };
  const toggleMenu = () => {
    setHasInteracted(true); // user interacted
    setIsMenuClosed(!isMenuClosed);
  };
  const pathname = usePathname();

  useEffect(() => {
    if (!isMenuClosed) {
      setIsMenuClosed(true);
    } // close on every path change
  }, [pathname]);
  const CloseToggle = () => {
    if (!isMenuClosed) {
      setIsMenuClosed(true);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [mblTreat, SetMblTreat] = useState(false);
  const mblTreatment = [
    {
      label: "Ayurveda Treatment",
      path: "/ayurvedic-treatment-in-kerala",
    },
    {
      label: "Panchakarma Treatment",
      path: "/panchakarma-treatment-in-kerala",
    },
    {
      label: "Arthritis Treatment",
      path: "/arthritis-ayurvedic-treatment-kerala",
    },
    {
      label: "Autism Treatment",
      path: "/best-ayurvedic-treatment-for-autism-in-kerala",
    },
    {
      label: "Cervical Spondylosis Treatment",
      path: "/cervical-spondylosis-treatment-kerala",
    },
    {
      label: "Disc Bulge Protrusion",
      path: "/ayurvedic-treatment-disc-bulge-kerala",
    },
    {
      label: "Dysmenorrhea Treatment",
      path: "/ayurvedic-treatment-for-menstrual-pain-in-kerala",
    },
    {
      label: "Gastroesophageal Reflux Disease Treatment",
      path: "/gastroesophageal-reflux-disease-treatment-in-kerala",
    },
    {
      label: "Hair Loss Treatment",
      path: "/ayurvedic-treatment-for-hair-loss-in-kerala",
    },
    {
      label: "Knee Pain Treatment",
      path: "/ayurvedic-treatment-for-knee-pain-in-kerala",
    },
    {
      label: "Lumbar Spondylosis Treatment",
      path: "/lumbar-spondylosis-ayurvedic-treatment-in-kerala",
    },
    {
      label: "Lower Back Pain",
      path: "/ayurvedic-treatment-for-lower-back-pain-in-kerala",
    },
    {
      label: "Monsoon Treatment",
      path: "/ayurveda-monsoon-treatment-in-kerala",
    },
    {
      label: "Parkinsons Ayurvedic Treatment",
      path: "/parkinsons-ayurvedic-treatment-in-kerala",
    },
    {
      label: "Psoriasis Ayurvedic Treatment",
      path: "/psoriasis-ayurvedic-treatment-in-kerala",
    },
    {
      label: "Post Natal Treatment",
      path: "/post-natal-ayurvedic-treatment-in-kerala",
    },
    {
      label: "Sinusitis Treatment",
      path: "/sinusitis-ayurvedic-treatment-in-kerala",
    },
    {
      label: "Sciatica Treatment",
      path: "/ayurvedic-treatment-for-sciatica-in-kerala",
    },
    {
      label: "Stroke Treatment",
      path: "/ayurvedic-stroke-treatment-in-kerala",
    },
    {
      label: "Stress Management",
      path: "/ayurvedic-treatment-for-stress-in-kerala",
    },
    {
      label: "Ulcerative Colitis Treatment",
      path: "/ulcerative-colitis-treatment-kerala",
    },
    {
      label: "Varicose Veins Treatment",
      path: "/ayurvedic-treatment-for-varicose-veins-kerala",
    },
    {
      label: "Weight Loss Treatment",
      path: "/weight-loss-ayurvedic-treatment-in-kerala",
    },
  ];

  const treatment: TreatmentData = {
    all: [
      {
        icon: "ayurvedic-treatment.svg",
        title: "Ayurveda Treatment",
        link: "ayurvedic-treatment-in-kerala",
      },
      {
        icon: "panchakarma.svg",
        title: "Panchakarma Treatment",
        link: "panchakarma-treatment-in-kerala",
      },
      {
        icon: "sinusitis.svg",
        title: "Sinusitis Treatment",
        link: "sinusitis-ayurvedic-treatment-in-kerala",
      },
      {
        icon: "autsim.svg",
        title: "Autism Treatment",
        link: "best-ayurvedic-treatment-for-autism-in-kerala",
      },
      {
        icon: "weight-loss-treatment.svg",
        title: "Weight Loss Treatment",
        link: "weight-loss-ayurvedic-treatment-in-kerala",
      },
      {
        icon: "monsoon-treatment.svg",
        link: "ayurveda-monsoon-treatment-in-kerala",
        title: "Monsoon Treatment",
      },
      {
        icon: "parkinson-disease.svg",
        link: "parkinsons-ayurvedic-treatment-in-kerala",
        title: "Parkinsons Ayurvedic Treatment",
      },
      {
        icon: "sciatica.svg",
        title: "Sciatica Treatment",
        link: "ayurvedic-treatment-for-sciatica-in-kerala",
      },
      {
        icon: "stroke-paralysis.svg",
        link: "ayurvedic-stroke-treatment-in-kerala",
        title: "Stroke Treatment",
      },
      {
        icon: "varicose-veins.svg",
        link: "ayurvedic-treatment-for-varicose-veins-kerala",
        title: "Varicose Veins Treatment",
      },
      {
        icon: "knee-pain.svg",
        link: "ayurvedic-treatment-for-knee-pain-in-kerala",
        title: "Knee Pain Treatment",
      },
      {
        icon: "post-natal-treatment.svg",
        link: "post-natal-ayurvedic-treatment-in-kerala",
        title: "Post Natal Treatment",
      },
      {
        icon: "cervical-spondylosis.svg",
        link: "cervical-spondylosis-treatment-kerala",
        title: "Cervical Spondylosis Treatment",
      },
      {
        icon: "psoriasis-ayurvedic-treatment.svg",
        link: "psoriasis-ayurvedic-treatment-in-kerala",
        title: "Psoriasis Ayurvedic Treatment",
      },
      {
        icon: "lumbar-spondylosis.svg",
        link: "lumbar-spondylosis-ayurvedic-treatment-in-kerala",
        title: "Lumbar Spondylosis Treatment",
      },
      {
        icon: "gastroesophageal-reflux.svg",
        link: "gastroesophageal-reflux-disease-treatment-in-kerala",
        title: "Gastroesophageal Reflux Disease Treatment",
      },
      {
        icon: "arthritis-treatment.svg",
        link: "arthritis-ayurvedic-treatment-kerala",
        title: "Arthritis Treatment",
      },
      {
        icon: "dysmenorrhea.svg",
        link: "ayurvedic-treatment-for-menstrual-pain-in-kerala",
        title: "Dysmenorrhea Treatment",
      },
      {
        icon: "ulcerative-colitis-treatment.svg",
        link: "ulcerative-colitis-treatment-kerala",
        title: "Ulcerative Colitis Treatment",
      },
      {
        icon: "disc-bulge.svg",
        title: "Disc Bulge Protrusion",
        link: "ayurvedic-treatment-disc-bulge-kerala",
      },
      {
        icon: "lower-back-pain.svg",
        title: "Lower Back Pain",
        link: "ayurvedic-treatment-for-lower-back-pain-in-kerala",
      },
      {
        icon: "stress-management.svg",
        title: "Stress Management",
        link: "ayurvedic-treatment-for-stress-in-kerala",
      },
      {
        icon: "hair-loss-treatment.svg",
        title: "Hair Loss Treatment",
        link: "ayurvedic-treatment-for-hair-loss-in-kerala",
      },
    ],
    a: [
      {
        icon: "ayurvedic-treatment.svg",
        title: "Ayurveda Treatment",
        link: "ayurvedic-treatment-in-kerala",
      },
      {
        icon: "arthritis-treatment.svg",
        title: "Arthritis Treatment",
        link: "arthritis-ayurvedic-treatment-kerala",
      },
      {
        icon: "autsim.svg",
        title: "Autism Treatment",
        link: "best-ayurvedic-treatment-for-autism-in-kerala",
      },
    ],
    c: [
      {
        icon: "cervical-spondylosis.svg",
        title: "Cervical Spondylosis Treatment",
        link: "cervical-spondylosis-treatment-kerala",
      },
    ],
    d: [
      {
        icon: "disc-bulge.svg",
        title: "Disc Bulge Protrusion",
        link: "ayurvedic-treatment-disc-bulge-kerala",
      },
      {
        icon: "dysmenorrhea.svg",
        title: "Dysmenorrhea Treatment",
        link: "ayurvedic-treatment-for-menstrual-pain-in-kerala",
      },
    ],
    g: [
      {
        icon: "gastroesophageal-reflux.svg",
        title: "Gastroesophageal Reflux Disease Treatment",
        link: "gastroesophageal-reflux-disease-treatment-in-kerala",
      },
    ],
    h: [
      {
        icon: "hair-loss-treatment.svg",
        title: "Hair Loss Treatment",
        link: "ayurvedic-treatment-for-hair-loss-in-kerala",
      },
    ],
    k: [
      {
        icon: "knee-pain.svg",
        title: "Knee Pain Treatment",
        link: "ayurvedic-treatment-for-knee-pain-in-kerala",
      },
    ],
    l: [
      {
        icon: "lumbar-spondylosis.svg",
        title: "Lumbar Spondylosis Treatment",
        link: "lumbar-spondylosis-ayurvedic-treatment-in-kerala",
      },
      {
        icon: "lower-back-pain.svg",
        title: "Lower Back Pain",
        link: "ayurvedic-treatment-for-lower-back-pain-in-kerala",
      },
    ],
    m: [
      {
        icon: "monsoon-treatment.svg",
        title: "Monsoon Treatment",
        link: "ayurveda-monsoon-treatment-in-kerala",
      },
    ],
    p: [
      {
        icon: "panchakarma.svg",
        title: "Panchakarma Treatment",
        link: "panchakarma-treatment-in-kerala",
      },
      {
        icon: "parkinson-disease.svg",
        title: "Parkinsons Ayurvedic Treatment",
        link: "parkinsons-ayurvedic-treatment-in-kerala",
      },
      {
        icon: "psoriasis-ayurvedic-treatment.svg",
        title: "Psoriasis Ayurvedic Treatment",
        link: "psoriasis-ayurvedic-treatment-in-kerala",
      },
      {
        icon: "post-natal-treatment.svg",
        title: "Post Natal Treatment",
        link: "post-natal-ayurvedic-treatment-in-kerala",
      },
    ],
    s: [
      {
        icon: "sinusitis.svg",
        title: "Sinusitis Treatment",
        link: "sinusitis-ayurvedic-treatment-in-kerala",
      },
      {
        icon: "sciatica.svg",
        title: "Sciatica Treatment",
        link: "ayurvedic-treatment-for-sciatica-in-kerala",
      },
      {
        icon: "stroke-paralysis.svg",
        title: "Stroke Treatment",
        link: "ayurvedic-stroke-treatment-in-kerala",
      },
      {
        icon: "stress-management.svg",
        title: "Stress Management",
        link: "ayurvedic-treatment-for-stress-in-kerala",
      },
    ],
    u: [
      {
        icon: "ulcerative-colitis-treatment.svg",
        title: "Ulcerative Colitis Treatment",
        link: "ulcerative-colitis-treatment-kerala",
      },
    ],
    v: [
      {
        icon: "varicose-veins.svg",
        title: "Varicose Veins Treatment",
        link: "ayurvedic-treatment-for-varicose-veins-kerala",
      },
    ],
    w: [
      {
        icon: "weight-loss-treatment.svg",
        title: "Weight Loss Treatment",
        link: "weight-loss-ayurvedic-treatment-in-kerala",
      },
    ],
  };

  const academics = [
    { name: "Course Calendar -2026", link: "/course/" },
    { name: "Course for Indian", link: "/course-for-indian/" },
    { name: "Courses for International", link: "/course-for-international/" },
  ];
  const moreInfo = [
    { name: "Insurance", link: "/insurance" },
    { name: "Blog", link: "/blog" },
  ];
  const about = [
    { name: "Overview", link: "/about-us#overview" },
    { name: "Vision & Mission", link: "/about-us#vision-mission" },
    { name: "Founder's Message", link: "/about-us#founder-message" },
    { name: "Our Journey", link: "/about-us#our-journey" },
    { name: "Our Doctors", link: "/our-doctors" },
    { name: "Client Testimonial", link: "/client-testimonials" },
    { name: "Doctors Talk", link: "/doctors-talk" },
    { name: "Accommodations & Facilities", link: "/facilities" },
  ];

  const department = [
    { name: "Ayur Physio", link: "/ayur-physio-treatment-in-kerala" },
    {
      name: "Ayurvedic Panchakarma",
      link: "/ayurvedic-panchakarma-treatment-in-kerala",
    },
    {
      name: "Yoga & Meditation",
      link: "/yoga-and-meditation-retreat-in-kerala",
    },
    { name: "Ayur Cosmetology", link: "/ayur-cosmetology-treatment-in-kerala" },
  ];

  const [alphabet, setAlphabet] = useState("all");
  const [all, setTrue] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (all == "true") {
        setTrue("notTrue"); // 👈 close menu on scroll
        setAlphabet("all");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [all]);

  return (
    <>
      <header
        className={`header  ${pathname == "/" && isSticky
          ? "sticky shadow-md"
          : "relative shadow-md"
          } ${pathname != "/" && isSticky ? "sticky" : ""
          } top-0 z-[999] bg-transparent `}>
        <div
          className={` top-0 ${pathname == "/" ? "fixed" : "relative  bg-[#fff]"
            } left-0 w-full h-[130px] z-[-1] transition-colors duration-300 max-[1280px]:h-[100px] ${pathname == "/" ? `${isSticky ? "bg-white shadow-md" : " "}` : ""
            }
      `}
        />
        {pathname == "/" && (
          <div className="fixed top-0 left-0 w-full h-[100px]">
            <div
              className={`relative h-full ${isSticky
                ? "bg-transparent"
                : " bg-gradient-to-b from-[rgba(0,0,0,0.65)] to-[rgba(0,0,0,0)]"
                }`}></div>
          </div>
        )}

        <div
          className={`w-[96%] min-[1400px]:w-[94%] 2xl:w-[90%] max-w-[125rem] ${pathname == "/" ? "fixed" : "fixed  bg-[#fff]"
            }  header-menu  top-[5px] left-1/2 -translate-x-1/2 grid grid-cols-[160px_auto] 2xl:grid-cols-[200px_auto]
      items-center py-[5px] xl:py-0 justify-between transition-colors duration-300
      ${pathname == "/"
              ? `${isSticky ? "text-black" : "text-white  "}`
              : "text-black"
            }
      ${hasInteracted && isMenuClosed ? "closed" : ""}`}>
          <div className="logo-div">
            {pathname == "/" && (
              <Link href="/">
                {!isSticky && (
                  <Image
                    src={`${ASSET_PREFIX}/assets/images/logo.svg`}
                    alt="Samwarthika"
                    className="w-[auto] h-[70px] 2xl:w-[160px] 2xl:h-[auto] invert-[1] "
                    width={250}
                    height={48}
                    unoptimized
                  />
                )}
                {isSticky && (
                  <Image
                    src={`${ASSET_PREFIX}/assets/images/samwarthika-footer-logo.webp`}
                    alt="Samwarthika Footer Logo"
                    className="w-[auto] h-[70px] 2xl:w-[160px] 2xl:h-[auto] ml-0 m-auto  max-sm:m-0"
                    width={236}
                    height={118}
                    unoptimized
                  />
                )}
              </Link>
            )}
            {pathname != "/" && (
              <Link href="/">
                <Image
                  src={`${ASSET_PREFIX}/assets/images/samwarthika-footer-logo.webp`}
                  alt="Samwarthika Footer Logo"
                  className="w-[140px] h-[auto] 2xl:w-[160px] 2xl:h-[auto] xl:w-[120px] ml-0 m-auto  max-sm:m-0"
                  width={236}
                  height={118}
                  unoptimized
                />
              </Link>
            )}
          </div>

          <nav className="menu-div-parent hidden xl:block">
            <ul className="menu-div flex items-center gap-[12px] min-[1350px]:gap-[16px] min-[1500px]:gap-[20px] 2xl:gap-[28px]">
              <li className="mprod relative shrink-0">
                <Link
                  href="/"
                  className="text-[16px] leading-[24px] font-medium h-[90px] flex items-center whitespace-nowrap transition duration-300 hover:text-[#e36300]
hover:font-semibold"
                  aria-label="home">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="m16 8.41l-4.5-4.5L4.41 11H6v8h3v-6h5v6h3v-8h1.59L17 9.41V6h-1zM2 12l9.5-9.5L15 6V5h3v4l3 3h-3v8h-5v-6h-3v6H5v-8z"
                    />
                  </svg>
                </Link>
              </li>
              <li
                className="mprod group/about relative"
                onMouseEnter={() => handleMouseEnter("about")}
                onMouseLeave={handleMouseLeave}>
                <Link
                  href="/about-us"
                  className="text-[15px] 2xl:text-[16px] leading-[24px] font-medium h-[90px] flex items-center whitespace-nowrap transition duration-300 hover:text-[#e36300]
hover:font-semibold ">
                  About Us
                </Link>
                <div
                  className={`absolute top-[90px] w-[300px] -left-[100px] origin-top transition-all duration-300 ${openDropdown === "about" ? "scale-y-100" : "scale-y-0"
                    }`}>
                  <div
                    className=" transition-all duration-300 h-[auto] bg-[#fff] shadow-md p-[25px]
                ">
                    <div className="flex flex-col ">
                      {about.map((item, index) => (
                        <Link
                          key={index}
                          href={item.link}
                          scroll={false}
                          onClick={() => setOpenDropdown(null)}
                          className="grid  rounded-[25px] border border-transparent hover:border-[#c3efd2] items-center transition-all duration-300 hover:bg-[#effff5] p-[8px_12px] text-[#000]">
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </li>

              <li className="group">
                <Link
                  href="/treatments"
                  className="text-[15px] 2xl:text-[16px] leading-[24px] font-medium h-[90px] flex items-center whitespace-nowrap transition duration-300 hover:text-[#e36300]
hover:font-semibold ">
                  Treatments
                </Link>
                <div
                  className={`fixed  scale-y-0 top-[90px] w-[100%]  left-[0px] right-[0px]   origin-top ${all == "true" ? "!scale-100" : ""
                    } group-hover:scale-y-100`}>
                  <div
                    className="px-[5%] max-2xl:px-[3%] transition-all duration-300 h-[auto] bg-[#fff] shadow-md
                  p-[40px] pt-[8px]
                ">
                    <div className="border-b  border-[#304a1070] pb-[15px] flex justify-between  mb-[20px] max-2xl:mb-[15px] max-2xl:pb-[15px]">
                      <p className="text-[30px] leading-[36px] text-[var(--secondary)] max-2xl:text-[28px] max-2xl:leading-[34px]">
                        Treatments
                      </p>
                    </div>

                    <motion.div
                      className="grid grid-cols-4 gap-[10px]"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}>
                      {treatment[alphabet] && treatment[alphabet].length > 0 ? (
                        treatment[alphabet].map((item, index) => (
                          <Link
                            key={index}
                            href={`/${item.link}`}
                            onClick={() => setTrue("")}
                            className="grid grid-cols-[50px_auto] gap-[10px] rounded-[25px] border border-transparent hover:border-[#c3efd2] items-center 
                            transition-all duration-300 hover:bg-[#effff5] p-[5px_10px] 2xl:p-[8px_10px]">
                            <Image
                              src={`${ASSET_PREFIX}/assets/images/${item.icon}`}
                              width={50}
                              height={50}
                              alt={item.title}
                              unoptimized
                              className="sepia w-[35px] 2xl:w-[50px] h-auto"
                            />
                            <p className="text-[16px] text-[#000]">
                              {item.title}
                            </p>
                          </Link>
                        ))
                      ) : (
                        <div className="text-center text-gray-500 h-full flex justify-center items-center">
                          <p className="text-[20px] leading-[24px]">
                            No treatments available for{" "}
                            <span className="uppercase text-[#e36300] font-semibold">
                              {alphabet}
                            </span>
                            .
                          </p>
                        </div>
                      )}
                    </motion.div>
                    <div className="a-tab flex gap-[30px]  mt-[20px] pt-[20px] max-2xl:mt-[15px] max-2xl:pt-[15px] border-t  border-[#304a1070]">
                      {Object.keys(treatment).map((letter) => (
                        <button
                          key={letter}
                          className={`text-[18px] leading-[20px] max-2xl:text-[16px] max-2xl:leading-[18px] flex justify-center overflow-hidden items-center h-[40px] w-[40px] max-2xl:w-[30px] max-2xl:h-[30px] rounded-[50%] bg-[#f2f2f2] transition-all duration-500 hover:bg-[var(--secondary)] hover:text-[#fff] ${alphabet == letter
                            ? "bg-[var(--secondary)] text-[#fff]"
                            : "bg-[#f2f2f2] text-[#000]"
                            } ${letter == "all" ? "capitalize" : "uppercase"}
                          ${treatment[letter].length > 0
                              ? "cursor-pointer"
                              : "cursor-default opacity-40 hover:bg-[#f2f2f2]! hover:text-[#000]!"
                            }
                          `}
                          onClick={() => {
                            setAlphabet(`${letter}`);
                            setTrue("true");
                          }}>
                          {letter}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </li>
              <li
                className="mprod group/department relative"
                onMouseEnter={() => handleMouseEnter("department")}
                onMouseLeave={handleMouseLeave}>
                <Link
                  href="/departments"
                  className="text-[15px] 2xl:text-[16px] leading-[24px] font-medium h-[90px] flex items-center whitespace-nowrap transition duration-300 hover:text-[#e36300]
hover:font-semibold ">
                  Departments
                </Link>
                <div
                  className={`absolute top-[90px] w-[300px] -left-[100px] origin-top transition-all duration-300 ${openDropdown === "department" ? "scale-y-100" : "scale-y-0"
                    }`}>
                  <div
                    className=" transition-all duration-300 h-[auto] bg-[#fff] shadow-md p-[25px]
                ">
                    <div className="flex flex-col ">
                      {department.map((item, index) => (
                        <Link
                          key={index}
                          href={item.link}
                          scroll={false}
                          onClick={() => setOpenDropdown(null)}
                          className="grid  rounded-[25px] border border-transparent hover:border-[#c3efd2] items-center transition-all duration-300 hover:bg-[#effff5] p-[8px_12px] text-[#000]">
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <Link
                  href="/medical-tourism"
                  className="text-[15px] 2xl:text-[16px] leading-[24px] font-medium h-[90px] flex items-center whitespace-nowrap transition duration-300 hover:text-[#e36300]
hover:font-semibold ">
                  Medical Tourism
                </Link>
              </li>
              <li
                className="group/academic relative max-[1450px]:hidden"
                onMouseEnter={() => handleMouseEnter("academic")}
                onMouseLeave={handleMouseLeave}>
                <Link
                  href="/course/"
                  className="text-[15px] 2xl:text-[16px] leading-[24px] font-medium h-[90px] flex items-center whitespace-nowrap transition duration-300 hover:text-[#e36300]
hover:font-semibold ">
                  Academics
                </Link>
                <div
                  className={`absolute top-[90px] w-[300px] -left-[100px] origin-top transition-all duration-300 ${openDropdown === "academic" ? "scale-y-100" : "scale-y-0"
                    }`}>
                  <div className="bg-white shadow-md p-[25px] ">
                    {academics.map((item, index) => (
                      <Link
                        key={index}
                        href={item.link}
                        onClick={() => setOpenDropdown(null)}
                        className="grid  rounded-[25px] border border-transparent hover:border-[#c3efd2] items-center transition-all duration-300 hover:bg-[#effff5] p-[8px_12px] text-[#000]">
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </li>
              <li
                className="group/more relative"
                onMouseEnter={() => handleMouseEnter("moreInfo")}
                onMouseLeave={handleMouseLeave}>
                <div
                  className="text-[15px] 2xl:text-[16px] leading-[24px] font-medium h-[90px] flex items-center whitespace-nowrap transition duration-300 hover:text-[#e36300] hover:font-semibold cursor-pointer">
                  More Info
                </div>
                <div
                  className={`absolute top-[90px] w-[220px] -left-[40px] origin-top transition-all duration-300 ${
                    openDropdown === "moreInfo" ? "scale-y-100" : "scale-y-0"
                  }`}>
                  <div className="bg-white shadow-md p-[20px] rounded-2xl border border-gray-100">
                    <div className="flex flex-col gap-1">
                      {moreInfo.map((item, index) => (
                        <Link
                          key={index}
                          href={item.link}
                          onClick={() => setOpenDropdown(null)}
                          className="grid rounded-[25px] border border-transparent hover:border-[#c3efd2] items-center transition-all duration-300 hover:bg-[#effff5] p-[8px_14px] text-[#000] text-[15px] font-medium hover:text-[var(--primary)]">
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </li>

              <li className="flex gap-[8px] min-[1500px]:gap-[12px] 2xl:gap-[18px] items-center shrink-0">
                {pathname == "/" && (
                  <Link
                    href="/contact-us"
                    className="book-app-head shrink-0"
                    data-cta="book-appoinment">
                    <div
                      className={`2xl:mr-[10px] text-[14px] 2xl:text-[16px] leading-[20px] 2xl:leading-[24px] whitespace-nowrap border-[1px] border-[var(--primary)] ${!isSticky
                        ? "text-[var(--primary)] bg-[#fff] "
                        : "text-[#fff]  bg-[#304A10]  hover:bg-[#fff] hover:text-[var(--primary)]"
                        }  py-[7px] 2xl:py-[8px] h-[fit-content] px-[12px] 2xl:px-[20px] rounded-[50px] font-normal text-center items-center hover:bg-[#304A10] transition duration-300 hover:text-[#fff]`}>
                      Book Appointment
                    </div>
                  </Link>
                )}
                {pathname != "/" && (
                  <Link
                    href="/contact-us"
                    className="book-app-head shrink-0"
                    data-cta="book-appoinment">
                    <div
                      className={`2xl:mr-[10px] text-[14px] 2xl:text-[16px] leading-[20px] 2xl:leading-[24px] whitespace-nowrap border-[1px] border-[var(--primary)] text-[#fff] bg-[#304A10] hover:bg-[#fff] hover:text-[var(--primary)] py-[7px] 2xl:py-[8px] h-[fit-content] px-[12px] 2xl:px-[20px] rounded-[50px] font-normal text-center items-center hover:bg-[#304A10] transition duration-300 hover:text-[#fff]`}>
                      Book Appointment
                    </div>
                  </Link>
                )}
                <Link href="/nabh" className="shrink-0">
                  <Image
                    src={`${ASSET_PREFIX}/assets/images/nabh.webp`}
                    alt="NABH"
                    className="w-[45px] min-[1500px]:w-[52px] 2xl:w-[70px] h-auto"
                    width={50}
                    height={50}
                    unoptimized
                  />
                </Link>
                <div className="bg-[#fff] rounded-[50%] overflow-hidden shrink-0">
                  <Image
                    src={`${ASSET_PREFIX}/assets/images/ayur-diamond.webp`}
                    alt="Ayur Diamond"
                    className="w-[45px] min-[1500px]:w-[52px] 2xl:w-[70px] h-auto"
                    width={60}
                    height={60}
                    unoptimized
                  />
                </div>
                <div className="flex flex-col items-center justify-center shrink-0 w-[65px] min-[1500px]:w-[75px] 2xl:w-[110px] 2xl:mb-[-20px] xl:mb-[-15px]">
                  <div className="bg-[#fff] flex justify-center rounded-full overflow-hidden">
                    <Image
                      src={`${ASSET_PREFIX}/assets/images/bharat-petroleum.webp`}
                      alt="Bharat Petroleum"
                      className="w-[36px] min-[1500px]:w-[42px] 2xl:w-[60px] h-auto"
                      width={75}
                      height={75}
                      unoptimized
                    />
                  </div>

                  <div className="mt-0.5 text-center">
                    <p className="text-[10px] 2xl:text-[11px] font-semibold leading-tight whitespace-nowrap">
                      BPCL empaneled
                    </p>
                  </div>
                </div>

              </li>
            </ul>
          </nav>

          {/* Hamburger menu */}
          <div
            className={`side-menu-close transition-all duration-300 cursor-pointer relative h-[40px] w-[40px] 2xl:h-[50px] 2xl:w-[50px] flex flex-col justify-center leading-normal rounded-full px-[1vw] bg-[#374d1f] rounded-[50px] items-center block xl:hidden ${isMenuClosed ? "closed" : "opened"
              } group`}
            onClick={toggleMenu}>
            <span className="bg-[#fff] h-[2px] w-[20px] 2xl:w-[26px]  group-[.opened]:rotate-[45deg] group-[.opened]:translate-x-[0px] transition duration-300 group-[.opened]:translate-y-[6px] "></span>
            <span className="bg-[#fff] h-[2px] w-[20px] 2xl:w-[26px] my-[5px] group-[.opened]:opacity-0 transition duration-300"></span>
            <span className="bg-[#fff] h-[2px] w-[20px] 2xl:w-[26px] group-[.opened]:rotate-[-45deg] group-[.opened]:translate-x-[-1px] transition duration-300 group-[.opened]:translate-y-[-8px]"></span>
          </div>

          {/* Side Navigation Menu */}
        </div>
        <nav
          className={`sidemenu fixed z-[1000]  w-[450px]  h-[100vh] min-h-[100vh] bg-[#fff] top-[80px] right-[0px] py-[20px] px-[50px]  max-xl:px-[30px]  max-sm:w-[100%]  transition duration-300  shadow-[-5px_6px_5px_0px_#a7a7a740]     [.opened]:translate-x-[0px]  group  transition duration-300  block xl:hidden  h-[100vh]  ${isMenuClosed ? "translate-x-[100%]" : "translate-x-[0px]"
            }`}>
          <div className="flex h-[90%]  flex-col justify-between  pb-[30px] overflow-scroll">
            <ul>
              <li>
                <Link
                  onClick={CloseToggle}
                  href="/"
                  className="text-[#000] text-[16px] xl:text-[16px] 2xl:text-[18px] leading-[24px] 2xl:leading-[26px] font-medium py-[10px] flex items-center   border-[#6161617d]  border-b-[1px]">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  onClick={CloseToggle}
                  href="/about-us"
                  className="text-[#000] text-[16px] xl:text-[16px] 2xl:text-[18px] leading-[24px] 2xl:leading-[26px] font-medium py-[10px] flex items-center   border-[#6161617d]  border-b-[1px] ">
                  About us
                </Link>
              </li>
              <li>
                <div className="flex gap-[20px] justify-between  items-center border-[#6161617d]  border-b-[1px]">
                  <Link
                    onClick={CloseToggle}
                    href="/treatments"
                    className="text-[#000] text-[16px] xl:text-[16px] 2xl:text-[18px] leading-[24px] 2xl:leading-[26px] font-medium py-[10px] flex items-center w-full    ">
                    Treatments
                  </Link>
                  <button
                    aria-label="Button"
                    onClick={() => SetMblTreat((prev) => !prev)}
                    className="flex items-center gap-2 w-[50px] justify-center  cursor-pointer">
                    {mblTreat ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        viewBox="0 0 1024 1024">
                        <path
                          fill="#000"
                          d="M192.128 683.136L512 371.328l319.872 311.808a30.59 30.59 0 0 0 42.752 0a29.12 29.12 0 0 0 0-41.6L534.336 309.76a32 32 0 0 0-44.672 0L149.376 641.472a29.12 29.12 0 0 0 0 41.728a30.59 30.59 0 0 0 42.752-0.064z"
                        />
                      </svg> // Arrow Up
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        viewBox="0 0 1024 1024">
                        <path
                          fill="#000"
                          d="M831.872 340.864L512 652.672 192.128 340.864a30.59 30.59 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6l340.288 331.776a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.59 30.59 0 0 0-42.752 0z"
                        />
                      </svg> // Arrow Down
                    )}
                  </button>
                </div>
                <div
                  className={`${mblTreat == true
                    ? "max-h-[1000px]  overflow-visible opacity-100 pt-[10px]"
                    : "max-h-0  overflow-hidden  opacity-0"
                    }    transition-all duration-500  `}>
                  {mblTreatment.map((item, index) => (
                    <Link
                      key={index}
                      onClick={() => {
                        CloseToggle();
                        SetMblTreat((prev) => !prev);
                      }}
                      href={`${item.path}`}
                      className="text-[#000] text-[16px] leading-[22px] font-medium p-[5px_10px] flex items-center">
                      {item.label}
                    </Link>
                  ))}
                </div>
              </li>
              <li>
                <Link
                  onClick={CloseToggle}
                  href="/our-doctors"
                  className="text-[#000] text-[16px] xl:text-[16px] 2xl:text-[18px] leading-[24px] 2xl:leading-[26px] font-medium py-[10px] flex items-center   border-[#6161617d]  border-b-[1px] ">
                  Our Doctors
                </Link>
              </li>
              <li>
                <Link
                  onClick={CloseToggle}
                  href="/departments"
                  className="text-[#000] text-[16px] xl:text-[16px] 2xl:text-[18px] leading-[24px] 2xl:leading-[26px] font-medium py-[10px] flex items-center   border-[#6161617d]  border-b-[1px] ">
                  Departments
                </Link>
              </li>
              <li>
                <Link
                  onClick={CloseToggle}
                  href="/course"
                  className="text-[#000] text-[16px] xl:text-[16px] 2xl:text-[18px] leading-[24px] 2xl:leading-[26px] font-medium py-[10px] flex items-center   border-[#6161617d]  border-b-[1px] ">
                  Academics
                </Link>
              </li>
              <li>
                <Link
                  onClick={CloseToggle}
                  href="/insurance"
                  className="text-[#000] text-[16px] xl:text-[16px] 2xl:text-[18px] leading-[24px] 2xl:leading-[26px] font-medium py-[10px] flex items-center   border-[#6161617d]  border-b-[1px] ">
                  Insurance
                </Link>
              </li>
              <li>
                <Link
                  onClick={CloseToggle}
                  href="/blog"
                  className="text-[#000] text-[16px] xl:text-[16px] 2xl:text-[18px] leading-[24px] 2xl:leading-[26px] font-medium py-[10px] flex items-center   border-[#6161617d]  border-b-[1px] ">
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  onClick={CloseToggle}
                  href="/contact-us"
                  className="text-[#000] text-[16px] xl:text-[16px] 2xl:text-[18px] leading-[24px] 2xl:leading-[26px] font-medium py-[10px] flex items-center   border-[#6161617d]  border-b-[1px] ">
                  Contact us
                </Link>
              </li>
            </ul>

            <div className="relative">
              <div className="mt-[15px] pl-[8px]  max-sm:mb-[50px]">
                <p className="text-[#304A10]  text-[18px] font-semibold mb-[10px]">
                  Follow us on
                </p>
                <div className="flex gap-[25px] items-center mt-[30px] ">
                  <ul className="flex sm:gap-[25px] gap-5 max-[480px]:w-full sm:justify-start justify-between  items-center max-sm:pr-[4px]">
                    <li>
                      <Link
                        href="https://in.linkedin.com/company/samwarthika-ayurveda-hospital"
                        target="_blank"
                        aria-label="Linked In"
                        className="group">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="23px"
                          height="23px"
                          viewBox="0 0 24 24"
                          className="fill-current text-[#304A10] group-hover:text-[#e36300] transition-colors duration-300">
                          <path d="M20.47 2H3.53a1.45 1.45 0 0 0-1.47 1.43v17.14A1.45 1.45 0 0 0 3.53 22h16.94a1.45 1.45 0 0 0 1.47-1.43V3.43A1.45 1.45 0 0 0 20.47 2M8.09 18.74h-3v-9h3ZM6.59 8.48a1.56 1.56 0 1 1 0-3.12a1.57 1.57 0 1 1 0 3.12m12.32 10.26h-3v-4.83c0-1.21-.43-2-1.52-2A1.65 1.65 0 0 0 12.85 13a2 2 0 0 0-.1.73v5h-3v-9h3V11a3 3 0 0 1 2.71-1.5c2 0 3.45 1.29 3.45 4.06Z" />
                        </svg>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.youtube.com/channel/UCVMqijUl9EqRzKt7W0ye-2g"
                        target="_blank"
                        aria-label="Youtube"
                        className="group">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="23px"
                          height="23px"
                          viewBox="0 0 1024 1024"
                          className="fill-current text-[#304A10] group-hover:text-[#e36300] transition-colors duration-300">
                          <path d="M941.3 296.1a112.3 112.3 0 0 0-79.2-79.3C792.2 198 512 198 512 198s-280.2 0-350.1 18.7A112.12 112.12 0 0 0 82.7 296C64 366 64 512 64 512s0 146 18.7 215.9c10.3 38.6 40.7 69 79.2 79.3C231.8 826 512 826 512 826s280.2 0 350.1-18.8c38.6-10.3 68.9-40.7 79.2-79.3C960 658 960 512 960 512s0-146-18.7-215.9M423 646V378l232 133z" />
                        </svg>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.facebook.com/Samwarthika/"
                        target="_blank"
                        className="group"
                        aria-label="Facebook">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="23px"
                          height="23px"
                          viewBox="0 0 16 16"
                          className="fill-current text-[#304A10] group-hover:text-[#e36300] transition-colors duration-300">
                          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131c.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                        </svg>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.instagram.com/samwarthika/"
                        target="_blank"
                        className="group"
                        aria-label="instagram">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="23px"
                          height="23px"
                          viewBox="0 0 16 16"
                          className="fill-current text-[#304A10] group-hover:text-[#e36300] transition-colors duration-300">
                          <path d="M8 5.67C6.71 5.67 5.67 6.72 5.67 8S6.72 10.33 8 10.33S10.33 9.28 10.33 8S9.28 5.67 8 5.67M15 8c0-.97 0-1.92-.05-2.89c-.05-1.12-.31-2.12-1.13-2.93c-.82-.82-1.81-1.08-2.93-1.13C9.92 1 8.97 1 8 1s-1.92 0-2.89.05c-1.12.05-2.12.31-2.93 1.13C1.36 3 1.1 3.99 1.05 5.11C1 6.08 1 7.03 1 8s0 1.92.05 2.89c.05 1.12.31 2.12 1.13 2.93c.82.82 1.81 1.08 2.93 1.13C6.08 15 7.03 15 8 15s1.92 0 2.89-.05c1.12-.05 2.12-.31 2.93-1.13c.82-.82 1.08-1.81 1.13-2.93c.06-.96.05-1.92.05-2.89m-7 3.59c-1.99 0-3.59-1.6-3.59-3.59S6.01 4.41 8 4.41s3.59 1.6 3.59 3.59s-1.6 3.59-3.59 3.59m3.74-6.49c-.46 0-.84-.37-.84-.84s.37-.84.84-.84s.84.37.84.84a.8.8 0 0 1-.24.59a.8.8 0 0 1-.59.24Z" />
                        </svg>
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="https://x.com/samwarthika"
                        target="_blank"
                        className="group"
                        aria-label="x">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="23px"
                          height="23px"
                          viewBox="0 0 512 512"
                          className="fill-current text-[#304A10] group-hover:text-[#e36300] transition-colors duration-300">
                          <path d="M389.2 48h70.6L305.6 224.2L487 464H345L233.7 318.6L106.5 464H35.8l164.9-188.5L26.8 48h145.6l100.5 132.9zm-24.8 373.8h39.1L151.1 88h-42z" />
                        </svg>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://whatsapp.com/channel/0029VbD4T3aKwqSZ4krxwK3j"
                        target="_blank"
                        className="group"
                        aria-label="whatsapp">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20px"
                          height="20px"
                          viewBox="0 0 16 16"
                          className="fill-current text-[#304A10] group-hover:text-[#e36300] transition-colors duration-300">
                          <path d="M13.95 4.24C11.86 1 7.58.04 4.27 2.05C1.04 4.06 0 8.44 2.09 11.67l.17.26l-.7 2.62l2.62-.7l.26.17c1.13.61 2.36.96 3.58.96c1.31 0 2.62-.35 3.75-1.05c3.23-2.1 4.19-6.39 2.18-9.71Zm-1.83 6.74c-.35.52-.79.87-1.4.96c-.35 0-.79.17-2.53-.52c-1.48-.7-2.71-1.84-3.58-3.15c-.52-.61-.79-1.4-.87-2.19c0-.7.26-1.31.7-1.75c.17-.17.35-.26.52-.26h.44c.17 0 .35 0 .44.35c.17.44.61 1.49.61 1.58c.09.09.05.76-.35 1.14c-.22.25-.26.26-.17.44c.35.52.79 1.05 1.22 1.49c.52.44 1.05.79 1.66 1.05c.17.09.35.09.44-.09c.09-.17.52-.61.7-.79c.17-.17.26-.17.44-.09l1.4.7c.17.09.35.17.44.26c.09.26.09.61-.09.87Z" />
                        </svg>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                {/* Language Button */}
                <LanguageButton />
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
