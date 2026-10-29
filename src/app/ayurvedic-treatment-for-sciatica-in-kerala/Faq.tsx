"use client";
import { useState } from "react";
// import type { Swiper as SwiperType } from "swiper";
export default function FAQ() {
  const faqs = [
    {
      id: "1",
      question: "What is sciatica?",
      answer:
        "It is said that sciatica is a condition whereby someone feels pain along the course of the sciatic nerve. The pathology of the sciatic nerves begins in the lower back, crosses over into the hips and then extends down into the legs. Their pressure while exerting force on that nerve or irritation could arise from bulging or herniated disks or injuries to the spine. Treatment consists of alleviation of pain and correction of the condition's underlying cause. The Samwarthika treatment would also include pain alleviation and correction of the underlying cause.",
    },
    {
      id: "2",
      question: "How does Ayurvedic medicine explain sciatica?",
      answer:
        "According to Ayurveda, sciatica is a disorder aggravated by denoting Vata working through the nerves in the lower body. Thus, the treatment emphasizes decreasing Vata, mitigating inflammation and reinforcing the musculature-herbal medicines, oil therapies and detoxification through Panchakarma restore balance and relieve pain.",
    },
    {
      id: "3",
      question: "What treatments does Samwarthika offer for sciatica?",
      answer:
        "Abhyanga (oil massage), Kati basti (a pooling of oil in the lower back), swedana (steam therapy) and many more are offered. These therapies work to reduce stiffness, relax tense muscles and improve circulation. Herbal medicines are used for nerve health and inflammation.",
    },
    {
      id: "4",
      question: "Is Panchakarma useful in sciatica?",
      answer:
        "Yes, it works like a magic wand, as the treatment of Panchakarma Basti is such that all the healing properties are integrated into a medicated enema system, detoxifying the lower body and relieving nerve compression to improve mobility. Therefore, it brings longer-lasting results as compared to just soothing the pain.",
    },
    {
      id: "5",
      question: "How long do treatments for sciatica last?",
      answer:
        "Acute sciatica will last two to four weeks, while chronic sciatica is prolonged. Consistent sessions and lifestyle changes will provide a long-lasting cure. Samwarthika tailors treatments to fit the degree of ailment and the demands of each patient.",
    },
    {
      id: "6",
      question: "Are Ayurvedic medicines safe for sciatica?",
      answer:
        "Yes, the herbal medicines prescribed are natural and safe. These have herbs that have anti-inflammatory properties and strengthen the nerves. The dosage is then individualized based on the safety and efficacy of the treatment.",
    },
    {
      id: "7",
      question: "Does the Ayurvedic therapy help with mobility in sciatica?",
      answer:
        "Definitely, through reducing stiffness, the flexibility of the lower back and legs is improved. As pain reduces and patient mobility increases, they are gradually introduced to yoga and stretching.",
    },
    {
      id: "8",
      question: "Does Ayurveda lessen the chances of getting sciatica again?",
      answer:
        "When considering the reduction of recurrence, Ayurveda can be compared to modern medicine because both approaches ultimately aim to balance the doshas as a preventive measure, taking into account factors such as pain and mild strengthening of postural muscles. Further, preventive measures will hinge on lifestyle changes that ensure long-term remedy and in this regard, patients shall be educated on optimal spinal care practices.",
    },
    {
      id: "9",
      question: "Is treatment for elderly sciatica possible?",
      answer:
        "Yes, the age and health status of the patient shall lead to variations in treatment processes. Therefore, gentle techniques would be used to safely and effectively relieve the pain, especially in terms of independent functions and mobility.",
    },
    {
      id: "10",
      question: "Why is Samwarthika relevant for treating sciatica?",
      answer:
        "Samwarthika follows the traditions of Ayurveda, where only qualified doctors supervise the therapeutic process. The treatment protocol is individualized to specifically relieve symptoms while addressing the root causes to produce lasting improvements in quality of life.",
    },
  ];
  // const swiperRef = useRef<SwiperType | null>(null);
  const [active, setActive] = useState<string | null>("1");
  const toggleFAQ = (id: string) => {
    setActive(active === id ? null : id);
  };
  return (
    <>
      <section className="py-[140px]  max-2xl:py-[100px]   max-xl:py-[80px]  max-md:py-[50px] bg-[#f7f6f2]">
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
