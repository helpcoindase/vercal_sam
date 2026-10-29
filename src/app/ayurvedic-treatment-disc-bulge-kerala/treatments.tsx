"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperClass } from "swiper";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { ASSET_PREFIX } from "../../../config";

/* ------------ Types & Data ------------ */

interface SideImageItem {
  img: string;
  imgtitle: string;
  heading: string;
  link?: string;
}

const sideImages: SideImageItem[] = [
  {
    img: "/assets/images/icons/medicated-oil-icon.svg",
    heading: "Medicated Oil Therapies",
    imgtitle:
      "Focused on the spine to relieve stiffness, soothe nerves and improve circulation.",
  },
  {
    img: "/assets/images/icons/abhyangam-oil-massage-icon.svg",
    heading: "Abhyangam (Oil Massage)",
    imgtitle:
      "Full-body massage with medicated oils to improve circulation and relax muscles.",
  },
  {
    img: "/assets/images/icons/swedanam-sudation-therapy-icon.svg",
    heading: "Swedanam (Sudation Therapy)",
    imgtitle:
      "Herbal steam therapy to relieve stiffness and promote flexibility.",
  },
  {
    img: "/assets/images/icons/local-vasti-icon.svg",
    heading: "Local Vasti",
    imgtitle:
      "Application of warm medicated oil over the affected area to alleviate pain and inflammation.",
  },
  {
    img: "/assets/images/icons/local-dhara-icon.svg",
    heading: "Local Dhara",
    imgtitle:
      "Continuous pouring of medicated oil over the affected area to soothe nerves and muscles",
  },
  {
    img: "/assets/images/icons/podi-kizhi-and-ila-kizhi-icon.svg",
    heading: "Podi Kizhi & Ila Kizhi",
    imgtitle:
      "Herbal poultice therapy to reduce inflammation and strengthen tissues.",
  },
  {
    img: "/assets/images/icons/njavara-kizh-icon.svg",
    heading: "Njavara Kizhi",
    imgtitle: "Rice bolus therapy to nourish and rejuvenate the affected area.",
  },
  {
    img: "/assets/images/icons/cleansing-therapy-icon.svg",
    heading: "Vasthi (Medicated Enemas)",
    imgtitle: "Cleansing therapy to remove toxins and balance doshas.",
  },
  {
    img: "/assets/images/icons/yoga-practies-icon.svg",
    heading: "Yoga practices",
    imgtitle: "To improve posture, prevent recurrence and enhance balance",
  },
  {
    img: "/assets/images/icons/diagnosis-icon.svg",
    heading: "Diagnosis",
    imgtitle:
      " Diagnosis and care tailored to individual symptoms, causes and lifestyle factors",
  },
  {
    img: "/assets/images/icons/internal-herbal-icon.svg",
    heading: "Internal Herbal Formulations",
    imgtitle: "Designed to balance Vata dosha and reduce inflammation",
  },
  {
    img: "/assets/images/icons/physiotherapy-and-movement-guidance-icon.svg",
    heading: "Physiotherapy and Movement Guidance",
    imgtitle:
      "Safe postures and activity modifications to support recovery and prevent recurrence",
  },
];

function SideImageSwiper() {
  const [gridConfig, setGridConfig] = useState({
    ROWS: 3,
    COLS: 4,
  });

  const swiperRef = useRef<SwiperClass | null>(null);
  const prevRef = useRef<HTMLDivElement | null>(null);
  const nextRef = useRef<HTMLDivElement | null>(null);

  const [activeIndex, setActiveIndex] = useState(0);

  const getGridConfig = () => {
    if (typeof window !== "undefined") {
      const w = window.innerWidth;
      if (w > 750 && w < 900) {
        // tablet-ish
        return { ROWS: 2, COLS: 3 }; // 6 items per slide
      } else if (w > 500 && w <= 750) {
        // small tablet
        return { ROWS: 2, COLS: 2 }; // 4 items per slide
      } else if (w <= 500) {
        // mobile
        return { ROWS: 2, COLS: 1 }; // 2 items per slide
      }
    }
    // desktop default
    return { ROWS: 2, COLS: 4 }; // 8 items per slide
  };

  // Resize watcher
  useEffect(() => {
    const update = () => setGridConfig(getGridConfig());
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const { ROWS, COLS } = gridConfig;
  const PAGE_SIZE = ROWS * COLS; // items per slide
  const totalSlides = Math.ceil((sideImages.length || 0) / PAGE_SIZE);

  // helper for dot clicks so it works with loop
  const goToSlide = (idx: number) => {
    if (!swiperRef.current) return;

    if (swiperRef.current.params.loop) {
      (swiperRef.current as SwiperClass).slideToLoop(idx);
    } else {
      swiperRef.current.slideTo(idx);
    }
  };

  return (
    <>
      <Swiper
        modules={[Navigation, Autoplay]}
        onSwiper={(s) => {
          swiperRef.current = s;
        }}
        slidesPerView={1} // one "page" at a time
        spaceBetween={20}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={totalSlides > 1}
        onBeforeInit={(swiper) => {
          // ensure navigation refs are wired before init
          if (
            swiper.params.navigation &&
            typeof swiper.params.navigation !== "boolean"
          ) {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }
        }}
        onSlideChange={(swiper) => {
          // always use realIndex when loop is enabled
          setActiveIndex(swiper.realIndex ?? swiper.activeIndex);
        }}
        className="mySwiper !pb-8">
        {Array.from({ length: totalSlides }).map((_, slideIndex) => (
          <SwiperSlide key={slideIndex} className="pt-[20px]">
            <div className="grid gap-4">
              {Array.from({ length: ROWS }).map((__, rowIndex) => {
                const start = slideIndex * PAGE_SIZE + rowIndex * COLS;
                const rowItems = sideImages.slice(start, start + COLS);

                if (rowItems.length === 0) return null;

                return (
                  <div
                    key={rowIndex}
                    className="grid gap-4"
                    style={{
                      gridTemplateColumns: `repeat(${COLS}, minmax(0, 1fr))`,
                    }}>
                    {rowItems.map(({ img, imgtitle, heading, link }, i) => (
                      <div key={`${imgtitle}-${i}`} className="relative group">
                        <div className="text-start w-full h-full m-auto flex max-[501px]:justify-center max-[501px]:items-center justify-start items-start flex-col p-[30px] max-lg:p-[20px] rounded-[20px] overflow-hidden border border-transparent hover:border-[#c3efd2] hover:bg-[#effff5]">
                          <Image
                            src={`${ASSET_PREFIX}${img}`}
                            alt={imgtitle}
                            width={80}
                            height={80}
                            className="w-[80px] h-auto mx-0 sepia"
                          />
                          <p className="mt-2 text-[#31936d] xl:text-[18px] xl:leading-[26px] text-[16px] leading-[24px] max-md:text-[16px] max-md:leading-[22px] font-semibold max-[501px]:text-center">
                            {heading}
                          </p>
                          <p className="mt-1 text-[#171717] xl:text-[16px] xl:leading-[22px] text-[16px] leading-[20px] font-normal max-[501px]:text-center">
                            {imgtitle}
                          </p>
                        </div>

                        {link && (
                          <Link
                            href={link}
                            className="absolute inset-0"
                            aria-label={imgtitle}
                          />
                        )}
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Prev / Next + Pagination dots */}
      <div className="flex justify-between items-center mt-4">
        {/* Prev button */}
        <div
          ref={prevRef}
          className="border-[#91b664] w-[55px] h-[55px] max-lg:w-[45px] max-lg:h-[45px] flex justify-center items-center cursor-pointer bg-white hover:bg-[#f4f4f4] p-3 max-lg:p-2 rounded-full shadow-lg transition duration-200 border">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="#abb4a0"
            className="w-8 h-8">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </div>

        {/* Dots (center) */}
        {totalSlides > 0 && (
          <div className="flex gap-[15px] z-10 w-fit max-md:flex-wrap justify-center">
            {Array.from({ length: totalSlides }).map((_, idx) => (
              <button
                aria-label={`Go to Slide ${idx}`}
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`h-[12px] rounded-full transition-all duration-300 cursor-pointer ${activeIndex === idx
                    ? "bg-[#d9d9d9] w-[35px] max-lg:w-[30px]"
                    : "bg-[#9a8a80] w-[12px] "
                  }`}
              />
            ))}
          </div>
        )}

        {/* Next button */}
        <div
          ref={nextRef}
          className="border-[#91b664] w-[55px] h-[55px] max-lg:w-[45px] max-lg:h-[45px] flex justify-center items-center cursor-pointer bg-white hover:bg-[#f4f4f4] p-3 max-lg:p-2 rounded-full shadow-lg transition duration-200 border">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="#abb4a0"
            className="w-8 h-8">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </>
  );
}

/* ------------ Page Component ------------ */

export default function Treatment() {
  return (
    <section className="pt-[140px] max-2xl:pt-[100px] max-xl:pt-[80px] max-md:pt-[50px]">
      <div className="[1600px]:w-[80%] w-[75%] max-2xl:w-[80%] max-lg:w-[85%] max-mlg:w-[90%] m-auto max-w-[100rem]">
        <h3
          className="text-[#314a10] font-[source,serief4] my-[20px] text-[50px] leading-[52px] max-2xl:text-[42px]
           leading-[48px] max-xl:text-[36px] max-xl:leading-[40px] max-lg:text-[30px] max-lg:leading-[36px] max-mlg:text-[28px] max-mlg:leading-[32px] font-normal   text-center m-auto  max-w-[45%] max-2xl:max-w-[50%]  max-md:max-w-[55%] max-sm:max-w-[90%]">
          Our Ayurvedic Disc Bulge Treatment Approach
        </h3>

        <p className="mt-[20px] text-[#3f2510] text-center m-auto w-[60%] max-xl:w-[80%] max-lg:w-[90%] max-sm:w-[100%] mb-[30px]">
          Samwarthika offers a comprehensive Ayurvedic protocol tailored to disc
          bulge, combining external remedies, detox therapies and herbal
          support to restore spinal balance and reduce nerve compression.
          <br />
          {/* <b> Treatment components may include:</b> */}
        </p>

        <div className="w-[95%] m-auto mt-[40px] max-xl:w-[100%] max-lg:w-full max-w-[100rem]">
          <SideImageSwiper />

          {/* Old static grid kept commented if you want it later */}
          {/* 
            <div className="grid grid-cols-4 gap-[10px] max-lg:grid-cols-3 max-md:grid-cols-2">
              {sideImages.map(({ img, imgtitle }, i) => (
                <div
                  key={i}
                  className="text-center w-full xxl:w-[180px] xxl:h-[180px] w-[150px] h-[150px] max-xl:h-[120px] m-auto flex justify-center flex-col p-[10px] rounded-[20px] overflow-hidden border border-transparent hover:border-[#c3efd2] hover:bg-[#effff5]"
                >
                  <Image
                    src={`${ASSET_PREFIX}${img}`}
                    alt={imgtitle}
                    width={200}
                    height={200}
                    className="w-[80px] h-auto mx-auto sepia"
                  />
                  <p className="mt-2 text-[#31936d] xl:text-[18px] xl:leading-[26px] text-[16px] leading-[24px] font-semibold">
                    {imgtitle}
                  </p>
                </div>
              ))}
            </div>
            */}
        </div>
      </div>
    </section>
  );
}
