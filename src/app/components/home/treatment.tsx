"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ASSET_PREFIX } from "../../../../config";
import type { Swiper as SwiperClass, NavigationOptions } from "swiper/types";

/* ------------------------------------------------------------------ */
/* Descriptions map for popup content                                  */
/* ------------------------------------------------------------------ */

const DESCRIPTIONS: Record<string, string> = {
  Alopecia:
    "Hair-fall management with herbal oils, scalp therapies, diet and stress balance to support healthy regrowth.",
  "Arthritis Treatment":
    "Pain and stiffness relief through abhyanga, kizhi, specialized lepams and joint-strengthening routines.",
  Autism:
    "Supportive Ayurvedic regimen focused on digestion, sleep and calming routines with compassionate care.",
  "Cervical Spondylosis":
    "Neck pain and mobility care with kati/greva vasti, dhara and targeted stretches to ease compression.",
  "Disc Bulge":
    "Back/leg pain relief via pizhichil, kizhi, gentle traction routines and core-stability guidance.",
  Dysmenorrhea:
    "Cramp and cycle-comfort care with nasyam, abhyanga, herbal formulations and warming compresses.",
  "Gastroesophageal Reflux":
    "Acid reflux balance using light diet, herbal decoctions and soothing ghee-based medicines.",
  "Knee Pain":
    "Pain and swelling reduction with janubasti, kizhi, localized lepams and strengthening practices.",
  "Lower Back Pain":
    "Lumbar support through kati vasti, abhyanga, stretching and posture-focused routines.",
  "Lumbar Spondylosis":
    "Chronic low-back stiffness relief with oil therapies, gentle mobilization and core conditioning.",
  "Monsoon Treatment":
    "Seasonal detox and immunity-boosting therapies recommended during monsoon for system reset.",
  "Parkinson Disease":
    "Adjunct ayurvedic care to balance, stiffness, sleep and digestion alongside medical therapy.",
  "Post Natal Care":
    "Postnatal recovery support for strength, lactation, rest and hormonal balance with safe herbal care.",
  "Psoriasis Sidhmam":
    "Skin-calming external therapies with internal detox and diet moderation for flare control.",
  Sciatica:
    "Radiating leg-pain relief using kati vasti, kizhi, mild traction and nerve-soothing routines.",
  Sinusitis:
    "Nasyam, steam and anti-kapha diet measures to relieve congestion and improve breathing.",
  Stress:
    "Mind-body calming therapies with shirodhara, abhyanga, breathwork and sleep-supportive routines.",
  "Stroke Paralysis":
    "Rehab-oriented therapies to stimulate circulation, restore muscles and aid functional recovery.",
  "Ulcerative Colitis Treatment":
    "Gut-soothing diet, herbal support and ghee-based medicines to calm inflammation.",
  "Varicose Veins":
    "Circulation support with external therapies, limb elevation and gentle activity guidance.",
  "Weight Loss Treatment":
    "Metabolic balancing with udwartanam, diet & activity planning for sustainable loss.",
  "Ayurvedic Treatment":
    "Rediscover wellness with genuine Ayurveda. Offering herbal remedies & personalized care.",
  "Panchakarma Treatment":
    "Reset your body & mind by detoxification, rejuvenation & restore balance under expert care.",
};

/* ------------------------------------------------------------------ */
/* Types                                                               */
/* ------------------------------------------------------------------ */
interface SideItem {
  img: string;
  imgtitle: string;
  link: string;
  imgalt: string;
}

interface Tab {
  id: string;
  title: ReactNode;
  banner: string;
  alt?: string;
  content: string;
  para?: string;
  sideImages: SideItem[];
}

/* ------------------------------------------------------------------ */
/* Tabs (unchanged titles/images; removed per-item content fields)     */
/* ------------------------------------------------------------------ */
const tabs: Tab[] = [
  {
    id: "tab1",
    title: (
      <p>
        Orthopaedics & Sports <br />
        Medicines
      </p>
    ),
    banner: "/assets/images/orthopaedics-and-sports-medicine.webp",
    alt: "Orthopaedics and Sports Medicine",
    content: "Advanced Solutions for Bone, Joint & Sports Injuries ",
    para: "We practice natural methods of Ayurvedic Treatment in Kerala by treating musculoskeletal conditions, including pain in joints, fractures and sprains, as well as sports injuries, employing Shalya Tantra and Kayachikitsa.",
    sideImages: [
      {
        img: "/assets/images/cervical-spondylosis.svg",
        imgalt: "Cervical Spondylosis Treatment",
        imgtitle: "Cervical Spondylosis",
        link: "/cervical-spondylosis-treatment-kerala",
      },
      {
        img: "/assets/images/disc-bulge.svg",
        imgalt: "Disc Bulge Protrusion",
        imgtitle: "Disc Bulge",
        link: "/ayurvedic-treatment-disc-bulge-kerala",
      },
      {
        img: "/assets/images/knee-pain.svg",
        imgalt: "Knee Pain Treatment",
        imgtitle: "Knee Pain",
        link: "/ayurvedic-treatment-for-knee-pain-in-kerala",
      },
      {
        img: "/assets/images/lower-back-pain.svg",
        imgalt: "Lower Back Pain",
        imgtitle: "Lower Back Pain",
        link: "/ayurvedic-treatment-for-lower-back-pain-in-kerala",
      },
      {
        img: "/assets/images/lumbar-spondylosis.svg",
        imgalt: "Lumbar Spondylosis Treatment",
        imgtitle: "Lumbar Spondylosis",
        link: "/lumbar-spondylosis-ayurvedic-treatment-in-kerala",
      },
      {
        img: "/assets/images/sciatica.svg",
        imgalt: "Sciatica Treatment",
        imgtitle: "Sciatica",
        link: "/ayurvedic-treatment-for-sciatica-in-kerala",
      },
      {
        img: "/assets/images/arthritis-treatment.svg",
        imgalt: "Arthritis Treatment",
        imgtitle: "Arthritis Treatment",
        link: "/arthritis-ayurvedic-treatment-kerala",
      },
    ],
  },
  {
    id: "tab2",
    title: <p>General Medicine</p>,
    banner: "/assets/images/general-med.webp",
    alt: "Expert General Medicine & Preventive Health",
    content: "Expert General Medicine & Preventive Health",
    para: "Ayurvedic treatment purifies the body, restores balance to doshas, builds Agni and incorporates lifestyle therapy, providing a comprehensive approach to treating physical or psychological issues.",
    sideImages: [
      {
        img: "/assets/images/gastroesophageal-reflux.svg",
        imgalt: "Gastroesophageal Reflux Disease Treatment",
        imgtitle: "Gastroesophageal Reflux",
        link: "/gastroesophageal-reflux-disease-treatment-in-kerala",
      },
      {
        img: "/assets/images/ulcerative-colitis-treatment.svg",
        imgalt: "Ulcerative Colitis Treatment",
        imgtitle: "Ulcerative Colitis Treatment",
        link: "/ulcerative-colitis-treatment-kerala",
      },
      {
        img: "/assets/images/sinusitis.svg",
        imgalt: "Sinusitis Treatment",
        imgtitle: "Sinusitis",
        link: "/sinusitis-ayurvedic-treatment-in-kerala",
      },

      {
        img: "/assets/images/stress-management.svg",
        imgalt: "Stress Management",
        imgtitle: "Stress",
        link: "/ayurvedic-treatment-for-stress-in-kerala",
      },
      {
        img: "/assets/images/varicose-veins.svg",
        imgalt: "Varicose Veins Treatment",
        imgtitle: "Varicose Veins",
        link: "/ayurvedic-treatment-for-varicose-veins-kerala",
      },
      {
        img: "/assets/images/psoriasis-ayurvedic-treatment.svg",
        imgalt: "Psoriasis Ayurvedic Treatment",
        imgtitle: "Psoriasis Sidhmam",
        link: "/psoriasis-ayurvedic-treatment-in-kerala",
      },
    ],
  },
  {
    id: "tab3",
    title: <p>Neurology</p>,
    banner: "/assets/images/neurology.webp",
    alt: "Neuro Ayurvedic Care & Wellness Services",
    content: "Neuro Ayurvedic Care & Wellness Services",
    para: "Ayurvedic treatment will stabilize Vata in keeping with healthy nerves by means of herbal oils, Panchakarma, yoga ormeditation for improved neurologic wellness.",
    sideImages: [
      {
        img: "/assets/images/autsim.svg",
        imgalt: "Autism Treatment",
        imgtitle: "Autism",
        link: "/best-ayurvedic-treatment-for-autism-in-kerala",
      },
      {
        img: "/assets/images/parkinson-disease.svg",
        imgalt: "Parkinsons Ayurvedic Treatment",
        imgtitle: "Parkinson Disease",
        link: "/parkinsons-ayurvedic-treatment-in-kerala",
      },
      {
        img: "/assets/images/stroke-paralysis.svg",
        imgalt: "Stroke Treatment",
        imgtitle: "Stroke Paralysis",
        link: "/ayurvedic-stroke-treatment-in-kerala",
      },
    ],
  },

  {
    id: "tab4",
    title: (
      <p>
        Women’s <br /> Healthcare
      </p>
    ),
    banner: "/assets/images/women-healthcare.webp",
    alt: "Natural Women’s Health & Healing Through Ayurveda",
    content: "Natural Women’s Health & Healing Through Ayurveda",
    para: "Completely holistic and Ayurvedic lifestyles in herbal therapies, diet, lifestyle and yoga, balancing hormones, promoting fertility and uplifting overall vitality for all life stages.",
    sideImages: [
      {
        img: "/assets/images/dysmenorrhea.svg",
        imgalt: "Dysmenorrhea Treatment",
        imgtitle: "Dysmenorrhea",
        link: "/ayurvedic-treatment-for-menstrual-pain-in-kerala",
      },
      {
        img: "/assets/images/post-natal-treatment.svg",
        imgalt: "Post Natal Treatment",
        imgtitle: "Post Natal Care",
        link: "/post-natal-ayurvedic-treatment-in-kerala",
      },
    ],
  },

  {
    id: "tab5",
    title: <p>Rehabilitation</p>,
    banner: "/assets/images/rehabilitation.webp",
    alt: "Ayruvedic Rehabilitation & Rejuvenation Therapy",
    content: "Ayruvedic Rehabilitation & Rejuvenation Therapy",
    para: "Strength and balance after illness or injury would be restored through Panchakarma, herbal medicines, yoga and mind-body therapies for a better lifestyle in Ayurveda.",
    sideImages: [
      {
        img: "/assets/images/stroke-paralysis.svg",
        imgalt: "Stroke Treatment",
        imgtitle: "Stroke Paralysis",
        link: "/ayurvedic-stroke-treatment-in-kerala",
      },
      {
        img: "/assets/images/weight-loss-treatment.svg",
        imgalt: "Hair Loss Treatment",
        imgtitle: "Weight Loss Treatment",
        link: "/weight-loss-ayurvedic-treatment-in-kerala/",
      },
    ],
  },
  {
    id: "tab6",
    title: (
      <p>
        Ayurvedic Retreat &
        <br />
        Panchakarma
      </p>
    ),
    banner: "/assets/images/panchakarma.webp",
    alt: "Panchakarma Wellness & Restorative Healing ",
    content: "Panchakarma Wellness & Restorative Healing ",
    para: "Deeply detoxifying Panchakarma therapies cleanse, balance doshas, fortify immunity and rejuvenate the body with detoxifying methods, diet and holistic lifestyle-upholding practices.",
    sideImages: [
      {
        img: "/assets/images/monsoon-treatment.svg",
        imgalt: "Monsoon Treatment",
        imgtitle: "Monsoon Treatment",
        link: "/ayurveda-monsoon-treatment-in-kerala",
      },
      {
        img: "/assets/images/weight-loss-treatment.svg",
        imgalt: "Weight Loss Treatment",
        imgtitle: "Weight Loss Treatment",
        link: "/weight-loss-ayurvedic-treatment-in-kerala",
      },
      {
        img: "/assets/images/ayurvedic-treatment.svg",
        imgalt: "Ayurveda Treatment",
        imgtitle: "Ayurvedic Treatment",
        link: "/ayurvedic-treatment-in-kerala",
      },
      {
        img: "/assets/images/panchakarma.svg",
        imgalt: "Panchakarma Treatment",
        imgtitle: "Panchakarma Treatment",
        link: "/panchakarma-treatment-in-kerala",
      },
    ],
  },
  {
    id: "tab7",
    title: (
      <p>
        Ayurvedic <br /> Paediatrics
      </p>
    ),
    alt: "/assets/images/ayurvedic-paediatrics.webp",
    banner: "/assets/images/ayurvedic-paediatrics.webp",
    content: "Holistic Child Healthcare in Ayurveda",
    para: "Natural pediatric care from prenatal to adolescence using nutrition, gentle therapies, herbal remedies and guidance to strengthen growth, immunity and emotional well-being.",
    sideImages: [
      {
        img: "/assets/images/autsim.svg",
        imgalt: "Autism Treatment",
        imgtitle: "Autism",
        link: "/best-ayurvedic-treatment-for-autism-in-kerala",
      },
    ],
  },
  {
    id: "tab8",
    title: (
      <p>
        Ayurvedic
        <br />
        Cosmetology
      </p>
    ),
    banner: "/assets/images/cosmo.webp",
    alt: "Traditional Ayurvedic Beauty & Cosmetic Care",
    content: "Traditional Ayurvedic Beauty & Cosmetic Care",
    para: "Holistic beauty care combining herbal skincare, hair treatments and detox therapies to enhance natural radiance, restore balance and promote confidence from within.",
    sideImages: [
      {
        img: "/assets/images/hair-loss-treatment.svg",
        imgalt: "Hair Loss Treatment",
        imgtitle: "Alopecia",
        link: "/ayurvedic-treatment-for-hair-loss-in-kerala",
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Component                                                           */
/* ------------------------------------------------------------------ */

export default function BannerWithTabs() {
  const [activeTab, setActiveTab] = useState<Tab>(tabs[0]);
  const [activeIndex, setActiveIndex] = useState(0); // for mobile tab-strip
  const [isMobile, setIsMobile] = useState(false);

  // Refs for mobile tab-strip
  const swiperRef = useRef<SwiperClass | null>(null);
  const backRef = useRef<HTMLButtonElement | null>(null);
  const frontRef = useRef<HTMLButtonElement | null>(null);

  // Refs for inner grid swiper
  const innerSwiperRef = useRef<SwiperClass | null>(null);
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  // Bind mobile tab-strip nav after refs are set
  useEffect(() => {
    if (!swiperRef.current || !backRef.current || !frontRef.current) return;
    const swiper = swiperRef.current;
    if (
      swiper.params.navigation &&
      typeof swiper.params.navigation !== "boolean"
    ) {
      (swiper.params.navigation as NavigationOptions).prevEl = backRef.current;
      (swiper.params.navigation as NavigationOptions).nextEl = frontRef.current;
      swiper.navigation.destroy();
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, []);

  // Grid config
  const getGridConfig = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth > 890 && window.innerWidth < 1024) {
        return { PAGE_SIZE: 9, ROWS: 3, COLS: 2 }; // 3 rows × 2 cols
      }
      else if (window.innerWidth > 600 && window.innerWidth < 890) {
        return { PAGE_SIZE: 6, ROWS: 3, COLS: 2 }; // 3 rows × 2 cols
      } else if (window.innerWidth <= 600) {
        return { PAGE_SIZE: 4, ROWS: 2, COLS: 2 }; // 2 rows × 2 cols
      }
    }
    return { PAGE_SIZE: 9, ROWS: 3, COLS: 3 }; // default desktop
  };

  const { PAGE_SIZE, ROWS, COLS } = getGridConfig();

  // Bind inner grid swiper nav after refs are set
  useEffect(() => {
    if (!innerSwiperRef.current || !prevRef.current || !nextRef.current) return;
    const swiper = innerSwiperRef.current;
    if (
      swiper.params.navigation &&
      typeof swiper.params.navigation !== "boolean"
    ) {
      (swiper.params.navigation as NavigationOptions).prevEl = prevRef.current;
      (swiper.params.navigation as NavigationOptions).nextEl = nextRef.current;
      swiper.navigation.destroy();
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, []);

  // isMobile flag
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 850);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Click a mobile tab button
  const handleTabClick = (tab: Tab, index: number) => {
    setActiveTab(tab);
    setActiveIndex(index);
    if (swiperRef.current) swiperRef.current.slideTo(index, 300);
    if (innerSwiperRef.current) innerSwiperRef.current.slideTo(0, 0);
  };
  useEffect(() => {
    const imagesToPreload: string[] = [];

    tabs.forEach((tab) => {
      if (tab.banner) imagesToPreload.push(`${ASSET_PREFIX}${tab.banner}`);
      if (tab.sideImages?.length) {
        tab.sideImages.forEach((s) =>
          imagesToPreload.push(`${ASSET_PREFIX}${s.img}`)
        );
      }
    });

    imagesToPreload.forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });
  }, []);

  // ---- ALL HOOKS MUST BE HERE ----
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  // ❌ Previously this was above other hooks — now it's correct
  if (!mounted) return null;
  // ---- JSX BELOW ----
  const totalSlides = Math.ceil(
    (activeTab.sideImages?.length || 0) / PAGE_SIZE
  );
  return (
    <section>
      <div className="container-start relative">
        {/* Banner */}
        <div className="relative w-full xxl:h-[600px] h-[500px] max-xl:h-[450px] max-lg:h-[400px] z-[0] overflow-hidden">
          <Image
            src={`${ASSET_PREFIX}${activeTab.banner}`}
            alt={`${activeTab.alt}`}
            fill
            className="object-cover object-top"
            loading="lazy"
          />
          <div
            className="absolute left-1/2 max-xl:left-[auto] max-xl:right-[5%] max-mlg:right-[auto] max-mlg:left-[auto]
              w-[88%] lg:w-[70%] max-mlg:relative max-mlg:m-auto top-[50%] -translate-x-[35%] max-xl:-translate-x-[20%]  max-lg:-translate-x-[0%] -translate-y-1/2 text-left text-white z-[35]">
            <h2 className="text-white font-[source,serief4] text-[50px] leading-[52px] max-2xl:text-[42px] max-2xl:leading-[48px] max-xl:text-[36px] max-xl:leading-[40px] max-lg:text-[30px] max-lg:leading-[36px] max-mlg:text-[28px] max-mlg:leading-[32px] font-normal text-start w-[90%]">
              {activeTab.content}
            </h2>
            {activeTab.para ? (
              <p className="text-white/70 mt-10 my-7 max-w-[750px] max-xl:w-[600px] max-mlg:w-[90%] max-md:w-full max-[700px]:hidden!">
                {activeTab.para}
              </p>
            ) : null}

            <div className="btn-wrp flex flex-wrap gap-[10px] sm:gap-[20px]  max-xl:mt-5">
              <Link
                href="/treatments"
                className="uppercase border-white border block  py-[10px] px-[15px] max-xl:py-2 max-xl:px-6 text-[16px] leading-[18px] w-fit tracking-[2px] transition duration-300 ease-in-out hover:bg-white hover:text-[#032f18]">
                View More
              </Link>
              <Link
                className="book-app-sub"
                data-cta="book-appoinment"
                href="/contact-us">
                <div className="text-[16px] leading-[18px] tracking-[2px] uppercase  font-light  px-5 py-3 bg-[var(--primary)]  border-1 border-[var(--primary)] text-[#fff]   hover:bg-[transparent] hover:text-[#fff] hover:border-[#fff] transition duration-300">
                  Book Appointment
                </div>
              </Link>
              {/* <Link
                  className=" text-[16px] leading-[18px] tracking-[2px] uppercase font-light px-5 py-3  hover:bg-[#fff] border-1 border-[var(--secondary)]  hover:text-[var(--primary)] hover:border-[#fff] transition duration-300 text-[var(--secondary)] "
                  href="/client-testimonials">
                  What Customer Says
                </Link> */}
            </div>
          </div>

          <div className="absolute right-0 w-[280px] h-[460px] max-xl:w-[200px] max-xl:h-[400px] max-lg:w-[180px] max-lg:h-[350px] max-md:w-[150px] max-md:h-[260px] top-1/2 -translate-y-1/2 max-md:-right-[10px]">
            <Image
              src={`${ASSET_PREFIX}/assets/images/tab-shape.webp`}
              alt="Decor"
              fill
              className="w-full h-auto!
               opacity-70"
            />
          </div>
        </div>

        {/* Tabs & Image Section */}
        <div className="w-[80%] max-w-[100rem] max-xl:w-[90%] mx-auto grid grid-cols-[400px_auto] max-xxl:grid-cols-[380px_auto] max-2xl:grid-cols-[300px_auto] max-xl:grid-cols-[250px_auto] gap-8 max-2xl:gap-5 relative z-[20] -top-20 max-[890px]:grid-cols-[100%]!">
          {/* Desktop Tabs */}
          <div
            className={`flex flex-col w-full ${isMobile ? "hidden" : "block"}`}>
            <div className="bg-[#c8e3d2] rounded-[90px_90px_0_0] pl-[30px] pt-[90px] max-2xl:pl-5 max-2xl:pt-20">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  aria-label="Button"
                  className={`h-[90px] max-lg:h-[80px] block w-full text-left text-[#3b5224] font-semibold text-[20px] leading-[26px] max-xl:text-[18px] max-xl:leading-[24px] max-lg:text-[16px] max-lg:leading-[22px] py-3 px-4 max-lg:pr-0 rounded-[20px_0_0_20px] relative after:absolute after:bottom-[-2px] after:w-[90%] after:h-[1px] after:bg-white after:right-[5%] transition duration-300 cursor-pointer ${activeTab.id === tab.id
                    ? "bg-white after:hidden"
                    : "bg-transparent hover:bg-white"
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
                className="w-[180px] h-auto m-auto mt-5"
              />
              <div className="absolute -bottom-2 bg-white h-[20px] w-[80%] left-[10%]" />
            </div>
          </div>

          {/* Mobile Tab Swiper */}
          <div className={`${isMobile ? "block" : "hidden"}`}>
            <Swiper
              modules={[Navigation]}
              slidesPerView="auto"
              spaceBetween={15}
              centeredSlides={false}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              initialSlide={0}
              onSlideChange={(s: SwiperClass) =>
                setActiveIndex(s.realIndex ?? s.activeIndex)
              }
              navigation={{
                prevEl: backRef.current!,
                nextEl: frontRef.current!,
              }}
              className="tab-swiper !pb-4">
              {tabs.map((tab, index) => (
                <SwiperSlide key={tab.id} className="!w-auto">
                  <button
                    aria-label="Button"
                    className={`h-[60px] px-5 flex items-center justify-center text-[#3b5224] font-semibold text-[16px] sm:text-[18px] leading-[22px] sm:leading-[24px] rounded-xl border transition duration-300 cursor-pointer ${index === activeIndex
                      ? "bg-white border-[#3b5224]"
                      : "bg-[#c8e3d2] border-transparent hover:bg-white"
                      }`}
                    onClick={() => handleTabClick(tab, index)}>
                    {tab.title}
                  </button>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Right side - Image grid slider */}
          <div className="flex items-center m-auto justify-center max-w-[1000px] w-full h-full my-auto relative max-[1700px]:max-w-[950px] max-2xl:max-w-[700px] max-lg:max-w-[calc(600px-2rem)] max-[850px]:max-w-full w-full">
            <Swiper
              modules={[Pagination, Navigation]}
              navigation={{ prevEl: ".prev-nav", nextEl: ".next-nav" }}
              onSwiper={(swiper) => {
                innerSwiperRef.current = swiper;
              }}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              breakpoints={{
                0: { slidesPerView: 1, spaceBetween: 10 },
                768: { slidesPerView: 1, spaceBetween: 20 },
                1024: { slidesPerView: 1, spaceBetween: 40 },
              }}
              className="m-auto  md:mt-[110px]"
              style={{ overflowX: "hidden", overflowY: "visible" }}>
              {Array.from({
                length: Math.ceil(
                  (activeTab.sideImages?.length || 0) / PAGE_SIZE
                ),
              }).map((_, slideIndex) => (
                <SwiperSlide key={slideIndex} className="pt-[20px]">
                  <div className="grid gap-4 ">
                    {Array.from({ length: ROWS }).map((__, rowIndex) => {
                      const start = slideIndex * PAGE_SIZE + rowIndex * COLS;
                      const rowItems = activeTab.sideImages.slice(
                        start,
                        start + COLS
                      );
                      return (
                        <div
                          key={rowIndex}
                          className="grid gap-4"
                          style={{
                            gridTemplateColumns: `repeat(${COLS}, minmax(0, 1fr))`,
                          }}>
                          {rowItems.map(({ img, imgtitle, link, imgalt }, i) => (
                            <div
                              key={`${imgtitle}-${i}`}
                              className="relative group">
                              <div className="text-center w-[calc(200px-2rem)] h-[calc(200px-2rem)] max-md:w-auto max-md:h-auto m-auto flex justify-center flex-col p-3 rounded-[20px] overflow-x-hidden overflow-y-visible border border-transparent relative">
                                <Image
                                  src={`${ASSET_PREFIX}${img}`}
                                  alt={imgalt}
                                  width={80}
                                  height={80}
                                  className="object-contain mx-auto sepia"
                                />
                                <p className="mt-2 text-[#31936d] text-[18px] leading-[26px] max-lg:text-[16px] max-lg:leading-[24px] max-md:text-[16px] max-md:leading-[22px] font-semibold">
                                  {imgtitle}
                                </p>
                              </div>

                              {/* Tooltip / Popup */}
                              <div
                                className="  max-sm:hidden
                                  pointer-events-none
                                  absolute bottom-[calc(20%+10px)] md:bottom-[calc(20%+33px)] max-lg:left-1/2 max-xl:left-[calc(35%+55px)] left-1/2 -translate-x-1/2
                                  w-64 max-w-[80vw]
                                  rounded-xl border border-[#c3efd2] bg-[#effff5]
                                  px-4 py-3 text-[16px] text-[#2d4a34] shadow-xl
                                  opacity-0 translate-y-1
                                  transition-all duration-500
                                  group-hover:opacity-100 group-hover:translate-y-0
                                  z-[999999]
                                ">
                                {DESCRIPTIONS[imgtitle] ?? ""}
                                {/* <span
                                  className="
                                    absolute -bottom-2 left-1/2 -translate-x-1/2
                                    block h-3 w-3 rotate-45
                                    bg-[#effff5] border-b border-r border-[#c3efd2]
                                  "
                                /> */}
                              </div>
                              <Link
                                href={`${link}`}
                                className="inset-0 absolute z-1 "
                                aria-label="treatment"></Link>
                            </div>
                          ))}
                        </div>
                      );
                    })}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Pagination dots for inner slider */}
            {totalSlides > 0 && (
              <div className="absolute -bottom-[10%] max-[850px]:-bottom-[50px] left-1/2 -translate-x-1/2 flex gap-[15px] z-10 w-fit min-[890px]:hidden">
                {Array.from({ length: totalSlides }).map((_, idx) => (
                  <button
                    aria-label="Button"
                    key={idx}
                    onClick={() => innerSwiperRef.current?.slideTo(idx)}
                    className={`h-[12px] max-lg:h-[10px] rounded-full transition-all duration-300 ${activeIndex === idx
                      ? "bg-[#d9d9d9] w-[35px] max-lg:w-[25px]"
                      : "bg-[#9a8a80] w-[12px] max-lg:w-[10px]"
                      }`}
                  />
                ))}
              </div>
            )}

            {/* Prev / Next for inner slider */}
            <button
              ref={prevRef}
              className="prev-nav border-[#91b664] flex justify-center items-center absolute -bottom-[19%] max-[850px]:-bottom-[90px] -translate-y-1/2 left-[4.5rem] max-mlg:left-0 z-10 cursor-pointer bg-[#eff1ec] hover:bg-[#91b6646b] p-3 max-lg:p-2 rounded-full shadow-lg transition duration-200 border"
              aria-label="Previous">
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
            </button>
            <button
              ref={nextRef}
              className="next-nav border-[#91b664] flex justify-center items-center absolute -bottom-[19%] max-[850px]:-bottom-[90px] -translate-y-1/2 right-[4.5rem] max-mlg:right-0 z-10 cursor-pointer bg-[#eff1ec] hover:bg-[#91b6646b] p-[10px] sm:p-3 max-lg:p-2 rounded-full shadow-lg transition duration-200 border"
              aria-label="Next">
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
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
