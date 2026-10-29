"use client";
import { useState } from "react";
// import type { Swiper as SwiperType } from "swiper";
export default function FAQ() {
  const faqs = [
    {
      "id": "1",
      "question": "What do you mean by Panchakarma?",
      "answer": "Panchakarma signifies \"five acts\"; it is the preeminent detoxification therapy advocated by Ayurveda. This usage eliminates Ama, which means deep-penetrated toxins and rejuvenates the body through special types of purification processes."
    },
    {
      "id": "2",
      "question": "What are the five basic therapies in Panchakarma?",
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
          Vamana (Therapeutic Emesis): Removes the stomach toxins.
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
          Virechana (Purgation): Cleansing for the intestine and liver.
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
          Basti (Medicated Enema): Detox the colon and balance Vata.
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
          Nasya (Nasal Therapy): Removal of toxins found in the head and within the sinuses.
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
          Raktamokshana (Bloodletting): Purification of blood and management of skin disorders.
        </li>
      </ul></>
    },
    {
      "id": "3",
      "question": "How is Panchakarma prepared?",
      "answer": "Before the main cleansing begins, patients undergo Purva Karma (preliminary preparatory phase) with oleation (oil therapies) and sweating to loosen up the toxins inside."
    },
    {
      "id": "4",
      "question": "Who should take Panchakarma?",
      "answer": "It is advised for a person who experiences chronic stress or has indigestion, skin problems or perhaps a metabolic disorder or anyone looking for a seasonal detox and instead rejuvenation."
    },
    {
      "id": "5",
      "question": "How long does the Panchakarma process take?",
      "answer": "In general, Panchakarma usually takes about 7 to 21 days, depending on the condition. Activities of therapies, diet and rest are performed each day under the supervision of an Ayurvedic physician."
    },
    {
      "id": "6",
      "question": "What are some of the advantages of Panchakarma?",
      "answer": <>
        <ul className="mt-[10px]">
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
            The detoxification of the tissue.
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
            Facilitating digestion and metabolism.
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
            Maintaining immunity and vitality.
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
            Reducing stress with more clarity.
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
            Great skin and delay of aging.
          </li>
        </ul></>
    },
    {
      "id": "7",
      "question": "Is there a dietary regulation or restriction during the process of Panchakarma?",
      "answer": "Yes. They are fed on a light diet, easy to digest, like khichdi, herbal teas or warm water. Heavy, processed and oily foods are avoided to help with detoxification."
    },
    {
      "id": "8",
      "question": "Is Panchakarma safe?",
      "answer": "Yes, under the supervision of trained practitioners. It is contraindicated in pregnant women and very old patients and those who are in an unstable condition acutely."
    },
    {
      "id": "9",
      "question": "How does Panchakarma affect the mind?",
      "answer": "Purification of the body, along with calming action on the nervous system, brings less anxiety and more sleeping hours and makes one emotionally more balanced. Meditation and yoga are often included."
    },
    {
      "id": "10",
      "question": "Why choose Panchakarma at Samwarthika?",
      "answer": "Authentic Panchakarma therapies are delivered at Samwarthika, with personalized wellness plans, modern treatments and top-notch supervision. The patients are offered holistic healing in a safe and nurturing environment."
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
