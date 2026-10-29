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
export const ForeignCourse: Record<"course1" | "course2" | "course3", Course> =
{
  course1: {
    tabhead: "Mental Health",
    courseHead:
      "Advanced Course on Mental Health: An Integrated Approach in Ayurveda",
    section: [
      {
        id: 0,
        type: "content",
        heading: "Introduction",
        content: (
          <>
            <div className="    xl:max-w-[95%]  flex  max-xl:flex-col xl:grid  max-xl:grid-cols-[100%]   max-2xl:grid-cols-[35%_60%]  grid-cols-[33%_60%]  justify-between items-start gap-[150px] max-2xl:gap-[100px] max-xl:gap-[0px]  max-xl:justify-between">
              <div className=" mt-[20px] relative w-[100%] h-[auto]   relative  z-[1] after:absolute  after:content-[] after:w-[100%] after:h-[100%]   after:top-[-15px] after:left-[0px] after:border-[1px_1px_0px_1px]  after:rounded-[90px_90px_0px_0px]  max-xl:after:rounded-[50px_50px_0px_0px] max-md:after:rounded-[70px_70px_0px_0px] after:border-[#ed9b5d] after:z-[-4]  xl:sticky xl:top-[100px] max-2xl:w-[70%]  max-[767px]:max-w-[400px] max-lg:mx-[auto] max-[767px]:mt-[60px] max-sm:mt-[40px] ">
                <div className="rounded-[90px_90px_0px_0px] max-xl:rounded-[50px_50px_0px_0px] overflow-hidden  h-full">
                  <Image
                    width={450}
                    height={600}
                    className=" w-[100%] h-[auto]"
                    alt="Course for International"
                    src={`${ASSET_PREFIX}/assets/images/course-for-international.webp`}
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
                <p className="text-[16px] leading-[24xpx]  text-[#341802]  mt-[40px] mb-[20px]  w-[80%]  max-2xl:w-[100%] max-sm:w-[100%]">
                  {" "}
                  The Advanced Course on Mental Health: An Integrated Approach
                  in Ayurveda is a comprehensive 16-hour program designed to
                  provide an insightful understanding of mental health from
                  both Ayurvedic and modern psychological perspectives. This
                  course integrates classical Indian philosophical systems,
                  Ayurveda&#39;s rich mental health framework and
                  contemporary clinical psychology, offering a truly holistic
                  and interdisciplinary learning experience.
                </p>
                <p className="text-[16px] leading-[24xpx]  text-[#341802]  mt-[40px] mb-[20px]  w-[80%]  max-2xl:w-[100%] max-sm:w-[100%]">
                  Delivered over eight interactive sessions on weekends, the
                  course is ideal for Ayurveda practitioners, students, yoga
                  therapists and mental health professionals who wish to
                  deepen their knowledge of mind-body medicine from a
                  traditional yet integrative lens. The curriculum includes a
                  deep dive into:
                </p>{" "}
                <ul className="pl-[0] sm:pl-[20px]">
                  <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[#341802]  max-md:leading-[22px]">
                    <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
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
                          d="m10 17l5-5l-5-5"></path>
                      </svg>
                    </div>
                    The concept of Manas (mind) in Ayurveda and Indian
                    philosophies
                  </li>
                  <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[#341802]  max-md:leading-[22px]">
                    <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
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
                          d="m10 17l5-5l-5-5"></path>
                      </svg>
                    </div>
                    Psychological processes and neurobiological insights
                  </li>
                  <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[#341802]  max-md:leading-[22px]">
                    <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
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
                          d="m10 17l5-5l-5-5"></path>
                      </svg>
                    </div>
                    Ayurvedic interpretation of mental disorders
                  </li>
                  <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[#341802]  max-md:leading-[22px]">
                    <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
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
                          d="m10 17l5-5l-5-5"></path>
                      </svg>
                    </div>
                    Lifestyle, diet, yoga and therapies as mental health
                    interventions
                  </li>
                  <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[#341802]  max-md:leading-[22px]">
                    <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
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
                          d="m10 17l5-5l-5-5"></path>
                      </svg>
                    </div>
                    Therapeutic approaches in Ayurveda: Daivavyapashraya,
                    Satvavajaya, Yuktivyapashraya chikitsas
                  </li>
                </ul>
              </div>
            </div>
          </>
        ),
      },
      {
        id: 1,
        type: "content",
        heading: "Overview",
        content: (
          <>
            {" "}
            <div className="grid   xl:grid-cols-2  gap-[20px]">
              <div className="bg-[#e3ecd9]  rounded-[30px]  p-[30px]  max-md:p-[25px_15px]  w-fit">
                <p className="text-xl font-light mb-2 text-black">
                  Total Hours:
                </p>
                <ul className="pl-[0] sm:pl-[20px]">
                  <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[#341802]  max-md:leading-[22px]">
                    <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
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
                          d="m10 17l5-5l-5-5"></path>
                      </svg>
                    </div>
                    <span>
                      {" "}
                      Total Duration: <b>16 Hours</b>
                    </span>
                  </li>
                  <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[#341802]  max-md:leading-[22px]">
                    <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
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
                          d="m10 17l5-5l-5-5"></path>
                      </svg>
                    </div>
                    <span>
                      {" "}
                      Session Format: <b>2 hours per session</b>
                    </span>
                  </li>
                  <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[#341802]  max-md:leading-[22px]">
                    <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
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
                          d="m10 17l5-5l-5-5"></path>
                      </svg>
                    </div>
                    <span>
                      <b> Schedule: </b>
                      <ul className="pl-[10px]">
                        {" "}
                        <li>Days: Saturdays &amp; Sundays</li>
                      </ul>
                    </span>
                  </li>
                </ul>
                <p className="text-xl font-light mb-2 text-black">
                  Mode of Delivery:
                </p>
                <ul className="pl-[0] sm:pl-[20px]">
                  <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[#341802]  max-md:leading-[22px]">
                    <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
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
                          d="m10 17l5-5l-5-5"></path>
                      </svg>
                    </div>
                    Online / Interactive Virtual Sessions (Live lectures,
                    discussions and Q&amp;A)
                  </li>
                </ul>
              </div>
              <div className="bg-[#ffdcc0]  rounded-[30px]  p-[30px]  max-md:p-[25px_15px]  w-fit">
                <p className="text-xl font-light mb-2 text-black">
                  Eligibility to Join the Course:
                </p>
                <ul className="pl-[0] sm:pl-[20px]">
                  <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[#341802]  max-md:leading-[22px]">
                    <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
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
                          d="m10 17l5-5l-5-5"></path>
                      </svg>
                    </div>
                    Ayurveda practitioners and students
                  </li>
                  <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[#341802]  max-md:leading-[22px]">
                    <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
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
                          d="m10 17l5-5l-5-5"></path>
                      </svg>
                    </div>
                    Yoga instructors and therapists
                  </li>
                  <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[#341802]  max-md:leading-[22px]">
                    <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
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
                          d="m10 17l5-5l-5-5"></path>
                      </svg>
                    </div>
                    Mental health professionals
                  </li>
                  <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[#341802]  max-md:leading-[22px]">
                    <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
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
                          d="m10 17l5-5l-5-5"></path>
                      </svg>
                    </div>
                    Medical professionals with an interest in integrative
                    psychiatry
                  </li>
                  <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[#341802]  max-md:leading-[22px]">
                    <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
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
                          d="m10 17l5-5l-5-5"></path>
                      </svg>
                    </div>
                    Individuals with a foundational understanding of Ayurveda
                    and a keen interest in mental health
                  </li>
                </ul>
              </div>
            </div>
          </>
        ),
      },
      {
        id: 4,
        type: "accordian",
        heading: "Course Syllabus",
        content: "",
        tabs: [
          {
            title: "Concept of Manas in Indian Philosophies & Ayurveda",
            content: (
              <>
                <ul className="pl-[0] sm:pl-[20px]">
                  <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[#341802]  max-md:leading-[22px]">
                    <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
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
                          d="m10 17l5-5l-5-5"></path>
                      </svg>
                    </div>
                    <span>
                      Manas in:
                      <ul className="pl-[10px]">
                        <li>
                          Sankhya, Yoga, Nyaya, Vaisheshika, Meemamsa and
                          Ayurveda
                        </li>
                      </ul>
                    </span>
                  </li>
                  <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[#341802]  max-md:leading-[22px]">
                    <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
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
                          d="m10 17l5-5l-5-5"></path>
                      </svg>
                    </div>
                    Introduction to psychoanalytic concepts and mind-body
                    correlations
                  </li>
                </ul>
              </>
            ),
          },
          {
            title: "Clinical Psychology and Psychological Processes - Part 1",
            content: (
              <>
                <ul className="pl-[0] sm:pl-[20px]">
                  <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[#341802]  max-md:leading-[22px]">
                    <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
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
                          d="m10 17l5-5l-5-5"></path>
                      </svg>
                    </div>
                    Overview of clinical psychology
                  </li>
                  <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[#341802]  max-md:leading-[22px]">
                    <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
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
                          d="m10 17l5-5l-5-5"></path>
                      </svg>
                    </div>
                    <span>
                      Ayurvedic interpretation of:
                      <ul className="pl-[20px]">
                        <li>Attention &amp; Perception</li>
                        <li>Intelligence &amp; Creativity</li>
                        <li>Motivation &amp; Emotion</li>
                      </ul>
                    </span>
                  </li>
                </ul>
              </>
            ),
          },
          {
            title: "  Psychological Processes - Part 2",
            content: (
              <>
                <p className="text-xl font-light mb-2 text-black"></p>
                <ul className="pl-[0] sm:pl-[20px]">
                  <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[#341802]  max-md:leading-[22px]">
                    <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
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
                          d="m10 17l5-5l-5-5"></path>
                      </svg>
                    </div>
                    <span>
                      Deeper insights into:
                      <ul className="pl-[20px]">
                        <li>Consciousness</li>
                        <li>Learning &amp; Memory</li>
                        <li>Cognition &amp; Dreams</li>
                        <li>Manasika Bhavas and Manovikaras</li>
                      </ul>
                    </span>
                  </li>
                </ul>
              </>
            ),
          },
          {
            title: "Concept of Manovaha Srotas",
            content: (
              <>
                <ul className="pl-[0] sm:pl-[20px]">
                  <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[#341802]  max-md:leading-[22px]">
                    <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
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
                          d="m10 17l5-5l-5-5"></path>
                      </svg>
                    </div>
                    Ayurvedic anatomy and physiology of Manovaha Srotas
                  </li>
                  <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[#341802]  max-md:leading-[22px]">
                    <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
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
                          d="m10 17l5-5l-5-5"></path>
                      </svg>
                    </div>
                    Basics of neurophysiology, psycho-neuro-immunology and
                    ojas
                  </li>
                  <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[#341802]  max-md:leading-[22px]">
                    <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
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
                          d="m10 17l5-5l-5-5"></path>
                      </svg>
                    </div>
                    Physiological basis of human behavior
                  </li>
                  <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[#341802]  max-md:leading-[22px]">
                    <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
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
                          d="m10 17l5-5l-5-5"></path>
                      </svg>
                    </div>
                    Nervous system and behavior interaction
                  </li>
                </ul>
              </>
            ),
          },
          {
            title: " Psychiatric Examination & Symptomatology",
            content: (
              <>
                <ul className="pl-[0] sm:pl-[20px]">
                  <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[#341802]  max-md:leading-[22px]">
                    <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
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
                          d="m10 17l5-5l-5-5"></path>
                      </svg>
                    </div>
                    Mental Status Examination (MSE)
                  </li>
                  <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[#341802]  max-md:leading-[22px]">
                    <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
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
                          d="m10 17l5-5l-5-5"></path>
                      </svg>
                    </div>
                    Mini-Mental Status Examination (MMSE)
                  </li>
                  <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[#341802]  max-md:leading-[22px]">
                    <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
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
                          d="m10 17l5-5l-5-5"></path>
                      </svg>
                    </div>
                    Higher mental functions and cognitive testing
                  </li>
                  <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[#341802]  max-md:leading-[22px]">
                    <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
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
                          d="m10 17l5-5l-5-5"></path>
                      </svg>
                    </div>
                    Common psychiatric signs and symptoms
                  </li>
                  <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[#341802]  max-md:leading-[22px]">
                    <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
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
                          d="m10 17l5-5l-5-5"></path>
                      </svg>
                    </div>
                    Introduction to psychiatric assessment tools
                  </li>
                </ul>
              </>
            ),
          },
          {
            title: "  Mental Disorders - Modern Perspective",
            content: (
              <>
                <ul className="pl-[0] sm:pl-[20px]">
                  <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[#341802]  max-md:leading-[22px]">
                    <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
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
                          d="m10 17l5-5l-5-5"></path>
                      </svg>
                    </div>
                    <span>
                      Classification and basic understanding of common mental
                      illnesses:
                      <ul className="pl-[15px]">
                        <li>
                          Depression, anxiety, psychosis, mood disorders, etc.
                        </li>
                      </ul>
                    </span>
                  </li>
                </ul>
              </>
            ),
          },
          {
            title: "Mental Disorders - Ayurvedic Perspective",
            content: (
              <>
                <ul className="pl-[0] sm:pl-[20px]">
                  <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[#341802]  max-md:leading-[22px]">
                    <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
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
                          d="m10 17l5-5l-5-5"></path>
                      </svg>
                    </div>
                    Concepts of Bhuta, Graha and Bhutavidya
                  </li>
                  <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[#341802]  max-md:leading-[22px]">
                    <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
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
                          d="m10 17l5-5l-5-5"></path>
                      </svg>
                    </div>
                    <span>
                      Hetu, Lakshana and Samprapti of:
                      <ul className="pl-[15px]">
                        <li>Unmada, Apasmara, Atattwabhinivesha</li>
                        <li>Grahavesha, Bhutonmada, Gadodvega</li>
                        <li>Yoshapasmara, Madatyaya</li>
                      </ul>
                    </span>
                  </li>
                </ul>
              </>
            ),
          },
          {
            title: " Lifestyle & Mental Health",
            content: (
              <>
                <ul className="pl-[0] sm:pl-[20px]">
                  <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[#341802]  max-md:leading-[22px]">
                    <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
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
                          d="m10 17l5-5l-5-5"></path>
                      </svg>
                    </div>
                    Role of lifestyle, diet and behavior in mental health
                  </li>
                  <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[#341802]  max-md:leading-[22px]">
                    <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
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
                          d="m10 17l5-5l-5-5"></path>
                      </svg>
                    </div>
                    Yoga and mental well-being
                  </li>
                  <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[#341802]  max-md:leading-[22px]">
                    <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
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
                          d="m10 17l5-5l-5-5"></path>
                      </svg>
                    </div>
                    Importance of food habits and gut-brain connection
                  </li>
                  <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[#341802]  max-md:leading-[22px]">
                    <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
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
                          d="m10 17l5-5l-5-5"></path>
                      </svg>
                    </div>
                    Sadvrtta (ethical conduct and mental discipline)
                  </li>
                </ul>
              </>
            ),
          },
          {
            title:
              "Ayurveda & Mental Health - Part 1: Principles of Management",
            content: (
              <>
                <ul className="pl-[0] sm:pl-[20px]">
                  <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[#341802]  max-md:leading-[22px]">
                    <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
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
                          d="m10 17l5-5l-5-5"></path>
                      </svg>
                    </div>
                    Introduction to Ayurvedic psychiatric care
                  </li>
                  <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[#341802]  max-md:leading-[22px]">
                    <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
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
                          d="m10 17l5-5l-5-5"></path>
                      </svg>
                    </div>
                    Daivavyapashraya Chikitsa (Spiritual therapy)
                  </li>
                  <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[#341802]  max-md:leading-[22px]">
                    <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
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
                          d="m10 17l5-5l-5-5"></path>
                      </svg>
                    </div>
                    Satvavajaya Chikitsa (Mind therapy)
                  </li>
                  <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[#341802]  max-md:leading-[22px]">
                    <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
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
                          d="m10 17l5-5l-5-5"></path>
                      </svg>
                    </div>
                    Yuktivyapashraya Chikitsa (Rational therapy)
                  </li>
                </ul>
              </>
            ),
          },
          {
            title: " Ayurveda & Mental Health - Part 2: Internal Therapies",
            content: (
              <>
                <ul className="pl-[0] sm:pl-[20px]">
                  <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[#341802]  max-md:leading-[22px]">
                    <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
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
                          d="m10 17l5-5l-5-5"></path>
                      </svg>
                    </div>
                    Role of internal medications in psychiatric care
                  </li>
                  <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[#341802]  max-md:leading-[22px]">
                    <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
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
                          d="m10 17l5-5l-5-5"></path>
                      </svg>
                    </div>
                    Sneha Pana (internal oleation) and mental balance
                  </li>
                  <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[#341802]  max-md:leading-[22px]">
                    <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
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
                          d="m10 17l5-5l-5-5"></path>
                      </svg>
                    </div>
                    Overview of Ayurvedic formulations
                  </li>
                  <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[#341802]  max-md:leading-[22px]">
                    <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
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
                          d="m10 17l5-5l-5-5"></path>
                      </svg>
                    </div>
                    Use of Rasayana and Vajikarana for mind rejuvenation
                  </li>
                </ul>
              </>
            ),
          },
          {
            title: "Ayurveda & Mental Health - Part 3: External Therapies",
            content: (
              <>
                <ul className="pl-[0] sm:pl-[20px]">
                  <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[#341802]  max-md:leading-[22px]">
                    <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
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
                          d="m10 17l5-5l-5-5"></path>
                      </svg>
                    </div>
                    <span>
                      Panchakarma therapies with psychiatric applications:
                      <ul className="pl-[15px]">
                        <li>
                          Shirodhara, Shirovasti, Takradhara, Thalapothichil
                        </li>
                      </ul>
                    </span>
                  </li>
                  <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[#341802]  max-md:leading-[22px]">
                    <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
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
                          d="m10 17l5-5l-5-5"></path>
                      </svg>
                    </div>
                    Herbal oil applications and fomentations for calming the
                    mind
                  </li>
                </ul>
              </>
            ),
          },
          {
            title: " Yoga & Mental Health",
            content: (
              <>
                <ul className="pl-[0] sm:pl-[20px]">
                  <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[#341802]  max-md:leading-[22px]">
                    <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
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
                          d="m10 17l5-5l-5-5"></path>
                      </svg>
                    </div>
                    Ashtanga Yoga and its psychological relevance
                  </li>
                  <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[#341802]  max-md:leading-[22px]">
                    <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
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
                          d="m10 17l5-5l-5-5"></path>
                      </svg>
                    </div>
                    Role of Shatkarma (cleansing practices)
                  </li>
                  <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[#341802]  max-md:leading-[22px]">
                    <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
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
                          d="m10 17l5-5l-5-5"></path>
                      </svg>
                    </div>
                    Sudarshan Kriya and stress relief
                  </li>
                  <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[#341802]  max-md:leading-[22px]">
                    <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
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
                          d="m10 17l5-5l-5-5"></path>
                      </svg>
                    </div>
                    Chakra meditation for emotional regulation
                  </li>
                  <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[#341802]  max-md:leading-[22px]">
                    <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
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
                          d="m10 17l5-5l-5-5"></path>
                      </svg>
                    </div>
                    Yoga postures specifically beneficial for mental health
                  </li>
                </ul>
              </>
            ),
          },
        ],
      },
      {
        id: 5,
        type: "tab",
        heading: "Course Outcomes",
        content: "",
        tabs: [
          {
            title: "Knowledge",
            content: (
              <>
                <p className="text-xl font-light mb-2 text-black">
                  Knowledge:
                </p>
                <ul className="pl-[0] sm:pl-[20px]">
                  <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[#341802]  max-md:leading-[22px]">
                    <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
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
                          d="m10 17l5-5l-5-5"></path>
                      </svg>
                    </div>
                    Comprehensive understanding of mental health in Ayurveda
                    and Indian philosophy
                  </li>
                  <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[#341802]  max-md:leading-[22px]">
                    <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
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
                          d="m10 17l5-5l-5-5"></path>
                      </svg>
                    </div>
                    Awareness of psychological processes and how they relate
                    to Ayurvedic concepts
                  </li>
                  <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[#341802]  max-md:leading-[22px]">
                    <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
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
                          d="m10 17l5-5l-5-5"></path>
                      </svg>
                    </div>
                    Integrated view of mental disorders from both modern
                    psychiatry and Ayurveda
                  </li>
                </ul>
              </>
            ),
          },
          {
            title: "Skills",
            content: (
              <>
                <p className="text-xl font-light mb-2 text-black">Skills:</p>
                <ul className="pl-[0] sm:pl-[20px]">
                  <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[#341802]  max-md:leading-[22px]">
                    <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
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
                          d="m10 17l5-5l-5-5"></path>
                      </svg>
                    </div>
                    Identify mental health symptoms from both modern and
                    Ayurvedic perspectives
                  </li>
                  <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[#341802]  max-md:leading-[22px]">
                    <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
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
                          d="m10 17l5-5l-5-5"></path>
                      </svg>
                    </div>
                    Understand psychiatric examination protocols
                  </li>
                  <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[#341802]  max-md:leading-[22px]">
                    <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
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
                          d="m10 17l5-5l-5-5"></path>
                      </svg>
                    </div>
                    Apply Ayurvedic lifestyle, herbal and therapeutic
                    interventions for mental wellness
                  </li>
                  <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[#341802]  max-md:leading-[22px]">
                    <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
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
                          d="m10 17l5-5l-5-5"></path>
                      </svg>
                    </div>
                    Recommend Yoga and meditation techniques tailored for
                    mental well-being
                  </li>
                </ul>
              </>
            ),
          },
          {
            title: "Attitude",
            content: (
              <>
                <p className="text-xl font-light mb-2 text-black">
                  Attitude:
                </p>
                <ul className="pl-[0] sm:pl-[20px]">
                  <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[#341802]  max-md:leading-[22px]">
                    <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
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
                          d="m10 17l5-5l-5-5"></path>
                      </svg>
                    </div>
                    Cultivate a compassionate, ethical approach to mental
                    health care
                  </li>
                  <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[#341802]  max-md:leading-[22px]">
                    <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
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
                          d="m10 17l5-5l-5-5"></path>
                      </svg>
                    </div>
                    Encourage holistic, non-stigmatizing support for patients
                  </li>
                  <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[#341802]  max-md:leading-[22px]">
                    <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
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
                          d="m10 17l5-5l-5-5"></path>
                      </svg>
                    </div>
                    Promote prevention and wellness through integrative
                    methods
                  </li>
                </ul>
              </>
            ),
          },
        ],
      },
      {
        id: 6,
        type: "content",
        heading: "Course Fees",
        content: (
          <>
            <div className="p-[30px]  bg-[#e8f5d9] rounded-[35px]  w-fit">
              <ul className="pl-[0]">
                <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[#341802]  max-md:leading-[22px]">
                  <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
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
                        d="m10 17l5-5l-5-5"></path>
                    </svg>
                  </div>
                  Early Bird : USD 100 - For registrations completed 15 days
                  prior to start of course
                </li>
                <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[#341802]  max-md:leading-[22px]">
                  <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
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
                        d="m10 17l5-5l-5-5"></path>
                    </svg>
                  </div>
                  Regular Fee : USD 110 - For registrations after the above
                  date.
                </li>
              </ul>
            </div>
          </>
        ),
      },
    ],
  },
  course2: {
    tabhead: "Diabetes",
    courseHead:
      "Understanding Diabetes the Ayurvedic Way: A 2-Week Introductory Course on Prameha",
    section: [
      {
        id: 0,
        type: "content",
        heading: "Introduction",
        content: (
          <>
            <div className="    xl:max-w-[95%]  flex  max-xl:flex-col xl:grid  max-xl:grid-cols-[100%]   max-2xl:grid-cols-[35%_60%]  grid-cols-[33%_60%]  justify-between items-start gap-[150px] max-2xl:gap-[100px] max-xl:gap-[0px]  max-xl:justify-between">
              <div className=" mt-[20px] relative w-[100%] h-[auto]   relative  z-[1] after:absolute  after:content-[] after:w-[100%] after:h-[100%]   after:top-[-15px] after:left-[0px] after:border-[1px_1px_0px_1px]  after:rounded-[90px_90px_0px_0px]  max-xl:after:rounded-[50px_50px_0px_0px] max-md:after:rounded-[70px_70px_0px_0px] after:border-[#ed9b5d] after:z-[-4]  xl:sticky xl:top-[100px] max-2xl:w-[70%]  max-[767px]:max-w-[400px] max-lg:mx-[auto] max-[767px]:mt-[60px] max-sm:mt-[40px] ">
                <div className="rounded-[90px_90px_0px_0px] max-xl:rounded-[50px_50px_0px_0px] overflow-hidden  h-full">
                  <Image
                    width={450}
                    height={600}
                    className=" w-[100%] h-[auto]"
                    alt="Diabetes Course"
                    src={`${ASSET_PREFIX}/assets/images/diabetes-course.webp`}
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
                <p className="text-[16px] leading-[24xpx]  text-[#341802]  mt-[40px] mb-[20px]  w-[80%]  max-md:w-[90%] max-sm:w-[100%]">
                  {" "}
                  This 9-hour online course offers a practical and
                  beginner-friendly introduction to Diabetes (Prameha) from an
                  Ayurvedic perspective, specifically designed for the general
                  public.
                </p>
                <p className="text-[16px] leading-[24xpx]  text-[#341802]  mt-[40px] mb-[20px]  w-[80%]  max-md:w-[90%] max-sm:w-[100%]">
                  Through live sessions and engaging content, participants
                  will explore:
                </p>{" "}
                <ul className="pl-[0] sm:pl-[20px]">
                  <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[#341802]  max-md:leading-[22px]">
                    <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
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
                          d="m10 17l5-5l-5-5"></path>
                      </svg>
                    </div>
                    How Ayurveda explains diabetes and blood sugar imbalance
                    (Prameha &amp; Madhumeha)
                  </li>
                  <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[#341802]  max-md:leading-[22px]">
                    <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
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
                          d="m10 17l5-5l-5-5"></path>
                      </svg>
                    </div>
                    The influence of diet, lifestyle and daily routine on
                    metabolic health
                  </li>
                  <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[#341802]  max-md:leading-[22px]">
                    <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
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
                          d="m10 17l5-5l-5-5"></path>
                      </svg>
                    </div>
                    Effective home remedies, herbs and external therapies for
                    managing blood sugar
                  </li>
                  <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[#341802]  max-md:leading-[22px]">
                    <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
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
                          d="m10 17l5-5l-5-5"></path>
                      </svg>
                    </div>
                    Simple yoga and breathing techniques to support emotional
                    well-being and insulin sensitivity
                  </li>
                </ul>
                <p className="text-[16px] leading-[24xpx]  text-[#341802]  mt-[40px] mb-[20px]  w-[80%]  max-md:w-[90%] max-sm:w-[100%]">
                  Whether you&#39;re managing diabetes, at risk of developing
                  it or simply interested in natural self-care, this course
                  empowers you with time-tested Ayurvedic strategies for
                  long-term wellness.
                </p>
              </div>
            </div>
          </>
        ),
      },
      {
        id: 1,
        type: "content",
        heading: "Overview",
        content: (
          <>
            <div className="grid   xl:grid-cols-2  gap-[20px]">
              <div className="bg-[#e3ecd9]  rounded-[30px]  p-[30px]  max-md:p-[25px_15px]  w-ful">
                <p className="text-xl font-light mb-2 text-black">
                  Course Hours &amp; Schedule:
                </p>
                <ul className="pl-[0] sm:pl-[20px]">
                  <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[#341802]  max-md:leading-[22px]">
                    <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
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
                          d="m10 17l5-5l-5-5"></path>
                      </svg>
                    </div>
                    Total Duration: 9 Hours
                  </li>
                  <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[#341802]  max-md:leading-[22px]">
                    <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
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
                          d="m10 17l5-5l-5-5"></path>
                      </svg>
                    </div>
                    Number of Sessions: 6 sessions (1.5 hour each)
                  </li>
                  <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[#341802]  max-md:leading-[22px]">
                    <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
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
                          d="m10 17l5-5l-5-5"></path>
                      </svg>
                    </div>
                    <span>
                      Schedule:{" "}
                      <ul className="pl-[15px]">
                        <li>Days: Monday, Wednesday, &amp; Saturday</li>
                      </ul>
                    </span>
                  </li>
                </ul>
                <p className="text-xl font-light mb-2 text-black">
                  Mode of Delivery:
                </p>
                <ul className="pl-[0] sm:pl-[20px]">
                  <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[#341802]  max-md:leading-[22px]">
                    <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
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
                          d="m10 17l5-5l-5-5"></path>
                      </svg>
                    </div>
                    Format: Live Online via Zoom or equivalent
                  </li>
                  <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[#341802]  max-md:leading-[22px]">
                    <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
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
                          d="m10 17l5-5l-5-5"></path>
                      </svg>
                    </div>
                    <span>
                      Includes:
                      <ul className="pl-[15px]">
                        <li>Interactive lectures</li>
                        <li>Live Q&amp;A and discussion</li>
                        <li>Printable handouts and take-home resources</li>
                        <li>Session recordings available for 30 days</li>
                      </ul>
                    </span>
                  </li>
                </ul>
              </div>
              <div className="bg-[#ffdcc0]  rounded-[30px]  p-[30px]  max-md:p-[25px_15px]  w-fit">
                <p className="text-xl font-light mb-2 text-black">
                  Eligibility to Join the Course:
                </p>
                <p className="text-[16px] leading-[24xpx]  text-[#341802]  mt-[40px] mb-[20px]  w-[80%]  max-md:w-[90%] max-sm:w-[100%]">
                  This course is open to anyone interested in natural health
                  and well-being, including:
                </p>
                <ul className="pl-[0] sm:pl-[20px]">
                  <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[#341802]  max-md:leading-[22px]">
                    <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
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
                          d="m10 17l5-5l-5-5"></path>
                      </svg>
                    </div>
                    Individuals with diabetes or pre-diabetes
                  </li>
                  <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[#341802]  max-md:leading-[22px]">
                    <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
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
                          d="m10 17l5-5l-5-5"></path>
                      </svg>
                    </div>
                    Caregivers and family members
                  </li>
                  <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[#341802]  max-md:leading-[22px]">
                    <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
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
                          d="m10 17l5-5l-5-5"></path>
                      </svg>
                    </div>
                    People interested in Ayurveda, preventive health and
                    nutrition
                  </li>
                  <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[#341802]  max-md:leading-[22px]">
                    <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
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
                          d="m10 17l5-5l-5-5"></path>
                      </svg>
                    </div>
                    No prior medical or Ayurvedic background required
                  </li>
                </ul>
              </div>
            </div>
          </>
        ),
      },
      {
        id: 2,
        type: "accordian",
        heading: "Course Syllabus",
        content: "",
        tabs: [
          {
            title: "What is Diabetes in Ayurveda?",
            content: (
              <>
                <ul className="pl-[0] sm:pl-[20px]">
                  <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[#341802]  max-md:leading-[22px]">
                    <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
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
                          d="m10 17l5-5l-5-5"></path>
                      </svg>
                    </div>
                    Ayurvedic view of Prameha &amp; Madhumeha
                  </li>
                  <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[#341802]  max-md:leading-[22px]">
                    <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
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
                          d="m10 17l5-5l-5-5"></path>
                      </svg>
                    </div>
                    Role of Kapha, Meda (fat) and Agni (digestive fire)
                  </li>
                  <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[#341802]  max-md:leading-[22px]">
                    <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
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
                          d="m10 17l5-5l-5-5"></path>
                      </svg>
                    </div>
                    Common causes and risk factors
                  </li>
                </ul>
              </>
            ),
          },
          {
            title: "Symptoms, Early Warning Signs &amp; Prevention",
            content: (
              <>
                <ul className="pl-[0] sm:pl-[20px]">
                  <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[#341802]  max-md:leading-[22px]">
                    <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
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
                          d="m10 17l5-5l-5-5"></path>
                      </svg>
                    </div>
                    Recognizing early indicators of diabetes in Ayurveda
                  </li>
                  <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[#341802]  max-md:leading-[22px]">
                    <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
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
                          d="m10 17l5-5l-5-5"></path>
                      </svg>
                    </div>
                    Subtle symptoms often overlooked
                  </li>
                  <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[#341802]  max-md:leading-[22px]">
                    <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
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
                          d="m10 17l5-5l-5-5"></path>
                      </svg>
                    </div>
                    Lifestyle habits that help prevent onset
                  </li>
                </ul>
              </>
            ),
          },
          {
            title: "Diet in Diabetes - Ayurvedic Guidelines",
            content: (
              <>
                <ul className="pl-[0] sm:pl-[20px]">
                  <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[#341802]  max-md:leading-[22px]">
                    <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
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
                          d="m10 17l5-5l-5-5"></path>
                      </svg>
                    </div>
                    What, when and how to eat from an Ayurvedic view
                  </li>
                  <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[#341802]  max-md:leading-[22px]">
                    <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
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
                          d="m10 17l5-5l-5-5"></path>
                      </svg>
                    </div>
                    Best grains, vegetables, spices and foods to avoid
                  </li>
                  <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[#341802]  max-md:leading-[22px]">
                    <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
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
                          d="m10 17l5-5l-5-5"></path>
                      </svg>
                    </div>
                    Sample Ayurvedic meal plans and herbal kitchen tips
                  </li>
                </ul>
              </>
            ),
          },
          {
            title: "Lifestyle &amp; Daily Routine (Dinacharya)",
            content: (
              <>
                <ul className="pl-[0] sm:pl-[20px]">
                  <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[#341802]  max-md:leading-[22px]">
                    <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
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
                          d="m10 17l5-5l-5-5"></path>
                      </svg>
                    </div>
                    Creating a daily rhythm that supports sugar balance
                  </li>
                  <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[#341802]  max-md:leading-[22px]">
                    <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
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
                          d="m10 17l5-5l-5-5"></path>
                      </svg>
                    </div>
                    Sleep, meal timings, activity and self-care habits
                  </li>
                  <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[#341802]  max-md:leading-[22px]">
                    <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
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
                          d="m10 17l5-5l-5-5"></path>
                      </svg>
                    </div>
                    Role of movement and sunlight in metabolism
                  </li>
                </ul>
              </>
            ),
          },
          {
            title: "Home Remedies, Herbs &amp; External Therapies",
            content: (
              <>
                <ul className="pl-[0] sm:pl-[20px]">
                  <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[#341802]  max-md:leading-[22px]">
                    <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
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
                          d="m10 17l5-5l-5-5"></path>
                      </svg>
                    </div>
                    Common Ayurvedic herbs for blood sugar support: Triphala,
                    Methi, Neem, Amalaki, Gudmar, Turmeric
                  </li>
                  <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[#341802]  max-md:leading-[22px]">
                    <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
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
                          d="m10 17l5-5l-5-5"></path>
                      </svg>
                    </div>
                    Safe home remedies and kitchen recipes
                  </li>
                  <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[#341802]  max-md:leading-[22px]">
                    <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
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
                          d="m10 17l5-5l-5-5"></path>
                      </svg>
                    </div>
                    External therapies: foot massage, oil application, etc.
                  </li>
                </ul>
              </>
            ),
          },
          {
            title: "Mind-Body Connection &amp; Stress Management",
            content: (
              <>
                <ul className="pl-[0] sm:pl-[20px]">
                  <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[#341802]  max-md:leading-[22px]">
                    <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
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
                          d="m10 17l5-5l-5-5"></path>
                      </svg>
                    </div>
                    Role of stress and emotions in diabetes
                  </li>
                  <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[#341802]  max-md:leading-[22px]">
                    <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
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
                          d="m10 17l5-5l-5-5"></path>
                      </svg>
                    </div>
                    Basic Pranayama (breathwork) and calming techniques
                  </li>
                  <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[#341802]  max-md:leading-[22px]">
                    <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
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
                          d="m10 17l5-5l-5-5"></path>
                      </svg>
                    </div>
                    Gentle yoga postures for metabolic balance
                  </li>
                  <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[#341802]  max-md:leading-[22px]">
                    <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
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
                          d="m10 17l5-5l-5-5"></path>
                      </svg>
                    </div>
                    Relaxation methods for daily use
                  </li>
                </ul>
              </>
            ),
          },
        ],
      },
      {
        id: 3,
        type: "tab",
        heading: "Course Outcomes",
        content: "",
        tabs: [
          {
            title: "Knowledge",
            content: (
              <>
                <ul className="pl-[0] sm:pl-[20px]">
                  <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[#341802]  max-md:leading-[22px]">
                    <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
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
                          d="m10 17l5-5l-5-5"></path>
                      </svg>
                    </div>
                    Understand Ayurvedic concepts of diabetes (Prameha)
                  </li>
                  <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[#341802]  max-md:leading-[22px]">
                    <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
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
                          d="m10 17l5-5l-5-5"></path>
                      </svg>
                    </div>
                    Identify early warning signs and risk factors
                  </li>
                  <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[#341802]  max-md:leading-[22px]">
                    <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
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
                          d="m10 17l5-5l-5-5"></path>
                      </svg>
                    </div>
                    Learn dietary and lifestyle strategies for balance
                  </li>
                </ul>
              </>
            ),
          },
          {
            title: "Skills",
            content: (
              <>
                <ul className="pl-[0] sm:pl-[20px]">
                  <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[#341802]  max-md:leading-[22px]">
                    <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
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
                          d="m10 17l5-5l-5-5"></path>
                      </svg>
                    </div>
                    Create balanced meals using Ayurvedic principles
                  </li>
                  <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[#341802]  max-md:leading-[22px]">
                    <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
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
                          d="m10 17l5-5l-5-5"></path>
                      </svg>
                    </div>
                    Apply herbal and home remedies with confidence
                  </li>
                  <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[#341802]  max-md:leading-[22px]">
                    <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
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
                          d="m10 17l5-5l-5-5"></path>
                      </svg>
                    </div>
                    Practice basic yoga and breathing techniques
                  </li>
                </ul>
              </>
            ),
          },
          {
            title: "Attitude",
            content: (
              <>
                <ul className="pl-[0] sm:pl-[20px]">
                  <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[#341802]  max-md:leading-[22px]">
                    <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
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
                          d="m10 17l5-5l-5-5"></path>
                      </svg>
                    </div>
                    Cultivate a proactive, self-aware approach to health
                  </li>
                  <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[#341802]  max-md:leading-[22px]">
                    <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
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
                          d="m10 17l5-5l-5-5"></path>
                      </svg>
                    </div>
                    Gain confidence in using natural methods
                  </li>
                  <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[#341802]  max-md:leading-[22px]">
                    <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
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
                          d="m10 17l5-5l-5-5"></path>
                      </svg>
                    </div>
                    Integrate traditional wisdom into modern lifestyle choices
                  </li>
                </ul>
              </>
            ),
          },
        ],
      },
      {
        id: 4,
        type: "content",
        heading: "Course Fees",
        content: (
          <>
            <div className="p-[30px]  bg-[#e8f5d9] rounded-[35px]  w-fit">
              <ul className="pl-[0] sm:pl-[20px]">
                <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[#341802]  max-md:leading-[22px]">
                  <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
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
                        d="m10 17l5-5l-5-5"></path>
                    </svg>
                  </div>
                  Early Bird : USD 49 - For registrations completed 15 days
                  prior to start of course
                </li>
                <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[#341802]  max-md:leading-[22px]">
                  <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
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
                        d="m10 17l5-5l-5-5"></path>
                    </svg>
                  </div>
                  Regular Fee : USD 59 - For registrations after the above
                  date.
                </li>
                <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[#341802]  max-md:leading-[22px]">
                  <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
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
                        d="m10 17l5-5l-5-5"></path>
                    </svg>
                  </div>
                  Group Discounts: Available for families, senior citizens or
                  group registrations
                </li>
              </ul>
            </div>
          </>
        ),
      },
    ],
  },
  course3: {
    tabhead: "Panchakarma",
    courseHead:
      "Advanced Panchakarma Therapy (Kerala Traditional System): 80-Hour Hybrid Certification",
    section: [
      {
        id: 0,
        type: "content",
        heading: "Introduction",
        content: (
          <>
            <div className="    xl:max-w-[95%]  flex  max-xl:flex-col xl:grid  max-xl:grid-cols-[100%]   max-2xl:grid-cols-[35%_60%]  grid-cols-[33%_60%]  justify-between items-start gap-[150px] max-2xl:gap-[100px] max-xl:gap-[0px]  max-xl:justify-between">
              <div className=" mt-[20px] relative w-[100%] h-[auto]   relative  z-[1] after:absolute  after:content-[] after:w-[100%] after:h-[100%]   after:top-[-15px] after:left-[0px] after:border-[1px_1px_0px_1px]  after:rounded-[90px_90px_0px_0px]  max-xl:after:rounded-[50px_50px_0px_0px] max-md:after:rounded-[70px_70px_0px_0px] after:border-[#ed9b5d] after:z-[-4]  xl:sticky xl:top-[100px] max-2xl:w-[70%]  max-[767px]:max-w-[400px] max-lg:mx-[auto] max-[767px]:mt-[60px] max-sm:mt-[40px] ">
                <div className="rounded-[90px_90px_0px_0px] max-xl:rounded-[50px_50px_0px_0px] overflow-hidden  h-full">
                  <Image
                    width={450}
                    height={600}
                    className=" w-[100%] h-[auto]"
                    alt="Panchakarma Course"
                    src={`${ASSET_PREFIX}/assets/images/panchakarma-course.webp`}
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
                <p className="text-[16px] leading-[24xpx] text-[#341802]  mb-[20px] w-[80%] max-md:w-[90%] max-sm:w-[100%]">
                  The Advanced Panchakarma Therapy Course is a comprehensive{" "}
                  80-hour hybrid training designed for UK-based Ayurveda
                  practitioners and students seeking clinical mastery in
                  Kerala Traditional Panchakarma. Along with classical
                  Ayurvedic theory, the program emphasizes hands-on execution
                  of Kerala’s unique modalities and clinical protocols.
                </p>
                <p className="text-[16px] leading-[24xpx] text-[#341802] mt-[20px] mb-[20px] w-[80%] max-md:w-[90%] max-sm:w-[100%]">
                  Delivery blends 1 month of live online theorywith a 2-week
                  immersive internship at Samwarthika Ayurveda Hospital,
                  Muvattupuzha, Kochi, Kerala , offering real-time clinical
                  exposure under expert physicians and therapists.
                </p>
                <ul className="pl-[0] sm:pl-[20px]">
                  <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto] my-[20px] max-md:my-[15px] gap-[12px] text-[#341802] max-md:leading-[22px]">
                    <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%] overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
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
                          d="m10 17l5-5l-5-5"></path>
                      </svg>
                    </div>
                    Core Ayurvedic knowledge with Kerala clinical protocols
                  </li>
                  <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto] my-[20px] max-md:my-[15px] gap-[12px] text-[#341802] max-md:leading-[22px]">
                    <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%] overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
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
                          d="m10 17l5-5l-5-5"></path>
                      </svg>
                    </div>
                    Step-wise Panchakarma process: Poorvakarma, Pradhanakarma
                    &amp; Paschatkarma
                  </li>
                  <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto] my-[20px] max-md:my-[15px] gap-[12px] text-[#341802] max-md:leading-[22px]">
                    <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%] overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
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
                          d="m10 17l5-5l-5-5"></path>
                      </svg>
                    </div>
                    Kerala-specific therapies: Pizhichil, Navarakizhi,
                    Takradhara, Ksheeradhara &amp; more
                  </li>
                  <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto] my-[20px] max-md:my-[15px] gap-[12px] text-[#341802] max-md:leading-[22px]">
                    <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%] overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
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
                          d="m10 17l5-5l-5-5"></path>
                      </svg>
                    </div>
                    Patient care, oil/decoction prep, therapy customization
                    &amp; post-treatment regimens
                  </li>
                </ul>
              </div>
            </div>
          </>
        ),
      },
      {
        id: 1,
        type: "content",
        heading: "Overview",
        content: (
          <>
            <div className="grid   xl:grid-cols-2  gap-[20px]">
              <div className="bg-[#e3ecd9]  rounded-[30px]  p-[30px]  max-md:p-[25px_15px]  w-fit">
                <p className="text-xl font-light mb-2 text-black">
                  Course Duration &amp; Hours
                </p>
                <ul className="pl-[0] sm:pl-[20px]">
                  <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto] my-[12px] gap-[12px] text-[#341802]">
                    <div className="w-[22px] h-[22px] rounded-[50%] overflow-hidden p-[2px] bg-[#ffab6b] flex items-center justify-center mt-[3px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 24 24">
                        <path
                          fill="none"
                          stroke="#000"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m10 17l5-5l-5-5"
                        />
                      </svg>
                    </div>
                    Total Duration: 1.5 Months; Total Contact Hours: 80 Hours
                  </li>
                </ul>

                <p className="text-xl font-light mt-6 mb-2">Structure</p>
                <ul className="pl-[0] sm:pl-[20px]">
                  <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto] my-[12px] gap-[12px] text-[#341802]">
                    <div className="w-[22px] h-[22px] rounded-[50%] overflow-hidden p-[2px] bg-[#ffab6b] flex items-center justify-center mt-[3px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 24 24">
                        <path
                          fill="none"
                          stroke="#000"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m10 17l5-5l-5-5"
                        />
                      </svg>
                    </div>
                    <span>
                      Online Theory (20 hours): 1 Month; 4 Weekends; 2.5 hours
                      each on Sat &amp; Sun - live interactive lectures
                    </span>
                  </li>
                  <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto] my-[12px] gap-[12px] text-[#341802]">
                    <div className="w-[22px] h-[22px] rounded-[50%] overflow-hidden p-[2px] bg-[#ffab6b] flex items-center justify-center mt-[3px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 24 24">
                        <path
                          fill="none"
                          stroke="#000"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m10 17l5-5l-5-5"
                        />
                      </svg>
                    </div>
                    <span>
                      Offline Hands-On Training (60 hours): 2 Weeks; full-day
                      clinical internship at Samwarthika Ayurveda Hospital,
                      Muvattupuzha, Kochi, Kerala, India
                    </span>
                  </li>
                </ul>
              </div>
              <div className="bg-[#ffdcc0]  rounded-[30px]  p-[30px]  max-md:p-[25px_15px]  w-fit">
                <p className="text-xl font-light mb-2 text-black">
                  Mode of Delivery
                </p>
                <ul className="pl-[0] sm:pl-[20px]">
                  <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto] my-[12px] gap-[12px] text-[#341802]">
                    <div className="w-[22px] h-[22px] rounded-[50%] overflow-hidden p-[2px] bg-[#ffab6b] flex items-center justify-center mt-[3px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 24 24">
                        <path
                          fill="none"
                          stroke="#000"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m10 17l5-5l-5-5"
                        />
                      </svg>
                    </div>
                    Online: Live lectures, discussions &amp; Q&amp;A with
                    experienced faculty
                  </li>
                  <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto] my-[12px] gap-[12px] text-[#341802]">
                    <div className="w-[22px] h-[22px] rounded-[50%] overflow-hidden p-[2px] bg-[#ffab6b] flex items-center justify-center mt-[3px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 24 24">
                        <path
                          fill="none"
                          stroke="#000"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m10 17l5-5l-5-5"
                        />
                      </svg>
                    </div>
                    Offline: Direct clinical exposure with demonstrations
                    &amp; supervised execution
                  </li>
                </ul>

                <p className="text-xl font-light mt-6 mb-2">Eligibility</p>
                <ul className="pl-[0] sm:pl-[20px]">
                  <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto] my-[12px] gap-[12px] text-[#341802]">
                    <div className="w-[22px] h-[22px] rounded-[50%] overflow-hidden p-[2px] bg-[#ffab6b] flex items-center justify-center mt-[3px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 24 24">
                        <path
                          fill="none"
                          stroke="#000"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m10 17l5-5l-5-5"
                        />
                      </svg>
                    </div>
                    Target: UK-based Ayurveda practitioners &amp; Ayurveda
                    students seeking clinical refinement
                  </li>
                  <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto] my-[12px] gap-[12px] text-[#341802]">
                    <div className="w-[22px] h-[22px] rounded-[50%] overflow-hidden p-[2px] bg-[#ffab6b] flex items-center justify-center mt-[3px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 24 24">
                        <path
                          fill="none"
                          stroke="#000"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m10 17l5-5l-5-5"
                        />
                      </svg>
                    </div>
                    Pre-requisites: Foundational understanding of Ayurveda
                    &amp; strong interest in therapeutic Panchakarma
                  </li>
                </ul>
              </div>
            </div>
          </>
        ),
      },
      {
        id: 2,
        type: "accordian",
        heading: "Course Syllabus",
        content: "",
        tabs: [
          {
            title: "1) Foundations of Ayurveda",
            content: (
              <>
                <ul className="pl-[0] sm:pl-[20px]">
                  {[
                    "Philosophy of Ayurveda (Padartha Vigyan)",
                    "Basic Anatomy (Rachana Sharira) & Physiology (Kriya Sharira)",
                    "Concepts of health, disease & healing in Ayurveda",
                    "Ayurvedic diet & medicine principles",
                  ].map((t, i) => (
                    <li
                      key={i}
                      className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto] my-[14px] gap-[12px] text-[#341802] max-md:leading-[22px]">
                      <div className="w-[22px] h-[22px] rounded-[50%] overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="30"
                          viewBox="0 0 24 24">
                          <path
                            fill="none"
                            stroke="#000"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m10 17l5-5l-5-5"
                          />
                        </svg>
                      </div>
                      {t}
                    </li>
                  ))}
                </ul>
              </>
            ),
          },
          {
            title: "2) Introduction to Panchakarma",
            content: (
              <>
                <ul className="pl-[0] sm:pl-[20px]">
                  {[
                    "Importance of Panchakarma in preventive & curative care",
                    "Overview: Poorvakarma, Pradhanakarma, Paschatkarma",
                    "Snehana (Oleation): Kerala methods, indications, contraindications, complications & management",
                  ].map((t, i) => (
                    <li
                      key={i}
                      className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto] my-[14px] gap-[12px] text-[#341802]">
                      <div className="w-[22px] h-[22px] rounded-[50%] overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="30"
                          viewBox="0 0 24 24">
                          <path
                            fill="none"
                            stroke="#000"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m10 17l5-5l-5-5"
                          />
                        </svg>
                      </div>
                      {t}
                    </li>
                  ))}
                </ul>
              </>
            ),
          },
          {
            title: "3) Swedana Karma (Sudation) - Kerala Practices",
            content: (
              <>
                <ul className="pl-[0] sm:pl-[20px]">
                  {[
                    "Patra Potali Sweda (leaf bolus)",
                    "Choorna Pinda Sweda (powder bolus)",
                    "Navarakizhi / Shashtikashali Pinda Sweda (medicated rice bolus)",
                    "Anda Sweda (egg bolus)",
                    "Avagaha Sweda (immersive fomentation)",
                    "Preparation of boluses & decoctions; regional steam methods",
                    "Patient-specific Swedana selection & complication management",
                  ].map((t, i) => (
                    <li
                      key={i}
                      className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto] my-[14px] gap-[12px] text-[#341802]">
                      <div className="w-[22px] h-[22px] rounded-[50%] overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="30"
                          viewBox="0 0 24 24">
                          <path
                            fill="none"
                            stroke="#000"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m10 17l5-5l-5-5"
                          />
                        </svg>
                      </div>
                      {t}
                    </li>
                  ))}
                </ul>
              </>
            ),
          },
          {
            title: "4) Major Panchakarma Therapies (Pradhanakarma)",
            content: (
              <>
                <p className="text-[16px] leading-[24xpx] text-[#341802] mt-[10px] mb-[10px]">
                  Kerala-style execution protocols with planning, prep,
                  formulation &amp; post-care:
                </p>
                <ul className="pl-[0] sm:pl-[20px]">
                  {[
                    "Vamana (Therapeutic emesis)",
                    "Virechana (Purgation)",
                    "Anuvasana Vasti (Oil enema)",
                    "Asthapana Vasti (Decoction enema)",
                    "Procedure planning, patient preparation, traditional oil/decoction techniques, post-care & monitoring",
                  ].map((t, i) => (
                    <li
                      key={i}
                      className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto] my-[14px] gap-[12px] text-[#341802]">
                      <div className="w-[22px] h-[22px] rounded-[50%] overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="30"
                          viewBox="0 0 24 24">
                          <path
                            fill="none"
                            stroke="#000"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m10 17l5-5l-5-5"
                          />
                        </svg>
                      </div>
                      {t}
                    </li>
                  ))}
                </ul>
              </>
            ),
          },
          {
            title: "5) Specialized Kerala Therapies",
            content: (
              <>
                <ul className="pl-[0] sm:pl-[20px]">
                  {[
                    "Pizhichil (medicated oil bathing)",
                    "Takra Dhara (buttermilk stream therapy)",
                    "Ksheera Dhara (milk pouring therapy)",
                    "Dhanyamla Dhara (fermented decoction stream therapy)",
                    "Sirovasti (oil retention on head)",
                    "Shiroabhyanga, Shirodhara, Shirolepam",
                    "Raktamokshana (bloodletting) - indications & precautions",
                    "Sirovirechana (Nasyam)",
                    "Thalapothichil (herbal head packs)",
                  ].map((t, i) => (
                    <li
                      key={i}
                      className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto] my-[14px] gap-[12px] text-[#341802]">
                      <div className="w-[22px] h-[22px] rounded-[50%] overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="30"
                          viewBox="0 0 24 24">
                          <path
                            fill="none"
                            stroke="#000"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m10 17l5-5l-5-5"
                          />
                        </svg>
                      </div>
                      {t}
                    </li>
                  ))}
                </ul>
              </>
            ),
          },
          {
            title: "6) Post-Panchakarma Care (Paschatkarma)",
            content: (
              <>
                <ul className="pl-[0] sm:pl-[20px]">
                  {[
                    "Samsarjana Krama (dietary protocol after therapies)",
                    "Rejuvenation therapies (Rasayana)",
                    "Vajikarana (vitality enhancement) - basics",
                  ].map((t, i) => (
                    <li
                      key={i}
                      className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto] my-[14px] gap-[12px] text-[#341802]">
                      <div className="w-[22px] h-[22px] rounded-[50%] overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="30"
                          viewBox="0 0 24 24">
                          <path
                            fill="none"
                            stroke="#000"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m10 17l5-5l-5-5"
                          />
                        </svg>
                      </div>
                      {t}
                    </li>
                  ))}
                </ul>
              </>
            ),
          },
          {
            title: "7) Supportive Training Modules",
            content: (
              <>
                <ul className="pl-[0] sm:pl-[20px]">
                  {[
                    "Ayurvedic Pharmacy (Bhaishajya Kalpana): Swarasa, Kwatha, Churna, Avaleha, Arka, etc.",
                    "Patient hygiene & therapy room setup",
                    "Medical ethics & legal aspects in Ayurveda practice",
                    "Self-care practices for therapists & clinicians",
                    "Women’s & child health (Garbhasamskara, Balachikitsa)",
                  ].map((t, i) => (
                    <li
                      key={i}
                      className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto] my-[14px] gap-[12px] text-[#341802]">
                      <div className="w-[22px] h-[22px] rounded-[50%] overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="30"
                          viewBox="0 0 24 24">
                          <path
                            fill="none"
                            stroke="#000"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m10 17l5-5l-5-5"
                          />
                        </svg>
                      </div>
                      {t}
                    </li>
                  ))}
                </ul>
              </>
            ),
          },
        ],
      },
      {
        id: 3,
        type: "tab",
        heading: "Course Outcomes",
        content: "",
        tabs: [
          {
            title: "Knowledge",
            content: (
              <>
                <ul className="pl-[0] sm:pl-[20px]">
                  {[
                    "Mastery of classical & Kerala-specific Panchakarma theory",
                    "Differentiate procedures based on doshic conditions",
                    "Recognize complications & prevention strategies",
                  ].map((t, i) => (
                    <li
                      key={i}
                      className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto] my-[14px] gap-[12px] text-[#341802]">
                      <div className="w-[22px] h-[22px] rounded-[50%] overflow-hidden p-[2px] bg-[#ffab6b] flex items-center justify-center mt-[3px]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="30"
                          viewBox="0 0 24 24">
                          <path
                            fill="none"
                            stroke="#000"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m10 17l5-5l-5-5"
                          />
                        </svg>
                      </div>
                      {t}
                    </li>
                  ))}
                </ul>
              </>
            ),
          },
          {
            title: "Skills",
            content: (
              <>
                <ul className="pl-[0] sm:pl-[20px]">
                  {[
                    "Prepare Kerala-style formulations & therapy kits",
                    "Administer major & special Panchakarma therapies safely",
                    "Manage patient care during & after therapies",
                  ].map((t, i) => (
                    <li
                      key={i}
                      className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto] my-[14px] gap-[12px] text-[#341802]">
                      <div className="w-[22px] h-[22px] rounded-[50%] overflow-hidden p-[2px] bg-[#ffab6b] flex items-center justify-center mt-[3px]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="30"
                          viewBox="0 0 24 24">
                          <path
                            fill="none"
                            stroke="#000"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m10 17l5-5l-5-5"
                          />
                        </svg>
                      </div>
                      {t}
                    </li>
                  ))}
                </ul>
              </>
            ),
          },
          {
            title: "Attitude",
            content: (
              <>
                <ul className="pl-[0] sm:pl-[20px]">
                  {[
                    "Cultivate professionalism & sensitivity in therapeutic care",
                    "Ethical practice under qualified supervision",
                    "Confidence to offer authentic Kerala Panchakarma in clinical/wellness settings",
                  ].map((t, i) => (
                    <li
                      key={i}
                      className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto] my-[14px] gap-[12px] text-[#341802]">
                      <div className="w-[22px] h-[22px] rounded-[50%] overflow-hidden p-[2px] bg-[#ffab6b] flex items-center justify-center mt-[3px]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="30"
                          viewBox="0 0 24 24">
                          <path
                            fill="none"
                            stroke="#000"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m10 17l5-5l-5-5"
                          />
                        </svg>
                      </div>
                      {t}
                    </li>
                  ))}
                </ul>
              </>
            ),
          },
        ],
      },
      {
        id: 4,
        type: "content",
        heading: "Instructional Strategies",
        content: (
          <>
            <ul className="pl-[0] sm:pl-[20px]">
              {[
                "Interactive online theory classes",
                "Video demonstrations & group discussions",
                "Onsite practical exposure under expert guidance",
                "Case-based learning & live patient handling",
              ].map((t, i) => (
                <li
                  key={i}
                  className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto] my-[14px] gap-[12px] text-[#341802]">
                  <div className="w-[22px] h-[22px] rounded-[50%] overflow-hidden p-[2px] bg-[#ffab6b] flex items-center justify-center mt-[3px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 24 24">
                      <path
                        fill="none"
                        stroke="#000"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m10 17l5-5l-5-5"
                      />
                    </svg>
                  </div>
                  {t}
                </li>
              ))}
            </ul>
          </>
        ),
      },
      {
        id: 5,
        type: "content",
        heading: "Assessment & Certification",
        content: (
          <>
            <ul className="pl-[0] sm:pl-[20px]">
              <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto] my-[14px] gap-[12px] text-[#341802]">
                <div className="w-[22px] h-[22px] rounded-[50%] overflow-hidden p-[2px] bg-[#ffab6b] flex items-center justify-center mt-[3px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24">
                    <path
                      fill="none"
                      stroke="#000"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m10 17l5-5l-5-5"
                    />
                  </svg>
                </div>
                <span>
                  Total Assessment: 100% -{" "}
                  <ul className="pl-[15px]">
                    <li>Continuous Internal (Theory &amp; Practical): 50%</li>
                    <li>Final Exam (Written &amp; Practical Viva): 50%</li>
                  </ul>
                </span>
              </li>
              <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto] my-[14px] gap-[12px] text-[#341802]">
                <div className="w-[22px] h-[22px] rounded-[50%] overflow-hidden p-[2px] bg-[#ffab6b] flex items-center justify-center mt-[3px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24">
                    <path
                      fill="none"
                      stroke="#000"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m10 17l5-5l-5-5"
                    />
                  </svg>
                </div>
                <span>
                  {" "}
                  Certification:
                  <ul className="pl-[15px]">
                    <li>
                      Participants who complete the course and pass the
                      assessments will receive a certificate of completion,
                      officially recognizing their training in Kerala
                      Traditional Panchakarma.
                    </li>
                  </ul>
                </span>
              </li>
            </ul>
          </>
        ),
      },
      {
        id: 6,
        type: "content",
        heading: "Course Fees",
        content: (
          <>
            <div className="p-[30px]  bg-[#e8f5d9] rounded-[35px]  w-fit">
              <ul className="pl-[0] sm:pl-[20px]">
                <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto] my-[14px] gap-[12px] text-[#341802]">
                  <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%] overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
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
                        d="m10 17l5-5l-5-5"></path>
                    </svg>
                  </div>
                  GBP 1050 - includes Online Training, Physical Training, food
                  &amp; accommodation
                </li>
              </ul>
            </div>
          </>
        ),
      },
    ],
  },
};
