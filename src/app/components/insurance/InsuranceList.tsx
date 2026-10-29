"use client";
import React from "react";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/autoplay";
import Image from "next/image";
import { ASSET_PREFIX } from "../../../../config";
export default function InsuranceList() {
  const logos = [
    { src: "/paramount-health-insurance.webp", alt: "Paramount Health" },
    { src: "/sbi-general-insurance.webp", alt: "SBI General Insurance" },
    { src: "/bajaj-allianz-insurance.webp", alt: "Bajaj Allianz" },
    { src: "/galaxy-logo.webp", alt: "Galaxy" },
    { src: "/volo-insurance.webp", alt: "Volo Insurance" },
    { src: "/link-k-insurance.webp", alt: "Link Insurance" },
    { src: "/star-healtth-insurance.webp", alt: "Star Health Insurance" },
    { src: "/care-health-insurance.webp", alt: "Care Health Insurance" },
    { src: "/icici-lombard.webp", alt: "ICICI Lombard" },
    { src: "/hdfc-ergo.webp", alt: "HDFC Ergo" },
    { src: "/magma-hdi-general-insurance.webp", alt: "Magma HDI" },
    { src: "/aditya-birla-insurance.webp", alt: "Aditya Birla Capital" },
    {
      src: "/reliance-health-insurance.webp",
      alt: "Reliance Health Insurance",
    },
    {
      src: "/md-india-health-insurance.webp",
      alt: "MD India Health Insurance",
    },
    {
      src: "/digit-insurance.webp",
      alt: "Digit Insurance",
    },
    {
      src: "/akna-logo.webp",
      alt: "Akna Insurance",
    },

    { src: "/liberty-insurance.webp", alt: "Liberty Insurance", },
    { src: "/vidal-health-logo.webp", alt: "Vidal Health" },
    { src: "/fhpl-logo.webp", alt: "FHPL Logo" },
    { src: "/iffco-tokio-logo.webp", alt: "IFFCO Tokio Logo" },
    { src: "/health-insurance-logo.webp", alt: "Health Insurance Logo" },
    { src: "/manipal-cigna-logo.webp", alt: "Manipal Cigna Logo" },
    { src: "/heritage-health-logo.webp", alt: "Heritage Health Logo" },

    { src: "/tata-aig-insurance.webp", alt: "Tata AIG Insurance" },
    { src: "/medi-asist-logo.webp", alt: "Medi Asist Logo" },
    { src: "/royal-sundaram-logo.webp", alt: "Royal Sundaram Logo" },
    { src: "/acko-logo.webp", alt: "Acko Logo" },
    { src: "/chola-ms-insurance.webp", alt: "Chola MS logo" },
    { src: "/zuno-insurance-logo.webp", alt: "General insurance company limited logo" },
    { src: "/health-india.webp", alt: "Health India insurance Logo" },
    { src: "/united-india-insurance.webp", alt: "United India Insurance" },
    { src: "/new-india-assurance.webp", alt: "New India Assurance" },
    { src: "/national-insurance-company.webp", alt: "National Insurance Company" },
    { src: "/oriental-insurance.webp", alt: "Oriental Insurance" },
    { src: "/narayana-health-insurance.webp", alt: "Narayana Health Insurance" }
     


  ];

  return (
    <>
      <section className="pt-[140px]  max-2xl:pt-[100px]   max-xl:pt-[80px]  max-md:pt-[50px]">
        <div className="">
          <p className="m-auto uppercase text-[#361902cc] text-[20px]  leading-[24px] max-xl:text-[18px] max-xl:leading-[22px]  max-lg:text-[16px] max-lg:leading-[20px]  font-medium  text-center w-[fit-content]">
            THE AYURVEDIC TREATMENTS
          </p>
          <h3 className="m-auto text-[#314a10] font-[source,serief4] mt-[20px] font-normal          text-[30px] leading-[36px]   sm:text-[34px] sm:leading-[40px]   md:text-[38px] md:leading-[45px]   xl:text-[45px] xl:leading-[52px]   2xl:text-[60px] 2xl:leading-[65px]   text-center w-[fit-content]">
            Insurance
          </h3>
          <div className="w-[90%] m-auto px-4 py-8 mt-[60px] max-2xl:mt-[40px] max-mlg:mt-[0]">
            <div className="grid grid-cols-4 max-lg:grid-cols-3 max-[767px]:grid-cols-2! max-sm:grid-cols-1! justify-center items-center gap-[20px]  max-md:gap-[15px]">
              {logos.map((logo, index) => (
                <Image
                  key={index}
                  src={`${ASSET_PREFIX}/assets/images${logo.src}`}
                  alt={logo.alt}
                  width={20}
                  height={20}
                  className="h-20 w-auto object-contain m-auto p-[5px] hover:scale-[1.05]  transition duration-300"
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
