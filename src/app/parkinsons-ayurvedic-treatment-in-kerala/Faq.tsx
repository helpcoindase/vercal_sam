"use client";
import { useState } from "react";
// import type { Swiper as SwiperType } from "swiper";
export default function FAQ() {
  const faqs = [
    {
      "id": "1",
      "question": "What is Parkinson’s disease?",
      "answerTitle": "Parkinson’s Disease Explanation",
      "answer": "Parkinson’s disease is a progressive neurological disorder that hampers movement, balance and coordination. The symptoms vary among different patients and include tremors, stiffness and slowed movements with difficulty in speech. As such, it can affect one’s daily activities and independence over the years. At Samwarthika, treatment aims to halt progression. It focuses on increasing mobility, along with enhancing one’s quality of life through holistic care."
    },
    {
      "id": "2",
      "question": "What is Ayurveda's view of Parkinsonism?",
      "answerTitle": "Ayurvedic View of Parkinsonism",
      "answer": "Parkinson’s is correlated with Ayurveda to a vitiated Vata dosha affecting the nervous system. Calm Vata is therapeutic, as it strengthens the nerves and enhances their function. Herbal medicines, oil therapies and modifications to diets are other tremendous means of maintaining this balance."
    },
    {
      "id": "3",
      "question": "What therapies are found at Samwarthika for Parkinson’s?",
      "answerTitle": "Therapies for Parkinson’s at Samwarthika",
      "answer": "Therapies include Abhyanga (oil massage), Shirodhara (oil pouring on the forehead) and tension, while calming the nervous system. Herbal formulations support brain health and reduce tremors. They also provide yoga and breathing practices for intuitive control."
    },
    {
      "id": "4",
      "question": "Can Panchakarma be helpful for Parkinson's patients?",
      "answerTitle": "Panchakarma for Parkinson’s",
      "answer": "Yes, the texts of Basti (medicated enema) and Nasya (nasal therapy) related to Panchakarma are significantly beneficial. They help detoxify the nervous system, reduce stiffness and improve coordination. Panchakarma, however, heals deeper and makes symptoms easier to endure in the long term."
    },
    {
      "id": "5",
      "question": "How long will the treatment be?",
      "answerTitle": "Treatment Duration",
      "answer": "Care has to continue for Parkinson's. There may be some initial signs of improvement in mobility and energy in a few weeks. Consistent therapy is needed for sustained results. Samwarthika creates long-term development programs for each patient."
    },
    {
      "id": "6",
      "question": "Are Ayurvedic medicines safe for patients with Parkinson's disease?",
      "answerTitle": "Safety of Ayurvedic Medicines",
      "answer": "Yes, herbal medicines prescribed for this problem are all-natural and safe under the supervision of doctors. It includes neuroprotective herbs that would thus support brain functioning and lessen tremors. Dosages given will also be well-structured and followed so as to ensure safety and efficacy."
    },
    {
      "id": "7",
      "question": "Does Ayurveda offer a solution to tremors and stiffness?",
      "answerTitle": "Solution for Tremors and Stiffness",
      "answer": "Yes, therapies such as Abhyanga and Shirodhara would have some wisdom in decreasing stiffness and calming tremors. Herbal medicines are given to strengthen the nerves and improve coordination. It was also noted that with continuous treatment, most patients would present improved mobility and less discomfort."
    },
    {
      "id": "8",
      "question": "Will Ayurveda benefit mental health in Parkinson's disease?",
      "answerTitle": "Mental Health Benefits",
      "answer": "Yes, therapies calm anxiety, depression and sleep disturbances often associated with Parkinson's. Shirodhara and meditation practices improve mental clarity and emotional balance. This holistic approach supports both physical and mental well-being."
    },
    {
      "id": "9",
      "question": "Will treatment be suited to aged people?",
      "answerTitle": "Suitability for Seniors",
      "answer": "Yes, the therapies undergo proper adaptation based on the patient's age and health condition. It is safe, as gentle detoxification and supportive therapies are safe for seniors. The primary concerns are independence and quality of life."
    },
    {
      "id": "10",
      "question": "Why did Shaam choose Samwarthika for care regarding Parkinsonism?",
      "answerTitle": "Why Samwarthika?",
      "answer": "Samwarthika offers care that uniquely combines Ayurveda with modern support systems. Experienced doctors design personalized and informative programs that address both symptoms and the overall wellness concept. Therefore, the aim is to enhance mobility, freedom and long-term quality of life."
    }
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
