"use client";
import { useState } from "react";
// import type { Swiper as SwiperType } from "swiper";
export default function FAQ() {
  const faqs = [
    {
      "id": "1",
      "question": "Why are people suffering from knee pain?",
      "answer": <><ul className="mt-[10px]">
        <li className="my-[5px] text-[16px] leading-[26px] grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto] gap-[10px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25px"
            height="25px"
            className="mt-[3px]"
            viewBox="0 0 24 24">
            <path
              fill="none"
              stroke="#434343bf"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m10 17l5-5l-5-5"></path>
          </svg>{" "}
          There are several causes of knee pain and these could be arthritis, ligament injury, worn-out articular cartilage or overuse injury. It can also be linked to being overweight, aging or trauma.

        </li>
        <li className="my-[5px] text-[16px] leading-[26px] grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto] gap-[10px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25px"
            height="25px"
            className="mt-[3px]"
            viewBox="0 0 24 24">
            <path
              fill="none"
              stroke="#434343bf"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m10 17l5-5l-5-5"></path>
          </svg>{" "}
          Symptoms include stiffness, swelling and walking difficulties. Treatment at Samwarthika aims at ameliorating pain, strengthening joints and improving mobility with holistic treatment.

        </li>
      </ul></>
    },
    {
      "id": "2",
      "question": "What does Ayurveda teach regarding knee pain?",
      "answer": "The aggravated Vata dosha, according to Ayurveda, inflicts degeneration and stiffness of the knee; therefore, the line of treatment attempts to pacify the vitiated Vata, reduce inflammation and nourish joints. Herbal medicines, oil therapies and detox processes through Panchakarma, called rejuvenative balance, restore normalcy and alleviate discomfort."
    },
    {
      "id": "3",
      "question": "What are the treatments available at Samwarthika for knee pain?",
      "answer": "Therapies such as Abhyanga (whole-body oil massage), Janu Basti (knee oil pooling) and Swedana (steam therapy) relieve pain, stimulate circulation and strengthen the knee joints. Herbal healing focuses on the cartilage and proves effective in its healing while reducing inflammation."
    },
    {
      "id": "4",
      "question": "Does this Panchakarma help with knee pain?",
      "answer": "Yes, Basti (medicinal enema) is the most important treatment in Panchakarma for knee pain. It clears the body of toxins, alleviates stiffness and makes the joints feel supple again. Panchakarma is a holistic treatment and deep healing rather than immediate relief of pain."
    },
    {
      "id": "5",
      "question": "What is the duration of treatment for knee pain?",
      "answer": "Acute cases often take weeks to recover well, while chronic arthritis almost invariably takes longer. Maintenance therapy and lifestyle changes ensure long-term relief. Programs designed at Samwarthika are tailored to the degree of severity and needs of the patient."
    },
    {
      "id": "6",
      "question": "Are Ayurvedic medicines safe for knee pain?",
      "answer": "Herbal medicines prescribed are natural and safe. They also have anti-inflammatory and joint-strengthening effects. Dosages are customized to ensure safety and effectiveness."
    },
    {
      "id": "7",
      "question": "Is Ayurveda able to treat knee pain arising from arthritis?",
      "answer": "Yes, for the stiffness and swelling due to arthritis, the therapies work well to reduce it that way. Herbal medicines are effective in strengthening joints and imparting flexibility. Whenever patients undergo this treatment, it is reported that they experience fine mobility and very low levels of pain."
    },
    {
      "id": "8",
      "question": "Should Ayurveda prevent the recurrence of knee pain?",
      "answer": "Yes, correcting posture, strengthening muscles and balancing doshas significantly reduce the recurrence of knee pain when combined with extensive lifestyle guidance and preventive therapies. All patients are educated on safe normative practices for joint protection."
    },
    {
      "id": "9",
      "question": "Is knee pain treatment appropriate for elderly patients?",
      "answer": "The therapies are designed according to age and health status. They are safe and gentle while delivering maximum effectiveness for pain relief. The preferred outcome is to increase independence and mobility."
    },
    {
      "id": "10",
      "question": "What makes Samwarthika the best choice for knee pain care?",
      "answer": "Samwarthika provided genuine Ayurvedic treatment practices in the hands of specialized doctors, preceded and guided by them. One-to-one programs will be designed according to individual symptoms and routes toward relief and quality of life."
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
