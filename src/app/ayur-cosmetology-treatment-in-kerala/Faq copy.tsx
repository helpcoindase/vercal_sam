"use client";
import { useState } from "react";
// import type { Swiper as SwiperType } from "swiper";
export default function FAQ() {
  const faqs = [
    {
      id: "1",
      question: "What is Ayur Cosmetology?",
      answerTitle: "Why Samwarthika? become more competitive:",
      answer:
        "The combination of herbal formulations, traditional treatments and principles of Ayurveda to treat the skin, hair and overall beauty is known as Ayur Cosmetology. This methodology focuses on treating internal cleansing beyond any chemical interventions; it is a natural process.",
    },
    {
      id: "2",
      question: "What skin disorders can be treated with Ayur Cosmetology?",
      answerTitle: "Sciatica Pain Explanation:",
      answer:
        "Problems like acne, pigmentation, dullness, dryness, tanning and premature aging, which concern a few customers, are treated by Ayur Cosmetology; it looks into the internal imbalances first and foremost, then their external manifestations. Thus, skin care is improved naturally and permanently.",
    },
    {
      id: "3",
      question: " Are the products used chemical-free?",
      answerTitle: "Lower Back Pain Causes:",
      answer:
        "Among purely herbal and botanically based preparations, Ayur Cosmology contains all benign, skin-compatible and sensitive formulations, which nourish rather than irritate the skin.",
    },
    {
      id: "4",
      question: "Does Ayur Cosmetology work for falling hair?",
      answerTitle: "Optimization Tips:",
      answer:
        "Yes- through herbal hair packs, treatments for the scalp and dosha-balancing measures. So in time, the lushness and richness with which hair grows come with a period of improvement; circulation is enhanced on the other side, the root strength is increased and dandruff is reduced.",
    },
    {
      id: "5",
      question: "Is an Ayurvedic treatment relevant to all skin types?",
      answerTitle: "Optimization Tips:",
      answer:
        "Surely. There are actually three classifications of skin: that which is Vata, Pitta and Kapha. Accordingly, the treatment is highly individualized, without risking irritation or allergic reactions.",
    },
    {
      id: "6",
      question: "How long does it take to visibly improve?",
      answerTitle: "Optimization Tips:",
      answer:
        "Some patients start improvement after a few sessions, whereas some take this time to achieve it and for others, it depends on the condition. Deep healing rather than mere skin treatment- the Ayurveda way- and thus beauty lasts forever.",
    },

    {
      id: "7",
      question: " Do you have Ayurvedic treatments for anti-aging?",
      answerTitle: "Optimization Tips:",
      answer:
        "Mukhalepam, herbal facials and oil massages are examples of procedures that relieve wrinkles and fine lines. They also stimulate collagen and provide a natural glow to the skin. Anti-aging is achieved holistically and not superficially.",
    }, {
      id: "8",
      question: "Is Ayur Cosmetology Safe for Sensitive Skin?",
      answerTitle: "Optimization Tips:",
      answer:
        "Surely, the herbal ingredients are mild and soothing. The therapies calm the skin and restore harmony. An excellent skin consultation will make sure that every treatment is safe for you.",
    },
    {
      id: "9",
      question: "Is Ayurveda treatment painful for beauty?",
      answerTitle: "Optimization Tips:",
      answer:
        "No, it is rather pleasant and soothing. Unlike laser or chemical peels, no redness or burning is caused, even though results happen side by side with relaxation.",
    },
    {
      id: "10",
      question: "Do Ayurvedic cosmetics increase dark spots or scars?",
      answerTitle: "Optimization Tips:",
      answer:
        "Yes, they use herbal formulations. The methods work by lightening the pigmentation as well as increasing the stimulation of cell regeneration. Fade marks, through regular sessions, change gradually but last longer.",
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
