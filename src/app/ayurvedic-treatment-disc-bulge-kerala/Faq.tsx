"use client";
import { useState } from "react";
// import type { Swiper as SwiperType } from "swiper";
export default function FAQ() {
  const faqs = [
    {
      id: "1",
      question: "What do you mean by \"disc bulge\" or \"protrusion\"?",
      answerTitle: "",
      answer:
        "A disc bulge occurs when the spinal discs are misplaced from their proper position and compress the nerves, producing pain. Some of the symptoms include back pain, tingling sensations, numbness and weakness in the arms and legs. Samwarthika treats it by reducing pain, correcting posture and improving spinal health.",
    },
    {
      id: "2",
      question: "What is the concept of a disc bulge in Ayurveda?",
      answerTitle: "",
      answer:
        "From an Ayurvedic point of view, the cause of the disc bulge is the Vata derangement, which is degenerative and applies compression on the nerve. Treatments thus include pacifying Vata, strengthening muscles and nourishing spinal tissues with medicated herbs, oil therapies and Panchakarma detox.",
    },
    {
      id: "3",
      question: "What type of therapies do you perform at Samwarthika?",
      answerTitle: "",
      answer:
        "Other therapies are Abhyanga (oil therapy), Kati Basti (oil pooling on the lower back) and Swedana (steam therapy). These reduce pain by nourishing circulation and strengthening back muscles. Herbal medicines aid cartilage health and decrease inflammation.",
    },
    {
      id: "4",
      question: "Are Panchakarma therapies efficacious for curing a disc bulge?",
      answerTitle: "",
      answer:
        "Yes. Among the Panchakarma therapies, one of the most potent therapies is Basti (medicated enema). This treatment cleanses the entire body and takes off the pressure on nerves, thus improving mobility. The enhanced treatment by Panchakarma works much more to eliminate pain than a variety of analgesics or medications.",
    },
    {
      id: "5",
      question: "How long is the treatment?",
      answerTitle: "",
      answer:
        "A few weeks should settle acute cases, while chronic ones need more managing time. Continuous therapies with lifestyle corrections can maintain the relief. Samwarthika customizes programs depending on the severity of patients' needs.",
    },
    {
      id: "6",
      question: "Is Ayurvedic medicine safe for disc prolapse?",
      answerTitle: "",
      answer:
        "These are safe herbal medicines because they are naturally derived ones. They also include anti-inflammatory herbs and some herbs that strengthen the bones. Each herb is worked out into planned doses for use to ensure safety and efficacy.",
    },
    {
      id: "7",
      question: "Does Ayurveda cure nerve compression-related symptoms?",
      answerTitle: "",
      answer:
        "Yes, the therapies help with numbness, tingling and weakness due to the result of nerve compression. The medicines strengthen and hydrate the nerves and improve coordination. This procedure puts the patients in a good position for better mobility and relief from discomfort with a sustained approach.",
    },
    {
      id: "8",
      question: "Does Ayurveda have anything regarding reducing the recurrence of disc bulges?",
      answerTitle: "",
      answer:
        "Yes, Ayurveda involves posture correction, muscle strengthening exercises and balancing doshas to prevent a recurrence. Preventive therapies keep patients free from discomfort in the long run and lifestyle advice about patients will educate them about practices capable of endangering their spines.",
    },
    {
      id: "9",
      question: "Is this treatment applicable to older patients?",
      answerTitle: "",
      answer:
        "Yes. Therapies that are tailor-made with a patient’s parameters, like age and health condition, in mind are gentle enough to be safe and effective in relieving pains and complaints while enhancing independence and mobility.",
    },
    {
      id: "10",
      question: "Why is Samwarthika recommended for a disc bulge?",
      answerTitle: "",
      answer:
        "Samwarthika's authentic Ayurvedic therapies are administered by qualified doctors. Therapeutic programs are tailor-made to be symptom-prone and have underlying causes. These specialized programs are designed to provide sustained relief and improve the quality of life.",
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
