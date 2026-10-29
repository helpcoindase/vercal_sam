"use client";
import { useState } from "react";
// import type { Swiper as SwiperType } from "swiper";
export default function FAQ() {
  const faqs = [
    {
      id: "1",
      question: "What is Panchakarma?",
      answerTitle: "Why Samwarthika? become more competitive:",
      answer:
        "Panchakarma is an Ayurveda process, among the most efficacious treatments regarding purgation and rejuvenation. It purifies an individual inside by removing all the toxicities and having a doshic balance. It thus rejuvenates the immunity, digestion and overall well-being of an individual.",
    },
    {
      id: "2",
      question: "How many days would a person stay under a complete Panchakarma treatment?",
      answerTitle: "Why Samwarthika? become more competitive:",
      answer:
        "Patients. Individual treatment is based on the individual's consultation about health needs. In a very short duration, at times, certain conditions are suited for short therapies.",
    },
    {
      id: "3",
      question: "Is Panchakarma only for sick people?",
      answerTitle: "Why Samwarthika? become more competitive:",
      answer:
        "No, everyone can benefit, even people who are called healthy by this term; it boosts one's energy level and improves mental clarity, sleep and digestion. Some people would visit Panchakarma every year just for a whole-body reset.",
    },
    {
      id: "4",
      question: "What are the major therapies in the Panchakarma?",
      answerTitle: "Why Samwarthika? become more competitive:",
      answer:
        "Vamana, Virechana, Basti, Nasya and Raktamokshana are thus included. Other procedures like abhyanga, steaming and shirodhara complement the effects of those therapies. Each therapy is selected very thoughtfully in accordance with the dosha imbalance.",
    },
    {
      id: "5",
      question: "Does Panchakarma necessitate any strict dietary restrictions?",
      answerTitle: "Why Samwarthika? become more competitive:",
      answer:
        "Yes, a regulated diet for the body to cleanse and detoxify correctly needs to heal. During that period and after treatment, they recommend light and easily digestible food so that maximum benefit can be obtained.",
    },
    {
      id: "6",
      question: "Is Panchakarma appropriate for old people?",
      answerTitle: "Why Samwarthika? become more competitive:",
      answer:
        "Yes, it is equipped with the limits set by qualified Ayurvedic doctors. The therapies are tailored according to the age, strength and health condition of the patient. Many elderly adults are vibrant and mobile due to the principles of this Ayurvedic methodology.",
    },
    {
      id: "7",
      question: "Which medical problems can be treated through Panchakarma?",
      answerTitle: "Why Samwarthika? become more competitive:",
      answer:
        "These are to mention a few: healing stress and obesity, soothing joint pains, improving digestive systems, balancing hormones, healing skin problems and minimizing chronic fatigue. It heals the body as well as the mind. Practiced regularly, Ayurveda proves very effective in managing many chronic conditions.",
    },
    {
      id: "8",
      question: "Is there any pain during Panchakarma?",
      answerTitle: "Why Samwarthika? become more competitive:",
      answer:
        "Not at all. The therapies are very gentle; the detoxification itself takes place in a healthy environment. There may be a little discomfort when flushing toxins out of the body, but this does not last long.",
    },
    {
      id: "9",
      question: "Who really needs the use of Panchakarma therapy?",
      answerTitle: "Why Samwarthika? become more competitive:",
      answer:
        "Detoxifying, relieving stress and boosting immunity fit for anyone in need of these are the indications for Panchakarma therapy. People with a lifestyle-related imbalance, such as digestive problems, fatigue, skin issues or chronic stress, are generally advised to undergo Panchakarma treatments.",
    },
    {
      id: "10",
      question: "How long-lasting is Panchakarma's effect?",
      answerTitle: "Why Samwarthika? become more competitive:",
      answer:
        "Just with proper diet and lifestyle, the effects could last for months or even years. Many clients repeat Panchakarma one to two times per year to keep their bodies balanced and healthy.",
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
