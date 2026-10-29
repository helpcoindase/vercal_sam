// components/Footer.tsx
"use client";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { ASSET_PREFIX } from "../../../../config";
import Image from "next/image";
import { h1 } from "framer-motion/client";

const Footer = () => {
  type FooterData = {
    about: { label: string; path: string }[];
    quicklinks: { label: string; path: string }[];
    treatment: { label: string; path: string }[];
    contact: {
      name: string;
      address: string[];
      email: string;
      phone: string;
    };
  };

  const footerData: FooterData = {
    about: [
      { label: "About Us", path: "/about-us" },
      { label: "Our Doctors", path: "/about-us#doctors" },
      { label: "Services", path: "/about-us#services" },
      { label: "Facilities", path: "/about-us#facilities" },
      { label: "Location", path: "/about-us#location" },
      // { label: "Blog", path: "/blog" },
    ],
    quicklinks: [
      { label: "Medical Tourism", path: "/medical-tourism" },
      { label: "Monsoon Special", path: "/monsoon-special" },
      // {
      //   label: "Course for Indian BAMS Passouts",
      //   path: "/cource-for-indian-bams-passouts",
      // },
      // {
      //   label: "Course for International Participants",
      //   path: "/cource-for-international-participants",
      // },
      { label: "Insurance", path: "/insurance" },
      { label: "Blog", path: "/blog" },
      { label: "Contact Us", path: "/contact-us" },
    ],
    treatment: [
      {
        label: "Ayurveda Treatment",
        path: "/ayurvedic-treatment-in-kerala",
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
      name: "Samwarthika Ayurveda Hospital,",
      address: [" "],
      email: "info@samwarthika.com ",
      phone: "+91 94463 65601",
    },
  };

  const [openAccordion, setOpenAccordion] = useState<number | null>(null);
  const contentRefs = useRef<(HTMLUListElement | null)[]>([]);
  const [maxHeights, setMaxHeights] = useState<{ [key: number]: string }>({});
  const [isSmallScreen, setIsSmallScreen] = useState(false);

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
      const newMaxHeights = { ...maxHeights };
      newMaxHeights[openAccordion] =
        `${contentRefs.current[openAccordion]?.scrollHeight}px`;
      setMaxHeights(newMaxHeights);
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
        <h3 className="text-[18px] leading-[24px] sm:text-[18px] sm:leading-[26px] text-[#374d1f] font-semibold font-[mulish]!">
          {title}
        </h3>
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
              className="text-[#6f7f5e] hover:text-[#e36300] transition-colors">
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

    // Run once on mount
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

  const LanguageButton = () => {
    const handleLanguageChange = (lang: string) => {
      const selectEl = document.querySelector(
        ".goog-te-combo",
      ) as HTMLSelectElement;
      if (selectEl) {
        selectEl.value = lang;
        selectEl.dispatchEvent(new Event("change"));
      }
    };

    return (
      <div className="fixed bottom-4 right-4 z-[9999]">
        <div className="bg-white border border-gray-300 rounded-md shadow-md px-3 py-2 flex gap-2 cursor-pointer ">
          <span className="text-[16px] font-medium m-0">🌐</span>
          <select
            onChange={(e) => handleLanguageChange(e.target.value)}
            className="bg-transparent text-[16px] border-none outline-none cursor-pointer">
            <option value="" defaultValue={"en"}>
              Select
            </option>
            <option value="en">🇺🇸 English</option>
            <option value="hi">हिंदी</option>
            <option value="ta">தமிழ்</option>
            <option value="te">తెలుగు</option>
            <option value="ml">മലയാളം</option>
            <option value="kn">ಕನ್ನಡ</option>
            <option value="fr">Français</option>
            <option value="de">Deutsch</option>
            <option value="es">Español</option>
          </select>
        </div>

        {/* Hidden Google element */}
        <div id="google_translate_element" className="hidden" />
      </div>
    );
  };

  const treatments = [
    {
      icon: "hair-loss-treatment.svg",
      title: "Hair Loss Treatment",
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
      link: "sinusitis-ayurvedic-treatment",
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
    <footer className="bg-[#fff] text-white py-12">
      <div className="border-t border-gn-700 border-[#304a1070]  mx-auto w-[90%]  mlg:w-[85%] ">
        <div className="max-w-[120rem] m-auto mt-[30px] sm:mt-[45px] max-sm:gap-[10px] grid max-sm:grid-cols-1! max-md:grid-cols-2!  max-md:gap-[25px_0px] md:grid-cols-4  max-lg:grid-cols-3!  mlg:grid-cols-[30%_20%_20%_25%] 2xl:grid-cols-[25%_auto_auto_20%] justify-between gap-y-[10px] md:gap-y-[50px] xl:gap-[40px_15px]">
          <div className="flex flex-col items-center sm:items-start  justify-between md:hidden lg:flex mb-[25px] sm:mb-[0]">
            {" "}
            <div className="grid gap-[10px]  max-sm:items-center">
              <Image
                src={`${ASSET_PREFIX}/assets/images/samwarthika-footer-logo.webp`}
                alt="Samwarthika Footer Logo"
                className="w-[120px] sm:w-[160px] h-[auto] 2xl:w-[160px] 2xl:h-[auto] ml-[10px] max-sm:m-auto"
                width={220}
                height={48}
                unoptimized
              />
              <div>
                <p className="text-[17px] leading-[21px] max-lg:text-[16px] max-lg:leading-[20px] max-sm:text-center text-start text-[#43230B] font-bold">
                  NABH Accredited Ayurveda Hospital
                </p>
                <div className="items-center mt-[10px] flex justify-between  max-sm:my-[10px]">
                  <p className="block   text-[35px] leading-[30px] max-2xl:text-[28px] max-xl:leading-[30px] text-orange-600 tracking-[-1px]">
                    24 x 7
                  </p>
                  <p className="block    text-[35px] leading-[30px] max-2xl:text-[28px] max-xl:leading-[30px] text-[#000] text-center grid  max-lg:w-[90px] mr-[0px] ">
                    <span className="text-[16px] leading-[18px]">
                      We are open
                    </span>
                    365
                    <span className="text-[16px] leading-[18px]">Days</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-[15px] pl-[8px] w-full">
              <ul className="flex sm:gap-[25px] sm:justify-start justify-between  items-center max-sm:pr-[4px]">
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
                    href="https://in.linkedin.com/company/samwarthika-ayurveda-hospital"
                    target="_blank"
                    aria-label="Link"
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
                    href="https://www.instagram.com/samwarthika/"
                    target="_blank"
                    aria-label="instagram"
                    className="group">
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
              </ul>
            </div>
          </div>

          {/* {renderAccordionSection("Departments", footerData.department, 0)} */}
          {renderAccordionSection("About us", footerData.about, 1)}
          {renderAccordionSection("Quick Links", footerData.quicklinks, 2)}
          <div className="sm:hidden ">
            {renderAccordionSection("Treatments", footerData.treatment, 3)}
          </div>

          {/* Contact Section (special case) */}

          <div className="w-full mt-[15px] sm:mt-[0]">
            <div
              className={`transition-all duration-500 ease-in-out sm:block overflow-hidden`}>
              <div className="space-y-2">
                <h4 className="text-[17px] leading-[25px] text-[#374d1f] font-semibold mb-[2px]  font-[mulish]!">
                  {footerData.contact.name}
                </h4>
                <address className="text-[#6f7f5e] not-italic mt-[16px] mb-[20px] 2xl:mb-[30px]">
                  {footerData.contact.address.map(
                    (line: string, index: number) => (
                      <p key={index}>
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
                <p className="text-[#6f7f5e]  ">
                  Email:{" "}
                  <Link
                    href="mailto:info@samwarthika.com "
                    className="hover:text-[#e36300]   font-semibold">
                    {" "}
                    <b> {footerData.contact.email}</b>
                  </Link>
                </p>
                <p className="text-[#6f7f5e]">
                  Phone:{" "}
                  <Link
                    href={`tel:+9194463 65601`}
                    className="hover:text-[#e36300]  font-semibold text-nowrap">
                    <b>{footerData.contact.phone}</b>
                  </Link>
                  <Link
                    href={`tel:+9173566 22201`}
                    className="hover:text-[#e36300]  font-semibold text-nowrap">
                    <b>{footerData.contact.phone}</b>
                  </Link>
                </p>
              </div>
            </div>
          </div>
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
                  className="text-[#6f7f5e] hover:text-[#e36300] transition-colors mb-[10px]">
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
            {treatments.slice(11, 22).map((item, index) => {
              return (
                <Link
                  key={`no-${11 + index}`}
                  href={`/${item.link}`}
                  className="text-[#6f7f5e] hover:text-[#e36300] transition-colors mb-[10px]">
                  {item.title}
                </Link>
              );
            })}
          </div>
          <div className="flex flex-col  max-md:hidden  lg:invisible">
            <div className="md:cursor-default cursor-pointer flex justify-between items-center md:mb-[10px] border-b  border-[#384e20] sm:border-b-0 mb-[10px] pb-[8px]">
              <h3 className="text-[18px] leading-[24px] sm:text-[18px] sm:leading-[26px] text-[#374d1f] font-semibold font-[mulish]!">
                Treatments
              </h3>
            </div>
            {treatments.slice(0, 7).map((item, index) => {
              return (
                <Link
                  key={`no-${index}`}
                  href={`/${item.link}`}
                  className="text-[#6f7f5e] hover:text-[#e36300] transition-colors mb-[10px]">
                  {item.title}
                </Link>
              );
            })}
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
                  className="text-[#6f7f5e] hover:text-[#e36300] transition-colors mb-[10px]">
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
                  className="text-[#6f7f5e] hover:text-[#e36300] transition-colors mb-[10px]">
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
                  className="text-[#6f7f5e] hover:text-[#e36300] transition-colors mb-[10px]">
                  {item.title}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gn-700 mt-10 sm:mt-12 pt-[20px] px-[15px]">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-[#6f7f5e] text-[16px] leading-[24px] text-center md:text-left">
              © {new Date().getFullYear()} Samwarthika Ayurveda Hospital.
            </p>
          </div>
        </div>
        <div
          className=" menq   block opacity-0
  fixed z-[999]
  top-1/2 right-[-100px] -translate-y-1/2
  max-[480px]:top-auto max-[480px]:right-0 max-[480px]:bottom-0 max-[480px]:translate-y-0 max-[480px]:w-full transition-opacity duration-500

">
          <ul
            className="
    flex flex-col items-center gap-[15px]
    max-[480px]:flex-row max-[480px]:gap-0 max-[480px]:w-full max-[480px]:bg-[#c71e36] max-[480px]:text-center
  ">
            {/* Call Now */}
            <li
              className=" 
      list-none rounded-l-[30px]  ml-[-1px] cursor-pointer bg-white shadow-md 
      transition-all duration-300 ease-out transform translate-x-[10px] hover:translate-x-[-80px] pr-[20px]
      max-[480px]:rounded-none max-[480px]:h-auto  max-[480px]:translate-x-0 max-[480px]:hover:translate-x-0 max-[480px]:flex-1 max-[480px]:bg-[#304A10] max-[480px]:shadow-none  max-[480px]:border-r-2 max-[480px]:border-white">
              <Link
                href="tel:+917356622201"
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
                <span className="font-semibold max-[480px]:text-[16px] max-[480px]:leading-[18px] group-hover:text-[#ff6d04] transition duration-300">
                  Call Now
                </span>
              </Link>
            </li>

            {/* Let's Connect */}
            <li
              className="
      list-none rounded-l-[30px]   ml-[-1px] cursor-pointer bg-white shadow-md 
      transition-all duration-300 ease-out transform translate-x-[23px] hover:translate-x-[-100px] pr-[10px]
      max-[480px]:rounded-none max-[480px]:h-auto  max-[480px]:translate-x-0 max-[480px]:hover:translate-x-0 max-[480px]:flex-1 max-[480px]:bg-[#304A10] max-[480px]:shadow-none
    ">
              <Link
                href="/contact-us"
                aria-label="Enquiry Form"
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
                <span className="font-semibold max-[480px]:text-[16px] max-[480px]:leading-[18px] group-hover:text-[#ff6d04] transition duration-300">
                  Let&apos;s Connect
                </span>
              </Link>
            </li>
          </ul>
        </div>
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
        {/* <LanguageButton /> */}
        <Link
          href="https://whatsapp.com/channel/0029VbD4T3aKwqSZ4krxwK3j" // replace with your WhatsApp number
          target="_blank"
          rel="noopener noreferrer"
          style={{
            opacity: isVisible ? 1 : 0,
            pointerEvents: isVisible ? "auto" : "none",
          }}
          className="
        fixed 
        bottom-30 right-4
        z-50
        flex items-center justify-center
        rounded-full shadow-lg
        bg-green-500 text-white
        transition-all duration-300
        hover:scale-110 hover:shadow-xl
        w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16
      ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40px"
            height="40px"
            viewBox="0 0 24 24">
            <path
              fill="#fff"
              d="m7.254 18.494l.724.423A7.95 7.95 0 0 0 12.001 20a8 8 0 1 0-8-8a7.95 7.95 0 0 0 1.084 4.024l.422.724l-.653 2.401zM2.005 22l1.352-4.968A9.95 9.95 0 0 1 2.001 12c0-5.523 4.477-10 10-10s10 4.477 10 10s-4.477 10-10 10a9.95 9.95 0 0 1-5.03-1.355zM8.392 7.308q.202-.014.403-.004q.081.006.162.016c.159.018.334.115.393.249q.447 1.015.868 2.04c.062.152.025.347-.093.537c-.06.097-.154.233-.263.372c-.113.145-.356.411-.356.411s-.099.118-.061.265c.014.056.06.137.102.205l.059.095c.256.427.6.86 1.02 1.268c.12.116.237.235.363.346c.468.413.998.75 1.57 1l.005.002c.085.037.128.057.252.11q.093.039.191.066q.036.01.073.011a.35.35 0 0 0 .295-.142c.723-.876.79-.933.795-.933v.002a.48.48 0 0 1 .378-.127q.092.004.177.04c.531.243 1.4.622 1.4.622l.582.261c.098.047.187.158.19.265c.004.067.01.175-.013.373c-.032.259-.11.57-.188.733a1.2 1.2 0 0 1-.21.302a2.4 2.4 0 0 1-.33.288q-.124.092-.125.09a5 5 0 0 1-.383.22a2 2 0 0 1-.833.23c-.185.01-.37.024-.556.014c-.008 0-.568-.087-.568-.087a9.45 9.45 0 0 1-3.84-2.046c-.226-.199-.436-.413-.65-.626c-.888-.885-1.561-1.84-1.97-2.742a3.5 3.5 0 0 1-.33-1.413a2.73 2.73 0 0 1 .565-1.68c.073-.094.142-.192.261-.305c.126-.12.207-.184.294-.228a1 1 0 0 1 .371-.1"
            />
          </svg>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
