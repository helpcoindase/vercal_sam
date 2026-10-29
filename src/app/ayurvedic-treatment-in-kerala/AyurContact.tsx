"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { ASSET_PREFIX } from "../../../config";
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
const AyurContact: React.FC = () => {
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
    country: "",
    city: "",
    treatment: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  const siteKey = "6Lec2UkqAAAAACDTI9r-Zxooqn8qGAh7SemO9RA4";
  const ENABLE_RECAPTCHA = false; // Set to true to re-enable reCAPTCHA after testing

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
          optionsTime
        ).format(now);

        const pad = (n: number) => String(n).padStart(2, "0");
        const starttime = `${now.getFullYear()}-${pad(
          now.getMonth() + 1
        )}-${pad(now.getDate())} ${pad(now.getHours())}:${pad(
          now.getMinutes()
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
    >
  ) => {
    const { name, value } = e.target;
    setFormFields((prev) => ({ ...prev, [name]: value }));
  };

  const handleCaptchaChange = (value: string | null) => {
    setCaptchaValue(value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (ENABLE_RECAPTCHA && !captchaValue) {
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
      <section className="pt-[70px]   max-xl:pt-[60px]  max-md:pt-[40px]">
        <div className="w-[85%] m-auto max-2xl:w-[90%] max-w-[120rem]">
          <div className="mt-[0px] w-[100%] m-auto grid grid-cols-[100%] justify-between max-xxl:w-[100%] max-lg:grid-cols-1 max-lg:gap-[5px] max-md:gap-[35px]">
            <div className="grid gap-[8px] grid-cols-1 md:grid-cols-2 ">
              <div
                className="rounded-[130px_130px_0px_0] md:rounded-[130px_0px_0px_130px] max-xl:h-[100%] w-auto relative after:absolute after:left-[0px] md:after:-left-[20px] after:-top-[20px] md:after:top-[0] after:content-[''] after:w-[100%]   after:max-lg:h-[100%] after:border-1 
               after:rounded-[130px_130px_0px_0] md:after:rounded-[130px_0px_0px_130px] after:h-[100%] after:border-[#ea8c42] after:z-[1] max-lg:h-[100%]
              
              ">
                <div className="overflow-hidden w-[100%] h-[100%]">
                  <Image
                    src={`${ASSET_PREFIX}/assets/images/ayurvedic-physiotherapy.webp`}
                    height={700}
                    width={300}
                    alt="Ayurvedic Physiotherapy"
                    className=" w-full h-[400px] object-cover object-center 
                    rounded-[130px_130px_0px_0]  
                    md:rounded-[130px_0px_0px_130px]  
                    relative z-[2]"
                  />
                </div>
              </div>

              <div className="bg-[#ffdcc0] w-full h-[100%] border-1 border-[#ffb175] rounded-[0px_30px_30px_0px] max-lg:rounded-[0px_50px_50px_0px] p-[30px] max-lg:max-h-[100%] max-md:rounded-[0px_0px_30px_30px]">
                <p className="grid grid-cols-[20px_auto] gap-[50px] text-[18px] leading-[23px] font-semibold max-[400px]:text-[16px] max-[400px]:gap-[40px]">
                  <span className="text-[#e36707]">email:</span>
                  <Link
                    href="mailto:info@samwarthika.com"
                     data-cta="email-cta"
                    target="_blank"
                    className="text-[#000000] hover:text-[#e36300] transition duration-300 ease-in-out">
                    info@samwarthika.com
                  </Link>
                </p>
                <p className="grid grid-cols-[20px_auto] gap-[50px] text-[18px] leading-[23px] font-semibold my-[10px] max-[400px]:text-[16px]  max-[400px]:gap-[40px]">
                  <span className="text-[#e36707]">mobile:</span>
                  <Link
                    href="tel:+919446365601"
                    data-cta="call-now"
                    className="text-[#000000] hover:text-[#e36300] transition duration-300 ease-in-out">
                    +91 9446 36 56 01
                  </Link>
                </p>
                <p className="grid grid-cols-[20px_auto] gap-[50px] text-[18px] leading-[23px] font-semibold my-[10px] max-[400px]:text-[16px]  max-[400px]:gap-[40px]">
                  <span className="text-[#e36707]">mobile:</span>
                  <Link
                   data-cta="call-now"
                    href="tel:+917356622201"
                    target="_blank"
                    className="text-[#000000] hover:text-[#e36300] transition duration-300 ease-in-out">
                    +91 7356 62 22 01
                  </Link>
                </p>

                <div className="w-[100%] my-[20px] h-[1px] bg-[#c3a893]" />

                <div className="flex justify-between gap-[10px] items-center">
                  <div className="grid grid-cols-[auto_auto_auto] max-xsm:grid-cols-1 w-full justify-between gap-[60px] items-center max-2xl:gap-[40px] max-xl:gap-[30px] max-xsm:gap-[15px]">
                    <p className="text-[20px] leading-[25px] max-2xl:text-[18px] max-2xl:leading-[22px] max-xl:text-[16px] max-xl:leading-[20px] text-[#000]">
                      <span className="font-semibold">Monday </span>to{" "}
                      <span className="font-semibold">
                        <br className="max-xsm:hidden" /> Sunday
                      </span>
                    </p>
                    <p className="block max-xsm:hidden text-[40px] leading-[30px] max-2xl:text-[36px] max-xl:leading-[38px] text-[#e36300]">
                      24x7
                    </p>
                    <p className="block max-xsm:hidden text-[40px] leading-[40px] max-2xl:text-[36px] max-xl:leading-[38px] text-[#000] text-center grid max-lg:w-[90px] mr-0 max-[480px]:!w-[100px]">
                      <span className="text-[16px] leading-[18px]">
                        We are open
                      </span>
                      365
                      <span className="text-[16px] leading-[18px]">Days</span>
                    </p>
                    <div className="hidden max-xsm:flex justify-between w-full">
                      <p className="text-[40px] leading-[30px] max-2xl:text-[36px] max-xl:leading-[38px] text-[#e36300]">
                        24x7
                      </p>
                      <p className="text-[40px] leading-[40px] max-2xl:text-[36px] max-xl:leading-[38px] text-[#000] text-center grid max-lg:w-[90px] mr-0 max-[480px]!:w-[100px]">
                        <span className="text-[16px] leading-[18px]">
                          We are open
                        </span>
                        365
                        <span className="text-[16px] leading-[18px]">Days</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AyurContact;
