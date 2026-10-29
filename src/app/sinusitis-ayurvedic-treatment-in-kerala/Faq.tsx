"use client";
import { useState } from "react";
// import type { Swiper as SwiperType } from "swiper";
export default function FAQ() {
  const faqs = [
    {
      "id": "1",
      "question": "What is sinusitis and how can it affect a person?",
      "answerTitle": "Sinusitis and Its Effects",
      "answer": "Sinusitis points out the inflammatory process of the sinus cavities due to some internal or external factors, such as infection, allergy oranatomical abnormalities. These symptoms would include nasal blockage, headache or pain in the front of the face and trouble breathing. Chronic sinusitis can interfere with sleep, lower the quality of life and bring about a depressed state of immunity. Samwarthika recommends treatments that complement the natural pathway of managing the sinus passages, relieving the natural inflammation and improving respiratory well-being."
    },
    {
      "id": "2",
      "question": "How do we treat sinusitis with Ayurveda?",
      "answerTitle": "Ayurvedic Treatment for Sinusitis",
      "answer": "Ayurveda believes that sinusitis occurs due to kapha dosha imbalance with excess mucus formation and hence, the detoxification measures in conjunction with herbal medicines, nasal therapies and dietary modifications form the treatment. Nasal techniques, particularly nonempty nasal therapies such as Nasya (nasal drops with medicines) and steam inhalation with herbs-are extremely effective in drawing the passages clear. This combined approach aims to prevent both symptoms and episodes of sinusitis."
    },
    {
      "id": "3",
      "question": "What are the treatments commonly practiced at Samwarthika for sinusitis?",
      "answerTitle": "Common Treatments for Sinusitis",
      "answer": "Some of the popular treatments include Nasya (involving the use of herbal oil in the nostrils), Dhoomapana (inhaling medicated smoke) and Swedana (a sort of steam therapy). All these therapies will help in relieving nasal congestion and allow free drainage of the sinuses while assuring the overall health of the sinuses. Herbal decoctions and a bolstering of the measures to boost immunity would also be suggested alongside these treatments to enhance the response for recovery."
    },
    {
      "id": "4",
      "question": "How far do Panchakarma therapies help in sinusitis?",
      "answerTitle": "Panchakarma for Sinusitis",
      "answer": "Yes, Virechana (purgation) and Nasya are among the Panchakarma therapies that work quite potently. The work of these two is detoxifying, anti-inflammatory and restores respiratory balance. In cases of chronic sinusitis, the Panchakarma procedures are especially apt since they enhance deep healing rather than simply being symptomatic relief."
    },
    {
      "id": "5",
      "question": "How long is the treatment for sinusitis?",
      "answerTitle": "Duration of Sinusitis Treatment",
      "answer": "The duration of treatment largely depends on whether it is acute or chronic. Acute ones would heal within 2-3 weeks, while chronic sinusitis would need 6-8 weeks of treatment on a continual basis. \"Lifestyle and dietary changes also need to be done together with the treatment for a long-term solution.\""
    },
    {
      "id": "6",
      "question": "Are Ayurvedic medicines for sinusitis safe?",
      "answerTitle": "Safety of Ayurvedic Medicines",
      "answer": "Yes. The herbals Samwarthika recommends are perfectly safe and natural. These are the herbs with anti-inflammatory, antimicrobial and immune-brightening properties. The treatments are personalized for each patient's constitution so that they are safe, effective and have no side effects."
    },
    {
      "id": "7",
      "question": "Would Ayurveda help with the prevention of recurrence of sinusitis?",
      "answerTitle": "Prevention of Recurrence",
      "answer": "Yes, Ayurveda treats not only the current symptoms but also builds immunity and maintains respiratory well-being. Periodic regimens, dietary advice and more preventive treatments like Nasya go a long way in lessening recurrence. They also teach the patients some lifestyle patterns to adopt in order to maintain healthy sinuses over a long time."
    },
    {
      "id": "8",
      "question": "Is the treatment of sinusitis suitable for children?",
      "answerTitle": "Sinusitis Treatment for Children",
      "answer": "Yes, the treatments are modified for a safe application in children with very gentle herbal remedies and mild nasal treatments. Since children tend to have recurrent sinus infections, Ayurveda generally boosts their immunity and tries to decrease their dependency on antibiotics. Samwarthika ensures that all care provided is safe and age-appropriate."
    },
    {
      "id": "9",
      "question": "Is Ayurveda helpful in allergic chronic sinusitis?",
      "answerTitle": "Ayurveda for Allergic Chronic Sinusitis",
      "answer": "Sure, Ayurveda considers every aspect concerning uprooting the main causes of allergies, along with balancing of doshas and the immune system. In fact, the herbs work at reducing hypersensitivity while flushing the allergens out through detox procedures. This entire approach looks after both the sinuses themselves and allergic triggers."
    },
    {
      "id": "10",
      "question": "Why get your sinusitis treated at Samwarthika?",
      "answerTitle": "Why Samwarthika?",
      "answer": "At Samwarthika, one receives real Ayurvedic medicine, an up-to-date diagnostic approach from expert doctors and a personal treatment plan aimed at safe and effective recovery. The focus is on long-term well-being, recurrence prevention and even respiratory wellness enhancement."
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
