"use client";
import { useState } from "react";
// import type { Swiper as SwiperType } from "swiper";
export default function FAQ() {
  const faqs = [
    {
      id: "1",
      question: "What exactly is cervical spondylosis?",
      answerTitle: "Cervical Spondylosis Explanation",
      answer:
        <>

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
              The severe cervical spondylosis has many presenting symptoms, such as stiffness, pain, a tingling sensation and even immobility. Nerve compression could result in arm or hand weakness in some of the most advanced stages of this ailment.

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
              Samwarthika manages this condition primarily by relieving the pain, increasing some stretches for increased flexibility and attempting to prevent further progression.


            </li>
          </ul>
        </>
    },
    {
      id: "2",
      question: "How does Ayurveda define cervical spondylosis?",
      answerTitle: "How does Ayurveda define cervical spondylosis?",
      answer:
        "Cervical spondylosis is caused by Vata imbalances according to Ayurveda. This is the reason behind the degeneration of bones and joints. Muscles are strengthened, cervical tissues nourished and Vata calmed through therapies. Using Ayurvedic herbal medications, oil treatment and Panchakarma detox, Vata is balanced and thus eases discomfort.",
    },
    {
      id: "3",
      question: "What are the different therapies available at Samwarthika?",
      answerTitle: "What are the different therapies available at Samwarthika?",
      answer:
        "Some of the therapies are Abhyanga (oil massage), Greeva Basti (oil pooling over the neck) and Swedana (steam therapy). These help to decrease stiffness and improve blood flow and toning of the neck muscles. Herbs facilitate the regeneration of cartilage and inflammatory processes.",
    },
    {
      id: "4",
      question: "Can Panchakarma cure cervical spondylosis?",
      answerTitle: "Can Panchakarma cure cervical spondylosis?",
      answer:
        "Yes, Basti and Nasya are the two promising Panchakarma procedures that are indicated for cervical spondylosis. These procedures help detoxify the body from within while relieving nerve compression, thus facilitating mobility. Beyond pain relief, the administration of Panchakarma treatment penetrates deeper into holistic healing.",
    },
    {
      id: "5",
      question: "How long does treatment take?",
      answerTitle: "How long does treatment take?",
      answer:
        "Acute cases may see observable improvement within 1 week, whereas chronic conditions vary by the duration of attention needed before improvement is noticed. Continued and lifestyle-appropriate therapies may solidify such improvements. Treatment programs at Samwarthika are custom-designed according to severity and individual need.",
    },
    {
      id: "6",
      question: "Are Ayurvedic medicine treatments safe for cervical spondylosis?",
      answerTitle: "Are Ayurvedic medicine treatments safe for cervical spondylosis?",
      answer:
        "Yes, they prescribe herbal medicines, which are natural and safe. They basically comprise anti-inflammatory and bone-strengthening herbs. The dosages that have been allocated to the patients are individualized in order to keep them safe and efficacious.",
    },
    {
      id: "7",
      question: "Does Ayurveda treat nerve compression symptoms?",
      answerTitle: "Does Ayurveda treat nerve compression symptoms?",
      answer:
        "Yes, these treatments reduce tingling sensations, numbness and weakness due to the nerve being compressed. Through herbalism, nerves are made stronger and coordination is improved. Thereafter, sustained therapies lead to a lot more mobility and less pain in the condition of most patients.",
    },
    {
      id: "8",
      question: "Does Ayurveda help in preventing cervical spondylosis from recurring?",
      answerTitle: "Does Ayurveda help in preventing cervical spondylosis from recurring?",
      answer:
        "Yes, in terms of preventing a recurrence, Ayurveda helps with correcting postures, toning muscles involved and balancing the doshas. Lifestyle advice, preventive advice and long-lasting relief are researched. Patients will also be further educated on safe practices for maintaining a healthy spine.",
    },
    {
      id: "9",
      question: "Is the treatment applicable to senior patients?",
      answerTitle: "Is the treatment applicable to senior patients?",
      answer:
        "Yes, therapies are designed according to age and current condition. It makes the treatment safe and efficacious in relieving. More independence and mobility are emphasized in the elderly.",
    },
    {
      id: "10",
      question: "Why opt for Samwarthika in terms of cervical spondylosis treatment?",
      answerTitle: "Why opt for Samwarthika in terms of cervical spondylosis treatment?",
      answer:
        "At Samwarthika, proper Ayurvedic treatments are provided under the care of experienced doctors. Every program is personalized not only to treat the symptoms but also to address the fundamental causes to provide relief for a long time and ultimately a higher quality of life.",
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
