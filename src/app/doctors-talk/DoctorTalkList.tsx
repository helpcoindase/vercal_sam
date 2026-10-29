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
};

const sideVideos: VideoItem[] = [
  {
    video: "https://www.youtube.com/watch?v=50gi1T_pFL8",
    type: "youtube",
    year: 2025,
    thumbnail: "recovering-from-stroke-with-ayurveda.webp",
    title: "Recovering from Stroke with Ayurveda",
  },
  {
    video: "https://www.youtube.com/watch?v=jRWsTxYTpT8",
    type: "youtube",
    year: 2025,
    thumbnail: "food-lifestyle-herbal-medications-for-monsoon-treatment.webp",
    title: "Food Lifestyle Herbal Medications for Monsoon Treatment",
  },
  {
    video: "https://www.youtube.com/watch?v=4jlC6hzh4IY",
    type: "youtube",
    year: 2025,
    thumbnail: "rheumatoid-arthritis-symptoms-and-treatment-explained.webp",
    title: "Rheumatoid Arthritis Symptoms and Treatment",
  },
  {
    video: "https://www.youtube.com/watch?v=SsUKGeUWtm8",
    type: "youtube",
    year: 2025,
    thumbnail: "ayurvedic-clinic.webp",
    title: "Ayurvedic Clinic",
  },
  {
    video: "https://www.youtube.com/watch?v=wkcXSbcjeIY&pp=0gcJCQMKAYcqIYzv",
    type: "youtube",
    year: 2025,
    thumbnail: "what-is-infertility-and-what-are.webp",
    title: "What is Infertility",
  },
  {
    video: "https://www.youtube.com/watch?v=XhU9oJLu2qk",
    type: "youtube",
    year: 2025,
    thumbnail: "5-common-mistakes-to-avoid-while-drinking-water.webp",
    title: "5 Common Mistakes to Avoid While Drinking Water",
  },
  {
    video: "https://www.youtube.com/watch?v=uupw6iNRzgA",
    type: "youtube",
    year: 2025,
    thumbnail: "what-is-scoliosis.webp",
    title: "What is Scoliosis",
  },
  {
    video: "https://www.youtube.com/watch?v=VS9a2fLozx8",
    type: "youtube",
    year: 2025,
    thumbnail: "vata-roga-arthritis-symptoms-and-remedies.webp",
    title: "Vata Roga (Arthritis) Symptoms and Remedies",
  },
  {
    video: "https://www.youtube.com/watch?v=AR1WppZdNcE",
    type: "youtube",
    year: 2025,
    thumbnail: "what-is-diabetic-neuropathy.webp",
    title: "What is Diabetic Neuropathy?",
  },
  {
    video: "https://www.youtube.com/watch?v=XO4Z3HAtvJw",
    type: "youtube",
    year: 2025,
    thumbnail: "what-is-trigeminal-neuralgia.webp",
    title: "What is Trigeminal Neuralgia?",
  },
  {
    video: "https://www.youtube.com/watch?v=pX7inKiSYG8",
    type: "youtube",
    year: 2023,
    thumbnail: "feb-3.webp",
    title: "Understanding Febrile Seizures in Children",
  },
  {
    video: "https://www.youtube.com/watch?v=AxjH_zV9YGo",
    type: "youtube",
    year: 2023,
    thumbnail: "ayurvedic-treatment-for-healthy-weight.webp",
    title: "Ayurvedic Treatment for Healthy Weight",
  },
  {
    video: "https://www.youtube.com/watch?v=WZpZb0OGmso",
    type: "youtube",
    year: 2023,
    thumbnail: "male-infertility-causes.webp",
    title: "Male Infertility Causes",
  },
  {
    video: "https://www.youtube.com/watch?v=mLZ7eqfVXVM",
    type: "youtube",
    year: 2023,
    thumbnail: "polycystic-ovary-syndrome.webp",
    title: "Polycystic Ovary Syndrome",
  },
  {
    video: "https://www.youtube.com/watch?v=joaB8RaBsPw",
    type: "youtube",
    year: 2023,
    thumbnail: "autism-what-to-know.webp",
    title: "Autism: What to Know",
  },
  {
    video: "https://www.youtube.com/watch?v=ZVfg7IvlSDc",
    type: "shorts",
    year: 2023,
    title: "What is Schizophrenia ? | Can Schizophrenia Be Cured?",
    thumbnail: "what-is-schizophrenia.webp",
  },
  {
    video: "https://www.youtube.com/watch?v=fP8c2sap6nw",
    type: "shorts",
    year: 2023,
    thumbnail: "can-ayurveda-cure-parkinsons.webp",
    title: "Can Ayurveda Cure Parkinsons?",
  },
  {
    video: "https://www.youtube.com/watch?v=sHXLURbT3aA",
    type: "shorts",
    year: 2023,
    thumbnail: "how-ayurveda-helps-to-treat-cervical-radiculopathy.webp",
    title: "How Ayurveda Helps to Treat Cervical Radiculopathy",
  },
  {
    video: "https://www.youtube.com/watch?v=2PbEgBe4rS4",
    type: "shorts",
    year: 2023,
    thumbnail: "ulcerative-colitis.webp",
    title: "Ulcerative Colitis",
  },
  {
    video: "https://www.youtube.com/watch?v=pa5Fw1VyNoE",
    type: "shorts",
    year: 2023,
    thumbnail: "covid-19-omicron-varient.webp",
    title: "Covid 19 Omicron Varient",
  },
  {
    video: "https://www.youtube.com/watch?v=z3Oj91erVFw",
    type: "shorts",
    year: 2023,
    thumbnail: "talk-by-dr-gayathri-viswanath.webp",
    title: "Talk by Dr. Gayathri Viswanath",
  },
  {
    video: "https://www.youtube.com/watch?v=HH88g-qfSpg",
    type: "youtube",
    year: 2022,
    thumbnail: "restless-leg-syndrome.webp",
    title: "Restless Leg Syndrome",
  },
  {
    video: "https://www.youtube.com/watch?v=PqBatH6n_CY",
    type: "youtube",
    year: 2022,
    thumbnail: "menstruation.webp",
    title: "Menstruation",
  },
  {
    video: "https://www.youtube.com/watch?v=Fth-lrWU7_8",
    type: "youtube",
    year: 2022,
    thumbnail: "sinusitis-thumbnail.webp",
    title: "Sinusitis",
  },
  {
    video: "https://www.youtube.com/watch?v=N8SbQn2II_w",
    type: "youtube",
    year: 2022,
    thumbnail: "migrainemigraine-thumbnail.webp",
    title: "Migraine",
  },
  {
    video: "https://www.youtube.com/watch?v=C9pQCh1bo0k",
    type: "youtube",
    year: 2022,
    thumbnail: "foot-corn-thumbnail.webp",
    title: "Foot Corn",
  },
  {
    video: "https://www.youtube.com/watch?v=0zecZiVt2dQ",
    type: "youtube",
    year: 2022,
    thumbnail:
      "post-covid-rehabilitationpost-covid-rehabilitation-thumbnail.webp",
    title: "Post Covid Rehabilitation",
  },
  {
    video: "https://www.youtube.com/watch?v=QBwjM9FkCYE",
    type: "youtube",
    year: 2022,
    thumbnail: "gastro-esophagal-reflux-disease-thumbnail.webp",
    title: "Gastro Esophagal Reflux Disease",
  },
  {
    video: "https://www.youtube.com/watch?v=P3tN_pR0LRI",
    type: "youtube",
    year: 2022,
    thumbnail: "psoriasis-thumbnail.webp",
    title: "Psoriasis",
  },
  {
    video: "https://www.youtube.com/watch?v=VFtfW0ecFGA",
    type: "youtube",
    year: 2022,
    thumbnail: "carpal-tunnel-syndrome-thumbnail.webp",
    title: "Carpal Tunnel Syndrome",
  },
  {
    video: "https://www.youtube.com/watch?v=gEMbD3H8g4Y",
    type: "youtube",
    year: 2022,
    thumbnail: "autism-thumbnail.webp",
    title: "Autism",
  },
  {
    video: "https://www.youtube.com/watch?v=r9K9-_gGMMI",
    type: "youtube",
    year: 2022,
    thumbnail: "doctors-list-thumbnail.webp",
    title: "Doctors List",
  },
  {
    video: "https://www.youtube.com/watch?v=V-9uSKVijEg",
    type: "youtube",
    year: 2022,
    thumbnail: "samwarthika-ayurveda-hospital-thumbnail.webp",
    title: "Doctors List",
  },
  {
    video: "https://www.youtube.com/watch?v=C_aVzSeXCZA",
    type: "youtube",
    year: 2022,
    thumbnail: "knee-pain-thumbnail.webp",
    title: "Doctors List",
  },
  {
    video: "https://www.youtube.com/watch?v=D7JetUCeGv0",
    type: "youtube",
    year: 2022,
    thumbnail: "heel-pain-thumbnail.webp",
    title: "Doctors List",
  },
  {
    video: "https://www.youtube.com/watch?v=rRyQ4Rsm9LY",
    type: "youtube",
    year: 2022,
    thumbnail: "piles-thumbnail.webp",
    title: "Doctors List",
  },
  {
    video: "https://www.youtube.com/watch?v=3EvlXOv6-ZY",
    type: "youtube",
    year: 2022,
    thumbnail: "vertigo-thumbnail.webp",
    title: "Doctors List",
  },
  {
    video: "https://www.youtube.com/watch?v=NRywwcqV82I",
    type: "youtube",
    year: 2022,
    thumbnail: "neck-pain-thumbnail.webp",
    title: "Doctors List",
  },
  {
    video: "https://www.youtube.com/watch?v=mVwg39claIg",
    type: "youtube",
    year: 2022,
    thumbnail: "ayurvedic-postpartum-care-for-mothers-thumbnail.webp",
    title: "Doctors List",
  },
  {
    video: "https://www.youtube.com/watch?v=a4cXfK_fl2M",
    type: "youtube",
    year: 2022,
    thumbnail: "how-to-manage-stress-thumbnail.webp",
    title: "Doctors List",
  },
  {
    video: "https://www.youtube.com/watch?v=WM-BA_0fraw",
    type: "youtube",
    year: 2017,
    thumbnail: "cme-on-pain-mangement-thumbnail.webp",
    title: "Doctors List",
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

export default function DoctorTalkList() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // filters
  const [activeType, setActiveType] = useState<"all" | VideoType>("all");
  const [activeYear, setActiveYear] = useState<number | "all">("all");

  // pagination (8 per page on desktop too)
  const [page, setPage] = useState(1);
  const PAGE_SIZE = 8;

  // years list
  const years = useMemo(() => {
    const ys = Array.from(
      new Set(sideVideos.map((v) => v.year).filter(Boolean)),
    ) as number[];
    return ys.sort((a, b) => b - a);
  }, []);

  const filtered = useMemo(() => {
    let list = sideVideos.slice();
    if (activeType !== "all")
      list = list.filter((v) => (v.type ?? "youtube") === activeType);
    if (activeYear !== "all") list = list.filter((v) => v.year === activeYear);
    return list;
  }, [activeType, activeYear]);

  // close modal and reset to page 1 when filters change (prevents stale indices)
  useEffect(() => {
    setSelectedIndex(null);
    setPage(1);
  }, [activeType, activeYear]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));

  const paged = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return filtered.slice(start, start + PAGE_SIZE);
  }, [filtered, page]);

  // clamp page if filtered gets shorter
  useEffect(() => {
    if (page > totalPages) setPage(totalPages);
  }, [totalPages, page]);

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

  // open by saving the index into the *filtered* list (not original sideVideos)
  const openAtFilteredIndex = (indexInPage: number) => {
    const idxInFiltered = (page - 1) * PAGE_SIZE + indexInPage;
    setSelectedIndex(idxInFiltered);
  };

  const current = selectedIndex !== null ? filtered[selectedIndex] : null;

  return (
    <section className="py-[140px] max-2xl:py-[100px] max-xl:py-[80px] max-md:py-[50px]">
      <div className="w-[85%] max-lg:w-[90%] m-auto max-w-[120rem]">
        {/* Tabs & Filters */}
        <div className="flex flex-col items-start gap-4 mb-6">
          {/* Type Tabs */}
          <div className="flex items-end gap-[15px] border-b border-[#e5e7eb] w-full">
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
          <div className="flex flex-wrap items-center gap-2 w-full">
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
            const thumbnail = item.thumbnail || getYouTubeThumbnail(item.video);
            return (
              <div
                key={`${item.video}-${index}`}
                className="rounded-[30px] max-lg:rounded-[25px] max-mlg:rounded-[20px] max-md:rounded-[15px] overflow-hidden relative group h-fit
                           after:absolute after:top-0 after:left-0 after:w-full after:h-full after:content-[''] after:bg-[linear-gradient(0deg,rgba(0,0,0,0.56)_0%,rgba(255,255,255,0)_100%)]
                           cursor-pointer">
                <Image
                  width={800}
                  height={600}
                  className="w-full h-full object-cover object-center transition duration-1000 group-hover:scale-110"
                  alt={item.title || "testimonial"}
                  // src={thumbnail}
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
        {current && (
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
                  src={toEmbedUrl(current.video)}
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
