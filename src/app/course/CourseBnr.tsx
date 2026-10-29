"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay } from "swiper/modules";
import React, { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";
import { ASSET_PREFIX } from "../../../config";
ASSET_PREFIX;
export default function CourseBnr() {
  const images = [
    { url: "/assets/images/subbanner/medical-tourism.webp", alt: "About US" },
    {
      url: "/assets/images/subbanner/post-natal-treatment-in-kerala.webp",
      alt: "Post Delivery Care",
    },
    {
      url: "/assets/images/subbanner/panchakarma-treatment-in-kerala.webp",
      alt: "Panchakarma Treatment in Kerala",
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);
  return (
    <section className="">
      <div className="bg-[#c8e3d2]">
        <div className="w-[90%] mx-auto max-w-[120rem]">
          <div className="grid grid-cols-1 mlg:grid-cols-[45%_55%]">
            <div className=" py-[25px] xsm:p-[25px] md:p-[70px_40px] mlg:p-[90px_60px]">
              <h1 className="mb-[25px] text-[var(--secondary)] xxl:text-[50px] xxl:leading-[56px] text-[60px] leading-[65px] max-xxl:text-[45px] max-xxl:leading-[50px] max-2xl:text-[40px] max-2xl:leading-[46px]   max-sm:text-[38px] max-sm:leading-[40px] font-normal font-[source,serif4]  w-full mlg:w-[95%]   xl:w-[85%] ">
                {/* <span className="text-white text-shadow-sm"></span> */}
                Course
              </h1>
              <p className="my-[25px]  mlg:mb-[30px] mlg:mt-[20px]  text-[var(--secondary)] w-full mlg:w-[90%]  max-mlg:text-[16px] max-mlg:leading-[20px] text-[18px] leading-[24px]  max-sm:hidden">
                Samwarthika: Your Journey to Complete Wellness Begins Here!
                NABH-accredited care and expert practitioners guiding your path
                to health & wellness
              </p>
              <div className="btn-wrp flex flex-wrap gap-[10px] sm:gap-[20px]  ">
                <Link
                  className="book-app-sub"
                  data-cta="book-appoinment"
                  href="/contact-us">
                  <div className="text-[16px] leading-[18px] tracking-[2px] uppercase  font-light  px-5 py-3 bg-[var(--primary)]  border-1 border-[var(--primary)] text-[#fff]   hover:bg-[transparent] hover:text-[var(--primary)] transition duration-300">
                    Book Appointment
                  </div>
                </Link>
                {/* <Link
                  className=" text-[16px] leading-[18px] tracking-[2px] uppercase font-light px-5 py-3  hover:bg-[#fff] border-1 border-[var(--secondary)]  hover:text-[var(--primary)] hover:border-[#fff] transition duration-300 text-[var(--secondary)] "
                  href="/client-testimonials">
                  What Customer Says
                </Link> */}
              </div>
            </div>
            <div className="relative mlg:pr-[3%]">
              <Swiper
                modules={[Autoplay]}
                autoplay={{ delay: 4000 }}
                loop
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                }}
                className="w-full h-full">
                {images.map((src, index) => (
                  <SwiperSlide key={index}>
                    <div className="relative w-full h-[250px] sm:h-[350px] mlg:h-full">
                      <Image
                        src={`${ASSET_PREFIX}${src.url}`}
                        alt={`${src.alt}`}
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Pagination Dots */}
              <div className="absolute bottom-4 right-4 mlg:bottom-[5%] mlg:right-[7%] flex gap-[8px] z-10 w-fit ">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    aria-label={`Go to Slide ${idx}`}
                    onClick={() => {
                      if (swiperRef.current) {
                        swiperRef.current.slideToLoop(idx);
                      }
                    }}
                    className={`w-[12px] h-[12px] rounded-full transition-all duration-300 cursor-pointer
              ${activeIndex === idx ? "bg-white w-[35px] " : "bg-white/50"}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="breadcrumbs  w-[90%] m-auto max-w-[120rem] flex  max-md:flex-wrap gap-[10px]  max-lg:gap-[8px]  max-md:gap-[5px]  pt-[8px] max-sm:pt-[5px] xsm:p-[10px_25px] md:p-[10px_40px] mlg:p-[10px_60px] text-[#000]/60 text-[16px] leading-[20px]  max-xl:text-[16px]  max-xl:leading-[18px]">
        {" "}
        <Link
          href={"/"}
          className="text-[#e36300]/70 transition duration-300 hover:text-orange-600">
          Home
        </Link>{" "}
        /<p>Course</p>
      </div>
    </section>
  );
}
