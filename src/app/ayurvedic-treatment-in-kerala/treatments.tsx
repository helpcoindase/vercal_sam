"use client";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Navigation, Pagination } from "swiper/modules";
import type { NavigationOptions } from "swiper/types";
import { Swiper as SwiperClass } from "swiper";
import Image from "next/image";

import "swiper/css";
import "swiper/css/grid";
import { ASSET_PREFIX } from "../../../config";
export default function Treatment() {
  const sideImages = [
    {
      img: "/assets/images/icons/vatha.svg",
      heading: "Vatha",
      imgtitle:
        "means wind, is the subtle energy associated with movement, composed of air and space. It controls breath, muscle movements, pulsation of the heart and cells. In balance, Vatha encourages creativity and flexibility. When in imbalance, it stimulates fear and anxiety. Interruption in Vatha occurs as gas or muscular/nerve toughness leading to pain.",
    },
    {
      img: "/assets/images/icons/kapha.svg",
      heading: "Kapha",
      imgtitle:
        "means phlegm, is the energy that forms the body’s structure, composed of earth and water. It supplies water to the whole bodily parts, lubricates joints, moisturizes the skin and maintains immunity. In balance, it gives love, calmness and forgiveness. When in imbalance, it activates greed and envy. Interruption in Kapha occurs as liquid and mucus leading to swelling and discharge.",
    },
    {
      img: "/assets/images/icons/pitha.svg",
      heading: "Pitha",
      imgtitle:
        "means bile, expressed as the body’s metabolic system, composed of water and fire. It controls digestion, absorption, assimilation, nutrition, metabolism and body temperature. In balance, Pitha encourages intelligence and understanding. When in imbalance, it can whip up anger, hatred and jealousy. Interruption in Pitha occurs as acid and bile leading to inflammation.",
    },
    {
      img: "/assets/images/icons/rajas.svg",
      heading: "Rajas",
      imgtitle:
        "are characterized by motion and stimulation. All desires, wishes, ambitions and unstable minds are the result of rajas. Many types of psychiatric illness are caused by imbalance of rajas.",
    },
    {
      img: "/assets/images/icons/satva.svg",
      heading: "Satva",
      imgtitle:
        "is characterized by lightness, consciousness, pleasure and clarity and is free from disease. The senses are active because of its presence. It is also responsible for the perception of knowledge.",
    },
    {
      img: "/assets/images/icons/tamas.svg",
      heading: "Tamas",
      imgtitle:
        "is characterized by heaviness and resistance. It disturbs the process of perception and activities of the mind. Delusion, false knowledge, laziness, apathy, sleep and drowsiness are caused by tamas.",
    },
    {
      img: "/assets/images/icons/rasa.svg",
      heading: "Rasa",
      imgtitle:
        "Plasma - dhathu is derived from digested food and nourishes each and every tissue and cell of the body.",
    },
    {
      img: "/assets/images/icons/asthi.svg",
      heading: "Asthi",
      imgtitle:
        "Bone - dhathu consists of the bone tissue including the cartilage. Its function is to give support to the bone marrow/Majjadhathu and provide support to the muscle tissue/Mamsadhathu.",
    },
    {
      img: "/assets/images/icons/raktha.svg",
      heading: "Raktha",
      imgtitle:
        "Blood - is regarded as the basis for life. It nourishes the body tissues and provides physical strength and colour to the body.",
    },
    {
      img: "/assets/images/icons/majja.svg",
      heading: "Majja",
      imgtitle:
        "Bone Marrow - dhathu’s function is to fill up the bone and to oleate the body.",
    },
    {
      img: "/assets/images/icons/mamsa.svg",
      heading: "Mamsa",
      imgtitle:
        "Muscle - is the muscle tissue. Its main function is to provide physical strength and support the adipose tissue/Medadhathu.",
    },
    {
      img: "/assets/images/icons/sukra.svg",
      heading: "Sukra",
      imgtitle:
        "Reproductive Tissue - dhathu’s function is to help the reproduction and strengthen the body.",
    },
    {
      img: "/assets/images/icons/meda.svg",
      heading: "Meda",
      imgtitle: "Fat - dhathu provides support to the bone tissue/Asthidhathu.",
    },
  ];

  const SideImageSwiper = () => {
    const [gridConfig, setGridConfig] = useState({
      PAGE_SIZE: 12,
      ROWS: 3,
      COLS: 4,
    });

    const swiperRef = useRef<SwiperClass | null>(null);
    const prevRef = useRef<HTMLDivElement | null>(null);
    const nextRef = useRef<HTMLDivElement | null>(null);

    const getGridConfig = () => {
      if (typeof window !== "undefined") {
        if (window.innerWidth > 750 && window.innerWidth < 900) {
          return { PAGE_SIZE: 6, ROWS: 2, COLS: 3 };
        } else if (window.innerWidth > 500 && window.innerWidth <= 750) {
          return { PAGE_SIZE: 4, ROWS: 2, COLS: 2 };
        } else if (window.innerWidth <= 500) {
          return { PAGE_SIZE: 2, ROWS: 1, COLS: 1 };
        }
      }
      return { PAGE_SIZE: 12, ROWS: 2, COLS: 4 };
    };

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
    useEffect(() => {
      const update = () => setGridConfig(getGridConfig());
      update();
      window.addEventListener("resize", update);
      return () => window.removeEventListener("resize", update);
    }, []);
    const [activeIndex, setActiveIndex] = useState(0);
    return (
      <>
        <div className="hidden md:grid  grid-cols-3  max-sm:grid-cols-1  max-2xl:grid-cols-3  max-md:grid-cols-2 gap-[20px]  max-xxl:gap-[10px]">
          {sideImages.map(({ img, imgtitle, heading }, i) => (
            <div
              className="text-start w-full  h-full  m-auto flex justify-start items-start flex-col p-[30px]  max-lg:p-[20px] rounded-[20px] overflow-hidden border border-transparent hover:border-[#c3efd2] hover:bg-[#effff5]"
              key={i}>
              <Image
                src={`${ASSET_PREFIX}${img}`}
                alt={heading}
                width={200}
                height={200}
                className="w-[80px] h-auto mx-0 sepia"
              />
              <p className="mt-2 text-[#31936d] xl:text-[18px] xl:leading-[26px] text-[16px] leading-[24px]   font-semibold">
                {heading}
              </p>
              <p className="mt-2 text-[#171717] text-[16px] leading-[22x]  font-normal">
                {imgtitle}
              </p>
            </div>
          ))}
        </div>
        <div className="md:hidden">
          <Swiper
            modules={[Grid, Navigation, Pagination]}
            onSwiper={(s) => (swiperRef.current = s)}
            onSlideChange={(s) => setActiveIndex(s.activeIndex)}
            grid={{ rows: gridConfig.ROWS, fill: "row" }}
            slidesPerView={gridConfig.COLS}
            spaceBetween={20}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            className="mySwiper !pb-8  max-lg:!pb-4  treatments-swiper">
            {sideImages.map(({ img, imgtitle, heading }, i) => (
              <SwiperSlide key={i}>
                <div
                  className="text-start w-full  h-full  m-auto flex justify-start items-start flex-col p-[30px]  max-lg:p-[20px] rounded-[20px] overflow-hidden border border-transparent hover:border-[#c3efd2] hover:bg-[#effff5]"
                  key={i}>
                  <Image
                    src={`${ASSET_PREFIX}${img}`}
                    alt={heading}
                    width={200}
                    height={200}
                    className="w-[80px] h-auto mx-0 sepia"
                  />
                  <p className="mt-2 text-[#31936d] xl:text-[18px] xl:leading-[26px] text-[16px] leading-[24px]   font-semibold">
                    {heading}
                  </p>
                  <p className="mt-2 text-[#171717] text-[16px] leading-[22x]  font-normal">
                    {imgtitle}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* </div> */} {/* custom navigation arrows */}
          <div className="flex justify-between mt-2 gap-[25px] items-center">
            <div
              ref={prevRef}
              className="border-[#91b664] w-[55px] h-[55px] max-lg:w-[45px] max-lg:h-[45px] flex justify-center items-center cursor-pointer bg-white hover:bg-[#f4f4f4] p-3 max-lg:p-2 rounded-full shadow-lg transition duration-200 border">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="#abb4a0"
                className="w-8 h-8">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </div>
            <div className="flex gap-[15px] max-md:flex-wrap  justify-center z-10 w-fit">
              {Array.from({
                length: Math.ceil(
                  sideImages.length / (gridConfig.ROWS * gridConfig.COLS),
                ),
              }).map((_, idx) => (
                <button
                  key={idx}
                  aria-label={`Go to Slide ${idx}`}
                  onClick={() =>
                    swiperRef.current?.slideTo(
                      idx * gridConfig.ROWS * gridConfig.COLS,
                    )
                  }
                  className={`h-[12px]  rounded-full transition-all duration-300 cursor-pointer ${
                    Math.floor(
                      activeIndex / (gridConfig.ROWS * gridConfig.COLS),
                    ) === idx
                      ? "bg-[#d9d9d9] w-[35px] max-lg:w-[30px]"
                      : "bg-[#9a8a80] w-[12px]"
                  }`}
                />
              ))}
            </div>

            <div
              ref={nextRef}
              className="border-[#91b664] w-[55px] h-[55px] max-lg:w-[45px] max-lg:h-[45px] flex justify-center items-center cursor-pointer bg-white hover:bg-[#f4f4f4] p-3 max-lg:p-2 rounded-full shadow-lg transition duration-200 border">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="#abb4a0"
                className="w-8 h-8">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
        </div>
        {/* </Swiper> */}
      </>
    );
  };
  return (
    <section className="pt-[70px]   max-xl:pt-[60px]  max-md:pt-[40px]">
      <div className="[1600px]:w-[80%] w-[75%] max-2xl:w-[80%]  max-lg:w-[85%] max-mlg:w-[90%] m-auto">
        <h3
          className="text-[#314a10] font-[source,serief4] my-[20px] text-[50px] leading-[52px] max-2xl:text-[42px]
           leading-[48px] max-xl:text-[36px] max-xl:leading-[40px] max-lg:text-[30px] max-lg:leading-[36px] max-mlg:text-[28px] max-mlg:leading-[32px] font-normal   text-center m-auto  max-w-[45%] max-2xl:max-w-[50%]  max-md:max-w-[55%] max-sm:max-w-[90%] ">
          As three doshas are the <br />
          essential components of our body
        </h3>
        <p className="mt-[20px] text-[#3f2510] max-md:text-start text-center m-auto  w-[80%] max-xl:w-[80%]  max-lg:w-[90%] max-sm:w-[100%] mb-[30px] max-[767px]:!text-center ">
          Three qualities - Satva, Rajas and Tamas - are the essential
          components of our mind. Individuals will have a mixed amount of these
          qualities, but the one predominant will determine the person’s
          quality. Also there are seven Dhathus or tissues to support the body.
          These are the structures that make up the body. They are Rasa, Rakta,
          Mamsa, Medha, Asthi, Majjaand Sukra. While Ayurveda recognizes these
          Dhatus as the structural basis of the living body, it recognizes the
          three biological systems -Vatha, Pitha and Kapha. If these three
          function well, it results in good nourishment and well-being; if there
          is malfunctioning, it will result in Dhatuvaishamya- elemental
          imbalance - resulting in various types of diseases. In short,
          imbalance in doshas causes imbalance in dhathus.
        </p>
        <p className="mt-[20px] text-[#3f2510] text-center max-md:text-start m-auto  w-[80%] max-xl:w-[80%]  max-lg:w-[90%] max-sm:w-[100%] mb-[30px] max-[767px]:!text-center">
          Every individual has a combination of physical, mental and emotional
          characteristics known as constitution which is determined by analyzing
          a number of internal and external factors like one’s choice on food,
          preferred weather, changes in emotions, work and family relationships
          etc. Imbalance in one’s original constitution is the state of illness
          or disorder. Ayurveda is all about restoring to the original
          constitution by regaining the balance through herbal medicines,
          dietary and physical therapies as well as spiritual and psychological
          healing. Selecting and practicing the diet and lifestyle suitable to
          each individual’s constitution will strengthen the body, mind and
          consciousness.
        </p>
        <div className="w-[95%] m-auto mt-[40px] max-xl:w-[100%]  max-lg:w-full max-w-[100rem]">
          <SideImageSwiper />
          <div className="grid grid-cols-4  gap-[10px] max-lg:grid-cols-3  max-md:grid-cols-2">
            {/* {sideImages.map(({ img, imgtitle }, i) => (
              <div
                key={i}
                className="text-center w-full xxl:w-[180px] xxl:h-[180px] w-[150px] h-[150px] max-xl:h-[120px] m-auto flex justify-center flex-col p-[10px] rounded-[20px] overflow-hidden border border-transparent hover:border-[#c3efd2] hover:bg-[#effff5]">
                <Image
                  src={`${ASSET_PREFIX}${img}`}
                  alt={imgtitle}
                  width={200}
                  height={200}
                  className="w-[80px] h-auto mx-auto sepia"
                />
                <p className="mt-2 text-[#31936d]  xl:text-[18px] xl:leading-[26px] text-[16px] leading-[24px] font-semibold">
                  {imgtitle}
                </p>
              </div>
            ))} */}
          </div>
        </div>
      </div>
    </section>
  );
}
