"use client";

import { useEffect, useRef, useState } from "react";

import type { NavigationOptions } from "swiper/types";
import { Swiper as SwiperClass } from "swiper";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css";
import "swiper/css/grid";
import { ASSET_PREFIX } from "../../../config";

export default function Treatment() {
  const sideImages = [
    {
      img: "/assets/images/icons/abhyangam-oil-massage-icon.svg",
      heading: "Abhyangam (Oil Massage)",
      alt: "Ayurveda Oil Massage",
      imgtitle:
        "Full-body massage with medicated oils to improve circulation and relax muscles.",
    },
    {
      img: "/assets/images/icons/swedanam-sudation-therapy-icon.svg",
      heading: "Swedanam (Sudation Therapy)",
      alt: "Sudation Therapy",
      imgtitle:
        "Herbal steam therapy to relieve stiffness and promote flexibility.",
    },
    {
      img: "/assets/images/icons/kati-vasti-icon.svg",
      heading: "Kati Vasti",
      alt: "Kati Vasti",
      imgtitle:
        "Application of warm medicated oil over the lower back to alleviate pain and inflammation.",
    },
    {
      img: "/assets/images/icons/kati-dhara-icon.svg",
      heading: "Kati Dhara",
      alt: "Kati Dhara",
      imgtitle:
        "Continuous pouring of medicated oil over the lower back to soothe nerves and muscles.",
    },
    {
      img: "/assets/images/icons/podi-kizhi-and-ila-kizhi-icon.svg",
      heading: "Podi Kizhi & Ila Kizhi",
      alt: "Herbal poultice Icon",
      imgtitle:
        "Herbal poultice therapy to reduce inflammation and strengthen tissues.",
    },
    {
      img: "/assets/images/icons/njavara-kizh-icon.svg",
      heading: " Njavara Kizhi",
      alt: "Njavara Kizhi icon",
      imgtitle:
        "Rice bolus therapy to nourish and rejuvenate the affected area.",
    },
    {
      img: "/assets/images/icons/vasthi-medicated-enemas-icon.svg",

      heading: "Vasthi (Medicated Enemas)",
      alt: "Vasthi Medicated Enemas",
      imgtitle: "Cleansing therapy to remove toxins and balance doshas.",
    },
    {
      img: "/assets/images/icons/dietary-and-lifestyle-recommandations.svg",
      heading: "Dietary and Lifestyle Recommendations",
      alt: "Dietary and Lifestyle Recommendations icon",
      imgtitle:
        "Guidance on proper posture, exercises and dietary habits to support spinal health.",
    },
    {
      img: "/assets/images/icons/physiotherapy-and-movement-guidance-icon.svg",
      heading: "Physiotherapy and Movement Guidance",
      alt: "Physiotherapy and Movement Guidance icon",
      imgtitle:
        "Safe postures and activity modifications to support recovery and prevent recurrence",
    },
  ];

  const SideImageSwiper = () => {
    const [gridConfig, setGridConfig] = useState({
      PAGE_SIZE: 12,
      ROWS: 3,
      COLS: 4,
    });

    const swiperRef = useRef<SwiperClass | null>(null);
    const prevRef = useRef<HTMLDivElement | null>(null);
    const nextRef = useRef<HTMLDivElement | null>(null);

    const getGridConfig = () => {
      if (typeof window !== "undefined") {
        if (window.innerWidth > 750 && window.innerWidth < 900) {
          return { PAGE_SIZE: 6, ROWS: 2, COLS: 3 };
        } else if (window.innerWidth > 500 && window.innerWidth <= 750) {
          return { PAGE_SIZE: 4, ROWS: 2, COLS: 2 };
        } else if (window.innerWidth <= 500) {
          return { PAGE_SIZE: 2, ROWS: 1, COLS: 1 };
        }
      }
      return { PAGE_SIZE: 12, ROWS: 2, COLS: 4 };
    };

    // attach custom navigation
    useEffect(() => {
      if (!swiperRef.current || !prevRef.current || !nextRef.current) return;

      const swiper = swiperRef.current;
      if (
        swiper.params.navigation &&
        typeof swiper.params.navigation !== "boolean"
      ) {
        (swiper.params.navigation as NavigationOptions).prevEl =
          prevRef.current;
        (swiper.params.navigation as NavigationOptions).nextEl =
          nextRef.current;
        swiper.navigation.destroy();
        swiper.navigation.init();
        swiper.navigation.update();
      }
    }, []);

    // resize watcher
    useEffect(() => {
      const update = () => setGridConfig(getGridConfig());
      update();
      window.addEventListener("resize", update);
      return () => window.removeEventListener("resize", update);
    }, []);
    const perPage = gridConfig.ROWS * gridConfig.COLS; // 2 * 4 = 8

    // Ensure navigation DOM refs are attached to Swiper (fallback)
    const [activeIndex, setActiveIndex] = useState(0);
    return (
      <>
        {/* <div className="hidden md:grid  grid-cols-4  max-sm:grid-cols-1  max-2xl:grid-cols-3  max-md:grid-cols-2 gap-[20px]  max-xxl:gap-[10px]"> */}
        <Swiper
          modules={[Grid, Navigation]}
          onSwiper={(s) => (swiperRef.current = s)}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          grid={{ rows: gridConfig.ROWS, fill: "row" }}
          slidesPerView={gridConfig.COLS}
          spaceBetween={20}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          className="mySwiper !pb-8  max-lg:!pb-4  treatments-swiper">
          {sideImages.map(({ img, imgtitle, heading, alt }, i) => (
            <SwiperSlide key={i}>
              <div
                className="text-start w-full  h-full  m-auto flex justify-start items-start flex-col p-[30px]  max-lg:p-[20px] rounded-[20px] overflow-hidden border border-transparent hover:border-[#c3efd2] hover:bg-[#effff5]"
                key={i}>
                <Image
                  src={`${ASSET_PREFIX}${img}`}
                  alt={alt}
                  width={200}
                  height={200}
                  className="w-[80px] h-auto mx-0 sepia"
                />
                <p className="mt-2 text-[#31936d] xl:text-[18px] xl:leading-[26px] text-[16px] leading-[24px]  max-md:text-[16px] max-md:leading-[22px] font-semibold">
                  {heading}
                </p>
                <p className="mt-2 text-[#171717] xl:text-[16px] xl:leading-[22x] text-[16px] leading-[22px] font-normal">
                  {imgtitle}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* </div> */}

        {/* custom navigation arrows */}
        <div className="flex justify-between mt-2  gap-[25px] items-center">
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
          {/* custom pagination (hide if only one page) */}
          <div className="flex gap-[15px] z-10 w-fit max-md:flex-wrap justify-center">
            {Array.from({
              length: Math.ceil((sideImages?.length || 0) / perPage),
            }).map((_, idx) => (
              <button
                key={idx}
                aria-label={`Go to Slide  ${idx}`}
                onClick={() => swiperRef.current?.slideTo(idx * perPage)}
                className={`h-[12px]  rounded-full transition-all duration-300 cursor-pointer ${Math.floor(activeIndex / perPage) === idx
                    ? "bg-[#d9d9d9] w-[35px] max-lg:w-[25px]"
                    : "bg-[#9a8a80] w-[12px] max-lg:w-[10px]"
                  }`}
              />
            ))}
          </div>

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
  };
  return (
    <section className="pt-[140px]  max-2xl:pt-[100px]   max-xl:pt-[80px]  max-md:pt-[50px]">
      <div className="[1600px]:w-[80%] w-[75%] max-2xl:w-[80%]  max-lg:w-[85%] max-mlg:w-[90%] m-auto">
        <h3
          className="text-[#314a10] font-[source,serief4] my-[20px] text-[50px] leading-[52px] max-2xl:text-[42px]
           leading-[48px] max-xl:text-[36px] max-xl:leading-[40px] max-lg:text-[30px] max-lg:leading-[36px] max-mlg:text-[28px] max-mlg:leading-[32px] font-normal   text-center m-auto  max-w-[45%] max-2xl:max-w-[50%]  max-md:max-w-[55%] max-sm:max-w-[90%]">
          Our Ayurvedic Lumbar Spondylosis Treatment Approach
        </h3>
        <p className="mt-[20px] text-[#3f2510] text-center m-auto  w-[60%] max-xl:w-[80%]  max-lg:w-[90%] max-sm:w-[100%] mb-[30px]">
          At Samwarthika, we offer a personalized Ayurvedic approach to manage
          lumbar spondylosis. Our treatments aim to pacify the vitiated Vata
          dosha, relieve pain and strengthen the lower back region. Each
          treatment plan is tailored to the individual&apos;s body constitution
          and specific symptoms.
          <br />
          {/* <b> Treatment components may include:</b> */}
        </p>
        <div className="w-[95%] m-auto mt-[40px] max-xl:w-[100%]  max-lg:w-full max-w-[100rem]">
          <SideImageSwiper />
          <div className="grid grid-cols-4  gap-[10px] max-lg:grid-cols-3  max-md:grid-cols-2">
            {/* {sideImages.map(({ img, imgtitle }, i) => (
              <div
                key={i}
                className="text-center w-full xxl:w-[180px] xxl:h-[180px] w-[150px] h-[150px] max-xl:h-[120px] m-auto flex justify-center flex-col p-[10px] rounded-[20px] overflow-hidden border border-transparent hover:border-[#c3efd2] hover:bg-[#effff5]">
                <Image
                  src={`${ASSET_PREFIX}${img}`}
                  alt={imgtitle}
                  width={200}
                  height={200}
                  className="w-[80px] h-auto mx-auto sepia"
                />
                <p className="mt-2 text-[#31936d]  xl:text-[18px] xl:leading-[26px] text-[16px] leading-[24px] font-semibold">
                  {imgtitle}
                </p>
              </div>
            ))} */}
          </div>
        </div>
      </div>
    </section>
  );
}
