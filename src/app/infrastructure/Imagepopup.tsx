"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ASSET_PREFIX } from "../../../config";
import Link from "next/link";

// 🔁 Convert your existing video popup gallery into an *image* popup gallery
export default function ImagePopupGallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  // 🖼️ Image Data (kept from your snippet)
  const images = [
    {
      src: `${ASSET_PREFIX}/assets/images/infrastructure/samwarthika-hospital-front-view-thumbnail.webp`,
      alt: "Samwarthika Front View",
      popup: `${ASSET_PREFIX}/assets/images/infrastructure/samwarthika-hospital-front-view.webp`,
    },
    {
      src: `${ASSET_PREFIX}/assets/images/infrastructure/reception-waiting-hall-thumbnail.webp`,
      alt: "Reception and Waiting Hall",
      popup: `${ASSET_PREFIX}/assets/images/infrastructure/reception-waiting-hall.webp`,
    },
    {
      src: `${ASSET_PREFIX}/assets/images/infrastructure/reception-thumbnail.webp`,
      alt: "Reception",
      popup: `${ASSET_PREFIX}/assets/images/infrastructure/reception.webp`,
    },
    {
      src: `${ASSET_PREFIX}/assets/images/infrastructure/waiting-area-thumbnail.webp`,
      alt: "Waiting Area",
      popup: `${ASSET_PREFIX}/assets/images/infrastructure/waiting-area.webp`,
    },
    {
      src: `${ASSET_PREFIX}/assets/images/infrastructure/hall-thumbnail.webp`,
      alt: "Hall",
      popup: `${ASSET_PREFIX}/assets/images/infrastructure/hall.webp`,
    },
    {
      src: `${ASSET_PREFIX}/assets/images/infrastructure/internal-courtyard-thumbnail.webp`,
      alt: "Internal Courtyard",
      popup: `${ASSET_PREFIX}/assets/images/infrastructure/internal-courtyard.webp`,
    },
    {
      src: `${ASSET_PREFIX}/assets/images/infrastructure/doctor-consultation-room-thumbnail.webp`,
      alt: "Consultation Room",
      popup: `${ASSET_PREFIX}/assets/images/infrastructure/doctor-consultation-room.webp`,
    },
    {
      src: `${ASSET_PREFIX}/assets/images/infrastructure/consultation-room-thumbnail.webp`,
      alt: "Consultation Room",
      popup: `${ASSET_PREFIX}/assets/images/infrastructure/consultation-room.webp`,
    },
    {
      src: `${ASSET_PREFIX}/assets/images/infrastructure/single-bed-room-thumbnail.webp`,
      alt: "Single Bed Room",
      popup: `${ASSET_PREFIX}/assets/images/infrastructure/single-bed-room.webp`,
    },
    {
      src: `${ASSET_PREFIX}/assets/images/infrastructure/sitting-area-thumbnail.webp`,
      alt: "Sitting Area",
      popup: `${ASSET_PREFIX}/assets/images/infrastructure/sitting-area.webp`,
    },
    {
      src: `${ASSET_PREFIX}/assets/images/infrastructure/room-with-tv-thumbnail.webp`,
      alt: "Accommodation + TV",
      popup: `${ASSET_PREFIX}/assets/images/infrastructure/room-with-tv.webp`,
    },
    {
      src: `${ASSET_PREFIX}/assets/images/infrastructure/double-cot-room-thumbnail.webp`,
      alt: "Double Cot Room",
      popup: `${ASSET_PREFIX}/assets/images/infrastructure/double-cot-room.webp`,
    },
    {
      src: `${ASSET_PREFIX}/assets/images/infrastructure/rest-room-thumbnail.webp`,
      alt: "Rest Room",
      popup: `${ASSET_PREFIX}/assets/images/infrastructure/rest-room.webp`,
    },
    {
      src: `${ASSET_PREFIX}/assets/images/infrastructure/dining-area-thumbnail.webp`,
      alt: "Dining Area",
      popup: `${ASSET_PREFIX}/assets/images/infrastructure/samwarthika-ayurvedic-hospital-dining-area.webp`,
    },
    {
      src: `${ASSET_PREFIX}/assets/images/infrastructure/panchakarma-treatment-area-thumbnail.webp`,
      alt: "Panchakarma Treatment Area",
      popup: `${ASSET_PREFIX}/assets/images/infrastructure/panchakarma-treatment-area.webp`,
    },

    {
      src: `${ASSET_PREFIX}/assets/images/infrastructure/treatment-area-thumbnail.webp`,
      alt: "Treatment Area",
      popup: `${ASSET_PREFIX}/assets/images/infrastructure/treatment-area.webp`,
    },
    {
      src: `${ASSET_PREFIX}/assets/images/infrastructure/treatment-room-thumbnail.webp`,
      alt: "Treatment Area",
      popup: `${ASSET_PREFIX}/assets/images/infrastructure/treatment-room.webp`,
    },
    {
      src: `${ASSET_PREFIX}/assets/images/infrastructure/pharmacy-thumbnail.webp`,
      alt: "Pharmacy",
      popup: `${ASSET_PREFIX}/assets/images/infrastructure/pharmacy.webp`,
    },


  ];

  // 📄 Pagination Config

  const [itemsPerPage, setItemsPerPage] = useState(9);

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth > 1535) {
        setItemsPerPage(12);
      } else if (window.innerWidth > 1023) {
        setItemsPerPage(9);
      }

      else if (window.innerWidth > 600) {
        setItemsPerPage(6);
      } else {
        setItemsPerPage(4);
      }
    };

    updateItemsPerPage(); // run on mount
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const totalPages = Math.ceil(images.length / itemsPerPage);
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentItems = images.slice(indexOfFirst, indexOfLast);

  const handleNextPage = () =>
    setCurrentPage((p) => Math.min(p + 1, totalPages));
  const handlePrevPage = () => setCurrentPage((p) => Math.max(p - 1, 1));

  const openAt = (absoluteIndex: number) => setActiveIndex(absoluteIndex);
  const close = () => setActiveIndex(null);

  const showPrev = useCallback(() => {
    setActiveIndex((idx) =>
      idx === null ? idx : (idx - 1 + images.length) % images.length
    );
  }, [images.length]);

  const showNext = useCallback(() => {
    setActiveIndex((idx) => (idx === null ? idx : (idx + 1) % images.length));
  }, [images.length]);

  // ⌨️ Keyboard navigation for modal
  useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", onKey);
    // Prevent body scroll while modal is open
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = originalOverflow;
    };
  }, [activeIndex, showPrev, showNext]);

  return (
    <section className="pb-[140px]  max-2xl:pb-[100px]   max-xl:pb-[80px]  max-md:pb-[50px] ">
      <div className="w-[80%] m-auto max-2xl:w-[80%] max-lg:w-[90%] max-w-[100rem]">
        <h2 className="m-auto text-[#314a10] font-[source,serief4] my-[20px] font-normal text-[30px] leading-[36px]
                sm:text-[34px] sm:leading-[40px]
                   md:text-[38px] md:leading-[45px]
                      xl:text-[45px] xl:leading-[52px]
                         2xl:text-[60px] 2xl:leading-[65px]   text-center w-[fit-content]">
          A Place to Heal, a Place to Feel Home

        </h2>
        <div className="w-[80%]  grid justify-items-center m-[auto]  max-[1200px]:w-[100%] max-mlg:w-[90%]  max-md:w-[100%] relative mb-[60px] max-xl:mb-[40px]">
          <p className="text-center text-[#341903] text-[16px] leading-[24px] font-medium   w-[65%] max-lg:w-[100%] max-2xl:w-[60%] max-md:w-[100%] m-auto  ">
            We want your healing journey to feel gentle and stress-free. Every space here is created with you in mind - a place where you can rest without worry, move at your own pace and focus on feeling better. Whether you’re spending quiet time, enjoying a peaceful meal or simply taking a moment to breathe, we make sure your environment supports your well-being every step of the way.
          </p>
          <ul className="pl-[0] sm:pl-[20px]">
            <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[#341802]  max-md:leading-[22px]">
              <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30px"
                  height="30px"
                  viewBox="0 0 24 24">
                  <path
                    fill="none"
                    stroke="#000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m10 17l5-5l-5-5"
                  />
                </svg>
              </div>
              Cozy rooms designed with your comfort in mind.
            </li>
            <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[#341802]  max-md:leading-[22px]">
              <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30px"
                  height="30px"
                  viewBox="0 0 24 24">
                  <path
                    fill="none"
                    stroke="#000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m10 17l5-5l-5-5"
                  />
                </svg>
              </div>
              Herbal garden setting invites calm, easing the healing journey.
            </li>
            <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[#341802]  max-md:leading-[22px]">
              <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30px"
                  height="30px"
                  viewBox="0 0 24 24">
                  <path
                    fill="none"
                    stroke="#000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m10 17l5-5l-5-5"
                  />
                </svg>
              </div>
              Healthy vegetarian meals to nourish body, mind & spirit.
            </li>
            <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[#341802]  max-md:leading-[22px]">
              <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30px"
                  height="30px"
                  viewBox="0 0 24 24">
                  <path
                    fill="none"
                    stroke="#000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m10 17l5-5l-5-5"
                  />
                </svg>
              </div>
              Library, Wi-Fi and thoughtful spaces for your ease and peace.
            </li>


          </ul>

        </div>

        {/* Grid of Thumbnails */}
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
          {currentItems.map((item, i) => {
            const absoluteIndex = indexOfFirst + i;
            return (
              <button
                key={`${item.src}-${absoluteIndex}`}
                type="button"
                className="relative group overflow-hidden rounded-xl  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black cursor-pointer"
                onClick={() => openAt(absoluteIndex)}
                aria-label={`Open image: ${item.alt}`}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={1200}
                  height={800}
                  className="w-full h-auto transition-transform duration-300 group-hover:scale-105 object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={currentPage === 1 && i < 3}
                />

                {/* Subtle overlay on hover */}
                <div className="pointer-events-none absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />

                {/* Zoom icon on hover */}
                <div className="pointer-events-none absolute inset-0 transition duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="inline-flex items-center justify-center transition duration-300  w-12 h-12 rounded-full bg-white/25 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden>
                      <circle cx="11" cy="11" r="8" />
                      <path d="M21 21l-4.3-4.3" />
                      <path d="M11 8v6M8 11h6" />
                    </svg>
                  </span>
                </div>
              </button>
            );
          })}
        </motion.div>

        {/* Pagination Controls */}
        <div className="flex justify-center items-center mt-10 gap-4">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className={`px-5 py-2 rounded-full border border-gray-400 transition-all ${currentPage === 1
              ? "opacity-50 cursor-not-allowed "
              : "hover:bg-gray-100  cursor-pointer text-black"
              }`}
            aria-label="Previous page">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 48 48">
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="4"
                d="M5.799 24h36m-24 12l-12-12l12-12"
              />
            </svg>
          </button>

          <span className="text-gray-600">
            Page {currentPage} of {totalPages}
          </span>

          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`px-5 py-2 rounded-full border border-gray-400 transition-all ${currentPage === totalPages
              ? "opacity-50 cursor-not-allowed "
              : "hover:bg-gray-100 cursor-pointer text-black"
              }`}
            aria-label="Next page">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 48 48">
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="4"
                d="M42 24H6m24-12l12 12l-12 12"
              />
            </svg>
          </button>
        </div>

        {/* Popup Modal */}
        <AnimatePresence>
          {activeIndex !== null && (
            <motion.div
              key="popup"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 flex items-center justify-center z-[1000] p-4"
              onClick={close}
              aria-modal="true"
              role="dialog">
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-[900px] max-h-[600px]  rounded-xl overflow-hidden bg-black">
                {/* Full image */}
                <div className="relative w-full" style={{ aspectRatio: "16/11" }}>
                  <Image
                    key={images[activeIndex].popup}
                    src={images[activeIndex].popup}
                    alt={images[activeIndex].alt}
                    fill
                    className="object-cover"
                    sizes="100vw"
                    priority
                  />
                </div>

                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-[16px] md:text-base p-3 md:p-4">
                  {images[activeIndex].alt}
                </div>

                {/* Controls */}
                <button
                  onClick={close}
                  aria-label="Close"
                  className="cursor-pointer absolute top-3 right-3 bg-black/40 hover:bg-black/80 text-white rounded-full w-8 h-8  sm:w-10 sm:h-10 flex items-center justify-center text-[16px] sm:text-xl"
                  title="Close">
                  ✕
                </button>

                <button
                  onClick={showPrev}
                  aria-label="Previous image"
                  className="cursor-pointer absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/80 text-white rounded-full w-8 h-8  sm:w-10 sm:h-10 flex items-center justify-center"
                  title="Previous">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="max-sm:h-[18px] max-sm:w-[18px]">
                    <path d="m15 18-6-6 6-6" />

                  </svg>
                </button>

                <button
                  onClick={showNext}
                  aria-label="Next image"
                  className="cursor-pointer absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/80 text-white rounded-full w-8 h-8  sm:w-10 sm:h-10 flex items-center justify-center "
                  title="Next">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="max-sm:h-[18px] max-sm:w-[18px]">
                    <path d="m9 18 6-6-6-6" />

                  </svg>
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
