import Image from "next/image";
import { ASSET_PREFIX } from "../../../config";

export default function BalanceDiet() {
  return (
    <>
      <section className="pt-[140px]  max-2xl:pt-[100px]   max-xl:pt-[80px]  max-md:pt-[50px]">
        <div className="w-[90%] m-auto  max-w-[95rem]">
          <h3
            className="text-[#314a10] font-[source,serief4] my-[20px] text-[50px] leading-[52px] max-2xl:text-[42px]
           leading-[48px] max-xl:text-[36px] max-xl:leading-[40px] max-lg:text-[30px] max-lg:leading-[36px] max-mlg:text-[28px] max-mlg:leading-[32px] font-normal   text-center m-auto  max-w-[45%] max-2xl:max-w-[50%]  max-md:max-w-[55%] max-sm:max-w-[90%]">
            Benefits of Ayurvedic Weight Loss Treatment
          </h3>
          <p className="mt-[20px] text-[#3f2510] text-center m-auto  w-[60%] max-xl:w-[80%]  max-lg:w-[90%] max-sm:w-[100%] mb-[30px]">
            Samwarthika’s Ayurvedic approach doesn&apos;t just reduce numbers on
            the scale-it promotes holistic healing. By addressing underlying
            imbalances and guiding patients toward sustainable lifestyle
            changes, the treatment offers meaningful, lasting health
            improvements.
          </p>
          <div className="mt-[80px] max-xl:mt-[60px]  max-lg:mt-[40px] w-[80%] max-xxl:w-[85%] m-auto grid grid-cols-[49.5%_49.5%] max-xl:grid-cols-[49.5%_50%]  max-md:flex max-md:flex-col-reverse max-md:gap-[10px] justify-between  max-2xl:w-[90%]  max-lg:w-[100%] h-fit overflow-hidden">
            <div className="group h-fit  relative max-md:min-h-[400px] max-md:max-h-[400px]   max-sm:min-h-[350px]   max-sm:max-h-[350px] h-full overflow-hidden max-md:rounded-[0px_0px_80px_0px]">
              <Image
                width={300}
                height={600}
                className="w-full h-[auto] object-cover object-center absolute top-0 left-0 w-full h-full"
                alt="Ayurveda Treatment Hospital in Kerala"
                src={`${ASSET_PREFIX}/assets/images/ayurveda-treatment-hospital-in-kerala.webp`}
              />
            </div>
            <div className="bg-[#e3ecd9]  rounded-[0px_120px_40px_0px] max-xl:rounded-[0px_100px_20px_0px] max-lg:rounded-[0px_80px_20px_0px] max-md:rounded-[0px_80px_0px_0px]  p-[80px_60px]  max-xxl:p-[80px_40px] max-2xl:p-[60px_40px] max-xl:p-[40px_25px]">
              {/* <p className="uppercase text-[#361902cc] text-[18px]  leading-[22px] max-xl:text-[16px] max-xl:leading-[20px]  max-lg:text-[16px] max-lg:leading-[20px]  font-semibold  text-start w-[fit-content]">
                THE AYURVEDIC Hospital
              </p> */}
              {/* <h3
                className="text-[#314a10] font-[source,serief4] mb-[20px] xxl:text-[55px] xxl:leading-[57px] text-[50px] leading-[52px] max-2xl:text-[42px]
                                   leading-[48px] max-xl:text-[36px] max-xl:leading-[40px] max-lg:text-[30px] max-lg:leading-[36px] max-mlg:text-[28px] max-mlg:leading-[32px] font-normal   text-start w-[fit-content]">
                Benefits
              </h3> */}

              {/* <div
                className="relative w-[100%] h-[auto]   relative  z-[1] after:absolute  after:content-[] after:w-[100%] after:h-[100%]
                                          after:top-[-15px] after:left-[0px] after:border-[1px_1px_0px_1px]  after:rounded-[120px_120px_0px_0px]  max-xl:after:rounded-[90px_90px_0px_0px] max-md:after:rounded-[70px_70px_0px_0px] after:border-[#ed9b5d] after:z-[-4]  hidden max-[767px]:block  max-[767px]:max-w-[400px] max-[767px]:m-[auto] max-[767px]:mt-[60px] max-sm:mt-[40px] max-[700px]:w-[70%]">
                <div className=" overflow-hidden">
                  <Image
                    width={580}
height={750}
                    className="w-[100%] h-[auto]"
                    alt="Ayurveda Treatment Hospital in Kerala"
                    src={`${ASSET_PREFIX}/assets/images/ayurveda-treatment-hospital-in-kerala.webp`}
                  />
                </div>
              </div> */}
              <p className="text-[22px] leading-[30px] max-xxl:text-[20px] max-xxl:leading-[26px]  max-xl:text-[18px] max-xl:leading-[24px] max-lg:text-[18px] max-lg:leading-[24px] text-[#314a10cc]  mb-[60px] max-xxl:mb-[50px] max-2xl:mb-[30px]  max-xl:mb-[20px] font-semibold  mb-[20px]!">
                Why it helps:
              </p>

              <ul className="font-semibold">
                <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px] max-lg:my-[15px]  max-md:my-[10px] gap-[10px] text-[#314a10]  max-xl:text-[16px] max-xl:leading-[22px]  max-md:leading-[18px]  ">
                  <div className="w-[25px] h-[25px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[1px] bg-[#bcd59b] flex justify-center items-center">
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
                  <p>Targets metabolic imbalance at the root</p>
                </li>
                <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px] max-lg:my-[15px]  max-md:my-[10px] gap-[10px] text-[#314a10]  max-xl:text-[16px] max-xl:leading-[22px]  max-md:leading-[18px]  ">
                  <div className="w-[25px] h-[25px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[1px] bg-[#bcd59b] flex justify-center items-center">
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
                  <p>Natural and non-invasive</p>
                </li>
                <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px] max-lg:my-[15px]  max-md:my-[10px] gap-[10px] text-[#314a10]  max-xl:text-[16px] max-xl:leading-[22px]  max-md:leading-[18px]  ">
                  <div className="w-[25px] h-[25px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[1px] bg-[#bcd59b] flex justify-center items-center">
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
                  <p>Encourages sustainable, healthy habits</p>
                </li>
              </ul>
              <p className="text-[22px] leading-[30px] max-xxl:text-[20px] max-xxl:leading-[26px]  max-xl:text-[18px] max-xl:leading-[24px] max-lg:text-[18px] max-lg:leading-[24px] text-[#314a10cc]  mb-[60px] max-xxl:mb-[50px] max-2xl:mb-[30px]  max-xl:mb-[20px] font-semibold  mb-[20px]!">
                Benefits include:
              </p>

              <ul className="font-semibold">
                <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px] max-lg:my-[15px]  max-md:my-[10px] gap-[10px] text-[#314a10]  max-xl:text-[16px] max-xl:leading-[22px]  max-md:leading-[18px]  ">
                  <div className="w-[25px] h-[25px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[1px] bg-[#bcd59b] flex justify-center items-center">
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
                  <p>Gradual and safe inch loss-without side effects</p>
                </li>
                <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px] max-lg:my-[15px]  max-md:my-[10px] gap-[10px] text-[#314a10]  max-xl:text-[16px] max-xl:leading-[22px]  max-md:leading-[18px]  ">
                  <div className="w-[25px] h-[25px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[1px] bg-[#bcd59b] flex justify-center items-center">
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
                  <p>Detoxification and improved digestive function</p>
                </li>
                <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px] max-lg:my-[15px]  max-md:my-[10px] gap-[10px] text-[#314a10]  max-xl:text-[16px] max-xl:leading-[22px]  max-md:leading-[18px]  ">
                  <div className="w-[25px] h-[25px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[1px] bg-[#bcd59b] flex justify-center items-center">
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
                  <p>Increased energy and overall vitality</p>
                </li>
                <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px] max-lg:my-[15px]  max-md:my-[10px] gap-[10px] text-[#314a10]  max-xl:text-[16px] max-xl:leading-[22px]  max-md:leading-[18px]  ">
                  <div className="w-[25px] h-[25px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[1px] bg-[#bcd59b] flex justify-center items-center">
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
                  <p>Greater awareness of healthy living practices </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
