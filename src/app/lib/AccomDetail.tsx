// C:\xampp\htdocs\Samwarthika\src\app\lib\ForeignCourse.ts

import { ReactNode } from "react";
import { ASSET_PREFIX } from "../../../config";
import Image from "next/image";

// ---------- Shared types ----------
export type ContentItem = {
  id: number | string;
  type: "content";
  heading: string;
  content: ReactNode;
};

export type TabItem = {
  id: number | string;
  type: "tab";
  heading: string;
  content?: ReactNode;
  tabs: { title: string; content: ReactNode }[];
};

type AccordionEntry = { title: string; content: ReactNode };
export type AccordionItem = {
  id: number | string;
  type: "accordian"; // (kept your spelling)
  heading: string; // group heading (e.g., “Course Syllabus”)
  content?: string;
  tabs: AccordionEntry[]; // entries shown as collapsible rows
};

export type SectionItem = ContentItem | TabItem | AccordionItem;

export type Course = {
  tabhead: string;
  courseHead: string;
  section: SectionItem[];
};

// ---------- Data (typed with widened string types) ----------
export const AccomDetail: Record<"course1", Course> = {
  course1: {
    tabhead: "Course 4",
    courseHead: " ",
    section: [
      {
        id: 0,
        type: "content",
        heading: "Dining & Cuisine",
        content: (
          <>
            {" "}
            <div className="    xl:max-w-[95%]  flex  max-xl:flex-col xl:grid  max-xl:grid-cols-[100%]   max-2xl:grid-cols-[35%_60%]  grid-cols-[33%_60%]  justify-between items-center gap-[150px] max-2xl:gap-[100px] max-xl:gap-[0px]  max-xl:justify-between ">
              <div className=" mt-[20px] relative w-[100%] h-[auto]   relative  z-[1] after:absolute  after:content-[] after:w-[100%] after:h-[100%]   after:top-[-15px] after:left-[0px] after:border-[1px_1px_0px_1px]  after:rounded-[90px_90px_0px_0px]  max-xl:after:rounded-[50px_50px_0px_0px] max-md:after:rounded-[70px_70px_0px_0px] after:border-[#ed9b5d] after:z-[-4]  xl:sticky xl:top-[100px] max-2xl:w-[70%]  max-[767px]:max-w-[400px] max-lg:mx-[auto] max-[767px]:mt-[60px] max-sm:mt-[40px] ">
                <div className="rounded-[90px_90px_0px_0px] max-xl:rounded-[50px_50px_0px_0px] overflow-hidden  h-full">
                  <Image
                    width={580}
                    height={750}
                    className=" w-[100%] h-[auto]"
                    alt="Dining Area at Samwarthika Ayurvedic Hospital"
                    src={`${ASSET_PREFIX}/assets/images/samwarthika-ayurvedic-hospital-dining-area.webp`}
                  />
                </div>

                <Image
                  width={424}
                  height={23}
                  className="w-[80%] h-[auto] absolute right-[0px] bottom-[40px]"
                  alt="Wave"
                  src={`${ASSET_PREFIX}/assets/images/wave-shape.webp`}
                />
              </div>
              <div>
                <h3 className="text-xl text-black font-light mb-2 mt-[40px]">
                  Vegetarian Kitchen & Spacious Dining Hall
                </h3>
                <p className="text-[16px] leading-[24xpx] text-[#341802] mt-[20px] mb-[20px] w-[80%] max-md:w-[90%] max-sm:w-[100%]">
                  We serve nutritious, fresh vegetarian meals prepared under
                  Ayurvedic principles. The dining hall is bright and airy,
                  making your meals part of your wellness experience. Diets are
                  customised to support your therapy, from cleansing to
                  rejuvenation.
                </p>
              </div>
            </div>
          </>
        ),
      },

      {
        id: 2,
        type: "accordian",
        heading: "Wellness-Support Facilities",
        content: "",
        tabs: [
          {
            title: "Garden of Herbal Plants & Library for Enrichment",
            content: (
              <>
                <p className="text-[16px] leading-[24xpx] text-[#341802] mb-[10px]">
                  Stroll through our herbal-plant garden, breathe in fresh air
                  and connect with nature during your stay. For quiet times, our
                  multilingual library provides reading material and a peaceful
                  corner for reflection and mental calm.
                </p>
              </>
            ),
          },
          {
            title: "Connectivity & Convenience",
            content: (
              <>
                <p className="text-[16px] leading-[24xpx] text-[#341802] mb-[10px] font-[600]">
                  Wi-Fi Facility, Laundry & Hot Water
                </p>
                <p className="text-[16px] leading-[24xpx] text-[#341802] mb-[10px]">
                  Stay connected and comfortable throughout your healing
                  experience. Free Wi-Fi, laundry services and continuous
                  hot-water ensure your stay is worry-free and supportive of
                  your healing process.
                </p>
              </>
            ),
          },
          {
            title: "Hospital-Infrastructure Highlights",
            content: (
              <>
                <p className="text-[16px] leading-[24xpx] text-[#341802] mb-[10px] font-[600]">
                  Full Spectrum of Care Under One Roof{" "}
                </p>
                <p className="text-[16px] leading-[24xpx] text-[#341802] mb-[10px]">
                  Our facility is fully equipped to support authentic Kerala
                  Ayurveda treatments. From the treatment rooms and consulting
                  suites to the pharmacy and reception area, everything is
                  designed for your convenience and treatment needs.
                </p>
              </>
            ),
          },
        ],
      },
    ],
  },
};
