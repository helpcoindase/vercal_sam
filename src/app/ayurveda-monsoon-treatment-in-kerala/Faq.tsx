"use client";
import { useState } from "react";
// import type { Swiper as SwiperType } from "swiper";
export default function FAQ() {
  const faqs = [
    {
      id: "1",
      question: "What does monsoon treatment in Ayurveda mean?",
      answerTitle: "Meaning of Monsoon Treatment",
      answer:
        "Monsoon treatment means treatment offered during the season to safeguard the health of the individual from problems during the rainy season. According to Ayurveda, monsoons are the time when digestion atrophies and immunity weakens, allowing the body to be open to infections and joint pains. Thus, according to Samwarthika, therapies include purging the body of toxins, enhancing immunity and balancing doshas so as to help individuals withstand season-related problems while being alive overall.",
    },
    {
      id: "2",
      question: "Why is the monsoon considered beneficial for detox?",
      answerTitle: "Monsoon and Detox Benefits",
      answer:
        "The humid conditions during the monsoon season and impaired digestion lead to the accumulation of toxins within the body. This is the season that Ayurveda recommends for Panchakarma and herbal therapies to eliminate impurities from the body. Also, detoxification works best because the system is naturally inclined to cleanse itself at such a time. Samwarthika utilizes this phase of seasonal change to completely rejuvenate its patients.",
    },
    {
      id: "3",
      question: "What types of therapy fall under monsoon treatment?",
      answerTitle: "Therapies in Monsoon Treatment",
      answer:
        "Therapies include all kinds of Panchakarma procedures like Virechana (purgation), Basti (enema) and Nasya (nasal therapy). In addition, herbal steam baths and oil massages, along with decoctions, which are immunity-enhancing, are used in combination with these therapies, promoting an increase in digestion and circulation while augmenting the efficiency of prevention against seasonal diseases.",
    },
    {
      id: "4",
      question: "How did monsoon treatments help in improving immunity?",
      answerTitle: "Immunity Improvement",
      answer:
        "Ayurveda believes that immunity can be strengthened through the improvement of the digestive fire (*Agni*). Herbal medicines, dietary corrections and detox therapies will thus increase resistance to infections. Fewer colds, fevers and allergies will follow the enhancement of immunity. Samwarthika ensures that all programs are tailor-made based on individual needs.",
    },
    {
      id: "5",
      question: "Is monsoon treatment for everyone?",
      answerTitle: "Suitability for All",
      answer:
        "Yes, the therapy is applicable for both normal and diseased states. While most healthy individuals benefit from preventive detoxification, patients suffering from arthritis, asthma, skin diseases, etc., benefit from such therapy during the aggravation of seasons. Therapies are checked according to age and constitution.",
    },
    {
      id: "6",
      question: "How long does monsoon treatment usually last?",
      answerTitle: "Treatment Duration",
      answer:
        "Usually, the program lasts about 7-21 days, depending on selected therapies. Short programs focus on preventive care, whereas chronic conditions are addressed with longer programs. Therefore, the duration of the program supports detoxification and rejuvenation, ensuring a comprehensive approach. During the program, patients are also guided with diet and lifestyle practices.",
    },
    {
      id: "7",
      question: "Is there a dietary recommendation during monsoon treatment?",
      answerTitle: "Dietary Recommendations",
      answer:
        "Yes, there are recommendations for consuming light and digestible food. Avoidance of oily, fried or heavy foods relieves the digestive system from work overload. Herbal teas, soups and seasonal vegetables should be encouraged in such cases. Supportive of therapies, these dietary corrections also enhance immunity.",
    },
    {
      id: "8",
      question: "Can joint pains be cured with monsoon treatment?",
      answerTitle: "Joint Pain Relief",
      answer:
        "Yes, the humidity usually aggravates arthritis and stiff joints. Therapies like Abhyanga (oil massage) and Swedana (steam therapy) soon relieve pain and mobility. Joint health benefits from herbal medicines that operate by reducing inflammation in the joint areas, making monsoon treatment rich for joints.",
    },
    {
      id: "9",
      question: "Can monsoon treatments treat the breathing problems?",
      answerTitle: "Respiratory Benefits",
      answer:
        "Yes, the rains often exacerbate seasonal allergies and asthma. Nasya therapy and herbal inhalations help in clearing respiratory passages as well as strengthening lungs against any form of infection. Preventive care reduces the incidence of respiratory complications. Samwarthika adopts a holistic approach to respiratory health during the monsoon season.",
    },
    {
      id: "10",
      question: "Why choose Samwarthika for monsoon treatment?",
      answerTitle: "Why Samwarthika?",
      answer:
        "Samwarthika delivers authentic Ayurvedic treatment under the guidance of qualified practitioners. Customization adds safety and efficacy to preventive and curative programs. Focusing on the condition means boosting immunity, preventing seasonal ailments and rejuvenating the body for sustained health.",
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
