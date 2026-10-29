"use client";
import { useState } from "react";
// import type { Swiper as SwiperType } from "swiper";
export default function FAQ() {
  const faqs = [
    {
      id: "1",
      question: "What is autism and how does it manifest in people?",
      answerTitle: "Autism and Its Manifestation",
      answer:
        "Autism Spectrum Disorder (ASD) is a developmental condition that-like a lighthouse—affects communication, behavior and social interaction. The various symptoms range from difficulties with speech and learning to repetitive behaviors and sensory sensitivities. In Samwarthika, treatment activities aim to improve the quality of life, enhance skills and provide holistic care for families.",
    },
    {
      id: "2",
      question: "What does Ayurveda explain about autism?",
      answerTitle: "Ayurvedic Explanation of Autism",
      answer:
        "It's an altered state of Vata dosha in Ayurveda that leads to the development of autism. EST is known to calm down the mind, sharpen concentration and subdue hyperactivity. The use of herbal preparations, dietary corrections and sensory therapy is involved in achieving the balance of nervous activity. Rather, the aim is nurturing the strengths of the child and lowering the challenges.",
    },
    {
      id: "3",
      question: "What therapies does Samwarthika offer in autism counseling?",
      answerTitle: "Therapies at Samwarthika",
      answer:
        "Administered central therapies include Abhyanga (oil massage), Shirodhara (pouring oil on the forehead) and sensory integration practices. Complementing these would be herbal medicines promoting brain activity, together with yoga and breathing exercises for improved focus and tranquility. Guidance through counseling was set aside for the parents for the full family support system of therapy.",
    },
    {
      id: "4",
      question: "Will Panchakarma Mudras help with autism in children?",
      answerTitle: "Panchakarma for Autism",
      answer:
        "Yes, gentle Panchakarma therapies like Nasya and detox can be modified for children. These cleansing therapies help remove toxins, calm down hyperactivity and improve the quality of sleep. Samwarthika provides cutting-edge, safe and comfortable procedures for young patients.",
    },
    {
      id: "5",
      question:
        "Are autism treatments free from all forms of medicines in Ayurveda?",
      answerTitle: "Use of Medicines in Autism Care",
      answer:
        "Though the condition is lifelong, Ayurveda helps in alleviating the overall condition and symptoms associated with the specific disorder. The aim of the treatment is not to cure but rather to improve communication skills, social skills and autonomy. With constant therapy, the child improves in terms of socially acceptable behavior and learning.",
    },
    {
      id: "6",
      question: "For how long does the treatment for autism last?",
      answerTitle: "Treatment Duration",
      answer:
        "Treatments last for long periods and are done with regular sessions. Maybe after the first couple of months, the child will show signs of improvement, but more long-term care will be needed. Samwarthika designs individualized programs that would adapt to the child's needs and growth.",
    },
    {
      id: "7",
      question:
        "Is it safe to use Ayurvedic medicine for children with autism?",
      answerTitle: "Safety of Ayurvedic Medicines",
      answer:
        "Yes, there are herbal formulations that are really natural and safe under the supervision of doctors. The Zen medicines have been found to improve brain health, reduce anxiety and improve sleep. The dosage is properly worked out concerning the age and constitution of the children.",
    },
    {
      id: "8",
      question: "Is Ayurveda really a cure for behavioral disorders in autism?",
      answerTitle: "Behavioral Support Through Ayurveda",
      answer:
        "Yes, following therapies like Shirodhara and calming herbs can combat hyperactivity, aggression and anxiety. Yoga and breathing techniques also help children learn how to manage emotions. This holistic system improves not just behaviors but also welfare for the family.",
    },
    {
      id: "9",
      question:
        "Can Ayurveda help in the speech and cognitive support towards autism?",
      answerTitle: "Speech and Cognitive Support",
      answer:
        "The therapies strengthen the neurological pathways, which further help the child develop focus and communication. Memory and cognition are improved by the herbal medicine, while structurally arranged therapies signal speech development. Ayurveda enhances modern methods to provide a robust support system.",
    },
    {
      id: "10",
      question: "What makes Samwarthika the preferred choice for autism care?",
      answerTitle: "Why Samwarthika?",
      answer:
        "Samwarthika is preferred for autism care because it adopts an affectionate, integrated treatment approach administered by qualified and experienced doctors and therapists. Individualized treatments per child are based on Ayurvedic care and supportive therapies. The center works toward empowering families while enhancing holistic development for children.",
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
