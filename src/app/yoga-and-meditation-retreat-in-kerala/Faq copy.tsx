"use client";
import { useState } from "react";
// import type { Swiper as SwiperType } from "swiper";
export default function FAQ() {
  const faqs = [
    {
      id: "1",
      question: "How are yoga and meditation integrated into Ayurveda?",
      answerTitle: "Why Samwarthika? become more competitive:",
      answer:
        "Yoga and meditation are viewed by Ayurveda as the key techniques for a balanced mind and body, better digestion and immunity and emotional balance and they offer a full physical and mental health package.",
    },
    {
      id: "2",
      question: "Which ailments do yoga and meditation ameliorate?",
      answerTitle: "Why Samwarthika? become more competitive:",
      answer:
        "They give relief for anxiety, stress, back pain, hormonal imbalance, insomnia or digestive problems. Additionally, daily practice helps improve one's flexibility and strength, as well as mental clarity. Ayurveda advises such exercises for supporting a daily lifestyle.",
    },
    {
      id: "3",
      question: "Is experience of any sort necessary to join?",
      answerTitle: "Why Samwarthika? become more competitive:",
      answer:
        "Absolutely not. Anyone can easily start at any time- whether they are a beginner, a senior or a person with health conditions. Trained instructors are guiding him through the practice, making it comfortable and possible for him.",
    },
    {
      id: "4",
      question: "Is meditation essential in Ayurvedic wellness?",
      answerTitle: "Why Samwarthika? become more competitive:",
      answer:
        "It definitely does, in the sense that it calms the mind, lowers stress hormones and boosts mental endurance. Ayurveda makes it mandatory for the doshas to be in balance. Even a mere 10-15 minutes daily can create such a difference.",
    },
    {
      id: "5",
      question: "Are Ayurvedic yoga sessions safe for people who have pain?",
      answerTitle: "Why Samwarthika? become more competitive:",
      answer:
        "Yes, Ayurvedic yoga makes sure that none of its practices puts unnecessary strain on the practitioner. It also encourages gentle, mindful exploration of the body, which explains how adaptable it is to injuries or chronic pain conditions and hence safe and therapeutic.",
    },
    {
      id: "6",
      question: "How, according to Ayurveda, would yoga enhance one's digestion?",
      answerTitle: "Why Samwarthika? become more competitive:",
      answer:
        "Specific yoga postures stimulate agni (the fire of digestion) and eliminate toxins. Breathing exercises help pacify the digestive system. All these improve metabolism and gut health.",
    },
    {
      id: "7",
      question: "Could it also help with weight loss when combined with yoga and meditation?",
      answerTitle: "Why Samwarthika? become more competitive:",
      answer:
        "They complement each other to help metabolism, reduce stress eating and balance hormones while toning the body. Better results are achieved when complementing the ayurvedic dietary advice, which sustains the results over time.",
    },
    {
      id: "8",
      question: "How long before I start noticing changes in my health?",
      answerTitle: "Why Samwarthika? become more competitive:",
      answer:
        "In a few weeks, most people will notice better sleep, reduced levels of stress and improved flexibility. Long-term benefits build slowly over consistent practice. Ayurveda advocates for such slow but steady progress.",
    },
    {
      id: "9",
      question: "Is that part of Ayurvedic yoga?",
      answerTitle: "Why Samwarthika? become more competitive:",
      answer:
        "It forms a core part of Ayurvedic wellness by enhancing lung capacity, clearing the mind and energizing flow. Continuous daily practice will give one emotional stability.",
    },
    {
      id: "10",
      question: "Do yoga and meditation complement Panchakarma?",
      answerTitle: "Why Samwarthika? become more competitive:",
      answer:
        "These complement detox, pacify and heal the body faster. This mixed therapy will have the most therapeutic advantage for the organism.",
    }

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
                  <p className="text-[20px] leading-[26px] sm:text-[26px] sm:leading-[32px]  text-left text-[#000] font-medium transition duration-300  group-hover:text-[#304A10] text-[#304A10] text-start">
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
