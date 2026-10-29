"use client";
import { useState } from "react";
// import type { Swiper as SwiperType } from "swiper";
export default function FAQ() {
  const faqs = [
    {
      id: "1",
      question: "How is Samwarthika known as the Best Ayurvedic Hospital in Kerala?",
      answerTitle: "",
      answer:
        "Samwarthika has been a well-known Ayurvedic Hospital in Kerala for nearly 25 years. We have a team of qualified, dedicated and specialized physicians, as well as being accredited by NABH. We utilize traditional Ayurvedic Treatment in Kerala, such as (Panchakarma), combined with modern physiotherapy to provide patients with an authentic, successful way to heal from chronic conditions that they have had for prolonged periods of time.",
    },
    {
      id: "2",
      question: "How can Samwarthika benefit me?",
      answerTitle: "Why Samwarthika? become more competitive:",
      answer:
        "Samwarthika uses natural and holistic methods for promoting wellness based on Ayurvedic principles. The emphasis is on restoring balance within the body and mind rather than just treating symptoms. The personalized advice you receive will be customized according to your lifestyle, stress levels and body constitution. We are recognized as the Best Ayurveda Hospital in Kerala. We assist you in increasing your energy, digestion, sleep and emotional stability on a day-to-day basis.",
    },
    {
      id: "3",
      question: 'What does "dosha imbalance" actually feel like?',
      answerTitle: "Sciatica Pain Explanation:",
      answer:
        "A dosha imbalance may be an underlying cause of constant physical or emotional discomfort. This could translate into problems in digestion, fatigue, headaches, irritability, dryness, feelings of heaviness or restlessness. Sleep might be disturbed and mastering stress management may feel harder than usual. Ayurveda sees these signs as early symptoms that the natural balance of such a body requires some support.",
    },
    {
      id: "4",
      question: "Can Ayurveda help with my frequent headaches or stress?",
      answerTitle: "Lower Back Pain Causes:",
      answer:
        "Ayurveda will detect the triggers, like fishing for bad sleep, cheesy eating habits, tension or lifestyle patterns. It utilizes the methods of relaxation, herbs, breathing practices and routine formation to alleviate stress from life. It enhances digestive function, improves sleep quality and balances the nervous system, likely leading to a decrease in headaches. Samwarthika, with the Best Ayurvedic Treatment in Kerala, helps to manage stress and support the essence of meditation and self-pampering.",
    },
    {
      id: "5",
      question: "Why do I keep getting digestive problems?",
      answerTitle: "",
      answer:
        "Ayurveda has put that digestion has to do with agni or digestive fire. So when one gets low and irregular, it will be extremely symptomatic, bringing bloating, acidity, constipation or heaviness. Such symptoms could actually be caused by such things as stress, overeating, wrong food combinations and erratic timing of meals. Indeed, the gut's function might be disrupted due to an imbalance of doshas, envisaging Vata or Pitta, respectively.",
    },
    {
      id: "6",
      question: "Can Ayurveda help with sleep issues?",
      answerTitle: "",
      answer:
        "In Ayurveda, sleep is one of the prime pillars of health; it is commonly associated with the Vata imbalance in that regard. Bedtime rituals and warm, nourishing foods, self-abhyanga massage and herbal aids may all be beneficial. Daylight activities that soothe the mind and reduce stress deepen sleep. Such activities pacify the nervous system in a natural manner.  Being the Best Ayurvedic Hospital in Kerala, we offer a holistic practice to cure sleep issues.",
    },
    {
      id: "7",
      question: "Why does my mind feel restless or anxious?",
      answerTitle: "",
      answer:
        "Restlessness is regarded, in Ayurveda, as an increased Vata quality in nature. Mental overactivity from too much stimulation throws more fuel on the fire. There could be every kind of feeling, from distractibility to unease to anxiety with concentration. Practices including warm foods, breathwork and structure or routine to relax the mind. If anxiety affects daily life, then seeking support from a mental health professional is strongly recommended.",
    },
    {
      id: "8",
      question: "Can Ayurveda help me manage weight naturally?",
      answerTitle: "",
      answer:
        "Ayurveda lays more emphasis on energetics than fasting. The aligned mindful eating and yogic practices, along with the daily routine, will harmonize the hunger and digestion process. This is how lifestyle shifts will save you from cravings and emotional eating. Weight management comes in herbal teas, exercise and sufficient sleep. Samwarthika's approach to personalized Ayurvedic diet plans for each patient makes it the top-tier Ayurvedic Hospital in Kerala.",
    },
    {
      id: "9",
      question: "How do Ayurvedic routines (dinacharya) benefit me?",
      answerTitle: "",
      answer:
        "Daily habits enable the body and mind to feel traditionally stabilized. Such routines stabilize digestion, energy and sleep with regular habits. Oil massage, tongue scraping and timely meals are universal methods promoting good health. It reduces stress while stabilizing and enhancing focus. Dinacharya leads to a gradual accumulation of vitality and immunity over time.",
    },
    {
      id: "10",
      question: " Are Ayurvedic treatments safe for everyone?",
      answerTitle: "",
      answer:
        "Most lifestyle modifications classified as gentle and safe will be individualized. Herbal supplementation should be given with caution as directed by a qualified practitioner due to some conditions or medications prompting caution. Ayurvedic treatments are expected to be individualized for your constitution and health condition. We are an Ayurvedic Hospital in Kerala that emphasizes trust, transparency in our methods and compassionate care.",
    },
    {
      id: "11",
      question: "How long does it take to see changes with Ayurveda?",
      answerTitle: "",
      answer:
        "Acute or very mild conditions may take days or weeks to show improvement, whereas stabilization generally takes place in months. The more profound the imbalance is, the longer it will take for Ayurvedic treatment to resolve it, frequently extending over weeks to months. Meanwhile, human cooperation during diet, routine and stress management is paramount. So, at Samwarthika, we implement patient-centered care and strive to be the Best Ayurvedic center in Kerala.",
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
        <div className="xxl:w-[50%] w-[60%] m-[auto] max-xxl:w-[65%]  max-2xl:w-[70%]  max-lg:w-[75%] max-mlg:w-[90%]">
          <h3
            className="text-[#304A10] font-[source,serief4] mb-[20px] mt-[0] sm:mt-[8px] text-[60px] leading-[65px] max-2xl:text-[52px]
           leading-[58px] max-xl:text-[46px] max-xl:leading-[50px] max-lg:text-[40px] max-lg:leading-[46px] max-mlg:text-[34px] max-mlg:leading-[40px]   font-normal text-start w-[fit-content] tracking-[-1px]">
            Frequently Asked Questions

          </h3>
          <div className="grid  gap-[30px] max-2xl:gap-[15px] max-lg:gap-[0px]  mt-[60px] max-2xl:mt-[40px] max-mlg:mt-[20px]">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="border-b border-[#e8e8e6]  pb-[30px] max-xxl:pb-[30px]  max-xl:pt-[15px] max-xl:pb-[30px] max-sm:pb-[20px]">
                <button aria-label="Button"
                  className="flex justify-between items-center w-full  cursor-pointer gap-[10px]"
                  onClick={() => toggleFAQ(faq.id)}>
                  <p className="text-[20px] leading-[26px] sm:text-[26px] sm:leading-[32px]  text-left text-[#000] font-medium">
                    {faq.question}
                  </p>
                  <div
                    className={`w-8 h-8 sm:w-10 sm:h-10 min-w-[40px] min-h-[40px] flex justify-center items-center rounded-full bg-[#607840] transition-transform duration-300 ${active === faq.id
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
                  <p className="text-[16px] leading-[24px] sm:text-[18px] sm:leading-[24px] text-[#434343bf] my-4 font-semibold w-full sm:w-[90%] md:w-[85%] font-normal">
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
