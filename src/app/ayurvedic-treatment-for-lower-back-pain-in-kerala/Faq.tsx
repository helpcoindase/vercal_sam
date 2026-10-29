"use client";
import { useState } from "react";
// import type { Swiper as SwiperType } from "swiper";
export default function FAQ() {
  const faqs = [
    {
      id: "1",
      question: "What are the causes of back pain?",
      answerTitle: "",
      answer:
        "The causes of back pain include poor posture, muscle strain, disc problems, degenerative conditions, stress, obesity and a sedentary lifestyle, which can lead to symptoms such as stiffness, pain and reduced mobility. Samwarthika believes solely in pain relief, postural correction and strengthening back health.",
    },
    {
      id: "2",
      question: "How does Ayurveda see it about back pain?",
      answerTitle: "",
      answer:
        "According to Ayurveda, back pain occurs because of Vata's imbalance, wherein degeneration and rigidity happen in the body. Treatment includes calming the disturbed Vata, strengthening the muscles and nourishing the tissues of the spine. The conventional and Panchakarma detox, oil therapies and herbal medicines are used in restoring balance and ameliorating symptoms.",
    },
    {
      id: "3",
      question: "What therapies are offered by Samwarthika?",
      answerTitle: "",
      answer:
        "They are therapies like Abhyanga (oil massage), Kati Basti (pouring oil on the lower back) and Swedana (steam therapy). Treatments help to soothe pain, improve circulation and strengthen muscles in the back. The herbal remedies are supportive for maintaining the health of cartilage and have amelioratory properties for inflammation.",
    },
    {
      id: "4",
      question: "Will Panchakarma cure back pain?",
      answerTitle: "",
      answer:
        "Yes. The Basti for medications given as an enema through the classical way of Administration, which is among the Panchakarma therapies, is really one of the best remedies for the problem. This therapy purges the body, allows spaces in the body to perform activities normally and is also a mobility enhancer. That is painful healing and much more than a temporary pain reliever.",
    },
    {
      id: "5",
      question: "What is the duration of the treatment?",
      answerTitle: "",
      answer:
        "Just a few weeks would make a significant difference for acute cases, while chronic cases take longer to treat. Long-term relief, however, is ensured by the continuing treatment along with lifestyle changes. The severity of the conditions and requirements of the user are considered while making programs by Samwarthika.",
    },
    {
      id: "6",
      question: "Are Ayurvedic medicines safe for back pain?",
      answerTitle: "",
      answer:
        "Yes, the anti-inflammatory and bone-strengthening herbs are completely herbal and natural. The doses are individualized to ensure safety and efficacy.",
    },
    {
      id: "7",
      question: "Nerve compression symptoms are also a result of Ayurveda?",
      answerTitle: "",
      answer:
        "Yes, these therapies will lessen the occurrence of sensations such as tingling, numbness and weakness from nerve impulse checks. Herbal medicines may help to strengthen the nerves and balance the synergy between nerves, thereby enhancing motion within the patient.",
    },
    {
      id: "8",
      question: "Does Ayurveda stave off the return of back pain?",
      answerTitle: "",
      answer:
        "Yes, it helps in keeping a good posture, building muscle strength and maintaining a balanced dosha. Through a combination of life guidance practices and preventive therapy, we ensure long-term, permanent relief. Patients are educated about safe practices that would help protect their spines by Samwarthika.",
    },
    {
      id: "9",
      question: "Is treatment applicable to the elderly?",
      answerTitle: "",
      answer:
        "Yes, treatment refers to the age of the patient and his or her health status. Treatments are gentle and safe enough for effective pain relief. This program focuses on improving independence and empowering mobility.",
    },
    {
      id: "10",
      question: "Why go for Samwarthika for back pain treatment?",
      answerTitle: "",
      answer:
        "Samwarthika offers a purely Ayurvedic therapy under good supervision from very qualified doctors. Programs are individualized, not just for symptoms but also for root causes. The end result is a lasting, better quality of life.",
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
