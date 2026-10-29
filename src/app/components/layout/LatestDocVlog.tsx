"use client";
import React, { useRef, useState } from "react";
import Link from "next/link";
import { ASSET_PREFIX } from "../../../../config";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import type { NavigationOptions } from "swiper/types";

import { AnimatePresence, motion } from "framer-motion";

export default function LatestDocVlog() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const DoctorVlogSwiper = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    // Slides + YouTube video link (add real links)
    const images = [
      {
        src: `${ASSET_PREFIX}/assets/images/dr-jeevan-k-jose-rheumatoid-arthritis.webp`,
        video: "https://www.youtube.com/watch?v=50gi1T_pFL8",
        alt: "Dr Jeevan K Jose Speaks about Rheumatoid Arthritis",
      },
      {
        src: `${ASSET_PREFIX}/assets/images/dr-jomy-joseph-speaks-karkidaka-treatment.webp`,
        video: "https://www.youtube.com/watch?v=jRWsTxYTpT8",
        alt: "Dr Jomy Joseph Speaks about Karkidaka Treatment",
      },
      {
        src: `${ASSET_PREFIX}/assets/images/dr-jeevan-k-jose-rheumatoid-arthritis.webp`,
        video: "https://www.youtube.com/watch?v=4jlC6hzh4IY",
        alt: "Dr Jeevan K Jose Speaks about Rheumatoid Arthritis", 
      },

      {
        src: `${ASSET_PREFIX}/assets/images/dr-kn-subramanian-namboothiri-cancer-treatment-ayurveda.webp`,
        video: "https://www.youtube.com/watch?v=0zecZiVt2dQ",
        alt: "Dr. K. N. Subramanian Namboothiri about Cancer Treatment in Ayurveda",
      },
      {
        src: `${ASSET_PREFIX}/assets/images/samwarthika-doctors-autism-treatment.webp`,
        video: "https://youtube.com/watch?v=joaB8RaBsPw",
        alt: "Samwarthika Doctors About Autism Treatment",
      },
    ];

    return (
      <>
        <div className="relative w-full px-[30px] max-[480px]:px-[15px]">
          <Swiper
            modules={[Navigation, Autoplay]}
            slidesPerView={1}
            spaceBetween={20}
            loop={false}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            onSwiper={(swiper) => {
              setTimeout(() => {
                if (!swiper || swiper.destroyed || !swiper.params) return;
                const navigation = swiper.params.navigation as NavigationOptions;
                if (navigation && typeof navigation !== 'boolean' && prevRef.current && nextRef.current) {
                  navigation.prevEl = prevRef.current;
                  navigation.nextEl = nextRef.current;
                  swiper.navigation?.destroy();
                  swiper.navigation?.init();
                  swiper.navigation?.update();
                }
              });
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="w-full mx-auto">
            {images.map((img, index) => (
              <SwiperSlide key={index}>
                <div
                  className="rounded-[30px] overflow-hidden group cursor-pointer relative"
                  onClick={() => setSelectedIndex(index)}>
                  <Image
                    width={560}
                    height={315}
                    alt={img.alt}
                    src={img.src}
                    className="w-full h-auto transition duration-1000 group-hover:scale-[1.1]"
                  />

                  {/* Play Icon */}
                  <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
                    <svg
                      width="80"
                      height="80"
                      viewBox="0 0 100 100"
                      className="opacity-90 transition group-hover:opacity-100 max-[480px]:w-[40px]">
                      <circle
                        cx="50"
                        cy="50"
                        r="48"
                        fill="rgba(0,0,0,0.55)"
                        stroke="white"
                        strokeWidth="3"
                      />
                      <polygon points="40,30 75,50 40,70" fill="white" />
                    </svg>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <div
            ref={prevRef}
            className="prev-nav absolute top-1/2 -translate-y-1/2 left-[-3.5rem] max-md:left-[-2.5rem] max-sm:left-[-1.5rem] z-10 cursor-pointer bg-white hover:bg-[#f4f4f4] p-[4px] sm:p-3 rounded-full shadow-lg transition duration-200 border border-[#d6cbbe]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              strokeWidth={2}
              stroke="#553e2b"
              className="w-6 h-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </div>

          <div
            ref={nextRef}
            className="next-nav absolute top-1/2 -translate-y-1/2 right-[-3.5rem] max-md:right-[-2.5rem] max-sm:right-[-1.5rem] z-10 cursor-pointer bg-white hover:bg-[#f4f4f4] p-[4px] sm:p-3 rounded-full shadow-lg transition duration-200 border border-[#d6cbbe]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              strokeWidth={2}
              stroke="#553e2b"
              className="w-6 h-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>

        {/* Popup YouTube Player */}
        <AnimatePresence>
          {selectedIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-[9999]"
              onClick={() => setSelectedIndex(null)}>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl max-w-3xl w-full relative max-sm:max-w-[90%]"
                onClick={(e) => e.stopPropagation()}>
                <button
                  onClick={() => setSelectedIndex(null)}
                  className="absolute -top-10 right-0 text-white hover:text-red cursor-pointer text-2xl ">
                  ✕
                </button>

                <iframe
                  width="100%"
                  height="450"
                  src={images[selectedIndex].video.replace(
                    "watch?v=",
                    "embed/"
                  )}
                  title="YouTube video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-xl w-full"></iframe>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    );
  };

  return (
    <section className={`py-[70px]   max-xl:py-[60px]  max-md:py-[40px]  `}>
      <div className="w-[90%] m-auto max-w-[120rem]">
        <h3 className="mt-0 m-auto text-[#314a10] font-[source,serief4] my-[20px] font-normal          text-[30px] leading-[36px]   sm:text-[34px] sm:leading-[40px]   md:text-[38px] md:leading-[45px]   xl:text-[45px] xl:leading-[52px]   2xl:text-[60px] 2xl:leading-[65px]   text-center w-[fit-content]">
          Latest Doctors Talk
        </h3>

        {/* Know More button */}
        <div className="w-[80%]  flex flex-wrap gap-[20px] justify-center sm:justify-end m-[auto]  max-[1200px]:w-[80%] max-mlg:w-[80%]  max-md:w-[85%] relative">
          <Link
            href="/doctors-talk"
            className="uppercase border-1 text-[16px] sm:text-[16px] text-[var(--primary)] border-[var(--primary)] py-[7px] sm:py-[10px] px-[20px] sm:px-[30px] hover:bg-[#304A10] 
            hover:text-white transition tracking-[2px]">
            View More
          </Link>
        </div>

        <div className="w-[90%] mx-auto mt-[60px]">
          <DoctorVlogSwiper />
        </div>
      </div>
    </section>
  );
}
