"use client";
import { useState } from "react";
// import type { Swiper as SwiperType } from "swiper";
export default function FAQ() {
  const faqs = [
    {
      id: "1",
      question: "What is psoriasis?",
      answerTitle: "Psoriasis Explanation",
      answer:
        "Psoriasis is a chronic skin disorder that has red scales and patches, which may itch or hurt. It arises from an abnormal process where skin cells multiply faster than normal and it is an autoimmune disease. The treatment in Samwarthika is balanced to see that inflammation is reduced, detoxification of the body takes place and skincare is improved in a healthy way.",
    },
    {
      id: "2",
      question: "How does Ayurveda view psoriasis?",
      answerTitle: "Ayurvedic View",
      answer:
        "An imbalance of Vata and Kapha takes place in the body, leading to toxin accumulation in the skin due to psoriatic action. Their purification involves blood purification, balancing the doshas and augmenting the immunity level in the body. Panchakarma detoxification, herbal medicine and dietary corrections are the grounds on which balance is restored.",
    },
    {
      id: "3",
      question: "What are the therapies offered at Samwarthika in treating psoriasis?",
      answerTitle: "Therapies Offered",
      answer:
        "The treatments will consist of Abhyanga (oil massage), Takradhara (pouring buttermilk on the forehead) and detoxification under Panchakarma. The treatments thus reduce inflammation, quiet down the mind and improve the quality of the skin. Immunity is further enhanced and relapse is supported with herbal medicines.",
    },
    {
      id: "4",
      question: "Will Panchakarma help treat psoriasis?",
      answerTitle: "Panchakarma Benefits",
      answer:
        "Yes, the therapies purify the body from toxins, reduce inflammation and improve the skin's condition. Panchakarma treatment has proven to be deeper than the effect that can be given by topical treatment alone.",
    },
    {
      id: "5",
      question: "How long will it take to treat psoriasis?",
      answerTitle: "Treatment Duration",
      answer:
        "Worst cases can take several months of constant therapy to improve, while minor cases may take only weeks, as most minor cases effectively respond to treatment. Personalizing programming at Samwarthika ensures that individuals fully recover and avoid relapsing.",
    },
    {
      id: "6",
      question: "Are Ayurvedic medicines safe for psoriasis?",
      answerTitle: "Medicine Safety",
      answer:
        "Yes, the herbal medicine prescribed is natural and safe. These contain anti-inflammatory and blood-purifying herbs and the doses are individualized for safety and effectiveness.",
    },
    {
      id: "7",
      question: "Does Ayurveda treat itching and discomfort?",
      answerTitle: "Itching & Discomfort Relief",
      answer:
        "Yes, it relieves itching, redness and discomfort by reducing inflammation. Herbal medicines strengthen immune protection and improve the structure of the skin. Most patients report relief within a few weeks of starting treatment.",
    },
    {
      id: "8",
      question: "Can Ayurveda stop the recurrence of psoriasis?",
      answerTitle: "Recurrence Prevention",
      answer:
        "Yes, Ayurveda helps control recurrence by detoxifying the body and balancing the doshas. Lifestyle education and preventive therapies provide long-term protection. Patients are trained in the proper, safe use of what they have learned.",
    },
    {
      id: "9",
      question: "Is psoriasis treatment suitable for all ages?",
      answerTitle: "Age Suitability",
      answer:
        "Yes, changes in therapy are made according to age and health condition. The treatments are safe and help improve quality of life for all patients.",
    },
    {
      id: "10",
      question: "Why is Samwarthika a cure for psoriasis?",
      answerTitle: "Why Samwarthika?",
      answer:
        "It offers authentic Ayurvedic therapy supervised by learned doctors. Programs are tailored to meet individual needs based on symptoms and root causes. The focus is on providing long-term relief and improved skin health.",
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
