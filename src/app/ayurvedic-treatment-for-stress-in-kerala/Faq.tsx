"use client";
import { useState } from "react";
// import type { Swiper as SwiperType } from "swiper";
export default function FAQ() {
  const faqs = [
    {
      id: "1",
      question: "What is stress and how does it affect health?",
      answerTitle: "",
      answer:
        "Stress is the response of the body to some physical or emotional pressure. Chronic stress leads to anxiety, insomnia, digestive issues or even weakened immunity. The treatments at Samwarthika are aimed at quietening the mind, balancing hormones and building up resilience, thus speaking of a more holistic approach to the care.",
    },
    {
      id: "2",
      question: "What is the Ayurvedic view of stress?",
      answerTitle: "",
      answer:
        "In Ayurvedic terminology, stress is simply defined as a Vata and Pitta imbalance within the nervous system as well as within the mind itself. Treatments calm the doshas, enhance clarity within the mind and fortify the emotions. Yet again, herbal remedies, meditations and therapy are a holistic possibility.",
    },
    {
      id: "3",
      question: "What therapies are offered at Samwarthika?",
      answerTitle: "",
      answer:
        "Shirodhara, Abhyanga and Takradhara count among the therapies. These therapies can calm an overactive nervous system, destress and even aid sleep, while herbal medicine is also a prominent aspect of mental health support and resilience building.",
    },
    {
      id: "4",
      question: "Does Panchakarma treat stress?",
      answerTitle: "",
      answer:
        "Panchakarma, including Nasya and Basti therapies, will be the best treatment that detoxifies the nervous system from harmful toxins, calms the mind and balances emotions. Pancha Karma also offers a deeper level of relaxation that is more than mere therapeutic intervention.",
    },
    {
      id: "5",
      question: "How long will stress management take?",
      answerTitle: "",
      answer:
        "The time of treatment varies depending on the severity. While acute stress is relieved mostly within a few weeks, chronic stress may well need a few months of continuous therapy. The recovery and prevention program is customized according to one's own level of Samwarthika.",
    },
    {
      id: "6",
      question: "Is Ayurvedic medicine safe to treat stress?",
      answerTitle: "",
      answer:
        "Yes, the prescribed herbal medicine is completely natural and safe. These calming and brain-strengthening herbs are necessarily safe and the dosage is carefully tailored so that the medicine can be used effectively and safely.",
    },
    {
      id: "7",
      question: "Does Ayurveda treat insomnia?",
      answerTitle: "",
      answer:
        "Insomnia is indeed put to rest with the nervous system being calmed and doshas being balanced. The quality of sleep and clarity is maintained by herbal medicines, which help in alleviating the problem for most patients within a few weeks.",
    },
    {
      id: "8",
      question: "Does Ayurveda stop stress from crumbling?",
      answerTitle: "",
      answer:
        "Yes, cleaning the body and balancing the doshas will lower the chances of recurrence. Lifestyle guidance and preventive therapy provide appropriate long-term protection from stress recurrence. They are taught safe practices for mental health.",
    },
    {
      id: "9",
      question: "Is stress management for all age groups?",
      answerTitle: "",
      answer:
        "Yes, treatments are specific to age and health condition. Extra safety measures are put in place to accompany the gentler treatments in order to facilitate major healing. Quality of life is enhanced for all the patients.",
    },
    {
      id: "10",
      question: "Why should a person choose Samwarthika for stress treatment?",
      answerTitle: "",
      answer:
        "Samwarthika emphasizes authentic Ayurvedic treatment protocols certified by a well-qualified group of doctors. The treatment protocols are tailor-made for individuals based on their unique presentation, symptomology and root cause of stress. The aim is to develop long-standing effects of relief along with an improvement in mental well-being.",
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
