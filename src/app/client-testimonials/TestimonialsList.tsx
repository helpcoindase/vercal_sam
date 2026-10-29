"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useMemo, useState, useEffect } from "react";
import { ASSET_PREFIX } from "../../../config";

type VideoType = "youtube" | "shorts";
type VideoItem = {
  thumbnail?: string;
  video: string;
  type?: VideoType;
  year?: number;
  title?: string;
  alt?: string;
};

const sideVideos: VideoItem[] = [
  {
    video: "https://www.youtube.com/watch?v=r7_ShZMu6Do",
    type: "shorts",
    year: 2025,
    title: "Bharathi Doshi - Patient Story",
    thumbnail: "patient-testimonial.webp",
  },
  {
    video: "https://www.youtube.com/watch?v=bvdgkeXCCUU",
    type: "shorts",
    year: 2025,
    title: "Ayurveda Can Help You Recover Chronic Pain",
    thumbnail: "ayurveda-can-help-you-recover.webp",
  },
  {
    video: "https://www.youtube.com/watch?v=O4ZwPlr_0Hg",
    type: "youtube",
    year: 2025,
    title:
      "One of our Oman patient talking about Samwarthika Ayurveda Hospital treatment experience.",
    thumbnail: "patient-testimonial-from-oman.webp",
  },
  {
    video: "https://www.youtube.com/watch?v=87WgG4AoQeQ",
    type: "youtube",
    year: 2025,
    title: "Hear from Our Happy Patients",
    thumbnail: "hear-from-our-happy-patients.webp",
  },
  {
    video: "https://www.youtube.com/watch?v=3T8k1votzbE",
    type: "youtube",
    year: 2025,
    title: "Hear from Our Happy Patients",
    thumbnail: "smiling-faces-at-samwarthika-ayurveda-hospital.webp",
  },
  {
    video: "https://www.youtube.com/watch?v=Rr3oC7NBNQE",
    type: "youtube",
    year: 2024,
    title: "Hear from Our Happy Patients",
    thumbnail: "patient-testimonial-from-kyrgyzstan.webp",
  },
  {
    video: "https://www.youtube.com/watch?v=3T8k1votzbE",
    type: "youtube",
    year: 2024,
    title: "Hear from Our Happy Patients",
    thumbnail: "smiling-faces-at-samwarthika-ayurveda-hospital.webp",
  },

  {
    video: "https://www.youtube.com/watch?v=r7d9X3EMWk8",
    type: "youtube",
    year: 2023,
    title: "Parkinsons Patients Difficulties",
    thumbnail: "parkinsons-patients.webp",
  },
  {
    video: "https://www.youtube.com/watch?v=JF4BYd0gmh8",
    type: "youtube",
    year: 2023,
    title: "Parkinsons Patients Difficulties",
    thumbnail: "parkinsons-patients-difficulties.webp",
  },
  {
    video: "https://www.youtube.com/watch?v=aFQ6mmt-jUU",
    type: "shorts",
    year: 2023,
    title: "Clients Experience",
    thumbnail: "clients-experience.webp",
  },
  {
    video: "https://www.youtube.com/watch?v=S0pp2wOcNzk&t=1s",
    type: "youtube",
    year: 2023,
    title: "Varicose Vein Treatment",
    thumbnail: "varicose-vein-treatment.webp",
  },
  {
    video: "https://www.youtube.com/watch?v=_i7rrzt6baY",
    type: "youtube",
    year: 2023,
    title: "Clients Experience Sharing",
    thumbnail: "clients-experience-sharing.webp",
  },
  {
    video: "https://www.youtube.com/watch?v=sSMVTKZ8ZLc",
    type: "youtube",
    year: 2023,
    title: "Parkinsons Disease",
    thumbnail: "parkinsons-disease.webp",
  },
  {
    video: "https://www.youtube.com/watch?v=FQ7GlNw2S68",
    type: "youtube",
    year: 2023,
    title: "Patient Experience",
    thumbnail: "patient-experience.webp",
  },
  {
    video: "https://www.youtube.com/watch?v=bxdIIO9oLhk",
    type: "youtube",
    year: 2020,
    title: "Patient Experience",
    thumbnail: "samwarthika-patient-experience.webp",
  },
  {
    video: "https://www.youtube.com/watch?v=XqnzI3wjLlA",
    type: "youtube",
    year: 2019,
    title: "Patient Experience",
    thumbnail: "post-natal-care-at-our-hospital.webp",
  },
];

/* ---------- helpers ---------- */
function getYouTubeId(url: string): string | null {
  try {
    const u = new URL(url);
    const vParam = u.searchParams.get("v");
    if (vParam && /^[\w-]{11}$/.test(vParam)) return vParam;

    const shortsMatch = u.pathname.match(/\/shorts\/([\w-]{11})/);
    if (shortsMatch) return shortsMatch[1];

    if (u.hostname.includes("youtu.be")) {
      const m = u.pathname.slice(1).match(/^([\w-]{11})/);
      if (m) return m[1];
    }

    const reg = /(?:v=|\/shorts\/|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const m2 = url.match(reg);
    if (m2) return m2[1];
  } catch {}
  return null;
}

function getYouTubeThumbnail(url: string) {
  const id = getYouTubeId(url);
  return id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : "";
}

function toEmbedUrl(url: string) {
  const id = getYouTubeId(url);
  return id ? `https://www.youtube.com/embed/${id}` : "";
}

export default function TestimonialsList() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // filters
  const [activeType, setActiveType] = useState<"all" | VideoType>("all");
  const [activeYear, setActiveYear] = useState<number | "all">("all");

  // pagination (8 per page)
  const [page, setPage] = useState(1);
  const PAGE_SIZE = 8;

  // years list
  const years = useMemo(() => {
    const ys = Array.from(
      new Set(sideVideos.map((v) => v.year).filter(Boolean)),
    ) as number[];
    return ys.sort((a, b) => b - a);
  }, []);

  // filtered master list
  const filtered = useMemo(() => {
    let list = sideVideos.slice();
    if (activeType !== "all")
      list = list.filter((v) => (v.type ?? "youtube") === activeType);
    if (activeYear !== "all") list = list.filter((v) => v.year === activeYear);
    return list;
  }, [activeType, activeYear]);

  // reset page + close modal when filters change
  useEffect(() => {
    setPage(1);
    setSelectedIndex(null);
  }, [activeType, activeYear]);

  // pagination computations
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));

  const paged = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return filtered.slice(start, start + PAGE_SIZE);
  }, [filtered, page]);

  // clamp page if needed
  useEffect(() => {
    if (page > totalPages) setPage(totalPages);
  }, [totalPages, page]);

  // styles
  const tabBtnClass = (active: boolean) =>
    `px-4 h-[40px] py-2 rounded-[15px_15px_0_0] transition-all text-nowrap text-[#000] cursor-pointer max-md:text-[16px] max-md:leading-[20px] ${
      active
        ? "bg-[#304a10] text-white max-sm:py-2 max-sm:px-3"
        : "bg-transparent max-sm:py-0 max-sm:px-0"
    }`;

  const pageLink = (active: boolean) =>
    `px-2 py-1 text-[16px] ${
      active ? "font-semibold underline" : "text-gray-700 hover:underline"
    }`;

  // open modal pointing into the *filtered* array
  const openAtFilteredIndex = (indexInPage: number) => {
    const idxInFiltered = (page - 1) * PAGE_SIZE + indexInPage;
    setSelectedIndex(idxInFiltered);
  };

  const current = selectedIndex !== null ? filtered[selectedIndex] : null;
  const currentEmbed = current ? toEmbedUrl(current.video) : "";

  return (
    <section className="py-[140px] max-2xl:py-[100px] max-xl:py-[80px] max-md:py-[50px]">
      <div className="w-[85%] max-lg:w-[90%] m-auto max-w-[120rem]">
        {/* Tabs & Filters */}
        <div className="flex flex-col gap-4 mb-6">
          <h2
            className="m-auto text-[#304A10] font-[source,serief4] mb-[20px] mt-[8px] text-[60px] leading-[65px] max-2xl:text-[52px]
           leading-[58px] max-xl:text-[46px] max-xl:leading-[50px] max-lg:text-[40px] max-lg:leading-[46px] max-mlg:text-[38px] max-mlg:leading-[42px] font-normal   text-center w-[fit-content]">
            Client Testimonials
          </h2>
          {/* Type Tabs */}
          <div className="flex items-end gap-2 border-b border-[#e5e7eb]">
            <button
              onClick={() => setActiveType("all")}
              className={tabBtnClass(activeType === "all")}>
              All
            </button>
            <button
              onClick={() => setActiveType("youtube")}
              className={tabBtnClass(activeType === "youtube")}>
              YouTube
            </button>
            <button
              onClick={() => setActiveType("shorts")}
              className={tabBtnClass(activeType === "shorts")}>
              Shorts
            </button>
          </div>

          {/* Year filter */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="ml-auto">
              <select
                aria-label="Select Year"
                value={String(activeYear)}
                onChange={(e) =>
                  setActiveYear(
                    e.target.value === "all" ? "all" : Number(e.target.value),
                  )
                }
                className="border rounded-lg px-3 py-2 text-[16px] cursor-pointer text-black">
                <option value="all">All years</option>
                {years.map((y) => (
                  <option key={y} value={y}>
                    {y}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-4 max-xl:grid-cols-3 max-mlg:grid-cols-2 max-sm:grid-cols-1 gap-[30px] max-2xl:gap-[20px] max-mlg:gap-[15px]">
          {paged.map((item, index) => {
            return (
              <div
                key={`${item.video}-${item.year ?? "na"}-${index}`}
                className="rounded-[30px] max-lg:rounded-[25px] max-mlg:rounded-[20px] max-md:rounded-[15px] overflow-hidden relative group h-fit
                           after:absolute after:top-0 after:left-0 after:w-full after:h-full after:content-[''] after:bg-[linear-gradient(0deg,rgba(0,0,0,0.56)_0%,rgba(255,255,255,0)_100%)]
                           cursor-pointer">
                <Image
                  width={800}
                  height={600}
                  className="w-full h-full object-cover object-center transition duration-1000 group-hover:scale-110"
                  alt={item.title || "testimonial"}
                  src={`${ASSET_PREFIX}/assets/images/${item.thumbnail}`}
                />

                <button
                  aria-label="Open video"
                  className="z-10 absolute inset-0"
                  onClick={() => openAtFilteredIndex(index)}
                />

                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 rounded-full p-2 border border-white bg-black/30 hover:bg-black/60 transition flex justify-center items-center"
                  onClick={() => openAtFilteredIndex(index)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    viewBox="0 0 2048 2048">
                    <path fill="#fff" d="M1792 1024L512 1920V128z" />
                  </svg>
                </div>
              </div>
            );
          })}
        </div>

        {/* Simple Pagination */}
        {totalPages > 1 && (
          <nav
            className="flex items-center justify-center gap-3 mt-8 text-[16px]"
            aria-label="Pagination">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className={`px-1 ${
                page === 1
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-gray-800 hover:underline cursor-pointer"
              }`}>
              Prev
            </button>

            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }).map((_, i) => {
                const n = i + 1;
                return (
                  <button
                    key={n}
                    onClick={() => setPage(n)}
                    aria-current={n === page ? "page" : undefined}
                    className={`cursor-pointer ${pageLink(n === page)}`}>
                    {n}
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className={`px-1 ${
                page === totalPages
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-gray-800 hover:underline cursor-pointer"
              }`}>
              Next
            </button>
          </nav>
        )}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {current && currentEmbed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50"
            onClick={() => setSelectedIndex(null)}>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="bg-white rounded-2xl w-full max-w-3xl relative mx-4 top-[50px]"
              onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setSelectedIndex(null)}
                className="absolute -top-8 right-0 text-white hover:text-red-300 cursor-pointer text-2xl"
                aria-label="Close">
                ✕
              </button>

              <div className="aspect-video w-full">
                <iframe
                  width="100%"
                  height="100%"
                  src={currentEmbed}
                  title={current.title ?? "Video"}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-2xl"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
