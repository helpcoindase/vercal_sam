"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ASSET_PREFIX } from "../../../../config";
import { title } from "process";

const timelineData = [
  {
    year: "1987",
    img: "/assets/images/birth-of-samwarthika-vision.webp",
    alt: "Birth of Samwarthika Vision",
    title: "Birth of Vision",
    text: "P.G. Sunilkumar began his career in construction with substantial projects and progressed to become an approved contractor, boasting 25 years of excellence behind him.",
  },
  {
    year: "2017",
    img: "/assets/images/samwarthika-ayurvedic-hospital-opening.webp",
    alt: "Samwarthika Ayurvedic Hospital Opening",
    title: "Hospital Opening",
    text: "Samwarthika Ayurveda Hospital was commissioned and within a brief time, we became Kerala's signature Ayurvedic destination with state-of-the-art infrastructure, expert faculty and 24/7 service.",
  },
  {
    year: "2018",
    img: "/assets/images/global-recognition-of-samwarthika-ayurveda.webp",
    alt: "Global Recognition of Samwarthika Ayurveda",
    title: "Global recognition",
    text: "The Kerala floods would challenge Samwarthika, even as it received Green Leaf Certification from Kerala Tourism, but it demonstrated fortitude and resilience in revival.",
  },
  {
    year: "2019",
    img: "/assets/images/samwarthika-digital-transformation.webp",
    alt: "Samwarthika Digital Transformation",
    title: "Shifted Digital",
    text: "The hospital has already transitioned fully to the electronic medical record and a modern hospital management system and is lean and mean with efficiency in patient care.",
  },
  {
    year: "2020",
    img: "/assets/images/quality-milestone-in-ayurvedic-healthcare.webp",
    alt: "Quality Milestone in Ayurvedic Healthcare",
    title: "Quality Milestone",
    text: "Samwarthika operated during the COVID-19 pandemic and has received full NABH accreditation for AYUSH hospitals, ensuring that the quality standards are first-class in Indian healthcare.",
  },
  {
    year: "2021",
    img: "/assets/images/upgraded-patient-comforts-at-samwarthika.webp",
    alt: "Upgraded Patient Comforts at Samwarthika",
    title: "Comforts Upgrade",
    text: "The hospital has earned the Ayur Diamond Classification and built four Executive Suites to enhance patient comfort and hospitality services.",
  },
  {
    year: "2022",
    img: "/assets/images/strengthening-healthcare-systems-at-samwarthika.webp",
    alt: "Strengthening Healthcare Systems at Samwarthika",
    title: "System Strength",
    text: "The rapeutic protocols, international patient services and internal systems have been consolidated to ensure continued excellence in the delivery of healthcare.",
  },
  {
    year: "2023",
    img: "/assets/images/excellence-in-ayurvedic-healthcare.webp",
    alt: "Excellence in Ayurvedic Healthcare",
    title: "Healthcare Excellence",
    text: "Samwarthika was reaccredited with full NABH standards for the second time, further reinforcing its commitment to quality healthcare.",
  },
  {
    year: "2024",
    img: "/assets/images/expansion-of-ayurvedic-services.webp",
    alt: "Expansion of Ayurvedic Services",
    title: "Service Expansion",
    text: "Formal inauguration of four premium suite rooms, together with the establishment of a world-class Ayur Physio Department and a dedicated Ayurvedic Cosmetology Department.",
  },
  {
    year: "2025",
    img: "/assets/images/modern-ayurvedic-hospital-today.webp",
    alt: "Modern Ayurvedic Hospital Today",
    title: "Modern Today",
    text: "Samwarthika is now a fully equipped Ayurvedic institution, with seven consultants and over 40 + staff members and a dedicated in-house medicine unit that has garnered global trust from patients.",
  },
];

export default function TimelineSwiper() {
  return (
    <section className="py-[180px]  max-2xl:py-[100px]   max-xl:py-[80px]  max-md:py-[50px] mx-auto max-w-[120rem]" id="our-journey">
      <div className=" mb-[20px] min-[580px]:mb-[40px]">
        {/* <h2 className="m-auto uppercase text-[#553e2b] text-[20px]  leading-[24px] max-xl:text-[18px] max-xl:leading-[22px]  max-lg:text-[16px] max-lg:leading-[20px]  font-medium  text-center w-[fit-content]">
          MILESTONE
        </h2> */}
        <h2
          className="m-auto text-[#314a10] font-[source,serief4]  text-[60px] leading-[65px] max-2xl:text-[52px]
           leading-[58px] max-xl:text-[46px] max-xl:leading-[50px] max-lg:text-[40px] max-lg:leading-[46px] max-mlg:text-[38px] max-mlg:leading-[42px] font-normal   text-center w-[fit-content]">
          Our Journey
        </h2>
      </div>
      <div className="relative">
        <div className="w-[90%] mx-auto max-w-[140rem]">
          {/* Timeline horizontal line */}
          <div className="absolute w-[90%]   px-[5px] top-1/2 h-[2px] bg-green-900 z-0"></div>

          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            spaceBetween={60}
            slidesPerView={1}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 20 },
              580: { slidesPerView: 2, spaceBetween: 30 },

              900: { slidesPerView: 3, spaceBetween: 40 },
              1310: { slidesPerView: 4 },
            }}
            className="relative z-10 px-[20px]">
            {timelineData.map((item, index) => {
              const isTop = index % 2 === 0; // alternate top/bottom
              return (
                <SwiperSlide
                  key={index}
                  className="flex flex-col items-center relative ">
                  <div
                    className={`flex flex-col  items-center  w-full  min-[580px]:max-w-[300px] h-[623px] max-[1500px]:h-[665px] max-[580px]:h-[617px] ${isTop
                      ? "mb-[0px] justify-end "
                      : " xsm:mt-[6px]  justify-start"
                      }`}>
                    {isTop && (
                      <>
                        {" "}
                        <div
                          className="overflow-hidden relative 
    after:absolute after:content-[''] after:h-[32px] after:w-[1px] after:bottom-[-1px] after:left-1/2 after:-translate-x-1/2 after:bg-[var(--secondary)]">
                          <div className="w-[190px] xsm:w-[200px] xl:w-[230px] 2xl:w-[250px] h-[190px] xsm:h-[200px] xl:h-[230px] 2xl:h-[250px] rounded-full overflow-hidden mb-[30px] ">
                            <Image
                              src={`${ASSET_PREFIX}${item.img}`}
                              alt={item.alt}
                              width={200}
                              height={200}
                              className="object-cover w-full h-full object-right"
                            />
                          </div>
                        </div>
                        <div className="flex items-center flex-col">
                          <h3 className="text-[42px] leading-[48px] lg:text-[54px] font-semibold text-green-900 mt-[30px] ">
                            {item.year}
                          </h3>

                          <h4 className="mt-4 text-gray-700 text-center  flex items-top px-4 line-clamp-2 text-[20px] leading-[26px] font-semibold ">
                            {item.title}

                          </h4>

                          <p className="mt-4 text-gray-700 text-center max-[480px]:w-[100%] max-[580px]:w-[80%] max-[580px]:h-[170px] max-[1500px]:h-[192px] h-[170px] flex items-top px-4 ">
                            {item.text}
                          </p>
                        </div>
                      </>
                    )}

                    {!isTop && (
                      <>
                        <div className="flex items-center flex-col">
                          <p className="mb-[16px]  text-gray-700 text-center px-4 max-[480px]:w-[100%] max-[580px]:w-[80%] max-[580px]:h-[170px] max-[1500px]:h-[192px] h-[170px] flex items-end ">
                            {item.text}
                          </p>
                          <h3 className="mb-4 text-gray-700 text-center  flex items-top px-4 line-clamp-2 text-[20px] leading-[26px] font-semibold ">
                            {item.title}

                          </h3>

                          <h4 className=" text-[42px] leading-[48px] lg:text-[54px] lg:leading-[54px] font-semibold text-green-900 mb-[30px]">
                            {item.year}
                          </h4>
                        </div>
                        <div
                          className="overflow-hidden relative 
    after:absolute after:content-[''] after:h-[32px] after:w-[1px] after:top-[-1px] after:left-1/2 after:-translate-x-1/2 after:bg-[var(--secondary)]">
                          <div className="w-[190px] xsm:w-[200px] xl:w-[230px]  2xl:w-[250px] h-[190px] xsm:h-[200px] xl:h-[230px] 2xl:h-[250px]  rounded-full overflow-hidden  mt-[30px] ">
                            <Image
                              src={`${ASSET_PREFIX}${item.img}`}
                              alt={item.alt}
                              width={200}
                              height={200}
                              className="object-cover w-full h-full"
                            />
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </SwiperSlide>
              );
            })}
            <div className="swiper-button-prev !opacity-100 !left-0 after:p-[10px] bg-[#fff] after:bg-[#fff] p-[10px_10px_10px_0px] !bg-[#fff] after:!text-[30px]   !text-gray-800   [&.swiper-button-disabled]:opacity-40
    [&.swiper-button-disabled]:cursor-not-allowed
    [&.swiper-button-disabled]:pointer-events-none
    [&.swiper-button-disabled]:bg-gray-100
    [&.swiper-button-disabled]:text-gray-400
    [&.swiper-button-disabled]:after:text-gray-400 "></div>
            <div className="swiper-button-next !opacity-100  !right-0 after:p-[10px] after:bg-[#fff] p-[10px_0px_10px_10px] !text-gray-800  after:!text-[30px] 
             [&.swiper-button-disabled]:opacity-40
    [&.swiper-button-disabled]:cursor-not-allowed
    [&.swiper-button-disabled]:pointer-events-none
    [&.swiper-button-disabled]:bg-gray-100
    [&.swiper-button-disabled]:text-gray-400
    [&.swiper-button-disabled]:after:text-gray-400"></div>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
