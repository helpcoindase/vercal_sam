"use client";
import { useState } from "react";
// import type { Swiper as SwiperType } from "swiper";
export default function FAQ() {
  const faqs = [
    {
      id: "1",
      question: "What is the post-natal care phenomenon according to Ayurveda?",
      answerTitle: "What is the post-natal care phenomenon according to Ayurveda?",
      answer:
        "Postnatal care includes therapies and counseling provided to mothers after the delivery. Here, postnatal care treatment in Ayurveda aims at restoring strength, balancing hormones and supporting lactation. Samwarthika performs herbal medicines, oil therapies and dietary counseling for complete restoration.",
    },
    {
      id: "2",
      question: "Why do we need postnatal care?",
      answerTitle: "Why do we need postnatal care?",
      answer:
        "The body and mind are both weakened after childbirth and this brings about pain, mood swings and sometimes even illnesses in new mothers. Such energy restoration assists in immune development and much more emotional stability. It helps ensure proper lactation and, above all, bonding between mother and baby.",
    },
    {
      id: "3",
      question: "What therapies are offered for postnatal care at Samwarthika?",
      answerTitle: "What therapies are offered for postnatal care at Samwarthika?",
      answer:
        "Abhyanga (oil massage), steam therapy and herbal decoction are treatments that indicate improvement in circulation, reduction of pain and general restoration of strength. Mothers are guided holistically through counseling and dietary directives.",
    },
    {
      id: "4",
      question: "Can Panchakarma contribute to the recovery process after childbirth?",
      answerTitle: "Can Panchakarma contribute to the recovery process after childbirth?",
      answer:
        "Surely, there are gentle Panchakarma procedures that can be adjusted for a fresh mother. Their tasks include purging the system, adjusting hormonal levels and enhancing digestion; however, the difference is in actually going deeper than usual care.",
    },
    {
      id: "5",
      question: "How long does postnatal care last?",
      answerTitle: "How long does postnatal care last?",
      answer:
        "It normally lasts the post-natal period of about 6-12 weeks, depending on health, with individual cases needing a longer time owing to complications. Personalized programs have been tailored under Samwarthika for complete recovery.",
    },
    {
      id: "6",
      question: "Are Ayurvedic drugs safe in lactation?",
      answerTitle: "Are Ayurvedic drugs safe in lactation?",
      answer:
        "Herbal medicines, which are given as much, are mostly pure and safe. Dosages are usually very well adjusted and work safely for mother and child. These therapies are lactation stimulators, also improving digestion and building immunity.",
    },
    {
      id: "7",
      question: "Does Ayurveda help with postnatal depression?",
      answerTitle: "Does Ayurveda help with postnatal depression?",
      answer:
        "Yes, therapies like Shirodhara and herbal medicines calm the mind and diminish anxiety. Counseling further supports emotional wellness. This is holistic because it involves both mental and physical health.",
    },
    {
      id: "8",
      question: "Modes to use Ayurveda to increase lactation?",
      answerTitle: "Modes to use Ayurveda to increase lactation?",
      answer:
        "Yes, we use herbal medicines and dietary advice to improve lactation. Some of their examples are fenugreek and cumin. Adequate therapies can also improve digestion and general strength.",
    },
    {
      id: "9",
      question: "Is postnatal care for every new mother?",
      answerTitle: "Is postnatal care for every new mother?",
      answer:
        "Yes. The treatment is according to the condition of each mother, with cases: natural or cesarean; however, care and safety are adapted accordingly for effective treatment.",
    },
    {
      id: "10",
      question: "Why choose Samwarthika for postnatal care?",
      answerTitle: "Why choose Samwarthika for postnatal care?",
      answer:
        "Samwarthika is, under the supervision of very experienced doctors, an oasis of soft-hearted integrative care. Here, programs are tailored to the different needs of mothers, both physical and emotional. This is the target for complete recovery and long-term wellness for mothers.",
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
