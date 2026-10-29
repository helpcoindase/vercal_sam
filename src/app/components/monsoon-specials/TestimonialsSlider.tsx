"use client";
import React, { useRef } from "react";
import Link from "next/link";
import { ASSET_PREFIX } from "../../../../config";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import type { NavigationOptions } from "swiper/types";
export default function TestimonialsSlider() {
  const DoctorVlogSwiper = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const images = [
      {
        src: `${ASSET_PREFIX}/assets/images/testimonial-a.webp`,
        alt: "Doctor Vlog 1",
      },
      {
        src: `${ASSET_PREFIX}/assets/images/testimonial-b.webp`,
        alt: "Doctor Vlog 2",
      },
      {
        src: `${ASSET_PREFIX}/assets/images/testimonial-c.webp`,
        alt: "Doctor Vlog 3",
      },
      {
        src: `${ASSET_PREFIX}/assets/images/testimonial-a.webp`,
        alt: "Doctor Vlog 1",
      },
      {
        src: `${ASSET_PREFIX}/assets/images/testimonial-b.webp`,
        alt: "Doctor Vlog 2",
      },
      {
        src: `${ASSET_PREFIX}/assets/images/testimonial-c.webp`,
        alt: "Doctor Vlog 3",
      },
    ];

    return (
      <div className="relative w-full  px-[30px]">
        <Swiper
          modules={[Navigation, Autoplay]}
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
          loopAdditionalSlides={images.length}
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
              <div className="rounded-[30px] overflow-hidden  group">
                <Link href="">
                  <Image
                    width={560}
                    height={315}
                    alt={img.alt}
                    src={img.src}
                    className="w-full h-auto  transition duration-1000 group-hover:scale-[1.1]"
                  />
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <div
          ref={prevRef}
          className="prev-nav absolute top-1/2 -translate-y-1/2 left-[-3.5rem] max-md:left-[-2.5rem]  max-sm:left-[-1.5rem] z-10 cursor-pointer bg-white hover:bg-[#f4f4f4] p-3 rounded-full shadow-lg transition duration-200 border border-[#d6cbbe]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="#553e2b"
            className="w-6 h-6 text-gray-700">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </div>

        <div
          ref={nextRef}
          className="next-nav absolute top-1/2 -translate-y-1/2 right-[-3.5rem] max-md:right-[-2.5rem]  max-sm:right-[-1.5rem] z-10 cursor-pointer bg-white hover:bg-[#f4f4f4] p-3 rounded-full shadow-lg transition duration-200 border border-[#d6cbbe]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="#553e2b"
            className="w-6 h-6 text-gray-700">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    );
  };
  return (
    <>
      <section className="py-[140px]  max-2xl:py-[100px]   max-xl:py-[80px]  max-md:py-[50px]  bg-[#d4e8dc]">
        <div className="w-[90%] m-[auto]  max-w-[120rem]">
          {/* <p className="m-auto uppercase text-[#361902cc] text-[20px]  leading-[24px] max-xl:text-[18px] max-xl:leading-[22px]  max-lg:text-[16px] max-lg:leading-[20px]  font-medium  text-center w-[fit-content]">
            THE AYURVEDIC TREATMENTS
          </p> */}
          <h3
            className="m-auto text-[#304A10] font-[source,serief4] mb-[20px] mt-[8px] text-[60px] leading-[65px] max-2xl:text-[52px]
           leading-[58px] max-xl:text-[46px] max-xl:leading-[50px] max-lg:text-[40px] max-lg:leading-[46px] max-mlg:text-[38px] max-mlg:leading-[42px] font-normal   text-center w-[fit-content]">
            Testimonials
          </h3>
          <div className="hidden grid grid-cols-3 max-mlg:grid-cols-2 max-sm:grid-cols-1 gap-[30px] max-2xl:gap-[20px]   mt-[60px]">
            <div className="rounded-[30px] overflow-hidden ">
              <Link href={""}>
                <Image
                  width={560}
                  height={315}
                  className="w-[100%] h-[auto]"
                  alt="Dr. K. N. Subramanian Namboothiri about Cancer Treatment in Ayurveda"
                  src={`${ASSET_PREFIX}/assets/images/dr-kn-subramanian-namboothiri-cancer-treatment-ayurveda.webp`}
                />
              </Link>
            </div>
            <div className="rounded-[30px] overflow-hidden ">
              <Link href={""}>
                <Image
                  width={560}
                  height={315}
                  className="w-[100%] h-[auto]"
                  alt="Dr Jeevan K Jose Speaks about Rheumatoid Arthritis"
                  src={`${ASSET_PREFIX}/assets/images/dr-jeevan-k-jose-rheumatoid-arthritis.webp`}
                />
              </Link>
            </div>
            <div className="rounded-[30px] overflow-hidden ">
              <Link href={""}>
                <Image
                  width={560}
                  height={315}
                  className="w-[100%] h-[auto]"
                  alt="Dr Jomy Joseph Speaks about Karkidaka Treatment"
                  src={`${ASSET_PREFIX}/assets/images/dr-jomy-joseph-speaks-karkidaka-treatment.webp`}
                />
              </Link>
            </div>
          </div>
          <div className="w-[90%] mx-auto mt-[60px]">
            <DoctorVlogSwiper />
          </div>
        </div>
      </section>
    </>
  );
}
