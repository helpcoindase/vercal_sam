import Image from "next/image";
import { ASSET_PREFIX } from "../../../../config";

export default function About() {
  return (
    <>
      <section className="pt-[140px]  max-2xl:pt-[100px]   max-xl:pt-[80px]  max-md:pt-[50px]">
        <div className="w-[90%] m-[auto] ">
          <div className="w-[80%] m-auto max-2xl:w-[80%] max-lg:w-[90%] max-w-[100rem]">
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
                                     2xl:text-[60px] 2xl:leading-[65px]  max-w-[70%]  max-xl:max-e-[80%]  max-mlg:max-w-[90%]  max-sm:max-w-[100%] 
            
                       ">
                  What the Program Includes
                </h3>
                <div
                  className="relative w-[100%] h-[auto]   relative  z-[1] after:absolute  after:content-[] after:w-[100%] after:h-[100%]
                              after:top-[-15px] after:left-[0px] after:border-[1px_1px_0px_1px]  after:rounded-[120px_120px_0px_0px]  max-xl:after:rounded-[90px_90px_0px_0px] max-md:after:rounded-[70px_70px_0px_0px] after:border-[#ed9b5d] after:z-[-4]  hidden max-md:block  max-[767px]:max-w-[400px] max-[767px]:m-[auto] max-[767px]:mt-[60px] max-sm:mt-[40px] max-[700px]:w-[70%]">
                  <div className="rounded-[120px_120px_0px_0px] max-xl:rounded-[90px_90px_0px_0px] max-md:rounded-[70px_70px_0px_0px] overflow-hidden">
                    <Image
                      width={580}
                      height={750}
                      className="w-[100%] h-[auto]"
                      alt="Ayurvedic Sinusitis Treatment"
                      src={`${ASSET_PREFIX}/assets/images/ayurvedic-sinusitis-treatment.webp`}
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

                <ul className="pl-[0] sm:pl-[20px]  pt-[40px]">
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
                      <b>Core Panchakarma (Śodhana) therapies:</b> Vamana,
                      Virechana, Nasya, Kashaya-Vasti, Snehavasti
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
                      <b>Pre-procedures:</b> Oleation & sudation to prepare the
                      body
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
                      <b>Supportive therapies:</b> Elakizhi, Abhyanga,
                      Pizhichil, Njavara-kizhi
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
                      <b> Dietary care:</b> Customized meals and specially
                      processed Karkitaka medicated gruel All elements are
                      designed specifically for the monsoon, following Ayurvedic
                      classics.
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
                      alt="Ayurvedic Sinusitis Treatment"
                      src={`${ASSET_PREFIX}/assets/images/ayurvedic-sinusitis-treatment.webp`}
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
