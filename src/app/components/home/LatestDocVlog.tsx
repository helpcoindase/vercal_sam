"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ASSET_PREFIX } from "../../../../config";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

import { AnimatePresence, motion } from "framer-motion";

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

function getYoutubeEmbedUrl(url: string) {
  if (url.includes("youtube.com/watch?v=")) {
    return url.replace("youtube.com/watch?v=", "youtube.com/embed/");
  }

  if (url.includes("youtu.be/")) {
    return url.replace("youtu.be/", "www.youtube.com/embed/");
  }

  return url;
}

function DoctorVlogSwiper({
  setSelectedIndex,
}: {
  setSelectedIndex: React.Dispatch<React.SetStateAction<number | null>>;
}) {
  const swiperRef = useRef<SwiperType | null>(null);
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const swiper = swiperRef.current;

    if (!swiper || !prevRef.current || !nextRef.current) return;

    if (typeof swiper.params.navigation === "boolean") {
      swiper.params.navigation = {
        prevEl: prevRef.current,
        nextEl: nextRef.current,
      };
    } else {
      swiper.params.navigation = {
        ...swiper.params.navigation,
        prevEl: prevRef.current,
        nextEl: nextRef.current,
      };
    }

    if (swiper.navigation) {
      swiper.navigation.destroy();
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, []);

  return (
    <div className="relative w-full px-[30px] max-[480px]:px-[15px]">
      <Swiper
        modules={[Navigation, Autoplay]}
        slidesPerView={1}
        spaceBetween={20}
        loop={false}
        speed={800}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={false}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="w-full mx-auto"
      >
        {images.map((img, index) => (
          <SwiperSlide key={`${img.src}-${index}`}>
            <div
              role="button"
              tabIndex={0}
              className="rounded-[30px] overflow-hidden group cursor-pointer relative"
              onClick={() => setSelectedIndex(index)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  setSelectedIndex(index);
                }
              }}
            >
              <Image
                loading="lazy"
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
                  className="opacity-90 transition group-hover:opacity-100 max-[480px]:w-[40px]"
                  aria-hidden="true"
                >
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

      <button
        ref={prevRef}
        type="button"
        aria-label="Previous video"
        className="prev-nav absolute top-1/2 -translate-y-1/2 left-[-3.5rem] max-md:left-[-2.5rem] max-sm:left-[-1.5rem] z-10 cursor-pointer bg-white hover:bg-[#f4f4f4] p-[4px] sm:p-3 rounded-full shadow-lg transition duration-200 border border-[#d6cbbe]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="#553e2b"
          className="w-6 h-6"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        ref={nextRef}
        type="button"
        aria-label="Next video"
        className="next-nav absolute top-1/2 -translate-y-1/2 right-[-3.5rem] max-md:right-[-2.5rem] max-sm:right-[-1.5rem] z-10 cursor-pointer bg-white hover:bg-[#f4f4f4] p-[4px] sm:p-3 rounded-full shadow-lg transition duration-200 border border-[#d6cbbe]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="#553e2b"
          className="w-6 h-6"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
}

export default function LatestDocVlog() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="pb-[140px] max-2xl:pb-[100px] max-xl:pb-[80px] max-md:pb-[50px]">
      <div className="w-[90%] m-auto max-w-[120rem]">
        <h3 className="m-auto text-[#314a10] font-[source,serief4] my-[20px] font-normal text-[30px] leading-[36px] sm:text-[34px] sm:leading-[40px] md:text-[38px] md:leading-[45px] xl:text-[45px] xl:leading-[52px] 2xl:text-[60px] 2xl:leading-[65px] text-center w-[fit-content]">
          Latest Doctors Talk
        </h3>

        <div className="w-[80%] flex flex-wrap gap-[20px] justify-center sm:justify-end m-[auto] max-[1200px]:w-[80%] max-mlg:w-[80%] max-md:w-[85%] relative">
          <Link
            href="/doctors-talk"
            className="uppercase border-1 text-[16px] sm:text-[16px] text-[var(--primary)] border-[var(--primary)] py-[7px] sm:py-[10px] px-[20px] sm:px-[30px] hover:bg-[#304A10] hover:text-white transition tracking-[2px]"
          >
            View More
          </Link>
        </div>

        <div className="w-[90%] mx-auto mt-[60px]">
          {mounted ? (
            <DoctorVlogSwiper setSelectedIndex={setSelectedIndex} />
          ) : (
            <div className="min-h-[260px]" />
          )}
        </div>
      </div>

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-[9999]"
            onClick={() => setSelectedIndex(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl max-w-3xl w-full relative max-sm:max-w-[90%]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                aria-label="Close video"
                onClick={() => setSelectedIndex(null)}
                className="absolute -top-10 right-0 text-white hover:text-red-500 cursor-pointer text-2xl"
              >
                ✕
              </button>

              <iframe
                loading="lazy"
                width="100%"
                height="450"
                src={getYoutubeEmbedUrl(images[selectedIndex].video)}
                title={images[selectedIndex].alt}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                allowFullScreen
                className="rounded-xl w-full border-0 max-sm:h-[280px]"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}