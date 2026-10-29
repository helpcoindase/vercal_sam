"use client";
import { useState } from "react";
// import type { Swiper as SwiperType } from "swiper";
export default function FAQ() {
  const faqs = [
    {
      id: "1",
      question: "What is the Panchakarma ?",
      answerTitle: "Why Samwarthika? become more competitive:",
      answer:
        "Seamless data flow between machines and enterprise systems unify the entire manufacturing process.",
    },
    {
      id: "2",
      question: "What is Sciatica Pain ?",
      answerTitle: "Sciatica Pain Explanation:",
      answer:
        "Sciatica pain radiates along the sciatic nerve, affecting the lower back through the hips and down each leg.",
    },
    {
      id: "3",
      question: "What is Lower Back Pain ?",
      answerTitle: "Lower Back Pain Causes:",
      answer:
        "Lower back pain can be caused by muscle strain, poor posture, injury orunderlying medical conditions.",
    },
    
  ];
  // const swiperRef = useRef<SwiperType | null>(null);
  const [active, setActive] = useState<string | null>("1");
  const toggleFAQ = (id: string) => {
    setActive(active === id ? null : id);
  };
  return (
    <>
      <section className="py-[100px] bg-[#f7f6f2]">
        <div className="w-[60%] m-[auto] max-xxl:w-[65%]  max-2xl:w-[70%]  max-lg:w-[75%] max-mlg:w-[90%]">
          <h3
            className="m-auto text-[#304A10] font-[source,serief4] mb-[20px] mt-[8px] text-[60px] leading-[65px] max-2xl:text-[52px]
           leading-[58px] max-xl:text-[46px] max-xl:leading-[50px] max-lg:text-[40px] max-lg:leading-[46px] max-mlg:text-[38px] max-mlg:leading-[42px] font-normal   text-center w-[fit-content]">
            Frequently Asked Questions
          </h3>
          <div className="grid  gap-[30px] max-2xl:gap-[15px] max-lg:gap-[0px]  mt-[60px] max-2xl:mt-[40px] max-mlg:mt-[20px]">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="border-b border-[#e8e8e6]  pb-[50px] max-xxl:pb-[40px]  max-xl:py-[30px]">
                <button
                  className="flex justify-between items-center w-full  cursor-pointer gap-[10px]"
                  onClick={() => toggleFAQ(faq.id)}>
                  <h3 className="text-[20px] leading-[26px] sm:text-[26px] sm:leading-[32px]  text-left text-[#000] font-medium transition duration-300  group-hover:text-[#304A10] text-[#304A10]">
                    {faq.question}
                  </h3>
                  <div
                    className={`w-8 h-8 sm:w-10 sm:h-10 min-w-[40px] min-h-[40px] flex justify-center items-center rounded-full bg-[#607840] transition-all duration-300  group-hover:bg-[#607840]  ${
                      active === faq.id
                        ? ""
                        : "bg-[transparent] border-[#e5e5e3] border-1"
                    }`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30px"
                      height="30px"
                      viewBox="0 0 24 24"
                      className={`transform transition-transform duration-300 max-lg:w-[25px]  max-lg:h-[25px]    ${
                        active === faq.id ? "rotate-90" : ""
                      }`}>
                      <path
                        fill="none"
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
                  className={`transition-all duration-500 overflow-hidden ${
                    active === faq.id
                      ? "max-h-96 opacity-100 "
                      : "max-h-0 opacity-0"
                  }`}>
                  {/* <h4 className="text-[24px] leading-[22px] text-[#3a3a3a] mt-[8px]">
                    {faq.answerTitle}
                  </h4> */}
                  <p className="text-[#686868] my-4 text-[16px] md:text-base font-semibold md:w-3/5">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
