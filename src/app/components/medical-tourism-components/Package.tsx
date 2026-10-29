import Image from "next/image";
import { ASSET_PREFIX } from "../../../../config";

export default function Package() {
  return (
    <>
      <section className="py-[140px]  max-2xl:py-[100px]   max-xl:py-[80px]  max-md:py-[50px]">
        <div className="w-[90%] m-auto">
          <div className=" w-[80%] max-xxl:w-[85%] m-auto grid grid-cols-[49%_49%] max-xl:grid-cols-[49%_50%]  max-md:flex max-md:flex-col-reverse max-md:gap-[10px] justify-between  max-2xl:w-[90%]  max-lg:w-[100%]  max-md:max-h-[400px]">
            <div className="group h-[fit]   rounded-[120px_30px_30px_30px] max-xl:rounded-[100px_32px_20px_20px] max-lg:rounded-[80px_20px_20px_20px] max-md:rounded-[80px_20px_20px_20px] overflow-hidden">
              <Image
                width={300}
                height={600}
                className="w-full h-[100%] object-cover object-center"
                alt="Ayurveda Treatment Hospital in Kerala"
                src={`${ASSET_PREFIX}/assets/images/ayurveda-treatment-hospital-in-kerala.webp`}
              />
            </div>
            <div className="bg-[#f0f0f0]  rounded-[30px_120px_30px_30px] max-xl:rounded-[32px_100px_20px_20px] max-lg:rounded-[20px_80px_20px_20px] max-md:rounded-[20px_80px_20px_20px]  p-[80px_60px]  max-xxl:p-[80px_40px] max-2xl:p-[60px_40px] max-xl:p-[40px_25px]">
              {/* <p className="uppercase text-[#361902cc] text-[18px]  leading-[22px] max-xl:text-[16px] max-xl:leading-[20px]  max-lg:text-[16px] max-lg:leading-[20px]  font-semibold  text-start w-[fit-content]">
                THE AYURVEDIC Hospital
              </p> */}
              <h3
                className="text-[#314a10] font-[source,serief4] mb-[20px] xxl:text-[55px] xxl:leading-[57px] text-[50px] leading-[52px] max-2xl:text-[42px]
                                   leading-[48px] max-xl:text-[36px] max-xl:leading-[40px] max-lg:text-[30px] max-lg:leading-[36px] max-mlg:text-[28px] max-mlg:leading-[32px] font-normal   text-start w-[fit-content]">
                Our Signature <br />
                Package
              </h3>
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
              <p className="text-[22px] leading-[30px] max-xxl:text-[20px] max-xxl:leading-[26px]  max-xl:text-[18px] max-xl:leading-[24px] max-lg:text-[16px] max-lg:leading-[22px] text-[#314a10cc]  mt-[35px] max-xxl:mt-[30px] max-2xl:mt-[25px]  max-xl:mt-[20px] font-semibold">
                At Samwarthika, we understand that each person is unique and so
                are their body health needs. Our Ayurveda medical tourism
                packages are designed carefully to cater to the different needs
                of our patients. Our package time ranges from 7 days to 28 days
                depending on the condition and disease.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
