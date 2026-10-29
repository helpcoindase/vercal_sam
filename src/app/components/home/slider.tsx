"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Navigation, Pagination, Autoplay, Thumbs } from "swiper/modules";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ASSET_PREFIX } from "../../../../config";

<link
  rel="preload"
  as="image"
  href="/assets/images/ayurvedic-hospital-in-kerala.webp"
/>;

export default function CustomSlider() {
  const mainSwiperRef = useRef<SwiperType | null>(null);

  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      banimg: "/assets/images/ayurvedic-hospital-in-kerala.webp",
      alt: "Ayurvedic Hospital in Kerala",
      title: "Comfort & Care Together ",
      desctitle: "Your Home Away From Home ",
      desc: "Experience peaceful living with Samwarthika’s modern facilities and warm hospitality, designed to make every stay effortless and fulfilling.",
      button1: "Book Appointment",
      link1: "/contact-us",
      button2: "Know More",
      link2: "/facilities",
    },
    {
      banimg: "/assets/images/ayur-physio-clinic.webp",
      alt: "Ayur Physio Clinic",
      title: "Kerala Ayurveda for Global Guests",
      desctitle: "Comprehensive treatment packages with travel & stay support",
      desc: "Treatment, nutritious vegetarian meals and restful rooms - your wellness stay starts here.",
      button1: "Book Appointment",
      link1: "/contact-us",
      button2: "Know More",
      link2: "/ayur-physio-treatment-in-kerala",
    },
    {
      banimg: "/assets/images/ayurvedic-panchakarma-banner.webp",
      alt: "Ayurvedic Panchakarma Banner",
      title: "Authentic Kerala Ayurvedic Treatments",
      desctitle: "NABH-accredited care rooted in tradition",
      desc: "Experience genuine Panchakarma, Pizhichil & time-tested healing at Samwarthika.",
      button1: "Book Appointment",
      link1: "/contact-us",
      button2: "Know More",
      link2: "/ayurvedic-panchakarma-treatment-in-kerala",
    },
    {
      banimg: "/assets/images/yoga.webp",
      alt: "Yoga Banner",
      title: "Trusted. Accredited. Effective.",
      desctitle: "Quality, safety and standards you can trust",
      desc: "Accredited processes, trained staff and cashless insurance support available.",
      button1: "Book Appointment",
      link1: "/contact-us",
      button2: "Know More",
      link2: "/yoga-and-meditation-retreat-in-kerala",
    },
    {
      banimg: "/assets/images/ayurvedic-cosmetic-clinic.webp",
      alt: "Ayurvedic Cosmetic Clinic",
      title: "Customized Ayurvedic programs for real results",
      desctitle: "Relief from pain. Recovery with care",
      desc: "Spine, joints, neurological rehab & chronic care with Ayurveda + physiotherapy",
      button1: "Book Appointment",
      link1: "/contact-us",
      button2: "Know More",
      link2: "/ayur-cosmetology-treatment-in-kerala",
    },

    // Add more slides...
  ];

  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="relative">
      <Swiper
        loop={true} // IMPORTANT for slideToLoop
        modules={[Navigation, Pagination, Autoplay, Thumbs]}
        onSwiper={(swiper) => (mainSwiperRef.current = swiper)}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        autoplay={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="main-slider relative ">
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div
              className=" container-start h-[800px] max-xxl:h-[700px]  max-2xl:h-[650px] max-mlg:h-[600px] max-sm:h-[550px]  bg-cover bg-center relative text-white object-cover object-center bg-cover bg-center 
    max-[660px]:bg-[calc(100%+250px)_center]  

    after:absolute after:bg-[linear-gradient(45deg,_#0e0e0e_3%,_#0000_85%)] sm:after:bg-[linear-gradient(45deg,_#0e0e0e00_3%,_#0e0e0e00_85%)] after:block after:w-[100%] after:h-[100%] after:top-[0px] after:z-[38] 
    max-mlg:after:bg-[linear-gradient(45deg,#0e0e0e_-37%,transparent_86%)]"
              // style={{
              //   backgroundImage: `url(${ASSET_PREFIX}${slide.banimg})`,
              // }}
            >
              <Image
                src={`${ASSET_PREFIX}${slide.banimg}`}
                alt={`${slide.alt}`}
                fill
                loading="eager"
                fetchPriority="high"
                className="object-cover max-[660px]:object-[calc(100%+250px)_center]"
              />
              <div className="w-[90%] m-auto max-w-[120rem] h-full relative z-[99]">
                <div className=" p-6 rounded text-start  absolute  bottom-[10%]   xxl:max-w-[800px] max-w-[550px]    max-md:w-[80%]  max-sm:w-[100%] ">
                  {slide.title === "Kerala Ayurveda for Global Guests" ? (
                    <h1 className="xxl:text-[70px] xxl:leading-[75px] text-[60px] leading-[65px] max-xxl:text-[55px] max-xxl:leading-[65px] max-2xl:text-[50px] max-2xl:leading-[58px] max-mlg:text-[45px] max-mlg:leading-[48px] max-sm:text-[38px] max-sm:leading-[40px] font-normal font-[source,serif4]">
                      {slide.title}
                    </h1>
                  ) : (
                    <h2 className="xxl:text-[70px] xxl:leading-[75px] text-[60px] leading-[65px] max-xxl:text-[55px] max-xxl:leading-[65px] max-2xl:text-[50px] max-2xl:leading-[58px] max-mlg:text-[45px] max-mlg:leading-[48px] max-sm:text-[38px] max-sm:leading-[40px] font-normal font-[source,serif4]">
                      {slide.title}
                    </h2>
                  )}

                  <p className="mt-[20px] mb-[10px] max-mlg:my-[10px] text-[#fff]/90   text-[22px] leading-[28px] max-mlg:text-[20px] max-mlg:leading-[26px] font-semibold  max-sm:hidden">
                    {slide.desctitle}
                  </p>
                  <p className="mb-[20px] max-mlg:mb-[10px] text-[#fff]/80  text-[18px] leading-[24px] max-mlg:text-[16px] max-mlg:leading-[22px]  max-sm:hidden">
                    {slide.desc}
                  </p>
                  <div className="btn-wrp flex gap-[20px] max-sm:gap-[10px]  max-xl:flex-wrap  mt-[40px]">
                    <Link
                      href={slide.link1}
                      data-cta="book-appoinment"
                      className="book-app-banner">
                      <div className=" text-[16px] leading-[18px] tracking-[2px] uppercase  font-light  px-5 py-3 bg-[#fff]  border-1 border-[#fff]  text-[#3b4e21] hover:bg-[transparent] hover:text-[#fff] transition duration-300 font-semibold">
                        {slide.button1}
                      </div>
                    </Link>
                    <Link
                      href={slide.link2}
                      className=" text-[16px] leading-[18px] tracking-[2px] uppercase font-light px-5 py-3  hover:bg-[#fff] border-1 border-[#fff]  hover:text-[#3b4e21] transition duration-300 font-semibold">
                      {slide.button2}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="absolute bottom-[40px] right-[5%] flex gap-[15px] z-10">
          {slides.map((slide, i) => (
            <button
              key={i}
              onClick={() => mainSwiperRef.current?.slideToLoop(i)}
              aria-label="button"
              className={`w-[15px] h-[15px] rounded-full transition-all duration-300 cursor-pointer ${
                activeIndex === i ? "bg-[#d6d2cf] w-[45px]" : "bg-[#d6d2cf]/50"
              }`}
            />
          ))}
        </div>
      </Swiper>
      <div className="absolute   top-1/3 -translate-y-1/2 w-full h-auto flex justify-between z-10">
        <button className="custom-prev" aria-label="pervious">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="70px"
            height="70px"
            className="opacity-50  transition duration-300 hover:opacity-100 w-[50px] h-[50px] sm:w-[70px] sm:h-[70px]"
            viewBox="0 0 24 24">
            <path
              fill="none"
              stroke="#fff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
              d="m15 5l-6 7l6 7"
            />
          </svg>
        </button>
        <button className="custom-next cursor-pointer" aria-label="Next">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="70px"
            height="70px"
            className="opacity-50 transition duration-300 hover:opacity-100 w-[50px] h-[50px] sm:w-[70px] sm:h-[70px]"
            viewBox="0 0 24 24">
            <path
              fill="none"
              stroke="#fff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
              d="m9 5l6 7l-6 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
