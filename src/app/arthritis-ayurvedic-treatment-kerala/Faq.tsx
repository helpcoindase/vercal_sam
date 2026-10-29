"use client";
import { useState } from "react";
// import type { Swiper as SwiperType } from "swiper";
export default function FAQ() {
  const faqs = [
    {
      id: "1",
      question: "What is the definition of arthritis?",
      answerTitle: "",
      answer:
        "The basic definition of arthritis is joint inflammation characterized by pain, stiffness and inability to move. It mainly concerns osteoarthritis and rheumatoid arthritis. Samwarthika aims to reduce inflammation, strengthen the joints and restore mobility through holistic means.",
    },
    {
      id: "2",
      question: "How is arthritis understood in Ayurveda?",
      answerTitle: "",
      answer:
        "In Ayurveda, arthritis is the imbalance of Vata, causing degeneration and stiffness or of Kapha, causing swelling. For an imbalance, treatment seeks to alleviate inflammation and nourish the joints. The methods to achieve balance would include herbal treatments, oil therapies and detox programs like Panchakarma.",
    },
    {
      id: "3",
      question: "What therapies are available at Samwarthika?",
      answerTitle: "",
      answer:
        "Oil massage, which specifically targets the knees through Janu Basti and Swedana, a steam therapy, are among the therapies offered at Samwarthika. These treatments improve joint strength and increase blood circulation while calming the pain. Alongside, herbal interventions help in maintaining the cartilage by decreasing inflammation.",
    },
    {
      id: "4",
      question: "Is Panchakarma effective in arthritis?",
      answerTitle: "",
      answer:
        "Yes! Panchakarma is the most effective for arthritis, especially Basti. Detoxifying the body, relaxing stiffness, promoting mobility and ultimately achieving a sustainable cure are only some advantages this therapy offers on top of mere pain relief with drugs.",
    },
    {
      id: "5",
      question: "For how long does one get treated for arthritis?",
      answerTitle: "",
      answer:
        "Acute cases can be treated with therapy over a few weeks, while chronic cases may need prolonged treatment. Thus, sustaining treatment and modifying lifestyle can ease symptoms in the long run. Samwarthika customizes programs based on severity and the patient's desire.",
    },
    {
      id: "6",
      question: "Are the Ayurvedic drugs used in arthritis secure?",
      answerTitle: "",
      answer:
        "Yes, prescribed herbal medicines are completely natural and safe. Their action is anti-inflammatory and supportive for the joints. The customization based on the patient's needs guarantees the safety and efficacy of these preparations.",
    },
    {
      id: "7",
      question: "Will Ayurveda enhance arthritic mobility?",
      answerTitle: "",
      answer:
        "Yes, with stiffness being reduced and flexibility being improved, therapies along the lines of arthritis will be in place. In most cases, pain or not, they feel liberation from treatment more than loss. Yoga and simple stretching routines would be recommended, too.",
    },
    {
      id: "8",
      question: "Will the Ayurvedic treatment eradicate arthritis pain?",
      answerTitle: "",
      answer:
        "Yes, by correcting posture, stabilizing muscles and balancing aggravators, recurrences will be inhibited. We will extend lifestyle instructions and preventive measures to further ease the condition. Safe measures will be taught to the patients to preserve their joints.",
    },
    {
      id: "9",
      question: "Are the arthritis treatments applicable to the older age group?",
      answerTitle: "",
      answer:
        "Yes, depending on their age and clinical status, treatments are modified to correlate with them. Gentle treatment proves to be safe for pain relief and has priority given to enhancing independence and mobility.",
    },
    {
      id: "10",
      question: "Why should one choose Samwarthika for arthritis treatments?",
      answerTitle: "",
      answer:
        "Always confirm these treatments with the knowledgeable doctors of Samwarthika, who are well-versed in every aspect of Ayurveda. The treatment protocol will be developed as per individual needs, targeting alleviating the symptoms and addressing the root cause for long-term relief, which can restore a life with better quality.",
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
                    className={`w-8 h-8 min-w-[40px]  min-h-[40px] sm:w-10 sm:h-10  flex justify-center items-center rounded-full bg-[#607840] transition-all duration-300  group-hover:bg-[#607840] ${active === faq.id
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
