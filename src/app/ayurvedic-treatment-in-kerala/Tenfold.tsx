"use client";

import { useState } from "react";
import Image from "next/image";
import { ASSET_PREFIX } from "../../../config";

export default function Tenfold() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <>
      <section className="pt-[70px]   max-xl:pt-[60px]  max-md:pt-[40px]">
        <div className="w-[90%] m-auto max-w-[95rem]">
          <h3
            className="text-[#314a10] font-[source,serief4] my-[20px] mt-0 text-[50px] leading-[52px] max-2xl:text-[42px]
           max-2xl:leading-[48px] max-xl:text-[36px] max-xl:leading-[40px] max-lg:text-[30px] max-lg:leading-[36px] max-mlg:text-[28px] max-mlg:leading-[32px] font-normal text-center m-auto w-[fit-content]">
            Ayurveda believes that the imbalance of Vathabr, <br /> Pitha and
            Kapha - Tridoshas cause disease
          </h3>
          <p className="mt-[20px] text-[#3f2510] text-center m-auto w-[60%] max-xl:w-[80%] max-lg:w-[90%] max-sm:w-[100%] mb-[30px]">
            The examination of the patient consists of analyzing the cause of
            disease - nidana, early signs and symptoms - purvaroopa, main signs
            and symptoms - roopa, exploratory therpy - upasaya, the production
            of disease - samprapthi and finally the clinical examination. The
            examination of patients may involve Tenfold examination -
            Dasavidhapareeksha or Eightfold examination - Ashtsthanapareeksha.
            This helps especially to evaluate the strength of patient and of the
            disease.
          </p>

          <div className="mt-[40px] max-lg:mt-[40px] w-[80%] max-xxl:w-[85%] m-auto grid grid-cols-[49.5%_49.5%] max-xl:grid-cols-[49.5%_50%] max-md:flex max-md:flex-col max-md:gap-[10px] justify-between max-2xl:w-[90%] max-lg:w-[100%] h-fit overflow-hidden">
            {/* LEFT PANEL WITH ACCORDION */}
            <div className="bg-[#e3ecd9] rounded-[120px_0_0_40px] max-xl:rounded-[100px_0_0_20px] max-lg:rounded-[80px_0_0_10px] max-md:rounded-[0px_80px_0_0px] p-[80px_60px] max-xxl:p-[80px_40px] max-2xl:p-[60px_40px] max-xl:p-[40px_25px]">
              <ul className="font-semibold">
                {/* 1. Tenfold Examination */}
                <li
                  className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto] my-[20px] max-lg:my-[15px] max-md:my-[10px] gap-[10px] text-[#314a10] max-xl:text-[16px] max-xl:leading-[22px] max-md:leading-[18px]
                
                
                group  border-b border-[#304a10]  pb-[20px] max-xxl:pb-[20px]  max-xl:pt-[15px] max-xl:pb-[20px] max-sm:pb-[20px] w-full overflow-hidden
                
                ">
                  {/* Bullet circle */}
                  <div className="w-[25px] h-[25px] max-md:w-[20px] max-md:h-[20px] rounded-[50%] overflow-hidden p-[1px] bg-[#bcd59b] flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30px"
                      height="30px"
                      viewBox="0 0 24 24">
                      <path
                        fill="none"
                        stroke="#49301b"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m10 17l5-5l-5-5"
                      />
                    </svg>
                  </div>

                  <div>
                    {/* Accordion header */}
                    <button
                      type="button"
                      onClick={() => toggle(0)}
                      className="flex justify-between items-center w-full  cursor-pointer gap-[10px]">
                      <span className="text-start">
                        <b>The Tenfold Examination/DasavidhaPareeksha</b>
                      </span>
                      <span
                        className={`transition-transform duration-300 ${openIndex === 0 ? "rotate-90" : "rotate-0"
                          }`}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24">
                          <path
                            fill="none"
                            stroke="#49301b"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m9 6l6 6l-6 6"
                          />
                        </svg>
                      </span>
                    </button>

                    {/* Accordion body */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ${openIndex === 0 ? "max-h-[1000px] mt-[10px]" : "max-h-0"
                        }`}>
                      <p className="text-[#314a10] max-xl:text-[16px] max-xl:leading-[22px] max-md:leading-[18px]">
                        Involves the following aspects. Body constitution -
                        Prkruthi, Pathological state - Vikruthi, Tissue vitality
                        - Sara, Physical build - Samhanana, Body measurement -
                        Pramana, Adaptbility - Satmya, Phychic constitution -
                        Satva, Digestive capacity - Aharasakthi, Capacity for
                        exercise - Vyayamasakthi, Age - Vayas.
                      </p>
                    </div>
                  </div>
                </li>

                {/* 2. Eightfold Examination */}
                <li
                  className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto] my-[20px] max-lg:my-[15px] max-md:my-[10px] gap-[10px] text-[#314a10] max-xl:text-[16px] max-xl:leading-[22px] max-md:leading-[18px]
                
                group  border-b border-[#304a10]  pb-[20px] max-xxl:pb-[20px]  max-xl:pt-[15px] max-xl:pb-[20px] max-sm:pb-[20px] w-full overflow-hidden
                
                ">
                  {/* Bullet circle */}
                  <div className="w-[25px] h-[25px] max-md:w-[20px] max-md:h-[20px] rounded-[50%] overflow-hidden p-[1px] bg-[#bcd59b] flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30px"
                      height="30px"
                      viewBox="0 0 24 24">
                      <path
                        fill="none"
                        stroke="#49301b"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m10 17l5-5l-5-5"
                      />
                    </svg>
                  </div>

                  <div>
                    {/* Accordion header */}
                    <button
                      type="button"
                      onClick={() => toggle(1)}
                      className="flex justify-between items-center w-full  cursor-pointer gap-[10px]">
                      <span className="text-start">
                        <b>The Eightfold Examination/AshtsthanaPareeksha</b>
                      </span>
                      <span
                        className={`transition-transform duration-300 ${openIndex === 1 ? "rotate-90" : "rotate-0"
                          }`}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24">
                          <path
                            fill="none"
                            stroke="#49301b"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m9 6l6 6l-6 6"
                          />
                        </svg>
                      </span>
                    </button>

                    {/* Accordion body */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ${openIndex === 1 ? "max-h-[1000px] mt-[10px]" : "max-h-0"
                        }`}>
                      <p className="text-[#314a10] max-xl:text-[16px] max-xl:leading-[22px] max-md:leading-[18px]">
                        Includes the examination of Pulse - Nadi, Toungue -
                        Jihwa, Voice - Sabda, Skin - Sparsa, Vision - Drik,
                        General Appearance - Akruthi, Urine - Muthra and Stool -
                        Mala.
                      </p>
                    </div>
                  </div>
                </li>

                {/* 3. Forms of Medications */}
                <li
                  className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto] my-[20px] max-lg:my-[15px] max-md:my-[10px] gap-[10px] text-[#314a10] max-xl:text-[16px] max-xl:leading-[22px] max-md:leading-[18px]
                
                group  border-b border-[#304a10]  pb-[20px] max-xxl:pb-[20px]  max-xl:pt-[15px] max-xl:pb-[20px] max-sm:pb-[20px] w-full overflow-hidden
                
                ">
                  {/* Bullet circle */}
                  <div className="w-[25px] h-[25px] max-md:w-[20px] max-md:h-[20px] rounded-[50%] overflow-hidden p-[1px] bg-[#bcd59b] flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30px"
                      height="30px"
                      viewBox="0 0 24 24">
                      <path
                        fill="none"
                        stroke="#49301b"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m10 17l5-5l-5-5"
                      />
                    </svg>
                  </div>

                  <div>
                    {/* Accordion header */}
                    <button
                      type="button"
                      onClick={() => toggle(2)}
                      className="flex justify-between items-center w-full  cursor-pointer gap-[10px]">
                      <span className="text-start">
                        <b>Forms of Medications in Ayurveda</b>
                      </span>
                      <span
                        className={`transition-transform duration-300 ${openIndex === 2 ? "rotate-90" : "rotate-0"
                          }`}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24">
                          <path
                            fill="none"
                            stroke="#49301b"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m9 6l6 6l-6 6"
                          />
                        </svg>
                      </span>
                    </button>

                    {/* Accordion body */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ${openIndex === 2 ? "max-h-[2000px] mt-[10px]" : "max-h-0"
                        }`}>
                      <p className="text-[#314a10] max-xl:text-[16px] max-xl:leading-[22px] max-md:leading-[18px]">
                        The medicines used in Ayurveda are prepared mainly using
                        herbs and combinations of herbs and plants which may
                        undergo different typical pharmaceutical processes based
                        on ancient scripts to get their typical form. Swarasa -
                        juice of any plant squeezed from it with or without
                        adding water, Kalka - paste prepared by grinding drugs,
                        sometimes soaked with water, Kashaya/Decoction - a drug
                        or combination of drugs are powdered coarsely and one
                        part of it is added with suggested parts of water and
                        boiled to reduce and decoction is separated, Choorna -
                        preparation of drug or combination of drugs in well
                        powdered form, Vati or Gulika - tablets or pills made
                        using different drugs, Asava - a preparation in which
                        drugs are soaked in liquids and allowed to ferment and
                        then filtered, Arishta - similar to the preparation of
                        Asava but the decoction are used for retaining the
                        properties for longer a period, Avaleha - type of
                        preparation that is semisolid in consistency prepared in
                        sugar, jaggery etc., Thaila - prepartion involves many
                        stages in which drugs are boiled in specific oils,
                        Ghritha - similar preparation to Thaila but herbs are
                        boiled in ghee, Lepa - paste used for external
                        application prepared using herbs and Bhasma - prepared
                        by the process of calcination with various drugs are the
                        different forms generally used in Ayurveda.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            {/* RIGHT IMAGE PANEL */}
            <div className="group h-fit relative max-md:min-h-[400px] max-md:max-h-[400px] max-sm:min-h-[350px] max-sm:max-h-[350px] h-full overflow-hidden max-md:rounded-[0px_0px_80px_0px]">
              <Image
                width={300}
                height={600}
                className="w-full h-full object-cover object-center absolute top-0 left-0"
                alt="Ayurveda Treatment Hospital in Kerala"
                src={`${ASSET_PREFIX}/assets/images/ayurveda-treatment-hospital-in-kerala.webp`}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
