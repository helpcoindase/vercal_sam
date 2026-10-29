"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ASSET_PREFIX } from "../../../../config";

const slides = [
  {
    title: "Best Ayurvedic Hospital in Kerala",
    desctitle: "",
    desc: "With decades of serving patients, we are recognized as the Best Ayurvedic Hospital in Kerala. You can experience the Best Ayurvedic Treatment in Kerala with our holistic care with trained and experienced doctors.",
    button1: "What our client say",
    link1: "/client-testimonials",
    button2: "Know More",
    link2: "/facilities",
  },
  {
    title: "Comfort & Care Together",
    desctitle: "Your Home Away From Home ",
    desc: "Experience peaceful living with Samwarthika’s modern facilities and warm hospitality, designed to make every stay effortless and fulfilling.",
    button1: "What our client say",
    link1: "/client-testimonials",
    button2: "Know More",
    link2: "/facilities",
  },
  {
    title: "Kerala Ayurveda for Global Guests",
    desctitle: "Comprehensive treatment packages with travel & stay support",
    desc: "Treatment, nutritious vegetarian meals and restful rooms - your wellness stay starts here.",
    button1: "What our client say",
    link1: "/client-testimonials",
    button2: "Know More",
    link2: "/ayur-physio-treatment-in-kerala",
  },
  {
    title: "Authentic Kerala Ayurvedic Treatments",
    desctitle: "NABH-accredited care rooted in tradition",
    desc: "Experience genuine Panchakarma, Pizhichil & time-tested healing at Samwarthika.",
    button1: "What our client say",
    link1: "/client-testimonials",
    button2: "Know More",
    link2: "/ayurvedic-panchakarma-treatment-in-kerala",
  },
  {
    title: "Trusted. Accredited. Effective.",
    desctitle: "Quality, safety and standards you can trust",
    desc: "Accredited processes, trained staff and cashless insurance support available.",
    button1: "What our client say",
    link1: "/client-testimonials",
    button2: "Know More",
    link2: "/yoga-and-meditation-retreat-in-kerala",
  },
  {
    title: "Customized Ayurvedic programs for real results",
    desctitle: "Relief from pain. Recovery with care",
    desc: "Spine, joints, neurological rehab & chronic care with Ayurveda + physiotherapy",
    button1: "What our client say",
    link1: "/client-testimonials",
    button2: "Know More",
    link2: "/ayur-cosmetology-treatment-in-kerala",
  },
];

const assetPath = (path: string) => {
  const prefix = ASSET_PREFIX || "";
  return `${prefix}${path}`;
};

function HeroPoster() {
  return (
    <Image
      src={assetPath("/assets/images/home-banner-poster.webp")}
      alt="Samwarthika Ayurvedic Hospital"
      fill
      priority
      fetchPriority="high"
      sizes="100vw"
      className="object-cover z-0"
    />
  );
}

function HeroVideo() {
  const [videoError, setVideoError] = useState(false);
  const [loadVideo, setLoadVideo] = useState(false);

  useEffect(() => {
    // Skip the 8MB video on phones, data-saver and reduced-motion users;
    // they keep the poster. Others get it after the page is idle so it
    // never competes with LCP.
    const conn = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    if (
      window.matchMedia("(max-width: 767px)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      conn?.saveData
    ) {
      return;
    }
    const start = () => setLoadVideo(true);
    const timer = window.setTimeout(start, 3000);
    return () => window.clearTimeout(timer);
  }, []);
  return (
    <>
      <HeroPoster />

      {loadVideo && !videoError && (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster={assetPath("/assets/images/home-banner-poster.webp")}
          className="absolute inset-0 w-full h-full object-cover z-[1]"
          onError={() => setVideoError(true)}
        >
          <source
            src={`${ASSET_PREFIX}/assets/videos/samwarthika-website-banner.mp4`}
            type="video/mp4"
          />
          <source
            src={`${ASSET_PREFIX}/assets/videos/samwarthika-website-banner.webm`}
            type="video/webm"
          />
        </video>
      )}
    </>
  );
}

export default function Banner() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <>
      <div className="w-full absolute inset-0 after:w-full after:h-full after:content-[''] after:bg-[linear-gradient(45deg,_#0e0e0e_6%,_#0e0e0e00_85%)] after:absolute after:top-0 after:left-0 after:z-[2]">
        <HeroVideo />
      </div>

      <div className="w-[90%] m-auto max-w-[120rem] h-full relative z-[99]">
        {slides.map((slide, i) => (
          <motion.div
            key={slide.title}
            initial={false}
            animate={{
              opacity: index === i ? 1 : 0,
              y: index === i ? 0 : 20,
              pointerEvents: index === i ? "auto" : "none",
            }}
            transition={{
              opacity: {
                duration: 0.8,
                delay: index === i ? 0.5 : 0,
                ease: "easeOut",
              },
              y: {
                duration: 0.8,
                delay: index === i ? 0.5 : 0,
                ease: "easeOut",
              },
            }}
            className="absolute bottom-[10%] xxl:max-w-[800px] max-w-[550px] max-md:w-[80%] max-sm:w-[100%]"
          >
            {i === 0 ? (
              <h1 className="xxl:text-[70px] xxl:leading-[75px] text-[60px] leading-[65px] max-xxl:text-[55px] max-xxl:leading-[65px] max-2xl:text-[50px] max-2xl:leading-[58px] max-mlg:text-[45px] max-mlg:leading-[48px] max-sm:text-[38px] max-sm:leading-[40px] font-normal font-[source,serif4] text-white">
                {slide.title}
              </h1>
            ) : (
              <h2 className="xxl:text-[70px] xxl:leading-[75px] text-[60px] leading-[65px] max-xxl:text-[55px] max-xxl:leading-[65px] max-2xl:text-[50px] max-2xl:leading-[58px] max-mlg:text-[45px] max-mlg:leading-[48px] max-sm:text-[38px] max-sm:leading-[40px] font-normal font-[source,serif4] text-white">
                {slide.title}
              </h2>
            )}

            <p className="mt-[20px] mb-[10px] max-mlg:my-[10px] text-[#fff]/90 text-[22px] leading-[28px] max-mlg:text-[20px] max-mlg:leading-[26px] font-semibold max-sm:hidden">
              {slide.desctitle}
            </p>

            <p className="mb-[20px] max-mlg:mb-[10px] text-[#fff]/80 text-[18px] leading-[24px] max-mlg:text-[16px] max-mlg:leading-[22px] max-sm:hidden">
              {slide.desc}
            </p>

            <div className="flex gap-[20px] max-sm:gap-[5px] max-xl:flex-wrap mt-[30px] sm:mt-[40px]">
              <Link
                href={slide.link1}
                data-cta="book-appoinment"
                className="book-app-banner group hidden sm:flex items-end text-[12px] 2xl:text-[16px] leading-[18px] tracking-[2px] uppercase px-[12px] py-[13px] min-h-[44px] min-w-[44px] text-[#fff] hover:bg-transparent hover:text-[#fff] transition duration-300 font-semibold"
                aria-label={slide.button1}
              >
                <span className="flex flex-col">
                  {slide.button1}
                  <span className="relative bottom-[-1px] h-[1px] w-full bg-[#d9d9d9] mt-[2px] group-hover:after:scale-x-100 after:content-[''] after:absolute after:left-0 after:bottom-[-1px] after:w-full after:top-[0px] after:h-[2px] after:bg-[#537728] after:scale-x-0 after:origin-center after:transition-transform after:duration-500 after:z-[1] mb-[5px]" />
                </span>
              </Link>

              <Link
                href={slide.link2}
                aria-label={slide.button2}
                className="flex items-end text-[12px] 2xl:text-[16px] leading-[18px] tracking-[2px] uppercase px-[12px] py-[13px] min-h-[44px] min-w-[44px] hover:text-[#fff] transition duration-300 font-semibold text-white group"
              >
                <span className="flex flex-col">
                  {slide.button2}
                  <span className="relative bottom-[-1px] h-[1px] w-full bg-[#d9d9d9] mt-[2px] group-hover:after:scale-x-100 after:content-[''] after:absolute after:left-0 after:bottom-[-1px] after:w-full after:top-[0px] after:h-[2px] after:bg-[#537728] after:scale-x-0 after:origin-center after:transition-transform after:duration-500 after:z-[1] mb-[5px]" />
                </span>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
}