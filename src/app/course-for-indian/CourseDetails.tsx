"use client";

import React, {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  ReactNode,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { IndianCourse } from "../lib/IndianCourse";

/* =========================
   Types
========================= */
type ContentItem = {
  id: number | string;
  type: "content";
  heading: string;
  content: string | ReactNode;
};

type TabItem = {
  id: number | string;
  type: "tab";
  heading: string;
  content?: string | ReactNode;
  tabs: { title: string; content: string | ReactNode }[];
};

type AccordionEntry = { title: string; content: ReactNode };

type AccordionItem = {
  id: number | string;
  type: "accordian";
  heading: string;
  content?: string | ReactNode;
  tabs: AccordionEntry[];
};

type SectionItem = ContentItem | TabItem | AccordionItem;

type Course = {
  tabhead: string;
  courseHead: string;
  section: SectionItem[];
};

type AccordionRow = {
  id?: string | number;
  title: React.ReactNode;
  content: React.ReactNode;
  disabled?: boolean;
};

/* =========================
   Accordion
========================= */
function AccordionGroup({
  items,
  defaultOpen = 0,
  itemClassName = "",
}: {
  items: AccordionRow[];
  defaultOpen?: number | null;
  itemClassName?: string;
}) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(defaultOpen);

  const toggle = (idx: number, disabled?: boolean) => {
    if (disabled) return;
    setOpenIndex((curr) => (curr === idx ? null : idx));
  };

  return (
    <div className="border-t border-[#1f7a4a66]">
      {items.map((row, idx) => {
        const isOpen = openIndex === idx;
        const id = String(row.id ?? idx);
        const headingId = `acc-head-${id}`;
        const panelId = `acc-panel-${id}`;
        const disabled = !!row.disabled;

        return (
          <div
            key={id}
            className={
              "group/acc pr-4 sm:pr-6 " +
              (idx === 0 ? "rounded-t-2xl " : "") +
              (idx === items.length - 1 ? "rounded-b-2xl " : "") +
              itemClassName
            }>
            <button
              id={headingId}
              className={
                "flex w-full items-center justify-between gap-4 py-4 text-left outline-none transition-opacity cursor-pointer " +
                (disabled
                  ? "cursor-not-allowed opacity-50"
                  : "hover:opacity-90")
              }
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => toggle(idx, disabled)}
              disabled={disabled}>
              <p className="text-[20px] leading-[32px] max-md:text-[18px] max-sm:leading-[24px] font-medium text-gray-900">
                {row.title}
              </p>
              <div className="p-[10px] max-sm:p-[3px] rounded-[50%] bg-[#5e773e]">
                <ChevronDown
                  className={
                    "h-6 w-6  max-md:h-5  max-md:w-5   shrink-0 text-white transition-transform duration-300 " +
                    (isOpen ? "rotate-180" : "rotate-0")
                  }
                  aria-hidden="true"
                />
              </div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.section
                  key="content"
                  id={panelId}
                  role="region"
                  aria-labelledby={headingId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.24, ease: [0.2, 0.8, 0.2, 1] }}
                  style={{ overflow: "hidden" }}>
                  <div className="pb-5 text-[16px] sm:text-base leading-relaxed w-[100%] md:w-[90%] text-gray-700">
                    {row.content}
                  </div>
                </motion.section>
              )}
            </AnimatePresence>

            <div className="h-px bg-[#1f7a4a] opacity-70" />
          </div>
        );
      })}
    </div>
  );
}

/* =========================
   Main Component
========================= */
export default function CourseDetails() {
  const HEADER_SELECTOR = ".header";
  const quickNavRef = useRef<HTMLDivElement | null>(null);

  type IndianCourseType = Record<string, Course>;
  const courseKeys = Object.keys(IndianCourse) as Array<
    keyof typeof IndianCourse
  >;

  // if multiple courses exist, we still support activeKey
  const [activeKey, setActiveKey] = useState<keyof typeof IndianCourse>(
    courseKeys[0]
  );
  const [activeQuickIndex, setActiveQuickIndex] = useState(0);
  const [tabIndexById, setTabIndexById] = useState<
    Record<string | number, number>
  >({});
  const [headerHeight, setHeaderHeight] = useState(0);
  const [activeSection, setActiveSection] = useState("");

  const activeCourse = (IndianCourse as IndianCourseType)[activeKey as string];

  // measure header height
  useLayoutEffect(() => {
    const readHeight = () => {
      const header = document.querySelector(
        HEADER_SELECTOR
      ) as HTMLElement | null;
      setHeaderHeight(header?.offsetHeight ?? 0);
    };
    readHeight();
    window.addEventListener("resize", readHeight);
    return () => window.removeEventListener("resize", readHeight);
  }, []);

  // reset quick nav + tabs on course change
  useEffect(() => {
    setActiveQuickIndex(0);
    setTabIndexById({});
  }, [activeKey]);

  // Scroll spy: update activeSection (optional use)
  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = document.querySelectorAll(
        ".w-doc-content > section[id]"
      );
      let currentSection = "";

      sections.forEach((section) => {
        const rect = (section as HTMLElement).getBoundingClientRect();
        if (
          rect.top <= window.innerHeight / 2 &&
          rect.bottom > window.innerHeight / 4
        ) {
          currentSection = (section as HTMLElement).id;
        }
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScrollSpy);
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  // ✅ single scroll helper - always scrolls window
  const scrollToSection = (id: string) => {
    const targetSection = document.getElementById(id);
    if (!targetSection) return;

    // prefer measured headerHeight; fallback by viewport
    const baseOffset = headerHeight || (window.innerWidth < 768 ? 170 : 100);

    const sectionPosition =
      targetSection.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: sectionPosition - (baseOffset + 10),
      behavior: "smooth",
    });
  };

  const setTabFor = (id: string | number, idx: number) =>
    setTabIndexById((prev) => ({ ...prev, [id]: idx }));

  return (
    <section className="py-[140px] max-2xl:py-[100px] max-xl:py-[80px] max-md:py-[50px]">
      <h2 className="m-auto text-[#314a10] mt-[0px] font-normal text-[30px] leading-[30px] md:text-[38px] md:leading-[60px] xl:text-[45px] xl:leading-[45px] 2xl:text-[60px] 2xl:leading-[60px] text-center">
        Ayurveda Courses
      </h2>

      <div className="flex flex-col items-center gap-[10px] max-sm:gap-0 mt-[50px]">
        {/* If you later want course tabs (like ForeignCourse), you can render them here using courseKeys & setActiveKey */}
        <div className="flex gap-[10px] justify-start w-[90%] mx-auto max-w-[120rem] border-b border-[#304a10] mb-[20px] max-sm:mb-0">
          {courseKeys.map((k) => {
            const course = (IndianCourse as IndianCourseType)[k as string];
            const isActive = activeKey === k;

            return (
              <button
                key={String(k)}
                onClick={() => setActiveKey(k)}
                className={`px-4 h-[40px] py-2 rounded-[15px_15px_0_0] transition-all text-nowrap text-[#000] cursor-pointer max-md:text-[16px] max-md:leading-[20px] ${
                  isActive
                    ? "bg-[#304a10] text-white max-sm:py-2 max-sm:px-3"
                    : "bg-transparent max-sm:py-0 max-sm:px-0"
                }`}>
                {course?.tabhead ?? String(k)}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-[300px_auto] max-lg:grid-cols-1 gap-[120px] max-2xl:gap-[90px] max-lg:gap-[70px] max-md:gap-[40px] mas-sm:gap-[30px] w-[90%] mx-auto max-w-[120rem]">
          {/* Left: Quick nav */}
          <aside className="max-md:sticky top-[100px] z-[20] ">
            <div className="rounded-[50px_50px_0_0] max-md:rounded-[0] bg-[#c8e3d2] max-md:bg-[#607447] pt-[40px] max-md:py-[20px] pl-[20px] pb-[10px] max-sm:py-[20px] max-sm:pl-[10px] max-sm:pr-[25px] flex flex-col gap-[10px] sticky top-[130px] z-[20] max-md:overflow-x-scroll">
              <h3 className="text-[22px] leading-[30px] text-[#314a10cc] mb-[10px] font-semibold text-start pl-[12px] max-lg:hidden">
                Quick Links
              </h3>

              {/* Desktop Nav */}
              {activeCourse.section.map((item, idx) => (
                <button
                  key={`quick-${String(item.id)}`}
                  onClick={() => {
                    setActiveQuickIndex(idx);
                    scrollToSection(String(item.id));
                  }}
                  className={`text-start text-[#3b5224] hidden md:block px-4 w-full h-[40px] py-2 rounded-[20px_0_0_20px] transition-all cursor-pointer ${
                    activeQuickIndex === idx
                      ? "bg-white"
                      : "bg-transparent hover:bg-white/60"
                  }`}>
                  {item.heading}
                </button>
              ))}

              {/* Mobile carousel Nav */}
              <div
                ref={quickNavRef}
                className="flex gap-[5px] md:hidden overflow-x-auto scroll-smooth whitespace-nowrap no-scrollbar flex-row">
                {activeCourse.section.map((item, idx) => (
                  <button
                    key={`quick-${String(item.id)}`}
                    onClick={(e) => {
                      scrollToSection(String(item.id));
                      setActiveQuickIndex(idx);

                      const container = quickNavRef.current;
                      if (container && window.innerWidth < 768) {
                        const buttonRect =
                          e.currentTarget.getBoundingClientRect();
                        const containerRect = container.getBoundingClientRect();

                        const offset = buttonRect.left - containerRect.left;
                        const scrollTarget = container.scrollLeft + offset;

                        container.scrollTo({
                          left: scrollTarget,
                          behavior: "smooth",
                        });
                      }

                      if (window.innerWidth >= 768) {
                        e.currentTarget.scrollIntoView({
                          behavior: "smooth",
                          inline: "start",
                          block: "nearest",
                        });
                      }
                    }}
                    className={`text-start text-[#3b5224] px-4 py-2 max-md:px-3 max-md:py-2 max-md:text-[16px] max-md:leading-[20px] h-[40px] rounded-[20px_0_0_20px] max-md:rounded-[20px] transition-all cursor-pointer ${
                      activeQuickIndex === idx
                        ? "bg-white"
                        : "bg-transparent hover:bg-white/60 max-md:text-[#fff]"
                    } md:inline-block md:w-auto md:rounded-full md:mx-2`}>
                    {item.heading}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Right: Scrollable content */}
          <main className="w-doc-content flex flex-col gap-[10px] sm:pr-4 scroll-smooth ">
            <div className="pt-8 pb-2">
              <p className="text-3xl font-semibold text-[#000]">
                {activeCourse.courseHead}
              </p>
            </div>

            {activeCourse.section.map((item) => {
              if (item.type === "content") {
                const c = item as ContentItem;
                return (
                  <section
                    key={`content-${c.id}`}
                    id={String(c.id)}
                    className="pb-5"
                    style={{ scrollMarginTop: headerHeight + 10 }}>
                    <p className="text-2xl font-semibold m-[30px_0px_20px] font-[Mulish] text-[#000]">
                      {c.heading}
                    </p>
                    <div>{c.content}</div>
                  </section>
                );
              }

              if (item.type === "tab") {
                const t = item as TabItem;
                const currentTab = tabIndexById[t.id] ?? 0;

                return (
                  <section
                    key={`tab-${t.id}`}
                    id={String(t.id)}
                    className="pb-5"
                    style={{ scrollMarginTop: headerHeight + 10 }}>
                    <p className="text-2xl font-semibold m-[30px_0px_20px] font-[Mulish] text-[#000]">
                      {t.heading}
                    </p>

                    {/* TAB BUTTONS */}
                    <div className="flex flex-wrap gap-[10px] mb-4">
                      {t.tabs.map((tab, i) => (
                        <button
                          key={`tabbtn-${t.id}-${i}`}
                          onClick={() => setTabFor(t.id, i)}
                          className={`cursor-pointer text-[16px] leading-[18px] tracking-[2px] font-light px-5 py-3 border border-[var(--primary)] transition duration-300 ${
                            currentTab === i
                              ? "bg-[var(--primary)] text-white"
                              : "text-[var(--primary)]"
                          }`}
                          aria-pressed={currentTab === i}>
                          {tab.title}
                        </button>
                      ))}
                    </div>

                    {/* If you need SEO-friendly all-tabs-rendered variant, we can switch this to map over all tabs and hide inactive with CSS */}
                    <div>{t.tabs[currentTab]?.content}</div>
                  </section>
                );
              }

              if (item.type === "accordian") {
                const a = item as AccordionItem;
                return (
                  <section
                    key={`acc-${a.id}`}
                    id={String(a.id)}
                    className="pb-2"
                    style={{ scrollMarginTop: headerHeight + 10 }}>
                    {a.heading && (
                      <p className="text-2xl font-semibold m-[30px_0px_20px] font-[Mulish] text-[#000]">
                        {a.heading}
                      </p>
                    )}
                    {a.content && <p className="mb-4">{a.content}</p>}
                    <AccordionGroup
                      items={a.tabs.map((t) => ({
                        title: t.title,
                        content: t.content,
                      }))}
                      defaultOpen={0}
                    />
                  </section>
                );
              }

              return null;
            })}
          </main>
        </div>
      </div>
    </section>
  );
}
