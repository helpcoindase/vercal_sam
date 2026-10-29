"use client";
import React, { useRef, useState } from "react";
import Link from "next/link";
import { ASSET_PREFIX } from "../../../../config";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import type { NavigationOptions } from "swiper/types";

import { AnimatePresence, motion } from "framer-motion";

export default function TestimonialsSlider() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const DoctorVlogSwiper = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    // Slides + YouTube video links
    const images = [
      {
        src: `${ASSET_PREFIX}/assets/images/one-of-our-oman-patient-talking.webp`,
        video: "https://www.youtube.com/watch?v=O4ZwPlr_0Hg",
        alt: "Doctor Vlog 1",
      },
      {
        src: `${ASSET_PREFIX}/assets/images/treatment-experience.webp`,
        video: "https://www.youtube.com/watch?v=wdkQN42PEYE",
        alt: "Treatment Experience",
      },
      {
        src: `${ASSET_PREFIX}/assets/images/treatment-experience-02.webp`,
        video: "https://www.youtube.com/watch?v=Rr3oC7NBNQE",
        alt: "Doctor Vlog 3",
      },
      {
        src: `${ASSET_PREFIX}/assets/images/kyrgyzstan-patient-treatment-experience.webp`,
        video: "https://www.youtube.com/watch?v=2NX7SwwjYSo",
        alt: "Kyrgyzstan Patient Treatment experience.",
      },
      {
        src: `${ASSET_PREFIX}/assets/images/samwarthika-ayurvedic-hospital.webp`,
        video: "https://www.youtube.com/watch?v=k8brpBBQhrE",
        alt: "Samwarthika Ayurvedic Hospital",
      },
    ];

    return (
      <>
        <div className="relative w-full px-[30px] max-[480px]:px-[15px] ">
          <Swiper
            modules={[Navigation, Autoplay]}
            slidesPerView={1}
            spaceBetween={20}
            loop={false}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
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
                  className="rounded-[30px] overflow-hidden group cursor-pointer"
                  onClick={() => setSelectedIndex(index)}>
                  <Image
                    width={560}
                    height={315}
                    alt={img.alt}
                    src={img.src}
                    className="w-full h-auto transition duration-1000 group-hover:scale-[1.1]"
                  />

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

          {/* Custom Navigation */}
          <div
            ref={prevRef}
            className="prev-nav absolute top-1/2 -translate-y-1/2 left-[-3.5rem] max-md:left-[-2.5rem] max-sm:left-[-1.5rem] z-10 cursor-pointer bg-white hover:bg-[#f4f4f4] p-3 rounded-full shadow-lg transition duration-200 border border-[#d6cbbe] max-[480px]:p-1">
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
            className="next-nav absolute top-1/2 -translate-y-1/2 right-[-3.5rem] max-md:right-[-2.5rem] max-sm:right-[-1.5rem] z-10 cursor-pointer bg-white hover:bg-[#f4f4f4] p-3 rounded-full shadow-lg transition duration-200 border border-[#d6cbbe] max-[480px]:p-1">
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
                className="bg-white rounded-2xl max-w-3xl w-full  relative max-sm:max-w-[90%]"
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
    <section className="py-[140px] bg-[#d4e8dc] max-2xl:py-[100px] max-xl:py-[80px] max-md:py-[50px]">
      <div className="w-[90%] m-auto max-w-[120rem]">
        <div className="w-[80%]  flex flex-wrap gap-[30px] max-md:flex-col justify-end m-[auto]  max-[1200px]:w-[100%] max-mlg:w-[90%]  max-md:w-[100%] relative">
          <h3 className="m-auto text-[#304A10] font-[source,serief4] mb-[20px] mt-[8px] text-[60px] leading-[65px] max-2xl:text-[52px]   leading-[58px] max-xl:text-[46px] max-xl:leading-[50px] max-lg:text-[40px] max-lg:leading-[46px] max-mlg:text-[38px] max-mlg:leading-[42px] font-normal   text-center w-[fit-content]">
            Testimonials
          </h3>
          <div className="flex  justify-end absolute bottom-[0px]  right-[0px] max-lg:relative">
            <Link
              href="/client-testimonials"
              className="uppercase border-1 text-[var(--primary)] border-[var(--primary)]  uppercase border-1  py-[10px] px-[30px] max-xl:py-[8px] max-xl:px-[25px] max-md:text-[16px] max-md:leading-[18px] flex  w-[fit-content] h-fit hover:bg-[#304A10] transition duration-300  hover:text-[#fff] tracking-[2px]">
              Know More
            </Link>
          </div>
        </div>
        <div className="w-[90%] mx-auto mt-[60px]">
          <DoctorVlogSwiper />
        </div>
      </div>
    </section>
  );
}
