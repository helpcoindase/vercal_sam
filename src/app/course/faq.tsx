"use client";
import { useState } from "react";
// import type { Swiper as SwiperType } from "swiper";
export default function FAQ() {
  const faqs = [
    {
      id: "1",
      question:
        "Advanced Course on Mental Health - An Integrated Approach in Ayurveda",
      answerTitle: "Why Samwarthika? become more competitive:",
      answer: (
        <>
          <div className="overflow-x-auto w-full min-w-[1100px] ">
            <table className="min-w-full border border-gray-300 text-[16px] text-[#434343bf]">
              <thead className="bg-[#607840]  text-[#fff]">
                <tr>
                  <th className="border px-3 py-2">No.</th>
                  <th className="border px-3 py-2">Start Date</th>
                  <th className="border px-3 py-2">End Date</th>
                  <th className="border px-3 py-2">Course Days</th>
                  <th className="border px-3 py-2">Syllabus (Brief)</th>
                  <th className="border px-3 py-2">Fees</th>
                  <th className="border px-3 py-2">Eligibility</th>
                  <th className="border px-3 py-2">Expected Outcome</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-3 py-2 text-center">1</td>
                  <td className="border px-3 py-2">10 Jan 2026</td>
                  <td className="border px-3 py-2">1 Feb 2026</td>
                  <td className="border px-3 py-2">8 sessions (Sat & Sun)</td>
                  <td className="border px-3 py-2">
                    Manas & Indian Philosophies, Psychological Processes,
                    Manovaha Srotas, Psychiatric Assessment, Mental Disorders
                    (Modern & Ayurvedic), Lifestyle, Yoga & Ayurveda-based
                    Management Approaches
                  </td>
                  <td className="border px-3 py-2">
                    USD 110 (Early bird: USD 100)
                  </td>
                  <td className="border px-3 py-2">
                    Ayurveda practitioners, students, yoga & mental health
                    professionals
                  </td>
                  <td className="border px-3 py-2">
                    Holistic understanding of mental health integrating Ayurveda
                    and psychology
                  </td>
                </tr>
                <tr>
                  <td className="border px-3 py-2 text-center">2</td>
                  <td className="border px-3 py-2">11 Apr 2026</td>
                  <td className="border px-3 py-2">3 May 2026</td>
                  <td className="border px-3 py-2">8 sessions (Sat & Sun)</td>
                  <td className="border px-3 py-2">
                    Manas & Indian Philosophies, Psychological Processes,
                    Manovaha Srotas, Psychiatric Assessment, Mental Disorders
                    (Modern & Ayurvedic), Lifestyle, Yoga & Ayurveda-based
                    Management Approaches
                  </td>
                  <td className="border px-3 py-2">
                    USD 110 (Early bird: USD 100)
                  </td>
                  <td className="border px-3 py-2">
                    Ayurveda practitioners, students, yoga & mental health
                    professionals
                  </td>
                  <td className="border px-3 py-2">
                    Holistic understanding of mental health integrating Ayurveda
                    and psychology
                  </td>
                </tr>
                <tr>
                  <td className="border px-3 py-2 text-center">3</td>
                  <td className="border px-3 py-2">11 Jul 2026</td>
                  <td className="border px-3 py-2">2 Aug 2026</td>
                  <td className="border px-3 py-2">8 sessions (Sat & Sun)</td>
                  <td className="border px-3 py-2">
                    Manas & Indian Philosophies, Psychological Processes,
                    Manovaha Srotas, Psychiatric Assessment, Mental Disorders
                    (Modern & Ayurvedic), Lifestyle, Yoga & Ayurveda-based
                    Management Approaches
                  </td>
                  <td className="border px-3 py-2">
                    USD 110 (Early bird: USD 100)
                  </td>
                  <td className="border px-3 py-2">
                    Ayurveda practitioners, students, yoga & mental health
                    professionals
                  </td>
                  <td className="border px-3 py-2">
                    Holistic understanding of mental health integrating Ayurveda
                    and psychology
                  </td>
                </tr>
                <tr>
                  <td className="border px-3 py-2 text-center">4</td>
                  <td className="border px-3 py-2">10 Oct 2026</td>
                  <td className="border px-3 py-2">1 Nov 2026</td>
                  <td className="border px-3 py-2">8 sessions (Sat & Sun)</td>
                  <td className="border px-3 py-2">
                    Manas & Indian Philosophies, Psychological Processes,
                    Manovaha Srotas, Psychiatric Assessment, Mental Disorders
                    (Modern & Ayurvedic), Lifestyle, Yoga & Ayurveda-based
                    Management Approaches
                  </td>
                  <td className="border px-3 py-2">
                    USD 110 (Early bird: USD 100)
                  </td>
                  <td className="border px-3 py-2">
                    Ayurveda practitioners, students, yoga & mental health
                    professionals
                  </td>
                  <td className="border px-3 py-2">
                    Holistic understanding of mental health integrating Ayurveda
                    and psychology
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      ),
    },
    {
      id: "2",
      question: "Understanding Diabetes the Ayurvedic Way",
      answerTitle: "Sciatica Pain Explanation",
      answer: (
        <>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300 text-[16px] text-[#434343bf]">
              <thead className="bg-[#607840]  text-[#fff]">
                <tr>
                  <th className="border px-3 py-2">Schedule No.</th>
                  <th className="border px-3 py-2">Start Date</th>
                  <th className="border px-3 py-2">End Date</th>
                  <th className="border px-3 py-2">Course Days</th>
                  <th className="border px-3 py-2">Syllabus (Brief)</th>
                  <th className="border px-3 py-2">Other Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-3 py-2 text-center">1</td>
                  <td className="border px-3 py-2">7 Mar 2026</td>
                  <td className="border px-3 py-2">21 Mar 2026</td>
                  <td className="border px-3 py-2">
                    6 sessions (Mon, Wed, Sat)
                  </td>
                  <td className="border px-3 py-2">
                    Ayurvedic understanding of Prameha, diet & lifestyle in
                    diabetes, herbs, home remedies, yoga & stress management.
                  </td>
                  <td className="border px-3 py-2">
                    <div>
                      <strong>Fees:</strong> USD 49 (early) / USD 59 (regular)
                    </div>
                    <div>
                      <strong>Eligibility:</strong> Open to all; no prior
                      Ayurveda background required.
                    </div>
                    <div>
                      <strong>Expected Outcome:</strong> Basic Ayurvedic
                      knowledge to manage and prevent diabetes through diet and
                      lifestyle.
                    </div>
                  </td>
                </tr>

                <tr>
                  <td className="border px-3 py-2 text-center">2</td>
                  <td className="border px-3 py-2">6 Jun 2026</td>
                  <td className="border px-3 py-2">20 Jun 2026</td>
                  <td className="border px-3 py-2">
                    6 sessions (Mon, Wed, Sat)
                  </td>
                  <td className="border px-3 py-2">
                    Ayurvedic understanding of Prameha, diet & lifestyle in
                    diabetes, herbs, home remedies, yoga & stress management.
                  </td>
                  <td className="border px-3 py-2">
                    <div>
                      <strong>Fees:</strong> USD 49 (early) / USD 59 (regular)
                    </div>
                    <div>
                      <strong>Eligibility:</strong> Open to all; no prior
                      Ayurveda background required.
                    </div>
                    <div>
                      <strong>Expected Outcome:</strong> Basic Ayurvedic
                      knowledge to manage and prevent diabetes through diet and
                      lifestyle.
                    </div>
                  </td>
                </tr>

                <tr>
                  <td className="border px-3 py-2 text-center">3</td>
                  <td className="border px-3 py-2">5 Sep 2026</td>
                  <td className="border px-3 py-2">19 Sep 2026</td>
                  <td className="border px-3 py-2">
                    6 sessions (Mon, Wed, Sat)
                  </td>
                  <td className="border px-3 py-2">
                    Ayurvedic understanding of Prameha, diet & lifestyle in
                    diabetes, herbs, home remedies, yoga & stress management.
                  </td>
                  <td className="border px-3 py-2">
                    <div>
                      <strong>Fees:</strong> USD 49 (early) / USD 59 (regular)
                    </div>
                    <div>
                      <strong>Eligibility:</strong> Open to all; no prior
                      Ayurveda background required.
                    </div>
                    <div>
                      <strong>Expected Outcome:</strong> Basic Ayurvedic
                      knowledge to manage and prevent diabetes through diet and
                      lifestyle.
                    </div>
                  </td>
                </tr>

                <tr>
                  <td className="border px-3 py-2 text-center">4</td>
                  <td className="border px-3 py-2">5 Dec 2026</td>
                  <td className="border px-3 py-2">19 Dec 2026</td>
                  <td className="border px-3 py-2">
                    6 sessions (Mon, Wed, Sat)
                  </td>
                  <td className="border px-3 py-2">
                    Ayurvedic understanding of Prameha, diet & lifestyle in
                    diabetes, herbs, home remedies, yoga & stress management.
                  </td>
                  <td className="border px-3 py-2">
                    <div>
                      <strong>Fees:</strong> USD 49 (early) / USD 59 (regular)
                    </div>
                    <div>
                      <strong>Eligibility:</strong> Open to all; no prior
                      Ayurveda background required.
                    </div>
                    <div>
                      <strong>Expected Outcome:</strong> Basic Ayurvedic
                      knowledge to manage and prevent diabetes through diet and
                      lifestyle.
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      ),
    },
    {
      id: "3",
      question:
        "Panchakarma Therapy Course - Advanced Level (Kerala Traditional Focus)",
      answerTitle: "Lower Back Pain Causes",
      answer: (
        <>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300 text-[16px] text-[#434343bf]">
              <thead className="bg-[#607840]  text-[#fff]">
                <tr>
                  <th className="border px-3 py-2">Schedule No.</th>
                  <th className="border px-3 py-2">Start Date</th>
                  <th className="border px-3 py-2">End Date</th>
                  <th className="border px-3 py-2">Course Days</th>
                  <th className="border px-3 py-2">Syllabus (Brief)</th>
                  <th className="border px-3 py-2">Other Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-3 py-2 text-center">1</td>
                  <td className="border px-3 py-2">7 Nov 2026</td>
                  <td className="border px-3 py-2">22 Dec 2026</td>
                  <td className="border px-3 py-2">
                    1.5 Months (Theory +Practical)
                  </td>
                  <td className="border px-3 py-2">
                    Advanced Kerala Panchakarma:Snehana, Swedana, Pradhanakarma
                    , specialized Kerala therapies (Pizhichil, Dhara, Vasthi),
                    and clinical internship at Samwarthika Ayurveda Hospital.
                  </td>
                  <td className="border px-3 py-2">
                    <div>
                      <strong>Fees:</strong>GBP 1050
                    </div>
                    <div>
                      <strong>Eligibility:</strong> UK-based Ayurveda
                      practitioners &amp; students with foundational knowledge.
                      Expected Outcome: Mastery in Kerala Traditional Panchakarm
                      a with clinical and theoretical expertise.
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      ),
    },
    {
      id: "4",
      question: "5-Day Intensive Keraleeya Panchakarma Training for Doctors",
      answerTitle: "Optimization Tips",
      answer: (
        <>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300 text-[16px] text-[#434343bf]">
              <thead className="bg-[#607840]  text-[#fff]">
                <tr>
                  <th className="border px-3 py-2">Schedule No.</th>
                  <th className="border px-3 py-2">Start Date</th>
                  <th className="border px-3 py-2">End Date</th>
                  <th className="border px-3 py-2">Course Days</th>
                  <th className="border px-3 py-2">Syllabus (Brief)</th>
                  <th className="border px-3 py-2">Other Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-3 py-2 text-center">1</td>
                  <td className="border px-3 py-2">2 Feb 2026</td>
                  <td className="border px-3 py-2">6 Feb 2026</td>
                  <td className="border px-3 py-2">5 Days</td>
                  <td className="border px-3 py-2">
                    Kerala-style Panchakarma: Poorvakarma, Pradhanakarma ,
                    Paschatkarma, including Abhyanga, Swedana, Vasthi, Nasyam,
                    Dhara and Thalapothichil.
                  </td>
                  <td className="border px-3 py-2">
                    <div>
                      <strong>Fees:</strong> INR 20,000 (early) / INR 22,500
                      (regular)
                    </div>
                    <div>
                      <strong>Eligibility:</strong> Ayurveda doctors, students,
                      and wellness professionals
                    </div>
                    <div>
                      <strong>Expected Outcome:</strong> Practical proficiency
                      in authentic Kerala Panchakarma therapies.
                    </div>
                  </td>
                </tr>

                <tr>
                  <td className="border px-3 py-2 text-center">2</td>
                  <td className="border px-3 py-2">4 May 2026</td>
                  <td className="border px-3 py-2">8 May 2026</td>
                  <td className="border px-3 py-2">5 Days</td>
                  <td className="border px-3 py-2">
                    <div>
                      {" "}
                      <strong>Kerala-style Panchakarma:</strong>
                    </div>
                    Poorvakarma, Pradhanakarma , Paschatkarma, including
                    Abhyanga, Swedana, Vasthi, Nasyam, Dhara and
                    Thalapothichil.
                  </td>
                  <td className="border px-3 py-2">
                    <div>
                      <strong>Fees:</strong> INR 20,000 (early) / INR 22,500
                      (regular)
                    </div>
                    <div>
                      <strong>Eligibility:</strong> Ayurveda doctors, students,
                      and wellness professionals
                    </div>
                    <div>
                      <strong>Expected Outcome:</strong> Practical proficiency
                      in authentic Kerala Panchakarma therapies.
                    </div>
                  </td>
                </tr>

                <tr>
                  <td className="border px-3 py-2 text-center">3</td>
                  <td className="border px-3 py-2">3 Aug 2026</td>
                  <td className="border px-3 py-2">7 Aug 2026</td>
                  <td className="border px-3 py-2">5 Days</td>
                  <td className="border px-3 py-2">
                    <div>
                      {" "}
                      <strong>Kerala-style Panchakarma:</strong>Poorvakarma,
                      Pradhanakarma , Paschatkarma, including Abhyanga, Swedana,
                      Vasthi, Nasyam, Dhara and Thalapothichil.
                    </div>
                  </td>
                  <td className="border px-3 py-2">
                    <div>
                      <strong>Fees:</strong>INR 20,000 (early) / INR 22,500
                      (regular)
                    </div>
                    <div>
                      <strong>Eligibility:</strong> Ayurveda doctors, students,
                      and wellness professionals.
                    </div>
                    <div>
                      <strong>Expected Outcome:</strong> Practical proficiency
                      in authentic Kerala Panchakarma therapies.
                    </div>
                  </td>
                </tr>

                <tr>
                  <td className="border px-3 py-2 text-center">4</td>
                  <td className="border px-3 py-2">2 Nov 2026</td>
                  <td className="border px-3 py-2">6 Nov 2026</td>
                  <td className="border px-3 py-2">5 Days</td>
                  <td className="border px-3 py-2">
                    <div>
                      <strong>Kerala-style Panchakarma:</strong>
                      Poorvakarma,Pradhanakarma , Paschatkarma, including
                      Abhyanga, Swedana, Vasthi, Nasyam, Dhara and
                      Thalapothichil.
                    </div>
                  </td>
                  <td className="border px-3 py-2">
                    <div>
                      <strong>Fees:</strong> INR 20,000 (early) / INR 22,500
                      (regular)
                    </div>
                    <div>
                      <strong>Eligibility:</strong> Ayurveda doctors, students,
                      and wellness professionals.
                    </div>
                    <div>
                      <strong>Expected Outcome:</strong>Practical proficiency in
                      authentic Kerala Panchakarma therapies.
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      ),
    },
  ];
  // const swiperRef = useRef<SwiperType | null>(null);
  const [active, setActive] = useState<string | null>("1");
  const toggleFAQ = (id: string) => {
    setActive(active === id ? null : id);
  };
  return (
    <>
      <section className="pt-[140px]  max-2xl:pt-[100px]   max-xl:pt-[80px]  max-md:pt-[50px]">
        <div className="xxl:w-[70%] w-[60%] m-[auto] max-xxl:w-[85%]     max-mlg:w-[90%] max-w-[120rem]">
          <h2
            className="text-[#304A10] font-[source,serief4] mb-[20px] mt-[0] sm:mt-[0px] text-[60px] leading-[65px] max-2xl:text-[52px]
           leading-[58px] max-xl:text-[46px] max-xl:leading-[50px] max-lg:text-[40px] max-lg:leading-[46px] max-mlg:text-[34px] max-mlg:leading-[40px]   font-normal text-start w-[fit-content] tracking-[-1px] text-center! w-full">
            Annual Course Calendar - 2026
          </h2>
          {/* <p className="text-[16px] leading-[24xpx]  text-[#341802]  mb-[40px]  w-[80%]  max-md:w-[90%] max-sm:w-[100%]">
            Our Ayurveda therapies combine time-honored healing techniques with
            modern clinical expertise. We offer a wide range of treatments
            including Panchakarma, Abhyanga, Elakizhi, Nasyam and Pizhichil.
            Each therapy is customized to your unique health needs, focusing on
            holistic healing for your body, mind and soul.
          </p> */}
          <div className="grid  gap-[30px] max-2xl:gap-[15px] max-lg:gap-[0px]  mt-[60px] max-2xl:mt-[40px] max-mlg:mt-[20px] w-full overflow-hidden">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="group  border-b border-[#bcbcbc]  pb-[30px] max-xxl:pb-[30px]  max-xl:pt-[15px] max-xl:pb-[30px] max-sm:pb-[20px] w-full overflow-hidden">
                <button
                  className="flex justify-between items-center w-full  cursor-pointer gap-[10px]"
                  onClick={() => toggleFAQ(faq.id)}>
                  <p
                    className={`text-[20px] leading-[26px] sm:text-[26px] sm:leading-[32px]  text-left text-[#000] font-medium transition duration-300  group-hover:text-[#304A10] ${active === faq.id ? "text-[#304A10]" : ""
                      }`}>
                    {faq.question}
                  </p>
                  <div
                    className={` p-[5px] md:p-[8px]  flex justify-center items-center rounded-full bg-[#607840] transition-all duration-300  group-hover:bg-[#607840] ${active === faq.id
                        ? ""
                        : "bg-[transparent] border-[#e5e5e3] border-1"
                      }`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30px"
                      height="30px"
                      viewBox="0 0 24 24"
                      className={`transform transition-transform duration-300 max-lg:w-[25px]  max-lg:h-[25px]    ${active === faq.id ? "rotate-90" : ""
                        }`}>
                      <path
                        fill="none"
                        className="group-hover:stroke-[#fff]"
                        stroke={`${active === faq.id ? "#fff" : " #aeaead"}`}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.3"
                        d="m10 17l5-5l-5-5"
                      />
                    </svg>
                  </div>
                </button>
                <div
                  className={`transition-all duration-500 overflow-hidden ${active === faq.id
                      ? "max-h-2000 opacity-100 "
                      : "max-h-0 opacity-0"
                    }`}>
                  {/* <h4 className="text-[24px] leading-[22px] text-[#3a3a3a] mt-[8px]">
                    {faq.answerTitle}
                  </h4> */}
                  <div className="text-[18px] leading-[24px] text-[#434343bf] my-4 w-full font-normal overflow-x-auto overflow-y-hidden scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
                    {active === faq.id ? faq.answer : null}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
