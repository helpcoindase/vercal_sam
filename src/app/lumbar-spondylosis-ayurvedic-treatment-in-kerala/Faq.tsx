"use client";
import { useState } from "react";
// import type { Swiper as SwiperType } from "swiper";
export default function FAQ() {
  const faqs = [
    {
      id: "1",
      question: "What is lumbar spondylosis?",
      answerTitle: "",
      answer:
        "Lumbar spondylosis, commonly referred to as wear and tear due to age, is the damage done over the years to the spinal discs and skeletal joints in the lower back. It often comes with feelings of stiffness, pain and movement dysfunctions. In more advanced situations, the pressure on the nerves at the level of the lumbar spine generates pain or weakness in one or both of the legs. Thus, treating pain, promoting mobility and preventing progression are Samwarthika's treatment goals.",
    },
    {
      id: "2",
      question: "How does Ayurveda view lumbar spondylosis?",
      answerTitle: "",
      answer:
        "According to Ayurveda, lumbar spondylosis is caused by Vata-dosha, which produces changes in bones and joints with aging. This therapy focused on calming the Vata, strengthening the muscles and nourishing the tissues of the spine. The combination of herbal medicines, oil therapies and several detoxification processes in Pancha Karma will enable the balance of Vata and thus relieve pain.",
    },
    {
      id: "3",
      question: "What therapies are offered at Samwarthika?",
      answerTitle: "",
      answer:
        "Abhyanga (oil massage), Kati basti (pooling of oil on the lower back) and Swedana (steam) are treatments highlighted under lumbar spondylosis. These reduce stiffness, enhance blood circulation and give strength to back muscles. In addition, patients require herbal medicines that help reinforce cartilage tissue strength and reduce inflammation.",
    },
    {
      id: "4",
      question: "Can Panchakarma help lumbar spondylosis?",
      answerTitle: "",
      answer:
        "Treatments under Panchakarma, especially Basti (medicated enemas), work magnificently for detoxification in the body, relief of compressions of nerves in the body and flexibility. Panchakarma brings about deeper healing than providing a temporary solution using painkiller medications.",
    },
    {
      id: "5",
      question: "How long does treatment take?",
      answerTitle: "",
      answer:
        "Different people take different durations for treatment. The acute cases respond in a few weeks, while chronic sufferers need much longer treatments. Patients who keep going with treatment and have modified their lifestyle report further extensions of relief. Programs at Samwarthika will be personalized according to patient severity and need.",
    },
    {
      id: "6",
      question: "Are Ayurvedic medicines safe for lumbar spondylosis?",
      answerTitle: "",
      answer:
        "Generally, Ayurvedic treatments for lumbar spondylosis are safe; only natural dosages of herbal medicines are prescribed. These medicines include some powerful anticancer and bone-strengthening medicines. The particular customization of medicine dosage accounts for safety and efficacy.",
    },
    {
      id: "7",
      question: "Does Ayurveda help with nerve compression symptoms?",
      answerTitle: "",
      answer:
        "Yes, the treatments provide relief from the tingling sensations and weakness caused directly due to the nerve compression. Herbal medicines boost strength in the nerves and coordination. These patients feel better in motion with reduced pain because of ongoing treatment.",
    },
    {
      id: "8",
      question: "Can Ayurveda prevent recurrence of lumbar spondylosis?",
      answerTitle: "",
      answer:
        "Ayurveda straightens up posture, strengthens the muscles and balances doshas, so there is no recurrence. The lifestyle prescription, along with preventive therapy, guarantees long-lasting freedom from the ailment. Throughout the whole process, the patients would be properly educated on how to take care of their spines.",
    },
    {
      id: "9",
      question: "Is treatment suitable for elderly patients?",
      answerTitle: "",
      answer:
        "All treatments are done according to age and medical conditions. All treatments are gentle, safe and effective in treating pain. It is hoped that independence and mobility will improve with this.",
    },
    {
      id: "10",
      question: "Why choose Samwarthika for lumbar spondylosis care?",
      answerTitle: "",
      answer:
        "Samwarthika offers the most authentic Ayurvedic treatment for lumbar spondylosis under the guidance of learned doctors. It treats symptoms as well as causes with a personalized approach to optimize functioning and improve quality of life.",
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
