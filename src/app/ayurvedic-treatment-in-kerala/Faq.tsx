"use client";
import { useState } from "react";
// import type { Swiper as SwiperType } from "swiper";
export default function FAQ() {
  const faqs = [
    {
      id: "1",
      question: "What is Ayurveda? ",
      answerTitle: "About Ayurveda",
      answer:
        "Ayurveda is a holistic system of medicine from India that is about 5,000 years old. It promotes the balance of body and mind, spirit, etc. Natural medicine, for example, diet and lifestyle practices, prevents diseases and enhances longevity.",
    },
    {
      id: "2",
      question: "What does Ayurveda understand as health and disease?    ",
      answerTitle: "Health and Disease in Ayurveda",
      answer:
        "Health is a state of equilibrium of three doshas (i.e., Vata, Pitta and Kapha), Agni (digestive fire), Dhatus (tissues) and Malas (waste elimination). Disequilibrium arises from improper diet, stress and environmental factors.",
    },
    {
      id: "3",
      question: "What are the three doshas? ",
      answerTitle: "Three Doshas",
      answer: (
        <>
          <ul className="mt-[10px]">
            <li className="my-[5px] text-[16px] leading-[26px] grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto] gap-[10px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25px"
                height="25px"
                className="mt-[3px]"
                viewBox="0 0 24 24">
                <path
                  fill="none"
                  stroke="#434343bf"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m10 17l5-5l-5-5"></path>
              </svg>{" "}
              Vata, the first dosha, regulates movement, circulation and the
              nervous system.
            </li>
            <li className="my-[5px] text-[16px] leading-[26px] grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto] gap-[10px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25px"
                height="25px"
                className="mt-[3px]"
                viewBox="0 0 24 24">
                <path
                  fill="none"
                  stroke="#434343bf"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m10 17l5-5l-5-5"></path>
              </svg>{" "}
              Pitta is the heat that rules metabolism and digestion.
            </li>
            <li className="my-[5px] text-[16px] leading-[26px] grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto] gap-[10px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25px"
                height="25px"
                className="mt-[3px]"
                viewBox="0 0 24 24">
                <path
                  fill="none"
                  stroke="#434343bf"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m10 17l5-5l-5-5"></path>
              </svg>{" "}
              Kapha provides shape, lubrication and immunity.
            </li>
            <li className="my-[5px] text-[16px] leading-[26px] grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto] gap-[10px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25px"
                height="25px"
                className="mt-[3px]"
                viewBox="0 0 24 24">
                <path
                  fill="none"
                  stroke="#434343bf"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m10 17l5-5l-5-5"></path>
              </svg>{" "}
              Every individual carries his/her unique constitution based on
              these doshas, called a Prakriti.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "4",
      question: "How is a diagnosis made in Ayurveda? ",
      answerTitle: "Diagnosis in Ayurveda",
      answer:
        "One can analyze an imbalance in one's body through Ayurveda pulse reading, tongue examination, physical observation and lifestyle analysis.\nPitta is the heat in metabolic processes and digestion. \nKapha gives structure, lubrication and immunity. \nEvery person has a different constitution according to these doshas, called Prakriti.",
    },
    {
      id: "5",
      question: "How does Ayurveda diagnose? ",
      answerTitle: "Ayurvedic Diagnostic Methods",
      answer:
        "Ayurvedic medics can analyze balance through pulse reading, tongue examination, physical examination and lifestyle examination. The approach to diagnosis is holistic, considering both physical and emotional states.",
    },
    {
      id: "6",
      question: "What treatments are used in Ayurveda?  ",
      answerTitle: "Ayurvedic Treatments",
      answer:
        "Ayurveda considers the following treatments: herbal medicines, dietary changes, detox therapies, yoga, meditation and Panchakarma. Ayurvedic therapy is aimed at restoring the balance rather than suppressing the symptoms.",
    },
    {
      id: "7",
      question: "Can Ayurveda help with chronic conditions? ",
      answerTitle: "Ayurveda for Chronic Conditions",
      answer:
        "Yes. Lifestyle-related disorders like diabetes, hypertension, arthritis, digestive problems and stress-related disorders respond to Ayurvedic treatment. Ayurveda treats the root causes rather than just the symptoms.",
    },
    {
      id: "8",
      question: "Is Ayurveda safe? ",
      answerTitle: "Safety of Ayurveda",
      answer:
        "It is safe whenever practiced under qualified supervision. While most treatments are natural, it's important to understand their actions and potential interactions with modern medicines before combining them.",
    },
    {
      id: "9",
      question: "Is mental health supported by Ayurveda? ",
      answerTitle: "Ayurveda for Mental Health",
      answer:
        "Meditation, pranayama practices and herbs like ashwagandha and brahmi, which reduce anxiety, enhance focus and stabilize mood. Thus, Ayurveda sees the body and mind as intertwined.",
    },
    {
      id: "10",
      question: "Can Ayurveda be integrated with modern medicine? ",
      answerTitle: "Integration with Modern Medicine",
      answer:
        "Yes, Ayurveda can enhance modern treatment, particularly for chronic conditions. Safety must be assured through the cooperation of both Ayurvedic and allopathic practitioners.",
    },
    {
      id: "11",
      question: "Why Ayurveda in Samwarthika? ",
      answerTitle: "Why Samwarthika?",
      answer:
        "Samwarthika has programs in customized Ayurvedic treatment by fusing ancient wisdom with modern practices of wellness. Each patient is thoroughly assessed and thus he/she get customized therapy, diet and lifestyle counseling for sustainable health.",
    },
  ];
  // const swiperRef = useRef<SwiperType | null>(null);
  const [active, setActive] = useState<string | null>("1");
  const toggleFAQ = (id: string) => {
    setActive(active === id ? null : id);
  };
  return (
    <>
      <section className="py-[70px]   max-xl:py-[60px]  max-md:py-[40px] bg-[#f7f6f2]">
        <div className="xxl:w-[50%] w-[60%] m-[auto] max-xxl:w-[65%]  max-2xl:w-[70%]  max-lg:w-[75%] max-mlg:w-[90%] max-w-[120rem]">
          <h3
            className="text-[#304A10] font-[source,serief4] mb-[20px] mt-[0] sm:mt-[8px] text-[60px] leading-[65px] max-2xl:text-[52px]
           leading-[58px] max-xl:text-[46px] max-xl:leading-[50px] max-lg:text-[40px] max-lg:leading-[46px] max-mlg:text-[34px] max-mlg:leading-[40px]   font-normal text-start w-[fit-content] tracking-[-1px]">
            Frequently Asked Questions
          </h3>
          {/* <p className="text-[16px] leading-[24xpx]  text-[#341802]  mb-[40px]  w-[80%]  max-md:w-[90%] max-sm:w-[100%]">
            Our Ayurveda therapies combine time-honored healing techniques with
            modern clinical expertise. We offer a wide range of treatments
            including Panchakarma, Abhyanga, Elakizhi, Nasyam and Pizhichil.
            Each therapy is customized to your unique health needs, focusing on
            holistic healing for your body, mind and soul.
          </p> */}
          <div className="grid  gap-[30px] max-2xl:gap-[15px] max-lg:gap-[0px]  mt-[60px] max-2xl:mt-[40px] max-mlg:mt-[20px]">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="group  border-b border-[#bcbcbc]  pb-[30px] max-xxl:pb-[30px]  max-xl:pt-[15px] max-xl:pb-[30px] max-sm:pb-[20px]">
                <button
                  className="flex justify-between items-center w-full  cursor-pointer gap-[10px]"
                  onClick={() => toggleFAQ(faq.id)}>
                  <p
                    className={`text-[20px] leading-[26px] sm:text-[26px] sm:leading-[32px]  text-left text-[#000] font-medium transition duration-300  group-hover:text-[#304A10] ${active === faq.id ? "text-[#304A10]" : ""
                      }`}>
                    {faq.question}
                  </p>
                  <div
                    className={`w-8 h-8 sm:w-10 sm:h-10 min-w-[40px] min-h-[40px] flex justify-center items-center rounded-full bg-[#607840] transition-all duration-300  group-hover:bg-[#607840] ${active === faq.id
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
                      ? "max-h-96 opacity-100 "
                      : "max-h-0 opacity-0"
                    }`}>
                  {/* <h4 className="text-[24px] leading-[22px] text-[#3a3a3a] mt-[8px]">
                    {faq.answerTitle}
                  </h4> */}
                  <div className="text-[16px] leading-[24px] sm:text-[18px] sm:leading-[24px] text-[#434343bf] my-4 font-semibold w-full sm:w-[90%] md:w-[85%] font-normal">
                    {faq.answer}
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
