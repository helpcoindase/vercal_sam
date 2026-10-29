"use client";
import { useState } from "react";
// import type { Swiper as SwiperType } from "swiper";
export default function FAQ() {
  const faqs = [
    {
      id: "1",
      question: "What is dysmenorrhea?",
      answerTitle: "",
      answer:
        "Dysmenorrhea refers to painful menstruation with cramping that is generally accompanied by nausea, tiredness and emotional changes. Painful menstruation can roughly fall into two categories: one called primary dysmenorrhea, which has no obvious disease process and the other termed secondary dysmenorrhea, which is due to diseases such as endometriosis. Samwarthika offers pain relief therapy, restores a balance of hormones and promotes the overall improvement of the reproductive system.",
    },
    {
      id: "2",
      question: "How does Ayurveda view dysmenorrhea?",
      answerTitle: "",
      answer:
        "According to Ayurveda, dysmenorrhea occurs due to a Vata imbalance characterized by spasmodic and painful episodes, sometimes aggravated by Pitta inflammation. The treatment should aim at balancing the doshas, improving circulation and soothing the nervous system. Treatment for this condition involves the use of herbal therapies, dietary procedures and other treatments.",
    },
    {
      id: "3",
      question: "What therapies does Samwarthika offer?",
      answerTitle: "",
      answer:
        "Therapies consist of oil massage (Abhyanga) with steam (Swedana) and herbal decoctions. One of the Panchakarma techniques is Basti or medicated enema, for detoxification and balancing reproductive health. It soothes cramps, stimulates digestive action and creates a hormonal balance.",
    },
    {
      id: "4",
      question: "Is Panchakarma treatment effective for dysmenorrhea?",
      answerTitle: "",
      answer:
        "Yes, Basti, like any other of the Panchakarma techniques, is indeed exceptional since it peacefully soothes Vata, relieves cramps and enables circulation. Symptomatic treatment is good too, but Panchakarma can give much more profound relief than that.",
    },
    {
      id: "5",
      question: "How long does treatment take?",
      answerTitle: "",
      answer:
        "This condition depends on the duration of the case. Acute cases may show improvement within one or two menstrual cycles, while chronic cases may need therapy for several months. The programs offered by Samwarthika are modified for the individual for full recovery and long-term prevention.",
    },
    {
      id: "6",
      question: "Are Ayurvedic drugs for dysmenorrhea safe?",
      answerTitle: "",
      answer:
        "Indeed, these medicines are herbal and so they are natural and safe. These medicines include herbs that provide pain relief and help balance hormones. Dosage is individualized, keeping in mind safety and effectiveness.",
    },
    {
      id: "7",
      question: "Are emotional symptoms treated systematically in Ayurveda?",
      answerTitle: "",
      answer:
        "Yes, it helps to reduce mood changes, anxiety and fatigue from menstruation to a beneficial extent. The herbal medicines really calm the mind and improve energy. One usually feels relaxed within 2 or 3 weeks of starting treatment.",
    },
    {
      id: "8",
      question: "Can Ayurveda prevent painful menstruation from coming back?",
      answerTitle: "",
      answer:
        "Absolutely. Ayurveda balances the doshas and maintains good reproductive health, hence minimizing the recurrence of pains.",
    },
    {
      id: "9",
      question: "Is this treatment applicable to young women?",
      answerTitle: "",
      answer:
        "Yes, the treatment is modifiable according to age and health condition. Such treatments are safe and give effective relief when warranted. The patients' quality of life improvement applies to all.",
    },
    {
      id: "10",
      question: "Why is Samwarthika the best for dysmenorrhea?",
      answerTitle: "",
      answer:
        "Samwarthika provides authentic Ayurvedic treatment under the supervision of qualified doctors and each program is customized to deal with the patient's symptoms and underlying causes, as the key is long-term relief and optimal reproductive health.",
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
