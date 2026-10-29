"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import Link from "next/link";
import Image from "next/image";
import { ASSET_PREFIX } from "../../../../config";

// ✅ Move CSS imports to a global CSS file (globals.css) instead
// @import 'swiper/css';
// @import 'swiper/css/navigation';

const slides = [
  {
    img: "/assets/images/ayurveda-treatment-kerala.webp",
    link: "/ayur-physio-treatment-in-kerala",
    subtitle: "Ayur Physio",
    alt: "Ayurveda Treatment Kerala",
  },
  {
    img: "/assets/images/ayurvedic-panchakarma-hospital.webp",
    link: "/ayurvedic-panchakarma-treatment-in-kerala",
    subtitle: "Ayurvedic Panchakarma",
    alt: "Ayurvedic Panchakarma Hospital",
  },
  {
    img: "/assets/images/yoga-and-meditation.webp",
    link: "/yoga-and-meditation-retreat-in-kerala",
    subtitle: "Yoga & Meditations",
    alt: "Yoga and Meditations",
  },
  {
    img: "/assets/images/ayurvedic-cosmetology-hospital.webp",
    link: "/ayur-cosmetology-treatment-in-kerala",
    subtitle: "Ayur Cosmetology",
    alt: "Ayurvedic Cosmetology Hospital",
  },
  {
    img: "/assets/images/best-ayurvedic-hospital-in-kerala.webp",
    link: "/facilities",
    subtitle: "Accommodations & Facilities",
    alt: "Best Ayurvedic Hospital in Kerala",
  },
];

export default function ThumbSlider() {
  // ✅ Removed unused thumbActiveIndex state
  // ✅ Removed unused Thumbs module
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="relative">
      <div className="w-[95%] m-auto max-w-[120rem]">
        <Swiper
          loop={true}
          spaceBetween={20}
          modules={[Navigation, Autoplay]} // ✅ Removed unused Thumbs, Pagination
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          navigation={{
            nextEl: ".thumb-next",
            prevEl: ".thumb-prev",
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            0: { slidesPerView: 2 },
            580: { slidesPerView: 3 },
            800: { slidesPerView: 4 },
            1280: { slidesPerView: 4 },
          }}
          className="my-[25px] mx-auto"
        >
          {slides.map((slide, i) => (
            <SwiperSlide key={i}>
              <div className="group text-center relative rounded-[10px] sm:rounded-[20px] overflow-hidden after:absolute after:bg-[linear-gradient(361deg,rgba(0,0,0,0.8)_18%,rgba(0,0,0,0)_50%)] after:w-full after:h-full after:top-0 after:right-0">
                <Image
                  src={`${ASSET_PREFIX ?? ""}${slide.img}`} // ✅ fallback if ASSET_PREFIX is undefined
                  alt={slide.alt}
                  loading="lazy" // below the hero; the hero poster owns LCP priority
                  width={600}   // ✅ fixed: was 90 (too small, caused blur/resize issues)
                  height={400}  // ✅ fixed: was 90
                  className="h-90 max-xxl:h-[300px] max-2xl:h-[250px] max-xl:h-[220px] max-mlg:h-[200px] max-md:h-[180px] max-sm:h-[150px] max-sm:w-[100%] w-full object-cover rounded group-hover:scale-[1.1] transition duration-300"
                />
                <p className="absolute z-[5] bottom-[8%] text-[24px] leading-[26px] max-xxl:text-[22px] max-xxl:leading-[24px] max-2xl:text-[20px] max-2xl:leading-[22px] max-mlg:text-[18px] max-mlg:leading-[22px] max-sm:text-[16px] text-start text-white mt-1 left-[5%] md:left-[10%] max-lg:w-[90%] w-[95%] max-w-[180px] font-normal">
                  {slide.subtitle}
                </p>
                <Link
                  href={slide.link}
                  className="absolute top-0 left-0 w-full h-full z-10"
                  aria-label={slide.alt}  // ✅ meaningful aria-label instead of "stretched-link"
                />
              </div>
            </SwiperSlide>
          ))}

          {/* Navigation Buttons */}
          <div className="absolute top-1/3 left-0 z-10">
            <button className="thumb-prev cursor-pointer" aria-label="Previous slide">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                className="opacity-100 transition duration-300 hover:opacity-80 w-[50px] h-[50px] sm:w-[70px] sm:h-[70px]">
                <path fill="none" stroke="#fff" strokeLinecap="round"
                  strokeLinejoin="round" strokeWidth="1" d="m15 5l-6 7l6 7" />
              </svg>
            </button>
          </div>
          <div className="absolute top-1/3 right-0 z-10">
            <button className="thumb-next cursor-pointer" aria-label="Next slide">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                className="opacity-100 transition duration-300 hover:opacity-80 w-[50px] h-[50px] sm:w-[70px] sm:h-[70px]">
                <path fill="none" stroke="#fff" strokeLinecap="round"
                  strokeLinejoin="round" strokeWidth="1" d="m9 5l6 7l-6 7" />
              </svg>
            </button>
          </div>
        </Swiper>
      </div>
    </div>
  );
}