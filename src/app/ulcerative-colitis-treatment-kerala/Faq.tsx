"use client";
import { useState } from "react";
// import type { Swiper as SwiperType } from "swiper";
export default function FAQ() {
  const faqs = [
    {
      id: "1",
      question: "What is ulcerative colitis?",
      answerTitle: "Ulcerative Colitis Explanation",
      answer:
        "Ulcerative colitis is an inflammatory bowel disease that is chronic in nature and produces ulcers along with inflammation in the colon’s lining. Some of the common symptoms include abdominal pain, diarrhea, blood, fatigue, etc. At Samwarthika, medicines have also been used to reduce inflammation and heal the lining of the gut and prevent flare-ups through complete treatment.",
    },
    {
      id: "2",
      question: "What is Ayurveda’s perspective on ulcerative colitis?",
      answerTitle: "Ayurvedic Perspective",
      answer:
        "Ayurveda describes ulcerative colitis as the imbalance of the pitta dosha, which leads to internal heat resulting in inflammation and bleeding. Treatments are directed to cool Pitta and to increase digestive power, along with repairing the intestinal lining. Therefore, corrective herbal medicines, dietary adjustments and Panchakarma detoxification contribute to the restoration process.",
    },
    {
      id: "3",
      question: "Which therapies are offered in Samwarthika?",
      answerTitle: "Therapies Offered",
      answer:
        "Among such therapies are the herbal decoction, medicated enema and dietary prescriptions. These include Panchakarma therapies like virechana (purgation) for detoxification of the digestive tract. These treatments will also reduce inflammation, promote proper digestion and facilitate healing.",
    },
    {
      id: "4",
      question: "What will help with ulcerative colitis?",
      answerTitle: "Effective Therapies",
      answer:
        "Yes, the Basti (medicated enema), which is one of the panchakarma therapies, is particularly effective in soothing the colon, reducing inflammation and promoting healing in cases of ulcerative colitis. Compared to symptomatic treatment, Panchakarma provides deeper relief.",
    },
    {
      id: "5",
      question: "What is the duration of the treatment?",
      answerTitle: "Treatment Duration",
      answer:
        "Treatment periods are detoured by severity; acute stages can greatly improve within weeks, while chronic cases can take months and years of continuous therapy. Samwarthika designs individual-specific programs for full recovery and prevention.",
    },
    {
      id: "6",
      question: "Are Ayurvedic medicines safe for ulcerative colitis?",
      answerTitle: "Medicine Safety",
      answer:
        "The herbal remedies prescribed are natural and safe. All these medications contain either anti-inflammatory herbs or gut-healing herbs. The dosages are individualized for safety and effectiveness.",
    },
    {
      id: "7",
      question: "Does Ayurveda cure the bleeding from ulcerative colitis?",
      answerTitle: "Bleeding Reduction",
      answer:
        "Yes, therapies will reduce bleeding by healing the intestinal lining internally, calming the Pitta. The herbal medicines strengthen the digestive organs and promote better absorption. Most patients experience relief after weeks of therapy.",
    },
    {
      id: "8",
      question: "Can herbal medicines stop the recurrence of ulcerative colitis?",
      answerTitle: "Prevention of Recurrence",
      answer:
        "Ayurveda can definitely help prevent recurrences with the detoxification of the body, in addition to bringing balance to the doshas. Lifestyle adaptations, along with preventive therapies, ensure patients' long-term protection. Patients will be educated on safe practices to maintain their gut health.",
    },
    {
      id: "9",
      question: "Is the treatment adapted for all age groups?",
      answerTitle: "Age Suitability",
      answer:
        "Yes, the therapies are modified per age and health condition. These gentle therapies will guarantee the safety feature of effective healing. The focus is on living a better quality of life for all patients.",
    },
    {
      id: "10",
      question: "Why do people prefer Samwarthika treatment for ulcerative colitis?",
      answerTitle: "Why Samwarthika?",
      answer:
        "Samwarthika provides authentic Ayurvedic therapies under the supervision of experienced doctors. Programs are individualized, targeting both symptoms and root causes, with a focus on giving a long-term impact for better digestive health.",
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
