"use client";
import Image from "next/image";
import { useState } from "react";
import { ASSET_PREFIX } from "../../../../config";
// import type { Swiper as SwiperType } from "swiper";
export default function TypesOfCare() {
  const faqs = [
    {
      id: "1",
      question: "Proficient Ayurvedic Care",
      answerTitle: "Why Samwarthika? become more competitive:",
      answer: (
        <>
          <div className="grid  grid-cols-[43%_43%] max-2xl:grid-cols-[43%_43%] max-xl:grid-cols-[43%_43%] max-md:grid-cols-[43%_43%]  max-[767px]:grid-cols-[100%]! justify-between items-start   max-xl:justify-between">
            <div>
              <p className=" text-[#0e8155] text-[22px]  leading-[26px] max-xl:text-[20px] max-xl:leading-[24px]  max-lg:text-[18px] max-lg:leading-[22px]  font-medium  text-start w-[fit-content] font-[source,serif4]!">
                At Samwarthika, we understand your needs and provide the best
                services tailored to your needs.
              </p>
              <div
                className="relative w-[100%] h-[auto]   relative  z-[1] after:absolute  after:content-[] after:w-[100%] after:h-[100%]
                                after:top-[-15px] after:left-[0px] after:border-[1px_1px_0px_1px]  after:rounded-[120px_120px_0px_0px]  max-xl:after:rounded-[90px_90px_0px_0px] max-md:after:rounded-[70px_70px_0px_0px] after:border-[#ed9b5d] after:z-[-4]  hidden max-[767px]:block  max-[767px]:max-w-[400px] max-[767px]:m-[auto] max-[767px]:mt-[60px] max-sm:mt-[40px] max-[700px]:w-[70%]">
                <div className="rounded-[120px_120px_0px_0px] max-xl:rounded-[90px_90px_0px_0px] max-md:rounded-[70px_70px_0px_0px] overflow-hidden">
                  <Image
                    width={580}
                    height={750}
                    className="w-[100%] h-[auto]"
                    alt="abt-img"
                    src={`${ASSET_PREFIX}/assets/images/caucasian-woman.webp`}
                  />
                </div>
                <div className="absolute rounded-[50%] overflow-hidden  max-lg:p-[6px] w-[180px] h-[180px] max-xl:w-[150px] max-xl:h-[150px]  left-[-25%] bottom-[5%]  bg-[#fff]  max-:w-[100px] max-:h-[100px] ">
                  <Image
                    width={50}
                    height={50}
                    className="w-[100%] h-[auto]"
                    alt="Samwarthika Logo"
                    src={`${ASSET_PREFIX}/assets/images/samwarthika-logo.webp`}
                  />
                  <Image
                    width={424}
                    height={23}
                    className="w-[80%] h-[auto] absolute right-[0px] bottom-[40px]"
                    alt="Wave"
                    src={`${ASSET_PREFIX}/assets/images/wave-shape.webp`}
                  />
                </div>
              </div>
              <p className="text-[16px] leading-[24xpx]  text-[#341802]  mt-[20px] mb-[30px]">
                The Ayurveda Hospital in Ernakulam offers therapies including
                panchakarma, abhyanga, elakizhi, nasyam, pizhichil,
                njavarakizhi, sirodhara, sirovasthi, kativasthi, detoxification
                and rejuvenation for healthy life, rasayana chikitsa. The
                Ayurveda Hospital in Ernakulam offers therapies including
                panchakarma, abhyanga, elakizhi, nasyam, pizhichil,
                njavarakizhi, sirodhara, sirovasthi, kativasthi, detoxification
                and rejuvenation for healthy life, rasayana chikitsa.
              </p>
              <p className="text-[16px] leading-[24xpx]  text-[#341802]  mt-[20px] mb-[30px]">
                The Ayurveda Hospital in Ernakulam offers therapies including
                panchakarma, abhyanga, elakizhi, nasyam, pizhichil,
                njavarakizhi, sirodhara, sirovasthi, kativasthi, detoxification
                and rejuvenation for healthy life, rasayana chikitsa.
              </p>
              <ul className="pl-[20px]  mt-[60px]  max-xl:mt-[40px]">
                <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[10px] gap-[12px] text-[#341802]  max-md:leading-[18px]">
                  <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30px"
                      height="30px"
                      viewBox="0 0 24 24">
                      <path
                        fill="none"
                        stroke="#000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m10 17l5-5l-5-5"
                      />
                    </svg>
                  </div>
                  The Ayurveda Hospital in Ernakulam offers therapies
                </li>
                <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[10px] gap-[12px] text-[#341802]  max-md:leading-[18px]">
                  <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30px"
                      height="30px"
                      viewBox="0 0 24 24">
                      <path
                        fill="none"
                        stroke="#000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m10 17l5-5l-5-5"
                      />
                    </svg>
                  </div>
                  Including panchakarma, abhyanga, elakizhi, nasyam
                </li>
                <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[10px] gap-[12px] text-[#341802]  max-md:leading-[18px]">
                  <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30px"
                      height="30px"
                      viewBox="0 0 24 24">
                      <path
                        fill="none"
                        stroke="#000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m10 17l5-5l-5-5"
                      />
                    </svg>
                  </div>
                  Njavarakizhi, sirodhara, sirovasthi, kativasthi,
                </li>
                <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[10px] gap-[12px] text-[#341802]  max-md:leading-[18px]">
                  <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30px"
                      height="30px"
                      viewBox="0 0 24 24">
                      <path
                        fill="none"
                        stroke="#000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m10 17l5-5l-5-5"
                      />
                    </svg>
                  </div>
                  Rejuvenation for healthy life, rasayana chikitsa.
                </li>
              </ul>
            </div>
            <div>
              <div
                className=" mt-[20px] relative w-[100%] h-[auto]   relative  z-[1] after:absolute  after:content-[] after:w-[100%] after:h-[100%]
                                after:top-[-15px] after:left-[0px] after:border-[1px_1px_0px_1px]  after:rounded-[180px_180px_0px_0px]  max-xl:after:rounded-[90px_90px_0px_0px] after:border-[#ed9b5d] after:z-[-4] sticky top-[30px] max-[767px]:hidden">
                <div className="rounded-[180px_180px_0px_0px] max-xl:rounded-[90px_90px_0px_0px] overflow-hidden">
                  <Image
                    width={580}
                    height={750}
                    className=" w-[100%] h-[auto] max-h-[700px]  object-cover object-center"
                    alt="abt-img"
                    src={`${ASSET_PREFIX}/assets/images/caucasian-woman.webp`}
                  />
                </div>
                <div className="absolute rounded-[50%] overflow-hidden  max-lg:p-[6px] w-[210px] h-[210px] max-xl:w-[180px] max-xl:h-[180px] max-lg:w-[100px] max-lg:h-[100px] left-[-20%] bottom-[5%]  bg-[#fff] ">
                  <Image
                    width={50}
                    height={50}
                    className="w-[100%] h-[auto]"
                    alt="Samwarthika Logo"
                    src={`${ASSET_PREFIX}/assets/images/samwarthika-logo.webp`}
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      ),
    },
    {
      id: "2",
      question: "Holistic Treatment",
      answerTitle: "Why Samwarthika? become more competitive:",
      answer: (
        <>
          <div className="grid  grid-cols-[43%_43%] max-2xl:grid-cols-[43%_43%] max-xl:grid-cols-[43%_43%] max-md:grid-cols-[43%_43%]  max-[767px]:grid-cols-[100%]! justify-between items-start   max-xl:justify-between">
            <div>
              <p className=" text-[#0e8155] text-[22px]  leading-[26px] max-xl:text-[20px] max-xl:leading-[24px]  max-lg:text-[18px] max-lg:leading-[22px]  font-medium  text-start w-[fit-content] font-[source,serif4]!">
                At Samwarthika, we understand your needs and provide the best
                services tailored to your needs.
              </p>
              <div
                className="relative w-[100%] h-[auto]   relative  z-[1] after:absolute  after:content-[] after:w-[100%] after:h-[100%]
                                after:top-[-15px] after:left-[0px] after:border-[1px_1px_0px_1px]  after:rounded-[120px_120px_0px_0px]  max-xl:after:rounded-[90px_90px_0px_0px] max-md:after:rounded-[70px_70px_0px_0px] after:border-[#ed9b5d] after:z-[-4]  hidden max-[767px]:block  max-[767px]:max-w-[400px] max-[767px]:m-[auto] max-[767px]:mt-[60px] max-sm:mt-[40px] max-[700px]:w-[70%]">
                <div className="rounded-[120px_120px_0px_0px] max-xl:rounded-[90px_90px_0px_0px] max-md:rounded-[70px_70px_0px_0px] overflow-hidden">
                  <Image
                    width={580}
                    height={750}
                    className="w-[100%] h-[auto]"
                    alt="abt-img"
                    src={`${ASSET_PREFIX}/assets/images/caucasian-woman.webp`}
                  />
                </div>
                <div className="absolute rounded-[50%] overflow-hidden  max-lg:p-[6px] w-[180px] h-[180px] max-xl:w-[150px] max-xl:h-[150px]  left-[-25%] bottom-[5%]  bg-[#fff]  max-:w-[100px] max-:h-[100px] ">
                  <Image
                    width={50}
                    height={50}
                    className="w-[100%] h-[auto]"
                    alt="Samwarthika Logo"
                    src={`${ASSET_PREFIX}/assets/images/samwarthika-logo.webp`}
                  />
                  <Image
                    width={424}
                    height={23}
                    className="w-[80%] h-[auto] absolute right-[0px] bottom-[40px]"
                    alt="Wave"
                    src={`${ASSET_PREFIX}/assets/images/wave-shape.webp`}
                  />
                </div>
              </div>
              <p className="text-[16px] leading-[24xpx]  text-[#341802]  mt-[20px] mb-[30px]">
                The Ayurveda Hospital in Ernakulam offers therapies including
                panchakarma, abhyanga, elakizhi, nasyam, pizhichil,
                njavarakizhi, sirodhara, sirovasthi, kativasthi, detoxification
                and rejuvenation for healthy life, rasayana chikitsa. The
                Ayurveda Hospital in Ernakulam offers therapies including
                panchakarma, abhyanga, elakizhi, nasyam, pizhichil,
                njavarakizhi, sirodhara, sirovasthi, kativasthi, detoxification
                and rejuvenation for healthy life, rasayana chikitsa.
              </p>
              <p className="text-[16px] leading-[24xpx]  text-[#341802]  mt-[20px] mb-[30px]">
                The Ayurveda Hospital in Ernakulam offers therapies including
                panchakarma, abhyanga, elakizhi, nasyam, pizhichil,
                njavarakizhi, sirodhara, sirovasthi, kativasthi, detoxification
                and rejuvenation for healthy life, rasayana chikitsa.
              </p>
              <ul className="pl-[20px]  mt-[60px]  max-xl:mt-[40px]">
                <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[10px] gap-[12px] text-[#341802]  max-md:leading-[18px]">
                  <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30px"
                      height="30px"
                      viewBox="0 0 24 24">
                      <path
                        fill="none"
                        stroke="#000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m10 17l5-5l-5-5"
                      />
                    </svg>
                  </div>
                  The Ayurveda Hospital in Ernakulam offers therapies
                </li>
                <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[10px] gap-[12px] text-[#341802]  max-md:leading-[18px]">
                  <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30px"
                      height="30px"
                      viewBox="0 0 24 24">
                      <path
                        fill="none"
                        stroke="#000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m10 17l5-5l-5-5"
                      />
                    </svg>
                  </div>
                  Including panchakarma, abhyanga, elakizhi, nasyam
                </li>
                <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[10px] gap-[12px] text-[#341802]  max-md:leading-[18px]">
                  <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30px"
                      height="30px"
                      viewBox="0 0 24 24">
                      <path
                        fill="none"
                        stroke="#000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m10 17l5-5l-5-5"
                      />
                    </svg>
                  </div>
                  Njavarakizhi, sirodhara, sirovasthi, kativasthi,
                </li>
                <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[10px] gap-[12px] text-[#341802]  max-md:leading-[18px]">
                  <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30px"
                      height="30px"
                      viewBox="0 0 24 24">
                      <path
                        fill="none"
                        stroke="#000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m10 17l5-5l-5-5"
                      />
                    </svg>
                  </div>
                  Rejuvenation for healthy life, rasayana chikitsa.
                </li>
              </ul>
            </div>
            <div>
              <div
                className=" mt-[20px] relative w-[100%] h-[auto]   relative  z-[1] after:absolute  after:content-[] after:w-[100%] after:h-[100%]
                                after:top-[-15px] after:left-[0px] after:border-[1px_1px_0px_1px]  after:rounded-[180px_180px_0px_0px]  max-xl:after:rounded-[90px_90px_0px_0px] after:border-[#ed9b5d] after:z-[-4] sticky top-[30px] max-[767px]:hidden">
                <div className="rounded-[180px_180px_0px_0px] max-xl:rounded-[90px_90px_0px_0px] overflow-hidden">
                  <Image
                    width={580}
                    height={750}
                    className=" w-[100%] h-[auto] max-h-[700px]  object-cover object-center"
                    alt="abt-img"
                    src={`${ASSET_PREFIX}/assets/images/caucasian-woman.webp`}
                  />
                </div>
                <div className="absolute rounded-[50%] overflow-hidden  max-lg:p-[6px] w-[210px] h-[210px] max-xl:w-[180px] max-xl:h-[180px] max-lg:w-[100px] max-lg:h-[100px] left-[-20%] bottom-[5%]  bg-[#fff] ">
                  <Image
                    width={50}
                    height={50}
                    className="w-[100%] h-[auto]"
                    alt="Samwarthika Logo"
                    src={`${ASSET_PREFIX}/assets/images/samwarthika-logo.webp`}
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      ),
    },
    {
      id: "3",
      question: "Tailored packages",
      answerTitle: "Why Samwarthika? become more competitive:",
      answer: (
        <>
          <div className="grid  grid-cols-[43%_43%] max-2xl:grid-cols-[43%_43%] max-xl:grid-cols-[43%_43%] max-md:grid-cols-[43%_43%]  max-[767px]:grid-cols-[100%]! justify-between items-start   max-xl:justify-between">
            <div>
              <p className=" text-[#0e8155] text-[22px]  leading-[26px] max-xl:text-[20px] max-xl:leading-[24px]  max-lg:text-[18px] max-lg:leading-[22px]  font-medium  text-start w-[fit-content] font-[source,serif4]!">
                At Samwarthika, we understand your needs and provide the best
                services tailored to your needs.
              </p>
              <div
                className="relative w-[100%] h-[auto]   relative  z-[1] after:absolute  after:content-[] after:w-[100%] after:h-[100%]
                                after:top-[-15px] after:left-[0px] after:border-[1px_1px_0px_1px]  after:rounded-[120px_120px_0px_0px]  max-xl:after:rounded-[90px_90px_0px_0px] max-md:after:rounded-[70px_70px_0px_0px] after:border-[#ed9b5d] after:z-[-4]  hidden max-[767px]:block  max-[767px]:max-w-[400px] max-[767px]:m-[auto] max-[767px]:mt-[60px] max-sm:mt-[40px] max-[700px]:w-[70%]">
                <div className="rounded-[120px_120px_0px_0px] max-xl:rounded-[90px_90px_0px_0px] max-md:rounded-[70px_70px_0px_0px] overflow-hidden">
                  <Image
                    width={580}
                    height={750}
                    className="w-[100%] h-[auto]"
                    alt="abt-img"
                    src={`${ASSET_PREFIX}/assets/images/caucasian-woman.webp`}
                  />
                </div>
                <div className="absolute rounded-[50%] overflow-hidden  max-lg:p-[6px] w-[180px] h-[180px] max-xl:w-[150px] max-xl:h-[150px]  left-[-25%] bottom-[5%]  bg-[#fff]  max-:w-[100px] max-:h-[100px] ">
                  <Image
                    width={50}
                    height={50}
                    className="w-[100%] h-[auto]"
                    alt="Samwarthika Logo"
                    src={`${ASSET_PREFIX}/assets/images/samwarthika-logo.webp`}
                  />
                  <Image
                    width={424}
                    height={23}
                    className="w-[80%] h-[auto] absolute right-[0px] bottom-[40px]"
                    alt="Wave"
                    src={`${ASSET_PREFIX}/assets/images/wave-shape.webp`}
                  />
                </div>
              </div>
              <p className="text-[16px] leading-[24xpx]  text-[#341802]  mt-[20px] mb-[30px]">
                The Ayurveda Hospital in Ernakulam offers therapies including
                panchakarma, abhyanga, elakizhi, nasyam, pizhichil,
                njavarakizhi, sirodhara, sirovasthi, kativasthi, detoxification
                and rejuvenation for healthy life, rasayana chikitsa. The
                Ayurveda Hospital in Ernakulam offers therapies including
                panchakarma, abhyanga, elakizhi, nasyam, pizhichil,
                njavarakizhi, sirodhara, sirovasthi, kativasthi, detoxification
                and rejuvenation for healthy life, rasayana chikitsa.
              </p>
              <p className="text-[16px] leading-[24xpx]  text-[#341802]  mt-[20px] mb-[30px]">
                The Ayurveda Hospital in Ernakulam offers therapies including
                panchakarma, abhyanga, elakizhi, nasyam, pizhichil,
                njavarakizhi, sirodhara, sirovasthi, kativasthi, detoxification
                and rejuvenation for healthy life, rasayana chikitsa.
              </p>
              <ul className="pl-[20px]  mt-[60px]  max-xl:mt-[40px]">
                <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[10px] gap-[12px] text-[#341802]  max-md:leading-[18px]">
                  <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30px"
                      height="30px"
                      viewBox="0 0 24 24">
                      <path
                        fill="none"
                        stroke="#000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m10 17l5-5l-5-5"
                      />
                    </svg>
                  </div>
                  The Ayurveda Hospital in Ernakulam offers therapies
                </li>
                <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[10px] gap-[12px] text-[#341802]  max-md:leading-[18px]">
                  <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30px"
                      height="30px"
                      viewBox="0 0 24 24">
                      <path
                        fill="none"
                        stroke="#000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m10 17l5-5l-5-5"
                      />
                    </svg>
                  </div>
                  Including panchakarma, abhyanga, elakizhi, nasyam
                </li>
                <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[10px] gap-[12px] text-[#341802]  max-md:leading-[18px]">
                  <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30px"
                      height="30px"
                      viewBox="0 0 24 24">
                      <path
                        fill="none"
                        stroke="#000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m10 17l5-5l-5-5"
                      />
                    </svg>
                  </div>
                  Njavarakizhi, sirodhara, sirovasthi, kativasthi,
                </li>
                <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[10px] gap-[12px] text-[#341802]  max-md:leading-[18px]">
                  <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30px"
                      height="30px"
                      viewBox="0 0 24 24">
                      <path
                        fill="none"
                        stroke="#000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m10 17l5-5l-5-5"
                      />
                    </svg>
                  </div>
                  Rejuvenation for healthy life, rasayana chikitsa.
                </li>
              </ul>
            </div>
            <div>
              <div
                className=" mt-[20px] relative w-[100%] h-[auto]   relative  z-[1] after:absolute  after:content-[] after:w-[100%] after:h-[100%]
                                after:top-[-15px] after:left-[0px] after:border-[1px_1px_0px_1px]  after:rounded-[180px_180px_0px_0px]  max-xl:after:rounded-[90px_90px_0px_0px] after:border-[#ed9b5d] after:z-[-4] sticky top-[30px] max-[767px]:hidden">
                <div className="rounded-[180px_180px_0px_0px] max-xl:rounded-[90px_90px_0px_0px] overflow-hidden">
                  <Image
                    width={580}
                    height={750}
                    className=" w-[100%] h-[auto] max-h-[700px]  object-cover object-center"
                    alt="abt-img"
                    src={`${ASSET_PREFIX}/assets/images/caucasian-woman.webp`}
                  />
                </div>
                <div className="absolute rounded-[50%] overflow-hidden  max-lg:p-[6px] w-[210px] h-[210px] max-xl:w-[180px] max-xl:h-[180px] max-lg:w-[100px] max-lg:h-[100px] left-[-20%] bottom-[5%]  bg-[#fff] ">
                  <Image
                    width={50}
                    height={50}
                    className="w-[100%] h-[auto]"
                    alt="Samwarthika Logo"
                    src={`${ASSET_PREFIX}/assets/images/samwarthika-logo.webp`}
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      ),
    },
    {
      id: "3",
      question: "World-Class Facilities",
      answerTitle: "Why Samwarthika? become more competitive:",
      answer: (
        <>
          <div className="grid  grid-cols-[43%_43%] max-2xl:grid-cols-[43%_43%] max-xl:grid-cols-[43%_43%] max-md:grid-cols-[43%_43%]  max-[767px]:grid-cols-[100%]! justify-between items-start   max-xl:justify-between">
            <div>
              <p className=" text-[#0e8155] text-[22px]  leading-[26px] max-xl:text-[20px] max-xl:leading-[24px]  max-lg:text-[18px] max-lg:leading-[22px]  font-medium  text-start w-[fit-content] font-[source,serif4]!">
                At Samwarthika, we understand your needs and provide the best
                services tailored to your needs.
              </p>
              <div
                className="relative w-[100%] h-[auto]   relative  z-[1] after:absolute  after:content-[] after:w-[100%] after:h-[100%]
                                after:top-[-15px] after:left-[0px] after:border-[1px_1px_0px_1px]  after:rounded-[120px_120px_0px_0px]  max-xl:after:rounded-[90px_90px_0px_0px] max-md:after:rounded-[70px_70px_0px_0px] after:border-[#ed9b5d] after:z-[-4]  hidden max-[767px]:block  max-[767px]:max-w-[400px] max-[767px]:m-[auto] max-[767px]:mt-[60px] max-sm:mt-[40px] max-[700px]:w-[70%]">
                <div className="rounded-[120px_120px_0px_0px] max-xl:rounded-[90px_90px_0px_0px] max-md:rounded-[70px_70px_0px_0px] overflow-hidden">
                  <Image
                    width={580}
                    height={750}
                    className="w-[100%] h-[auto]"
                    alt="abt-img"
                    src={`${ASSET_PREFIX}/assets/images/caucasian-woman.webp`}
                  />
                </div>
                <div className="absolute rounded-[50%] overflow-hidden  max-lg:p-[6px] w-[180px] h-[180px] max-xl:w-[150px] max-xl:h-[150px]  left-[-25%] bottom-[5%]  bg-[#fff]  max-:w-[100px] max-:h-[100px] ">
                  <Image
                    width={50}
                    height={50}
                    className="w-[100%] h-[auto]"
                    alt="Samwarthika Logo"
                    src={`${ASSET_PREFIX}/assets/images/samwarthika-logo.webp`}
                  />
                  <Image
                    width={424}
                    height={23}
                    className="w-[80%] h-[auto] absolute right-[0px] bottom-[40px]"
                    alt="Wave"
                    src={`${ASSET_PREFIX}/assets/images/wave-shape.webp`}
                  />
                </div>
              </div>
              <p className="text-[16px] leading-[24xpx]  text-[#341802]  mt-[20px] mb-[30px]">
                The Ayurveda Hospital in Ernakulam offers therapies including
                panchakarma, abhyanga, elakizhi, nasyam, pizhichil,
                njavarakizhi, sirodhara, sirovasthi, kativasthi, detoxification
                and rejuvenation for healthy life, rasayana chikitsa. The
                Ayurveda Hospital in Ernakulam offers therapies including
                panchakarma, abhyanga, elakizhi, nasyam, pizhichil,
                njavarakizhi, sirodhara, sirovasthi, kativasthi, detoxification
                and rejuvenation for healthy life, rasayana chikitsa.
              </p>
              <p className="text-[16px] leading-[24xpx]  text-[#341802]  mt-[20px] mb-[30px]">
                The Ayurveda Hospital in Ernakulam offers therapies including
                panchakarma, abhyanga, elakizhi, nasyam, pizhichil,
                njavarakizhi, sirodhara, sirovasthi, kativasthi, detoxification
                and rejuvenation for healthy life, rasayana chikitsa.
              </p>
              <ul className="pl-[20px]  mt-[60px]  max-xl:mt-[40px]">
                <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[10px] gap-[12px] text-[#341802]  max-md:leading-[18px]">
                  <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30px"
                      height="30px"
                      viewBox="0 0 24 24">
                      <path
                        fill="none"
                        stroke="#000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m10 17l5-5l-5-5"
                      />
                    </svg>
                  </div>
                  The Ayurveda Hospital in Ernakulam offers therapies
                </li>
                <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[10px] gap-[12px] text-[#341802]  max-md:leading-[18px]">
                  <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30px"
                      height="30px"
                      viewBox="0 0 24 24">
                      <path
                        fill="none"
                        stroke="#000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m10 17l5-5l-5-5"
                      />
                    </svg>
                  </div>
                  Including panchakarma, abhyanga, elakizhi, nasyam
                </li>
                <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[10px] gap-[12px] text-[#341802]  max-md:leading-[18px]">
                  <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30px"
                      height="30px"
                      viewBox="0 0 24 24">
                      <path
                        fill="none"
                        stroke="#000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m10 17l5-5l-5-5"
                      />
                    </svg>
                  </div>
                  Njavarakizhi, sirodhara, sirovasthi, kativasthi,
                </li>
                <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[10px] gap-[12px] text-[#341802]  max-md:leading-[18px]">
                  <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30px"
                      height="30px"
                      viewBox="0 0 24 24">
                      <path
                        fill="none"
                        stroke="#000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m10 17l5-5l-5-5"
                      />
                    </svg>
                  </div>
                  Rejuvenation for healthy life, rasayana chikitsa.
                </li>
              </ul>
            </div>
            <div>
              <div
                className=" mt-[20px] relative w-[100%] h-[auto]   relative  z-[1] after:absolute  after:content-[] after:w-[100%] after:h-[100%]
                                after:top-[-15px] after:left-[0px] after:border-[1px_1px_0px_1px]  after:rounded-[180px_180px_0px_0px]  max-xl:after:rounded-[90px_90px_0px_0px] after:border-[#ed9b5d] after:z-[-4] sticky top-[30px] max-[767px]:hidden">
                <div className="rounded-[180px_180px_0px_0px] max-xl:rounded-[90px_90px_0px_0px] overflow-hidden">
                  <Image
                    width={580}
                    height={750}
                    className=" w-[100%] h-[auto] max-h-[700px]  object-cover object-center"
                    alt="abt-img"
                    src={`${ASSET_PREFIX}/assets/images/caucasian-woman.webp`}
                  />
                </div>
                <div className="absolute rounded-[50%] overflow-hidden  max-lg:p-[6px] w-[210px] h-[210px] max-xl:w-[180px] max-xl:h-[180px] max-lg:w-[100px] max-lg:h-[100px] left-[-20%] bottom-[5%]  bg-[#fff] ">
                  <Image
                    width={50}
                    height={50}
                    className="w-[100%] h-[auto]"
                    alt="Samwarthika Logo"
                    src={`${ASSET_PREFIX}/assets/images/samwarthika-logo.webp`}
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      ),
    },
    {
      id: "4",
      question: "Peaceful Location",
      answerTitle: "Why Samwarthika? become more competitive:",
      answer: (
        <>
          <div className="grid  grid-cols-[43%_43%] max-2xl:grid-cols-[43%_43%] max-xl:grid-cols-[43%_43%] max-md:grid-cols-[43%_43%]  max-[767px]:grid-cols-[100%]! justify-between items-start   max-xl:justify-between">
            <div>
              <p className=" text-[#0e8155] text-[22px]  leading-[26px] max-xl:text-[20px] max-xl:leading-[24px]  max-lg:text-[18px] max-lg:leading-[22px]  font-medium  text-start w-[fit-content] font-[source,serif4]!">
                At Samwarthika, we understand your needs and provide the best
                services tailored to your needs.
              </p>
              <div
                className="relative w-[100%] h-[auto]   relative  z-[1] after:absolute  after:content-[] after:w-[100%] after:h-[100%]
                                after:top-[-15px] after:left-[0px] after:border-[1px_1px_0px_1px]  after:rounded-[120px_120px_0px_0px]  max-xl:after:rounded-[90px_90px_0px_0px] max-md:after:rounded-[70px_70px_0px_0px] after:border-[#ed9b5d] after:z-[-4]  hidden max-[767px]:block  max-[767px]:max-w-[400px] max-[767px]:m-[auto] max-[767px]:mt-[60px] max-sm:mt-[40px] max-[700px]:w-[70%]">
                <div className="rounded-[120px_120px_0px_0px] max-xl:rounded-[90px_90px_0px_0px] max-md:rounded-[70px_70px_0px_0px] overflow-hidden">
                  <Image
                    width={580}
                    height={750}
                    className="w-[100%] h-[auto]"
                    alt="abt-img"
                    src={`${ASSET_PREFIX}/assets/images/caucasian-woman.webp`}
                  />
                </div>
                <div className="absolute rounded-[50%] overflow-hidden  max-lg:p-[6px] w-[180px] h-[180px] max-xl:w-[150px] max-xl:h-[150px]  left-[-25%] bottom-[5%]  bg-[#fff]  max-:w-[100px] max-:h-[100px] ">
                  <Image
                    width={50}
                    height={50}
                    className="w-[100%] h-[auto]"
                    alt="Samwarthika Logo"
                    src={`${ASSET_PREFIX}/assets/images/samwarthika-logo.webp`}
                  />
                  <Image
                    width={424}
                    height={23}
                    className="w-[80%] h-[auto] absolute right-[0px] bottom-[40px]"
                    alt="Wave"
                    src={`${ASSET_PREFIX}/assets/images/wave-shape.webp`}
                  />
                </div>
              </div>
              <p className="text-[16px] leading-[24xpx]  text-[#341802]  mt-[20px] mb-[30px]">
                The Ayurveda Hospital in Ernakulam offers therapies including
                panchakarma, abhyanga, elakizhi, nasyam, pizhichil,
                njavarakizhi, sirodhara, sirovasthi, kativasthi, detoxification
                and rejuvenation for healthy life, rasayana chikitsa. The
                Ayurveda Hospital in Ernakulam offers therapies including
                panchakarma, abhyanga, elakizhi, nasyam, pizhichil,
                njavarakizhi, sirodhara, sirovasthi, kativasthi, detoxification
                and rejuvenation for healthy life, rasayana chikitsa.
              </p>
              <p className="text-[16px] leading-[24xpx]  text-[#341802]  mt-[20px] mb-[30px]">
                The Ayurveda Hospital in Ernakulam offers therapies including
                panchakarma, abhyanga, elakizhi, nasyam, pizhichil,
                njavarakizhi, sirodhara, sirovasthi, kativasthi, detoxification
                and rejuvenation for healthy life, rasayana chikitsa.
              </p>
              <ul className="pl-[20px]  mt-[60px]  max-xl:mt-[40px]">
                <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[10px] gap-[12px] text-[#341802]  max-md:leading-[18px]">
                  <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30px"
                      height="30px"
                      viewBox="0 0 24 24">
                      <path
                        fill="none"
                        stroke="#000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m10 17l5-5l-5-5"
                      />
                    </svg>
                  </div>
                  The Ayurveda Hospital in Ernakulam offers therapies
                </li>
                <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[10px] gap-[12px] text-[#341802]  max-md:leading-[18px]">
                  <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30px"
                      height="30px"
                      viewBox="0 0 24 24">
                      <path
                        fill="none"
                        stroke="#000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m10 17l5-5l-5-5"
                      />
                    </svg>
                  </div>
                  Including panchakarma, abhyanga, elakizhi, nasyam
                </li>
                <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[10px] gap-[12px] text-[#341802]  max-md:leading-[18px]">
                  <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30px"
                      height="30px"
                      viewBox="0 0 24 24">
                      <path
                        fill="none"
                        stroke="#000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m10 17l5-5l-5-5"
                      />
                    </svg>
                  </div>
                  Njavarakizhi, sirodhara, sirovasthi, kativasthi,
                </li>
                <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[10px] gap-[12px] text-[#341802]  max-md:leading-[18px]">
                  <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30px"
                      height="30px"
                      viewBox="0 0 24 24">
                      <path
                        fill="none"
                        stroke="#000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m10 17l5-5l-5-5"
                      />
                    </svg>
                  </div>
                  Rejuvenation for healthy life, rasayana chikitsa.
                </li>
              </ul>
            </div>
            <div>
              <div
                className=" mt-[20px] relative w-[100%] h-[auto]   relative  z-[1] after:absolute  after:content-[] after:w-[100%] after:h-[100%]
                                after:top-[-15px] after:left-[0px] after:border-[1px_1px_0px_1px]  after:rounded-[180px_180px_0px_0px]  max-xl:after:rounded-[90px_90px_0px_0px] after:border-[#ed9b5d] after:z-[-4] sticky top-[30px] max-[767px]:hidden">
                <div className="rounded-[180px_180px_0px_0px] max-xl:rounded-[90px_90px_0px_0px] overflow-hidden">
                  <Image
                    width={580}
                    height={750}
                    className=" w-[100%] h-[auto] max-h-[700px]  object-cover object-center"
                    alt="abt-img"
                    src={`${ASSET_PREFIX}/assets/images/caucasian-woman.webp`}
                  />
                </div>
                <div className="absolute rounded-[50%] overflow-hidden  max-lg:p-[6px] w-[210px] h-[210px] max-xl:w-[180px] max-xl:h-[180px] max-lg:w-[100px] max-lg:h-[100px] left-[-20%] bottom-[5%]  bg-[#fff] ">
                  <Image
                    width={50}
                    height={50}
                    className="w-[100%] h-[auto]"
                    alt="Samwarthika Logo"
                    src={`${ASSET_PREFIX}/assets/images/samwarthika-logo.webp`}
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      ),
    },
    {
      id: "5",
      question: "Transparent and Emotional Pricing",
      answerTitle: "Why Samwarthika? become more competitive:",
      answer: (
        <>
          <div className="grid  grid-cols-[43%_43%] max-2xl:grid-cols-[43%_43%] max-xl:grid-cols-[43%_43%] max-md:grid-cols-[43%_43%]  max-[767px]:grid-cols-[100%]! justify-between items-start   max-xl:justify-between">
            <div>
              <p className=" text-[#0e8155] text-[22px]  leading-[26px] max-xl:text-[20px] max-xl:leading-[24px]  max-lg:text-[18px] max-lg:leading-[22px]  font-medium  text-start w-[fit-content] font-[source,serif4]!">
                At Samwarthika, we understand your needs and provide the best
                services tailored to your needs.
              </p>
              <div
                className="relative w-[100%] h-[auto]   relative  z-[1] after:absolute  after:content-[] after:w-[100%] after:h-[100%]
                                after:top-[-15px] after:left-[0px] after:border-[1px_1px_0px_1px]  after:rounded-[120px_120px_0px_0px]  max-xl:after:rounded-[90px_90px_0px_0px] max-md:after:rounded-[70px_70px_0px_0px] after:border-[#ed9b5d] after:z-[-4]  hidden max-[767px]:block  max-[767px]:max-w-[400px] max-[767px]:m-[auto] max-[767px]:mt-[60px] max-sm:mt-[40px] max-[700px]:w-[70%]">
                <div className="rounded-[120px_120px_0px_0px] max-xl:rounded-[90px_90px_0px_0px] max-md:rounded-[70px_70px_0px_0px] overflow-hidden">
                  <Image
                    width={580}
                    height={750}
                    className="w-[100%] h-[auto]"
                    alt="abt-img"
                    src={`${ASSET_PREFIX}/assets/images/caucasian-woman.webp`}
                  />
                </div>
                <div className="absolute rounded-[50%] overflow-hidden  max-lg:p-[6px] w-[180px] h-[180px] max-xl:w-[150px] max-xl:h-[150px]  left-[-25%] bottom-[5%]  bg-[#fff]  max-:w-[100px] max-:h-[100px] ">
                  <Image
                    width={50}
                    height={50}
                    className="w-[100%] h-[auto]"
                    alt="Samwarthika Logo"
                    src={`${ASSET_PREFIX}/assets/images/samwarthika-logo.webp`}
                  />
                  <Image
                    width={424}
                    height={23}
                    className="w-[80%] h-[auto] absolute right-[0px] bottom-[40px]"
                    alt="Wave"
                    src={`${ASSET_PREFIX}/assets/images/wave-shape.webp`}
                  />
                </div>
              </div>
              <p className="text-[16px] leading-[24xpx]  text-[#341802]  mt-[20px] mb-[30px]">
                The Ayurveda Hospital in Ernakulam offers therapies including
                panchakarma, abhyanga, elakizhi, nasyam, pizhichil,
                njavarakizhi, sirodhara, sirovasthi, kativasthi, detoxification
                and rejuvenation for healthy life, rasayana chikitsa. The
                Ayurveda Hospital in Ernakulam offers therapies including
                panchakarma, abhyanga, elakizhi, nasyam, pizhichil,
                njavarakizhi, sirodhara, sirovasthi, kativasthi, detoxification
                and rejuvenation for healthy life, rasayana chikitsa.
              </p>
              <p className="text-[16px] leading-[24xpx]  text-[#341802]  mt-[20px] mb-[30px]">
                The Ayurveda Hospital in Ernakulam offers therapies including
                panchakarma, abhyanga, elakizhi, nasyam, pizhichil,
                njavarakizhi, sirodhara, sirovasthi, kativasthi, detoxification
                and rejuvenation for healthy life, rasayana chikitsa.
              </p>
              <ul className="pl-[20px]  mt-[60px]  max-xl:mt-[40px]">
                <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[10px] gap-[12px] text-[#341802]  max-md:leading-[18px]">
                  <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30px"
                      height="30px"
                      viewBox="0 0 24 24">
                      <path
                        fill="none"
                        stroke="#000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m10 17l5-5l-5-5"
                      />
                    </svg>
                  </div>
                  The Ayurveda Hospital in Ernakulam offers therapies
                </li>
                <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[10px] gap-[12px] text-[#341802]  max-md:leading-[18px]">
                  <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30px"
                      height="30px"
                      viewBox="0 0 24 24">
                      <path
                        fill="none"
                        stroke="#000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m10 17l5-5l-5-5"
                      />
                    </svg>
                  </div>
                  Including panchakarma, abhyanga, elakizhi, nasyam
                </li>
                <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[10px] gap-[12px] text-[#341802]  max-md:leading-[18px]">
                  <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30px"
                      height="30px"
                      viewBox="0 0 24 24">
                      <path
                        fill="none"
                        stroke="#000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m10 17l5-5l-5-5"
                      />
                    </svg>
                  </div>
                  Njavarakizhi, sirodhara, sirovasthi, kativasthi,
                </li>
                <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[10px] gap-[12px] text-[#341802]  max-md:leading-[18px]">
                  <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30px"
                      height="30px"
                      viewBox="0 0 24 24">
                      <path
                        fill="none"
                        stroke="#000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m10 17l5-5l-5-5"
                      />
                    </svg>
                  </div>
                  Rejuvenation for healthy life, rasayana chikitsa.
                </li>
              </ul>
            </div>
            <div>
              <div
                className=" mt-[20px] relative w-[100%] h-[auto]   relative  z-[1] after:absolute  after:content-[] after:w-[100%] after:h-[100%]
                                after:top-[-15px] after:left-[0px] after:border-[1px_1px_0px_1px]  after:rounded-[180px_180px_0px_0px]  max-xl:after:rounded-[90px_90px_0px_0px] after:border-[#ed9b5d] after:z-[-4] sticky top-[30px] max-[767px]:hidden">
                <div className="rounded-[180px_180px_0px_0px] max-xl:rounded-[90px_90px_0px_0px] overflow-hidden">
                  <Image
                    width={580}
                    height={750}
                    className=" w-[100%] h-[auto] max-h-[700px]  object-cover object-center"
                    alt="abt-img"
                    src={`${ASSET_PREFIX}/assets/images/caucasian-woman.webp`}
                  />
                </div>
                <div className="absolute rounded-[50%] overflow-hidden  max-lg:p-[6px] w-[210px] h-[210px] max-xl:w-[180px] max-xl:h-[180px] max-lg:w-[100px] max-lg:h-[100px] left-[-20%] bottom-[5%]  bg-[#fff] ">
                  <Image
                    width={50}
                    height={50}
                    className="w-[100%] h-[auto]"
                    alt="Samwarthika Logo"
                    src={`${ASSET_PREFIX}/assets/images/samwarthika-logo.webp`}
                  />
                </div>
              </div>
            </div>
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
      <section className="pb-[140px]  max-2xl:pb-[100px]   max-xl:pb-[80px]  max-md:pb-[50px]">
        <div className="w-[90%] m-[auto]">
          <div className=" w-[80%] m-[auto] ">
            <h3
              className="text-[#304A10] font-[source,serief4] m-auto mb-[20px] mt-[8px] text-[60px] leading-[65px] max-2xl:text-[52px]
           leading-[58px] max-xl:text-[46px] max-xl:leading-[50px] max-lg:text-[40px] max-lg:leading-[46px] max-mlg:text-[38px] max-mlg:leading-[42px] font-normal   text-center w-[fit-content]">
              Choosing Samwarthika for <br /> your Healing Journey
            </h3>
            <div className="grid  gap-[10px] max-2xl:gap-[10px] max-lg:gap-[10px]  mt-[60px] max-2xl:mt-[40px] max-mlg:mt-[20px]">
              {faqs.map((faq) => (
                <div key={faq.id} className="">
                  <button
                    className={`flex justify-between items-center w-full  cursor-pointer gap-[10px] border-b border-[#238b62]  py-[15px] px-[10px]  transition duration-300 hover:bg-[transparent]  ${
                      active === faq.id ? "" : "bg-[#f0f6ec]"
                    }`}
                    onClick={() => toggleFAQ(faq.id)}>
                    <p
                      className={`text-[35px] leading-[42px] max-xxl:text-[32px] max-xxl:leading-[38px] max-2xl:text-[28px] max-2xl:leading-[32px] max-lg:text-[22px] max-lg:leading-[26px] max-mlg:text-[20px] max-mlg:leding-[24px] max-sm:text-[18px] max-sm:leading-[22px]   text-[#314a10] font-medium font-[source,serif4]! $hover:text-[#43230B] {
                        active === faq.id ? "" : "text-[#43230B]"
                      } `}>
                      {faq.question}
                      <span className="text-[#e36300]  font-bold font-[source,serif4]!">
                        .
                      </span>
                    </p>
                    <div
                      className={`w-8 h-8 sm:w-10 sm:h-10 min-w-[40px] min-h-[40px] flex justify-center items-center rounded-full bg-[#607840] transition-all duration-300  group-hover:bg-[#607840]  `}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30px"
                        height="30px"
                        viewBox="0 0 24 24"
                        className={`transform transition-transform duration-300 max-lg:w-[25px]  max-lg:h-[25px]    ${
                          active === faq.id ? "rotate-90" : ""
                        }`}>
                        <path
                          fill="none"
                          stroke={`#fff`}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.3"
                          d="m10 17l5-5l-5-5"
                        />
                      </svg>
                    </div>
                  </button>
                  <div
                    className={`transition-all duration-500 overflow-hidden ${
                      active === faq.id
                        ? "max-h-1500px opacity-100 "
                        : "max-h-0 opacity-0"
                    }`}>
                    {/* <h4 className="text-[24px] leading-[22px] text-[#3a3a3a] mt-[8px]">
                    {faq.answerTitle}
                  </h4> */}
                    <div className="text-[18px] leading-[24px] max-2xl:text-[16px] max-2xl:leading-[22px] text-[#686868bf] mt-[40px] my-4 font-semibold ">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
