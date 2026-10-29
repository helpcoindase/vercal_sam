"use client";

import { useEffect, useRef } from "react";
import type { NavigationOptions } from "swiper/types";
import { Swiper as SwiperClass } from "swiper";
import Image from "next/image";

import "swiper/css";
import "swiper/css/grid";
import { ASSET_PREFIX } from "../../../../config";
import Link from "next/link";

export default function TreatmentListpg() {
  const sideImages = [
    {
      img: "/assets/images/ayurvedic-treatment.svg",
      imgtitle: "Ayurveda Treatment",
      link: "ayurvedic-treatment-in-kerala",
    },
    {
      img: "/assets/images/panchakarma.svg",
      imgtitle: "Panchakarma Treatment",
      link: "panchakarma-treatment-in-kerala",
    },
    {
      img: "/assets/images/sinusitis.svg",
      imgtitle: "Sinusitis Treatment",
      link: "sinusitis-ayurvedic-treatment-in-kerala",
    },
    {
      img: "/assets/images/autsim.svg",
      imgtitle: "Autism Treatment",
      link: "best-ayurvedic-treatment-for-autism-in-kerala",
    },
    {
      img: "/assets/images/weight-loss-treatment.svg",
      imgtitle: "Weight Loss Treatment",
      link: "weight-loss-ayurvedic-treatment-in-kerala",
    },
    {
      img: "/assets/images/monsoon-treatment.svg",
      link: "ayurveda-monsoon-treatment-in-kerala",
      imgtitle: "Monsoon Treatment",
    },
    {
      img: "/assets/images/parkinson-disease.svg",
      link: "parkinsons-ayurvedic-treatment-in-kerala",
      imgtitle: "Parkinsons Ayurvedic Treatment",
    },
    {
      img: "/assets/images/sciatica.svg",
      imgtitle: "Sciatica Treatment",
      link: "ayurvedic-treatment-for-sciatica-in-kerala",
    },
    {
      img: "/assets/images/stroke-paralysis.svg",
      link: "ayurvedic-stroke-treatment-in-kerala",
      imgtitle: "Stroke Treatment",
    },
    {
      img: "/assets/images/varicose-veins.svg",
      link: "ayurvedic-treatment-for-varicose-veins-kerala",
      imgtitle: "Varicose Veins Treatment",
    },
    {
      img: "/assets/images/knee-pain.svg",
      link: "ayurvedic-treatment-for-knee-pain-in-kerala",
      imgtitle: "Knee Pain Treatment",
    },
    {
      img: "/assets/images/post-natal-treatment.svg",
      link: "post-natal-ayurvedic-treatment-in-kerala",
      imgtitle: "Post Natal Treatment",
    },
    {
      img: "/assets/images/cervical-spondylosis.svg",
      link: "cervical-spondylosis-treatment-kerala",
      imgtitle: "Cervical Spondylosis Treatment",
    },
    {
      img: "/assets/images/psoriasis-ayurvedic-treatment.svg",
      link: "psoriasis-ayurvedic-treatment-in-kerala",
      imgtitle: "Psoriasis Ayurvedic Treatment",
    },
    {
      img: "/assets/images/lumbar-spondylosis.svg",
      link: "lumbar-spondylosis-ayurvedic-treatment-in-kerala",
      imgtitle: "Lumbar Spondylosis Treatment",
    },
    {
      img: "/assets/images/gastroesophageal-reflux.svg",
      link: "gastroesophageal-reflux-disease-treatment-in-kerala",
      imgtitle: "Gastroesophageal Reflux Disease Treatment",
    },
    {
      img: "/assets/images/arthritis-treatment.svg",
      link: "arthritis-ayurvedic-treatment-kerala",
      imgtitle: "Arthritis Treatment",
    },
    {
      img: "/assets/images/dysmenorrhea.svg",
      link: "ayurvedic-treatment-for-menstrual-pain-in-kerala",
      imgtitle: "Dysmenorrhea Treatment",
    },
    {
      img: "/assets/images/ulcerative-colitis-treatment.svg",
      link: "ulcerative-colitis-treatment-kerala",
      imgtitle: "Ulcerative Colitis Treatment",
    },
    {
      img: "/assets/images/disc-bulge.svg",
      imgtitle: "Disc Bulge Protrusion",
      link: "ayurvedic-treatment-disc-bulge-kerala",
    },
    {
      img: "/assets/images/lower-back-pain.svg",
      imgtitle: "Lower Back Pain",
      link: "ayurvedic-treatment-for-lower-back-pain-in-kerala",
    },
    {
      img: "/assets/images/stress-management.svg",
      imgtitle: "Stress Management",
      link: "ayurvedic-treatment-for-stress-in-kerala",
    },
    {
      img: "/assets/images/hair-loss-treatment.svg",
      imgtitle: "Hair Loss Treatment",
      link: "ayurvedic-treatment-for-hair-loss-in-kerala",
    },
  ];

  const SideImageSwiper = () => {
    const swiperRef = useRef<SwiperClass | null>(null);
    const prevRef = useRef<HTMLDivElement | null>(null);
    const nextRef = useRef<HTMLDivElement | null>(null);

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

    return (
      <>
        <div
          className="grid gap-5 
  grid-cols-2 
  sm:grid-cols-3 
  lg:grid-cols-4">
          {sideImages.map(({ img, imgtitle, link }, i) => (
            <Link
              href={`/${link}`}
              key={i}
              className="text-center w-[calc(220px-2rem)] h-[calc(220px-2rem)]  max-md:w-auto  max-md:h-auto flex justify-center flex-col p-[10px] rounded-[20px] overflow-hidden border border-transparent hover:border-[#c3efd2] hover:bg-[#effff5]  m-auto">
              <Image
                src={`${ASSET_PREFIX}${img}`}
                alt={imgtitle}
                width={200}
                height={200}
                className="w-[80px] h-auto mx-auto sepia"
              />
              <p className="mt-2 text-[#31936d] xl:text-[18px] xl:leading-[26px] text-[16px] leading-[24px] max-md:text-[16px] max-md:leading-[22px] font-semibold  max-w-[150px] m-auto">
                {imgtitle}
              </p>
            </Link>
          ))}
        </div>
      </>
    );
  };
  return (
    <section className="py-[140px]  max-2xl:py-[100px]   max-xl:py-[80px]  max-md:py-[50px]">
      <div className="[1600px]:w-[80%] w-[75%] max-2xl:w-[80%]  max-lg:w-[85%] max-mlg:w-[90%] m-auto">
        <h2
          className="text-[#314a10] font-[source,serief4] my-[20px] text-[50px] leading-[52px] max-2xl:text-[42px]
           leading-[48px] max-xl:text-[36px] max-xl:leading-[40px] max-lg:text-[30px] max-lg:leading-[36px] max-mlg:text-[28px] max-mlg:leading-[32px] font-normal   text-center m-auto  max-w-[45%] max-2xl:max-w-[50%]  max-md:max-w-[55%] max-sm:max-w-[90%]">
          Our Treatments mind and spirit - the Ayurvedic way
        </h2>
        <p className="mt-[20px] text-[#3f2510] text-center m-auto  w-[60%] max-xl:w-[80%]  max-lg:w-[90%] max-sm:w-[100%] mb-[30px]">
          The Ayurveda Hospital in Ernakulam offers therapies including
          panchakarma, abhyanga, elakizhi, nasyam, pizhichil, njavarakizhi,
          sirodhara, sirovasthi, kativasthi, detoxification and rejuvenation for
          healthy life, rasayana chikitsa.
        </p>
        <div className="w-[80%] m-auto mt-[40px] max-xl:w-[90%]  max-lg:w-full">
          <SideImageSwiper />
        </div>
      </div>
    </section>
  );
}
