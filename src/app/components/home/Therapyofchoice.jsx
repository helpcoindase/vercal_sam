"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import { ASSET_PREFIX } from "../../../../config";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import React, { useState, useRef } from "react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

export default function Therapyofchoice() {
  const [loadPanoraven, setLoadPanoraven] = useState(false);
  const sliderImages = [
    {
      url: "/assets/images/pgs-ayurvedic-resort.webp",
      alt: "PGS Ayurvedic Resort",
    },
    { url: "/assets/images/subbanner/medical-tourism.webp", alt: "about us" },
    {
      url: "/assets/images/subbanner/monsoon-treatment-in-ayurveda.webp",
      alt: "Monsoon Treatment in Ayurveda",
    },
  ];
  const sliderImages1 = [
    {
      url: "/assets/images/athirappilly-waterfalls.webp",
      alt: "Athirappilly Water Falls",
    },
    {
      url: "/assets/images/chottanikkara-temple.webp",
      alt: "Chottanikkara Temple",
    },
    { url: "/assets/images/munnar.webp", alt: "Munnar" },
  ];

  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <section className="pt-[140px]  max-2xl:pt-[100px]   max-xl:pt-[80px]  max-md:pt-[50px]">
        {/* Section 2 */}
        <div className="w-[90%] m-[auto] max-w-[120rem]">
          {/* <p className="m-auto uppercase text-[#361902cc] text-[20px]  leading-[24px] max-xl:text-[18px] max-xl:leading-[22px]  max-lg:text-[16px] max-lg:leading-[20px]  font-medium  text-center w-[fit-content]">
            THE AYURVEDIC TREATMENTS
          </p> */}
          <h3 className="m-auto text-[#314a10] font-[source,serief4] my-[20px] font-normal          text-[30px] leading-[36px]   sm:text-[34px] sm:leading-[40px]   md:text-[38px] md:leading-[45px]   xl:text-[45px] xl:leading-[52px]   2xl:text-[60px] 2xl:leading-[65px]   text-center max-w-[35%] max-2xl:max-w-[45%] max-xl:max-w-[40%]  max-md:max-w-[55%] max-sm:max-w-[70%]">
            Get a Therapy of your Choice
          </h3>

          <div className=" grid grid-cols-[55%_45%] max-lg:grid-cols-[50%_50%] max-[850px]:flex max-[850px]:flex-col-reverse mt-[60px] max-2xl:mt-[40px] max-mlg:mt-[30px]">
            <div className="relative ">
              <div className="h-full">
                <div className="h-full min-h-[360px] relative">
                  {!loadPanoraven ? (
                    <div className="relative w-full h-full min-h-[360px]">
                      <Image
                        src={`${ASSET_PREFIX}/assets/images/pgs-ayurvedic-resort.webp`}
                        alt="PGS Ayurvedic Resort"
                        width={1000}
                        height={500}
                        className="w-full h-full min-h-[360px] object-cover object-center"
                      />

                      <button
                        type="button"
                        onClick={() => setLoadPanoraven(true)}
                        className="absolute inset-0 m-auto w-fit h-fit bg-white text-[#43230B] px-6 py-3 rounded-full shadow-lg font-medium"
                      >
                        View 360°
                      </button>
                    </div>
                  ) : (
                    <iframe
                      loading="lazy"
                      sandbox="allow-scripts allow-same-origin allow-pointer-lock allow-popups allow-popups-to-escape-sandbox"
                      width="100%"
                      height="100%"
                      title="360 degree view"
                      allow="accelerometer; magnetometer; gyroscope; xr-spatial-tracking; fullscreen"
                      allowFullScreen
                      src="https://panoraven.com/en/embed/I0NGJFDDyL"
                      className="w-full min-h-[360px] border-0"
                    />
                  )}
                </div>
              </div>
              {/* <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              autoplay={{ delay: 3000 }}
              loop={true}
              className="w-full h-[100%]"
            >
              {sliderImages.map((src, i) => (
                <SwiperSlide key={i}>
                  <Image
                    src={`${ASSET_PREFIX}${src}`}
                    alt={`Slide ${i + 1}`}
                    width={1000}
                    height={500}
                    className="w-full h-full object-cover object-center"
                  />
                </SwiperSlide>
              ))}
            </Swiper> */}

              {/* Custom Pagination Dots (left side) */}
              {/* <div className="absolute bottom-5 left-[5%] flex gap-[5px] z-10">
              {sliderImages.map((_, idx) => (
                <button
                  key={idx}
                  aria-label={`Go to Slide ${idx}`}
                  onClick={() => swiperRef.current?.slideToLoop(idx)}
                  className={`w-[15px] h-[15px] rounded-full transition-all duration-300 cursor-pointer ${activeIndex === idx ? "bg-[#4d8a01]" : "bg-[#d9d9d9]"
                    }`}
                />
              ))}
            </div> */}
            </div>

            <div className="bg-[#657d46] flex items-center justify-center p-8 max-mlg:p-5 max-sm:p-3 text-white max-[850px]:border-b-[2px] min-[850px]:border-l-[2px] border-white">
              <div className="py-[40px]   max-xl:py-[30px]  max-mlg:py-[20px] w-[90%]  max-xl:w-[95%] max-md:w-[98%]">
                <p className=" uppercase  text-[#000] mb-3 m-auto text-center text-[20px]  leading-[24px] max-xl:text-[18px] max-xl:leading-[22px]  max-lg:text-[16px] max-lg:leading-[20px]  font-medium  text-center w-[fit-content]">
                  The Ayurvedic Hospitality
                </p>
                <h2 className="text-[#fff] m-auto  font-[source,serief4] my-[20px] text-[40px] leading-[46px] max-2xl:text-[38px]   leading-[42px] max-xl:text-[34px] max-xl:leading-[40px] max-lg:text-[28px] max-lg:leading-[32px] max-mlg:text-[24px] max-mlg:leading-[30px] max-sm:text-[20px] max-sm:leading-[24px] font-light  text-center w-[fit-content]">
                  Book an Ayurvedic Treatment or Schedule an Appointment With Us Now!
                </h2>
                <div className="w-[35%]  max-mlg:w-[40%] mb-5 mx-auto -mt-[15px]">
                  <Image
                    loading="lazy"
                    src={`${ASSET_PREFIX}/assets/images/wave-shape.webp`}
                    alt="Wave"
                    width={424}
                    height={23}
                    className="w-full h-[100%]  object-cover object-center"
                  />
                </div>
                <p className="w-[75%] m-auto text-[#fffffffc] text-[20px] leading-[30px] max-2xl:text-[18px] max-2xl:leading-[22px]  max-lg:text-[16px] max-lg:leading-[20px] mt-[50px] max-xl:mt-[35px] max-lg:mt-[25px] text-center  max-xl:w-[80%]">
                  To keep alive the legacy of Ayurveda by adapting modern
                  innovations into holistic healing practices in building a
                  healthier world.
                </p>
                <Link href={"/contact-us"} className="book-app-therapy">
                  <div className="flex w-fit mt-[30px] mx-auto text-[16px] text-[#657d46] hover:text-[#fff] font-[500] leading-[18px] tracking-[2px] uppercase font-light px-5 py-3 bg-[#fff] hover:bg-transparent border-1 border-[#fff] hover:border-[#fff] transition duration-300 ">
                    Book Now
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div className="w-[90%] m-[auto] max-w-[120rem] group">
          <div className="grid grid-cols-[50%_50%] max-[850px]:grid-cols-[100%] mt-[20px] sm:mt-[50px]">
            <div className="bg-[#CB6313] flex items-center justify-center p-8 max-mlg:p-5 max-sm:p-3 text-white">
              <div className="py-[40px]   max-xl:py-[30px]  max-mlg:py-[20px] w-[90%]  max-xl:w-[95%] max-md:w-[98%]">
                {/* <p className=" uppercase  text-gray-200 mb-3 m-auto text-center text-[20px]  leading-[24px] max-xl:text-[18px] max-xl:leading-[22px]  max-lg:text-[16px] max-lg:leading-[20px]  font-medium  text-center w-[fit-content]">
                  The Ayurvedic Hospitality
                </p> */}
                <h2
                  className="text-[#000] m-auto  font-[source,serief4] my-[20px] text-[40px] leading-[46px] max-2xl:text-[38px]
           leading-[42px] max-xl:text-[34px] max-xl:leading-[40px] max-lg:text-[28px] max-lg:leading-[32px] max-mlg:text-[24px] max-mlg:leading-[30px] max-sm:text-[20px] max-sm:leading-[24px] font-light   text-center w-[fit-content]">
                  Academics
                  <br className="max-mlg:hidden" />
                </h2>
                <div className="w-[35%]  max-mlg:w-[40%] mb-5 mx-auto -mt-[15px]">
                  <Image
                    loading="lazy"
                    src={`${ASSET_PREFIX}/assets/images/wave-shape.webp`}
                    alt="Wave"
                    width={424}
                    height={23}
                    className="w-full h-[100%]  object-cover object-center"
                  />
                </div>
                <p className="w-[75%] m-auto text-[#fff]/80 text-[20px] leading-[30px] max-2xl:text-[18px] max-2xl:leading-[22px]  max-lg:text-[16px] max-lg:leading-[20px] mt-[50px] max-xl:mt-[35px] max-lg:mt-[25px] text-center  max-xl:w-[80%]">
                  Samwarthika: Your Journey to Complete Wellness Begins Here!
                  NABH-accredited care and expert practitioners guiding your
                  path to health & wellness
                </p>
                <Link
                  href={"/course"}
                  className="flex w-fit mt-[30px] mx-auto text-[16px] text-[#657d46] hover:text-[#fff] font-[500] leading-[18px] tracking-[2px] uppercase font-light px-5 py-3 bg-[#fff] hover:bg-transparent border-1 border-[#fff] hover:border-[#fff] transition duration-300">
                  Know more
                </Link>
              </div>
            </div>
            <div className="text-white max-[850px]:border-t-[2px] min-[850px]:border-l-[2px] border-white">
              <Image
                loading="lazy"
                src={`${ASSET_PREFIX}/assets/images/samwarthika-academics.webp`}
                alt="Samwarthika Academics"
                width={1000}
                height={300}
                className="w-full h-full object-cover object-center "
              />
            </div>
          </div>
        </div>

        {/* Section 4 - Swiper with custom dots */}
        <div className=" w-[90%] m-auto max-w-[120rem] mt-[20px] sm:mt-[50px] grid grid-cols-[55%_45%]  max-lg:grid-cols-[50%_50%] max-[850px]:flex! max-[850px]:flex-col-reverse group">
          {/* Left column - Swiper */}
          <div className="relative ">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              autoplay={{ delay: 3000 }}
              loop={true}
              className="w-full h-[100%]">
              {sliderImages1.map((src, i) => (
                <SwiperSlide key={i}>
                  <Image
                    loading="lazy"
                    src={`${ASSET_PREFIX}${src.url}`}
                    alt={`${src.alt}`}
                    width={1000}
                    height={500}
                    className="w-full h-full object-cover object-center"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Pagination Dots (left side) */}
            <div className="absolute bottom-5 left-[5%] flex gap-[15px]! z-10 ">
              {sliderImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => swiperRef.current?.slideToLoop(idx)}
                  aria-label="button"
                  className={`w-[15px] h-[15px] rounded-full transition-all duration-300 cursor-pointer   ${activeIndex === idx ? "bg-[#4d8a01]" : "bg-[#d9d9d9]"
                    }`}
                />
              ))}
            </div>
          </div>

          {/* Right column - text */}
          <div className="bg-[#43230B] flex items-center justify-center p-8 max-mlg:p-5 max-sm:p-3 text-white max-[850px]:border-b-[2px] min-[850px]:border-l-[2px] border-white h-full  ">
            <div className="py-[40px]   max-xl:py-[30px]  max-mlg:py-[20px] w-[90%]  max-xl:w-[95%] max-md:w-[98%]  max-md:w-[98%]">
              {/* <p className=" uppercase  text-gray-200 mb-3 m-auto text-center text-[20px]  leading-[24px] max-xl:text-[18px] max-xl:leading-[22px]  max-lg:text-[16px] max-lg:leading-[20px]  font-medium  text-center w-[fit-content]">
                The Ayurvedic Hospitality
              </p> */}
              <h2 className="text-[#fff] m-auto  font-[source,serief4] my-[20px] text-[40px] leading-[46px] max-2xl:text-[38px]   leading-[42px] max-xl:text-[34px] max-xl:leading-[40px] max-lg:text-[28px] max-lg:leading-[32px] max-mlg:text-[24px] max-mlg:leading-[30px] max-sm:text-[20px] max-sm:leading-[24px] font-light   text-center w-[fit-content]">
                Medical Tourism
              </h2>
              <div className="w-[35%]  max-mlg:w-[40%] mb-5 mx-auto -mt-[15px]">
                <Image
                  loading="lazy"
                  src={`${ASSET_PREFIX}/assets/images/wave-shape.webp`}
                  alt="Front view of Ayurvedic Hospital"
                  width={424}
                  height={23}
                  className="w-full h-[100%]  object-cover object-center"
                />
              </div>
              <p className="w-[75%] m-auto text-[#fff]/80 text-[20px] leading-[30px] max-2xl:text-[18px] max-2xl:leading-[22px]  max-lg:text-[16px] max-lg:leading-[20px] mt-[50px] max-xl:mt-[35px] max-lg:mt-[25px] text-center  max-xl:w-[80%]">
                Welcome to Samwarthika’s Medical Tourism Program! Discover the
                perfect blend of authentic Ayurvedic healing and the serene
                beauty of Kerala.
              </p>
              <Link
                href={"/medical-tourism"}
                className="flex w-fit mt-[30px] mx-auto text-[16px] text-[#657d46] hover:text-[#fff] font-[500] leading-[18px] tracking-[2px] uppercase font-light px-5 py-3 bg-[#fff] hover:bg-transparent border-1 border-[#fff] hover:border-[#fff] transition duration-300 ">
                Know more
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
