// components/Footer.tsx
"use client";

import { useRef, useState, useEffect, ReactNode } from "react";
import Link from "next/link";
import { ASSET_PREFIX } from "../../../../config";
import Image from "next/image";

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
      className="fixed max-[480px]:bottom-[64px] bottom-4 right-4 z-[9999] notranslate  max-[1280px]:hidden"
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
          className="bg-transparent text-[16px] border-none outline-none cursor-pointer notranslate"
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

/* =========================
   Footer Types
========================= */

type FooterData = {
  about: { label: string; path: string }[];
  quicklinks: { label: string; path: string }[];
  treatment: { label: string; path: string }[];
  contact: {
    name: string | ReactNode;
    address: string[];
    email: string;
    phone: string;
    phone1: string;
  };
};

/* =========================
   Footer Component
========================= */

const Footer = () => {
  const footerData: FooterData = {
    about: [
      { label: "Overview", path: "/about-us#overview" },
      { label: "Vision & Mission", path: "/about-us#vision-mission" },
      { label: "Founder's Message", path: "/about-us#founder-message" },
      { label: "Our Journey", path: "/about-us#our-journey" },
      { label: "Our Doctors", path: "/our-doctors" },
      { label: "Doctors Talk", path: "/doctors-talk/" },
      { label: "Accommodations & Facilities", path: "/facilities" },
    ],
    quicklinks: [
      { label: "Medical Tourism", path: "/medical-tourism" },
      { label: "Monsoon Special", path: "/monsoon-special" },
      { label: "Insurance", path: "/insurance" },
      { label: "Blog", path: "/blog" },
      { label: "Contact Us", path: "/contact-us" },
      { label: "Client Testimonials", path: "/client-testimonials" },
      { label: "Academics", path: "/course" },
      { label: "Departments", path: "/departments" },
      { label: "NABH", path: "/nabh" },
    ],
    treatment: [
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
    ],
    contact: {
      name: (
        <>
          <span className="font-[600]">Samwarthika Ayurveda Hospital,</span>{" "}
          <br />
          <span className="font-[400] text-[16px]  leading-[16px] text-[#43230B]">
            (A Unit of PGS Ayurvedic Resorts)
          </span>
        </>
      ),
      address: [" "],
      email: "info@samwarthika.com ",
      phone: "+91 94463 65601",
      phone1: "+91 73566 22201",
    },
  };

  const [openAccordion, setOpenAccordion] = useState<number | null>(null);
  const contentRefs = useRef<(HTMLUListElement | null)[]>([]);
  const [maxHeights, setMaxHeights] = useState<{ [key: number]: string }>({});
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const footerRef = useRef<HTMLElement | null>(null);

  const isFooterInView = () => {
    const rect = footerRef.current?.getBoundingClientRect();
    return !!rect && rect.top < window.innerHeight;
  };

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (
      isSmallScreen &&
      openAccordion !== null &&
      contentRefs.current[openAccordion]
    ) {
      const height = `${contentRefs.current[openAccordion]?.scrollHeight || 0}px`;
      setMaxHeights((prev) =>
        prev[openAccordion] === height ? prev : { ...prev, [openAccordion]: height }
      );
    }
  }, [openAccordion, isSmallScreen]);

  const renderAccordionSection = (
    title: string,
    items: { label: string; path: string }[],
    index: number,
  ) => (
    <div className="w-full mb-0 md:mb-0" key={index}>
      <div
        className="md:cursor-default cursor-pointer flex justify-between items-center md:mb-[10px] border-b  border-[#384e20] sm:border-b-0 mb-[10px] pb-[8px]"
        onClick={() => toggleAccordion(index)}>
        <h2 className="text-[18px] leading-[24px] sm:text-[18px] sm:leading-[26px] text-[#374d1f] font-semibold font-[mulish]!">
          {title}
        </h2>
        <span className="sm:hidden">
          {openAccordion === index ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              viewBox="0 0 1024 1024">
              <path
                fill="#000"
                d="M192.128 683.136L512 371.328l319.872 311.808a30.59 30.59 0 0 0 42.752 0a29.12 29.12 0 0 0 0-41.6L534.336 309.76a32 32 0 0 0-44.672 0L149.376 641.472a29.12 29.12 0 0 0 0 41.728a30.59 30.59 0 0 0 42.752-0.064z"
              />
            </svg>
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
            </svg>
          )}
        </span>
      </div>

      <ul
        ref={(el) => {
          contentRefs.current[index] = el;
        }}
        className={`transition-all duration-500 ease-in-out sm:block overflow-hidden sm:overflow-visible`}
        style={{
          maxHeight: isSmallScreen
            ? openAccordion === index
              ? maxHeights[index] || "0px"
              : "0px"
            : "none",
        }}>
        {items.map((item, itemIndex) => (
          <li key={itemIndex} className="mb-[10px]">
            <Link
              href={item.path}
              className="text-[#505c43] hover:text-[#e36300] transition-colors">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  useEffect(() => {
    const handleScroll = () => {
      const menu = document.querySelector(".menq") as HTMLElement | null;

      if (!menu) return;

      if (window.scrollY > 150) {
        menu.style.opacity = "1";
        menu.style.pointerEvents = "auto";
      } else {
        menu.style.opacity = "0";
        menu.style.pointerEvents = "none";
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 150) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const treatments = [
    {
      icon: "ayurveda-treatment.svg",
      title: "Ayurveda Treatment",
      link: "ayurvedic-treatment-in-kerala",
    },
    {
      icon: "panchakarma-treatment.svg",
      title: "Panchakarma Treatment",
      link: "panchakarma-treatment-in-kerala",
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
    {
      icon: "cervical-spondylosis.svg",
      title: "Cervical Spondylosis Treatment",
      link: "cervical-spondylosis-treatment-kerala",
    },
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
    {
      icon: "gastroesophageal-reflux.svg",
      title: "Gastroesophageal Reflux Disease Treatment",
      link: "gastroesophageal-reflux-disease-treatment-in-kerala",
    },

    {
      icon: "weight-loss-treatment.svg",
      title: "Weight Loss Treatment",
      link: "ayurvedic-treatment-for-hair-loss-in-kerala",
    },
    {
      icon: "knee-pain.svg",
      title: "Knee Pain Treatment",
      link: "ayurvedic-treatment-for-knee-pain-in-kerala",
    },
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
    {
      icon: "monsoon-treatment.svg",
      title: "Monsoon Treatment",
      link: "ayurveda-monsoon-treatment-in-kerala",
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
    {
      icon: "ulcerative-colitis-treatment.svg",
      title: "Ulcerative Colitis Treatment",
      link: "ulcerative-colitis-treatment-kerala",
    },
    {
      icon: "varicose-veins.svg",
      title: "Varicose Veins Treatment",
      link: "ayurvedic-treatment-for-varicose-veins-kerala",
    },
    {
      icon: "weight-loss-treatment.svg",
      title: "Weight Loss Treatment",
      link: "weight-loss-ayurvedic-treatment-in-kerala",
    },
  ];

  return (
    <footer ref={footerRef} className="bg-[#fff] text-white pt-12 pb-[75px] sm:pb-12">
      <div className="border-t border-gn-700 border-[#304a1070]  mx-auto w-[90%]  mlg:w-[85%] ">
        <div className="">
          <div className="grid grid-cols-2 gap-[35px_20px]  justify-between hidden md:grid lg:hidden items-center  mt-[40px]">
            <div className="">
              <Image
                src={`${ASSET_PREFIX}/assets/images/samwarthika-footer-logo.webp`}
                alt="Samwarthika Footer Logo"
                className="w-[120px] sm:w-[160px] h-[auto] 2xl:w-[160px] 2xl:h-[auto] ml-[10px] max-sm:m-auto"
                width={236}
                height={118}
                unoptimized
              />
              <p className="text-[17px] leading-[21px] max-lg:text-[16px] max-lg:leading-[20px] w-[95%] max-sm:text-center text-start text-[#43230B] font-bold">
                NABH Accredited Ayurveda Hospital
              </p>
            </div>
            <div>
              <div className="items-center mt-[15px] flex justify-end gap-[30px] lg:gap-[50px]  max-sm:my-[10px]">
                <p className="block   text-[35px] leading-[30px] max-2xl:text-[28px] max-xl:leading-[30px] text-orange-600 tracking-[-1px]">
                  24 x 7
                </p>
                <p className="block    text-[35px] leading-[30px] max-2xl:text-[28px] max-xl:leading-[30px] text-[#000] text-center grid  max-lg:w-[90px] mr-[0px] ">
                  <span className="text-[14px] leading-[18px]">
                    We are open
                  </span>
                  365
                  <span className="text-[14px] leading-[18px]">Days</span>
                </p>
                 <div className="">
                  <Link href={"https://maps.app.goo.gl/8XHA2Wh6xKbzdaqG8"} target="_blank">
                    <Image
                src={`${ASSET_PREFIX}/assets/images/google-rating.webp`}
                alt="4.8 Star Rating"
                className="w-[120px] sm:w-[100px] md:w-[110px] h-[auto] 2xl:w-[100px] 2xl:h-[auto]  max-sm:m-auto"
                width={400}
                height={200}
                unoptimized
              />
              </Link>
                  </div>
              </div>
            </div>
            <div className="mt-[15px] pl-[8px] w-full lg:hidden">
              
                <ul className="flex sm:gap-[25px] sm:justify-start justify-between  items-center max-sm:pr-[4px]">
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
                        width="23px"
                        height="23px"
                        viewBox="0 0 16 16"
                        className="fill-current text-[#304A10] group-hover:text-[#e36300] transition-colors duration-300">
                        <path d="M13.95 4.24C11.86 1 7.58.04 4.27 2.05C1.04 4.06 0 8.44 2.09 11.67l.17.26l-.7 2.62l2.62-.7l.26.17c1.13.61 2.36.96 3.58.96c1.31 0 2.62-.35 3.75-1.05c3.23-2.1 4.19-6.39 2.18-9.71Zm-1.83 6.74c-.35.52-.79.87-1.4.96c-.35 0-.79.17-2.53-.52c-1.48-.7-2.71-1.84-3.58-3.15c-.52-.61-.79-1.4-.87-2.19c0-.7.26-1.31.7-1.75c.17-.17.35-.26.52-.26h.44c.17 0 .35 0 .44.35c.17.44.61 1.49.61 1.58c.09.09.05.76-.35 1.14c-.22.25-.26.26-.17.44c.35.52.79 1.05 1.22 1.49c.52.44 1.05.79 1.66 1.05c.17.09.35.09.44-.09c.09-.17.52-.61.7-.79c.17-.17.26-.17.44-.09l1.4.7c.17.09.35.17.44.26c.09.26.09.61-.09.87Z" />
                      </svg>
                    </Link>
                  </li>
                </ul>
              
            </div>
          </div>
        </div>

        {/* Main footer columns */}
        <div className="max-w-[120rem] m-auto mt-[30px] sm:mt-[45px] max-sm:gap-[10px] grid max-sm:grid-cols-1! max-md:grid-cols-2!  max-md:gap-[25px_10px] md:grid-cols-4  max-lg:grid-cols-3!  mlg:grid-cols-[30%_20%_20%_25%] 2xl:grid-cols-[25%_auto_auto_20%] justify-between gap-y-[10px] md:gap-[50px_10px] xl:gap-[40px_15px]">
          <div className="flex flex-col items-center sm:items-start  justify-between md:hidden lg:flex mb-[25px] sm:mb-[0] gap-[20px_0px]">
            <div className="grid gap-[10px]  max-sm:items-center">
              <Image
                src={`${ASSET_PREFIX}/assets/images/samwarthika-footer-logo.webp`}
                alt="Samwarthika Footer Logo"
                className="w-[120px] sm:w-[160px] h-[auto] 2xl:w-[160px] 2xl:h-[auto] ml-[10px] max-sm:m-auto"
                width={236}
                height={118}
                unoptimized
              />
              <div>
                <p className="text-[16px] leading-[21px] max-lg:text-[16px] max-lg:leading-[20px] max-sm:text-center text-start text-[#43230B] font-bold">
                  NABH Accredited Ayurveda Hospital
                </p>
                <div className="items-start mt-[35px] flex justify-between w-[100%] sm:w-[80%] 2xl:w-[90%] max-sm:my-[10px]">
                 
                 <div className=""> <p className="block    text-[35px] leading-[30px] max-2xl:text-[28px] max-xl:leading-[30px] text-[#000] text-center grid  max-lg:w-[90px] mr-[0px] ">
                    <span className="text-[14px] leading-[18px]">
                      We are open
                    </span>
                    365
                    <span className="text-[14px] leading-[18px]">Days</span>
                  </p>
                 
                  </div>
                  <p className="block mt-[15px]   text-[35px] leading-[30px] max-2xl:text-[28px] max-xl:leading-[30px] text-orange-600 tracking-[-1px]">
                    24 x 7
                  </p>
                </div>
                 <div className="mt-[25px] flex justify-center w-[100%] sm:w-[80%] 2xl:w-[90%] ">
                   <Link href={"https://maps.app.goo.gl/8XHA2Wh6xKbzdaqG8"} target="_blank">
                    <Image
                src={`${ASSET_PREFIX}/assets/images/google-rating.webp`}
                alt="4.8 Star Rating"
                className="w-[120px] sm:w-[100px] lg:w-[130px] h-[auto] 2xl:w-[140px] 2xl:h-[auto]  max-sm:m-auto"
                width={400}
                height={200}
                unoptimized
              />
              </Link>
                  </div>
              </div>
            </div>
            <div className="mt-[15px] pl-[8px] w-full lg:hidden">
              <ul className="flex sm:gap-[25px] sm:justify-start justify-between  items-center max-sm:pr-[4px]">
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
                      width="23px"
                      height="23px"
                      viewBox="0 0 16 16"
                      className="fill-current text-[#304A10] group-hover:text-[#e36300] transition-colors duration-300">
                      <path d="M13.95 4.24C11.86 1 7.58.04 4.27 2.05C1.04 4.06 0 8.44 2.09 11.67l.17.26l-.7 2.62l2.62-.7l.26.17c1.13.61 2.36.96 3.58.96c1.31 0 2.62-.35 3.75-1.05c3.23-2.1 4.19-6.39 2.18-9.71Zm-1.83 6.74c-.35.52-.79.87-1.4.96c-.35 0-.79.17-2.53-.52c-1.48-.7-2.71-1.84-3.58-3.15c-.52-.61-.79-1.4-.87-2.19c0-.7.26-1.31.7-1.75c.17-.17.35-.26.52-.26h.44c.17 0 .35 0 .44.35c.17.44.61 1.49.61 1.58c.09.09.05.76-.35 1.14c-.22.25-.26.26-.17.44c.35.52.79 1.05 1.22 1.49c.52.44 1.05.79 1.66 1.05c.17.09.35.09.44-.09c.09-.17.52-.61.7-.79c.17-.17.26-.17.44-.09l1.4.7c.17.09.35.17.44.26c.09.26.09.61-.09.87Z" />
                    </svg>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {renderAccordionSection("About us", footerData.about, 1)}
          {renderAccordionSection("Quick Links", footerData.quicklinks, 2)}

          <div className="sm:hidden ">
            {renderAccordionSection("Treatments", footerData.treatment, 3)}
          </div>

          {/* Contact Section */}
          <div className="w-full mt-[15px] sm:mt-[0]">
            <div
              className={`transition-all duration-500 ease-in-out sm:block overflow-hidden`}>
              <div className="space-y-2">
                <h2 className="text-[17px] leading-[25px] text-[#374d1f] font-semibold mb-[2px]  font-[mulish]!">
                  {footerData.contact.name}
                </h2>
                <address className="text-[#505c43] not-italic mt-[16px] mb-[20px] 2xl:mb-[30px]">
                  {footerData.contact.address.map(
                    (_line: string, index: number) => (
                      <p key={index} className="">
                        Pallikkavu Road Jn.,
                        <br /> Arakuzha Road, Muvattupuzha, <br />
                        Kerala <span className="text-[nowrap]">
                          - 686 661,
                        </span>{" "}
                        India.
                      </p>
                    ),
                  )}
                </address>
                <p className="text-[#505c43]  ">
                  Email:{" "}
                  <Link
                    data-cta="email-footer-cta"
                    href="mailto:info@samwarthika.com "
                    className="text-[#8F4100]  hover:underline transition-all duration-300 font-semibold">
                    <b>{footerData.contact.email}</b>
                  </Link>
                </p>
                <p className="text-[#505c43] flex items-start max-md:flex-row max-[789px]:flex-col gap-2">
                  Phone:{" "}
                  <span>
                    <Link
                      data-cta="call-now-footer"
                      href={`tel:+9194463 65601`}
                      target="_blank"
                      className="text-[#8F4100] hover:underline transition-all duration-300 font-semibold text-nowrap">
                      <b>{footerData.contact.phone}</b>
                    </Link>{" "}
                    <br />
                    <Link
                      data-cta="call-now-footer"
                      href={`tel:+917356622201`}
                      target="_blank"
                      className="text-[#8F4100] hover:underline transition-all duration-300 font-semibold text-nowrap">
                      <b>{footerData.contact.phone1}</b>
                    </Link>
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Treatments columns - mobile / tablet / desktop variants */}
          <div className="flex flex-col max-sm:hidden  md:hidden  ">
            <div className="md:cursor-default cursor-pointer flex justify-between items-center md:mb-[10px] border-b  border-[#384e20] sm:border-b-0 mb-[10px] pb-[8px]">
              <h3 className="text-[18px] leading-[24px] sm:text-[18px] sm:leading-[26px] text-[#374d1f] font-semibold font-[mulish]!">
                Treatments
              </h3>
            </div>
            {treatments.slice(0, 11).map((item, index) => {
              return (
                <Link
                  key={`treatment-${index}`}
                  href={`/${item.link}`}
                  className="text-[#505c43] hover:text-[#e36300] transition-colors mb-[10px]">
                  {item.title}
                </Link>
              );
            })}
          </div>

          <div className="flex flex-col max-sm:hidden md:hidden">
            <div className="md:cursor-default cursor-pointer flex justify-between items-center md:mb-[10px] border-b  border-[#384e20] sm:border-b-0 mb-[10px] pb-[8px]">
              <h3 className="text-[18px] leading-[24px] sm:text-[18px] sm:leading-[26px] text-[#374d1f] font-semibold font-[mulish]! invisible">
                Treatments
              </h3>
            </div>
            {treatments.slice(11, 23).map((item, index) => {
              return (
                <Link
                  key={`no-${11 + index}`}
                  href={`/${item.link}`}
                  className="text-[#505c43] hover:text-[#e36300] transition-colors mb-[10px]">
                  {item.title}
                </Link>
              );
            })}
          </div>

          <div className="flex flex-col  max-[1024px]:justify-start max-[1400px]:justify-end max-md:hidden  ">
            <div className="md:cursor-default cursor-pointer flex justify-between items-center md:mb-[10px] border-b  border-[#384e20] sm:border-b-0 mb-[10px] pb-[8px] lg:hidden">
              <h3 className="text-[18px] leading-[24px] sm:text-[18px] sm:leading-[26px] text-[#374d1f] font-semibold font-[mulish]!">
                Treatments
              </h3>
            </div>
            {treatments.slice(0, 7).map((item, index) => {
              return (
                <Link
                  key={`no-${index}`}
                  href={`/${item.link}`}
                  className="text-[#505c43] hover:text-[#e36300] transition-colors mb-[10px] lg:invisible">
                  {item.title}
                </Link>
              );
            })}
            <div className="mt-[15px] pl-[8px]  max-lg:hidden w-full">
              <div className="flex sm:gap-[25px] sm:justify-start justify-between mb-[10px] items-center max-sm:pr-[4px]">
                <ul className="flex sm:gap-[25px] sm:justify-start justify-between  items-center max-sm:pr-[4px]">
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
                        width="23px"
                        height="23px"
                        viewBox="0 0 16 16"
                        className="fill-current text-[#304A10] group-hover:text-[#e36300] transition-colors duration-300">
                        <path d="M13.95 4.24C11.86 1 7.58.04 4.27 2.05C1.04 4.06 0 8.44 2.09 11.67l.17.26l-.7 2.62l2.62-.7l.26.17c1.13.61 2.36.96 3.58.96c1.31 0 2.62-.35 3.75-1.05c3.23-2.1 4.19-6.39 2.18-9.71Zm-1.83 6.74c-.35.52-.79.87-1.4.96c-.35 0-.79.17-2.53-.52c-1.48-.7-2.71-1.84-3.58-3.15c-.52-.61-.79-1.4-.87-2.19c0-.7.26-1.31.7-1.75c.17-.17.35-.26.52-.26h.44c.17 0 .35 0 .44.35c.17.44.61 1.49.61 1.58c.09.09.05.76-.35 1.14c-.22.25-.26.26-.17.44c.35.52.79 1.05 1.22 1.49c.52.44 1.05.79 1.66 1.05c.17.09.35.09.44-.09c.09-.17.52-.61.7-.79c.17-.17.26-.17.44-.09l1.4.7c.17.09.35.17.44.26c.09.26.09.61-.09.87Z" />
                      </svg>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className=" flex-col hidden lg:flex">
            <div className="md:cursor-default cursor-pointer flex justify-between items-center md:mb-[10px] border-b  border-[#384e20] sm:border-b-0 mb-[10px] pb-[8px]">
              <h3 className="text-[18px] leading-[24px] sm:text-[18px] sm:leading-[26px] text-[#374d1f] font-semibold font-[mulish]!">
                Treatments
              </h3>
            </div>
            {treatments.slice(0, 7).map((item, index) => {
              return (
                <Link
                  key={index}
                  href={`/${item.link}`}
                  className="text-[#505c43] hover:text-[#e36300] transition-colors mb-[10px]">
                  {item.title}
                </Link>
              );
            })}
          </div>

          <div className="flex flex-col max-md:hidden">
            <div className="md:cursor-default cursor-pointer flex justify-between items-center md:mb-[10px] border-b  border-[#384e20] sm:border-b-0 mb-[10px] pb-[8px] invisible">
              <h3 className="text-[18px] leading-[24px] sm:text-[18px] sm:leading-[26px] text-[#374d1f] font-semibold font-[mulish]!">
                Treatments
              </h3>
            </div>
            {treatments.slice(7, 14).map((item, index) => {
              return (
                <Link
                  key={7 + index}
                  href={`/${item.link}`}
                  className="text-[#505c43] hover:text-[#e36300] transition-colors mb-[10px]">
                  {item.title}
                </Link>
              );
            })}
          </div>

          <div className="flex flex-col max-md:hidden">
            <div className="md:cursor-default cursor-pointer flex justify-between items-center md:mb-[10px] border-b  border-[#384e20] sm:border-b-0 mb-[10px] pb-[8px] invisible">
              <h3 className="text-[18px] leading-[24px] sm:text-[18px] sm:leading-[26px] text-[#374d1f] font-semibold font-[mulish]!">
                Treatments
              </h3>
            </div>
            {treatments.slice(14, 23).map((item, index) => {
              return (
                <Link
                  key={14 + index}
                  href={`/${item.link}`}
                  className="text-[#505c43] hover:text-[#e36300] transition-colors mb-[10px]">
                  {item.title}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gn-700 mt-10 sm:mt-12 pt-[20px] px-[15px]">
          <div className="flex justify-center items-center text-center">
            <p className="text-[#505c43] text-[16px] leading-[24px] text-center">
              © {new Date().getFullYear()} Samwarthika Ayurveda Hospital. <Link
                href="/privacy-policy"
                className="hover:text-[#e36300] transition-colors"><b>Privacy Policy</b></Link>
            </p>
          </div>
        </div>

        {/* Side floating CTA buttons */}
        <div
          className=" menq   block opacity-0
  fixed z-[999]
  top-1/2 right-[-168px] -translate-y-1/2
  max-[480px]:top-auto max-[480px]:right-0 max-[480px]:bottom-0 max-[480px]:translate-y-0 max-[480px]:w-full transition-opacity duration-500
">
          <ul
            className="
    flex flex-col items-center gap-[15px]
    max-[480px]:flex-row max-[480px]:gap-0 max-[480px]:w-full max-[480px]:bg-[#304a10] max-[480px]:text-center
  "
            translate="no">
            {/* Call Now */}
            <li
              className="
      list-none rounded-l-[30px]  ml-[-1px] cursor-pointer bg-white shadow-md
      transition-all duration-300 ease-out transform translate-x-[-32px] hover:translate-x-[-120px] pr-[20px]
      max-[480px]:rounded-none max-[480px]:h-auto  max-[480px]:translate-x-0 max-[480px]:hover:translate-x-0 max-[480px]:flex-1 max-[480px]:bg-[#304A10] max-[480px]:shadow-none  max-[480px]:border-r-2 max-[480px]:border-white">
              <Link
                href="tel:+919446365601"
                className="call-now"
                data-cta="call-now">
                <div
                  className="flex items-center gap-[15px] h-[55px] px-[5px] max-[480px]:px-0 max-[480px]:py-[5px] group
                   max-[480px]:flex-col max-[480px]:gap-1 max-[480px]:pt-0 max-[480px]:text-white">
                  <span className="flex items-center justify-center w-[40px] h-[40px] max-[480px]:h-[30px] max-[480px]:w-[30px] rounded-full bg-[#304A10] max-[480px]:bg-transparent  group-hover:bg-[#ff6d04] transition duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-[30px] h-[30px] text-white"
                      viewBox="0 0 24 24">
                      <g fill="none" stroke="none">
                        <g fill="white">
                          <path
                            d="M4.024 9L4 8.931C3.46 7.384 3 5.27 3 4c0-.55.45-1 1-1h3a2
                          2 0 0 1 2 2v2a2 2 0 0 1-2 2h-.837A16.054 16.054 0 0 0 15
                         17.837V17a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v3c0 .45-.55 1-1
                         1c-1.725 0-3.44-.456-5-1c-5.114-1.832-9.168-5.886-10.976-11Z"
                          />
                        </g>
                      </g>
                    </svg>
                  </span>
                  <span className="font-semibold max-[480px]:text-[14px] max-[480px]:leading-[18px] group-hover:text-[#ff6d04] transition duration-300">
                    Call Now
                  </span>
                </div>
              </Link>
            </li>

            {/* Book Appointment */}
            <li
              className="
      list-none rounded-l-[30px]   ml-[-1px] cursor-pointer bg-white shadow-md
      transition-all duration-300 ease-out transform translate-x-[0px] hover:translate-x-[-165px] pr-[10px]
      max-[480px]:rounded-none max-[480px]:h-auto  max-[480px]:translate-x-0 max-[480px]:hover:translate-x-0 max-[480px]:flex-1 max-[480px]:bg-[#304A10] max-[480px]:shadow-none
    ">
              <Link
                href="/contact-us"
                aria-label="Enquiry Form"
                data-cta="book-appoinment"
                className="book-app">
                <div
                  className="flex items-center gap-[15px] group  h-[55px] px-[5px] max-[480px]:px-0 max-[480px]:py-[5px]
                   max-[480px]:flex-col max-[480px]:gap-1 max-[480px]:pt-0 max-[480px]:text-white">
                  <span className="flex items-center justify-center w-[40px] h-[40px] max-[480px]:h-[30px] max-[480px]:w-[30px] rounded-full bg-[#304A10] max-[480px]:bg-transparent  group-hover:bg-[#ff6d04] transition duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-[30px] h-[30px] text-white"
                      viewBox="0 0 36 36">
                      <path
                        fill="currentColor"
                        d="M32 6H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h28a2 2
                 0 0 0 2-2V8a2 2 0 0 0-2-2Zm-1.54 22H5.66l7-7.24l-1.44-1.39L4
                 26.84V9.52l12.43 12.37a2 2 0 0 0 2.82
                 0L32 9.21v17.5l-7.36-7.36l-1.41 1.41ZM5.31 8h25.07L17.84 20.47Z"
                      />
                    </svg>
                  </span>
                  <span className="font-semibold max-[480px]:text-[14px] max-[480px]:leading-[18px] group-hover:text-[#ff6d04] transition duration-300">
                    Book Appointment
                  </span>
                </div>
              </Link>
            </li>
          </ul>
        </div>

        {/* Scroll to top */}
        <div className="">
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="scrolltop fixed max-[480px]:bottom-[80px] bottom-10 left-3 z-50 bg-[#304A10] hover:bg-[#ff6d04] max-[480px]:p-1 p-2 rounded-full shadow-lg cursor-pointer transition duration-500"
            style={{
              opacity: isVisible ? 1 : 0,
              pointerEvents: isVisible ? "auto" : "none",
            }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30px"
              height="30px"
              viewBox="0 0 24 24">
              <path
                fill="none"
                stroke="#ffffff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="m17 14l-5-5l-5 5"></path>
            </svg>
          </button>
        </div>

        {/* Language Button */}
        <LanguageButton />

        {/* WhatsApp FAB */}
        <Link
          href="https://api.whatsapp.com/send/?phone=917356622201&text&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            opacity: isVisible ? 1 : 0,
            pointerEvents: isVisible ? "auto" : "none",
          }}
          className="whatsapp_float
        fixed
        bottom-30 right-4
        z-50
        flex items-center justify-center
        rounded-full shadow-lg
        bg-green-500 text-white
        transition-all duration-300
        hover:scale-110 hover:shadow-xl
        w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16
      "
          aria-label="whatsapp">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 256 258"
            className="max-md:w-[35px] max-md:h-[35px] max-sm:w-[30px] max-sm:h-[30px]">
            <defs>
              <linearGradient
                id="SVGBRLHCcSy"
                x1="50%"
                x2="50%"
                y1="100%"
                y2="0%">
                <stop offset="0%" stopColor="#1faf38" />
                <stop offset="100%" stopColor="#60d669" />
              </linearGradient>
              <linearGradient
                id="SVGHW6lecxh"
                x1="50%"
                x2="50%"
                y1="100%"
                y2="0%">
                <stop offset="0%" stopColor="#f9f9f9" />
                <stop offset="100%" stopColor="#fff" />
              </linearGradient>
            </defs>
            <path
              fill="url(#SVGBRLHCcSy)"
              d="M5.463 127.456c-.006 21.677 5.658 42.843 16.428 61.499L4.433 252.697l65.232-17.104a123 123 0 0 0 58.8 14.97h.054c67.815 0 123.018-55.183 123.047-123.01c.013-32.867-12.775-63.773-36.009-87.025c-23.23-23.25-54.125-36.061-87.043-36.076c-67.823 0-123.022 55.18-123.05 123.004"
            />
            <path
              fill="url(#SVGHW6lecxh)"
              d="M1.07 127.416c-.007 22.457 5.86 44.38 17.014 63.704L0 257.147l67.571-17.717c18.618 10.151 39.58 15.503 60.91 15.511h.055c70.248 0 127.434-57.168 127.464-127.423c.012-34.048-13.236-66.065-37.3-90.15C194.633 13.286 162.633.014 128.536 0C58.276 0 1.099 57.16 1.071 127.416m40.24 60.376l-2.523-4.005c-10.606-16.864-16.204-36.352-16.196-56.363C22.614 69.029 70.138 21.52 128.576 21.52c28.3.012 54.896 11.044 74.9 31.06c20.003 20.018 31.01 46.628 31.003 74.93c-.026 58.395-47.551 105.91-105.943 105.91h-.042c-19.013-.01-37.66-5.116-53.922-14.765l-3.87-2.295l-40.098 10.513z"
            />
            <path
              fill="#fff"
              d="M96.678 74.148c-2.386-5.303-4.897-5.41-7.166-5.503c-1.858-.08-3.982-.074-6.104-.074c-2.124 0-5.575.799-8.492 3.984c-2.92 3.188-11.148 10.892-11.148 26.561s11.413 30.813 13.004 32.94c1.593 2.123 22.033 35.307 54.405 48.073c26.904 10.609 32.379 8.499 38.218 7.967c5.84-.53 18.844-7.702 21.497-15.139c2.655-7.436 2.655-13.81 1.859-15.142c-.796-1.327-2.92-2.124-6.105-3.716s-18.844-9.298-21.763-10.361c-2.92-1.062-5.043-1.592-7.167 1.597c-2.124 3.184-8.223 10.356-10.082 12.48c-1.857 2.129-3.716 2.394-6.9.801c-3.187-1.598-13.444-4.957-25.613-15.806c-9.468-8.442-15.86-18.867-17.718-22.056c-1.858-3.184-.199-4.91 1.398-6.497c1.431-1.427 3.186-3.719 4.78-5.578c1.588-1.86 2.118-3.187 3.18-5.311c1.063-2.126.531-3.986-.264-5.579c-.798-1.593-6.987-17.343-9.819-23.64"
            />
          </svg>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
