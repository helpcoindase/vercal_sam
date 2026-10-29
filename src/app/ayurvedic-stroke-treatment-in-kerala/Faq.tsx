"use client";
import { useState } from "react";
// import type { Swiper as SwiperType } from "swiper";
export default function FAQ() {
  const faqs = [

    {
      "id": "1",
      "question": "What exactly is called a stroke?",
      "answer": "Interruption of blood to the brain due to a clot or hemorrhage and resultant symptoms will be sudden weakness, paralysis, speech difficulty and loss of coordination. Early intervention and rehabilitation determine the outcome. The treatment at Samwarthika focuses on the restoration of function, prevention of repeats and support for long-term recovery."
    },
    {
      "id": "2",
      "question": "How does Ayurveda define stroke?",
      "answer": "Stroke is a result of Vata imbalance, causing neurological disorders and the treatment is directed toward correcting circulation channels, enhancing nerve strength and improving mobility. Treatments involve herbal medicines and Panchakarma therapy, along with rehabilitation practices that help classic recovery. Their goal is a slow but progressive improvement and prevention of future episodes."
    },
    {
      "id": "3",
      "question": "Which therapies are included in Samwarthika for stroke?",
      "answer": "Therapies available at the center include Abhyanga (oil massage), Shirodhara (oil pouring on the forehead) and Basti (medicated enema). These treatments improve circulation and have a relaxing effect on muscles and an easing effect on the nervous system. These herbal medicines promote brain health and physiotherapy and yoga have demonstrated efficacy in enhancing mobility."
    },
    {
      "id": "4",
      "question": "Can Panchakarma improve cases of stroke?",
      "answer": "Yes, Basti and Nasya are results-oriented Panchakarma tests that perform perfect cleansing of the nervous system, as well as relieving stiffness and improving coordination. So, Panchakarma can provide one with healing at a much deeper level in comparison to symptomatic rehabilitation-ideal for future recovery."
    },
    {
      "id": "5",
      "question": "How long will it take for recovery after a stroke?",
      "answer": "The severity of a stroke will affect the time taken for recovery. Improvement is most noticeable within the first weeks of treatment; however, months of treatment often follow before any complete recovery is made. Programs from Samwarthika are tailored to suit the client and more adjustments are made as the patient progresses."
    },
    {
      "id": "6",
      "question": "Should stroke patients take Ayurvedic medicine?",
      "answer": "Herbal medicine is not given when a doctor is present because it lacks neuroprotective herbs that care for the brain and circulation. A well-calibrated dosage is important in ensuring safety as well as effectiveness, irrespective of natural remedies."
    },
    {
      "id": "7",
      "question": "Is Ayurvedic medicine effective for paralysis generated from a stroke?",
      "answer": "Yes, Abhyanga and physiotherapy therapies aid muscle conditions and encourage movement. Herbal medicines help nerve strengthening as well as recovery. A very gradual improvement in independent mobility is noticed in patients under constant care."
    },
    {
      "id": "8",
      "question": "Does Ayurveda work in stroke prevention or the prevention of recurrence?",
      "answer": "Ayurveda aims to prevent some future recurrences by focusing on improved circulation, efficient dosha balancing and strengthening immunity. Patients are also advised about safe ways of handling health. Recommendations for living standards for long-term keeping are made to ensure safety against threats."
    },
    {
      "id": "9",
      "question": "Can treatment of stroke be given to aged patients?",
      "answer": "All therapies were administered according to age, along with the health conditions. All treatments were mild and, therefore, completely safe while achieving rehabilitation. It is aimed towards improving independence along with quality of life."
    },
    {
      "id": "10",
      "question": "Why choose Samwarthika for stroke care?",
      "answer": "Samwarthika offers a comprehensive system of care that fuses Ayurveda with modern rehabilitation. Most personal treatment plans, all designed by experienced physicians, could target symptom management, as well as overall well-being. Enhanced mobility, independence and quality of life, in the long term, are the ultimate goals."
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
