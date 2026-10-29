"use client";
import { useState } from "react";
// import type { Swiper as SwiperType } from "swiper";
export default function Regimen() {
  const faqs = [
    {
      id: "1",
      question: "Early to rise",
      answerTitle: "",
      answer: (
        <>
          <div className="overflow-x-auto  ">
            <p>
              Ayurveda advises to rise from bed before sun-rise. After morning
              prayers, perform the duties to the nature facing north. After
              that, teeth must be cleaned. The mouth, eyes and face are to be
              washed with water. The nails, beard and the hair of the head are
              to be trimmed and kept clean periodically to promote strength,
              longevity, purity and tranquility of mind.
            </p>
          </div>
        </>
      ),
    },
    {
      id: "2",
      question: "Bathing",
      answerTitle: "",
      answer: (
        <>
          <div className="overflow-x-auto">
            <p>
              The cold bath removes the impurities, the inordinate heat and
              irritation of the surface and retains blood pure. Warm water bath
              is generally prepared with medicinal plants and is used generally
              or locally. Vapour baths are used for removing pain. The patient
              is well rubbed with oil and seated on a covered wooden vessel.
              Basically, rubbing oil has an excellent effect on the system.
            </p>
          </div>
        </>
      ),
    },
    {
      id: "3",
      question: "Clothing & Premises",
      answerTitle: "",
      answer: (
        <>
          <div className="overflow-x-auto">
            <p>
              It is advised to wear silk and warm clothes in winter, light, cool
              and thin during hot weather. During cold and rainy weather, use
              warm clothes of medium thickness. Being in clean premises and
              staying in ventilated rooms are also important.
            </p>
          </div>
        </>
      ),
    },
    {
      id: "4",
      question: "Sleep & Exercise",
      answerTitle: "",
      answer: (
        <>
          <div className="overflow-x-auto">
            <p>
              Sleeping in a comfortable space for an accustomed time keeps the
              humours healthy, improves colour of skin, the health, appetite and
              strength. Sleep during the day should be avoided. Ayurveda advises
              physical exercise to increase strength and keep the body firm.
              Morning or evening walk is suggested for those who eat rich food.
            </p>
          </div>
        </>
      ),
    },
  ];
  // const swiperRef = useRef<SwiperType | null>(null);
  const [active, setActive] = useState<string | null>("1");
  const toggleFAQ = (id: string) => {
    setActive(active === id ? null : id);
  };
  return (
    <>
      <section className="pt-[70px]   max-xl:pt-[60px]  max-md:pt-[40px]">
        <div className="xxl:w-[70%] w-[60%] m-[auto] max-xxl:w-[85%]     max-mlg:w-[90%] max-w-[120rem]">
          <h2
            className="text-[#304A10] font-[source,serief4] mb-[20px] mt-[0] sm:mt-[0px] text-[60px] leading-[65px] max-2xl:text-[52px]
           leading-[58px] max-xl:text-[46px] max-xl:leading-[50px] max-lg:text-[40px] max-lg:leading-[46px] max-mlg:text-[34px] max-mlg:leading-[40px]   font-normal text-start w-[fit-content] tracking-[-1px] text-center! w-full ">
            Daily Regimen/Dinacharya
          </h2>
          {/* <p className="text-[16px] leading-[24xpx]  text-[#341802]  mb-[40px]  w-[80%]  max-md:w-[90%] max-sm:w-[100%]">
            Our Ayurveda therapies combine time-honored healing techniques with
            modern clinical expertise. We offer a wide range of treatments
            including Panchakarma, Abhyanga, Elakizhi, Nasyam and Pizhichil.
            Each therapy is customized to your unique health needs, focusing on
            holistic healing for your body, mind and soul.
          </p> */}
          <div className="grid  gap-[20px] max-2xl:gap-[15px] max-lg:gap-[0px]  mt-[60px] max-2xl:mt-[40px] max-mlg:mt-[20px] w-full overflow-hidden">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="group  border-b border-[#bcbcbc]  pb-[20px] max-xxl:pb-[20px]  max-xl:pt-[15px] max-xl:pb-[20px] max-sm:pb-[20px] w-full overflow-hidden">
                <button
                  className="flex justify-between items-center w-full  cursor-pointer gap-[10px]"
                  onClick={() => toggleFAQ(faq.id)}>
                  <p
                    className={`text-[20px] leading-[26px] sm:text-[26px] sm:leading-[32px]  text-left text-[#000] font-medium transition duration-300  group-hover:text-[#304A10] ${active === faq.id ? "text-[#304A10]" : ""
                      }`}>
                    {faq.question}
                  </p>
                  <div
                    className={` p-[5px] md:p-[8px]  flex justify-center items-center rounded-full bg-[#607840] transition-all duration-300  group-hover:bg-[#607840] ${active === faq.id
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
                    ? "max-h-2000 opacity-100 "
                    : "max-h-0 opacity-0"
                    }`}>
                  {/* <h4 className="text-[24px] leading-[22px] text-[#3a3a3a] mt-[8px]">
                    {faq.answerTitle}
                  </h4> */}
                  <div className="text-[18px] leading-[24px] text-[#434343bf] my-4 w-full font-normal overflow-x-auto overflow-y-hidden scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
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
