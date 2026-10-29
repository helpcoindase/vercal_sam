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
export const IndianCourse: Record<"course2", Course> = {
  // course1: {
  //   tabhead: "Panchakarma Training",
  //   courseHead:
  //     "Intensive 5-Day Kerala Panchakarma Training: Detoxification & Rejuvenation the Classical Way",
  //   section: [
  //     {
  //       id: 0,
  //       type: "content",
  //       heading: "Introduction",
  //       content: (
  //         <>
  //           {" "}
  //           <div className="    xl:max-w-[95%]  flex  max-xl:flex-col xl:grid  max-xl:grid-cols-[100%]   max-2xl:grid-cols-[35%_60%]  grid-cols-[33%_60%]  justify-between items-start gap-[150px] max-2xl:gap-[100px] max-xl:gap-[0px]  max-xl:justify-between">
  //             <div className=" mt-[20px] relative w-[100%] h-[auto]   relative  z-[1] after:absolute  after:content-[] after:w-[100%] after:h-[100%]   after:top-[-15px] after:left-[0px] after:border-[1px_1px_0px_1px]  after:rounded-[90px_90px_0px_0px]  max-xl:after:rounded-[50px_50px_0px_0px] max-md:after:rounded-[70px_70px_0px_0px] after:border-[#ed9b5d] after:z-[-4]  xl:sticky xl:top-[100px] max-2xl:w-[70%]  max-[767px]:max-w-[400px] max-lg:mx-[auto] max-[767px]:mt-[60px] max-sm:mt-[40px] ">
  //               <div className="rounded-[90px_90px_0px_0px] max-xl:rounded-[50px_50px_0px_0px] overflow-hidden  h-full">
  //                 <Image
  //                   width={580}
  //                   height={750}
  //                   className=" w-[100%] h-[auto]"
  //                   alt="abt-img"
  //                   src={`${ASSET_PREFIX}/assets/images/course-indian.webp`}
  //                 />
  //               </div>

  //               <Image
  //                 width={424}
  //                 height={23}
  //                 className="w-[80%] h-[auto] absolute right-[0px] bottom-[40px]"
  //                 alt="Wave"
  //                 src={`${ASSET_PREFIX}/assets/images/wave-shape.webp`}
  //               />
  //             </div>
  //             <div>
  //               <p className="text-[16px] leading-[24xpx] text-[#341802] mt-[40px] mb-[20px] w-[80%] max-md:w-[90%] max-sm:w-[100%]">
  //                 This intensive <b>5-day Panchakarma training</b> offers a deep
  //                 dive into Ayurveda’s primary purification method-
  //                 <b>Panchakarma</b>
  //                 (“five actions”)-with a specialized focus on the{" "}
  //                 <b>Kerala tradition</b>, renowned for refined detoxification
  //                 and rejuvenation practices that restore <i>dosha</i> balance,
  //                 immunity and mind-body harmony.
  //               </p>

  //               <h3 className="text-xl text-black font-light mb-2">
  //                 What Makes Kerala Panchakarma Unique?
  //               </h3>
  //               <ul className="pl-[0] sm:pl-[20px]">
  //                 {[
  //                   "Therapeutic Individualization: treatments tailored to an individual’s doshic imbalance & condition",
  //                   "Specialized Therapies: Pizhichil, Navarakizhi, Dhara, Thalapothichil, Njavara Theppu",
  //                   "Medicinal Oils & Formulations: classical thailams, kizhi, decoctions prepared by experienced vaidyas",
  //                   "Focus on External Therapies: rich preparatory and standalone external protocols in addition to classical internal procedures",
  //                 ].map((t, i) => (
  //                   <li
  //                     key={i}
  //                     className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto] my-[14px] gap-[12px] text-[#341802] max-md:leading-[22px]">
  //                     <div className="w-[22px] h-[22px] rounded-[50%] overflow-hidden p-[2px] bg-[#ffab6b] flex items-center justify-center mt-[3px]">
  //                       <svg
  //                         xmlns="http://www.w3.org/2000/svg"
  //                         width="30"
  //                         height="30"
  //                         viewBox="0 0 24 24">
  //                         <path
  //                           fill="none"
  //                           stroke="#000"
  //                           strokeWidth="2"
  //                           strokeLinecap="round"
  //                           strokeLinejoin="round"
  //                           d="m10 17 5-5-5-5"
  //                         />
  //                       </svg>
  //                     </div>
  //                     {t}
  //                   </li>
  //                 ))}
  //               </ul>
  //             </div>
  //           </div>
  //         </>
  //       ),
  //     },

  //     {
  //       id: 1,
  //       type: "content",
  //       heading: "Program Objectives",
  //       content: (
  //         <>
  //           <div className="grid   xl:grid-cols-2  gap-[20px]">
  //             <div className="bg-[#e3ecd9]  rounded-[30px]  p-[30px]  max-md:p-[25px_15px]  w-fit">
  //               <ul className="pl-[0] sm:pl-[20px]">
  //                 {[
  //                   "Comprehensive theory of Panchakarma per Charaka Samhita & Ashtanga Hridayam",
  //                   "Kerala-style practical applications: preparation, administration & post-care routines",
  //                   "Training across Poorvakarma (preparatory), Pradhanakarma (main detox) & Paschatkarma (post-care)",
  //                   "Strong emphasis on clinical relevance, safety, indications/contraindications & patient management",
  //                 ].map((t, i) => (
  //                   <li
  //                     key={i}
  //                     className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto] my-[14px] gap-[12px] text-[#341802]">
  //                     <div className="w-[22px] h-[22px] rounded-[50%] overflow-hidden p-[2px] bg-[#ffab6b] flex items-center justify-center mt-[3px]">
  //                       <svg
  //                         xmlns="http://www.w3.org/2000/svg"
  //                         width="30"
  //                         height="30"
  //                         viewBox="0 0 24 24">
  //                         <path
  //                           fill="none"
  //                           stroke="#000"
  //                           strokeWidth="2"
  //                           strokeLinecap="round"
  //                           strokeLinejoin="round"
  //                           d="m10 17 5-5-5-5"
  //                         />
  //                       </svg>
  //                     </div>
  //                     {t}
  //                   </li>
  //                 ))}
  //               </ul>
  //             </div>
  //           </div>
  //         </>
  //       ),
  //     },

  //     {
  //       id: 2,
  //       type: "accordian",
  //       heading: "Core Components",
  //       content: "",
  //       tabs: [
  //         {
  //           title: "Poorvakarma (Preparatory Procedures)",
  //           content: (
  //             <>
  //               <p className="text-[16px] leading-[24xpx] text-[#341802] mb-[10px]">
  //                 Prepares the body via external & internal oleation and
  //                 sudation.
  //               </p>
  //               <ul className="pl-[0] sm:pl-[20px]">
  //                 {[
  //                   "Abhyanga - full-body medicated oil massage (Kerala cornerstone)",
  //                   "Snehapana - internal administration of ghee/medicated oils",
  //                   "Swedana - sudation therapies:",
  //                   "• Patra Potali Sweda (leaf bolus)",
  //                   "• Choorna Potali Sweda (powder bolus)",
  //                   "• Njavarakizhi / Shashtika Shali Pinda Sweda (rice bolus)",
  //                   "• Anda Sweda (egg bolus)",
  //                   "• Mamsa Pinda Sweda (meat bolus) - theory",
  //                 ].map((t, i) => (
  //                   <li key={i} className="my-[10px] text-[#341802]">
  //                     {t}
  //                   </li>
  //                 ))}
  //               </ul>
  //             </>
  //           ),
  //         },
  //         {
  //           title: "Pradhanakarma (Main Detox Therapies)",
  //           content: (
  //             <>
  //               <ul className="pl-[0] sm:pl-[20px]">
  //                 {[
  //                   "Vamana - medicated emesis (discussion & demonstration)",
  //                   "Virechana - therapeutic purgation (timing & formulation)",
  //                   "Vasthi - Kerala practices of Sneha (oil) & Kashaya (decoction) enemas; decoction/oil blends preparation",
  //                   "Nasyam - nasal medication (Avapeeda, Pratimarsha variants)",
  //                   "Raktamoksha - bloodletting (theory & demonstrations)",
  //                 ].map((t, i) => (
  //                   <li
  //                     key={i}
  //                     className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto] my-[12px] gap-[12px] text-[#341802]">
  //                     <div className="w-[22px] h-[22px] rounded-[50%] overflow-hidden p-[2px] bg-[#ffab6b] flex items-center justify-center mt-[3px]">
  //                       <svg
  //                         xmlns="http://www.w3.org/2000/svg"
  //                         width="30"
  //                         height="30"
  //                         viewBox="0 0 24 24">
  //                         <path
  //                           fill="none"
  //                           stroke="#000"
  //                           strokeWidth="2"
  //                           strokeLinecap="round"
  //                           strokeLinejoin="round"
  //                           d="m10 17 5-5-5-5"
  //                         />
  //                       </svg>
  //                     </div>
  //                     {t}
  //                   </li>
  //                 ))}
  //               </ul>
  //             </>
  //           ),
  //         },
  //         {
  //           title: "Paschatkarma (Post-Therapy Care)",
  //           content: (
  //             <>
  //               <ul className="pl-[0] sm:pl-[20px]">
  //                 {[
  //                   "Samsarjana Krama - staged dietary regimen",
  //                   "Rasayana - rejuvenation support",
  //                   "Lifestyle guidance following Panchakarma",
  //                 ].map((t, i) => (
  //                   <li
  //                     key={i}
  //                     className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto] my-[12px] gap-[12px] text-[#341802]">
  //                     <div className="w-[22px] h-[22px] rounded-[50%] overflow-hidden p-[2px] bg-[#ffab6b] flex items-center justify-center mt-[3px]">
  //                       <svg
  //                         xmlns="http://www.w3.org/2000/svg"
  //                         width="30"
  //                         height="30"
  //                         viewBox="0 0 24 24">
  //                         <path
  //                           fill="none"
  //                           stroke="#000"
  //                           strokeWidth="2"
  //                           strokeLinecap="round"
  //                           strokeLinejoin="round"
  //                           d="m10 17 5-5-5-5"
  //                         />
  //                       </svg>
  //                     </div>
  //                     {t}
  //                   </li>
  //                 ))}
  //               </ul>
  //             </>
  //           ),
  //         },
  //         {
  //           title: "Kerala-Specific Practical Therapies",
  //           content: (
  //             <>
  //               <ul className="pl-[0] sm:pl-[20px]">
  //                 {[
  //                   "Pizhichil (Kayaseka) - medicated oil bath, deeply rejuvenating",
  //                   "Takra Dhara - buttermilk pour for mental calm/insomnia",
  //                   "Dhanyamla Dhara - fermented decoction pour for inflammation/obesity",
  //                   "Ksheera Dhara - milk-based pour (vata-pitta balancing)",
  //                   "Thalapothichil - herbal head pack",
  //                   "Moordhataila - Kerala head oiling: Shiro Abhyanga, Shirodhara, Sirovasti",
  //                 ].map((t, i) => (
  //                   <li
  //                     key={i}
  //                     className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto] my-[12px] gap-[12px] text-[#341802]">
  //                     <div className="w-[22px] h-[22px] rounded-[50%] overflow-hidden p-[2px] bg-[#ffab6b] flex items-center justify-center mt-[3px]">
  //                       <svg
  //                         xmlns="http://www.w3.org/2000/svg"
  //                         width="30"
  //                         height="30"
  //                         viewBox="0 0 24 24">
  //                         <path
  //                           fill="none"
  //                           stroke="#000"
  //                           strokeWidth="2"
  //                           strokeLinecap="round"
  //                           strokeLinejoin="round"
  //                           d="m10 17 5-5-5-5"
  //                         />
  //                       </svg>
  //                     </div>
  //                     {t}
  //                   </li>
  //                 ))}
  //               </ul>
  //             </>
  //           ),
  //         },
  //       ],
  //     },

  //     {
  //       id: 3,
  //       type: "accordian",
  //       heading: "5-Day Course Syllabus",
  //       content: "",
  //       tabs: [
  //         {
  //           title: "Day 1",
  //           content: (
  //             <>
  //               <h4 className="text-lg font-medium mb-2 font-[mulish]">
  //                 Morning
  //               </h4>
  //               <ul className="pl-[0] sm:pl-[20px] mb-4">
  //                 {[
  //                   "Bahya Sneha - Practical",
  //                   "Abhyangam",
  //                   "Local Vasthis",
  //                 ].map((t, i) => (
  //                   <li key={i} className="my-[8px] text-[#341802]">
  //                     {t}
  //                   </li>
  //                 ))}
  //               </ul>
  //               <h4 className="text-lg font-medium mb-2 font-[mulish]">
  //                 Afternoon
  //               </h4>
  //               <ul className="pl-[0] sm:pl-[20px] mb-4">
  //                 {[
  //                   "Introduction to Panchakarma",
  //                   "Poorvakarma of Panchakarma",
  //                   "Abhyantara Sneha (Internal Oleation)",
  //                 ].map((t, i) => (
  //                   <li key={i} className="my-[8px] text-[#341802]">
  //                     {t}
  //                   </li>
  //                 ))}
  //               </ul>
  //               <h4 className="text-lg font-medium mb-2 font-[mulish]">
  //                 Evening
  //               </h4>
  //               <ul className="pl-[0] sm:pl-[20px]">
  //                 {["Avagaham", "Pichu - Theory & Practical"].map((t, i) => (
  //                   <li key={i} className="my-[8px] text-[#341802]">
  //                     {t}
  //                   </li>
  //                 ))}
  //               </ul>
  //             </>
  //           ),
  //         },
  //         {
  //           title: "Day 2",
  //           content: (
  //             <>
  //               <h4 className="text-lg font-medium mb-2 font-[mulish]">
  //                 Morning
  //               </h4>
  //               <ul className="pl-[0] sm:pl-[20px] mb-4">
  //                 {[
  //                   "Swedana - Practical",
  //                   "Patra Potali Sweda",
  //                   "Choorna Potali Sweda",
  //                   "Mamsa Pinda Sweda",
  //                   "Anda Sweda",
  //                   "Shashtikashali Pinda Sweda",
  //                 ].map((t, i) => (
  //                   <li key={i} className="my-[8px] text-[#341802]">
  //                     {t}
  //                   </li>
  //                 ))}
  //               </ul>
  //               <h4 className="text-lg font-medium mb-2 font-[mulish]">
  //                 Afternoon
  //               </h4>
  //               <ul className="pl-[0] sm:pl-[20px] mb-4">
  //                 {["Preparation of Sweda Types - Practical"].map((t, i) => (
  //                   <li key={i} className="my-[8px] text-[#341802]">
  //                     {t}
  //                   </li>
  //                 ))}
  //               </ul>
  //               <h4 className="text-lg font-medium mb-2 font-[mulish]">
  //                 Evening (4:15 PM - 6:00 PM)
  //               </h4>
  //               <ul className="pl-[0] sm:pl-[20px]">
  //                 {[
  //                   "Netra Kriya Kalpana",
  //                   "Mukha Kalpana - Theory & Practical",
  //                 ].map((t, i) => (
  //                   <li key={i} className="my-[8px] text-[#341802]">
  //                     {t}
  //                   </li>
  //                 ))}
  //               </ul>
  //             </>
  //           ),
  //         },
  //         {
  //           title: "Day 3",
  //           content: (
  //             <>
  //               <h4 className="text-lg font-medium mb-2 font-[mulish]">
  //                 Morning (Early)
  //               </h4>
  //               <ul className="pl-[0] sm:pl-[20px] mb-4">
  //                 {["Vamana Procedure - Practical"].map((t, i) => (
  //                   <li key={i} className="my-[8px] text-[#341802]">
  //                     {t}
  //                   </li>
  //                 ))}
  //               </ul>
  //               <h4 className="text-lg font-medium mb-2 font-[mulish]">
  //                 Afternoon
  //               </h4>
  //               <ul className="pl-[0] sm:pl-[20px] mb-4">
  //                 {["Theory of Vamana and Virechana"].map((t, i) => (
  //                   <li key={i} className="my-[8px] text-[#341802]">
  //                     {t}
  //                   </li>
  //                 ))}
  //               </ul>
  //               <h4 className="text-lg font-medium mb-2 font-[mulish]">
  //                 Evening
  //               </h4>
  //               <ul className="pl-[0] sm:pl-[20px]">
  //                 {[
  //                   "Lepam",
  //                   "Upanaham",
  //                   "Ksheeradhuma",
  //                   "Moordhatailam - Theory & Practical",
  //                 ].map((t, i) => (
  //                   <li key={i} className="my-[8px] text-[#341802]">
  //                     {t}
  //                   </li>
  //                 ))}
  //               </ul>
  //             </>
  //           ),
  //         },
  //         {
  //           title: "Day 4",
  //           content: (
  //             <>
  //               <h4 className="text-lg font-medium mb-2 font-[mulish]">
  //                 Morning
  //               </h4>
  //               <ul className="pl-[0] sm:pl-[20px] mb-4">
  //                 {[
  //                   "Kashaya Vasthi & Sneha Vasthi - Preparation & Procedure",
  //                 ].map((t, i) => (
  //                   <li key={i} className="my-[8px] text-[#341802]">
  //                     {t}
  //                   </li>
  //                 ))}
  //               </ul>
  //               <h4 className="text-lg font-medium mb-2 font-[mulish]">
  //                 Afternoon
  //               </h4>
  //               <ul className="pl-[0] sm:pl-[20px] mb-4">
  //                 {["Types of Kashaya Vasthi Yogas - Practical"].map((t, i) => (
  //                   <li key={i} className="my-[8px] text-[#341802]">
  //                     {t}
  //                   </li>
  //                 ))}
  //               </ul>
  //               <h4 className="text-lg font-medium mb-2 font-[mulish]">
  //                 Evening (4:15 PM - 6:00 PM)
  //               </h4>
  //               <ul className="pl-[0] sm:pl-[20px]">
  //                 {["Kayaseka / Pizhichil - Theory & Practical"].map((t, i) => (
  //                   <li key={i} className="my-[8px] text-[#341802]">
  //                     {t}
  //                   </li>
  //                 ))}
  //               </ul>
  //             </>
  //           ),
  //         },
  //         {
  //           title: "Day 5",
  //           content: (
  //             <>
  //               <h4 className="text-lg font-medium mb-2 font-[mulish]">
  //                 Morning
  //               </h4>
  //               <ul className="pl-[0] sm:pl-[20px] mb-4">
  //                 {[
  //                   "Nasyam - Theory & Practical",
  //                   "Raktamoksha - Theory & Practical",
  //                 ].map((t, i) => (
  //                   <li key={i} className="my-[8px] text-[#341802]">
  //                     {t}
  //                   </li>
  //                 ))}
  //               </ul>
  //               <h4 className="text-lg font-medium mb-2 font-[mulish]">
  //                 Afternoon
  //               </h4>
  //               <ul className="pl-[0] sm:pl-[20px]">
  //                 {["Ksheeradhara", "Dhanyamla Dhara", "Takradhara"].map(
  //                   (t, i) => (
  //                     <li key={i} className="my-[8px] text-[#341802]">
  //                       {t}
  //                     </li>
  //                   ),
  //                 )}
  //               </ul>
  //             </>
  //           ),
  //         },
  //       ],
  //     },

  //     {
  //       id: 4,
  //       type: "content",
  //       heading: "Why This Training is Valuable",
  //       content: (
  //         <>
  //           <h3 className="text-lg font-medium mb-2 font-[mulish] text-[#000]">
  //             {" "}
  //             Clinical Readiness
  //           </h3>
  //           <ul className="pl-[0] sm:pl-[20px]">
  //             {[
  //               "Hands-on practice of globally sought-after Kerala therapies",
  //               "Authentic protocols bridging classics & modern wellness applications",
  //               "Confidence to apply treatments standalone or within Panchakarma programs",
  //             ].map((t, i) => (
  //               <li
  //                 key={i}
  //                 className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto] my-[12px] gap-[12px] text-[#341802]">
  //                 <div className="w-[22px] h-[22px] rounded-[50%] overflow-hidden p-[2px] bg-[#ffab6b] flex items-center justify-center mt-[3px]">
  //                   <svg
  //                     xmlns="http://www.w3.org/2000/svg"
  //                     width="30"
  //                     height="30"
  //                     viewBox="0 0 24 24">
  //                     <path
  //                       fill="none"
  //                       stroke="#000"
  //                       strokeWidth="2"
  //                       strokeLinecap="round"
  //                       strokeLinejoin="round"
  //                       d="m10 17 5-5-5-5"
  //                     />
  //                   </svg>
  //                 </div>
  //                 {t}
  //               </li>
  //             ))}
  //           </ul>
  //         </>
  //       ),
  //     },

  //     {
  //       id: 5,
  //       type: "content",
  //       heading: "Eligibility",
  //       content: (
  //         <>
  //           <ul className="pl-[0] sm:pl-[20px]">
  //             {[
  //               "Ayurveda students (BAMS, MD Ayu)",
  //               "Practicing Ayurvedic doctors & therapists",
  //               "Healthcare professionals interested in Ayurveda",
  //               "Wellness & spa practitioners with prior Ayurvedic exposure",
  //             ].map((t, i) => (
  //               <li
  //                 key={i}
  //                 className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto] my-[12px] gap-[12px] text-[#341802]">
  //                 <div className="w-[22px] h-[22px] rounded-[50%] overflow-hidden p-[2px] bg-[#ffab6b] flex items-center justify-center mt-[3px]">
  //                   <svg
  //                     xmlns="http://www.w3.org/2000/svg"
  //                     width="30"
  //                     height="30"
  //                     viewBox="0 0 24 24">
  //                     <path
  //                       fill="none"
  //                       stroke="#000"
  //                       strokeWidth="2"
  //                       strokeLinecap="round"
  //                       strokeLinejoin="round"
  //                       d="m10 17 5-5-5-5"
  //                     />
  //                   </svg>
  //                 </div>
  //                 {t}
  //               </li>
  //             ))}
  //           </ul>
  //         </>
  //       ),
  //     },

  //     {
  //       id: 6,
  //       type: "content",
  //       heading: "Course Fees",
  //       content: (
  //         <>
  //           <div className="p-[30px]  bg-[#e8f5d9] rounded-[35px]  w-fit">
  //             <ul className="pl-[0] sm:pl-[20px]">
  //               <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto] my-[12px] gap-[12px] text-[#341802]">
  //                 <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%] overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
  //                   <svg
  //                     xmlns="http://www.w3.org/2000/svg"
  //                     width="30"
  //                     height="30"
  //                     viewBox="0 0 24 24">
  //                     <path
  //                       fill="none"
  //                       stroke="#000"
  //                       strokeWidth="2"
  //                       strokeLinecap="round"
  //                       strokeLinejoin="round"
  //                       d="m10 17 5-5-5-5"
  //                     />
  //                   </svg>
  //                 </div>
  //                 Early Bird: INR 20,000 - register ≥ 15 days before start
  //                 (includes food & group accommodation)
  //               </li>
  //               <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto] my-[12px] gap-[12px] text-[#341802]">
  //                 <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%] overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
  //                   <svg
  //                     xmlns="http://www.w3.org/2000/svg"
  //                     width="30"
  //                     height="30"
  //                     viewBox="0 0 24 24">
  //                     <path
  //                       fill="none"
  //                       stroke="#000"
  //                       strokeWidth="2"
  //                       strokeLinecap="round"
  //                       strokeLinejoin="round"
  //                       d="m10 17 5-5-5-5"
  //                     />
  //                   </svg>
  //                 </div>
  //                 Regular Fee: INR 22,500 - registrations after the Early Bird
  //                 window (includes food & group accommodation)
  //               </li>
  //             </ul>
  //           </div>
  //         </>
  //       ),
  //     },
  //   ],
  // },
  course2: {
    tabhead: "Ayurveda",
    courseHead: "Certificate Course in Ayurveda Therapy",
    section: [
      {
        id: 0,
        type: "content",
        heading: "Course Overview",
        content: (
          <>
            {" "}
            <div className="    xl:max-w-[95%]  flex  max-xl:flex-col xl:grid  max-xl:grid-cols-[100%]   max-2xl:grid-cols-[35%_60%]  grid-cols-[33%_60%]  justify-between items-start gap-[150px] max-2xl:gap-[100px] max-xl:gap-[0px]  max-xl:justify-between">
              <div className=" mt-[20px] relative w-[100%] h-[auto]   relative  z-[1] after:absolute  after:content-[] after:w-[100%] after:h-[100%]   after:top-[-15px] after:left-[0px] after:border-[1px_1px_0px_1px]  after:rounded-[90px_90px_0px_0px]  max-xl:after:rounded-[50px_50px_0px_0px] max-md:after:rounded-[70px_70px_0px_0px] after:border-[#ed9b5d] after:z-[-4]  xl:sticky xl:top-[100px] max-2xl:w-[70%]  max-[767px]:max-w-[400px] max-lg:mx-[auto] max-[767px]:mt-[60px] max-sm:mt-[40px] ">
                <div className="rounded-[90px_90px_0px_0px] max-xl:rounded-[50px_50px_0px_0px] overflow-hidden  h-full">
                  <Image
                    width={580}
                    height={750}
                    className=" w-[100%] h-[auto]"
                    alt="abt-img"
                    src={`${ASSET_PREFIX}/assets/images/course-indian.webp`}
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
                <p className="text-[16px] leading-[24xpx] text-[#341802] mt-[40px] mb-[20px] w-[80%] max-md:w-[90%] max-sm:w-[100%]">
                  Learn the ancient wisdom of Ayurveda with our comprehensive
                  Certificate Course in Ayurveda Therapy.
                </p>
                <p className="text-[16px] leading-[24xpx] text-[#341802] mt-[40px] mb-[20px] w-[80%] max-md:w-[90%] max-sm:w-[100%]">
                  The collaboration between ASAP Kerala and the Ayurveda
                  Promotion Society marks a significant initiative in promoting
                  Ayurvedic education within the state of Kerala. This
                  partnership aims to harness the rich heritage of Ayurveda, a
                  holistic healthcare system deeply rooted in Indian culture,
                  and integrate it with modern skill development practices. By
                  combining the expertise of Ayurveda Promotion Society with
                  ASAP Kerala&apos;s structured skill development framework, the
                  collaboration seeks to offer comprehensive Ayurveda therapy
                  course.
                </p>
                <p className="text-[16px] leading-[24xpx] text-[#341802] mt-[40px] mb-[20px] w-[80%] max-md:w-[90%] max-sm:w-[100%]">
                  Designed for wellness professionals, therapists and
                  individuals passionate about natural health, Certificate
                  Course in Ayurveda Therapy offers a thorough knowledge of
                  Ayurvedic principles, diagnostic methods and healing
                  techniques. Whether you&apos;re looking to expand your
                  professional repertoire or embark on a personal wellness
                  journey, our course equips you with the knowledge and skills
                  to integrate Ayurvedic practices into your life and work.
                </p>
                <p className="text-[16px] leading-[24xpx] text-[#341802] mt-[40px] mb-[20px] w-[80%] max-md:w-[90%] max-sm:w-[100%]">
                  The course spans over 9 months and after successful completion
                  of the course, the candidates will be provided with 3 months
                  of internship in Ayurvedic hospitals. The course and
                  internship will be conducted at reputed Ayurveda hospitals.
                </p>
                <p className="text-[16px] leading-[24xpx] text-[#341802] mt-[40px] mb-[20px] w-[80%] max-md:w-[90%] max-sm:w-[100%]">
                  No age limit; however, the upper age limit for placement
                  assistance is 30 years.
                </p>

                <h3 className="text-xl text-black font-light mb-2">
                  This is an NSQF level-4 course.
                </h3>
              </div>
            </div>
          </>
        ),
      },

      {
        id: 1,
        type: "content",
        heading: "Course Details",
        content: (
          <>
            <div className="grid   xl:grid-cols-2  gap-[20px]">
              <div className="bg-[#e3ecd9]  rounded-[30px]  p-[30px]  max-md:p-[25px_15px]  w-full">
                <p className="text-xl font-light mb-2 text-black">
                  Course Hours & Schedule:
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
                    Course Start Date: 6 Jan, 2026
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
                    Duration: 1200 hours
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
                    Application Dates: 3 Mar, 2025 - 31 Dec, 2025
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
                    Course Mode: Offline
                  </li>
                </ul>
                <p className="text-xl font-light mb-2 text-black">
                  Skills Covered
                </p>
                <ul className="pl-[0] sm:pl-[20px]">
                  {[
                    "Dosha Assessment and Individualised Treatment",
                    "Clinical Observation",
                    "Panchakarma Therapies",
                    "Ayurvedic Massage and Bodywork",
                    "Ayurvedic Medicine Knowledge",
                    "Common/ General Ayurvedic Formulations",
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
                            d="m10 17 5-5-5-5"
                          />
                        </svg>
                      </div>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#ffdcc0]  rounded-[30px]  p-[30px]  max-md:p-[25px_15px]  w-full">
                <p className="text-xl font-light mb-2 text-black">
                  Who is this course for?
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
                    12th Pass – No Experience
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
                    11th Pass – 1.5 year relevant experience
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
                    10th Pass – 3 year relevant experience
                  </li>
                </ul>
                <div className="">
                  <div>
                    <p className="text-xl font-light mb-4 text-black">
                      Training Partners
                    </p>
                    <Image
                      alt="Training Partner"
                      width={200}
                      height={100}
                      src={`${ASSET_PREFIX}/assets/images/ayurveda-promotion.webp`}></Image>
                  </div>
                  <div className="mt-[20px]">
                    <p className="text-xl font-light  text-black">
                      Certification
                    </p>
                    <Image
                      alt="Certification"
                      height={200}
                      width={200}
                      src={`${ASSET_PREFIX}/assets/images/ncvet-logo.webp`}></Image>
                  </div>
                </div>
              </div>
            </div>
          </>
        ),
      },

      {
        id: 2,
        type: "accordian",
        heading: "Key Topics",
        content: "",
        tabs: [
          {
            title: "Understanding the History and basic principles of Ayurveda",
            content: (
              <>
                <p className="text-[16px] leading-[24xpx] text-[#341802] mb-[10px]">
                  Ayurveda Adisthana Sidhantham
                </p>
              </>
            ),
          },
          {
            title: "Familiarising Sareera Vinjana",
            content: (
              <>
                <p className="text-[16px] leading-[24xpx] text-[#341802] mb-[10px]">
                  Human Anatomy and physiology
                </p>
              </>
            ),
          },
          {
            title: "Basic Understanding of Dravya Vinjanam",
            content: (
              <>
                {" "}
                <p className="text-[16px] leading-[24xpx] text-[#341802] mb-[10px]">
                  Ayurveda Pharmacology and Pharmaceuticals
                </p>
              </>
            ),
          },
          {
            title: "Panchakarma Vidhikal",
            content: (
              <>
                {" "}
                <p className="text-[16px] leading-[24xpx] text-[#341802] mb-[10px]">
                  Classical Ayurvedic Treatment procedures
                </p>
              </>
            ),
          },
          {
            title: "Keraleeya Vishesha Chikitsa",
            content: (
              <>
                {" "}
                <p className="text-[16px] leading-[24xpx] text-[#341802] mb-[10px]">
                  Unique Ayurvedic treatment procedures in Kerala
                </p>
              </>
            ),
          },
          {
            title: "Understanding the Basics of Yoga Sasthra and Physiotherapy",
            content: (
              <>
                {" "}
                <p className="text-[16px] leading-[24xpx] text-[#341802] mb-[10px]">
                  Understanding the Basics of Yoga Sasthra and Physiotherapy
                </p>
              </>
            ),
          },
          {
            title: "Employability Skills",
            content: (
              <>
                {" "}
                <p className="text-[16px] leading-[24xpx] text-[#341802] mb-[10px]">
                  Employability Skills
                </p>
              </>
            ),
          },
        ],
      },
      {
        id: 3,
        type: "content",
        heading: "After Course",
        content: (
          <>
            <div className="grid   xl:grid-cols-2  gap-[20px]">
              <div className="   overflow-hidden  w-full">
                <p className="text-xl font-light mb-2 text-black">
                  What to expect after the course ?
                </p>
                <p className="text-[#000]">
                  Upon completion of Certificate Course in Ayurveda Therapy
                  course, we assist potential candidates to connect with
                  prospective employers. Here’s what you can expect.
                </p>
                <div className="w-full  overflow-x-scroll">
                  <table className="w-full border rounded-[30px]  border-gray-200 mt-[15px]">
                    {/* HEADER */}
                    <thead className="bg-[#304A10]">
                      <tr className=" text-white text-left">
                        <th className="py-3 px-4 text-[16px] md:text-base border border-gray-200">
                          Job Roles
                        </th>
                        <th className="py-3 px-4 text-[16px] md:text-base border border-gray-200">
                          Expected Salary
                        </th>
                        <th className="py-3 px-4 text-[16px] md:text-base border border-gray-200">
                          Key Recuruiters
                        </th>
                      </tr>
                    </thead>

                    {/* BODY */}
                    <tbody className="text-gray-800">
                      {/* ROW 1 */}
                      <tr className="border-b border-gray-200">
                        <td className="py-3 px-4  border border-gray-200 ">
                          Ayurveda Therapist
                        </td>

                        <td className="py-3 px-4 border border-gray-200">
                          <div className="flex flex-col gap-2">
                            <span>150000 /- p.a.</span>
                          </div>
                        </td>

                        <td className="py-3 px-4">
                          Ayurvedic Clinics and Hospitals
                        </td>
                      </tr>

                      {/* ROW 2 */}
                      <tr className="border-b border-gray-200 bg-[#e8f5d9]/50">
                        <td className="py-3 px-4 border border-gray-200">
                          Ayurvedic Wellness Coach
                        </td>

                        <td className="py-3 px-4 border border-gray-200">
                          <div className="flex flex-col gap-2">
                            <span>300000 /- p.a.</span>
                          </div>
                        </td>

                        <td className="py-3 px-4 border border-gray-200">
                          Holistic Health Centers
                        </td>
                      </tr>

                      {/* ROW 3 */}
                      <tr>
                        <td className="py-3 px-4 border border-gray-200">
                          Ayurvedic Pharmacy Assistant
                        </td>

                        <td className="py-3 px-4 border border-gray-200">
                          {/* No salary bar in screenshot → add placeholder or leave blank */}
                        </td>

                        <td className="py-3 px-4 border border-gray-200"></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
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
                <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto] my-[12px] gap-[12px] text-[#341802]">
                  <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%] overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
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
                        d="m10 17 5-5-5-5"
                      />
                    </svg>
                  </div>
                  Investment to secure your future
                </li>
                <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto] my-[12px] gap-[12px] text-[#341802]">
                  <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%] overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
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
                        d="m10 17 5-5-5-5"
                      />
                    </svg>
                  </div>
                  Skill Loan :Available
                </li>
                <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto] my-[12px] gap-[12px] text-[#341802]">
                  <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%] overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
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
                        d="m10 17 5-5-5-5"
                      />
                    </svg>
                  </div>
                  <span>
                    Course Fee :{" "}
                    <span className="text-[18px] leading-[24px] font-semibold">
                      ₹.39,500/-
                    </span>
                    (Including GST)
                  </span>
                </li>
              </ul>
            </div>
          </>
        ),
      },
    ],
  },
};
