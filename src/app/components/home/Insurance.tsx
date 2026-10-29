"use client";
import { ASSET_PREFIX } from "../../../../config";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Grid } from "swiper/modules";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/autoplay";
import Image from "next/image";
export default function Therapyofchoice() {
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
    { src: "/reliance-health-insurance.webp", alt: "Reliance Health Insurance", },
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
      <section className="py-[100px]">
        <div className="w-[90%] m-[auto]">
          <h2 className="uppercase text-[#553e2b] text-[20px]  font-medium leading-[24px]  m-auto text-center w-[fit-content]">
            THE AYURVEDIC TREATMENTS
          </h2>
          <h3 className="text-[#314a10] font-[source,serief4] my-[20px] text-[50px] leading-[52px]  font-normal m-auto text-center w-[fit-content]">
            Insurance
          </h3>
          <div className="w-full px-4 py-8  mt-[40px]">
            <Swiper
              modules={[Autoplay, Grid]}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              loop={true}
              grid={{ rows: 2, fill: "row" }}
              slidesPerView={5}
              spaceBetween={80}
              breakpoints={{
                320: { slidesPerView: 2, spaceBetween: 10 },
                640: { slidesPerView: 3, spaceBetween: 20 },
                1024: { slidesPerView: 5, spaceBetween: 30 },
              }}>
              {logos.map((logo, index) => (
                <SwiperSlide
                  key={index}
                  className="flex justify-center items-center">
                  <Image
                    src={`${ASSET_PREFIX}/assets/images/${logo.src}`}
                    alt={logo.alt}
                    width={14}
                    height={14}
                    className="h-14 w-auto object-contain m-auto"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}
