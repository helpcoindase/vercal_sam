"use client";
import { ASSET_PREFIX } from "../../../../config";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Grid } from "swiper/modules";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/autoplay";
import Image from "next/image";
import Link from "next/link";
export default function Insurance() {
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

  const firstRowLogos = logos.slice(0, Math.ceil(logos.length / 2));
  const secondRowLogos = logos.slice(Math.ceil(logos.length / 2));

  return (
    <>
      <section className="py-[70px]   max-xl:py-[60px]  max-md:py-[40px]">
        <div className="w-[90%] m-auto max-w-[120rem]">
          {/* <p className="m-auto uppercase text-[#361902cc] text-[20px]  leading-[24px] max-xl:text-[18px] max-xl:leading-[22px]  max-lg:text-[16px] max-lg:leading-[20px]  font-medium  text-center w-[fit-content]">
            THE AYURVEDIC TREATMENTS
          </p> */}
          <h3 className="mt-0 m-auto text-[#314a10] font-[source,serief4] my-[20px] font-normal          text-[30px] leading-[36px]   sm:text-[34px] sm:leading-[40px]   md:text-[38px] md:leading-[45px]   xl:text-[45px] xl:leading-[52px]   2xl:text-[60px] 2xl:leading-[65px]   text-center w-[fit-content]">
            Insurance
          </h3>
          <div className="w-[80%]  flex flex-wrap gap-[20px] justify-center sm:justify-end m-[auto]  max-[1200px]:w-[100%] max-mlg:w-[90%]  max-md:w-[100%] relative">
            <div className="flex  justify-end  max-lg:relative  mt-[0]  max-lg:mt-[10px]">
              <Link
                className="uppercase border-1 text-[16px] sm:text-[16px] text-[var(--primary)] border-[var(--primary)] py-[7px] sm:py-[10px] px-[20px] sm:px-[30px] hover:bg-[#304A10] 
            hover:text-white transition tracking-[2px]"
                href="/insurance">
                View all
              </Link>{" "}
            </div>
          </div>
          <div className="w-[90%] m-auto max-w-[120rem] px-4 py-8 mt-[60px] max-2xl:mt-[40px] max-mlg:mt-[0] space-y-8">
            {/* First Row: Left to Right */}
            <Swiper
              modules={[Autoplay]}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
                reverseDirection: false,
              }}
              speed={5000}
              loop={true}
              slidesPerView={5}
              spaceBetween={50}
              breakpoints={{
                320: { slidesPerView: 2, spaceBetween: 10 },
                640: { slidesPerView: 3, spaceBetween: 20 },
                1024: { slidesPerView: 5, spaceBetween: 50 },
              }}>
              {firstRowLogos.map((logo, index) => (
                <SwiperSlide
                  key={index}
                  className="flex justify-center items-center">
                  <Image
                    loading="lazy"
                    src={`${ASSET_PREFIX}/assets/images${logo.src}`}
                    alt={logo.alt}
                    width={100}
                    height={100}
                    className="h-14 w-auto object-contain m-auto p-[5px]"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Second Row: Right to Left */}
            <Swiper
              modules={[Autoplay]}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
                reverseDirection: true,
              }}
              speed={5000}
              loop={true}
              slidesPerView={5}
              spaceBetween={50}
              breakpoints={{
                320: { slidesPerView: 2, spaceBetween: 10 },
                640: { slidesPerView: 3, spaceBetween: 20 },
                1024: { slidesPerView: 5, spaceBetween: 50 },
              }}>
              {secondRowLogos.map((logo, index) => (
                <SwiperSlide
                  key={index}
                  className="flex justify-center items-center">
                  <Image
                    loading="lazy"
                    src={`${ASSET_PREFIX}/assets/images${logo.src}`}
                    alt={logo.alt}
                    width={100}
                    height={100}
                    className="h-14 w-auto object-contain m-auto p-[5px]"
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
