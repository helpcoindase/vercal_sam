import Image from "next/image";
import { ASSET_PREFIX } from "../../../config";

export default function BalanceDiet() {
  return (
    <>
      <section className=" pt-[100px] max-xl:pt-[80px] max-md:pt-[50px]">
        <div className="w-[90%] m-auto  max-w-[95rem]">
          <h3
            className="text-[#314a10] font-[source,serief4] my-[20px] text-[50px] leading-[52px] max-2xl:text-[42px]
           leading-[48px] max-xl:text-[36px] max-xl:leading-[40px] max-lg:text-[30px] max-lg:leading-[36px] max-mlg:text-[28px] max-mlg:leading-[32px] font-normal   text-center m-auto  max-w-[45%] max-2xl:max-w-[50%]  max-md:max-w-[55%] max-sm:max-w-[90%]">
            Benefits of Ayur Physio
          </h3>
          <p className="mt-[20px] text-[#3f2510] text-center m-auto  w-[60%] max-xl:w-[80%]  max-lg:w-[90%] max-sm:w-[100%] mb-[30px]">
            Physiotherapy approaches aim to rebuild strength to really and
            comfortably move.
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
                  <p>
                    <b>Pain Relief & Reduced Inflammation</b> Herbal therapies
                    target joint and muscle pain.
                  </p>
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
                  <p>
                    <b>Improved Mobility & Strength</b> Enhances flexibility,
                    circulation and muscular power.
                  </p>
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
                  <p>
                    <b> Holistic Recovery & Wellness</b> Combines physiotherapy
                    and Ayurveda for long-term health.
                  </p>
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
                  <p>
                    <b>Stress Relief & Mind Serenity</b> Integrative therapies
                    relax the nervous system and reduce anxiety.
                  </p>
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
                  <p>
                    <b>Augment Immunity and Vitality</b> Rasayana & detox
                    therapy strengthen the body&apos;s defenses and enhance the
                    body&apos;s energy levels.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
