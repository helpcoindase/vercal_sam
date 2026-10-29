"use client";
import { useState } from "react";
// import type { Swiper as SwiperType } from "swiper";
export default function FAQ() {
  const faqs = [
    {
      "id": "1",
      "question": "What is a varicosity ulcer?",
      "answer": "Varicose ulcers develop close to varicose veins, mostly on the legs, due to poor circulation and increased pressure in the veins. The symptoms flare up due to pain and swelling, with a slow healing process. Treatment at Samwarthika aims to improve circulation, heal the ulcer and prevent the occurrence of varicose ulceration."
    },
    {
      "id": "2",
      "question": "How does Ayurveda characterize varicose ulcers?",
      "answer": "Ayurveda explains varicose ulcers as a Kapha-Vata disorder, causing poor circulation. The treatment deals with reduced swelling, improved blood flow and wound healing by restoring the balance with the help of herbs, oil therapies and corrections in diet."
    },
    {
      "id": "3",
      "question": "Which treatments for varicosity ulcer are practiced at Samwarthika?",
      "answer": "These treatments include application of local herbal paste, medicated oil massage and detoxification through Panchakarma. These treatments helped reduce inflammation, increase circulation and promote healing. The herbal decoctions are given in order to strengthen the vessels and prevent their recurrence."
    },
    {
      "id": "4",
      "question": "Does Panchakarma help in varicosity ulcers?",
      "answer": "Yes. The Panchakarma methods of Virechana (purgation) and Basti (medicated enema) help in detoxifying the system, improving circulation and aiding in wound healing. In comparison with surface applications, Panchakarma will support the deeper healing processes."
    },
    {
      "id": "5",
      "question": "How long is the treatment for a varicose ulcer?",
      "answer": "It varies with severity. Mild ulcers heal within weeks. In more chronic conditions, treatments are required for months at a time. Samwarthika customizes their protocols for each person to ensure full recovery and prevention."
    },
    {
      "id": "6",
      "question": "Are Ayurvedic medicines safe for varicose ulcers?",
      "answer": "Yes, the suggested herbal products are completely natural and safe: herbs that relieve inflammation and heal wounds. Likewise, the doses are individualized and tailored to achieve the highest effect with utmost safety."
    },
    {
      "id": "7",
      "question": "Does Ayurveda help with pain from varicose ulcers?",
      "answer": "It answers with a strong \"yes.\" These treatments reduce pain and swelling while treating the conditions to allow for better circulation. The herbal medicines reduce inflammation and promote healing. Pain relief is normally noted by the patient in two to three weeks of treatment."
    },
    {
      "id": "8",
      "question": "Can Ayurveda prevent the recurring attack of varicose ulcers?",
      "answer": "Yes, with the ayurvedic alternatives for strengthening the veins and improving circulation, recurrences can be minimized. Lifestyle modifications and preventive treatments will provide long-term protection. The patient also learns those safe practices to keep their veins healthy."
    },
    {
      "id": "9",
      "question": "Are varicose ulcer treatments elderly-centered?",
      "answer": "Yes, treatments are tailored according to age and medical condition. Soft treatments guarantee safety while achieving excellent results. The therapies aim to improve independence and a better quality of life."
    },
    {
      "id": "10",
      "question": "Why prefer Samwarthika for the treatment of varicose ulcers?",
      "answer": "Samwarthika administers quality Ayurvedic treatment by a skilled team of doctors. The programs are tailored according to the symptoms and causes in a bid to achieve long-term success in pain relief and improve quality of life."
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
