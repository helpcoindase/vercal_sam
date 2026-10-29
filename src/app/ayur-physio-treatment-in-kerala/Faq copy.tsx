"use client";
import { useState } from "react";
// import type { Swiper as SwiperType } from "swiper";
export default function FAQ() {
  const faqs = [
    {
      id: "1",
      question: "What is Ayurvedic Physiotherapy?",
      answerTitle: "Why Samwarthika? become more competitive:",
      answer:
        "The Ayur Physio method of treatment is combined with modern physiotherapy techniques under an Ayurvedic antibiotic program for holistic medicine. It is a method that involves the treatment of pain, inflammation and mobility and brings balance to the human body. This treatment is best suitable for those who prefer natural recovery without heavy medications.",
    },
    {
      id: "2",
      question: "How is Ayur Physio different from normal physiotherapy?",
      answerTitle: "Sciatica Pain Explanation:",
      answer:
        "Ayur Physio uses herbal oils, Ayurvedic massage, heat treatment, individualized dietary advice and even psychological counseling. These treatment modalities help hasten the healing of tissue damage while reducing inflammation naturally. It addresses not only the symptoms but also the underlying causes.",
    },
    {
      id: "3",
      question: "What are the conditions Ayur Physio aids in treating?",
      answerTitle: "Lower Back Pain Causes:",
      answer:
        "Ayur Physio helps to cure frozen shoulder, sciatica, arthritis, back pain, neck pain, muscle strains and postoperative stiffness. It also helps individuals recover from sports injuries. Treatments help customize themselves according to individual needs.",
    },
    {
      id: "4",
      question: " Are Ayur Physio treatments safe for all ages?",
      answerTitle: "Optimization Tips:",
      answer:
        "There are treatments for all ages in Ayur Physio. Adult, elderly or even teenage therapies will be non-invasive, mild and age, strength and health condition-appropriate. A specialist will make sure every treatment is comfortable and safe.",
    },
    {
      id: "5",
      question: "How many sessions do I have to take to see results?",
      answerTitle: "Optimization Tips:",
      answer:
        "Most patients feel relief in just a few sessions, depending on the condition's severity, while chronic problems might have longer treatment protocols. Continuous follow-ups will ensure long-term benefits.",
    },
    {
      id: "6",
      question: " Does Ayur Physio use herbal oils for treatment?",
      answerTitle: "Optimization Tips:",
      answer:
        "Yes, therapeutic oils are important in deep muscle relaxation, stiffness reduction and blood circulation improvement. The specific oils are chosen according to your body type and condition; they also nourish the joints and tissues.",
    },
    {
      id: "7",
      question: " Can Ayur Physio cure stress pains?",
      answerTitle: "Optimization Tips:",
      answer:
        "Of course, most of these pains originate from stress or muscle tension. Therapies like abhyanga and steam calm down the nervous system by releasing tension, improving overall well-being.",
    },
    {
      id: "8",
      question: " Does Ayur Physio work for sports injuries?",
      answerTitle: "Optimization Tips:",
      answer:
        "Ayur Physio helps sportsmen recover faster by minimizing inflammation and improving the perfection of joint movement. Also naturally strengthens muscles and prevents injury. Ayureh has many of its sports personalities choosing this method for holistic recovery.",
    },
    {
      id: "9",
      question: " Is Ayur Physio only for those with a doctor's prescription?",
      answerTitle: "Optimization Tips:",
      answer:
        "No, there is no need for prescriptions, but a visit with our Ayur Physio specialist assures safe and accurate treatment. There is a personalized therapy plan designed for you.",
    },
    {
      id: "10",
      question: "Can Ayur Physio be given with modern medications?",
      answerTitle: "Optimization Tips:",
      answer:
        "Yes, Ayur Physio works safely along with most modern medications. The aim is to improve recovery and lessen the need for painkillers. Our practitioners guide you throughout the process.",
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
            className="text-[#304A10] font-[source,serief4] mb-[20px] mt-[0] sm:mt-[8px] text-[60px] leading-[65px] max-2xl:text-[52px]   leading-[58px] max-xl:text-[46px] max-xl:leading-[50px] max-lg:text-[40px] max-lg:leading-[46px] max-mlg:text-[34px] max-mlg:leading-[40px]   font-normal text-start w-[fit-content] tracking-[-1px]">
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
                  <p className="text-[20px] leading-[26px] sm:text-[26px] sm:leading-[32px]  text-left text-[#000] font-medium transition duration-300  group-hover:text-[#304A10] text-[#304A10]">
                    {faq.question}
                  </p>
                  <div
                    className={`w-8 h-8 sm:w-10 sm:h-10 min-w-[40px] min-h-[40px] flex justify-center items-center rounded-full bg-[#607840] transition-all duration-300  group-hover:bg-[#607840]  ${active === faq.id
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
                    ? "max-h-96 opacity-100 "
                    : "max-h-0 opacity-0"
                    }`}>
                  {/* <h4 className="text-[24px] leading-[22px] text-[#3a3a3a] mt-[8px]">
                    {faq.answerTitle}
                  </h4> */}
                  <p className="text-[#686868] my-4 text-[16px] leading-[22px] md:text-base font-semibold lg:w-4/5">
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
