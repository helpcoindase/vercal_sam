"use client";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Navigation, Pagination } from "swiper/modules";
import type { NavigationOptions } from "swiper/types";
import { Swiper as SwiperClass } from "swiper";
import Image from "next/image";

import "swiper/css";
import "swiper/css/grid";
import { ASSET_PREFIX } from "../../../config";
export default function Treatment() {
  const sideImages = [
    {
      img: "/assets/images/oil-therapies.svg",
      heading: "Oil Therapies",
      imgtitle:
        "Warm medicated oils relieve stiffness and improve circulation.",
    },
    {
      img: "/assets/images/herbal-poultices.svg",
      heading: "Herbal Poultices",
      imgtitle:
        "Compresses used for targeted relief of muscular and arthritic pain.",
    },
    {
      img: "/assets/images/strengthening-exercises.svg",
      heading: "Strengthening Exercises",
      imgtitle:
        "Gentle physiotherapeutic routines to improve flexibility and muscle power.",
    },
    {
      img: "/assets/images/detoxifying-massages.svg",
      heading: "Detoxifying Massages",
      imgtitle: "Herbal powder therapies to alleviate pain and purify toxins.",
    },
    {
      img: "/assets/images/relaxation-practices.svg",
      heading: "Relaxation Practices",
      imgtitle: "Mind-body techniques to reduce stress and aid recovery.",
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
    const [activeIndex, setActiveIndex] = useState(0);
    return (
      <>
        <div className="hidden md:grid  grid-cols-3  max-sm:grid-cols-1  max-2xl:grid-cols-3  max-md:grid-cols-2 gap-[20px]  max-xxl:gap-[10px]">
          {sideImages.map(({ img, imgtitle, heading }, i) => (
            <div
              className="text-start w-full  h-full  m-auto flex justify-start items-start flex-col p-[30px]  max-lg:p-[20px] rounded-[20px] overflow-hidden border border-transparent hover:border-[#c3efd2] hover:bg-[#effff5]"
              key={i}>
              <Image
                src={`${ASSET_PREFIX}${img}`}
                alt={heading}
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
          ))}
        </div>
        <div className="md:hidden">
          <Swiper
            modules={[Grid, Navigation, Pagination]}
            onSwiper={(s) => (swiperRef.current = s)}
            onSlideChange={(s) => setActiveIndex(s.activeIndex)}
            grid={{ rows: gridConfig.ROWS, fill: "row" }}
            slidesPerView={gridConfig.COLS}
            spaceBetween={20}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            className="mySwiper !pb-8  max-lg:!pb-4  treatments-swiper">
            {sideImages.map(({ img, imgtitle, heading }, i) => (
              <SwiperSlide key={i}>
                <div
                  className="text-start w-full  h-full  m-auto flex justify-start items-start flex-col p-[30px]  max-lg:p-[20px] rounded-[20px] overflow-hidden border border-transparent hover:border-[#c3efd2] hover:bg-[#effff5]"
                  key={i}>
                  <Image
                    src={`${ASSET_PREFIX}${img}`}
                    alt={heading}
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
          {/* </div> */} {/* custom navigation arrows */}
          <div className="flex justify-between mt-2 gap-[25px] items-center">
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
            <div className="flex gap-[15px] max-md:flex-wrap  justify-center z-10 w-fit">
              {Array.from({
                length: Math.ceil(
                  sideImages.length / (gridConfig.ROWS * gridConfig.COLS),
                ),
              }).map((_, idx) => (
                <button
                  key={idx}
                  aria-label={`Go to Slide ${idx}`}
                  onClick={() =>
                    swiperRef.current?.slideTo(
                      idx * gridConfig.ROWS * gridConfig.COLS,
                    )
                  }
                  className={`h-[12px] rounded-full transition-all duration-300 cursor-pointer ${Math.floor(
                    activeIndex / (gridConfig.ROWS * gridConfig.COLS),
                  ) === idx
                      ? "bg-[#d9d9d9] w-[35px] max-lg:w-[30px]"
                      : "bg-[#9a8a80] w-[12px]"
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
        </div>
        {/* </Swiper> */}
      </>
    );
  };
  return (
    <section className="pt-[140px]  max-2xl:pt-[100px]   max-xl:pt-[80px]  max-md:pt-[50px]">
      <div className="[1600px]:w-[80%] w-[75%] max-2xl:w-[80%]  max-lg:w-[85%] max-mlg:w-[90%] m-auto">
        <h3
          className="text-[#314a10] font-[source,serief4] my-[20px] text-[50px] leading-[52px] max-2xl:text-[42px]
           leading-[48px] max-xl:text-[36px] max-xl:leading-[40px] max-lg:text-[30px] max-lg:leading-[36px] max-mlg:text-[28px] max-mlg:leading-[32px] font-normal   text-center m-auto  max-w-[350px]">
          Our Ayurvedic Treatments
        </h3>
        <p className="mt-[20px] text-[#3f2510] text-center m-auto  w-[60%] max-xl:w-[80%]  max-lg:w-[90%] max-sm:w-[100%] mb-[30px]">
          At Samwarthika, we offer customized Ayurveda-based physiotherapy
          practices according to each individual&apos;s needs, integrating
          therapeutic massage, joint treatment and strengthening routines to
          restore mobility and balance. Components of treatment include
        </p>
        <div className="w-[95%] m-auto mt-[40px] max-xl:w-[100%]  max-lg:w-full max-w-[100rem]">
          <SideImageSwiper />
          <div className="grid grid-cols-4  gap-[10px] max-lg:grid-cols-3  max-md:grid-cols-2"></div>
        </div>
      </div>
    </section>
  );
}
