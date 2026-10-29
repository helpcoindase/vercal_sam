import { ASSET_PREFIX } from "../../../../config";
import Image from "next/image";
export default function MedKerala() {
  return (
    <>
      <section className="py-[140px]  max-2xl:py-[100px]   max-xl:py-[80px]  max-md:py-[50px]">
        <div className="w-[90%] m-[auto] max-w-[120rem]">
          <h3
            className="text-[#e36300] m-auto text-[#304A10] font-[source,serief4] text-[60px] leading-[65px] max-2xl:text-[52px]
            leading-[58px] max-xl:text-[46px] max-xl:leading-[50px] max-lg:text-[40px] max-lg:leading-[46px] max-mlg:text-[38px] max-mlg:leading-[42px] font-normal   text-center w-[fit-content]">
            Why Choose
          </h3>{" "}
          <h3
            className="m-auto text-[#304A10] font-[source,serief4] mb-[20px]  text-[52px] leading-[58px] max-2xl:text-[46px]
            leading-[52px] max-xl:text-[40px] max-xl:leading-[48px] max-lg:text-[38px] max-lg:leading-[40px] max-mlg:text-[32px] max-mlg:leading-[38px] font-normal   text-center w-[fit-content]">
            Kerala for Ayurveda
            <span className="text-[#e36300]  font-bold">?</span>
          </h3>
          <div className="w-[80%] my-[30px] max-xl:my-[30px] max-md:my-[30px] flex flex-wrap gap-[30px] max-md:flex-col justify-end m-[auto]  max-[1200px]:w-[100%] max-mlg:w-[90%]  max-md:w-[100%] relative">
            <p className="m-auto  text-[#361902cc] text-[20px]  leading-[24px] max-xl:text-[18px] max-xl:leading-[22px]  max-lg:text-[16px] max-lg:leading-[20px]  font-medium  text-center  w-[70%] max-lg:w-[100%] max-2xl:w-[80%] max-md:w-[100%]">
              Kerala is globally recognized as the heart of Ayurvedic medical
              tourism.
            </p>
            <p className="text-center text-[#341903] text-[16px] leading-[24px] font-medium   w-[60%] max-lg:w-[100%] max-2xl:w-[70%] max-md:w-[100%] m-auto">
              Its lush greenery, tranquil climate and rich healing traditions
              create an ideal retreat for holistic healing. At Samwarthika,
              nestled in peaceful Ernakulam, we offer the warmth of nature
              alongside modern comforts for a truly rejuvenating experience.
            </p>
            {/* </div> */}
          </div>
          <div className="w-[80%] m-auto max-2xl:w-[80%] max-lg:w-[90%]">
            <div className="grid  grid-cols-[45%_38%] max-2xl:grid-cols-[45%_35%] max-xl:grid-cols-[50%_40%] max-md:grid-cols-[55%_35%]  max-[767px]:grid-cols-[100%]! justify-between items-center gap-[150px] max-2xl:gap-[100px] max-xl:gap-[0px]  max-xl:justify-between">
              <div>
                {/* <p className="uppercase text-[#361902cc] text-[18px] leading-[22px] max-xl:text-[16px] max-xl:leading-[20px]  max-lg:text-[16px] max-lg:leading-[20px]  font-semibold  text-start w-[fit-content] tracking-[1px]">
                          THE AYURVEDIC Hospital
                        </p> */}
                <h3
                  className="text-[#314a10] font-[source,serief4] my-[20px] font-normal text-start w-[fit-content]
                      
                      
                                   text-[30px] leading-[36px]
                                      sm:text-[34px] sm:leading-[40px]
                                         md:text-[38px] md:leading-[45px]
                                            xl:text-[45px] xl:leading-[52px]
                                               2xl:text-[60px] 2xl:leading-[65px]
                      
                                 ">
                  Why Choose Samwarthika
                  <span className="text-[#e36300]  font-bold">?</span>
                </h3>
                <div
                  className="relative w-[100%] h-[auto]   relative  z-[1] after:absolute  after:content-[] after:w-[100%] after:h-[100%]
                                        after:top-[-15px] after:left-[0px] after:border-[1px_1px_0px_1px]  after:rounded-[120px_120px_0px_0px]  max-xl:after:rounded-[90px_90px_0px_0px] max-md:after:rounded-[70px_70px_0px_0px] after:border-[#ed9b5d] after:z-[-4]  hidden max-md:block  max-[767px]:max-w-[400px] max-[767px]:m-[auto] max-[767px]:mt-[60px] max-sm:mt-[40px] max-[700px]:w-[70%]">
                  <div className="rounded-[120px_120px_0px_0px] max-xl:rounded-[90px_90px_0px_0px] max-md:rounded-[70px_70px_0px_0px] overflow-hidden">
                    <Image
                      width={580}
                      height={750}
                      className="w-[100%] h-[auto]"
                      alt="Why Choose Samwarthika?"
                      src={`${ASSET_PREFIX}/assets/images/why-choose-samwarthika.webp`}
                    />
                  </div>
                  <div className="absolute rounded-[50%] overflow-hidden  max-lg:p-[6px] w-[180px] h-[180px] max-xl:w-[150px] max-xl:h-[150px]  left-[-25%] bottom-[-3%]  bg-[#fff]  max-:w-[100px] max-:h-[100px] ">
                    <Image
                      width={50}
                      height={50}
                      className="w-[100%] h-[auto]"
                      alt="abt-img"
                      src={`${ASSET_PREFIX}/assets/images/samwarthika-logo.webp`}
                    />
                  </div>
                </div>

                <ul className="pl-[0] sm:pl-[20px]">
                  <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[#341802]  max-md:leading-[22px]">
                    <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
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
                    <p>
                      <b>Expert Ayurvedic Care: </b>Our skilled team of
                      physicians and therapists delivers deeply personalized,
                      results-focused healing.
                    </p>
                  </li>
                  <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[#341802]  max-md:leading-[22px]">
                    <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
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
                    <p>
                      <b>Holistic Treatment Therapies:</b> From Panchakarma and
                      Rasayana to therapeutic massages, each plan is designed to
                      address your specific health goals
                    </p>
                  </li>
                  <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[#341802]  max-md:leading-[22px]">
                    <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
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
                    <p>
                      <b>Tailored Healing Packages:</b> Whether you need a short
                      recovery or a long-term rejuvenation plan, our flexible
                      packages (7 to 28 days) are customized to match your
                      health needs.
                    </p>
                  </li>
                  <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[#341802]  max-md:leading-[22px]">
                    <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
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
                    <p>
                      <b>World-Class Facilities:</b> Samwarthika blends
                      traditional Kerala architecture with modern
                      amenities-comfortable rooms, herbal gardens, vegetarian
                      cuisine, yoga hall-all built to promote healing and peace.
                    </p>
                  </li>
                  <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[#341802]  max-md:leading-[22px]">
                    <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
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
                    <p>
                      <b>Convenient & Transparent Pricing:</b> Affordable
                      packages, clear pricing and no hidden charges-an honest
                      path to wellness.
                    </p>
                  </li>
                </ul>
              </div>
              <div>
                <div
                  className=" mt-[20px] relative w-[100%] h-[auto]   relative  z-[1] after:absolute  after:content-[] after:w-[100%] after:h-[100%]
                            after:top-[-15px] after:left-[0px] after:border-[1px_1px_0px_1px]  after:rounded-[170px_170px_0px_0px]  max-xl:after:rounded-[90px_90px_0px_0px] after:border-[#ed9b5d] after:z-[-4] sticky top-[30px] max-[767px]:hidden">
                  <div className="rounded-[170px_170px_0px_0px] max-xl:rounded-[90px_90px_0px_0px] overflow-hidden">
                    <Image
                      width={580}
                      height={750}
                      className=" w-[100%] h-[auto] max-h-[800px]"
                      alt="Why Choose Samwarthika?"
                      src={`${ASSET_PREFIX}/assets/images/why-choose-samwarthika.webp`}
                    />
                  </div>
                  <div className="absolute rounded-[50%] overflow-hidden  max-lg:p-[6px] w-[210px] h-[210px] max-xl:w-[180px] max-xl:h-[180px] max-lg:w-[100px] max-lg:h-[100px] left-[-20%] bottom-[5%]  bg-[#fff] ">
                    <Image
                      width={50}
                      height={50}
                      className="w-[100%] h-[auto]"
                      alt="abt-img"
                      src={`${ASSET_PREFIX}/assets/images/samwarthika-logo.webp`}
                    />
                  </div>
                  <Image
                    width={424}
                    height={23}
                    className="w-[80%] h-[auto] absolute right-[0px] bottom-[40px]"
                    alt="Wave"
                    src={`${ASSET_PREFIX}/assets/images/wave-shape.webp`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
