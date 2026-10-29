"use client";
import { useState } from "react";
// import type { Swiper as SwiperType } from "swiper";
export default function FAQ() {
  const faqs = [
    {
      id: "1",
      question: "What is GERD treatment?",
      answerTitle: "",
      answer:
        "GERD is nothing more than a digestive disorder caused due to the regurgitation or influx of acidic juices into the esophagus, which results in symptoms such as heartburn, chest discomfort and sometimes regurgitation. Also, chronic GERD might destroy the lining of the esophagus, thus ruining a person's quality of life. At Samwarthika, the treatment is directly aimed at curing acid reflux, healing the digestive tract and preventing future problems with the same.",
    },
    {
      id: "2",
      question: "How does Ayurveda describe GERD?",
      answerTitle: "",
      answer:
        "Ayurveda defines it as an increase in heat and acid produced in the stomach as a result of Pitta imbalance. The remedies for treatment are targeting the cooling of Pitta, improving digestion and soothing the esophagus. The interventions for restoring balance will primarily involve herbal medicines, dietary corrections ordetox therapy.",
    },
    {
      id: "3",
      question: "What therapies are provided at Samwarthika?",
      answerTitle: "",
      answer:
        "Therapies offered include herbal decoctions, medicated ghee and dietary advice. Panchakarma therapies such as Virechana aid in the detoxification of the digestive tract. These treatments reduce acid reflux, enhance digestion and provide healing.",
    },
    {
      id: "4",
      question: "Can Panchakarma treatment alleviate GERD?",
      answerTitle: "",
      answer:
        "Yes. Panchakarma methodologies like Virechana are very effective. It clears the extra Pitta from the body, lessens acid production and improves digestion. Panchakarma provides deeper relief compared to symptomatic treatments without any other supporting measures.",
    },
    {
      id: "5",
      question: "How much time is required for treating GERD?",
      answerTitle: "",
      answer:
        "The duration of treatment depends on the type of disease. Acute cases improve very quickly-in a few weeks; chronic complaints take months of consistent therapy. Personalized programs are designed for him at Samwarthika for full recovery and prevention.",
    },
    {
      id: "6",
      question: "Is Ayurvedic medicine safe for GERD?",
      answerTitle: "",
      answer:
        "Yes. The herbal medicines prescribed are natural and safe, with cooling and digestive-strengthening herbs. Dosage is customized for safety and effectiveness.",
    },
    {
      id: "7",
      question:
        "Is Ayurveda beneficial in fighting against heartburn and discomfort?",
      answerTitle: "",
      answer:
        "Therapy indeed reduces heartburn, chest discomfort and regurgitation by pacifying Pitta. Herbal medicines were said to strengthen digestion and improve absorption. Most patients found relief in weeks.",
    },
    {
      id: "8",
      question: "Can Ayurveda treat GERD to prevent it from recurring?",
      answerTitle: "",
      answer:
        "Ayurveda will reduce recurrence by detoxifying the body and balancing the doshas. It would also involve lifestyle guidance with preventive therapies to ensure lasting protection. Patients are educated on safe practices to maintain digestive health.",
    },
    {
      id: "9",
      question: "Are the treatments for GERD applicable to all ages?",
      answerTitle: "",
      answer:
        "Yes. The therapies are individualized according to age and health condition. Gentle treatments are safe while being very effective in their effects. The focus is on improving the quality of life for all patients.",
    },
    {
      id: "10",
      question: "Why choose Samwarthika for GERD management?",
      answerTitle: "",
      answer:
        "With Samwarthika, authentic Ayurvedic therapies are provided under the supervision of experienced doctors. The programs are personalized to treat symptoms and even address their causative factor. The focus is on providing lasting relief on the road to improved digestive health.",
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
