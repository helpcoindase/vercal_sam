"use client";
import { useState } from "react";
// import type { Swiper as SwiperType } from "swiper";
export default function FAQ() {
  const faqs = [
    {
      id: "1",
      question: "What is alopecia?",
      answerTitle: "",
      answer:
        "Alopecia is defined as a condition that causes the loss of a number of hairs on the scalp and also in other areas of the body. In this condition, the hair loss can be patchy, diffuse or completely hairless, depending on the severity of the ailment. The reasons for alopecia-causing hair loss might be due to genetic factors, stress, a hormonal imbalance or autoimmunity. Samwarthika's treatment focuses on stimulating hair growth, improving strength within the follicles and addressing the underlying causes of hair loss.",
    },
    {
      id: "2",
      question: "What is alopecia in Ayurveda?",
      answerTitle: "",
      answer:
        "In Ayurvedic aspects, alopecia is denoted as the imbalance of Pitta and Vata dosha in the natural process that affects the roots of hair. Thus, the treatment highlights cooling of Pitta and nourishing of the scalp so that health can be restored at the roots. The mixture of herbal oils in combination with dietary modifications and purification therapies can help in restoring this balance and starting the process of hair renewal.",
    },
    {
      id: "3",
      question: "Which therapies are there in Samwarthika?",
      answerTitle: "",
      answer:
        "Shirodhara, Abhyanga and Takradhara. Such therapies have efficacy in terms of therapeutic roles, which significantly calm the nervous system, provide relief from anxiety and improve quality sleep, while in support of herbal medicine, a vital part that plays a role in mental health and resilience building.",
    },
    {
      id: "4",
      question: "Would there be any effect of Panchakarma on stress relief?",
      answerTitle: "",
      answer:
        "It has Nasya and Basti therapies, which are great in detoxifying the nervous system from harmful toxins, pacifying the mind and equalizing one's emotions. There are sure reliefs beyond convention that PanchaKarma offers when you have gone through the entire relaxation circuit.",
    },
    {
      id: "5",
      question: "How long does one manage stress for?",
      answerTitle: "",
      answer:
        "The duration of treatment is very individual, depending upon severity. Acute stress generally resolves in a few weeks, while chronic stress may take longer, often several months, before relief is obtained through continued therapy. This individualized recovery and prevention program is based on one's individual level at Samwarthika.",
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
      question: "Will Ayurveda cure insomnia?",
      answerTitle: "",
      answer:
        "Indubitably, insomnia is put to rest with the disquiet of a nervous system and balanced doshas. Herbal medicines, which facilitate alleviation for most patients within a few weeks of treatment, maintain the quality of sleep and brightness.",
    },
    {
      id: "8",
      question: "Does Ayurveda stop the collapse of stress?",
      answerTitle: "",
      answer:
        "Yes, cleansing the body and balancing the doshas will reduce the chances of recurrence. Lifestyle guidance and preventive therapy are the long-term effective armor against stress relapse. They were trained to give safe practice for mental health.",
    },
    {
      id: "9",
      question: "Is stress management for all ages?",
      answerTitle: "",
      answer:
        "Yes, therapies are specific to a particular age and condition of health condition. Extra safety measures are also taken with the gentler treatments so that major healing can occur. Every patient experiences an enhanced quality of life.",
    },
    {
      id: "10",
      question: "Why should one visit Samwarthika for treatment of stress?",
      answerTitle: "",
      answer:
        "Samwarthika is all about authentic Ayurvedic treatment protocols certified by a well-qualified team of doctors. The treatment protocols are customized to the individual patient after considering their unique presentation, symptomatology and root cause of stress. They aim to produce both long-standing relief effects as well as improved mental well-being.",
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
