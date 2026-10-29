"use client";
import { ASSET_PREFIX } from "../../../../config";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";

import React, { useRef, useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const sliderImages = {
  Air: [
    {
      img: [
        {
          src: "/assets/images/subbanner/cochin-international-airport.webp",
          alt: "Cochin International Airport",
        },
      ],
      title: "The Ayurvedic Hospitality",
      subtitle: "Travel by Air",
      desc: "A private pickup can be arranged from Cochin International Airport (≈ 33 km away).",
    },
  ],
  Rail: [
    {
      img: [
        {
          src: "/assets/images/subbanner/ernakulam-railway-station.webp",
          alt: "Ernakulam RailwayStation",
        },
      ],

      title: "The Ayurvedic Hospitality",
      subtitle: "Travel by Rail",
      desc: "We’re 36 km from Ernakulam or Aluva station-local transfers available.",
    },
  ],
  Road: [
    {
      img: [
        {
          src: "/assets/images/subbanner/muvattupuzha-road.webp",
          alt: "Muvattupuzha Road",
        },
      ],
      title: "The Ayurvedic Hospitality",
      subtitle: "Travel by Road",
      desc: "Located near MC Road-just 600 m off, with easy access by bus, taxi or auto.",
    },
  ],
  Water: [
    {
      img: [
        {
          src: "/assets/images/subbanner/cochin-international-cruise-terminal.webp",
          alt: "Cochin International Terminal Cruise",
        },
      ],
      title: "The Ayurvedic Hospitality",
      subtitle: "Travel by Water",
      desc: "If arriving via Kochi’s cruise terminals, we can assist with comfortable transfers.",
    },
  ],
} as const;

// Extract type of one tab
type TabKey = keyof typeof sliderImages;

export default function MedicalTourLocation() {
  const [activeTab, setActiveTab] = useState<TabKey>("Air");
  const [activeIndex, setActiveIndex] = useState(0);

  const swiperRef = useRef<SwiperType | null>(null);
  const tabs: TabKey[] = ["Air", "Rail", "Road", "Water"];

  return (
    <>
      <section className="py-[140px]  max-2xl:py-[100px]   max-xl:py-[80px]  max-md:py-[50px]">
        {/* Section 2 */}
        <div className="w-[90%] m-[auto] max-w-[120rem]">
          <h3
            className="m-auto text-[#304A10] font-[source,serief4] mb-[20px] mt-[8px] text-[60px] leading-[65px] max-2xl:text-[52px]
           leading-[58px] max-xl:text-[46px] max-xl:leading-[50px] max-lg:text-[40px] max-lg:leading-[46px] max-mlg:text-[38px] max-mlg:leading-[42px] font-light   text-center w-[fit-content]">
            Signature Healing Packages
          </h3>
          <p className="text-center text-[#341903] text-[16px] leading-[24px] font-medium   w-[50%] max-lg:w-[100%] max-2xl:w-[60%] max-md:w-[100%] m-auto">
            Our programs are crafted to align with your personal health
            journey-ranging from gentle rejuvenation to comprehensive
            therapeutic care. Every itinerary includes daily Ayurvedic
            treatments, nourishing meals and professional supervision to
            support your healing.
          </p>
        </div>

        {/* Tabs */}
        <div className="w-[90%] m-auto max-w-[120rem] ">
          <p className="m-auto mt-[60px] mb-[20px]  text-[#361902cc] text-[20px]  leading-[24px] max-xl:text-[18px] max-xl:leading-[22px]  max-lg:text-[16px] max-lg:leading-[20px]  font-medium  text-start ">
            Getting to Samwarthika by:
          </p>
          <div className="tab border-b border-[#dcdcdc] flex gap-[20px] mb-5  max-md:flex-wrap">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setActiveIndex(0);
                  swiperRef.current?.slideToLoop(0); // reset to first slide of selected tab
                }}
                className={`p-[10px_20px_5px] min-w-[150px] border-b-2 cursor-pointer transition duration-300 rounded-t-lg ${activeTab === tab ? "border-[#ff7103]" : "border-transparent"
                  } hover:bg-[#f5f5f5]`}>
                <p className="text-[#341903] text-center text-[16px] leading-[24px] font-medium m-auto">
                  {tab}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Section 4 - Swiper with custom dots */}
        <div className="w-[90%] m-auto max-w-[120rem] mt-[50px]">
          {tabs.map((tabKey) => {
            const isActive = activeTab === tabKey;
            const slides = sliderImages[tabKey];
            const firstSlide = slides[0];

            return (
              <div
                key={tabKey}
                className={`group ${isActive
                  ? "grid grid-cols-[55%_45%] max-lg:grid-cols-[50%_50%] max-[850px]:flex max-[850px]:flex-col-reverse"
                  : "hidden"
                  }`}>
                {/* Left column - Swiper (only for active tab) */}
                <div className="relative">
                  {isActive ? (
                    <Swiper
                      modules={[Navigation, Pagination, Autoplay]}
                      onSwiper={(swiper) => (swiperRef.current = swiper)}
                      onSlideChange={(swiper) =>
                        setActiveIndex(swiper.realIndex)
                      }
                      autoplay={{ delay: 3000 }}
                      loop={true}
                      className="w-full h-fit">
                      {slides.map((slide, i) =>
                        slide.img.map((item, j) => (
                          <SwiperSlide key={`${tabKey}-${i}-${j}`}>
                            <div className="relative h-fit">
                              <Image
                                src={`${ASSET_PREFIX}${item.src}`}
                                alt={item.alt}
                                width={1000}
                                height={500}
                                className="w-full h-full object-cover object-center max-h-[539px]"
                              />
                            </div>
                          </SwiperSlide>
                        )),
                      )}
                    </Swiper>
                  ) : (
                    // Hidden tabs still render their images for DOM/SEO, but no Swiper needed
                    <div className="w-full h-fit">
                      {slides.map((slide, i) =>
                        slide.img.map((item, j) => (
                          <div
                            key={`static-${tabKey}-${i}-${j}`}
                            className="relative h-fit">
                            <Image
                              src={`${ASSET_PREFIX}${item.src}`}
                              alt={item.alt}
                              width={1000}
                              height={500}
                              className="w-full h-full object-cover object-center max-h-[539px]"
                            />
                          </div>
                        )),
                      )}
                    </div>
                  )}

                  {/* Custom Pagination - only needed for active tab */}
                  {isActive && (
                    <div className="absolute bottom-5 left-[5%] flex gap-[15px] z-10">
                      {firstSlide.img.map((_, idx) => (
                        <button
                          key={idx}
                          aria-label="button"
                          onClick={() => swiperRef.current?.slideToLoop(idx)}
                          className={`w-[15px] h-[15px] rounded-full transition-all duration-300 cursor-pointer ${activeIndex === idx
                            ? "bg-[#4d8a01]"
                            : "bg-[#d9d9d9]"
                            }`}
                        />
                      ))}
                    </div>
                  )}
                </div>

                {/* Right column - text */}
                <div className="bg-[#43230B] flex items-center justify-center p-8 max-mlg:p-5 max-sm:p-3 text-white border-l-2 border-white h-auto relative">
                  <div className="py-[40px] max-xl:py-[30px] max-mlg:py-[20px] w-[90%] max-xl:w-[95%] max-md:w-[98%] mx-auto text-center">
                    {/* Title */}
                    <p className="uppercase text-gray-200 mb-3 text-[20px] max-xl:text-[18px] max-lg:text-[16px] font-medium">
                      {firstSlide?.title}
                    </p>

                    {/* Subtitle */}
                    <h2 className="text-white my-[20px] text-[40px] max-2xl:text-[38px] max-xl:text-[34px] max-lg:text-[28px] max-mlg:text-[24px] max-sm:text-[20px] font-light leading-tight">
                      {firstSlide?.subtitle}
                    </h2>

                    {/* Decorative Wave */}
                    <div className="w-[35%] max-mlg:w-[40%] mb-5 mx-auto mt-[15px]">
                      <Image
                        src={`${ASSET_PREFIX}/assets/images/wave-shape.webp`}
                        alt="decorative wave"
                        width={424}
                        height={23}
                        className="w-full h-fit object-cover"
                      />
                    </div>

                    {/* Description */}
                    <p className="w-[75%] mx-auto text-white/80 text-[20px] max-2xl:text-[18px] max-lg:text-[16px] mt-[50px] max-xl:mt-[35px] max-lg:mt-[25px] leading-relaxed">
                      {firstSlide?.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
