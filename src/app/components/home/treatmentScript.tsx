import React, { useState, useMemo, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import SwiperClass from "swiper";
import Image from "next/image";

const ROWS = 2; // adjust rows per slide
const COLS = 3; // adjust columns per row
const PAGE_SIZE = ROWS * COLS;
const ASSET_PREFIX = ""; // ✅ add prefix if needed

const SwiperTabs: React.FC = () => {
  type Tab = {
    id: string;
    title: React.ReactNode;
    banner: string;
    content: string;
    para?: string;
    sideImages: { img: string; imgtitle: string }[];
  };

  const [activeTab, setActiveTab] = useState<Tab | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperClass | null>(null);
  const nextRef = useRef<HTMLDivElement | null>(null);
  const prevRef = useRef<HTMLDivElement | null>(null);

  const tabs = useMemo<Tab[]>(
    () => [
      {
        id: "tab1",
        title: (
          <p>
            General Medicine /<br /> Neurology
          </p>
        ),
        banner: "/assets/images/banner1.png",
        content: "Ayurvedic Treatments in Samwarthika",
        para: "The Ayurveda Hospital in Ernakulam offers therapies including panchakarma, abhyanga...",
        sideImages: [
          { img: "/assets/images/logo1.png", imgtitle: "Image 1" },
          { img: "/assets/images/logo2.png", imgtitle: "Image 2" },
          { img: "/assets/images/logo3.png", imgtitle: "Image 3" },
          { img: "/assets/images/logo4.png", imgtitle: "Image 4" },
          { img: "/assets/images/logo5.png", imgtitle: "Image 5" },
          { img: "/assets/images/logo6.png", imgtitle: "Image 6" },
        ],
      },
      {
        id: "tab2",
        title: (
          <p>
            Orthopaedics & Sports <br />
            Medicines
          </p>
        ),
        banner: "/assets/images/banner1.png",
        content: "Providing exceptional service for over 10 years.",
        sideImages: [
          { img: "/assets/images/logo2.png", imgtitle: "Image 2" },
          { img: "/assets/images/logo5.png", imgtitle: "Image 5" },
          { img: "/assets/images/logo3.png", imgtitle: "Image 3" },
          { img: "/assets/images/logo6.png", imgtitle: "Image 6" },
        ],
      },
      // ✅ Add other tab objects like tab3, tab4, tab5, tab6, tab7
    ],
    []
  );

  // ✅ Init default tab
  React.useEffect(() => {
    if (!activeTab && tabs.length > 0) {
      setActiveTab(tabs[0]);
    }
  }, [tabs, activeTab]);

  // Mobile Tabs (Swiper)
  const SwiperNavTab = () => (
    <Swiper
      modules={[Navigation, Autoplay]}
      slidesPerView={"auto"}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      spaceBetween={15}
      onSwiper={(s) => (swiperRef.current = s)}
      onSlideChange={(s: SwiperClass) =>
        setActiveIndex(s.realIndex ?? s.activeIndex)
      }
      navigation={{ prevEl: ".tab-prev", nextEl: ".tab-next" }}
      className="tab-swiper !pb-4">
      {tabs.map((tab, index) => (
        <SwiperSlide key={tab.id} className="!w-auto">
          <button
            className={`h-[60px] px-5 flex items-center justify-center text-[#3b5224] font-semibold text-[16px] leading-[22px] sm:leading-[24px] sm:text-[18px] rounded-xl border transition duration-300 ${
              index === activeIndex
                ? "bg-[#fff] border-[#3b5224]"
                : "bg-[#c8e3d2] border-transparent hover:bg-[#fff]"
            }`}
            onClick={() => {
              setActiveIndex(index);
              setActiveTab(tab);
              swiperRef.current?.slideTo(index, 300, true);
            }}>
            {tab.title}
          </button>
        </SwiperSlide>
      ))}
    </Swiper>
  );

  return (
    <div>
      {/* Sidebar Tabs for Desktop */}
      <div className="max-[850px]:hidden">
        <div className="bg-[#c8e3d2] rounded-[90px_90px_0px_0px] pl-[30px] pt-[90px]">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`h-[90px] block w-full text-left text-[#3b5224] font-semibold text-[20px] py-3 px-4 rounded-[20px_0px_0px_20px] relative cursor-pointer transition duration-300 ${
                activeTab?.id === tab.id
                  ? "bg-[#fff]"
                  : "bg-transparent hover:bg-[#fff]"
              }`}
              onClick={() => setActiveTab(tab)}>
              {tab.title}
            </button>
          ))}
        </div>
        <div className="border-2 border-[#c8e3d2] relative">
          <Image
            src={`${ASSET_PREFIX}/assets/images/natural-ayurvedic-species.webp`}
            width={182}
            height={182}
            alt="Natural Ayurvedic Species"
            className="m-auto mt-[20px] h-auto"
          />
        </div>
      </div>

      {/* Mobile Tabs */}
      <div className="hidden max-[850px]:block relative">
        <SwiperNavTab />
      </div>

      {/* Right Content Section */}
      <div className="flex items-center justify-center m-auto max-w-[1000px] w-full relative my-auto">
        <Swiper
          modules={[Pagination, Navigation]}
          navigation={{ prevEl: ".prev-nav", nextEl: ".next-nav" }}
          onSwiper={(s) => (swiperRef.current = s)}
          onSlideChange={(s) => setActiveIndex(s.realIndex)}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 10 },
            768: { slidesPerView: 1, spaceBetween: 20 },
            1024: { slidesPerView: 1, spaceBetween: 40 },
          }}>
          {Array.from({
            length: Math.ceil((activeTab?.sideImages?.length || 0) / PAGE_SIZE),
          }).map((_, slideIndex) => (
            <SwiperSlide key={slideIndex}>
              <div className="grid gap-4">
                {Array.from({ length: ROWS }).map((_, rowIndex) => (
                  <div
                    key={rowIndex}
                    className={`grid grid-cols-${COLS} gap-4`}>
                    {activeTab?.sideImages
                      ?.slice(
                        slideIndex * PAGE_SIZE + rowIndex * COLS,
                        slideIndex * PAGE_SIZE + rowIndex * COLS + COLS
                      )
                      .map(({ img, imgtitle }, i) => (
                        <div
                          key={i}
                          className="text-center w-[calc(200px-2rem)] h-[calc(200px-2rem)] m-auto flex justify-center flex-col p-[10px] rounded-[20px] overflow-hidden border border-transparent hover:border-[#c3efd2] hover:bg-[#effff5]">
                          <Image
                            src={`${ASSET_PREFIX}${img}`}
                            alt={imgtitle}
                            width={80}
                            height={80}
                            className="object-contain mx-auto sepia"
                          />
                          <p className="mt-2 text-[#31936d] text-[18px] font-semibold">
                            {imgtitle}
                          </p>
                        </div>
                      ))}
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination dots */}
        <div className="absolute -bottom-[10%] left-1/2 -translate-x-1/2 flex gap-[5px] z-10 w-fit">
          {Array.from({
            length: Math.ceil((activeTab?.sideImages?.length || 0) / PAGE_SIZE),
          }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => swiperRef.current?.slideTo(idx)}
              className={`h-[12px] rounded-full transition-all duration-300 cursor-pointer ${
                activeIndex === idx
                  ? "bg-[#d9d9d9] w-[35px]"
                  : "bg-[#9a8a80] w-[12px]"
              }`}
            />
          ))}
        </div>

        {/* Prev & Next Buttons */}
        <div
          ref={prevRef}
          className="prev-nav absolute -bottom-[19%] left-[4.5rem] cursor-pointer bg-[#eff1ec] hover:bg-[#91b6646b] p-3 rounded-full shadow-lg border">
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
        <div
          ref={nextRef}
          className="next-nav absolute -bottom-[19%] right-[4.5rem] cursor-pointer bg-[#eff1ec] hover:bg-[#91b6646b] p-3 rounded-full shadow-lg border">
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
  );
};

export default SwiperTabs;
