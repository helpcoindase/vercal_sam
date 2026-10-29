"use client";
import { useState } from "react";
// import type { Swiper as SwiperType } from "swiper";
export default function FAQ() {
  const faqs = [
    {
      id: "1",
      question: "What is the Ayurvedic approach to weight reduction?",
      answerTitle: "Ayurvedic Approach to Weight Reduction",
      answer:
        "Ayurveda considers obesity a vitiation of Kapha dosha, resulting in the sluggishness of metabolism and accumulation of fat. The treatment includes relieving the digestive system of the accumulation of toxins, which is then accompanied by metabolism improvement. Herbal medicines, freshly guided diets and detox therapies are combined for sustainable weight loss. It focuses on gradual and healthy weight loss, unlike those who crash diet and all such bits that last, as it creates long-term wellness.",
    },
    {
      id: "2",
      question: "How does Samwarthika personalize their weight loss programs?",
      answerTitle: "Personalized Weight Loss Programs",
      answer:
        "Before recommending personalized programs, body constitution, lifestyle and health conditions will be assessed. Udvartana, i.e., herbal powder massage and Panchakarma detox, other than advice on diet and exercise, are included in therapy. Doctors will be able to ensure safety, effectiveness and individualization regarding weight loss. Above all, it holds that this holistic aspect would refer to the improvement of weight, better energy and confidence.",
    },
    {
      id: "3",
      question: "What are the treatments available for weight reduction?",
      answerTitle: "Available Treatments",
      answer:
        "Efficacious therapies are Udvartana (a herbal massage), Swedana (steam therapy) and Panchakarma detox. These help in stimulating metabolism, breaking down accumulated fats and improving circulatory mechanisms. Also, some herbal medicines help in regulating appetite and digestion. They allow patients to lose weight very naturally without side effects.",
    },
    {
      id: "4",
      question:
        "What will the time span be for the Ayurvedic weight loss treatment?",
      answerTitle: "Treatment Duration",
      answer:
        "Individual health and commitment directly influence their response to treatment. So patients may notice results in perhaps 4-6 weeks or be tied into a multi-month program extending to 3–6 months for more long-term changes. The goal is to keep weight management sustainable while avoiding that ultra-fast loss. Thus, it includes consideration of lifestyle adjustments to ensure that the results are sustained.",
    },
    {
      id: "5",
      question: "Are Ayurvedic weight loss therapies safe?",
      answerTitle: "Safety of Ayurvedic Therapies",
      answer:
        "Yes, they are natural and safe and above all, they are very closely monitored by qualified doctors. Unlike chemical supplements, Ayurveda uses herbs and therapies whose consequent effect is an overall healthy status. Continuous patient monitoring ensures that they all progress in their treatment without harm. Thus, this makes it applicable to all age groups.",
    },
    {
      id: "6",
      question: "Does Ayurveda cure obesity-related conditions?",
      answerTitle: "Obesity-Related Conditions",
      answer:
        "Yes, Ayurveda helps manage several obesity-related conditions like diabetes, hypertension and joint pain. With proper metabolism and reduced fat, the conditions are brought under control as well. Over and above the reduction of weight, Samwarthika ensures holistic development toward health.",
    },
    {
      id: "7",
      question: "Is Panchakarma effective in weight loss?",
      answerTitle: "Panchakarma for Weight Loss",
      answer:
        "Panchakarma detox therapies are indeed extremely effective methods for clearing one's body of toxins and ultimately increasing metabolism. Virechana, a form of purgation and Basti, an enema infused with medicine, work to reset the digestive system and deplete fat accumulation. Briefly, Panchakarma comprises deeper cleansing, which further augments weight loss.",
    },
    {
      id: "8",
      question: "Are there food guidelines for weight loss?",
      answerTitle: "Food Guidelines",
      answer:
        "Yes, patients are prescribed light Kapha-pacifying diets that include barley, millet and green vegetables, which are encouraged, but they avoid fat, oily and processed foods. The use of herbal teas and spices, such as ginger and turmeric, is recommended to boost metabolism for these patients.",
    },
    {
      id: "9",
      question: "Is exercise included in Ayurvedic weight loss practices?",
      answerTitle: "Exercise in Weight Loss",
      answer:
        "Moderate exercise is recommended as part of the treatment, including yoga, walking and breathing techniques. Balance is a theme on which Ayurveda revolves and so it recommends exercise that is totally within the capacity of the patient. Safe and long-term weight loss without strain is thus ensured.",
    },
    {
      id: "10",
      question: "Why Samwarthika for weight loss?",
      answerTitle: "Why Samwarthika?",
      answer:
        "Samwarthika's program takes a holistic approach, incorporating therapies, diet, exercise and counseling. Experienced medical practitioners develop specific plans that guarantee safety and long-term results. The program prioritizes overall wellness, fostering confidence and preventing future weight gain.",
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
