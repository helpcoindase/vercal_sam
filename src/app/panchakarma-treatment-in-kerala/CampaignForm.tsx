"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import PhoneInput, { CountryData } from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { ASSET_PREFIX } from "../../../config";
import {
  getMobileError,
  computeMobileValue,
  getPhoneKeydownOverride,
  type PhoneCountry,
} from "../../lib/validatePhone";
import { submitLeadForm } from "../../lib/formAction";

const ReCAPTCHA = dynamic(() => import("react-google-recaptcha"), {
  ssr: false,
});

// ------------ Types ------------
interface FormDataState {
  website: string;
  useragent: string;
  starttime: string;
  enquiry_date: string;
  enquiry_month: string;
  enquiry_time: string;
  ipaddress: string;
}

interface FormFieldsState {
  checkvalue: string;
  name: string;
  email: string;
  phone: string;
  country: string;
  city: string;
  treatment: string;
  message: string;
}

interface ApiResponse {
  status: string;
  message?: string;
}

// ------------ Component ------------
const CampaignForm: React.FC = () => {
  const [formData, setFormData] = useState<FormDataState>({
    website: "",
    useragent: "",
    starttime: "",
    enquiry_date: "",
    enquiry_month: "",
    enquiry_time: "",
    ipaddress: "",
  });

  const [formFields, setFormFields] = useState<FormFieldsState>({
    checkvalue: "",
    name: "",
    email: "",
    phone: "",
    country: "India",
    city: "",
    treatment: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  const [mobileError, setMobileError] = useState("");
  const [mobileTouched, setMobileTouched] = useState(false);
  const prevCountryRef = useRef<PhoneCountry | null>(null);
  const siteKey = "6Lec2UkqAAAAACDTI9r-Zxooqn8qGAh7SemO9RA4";
  const ENABLE_RECAPTCHA = true;

  useEffect(() => {
    const fetchIp = async () => {
      try {
        const res = await fetch("https://api.ipify.org?format=json");
        const data = await res.json();

        const now = new Date();
        const optionsDate: Intl.DateTimeFormatOptions = {
          timeZone: "Asia/Kolkata",
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        };
        const optionsTime: Intl.DateTimeFormatOptions = {
          timeZone: "Asia/Kolkata",
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        };

        const enquiry_date = new Intl.DateTimeFormat("en-GB", optionsDate)
          .format(now)
          .split("/")
          .join("-");
        const enquiry_time = new Intl.DateTimeFormat(
          "en-IN",
          optionsTime,
        ).format(now);

        const pad = (n: number) => String(n).padStart(2, "0");
        const starttime = `${now.getFullYear()}-${pad(
          now.getMonth() + 1,
        )}-${pad(now.getDate())} ${pad(now.getHours())}:${pad(
          now.getMinutes(),
        )}:${pad(now.getSeconds())}`;

        const dateParts = enquiry_date.split("-");
        let enquiry_month = "";
        if (dateParts.length === 3) {
          enquiry_month = `${dateParts[1]}-${dateParts[2]}`;
        }

        setFormData({
          website: "www.samwarthika.com",
          useragent: navigator.userAgent,
          starttime,
          enquiry_date,
          enquiry_time,
          enquiry_month,
          ipaddress: data.ip,
        });
      } catch (err) {
        console.error("Failed to fetch IP:", err);
      }
    };

    fetchIp();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormFields((prev) => ({ ...prev, [name]: value }));
  };

  const handleCaptchaChange = (value: string | null) => {
    setCaptchaValue(value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const mobileValidationError = getMobileError(
      formFields.phone,
      prevCountryRef.current
    );
    if (mobileValidationError) {
      setMobileTouched(true);
      setMobileError(mobileValidationError);
      return;
    }
    
    const isLocalhost =
      typeof window !== "undefined" &&
      window.location.hostname === "localhost";
       
    if (ENABLE_RECAPTCHA && !isLocalhost && !captchaValue) {
      alert("Please complete the CAPTCHA.");
      return;
    }

    setIsLoading(true);
    const fullData = {
      ...formFields,
      ...formData,
      "g-recaptcha-response": captchaValue,
    };

    try {
      const result = await submitLeadForm(fullData, { redirectUrl: "/thanks/" });
      if (!result.success && result.message) {
        alert(result.message);
      }
    } catch (error) {
      console.error("Form submission failed:", error);
      alert("Network error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <section className="">
        <div className="w-[85%] m-auto max-2xl:w-[100%] max-w-[120rem]">
          <div className="mt-[30px] mb-[30px] w-[90%] m-auto grid grid-cols-1 justify-between max-xxl:w-[100%] max-lg:grid-cols-1 max-lg:gap-[5px] max-md:gap-[35px] max-[991px]:mb-[30px] max-[991px]:!mt-[0px]">
            <form
              onSubmit={handleSubmit}
              className="bg-[#e9f9d4] p-[30px_20px] ">
              {/* <h3
                className="text-[#304A10] font-[source,serief4] mb-[8px] mt-[0px] text-[60px] leading-[65px] max-2xl:text-[52px]
                leading-[58px] max-xl:text-[46px] max-xl:leading-[50px] max-lg:text-[40px] max-lg:leading-[46px] max-mlg:text-[38px] max-mlg:leading-[42px] font-normal text-start w-[fit-content]"
              >
                Let&apos;s consult with a Doctor
                
              </h3>
              <p className="text-[#80847b] xxl:text-[20px] xxl:leading-[26px] text-[18px] leading-[24px] max-lg:text-[16px] max-lg:leading-[22px] font-medium">
                Please fill out the form below to submit your requirements
              </p> */}

              <div className="my-[0]  ">
                <div className="grid grid-cols-2 gap-[30px] max-xl:gap-[20px] max-sm:grid-cols-1">
                  {/* Left Column */}
                  <div className="flex flex-col gap-3 sm:gap-6">
                    <div>
                      <input
                        type="text"
                        name="name"
                        value={formFields.name}
                        onChange={handleChange}
                        className="w-full border-b border-gray-400 bg-transparent outline-none px-3 py-3 focus:border-[#304A10] text-[#80847b] placeholder-[#80847b]"
                        placeholder="Name*"
                        required
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        name="email"
                        value={formFields.email}
                        onChange={handleChange}
                        className="w-full border-b border-gray-400 bg-transparent outline-none px-3 py-3 focus:border-[#304A10] text-[#80847b] placeholder-[#80847b]"
                        placeholder="Email*"
                        required
                      />
                    </div>
                    <div className="campaign-phone-field">
                      <PhoneInput
                        country="in"
                        value={formFields.phone || ""}
                        onChange={(value: string, country: CountryData) => {
                          const {
                            formattedValue,
                            dialCode,
                            countryCode,
                            format,
                            countryChanged,
                          } = computeMobileValue(
                            value,
                            country,
                            prevCountryRef.current
                          );
                          prevCountryRef.current = {
                            dialCode,
                            countryCode,
                            format,
                          };

                          setFormFields((prev) => ({
                            ...prev,
                            phone: formattedValue,
                            country: country.name || prev.country,
                          }));

                          if (countryChanged) {
                            setMobileTouched(false);
                            setMobileError("");
                          } else if (mobileTouched) {
                            setMobileError(
                              getMobileError(
                                formattedValue,
                                prevCountryRef.current
                              )
                            );
                          }
                        }}
                        onBlur={() => {
                          setMobileTouched(true);
                          setMobileError(
                            getMobileError(
                              formFields.phone,
                              prevCountryRef.current
                            )
                          );
                        }}
                        placeholder="Phone No*"
                        inputProps={{
                          name: "phone",
                          required: true,
                          onKeyDown: (
                            e: React.KeyboardEvent<HTMLInputElement>
                          ) => {
                            const override = getPhoneKeydownOverride(
                              e.currentTarget,
                              e.key,
                              formFields.phone,
                              prevCountryRef.current
                            );
                            if (!override) return;
                            e.preventDefault();

                            if (override === "block") {
                              return;
                            }

                            const dialCode =
                              prevCountryRef.current?.dialCode || "91";
                            const formattedValue = `+${dialCode} ${override.digit}`;

                            setFormFields((prev) => ({
                              ...prev,
                              phone: formattedValue,
                            }));

                            if (mobileTouched) {
                              setMobileError(
                                getMobileError(
                                  formattedValue,
                                  prevCountryRef.current
                                )
                              );
                            }
                          },
                        }}
                        inputStyle={{
                          width: "100%",
                          height: "auto",
                          background: "transparent",
                          border: "none",
                          borderBottom: "1px solid #9ca3af",
                          borderRadius: 0,
                          padding: "12px 12px 12px 48px",
                          fontSize: "16px",
                          color: "#80847b",
                          outline: "none",
                        }}
                        buttonStyle={{
                          background: "transparent",
                          border: "none",
                          borderBottom: "1px solid #9ca3af",
                          borderRadius: 0,
                        }}
                        containerStyle={{ width: "100%" }}
                        dropdownStyle={{ color: "#000" }}
                        searchStyle={{ color: "#000" }}
                        enableSearch
                        countryCodeEditable={false}
                      />
                      {mobileTouched && mobileError ? (
                        <p className="mt-1 text-[13px] leading-[16px] text-red-600">
                          {mobileError}
                        </p>
                      ) : null}
                      <style jsx global>{`
                        .campaign-phone-field
                          .react-tel-input
                          .form-control::placeholder {
                          color: #80847b;
                        }
                        .campaign-phone-field
                          .react-tel-input
                          .form-control:focus,
                        .campaign-phone-field
                          .react-tel-input
                          .form-control:focus
                          + .flag-dropdown {
                          border-bottom-color: #304a10;
                        }
                        .campaign-phone-field
                          .react-tel-input
                          .flag-dropdown.open {
                          background: transparent;
                        }
                      `}</style>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="flex flex-col gap-3 sm:gap-6">
                    <div>
                      <input
                        type="text"
                        name="city"
                        value={formFields.city}
                        onChange={handleChange}
                        className="w-full border-b border-gray-400 bg-transparent outline-none px-3 py-3 focus:border-[#304A10] text-[#80847b] placeholder-[#80847b]"
                        placeholder="City*"
                        required
                      />
                    </div>

                    <div>
                      <div className="relative">
                        <select
                          className="w-full appearance-none border-b border-gray-400 px-3 py-3 focus:outline-none text-[#80847b] text-wrap focus:border-[#304A10]"
                          name="treatment"
                          aria-label="Select Treatment"
                          value={formFields.treatment}
                          onChange={handleChange}
                          required>
                          <option value="">Treatments*</option>
                          <option value="Ayurveda Treatment">
                            Ayurveda Treatment
                          </option>
                          <option value="Panchakarma Treatment">
                            Panchakarma Treatment
                          </option>
                          <option value="Sinusitis Treatment">
                            Sinusitis Treatment
                          </option>
                          <option value="Autism Treatment">
                            Autism Treatment
                          </option>
                          <option value="Weight Loss Treatment">
                            Weight Loss Treatment
                          </option>
                          <option value="Monsoon Treatment">
                            Monsoon Treatment
                          </option>
                          <option value="Parkinsons Ayurvedic Treatment">
                            Parkinsons Ayurvedic Treatment
                          </option>
                          <option value="Sciatica Treatment">
                            Sciatica Treatment
                          </option>
                          <option value="Stroke Treatment">
                            Stroke Treatment
                          </option>
                          <option value="Varicose Veins Treatment">
                            Varicose Veins Treatment
                          </option>
                          <option value="Knee Pain Treatment">
                            Knee Pain Treatment
                          </option>
                          <option value="Post Natal Treatment">
                            Post Natal Treatment
                          </option>
                          <option value="Cervical Spondylosis Treatment">
                            Cervical Spondylosis Treatment
                          </option>
                          <option value="Psoriasis Ayurvedic Treatment">
                            Psoriasis Ayurvedic Treatment
                          </option>
                          <option value="Lumbar Spondylosis Treatment">
                            Lumbar Spondylosis Treatment
                          </option>
                          <option value="Gastroesophageal Reflux Disease Treatment">
                            Gastroesophageal Reflux Disease Treatment
                          </option>
                          <option value="Arthritis Treatment">
                            Arthritis Treatment
                          </option>
                          <option value="Dysmenorrhea Treatment">
                            Dysmenorrhea Treatment
                          </option>
                          <option value="Ulcerative Colitis Treatment">
                            Ulcerative Colitis Treatment
                          </option>
                          <option value="Disc Bulge Protrusion">
                            Disc Bulge Protrusion
                          </option>
                          <option value="Lower Back Pain">
                            Lower Back Pain
                          </option>
                          <option value="Stress Management">
                            Stress Management
                          </option>
                          <option value="Hair Loss Treatment">
                            Hair Loss Treatment
                          </option>
                        </select>

                        {/* Dropdown arrow */}
                        <svg
                          className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="relative mt-6">
                    <textarea
                      className="w-full border-b border-gray-400 bg-transparent outline-none px-3 py-3 focus:border-[#304A10] text-[#80847b] placeholder-[#80847b]"
                      name="message"
                      rows={2}
                      cols={2}
                      placeholder="Message*"
                      value={formFields.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-between gap-[20px] flex-wrap">
                <p className="text-[16px] leading-[23px] text-[#80847b]">
                  By clicking the &quot;Submit&quot; button, I agree and accept{" "}
                  <br /> the{" "}
                  <Link href="/privacy-policy" className="underline">
                    privacy policy
                  </Link>{" "}
                  of Samwarthika.
                </p>

                {ENABLE_RECAPTCHA && (
                  <div className="g-captcha scale-80 sm:scale-80 origin-left">
                    <ReCAPTCHA
                      sitekey={siteKey}
                      onChange={handleCaptchaChange}
                      onExpired={() => setCaptchaValue(null)}
                    />
                  </div>
                )}

                <button
                  type="submit"
                  className=" cursor-pointer text-white border-[var(--primary)] mt-[0] max-xl:mt-[0] uppercase border-1 py-[10px] px-[30px] max-xl:py-[8px] max-xl:px-[25px] max-md:text-[16px] max-md:leading-[18px] flex w-[fit-content] hover:bg-[#e36300] transition bg-[var(--primary)] duration-300 hover:text-[#fff] h-fit"
                  disabled={isLoading}>
                  {isLoading ? "Submitting..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default CampaignForm;
