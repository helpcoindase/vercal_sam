import Image from "next/image";
import Link from "next/link";
import { ASSET_PREFIX } from "../../../../config";
export default function Departmentlist() {
  return (
    <>
      <section className="py-[140px]  max-2xl:py-[100px]   max-xl:py-[80px]  max-md:py-[50px]">
        <div className="w-[90%] m-[auto]">
          <p className="uppercase text-[#361902cc] text-[18px] leading-[22px] max-xl:text-[16px] max-xl:leading-[20px]  max-lg:text-[16px] max-lg:leading-[20px]  font-semibold  text-start w-[fit-content] tracking-[1px] m-auto">
            THE AYURVEDIC TREATMENTS
          </p>
          <h2
            className="m-auto text-[#314a10] font-[source,serief4] my-[20px] font-normal


             text-[30px] leading-[36px]
                sm:text-[34px] sm:leading-[40px]
                   md:text-[38px] md:leading-[45px]
                      xl:text-[45px] xl:leading-[52px]
                         2xl:text-[60px] 2xl:leading-[65px]   text-center  max-w-[35%] max-2xl:max-w-[45%] max-xl:max-w-[40%]  max-md:max-w-[55%] max-sm:max-w-[70%]">
            Get a Therapy of your Choice
          </h2>
          <div className="w-[80%] mt-[80px] max-xl:mt-[60px] max-md:mt-[40px] flex flex-wrap gap-[30px] max-md:flex-col justify-end m-[auto]  max-[1200px]:w-[100%] max-mlg:w-[90%]  max-md:w-[100%] relative">
            {/* <div className="kn-div  relative grid grid-cols-[60%_165px] max-xxl:grid-cols-[60%_165px] max-[1200px]:grid-cols-[100%] gap-[225px] max-xxl:gap-[5%] max-[1200px]:gap-[20px] justify-end max-[1200px]:justify-center items-end max-[1200px]:items-center mt-[80px]  max-2xl:mt-[60px] max-lg:mt-[40px] max-mlg:mt-[20px]"> */}
            <p className="text-center text-[#341903] text-[16px] leading-[24px] font-medium   w-[50%] max-lg:w-[100%] max-2xl:w-[60%] max-md:w-[100%] m-auto">
              Samwarthika offers a calming retreat featuring cozy,
              patient-friendly rooms, a spacious dining hall and a lush herb
              garden for peaceful relaxation. Our vegetarian kitchen serves
              wholesome Ayurvedic meals, while our multilingual library provides
              a quiet escape. With Wi-Fi, hot water and laundry facilities
              available, comfort and well-being are always at hand.
            </p>

            {/* </div> */}
          </div>
          <div className="mt-[60px] max-xl:mt-[40px] grid grid-cols-2 max-mlg:grid-cols-2 max-sm:grid-cols-1 gap-[30px] max-2xl:gap-[20px] max-mlg:gap-[15px]  w-[60%] max-2xl:w-[70%] max-mlg:w-[90%]  max-md:w-[100%] mx-auto">
            <div className="grid gap-[30px] max-2xl:gap-[20px] max-mlg:gap-[15px]">
              <div className="rounded-[30px] max-lg:rounded-[25px] max-mlg:rounded-[20px] max-md:rounded-[15px] overflow-hidden relative  group h-[fit-content] xxl:max-h-[350px] max-h-[350px] after:absolute after:top-[0px] after:left-[0px] after:w-[100%] after:h-[100%] after:content-[''] after:bg-[linear-gradient(0deg,rgba(0,0,0,0.56)_0%,rgba(255,255,255,0)_100%)] cursor-pointer relative">
                <Image
                  width={800}
                  height={600}
                  className="w-[100%] h-[100%] object-cover object-center transition duration-1000 group-hover:scale-[1.1]"
                  alt="Ayur Physio Treatment"
                  src={`${ASSET_PREFIX}/assets/images/ayur-physio-treatment.webp`}
                />
                <div className="z-[5] absolute flex justify-between items-end top-0 bottom-0 right-0 w-[100%] h-[100%] p-[30px]  max-lg:p-[20px] gap-[40px]  max-2xl:gap-[30px]  max-lg:gap-[20px]   max-mlg:gap-[20px] max-mlg:justify-start max-mlg:flex-col-reverse max-mlg:items-start">
                  <p className="xxl:text-[28px] xxl:leading-[34px] text-[24px] leading-[30px]  max-2xl:text-[22px] max-2xl:leading-[26px]  max-lg:text-[20px] max-lg:leading-[24px] max-mlg:text-[18px] max-mlg:leading-[22px]  max-md:text-[16px] max-md:leading-[20px] text-[#fff]   ">
                    Ayur <br />
                    Physio
                  </p>
                  {/* <p className="xxl:text-[16px] xxl:leading-[24px] text-[16px] leading-[22px] max-mlg:text-[12px] max-mlg:leading-[20px]  max-[700px]:hidden text-[#fff]/70  opacity-0 group-hover:opacity-[100]  transition duration-800">
                    The Ayurveda Hospital in Ernakulam offers therapies
                    including panchakarma, abhyanga, elakizhi, nasyam,
                  </p> */}
                </div>
                <Link
                  href="/ayur-physio-treatment-in-kerala"
                  className="absolute inset-0 z-10 cursor-pointer"
                  aria-label="Stretched link"></Link>
              </div>
              <div className="rounded-[30px] max-lg:rounded-[25px] max-mlg:rounded-[20px] max-md:rounded-[15px] overflow-hidden relative  group h-[fit-content] xxl:max-h-[350px] max-h-[350px] after:absolute after:top-[0px] after:left-[0px] after:w-[100%] after:h-[100%] after:content-[''] after:bg-[linear-gradient(0deg,rgba(0,0,0,0.56)_0%,rgba(255,255,255,0)_100%)] cursor-pointer relative">
                <Image
                  width={800}
                  height={600}
                  className="w-[100%] h-[100%] object-cover object-center transition duration-1000 group-hover:scale-[1.1]"
                  alt="Ayur Panchakarma"
                  src={`${ASSET_PREFIX}/assets/images/ayurvedic-panchakarma-hospital.webp`}
                />
                <div className="z-[5] absolute flex justify-between items-end top-0 bottom-0 right-0 w-[100%] h-[100%] p-[30px]  max-lg:p-[20px] gap-[40px]  max-2xl:gap-[30px]  max-lg:gap-[20px]   max-mlg:gap-[20px] max-mlg:justify-start max-mlg:flex-col-reverse max-mlg:items-start">
                  <p className="xxl:text-[28px] xxl:leading-[34px] text-[24px] leading-[30px]  max-2xl:text-[22px] max-2xl:leading-[26px]  max-lg:text-[20px] max-lg:leading-[24px] max-mlg:text-[18px] max-mlg:leading-[22px]  max-md:text-[16px] max-md:leading-[20px] text-[#fff]   ">
                    Ayurvedic <br />
                    Panchakarma
                  </p>
                  {/* <p className="xxl:text-[16px] xxl:leading-[24px] text-[16px] leading-[22px] max-mlg:text-[12px] max-mlg:leading-[20px]  max-[700px]:hidden text-[#fff]/70  opacity-0 group-hover:opacity-[100]  transition duration-800">
                    The Ayurveda Hospital in Ernakulam offers therapies
                    including panchakarma, abhyanga, elakizhi, nasyam,
                  </p> */}
                </div>
                <Link
                  href="/ayurvedic-panchakarma-treatment-in-kerala"
                  className="absolute inset-0 z-10 cursor-pointer"
                  aria-label="Stretched link"></Link>
              </div>
            </div>

            <div className="grid gap-[30px] max-2xl:gap-[20px] max-mlg:gap-[15px] ">
              <div className="rounded-[30px] max-lg:rounded-[25px] max-mlg:rounded-[20px] max-md:rounded-[15px] overflow-hidden relative  group h-[fit-content] xxl:max-h-[350px] max-h-[350px] after:absolute after:top-[0px] after:left-[0px] after:w-[100%] after:h-[100%] after:content-[''] after:bg-[linear-gradient(0deg,rgba(0,0,0,0.56)_0%,rgba(255,255,255,0)_100%)] cursor-pointer relative">
                <Image
                  width={800}
                  height={600}
                  className="w-[100%] h-[100%] object-cover object-center transition duration-1000 group-hover:scale-[1.1]"
                  alt="Yoga and Meditation"
                  src={`${ASSET_PREFIX}/assets/images/yoga-and-meditation.webp`}
                />
                <div className="z-[5] absolute flex justify-between items-end top-0 bottom-0 right-0 w-[100%] h-[100%] p-[30px]  max-lg:p-[20px] gap-[40px]  max-2xl:gap-[30px]  max-lg:gap-[20px]   max-mlg:gap-[20px] max-mlg:justify-start max-mlg:flex-col-reverse max-mlg:items-start">
                  <p className="xxl:text-[28px] xxl:leading-[34px] text-[24px] leading-[30px]  max-2xl:text-[22px] max-2xl:leading-[26px]  max-lg:text-[20px] max-lg:leading-[24px] max-mlg:text-[18px] max-mlg:leading-[22px]  max-md:text-[16px] max-md:leading-[20px] text-[#fff]   ">
                    Yoga & <br />
                    Meditation
                  </p>
                  {/* <p className="xxl:text-[16px] xxl:leading-[24px] text-[16px] leading-[22px] max-mlg:text-[12px] max-mlg:leading-[20px]  max-[700px]:hidden text-[#fff]/70  opacity-0 group-hover:opacity-[100]  transition duration-800">
                    The Ayurveda Hospital in Ernakulam offers therapies
                    including panchakarma, abhyanga, elakizhi, nasyam,
                  </p> */}
                </div>
                <Link
                  href="/yoga-and-meditation-retreat-in-kerala"
                  className="absolute inset-0 z-10 cursor-pointer"
                  aria-label="Stretched link"></Link>
              </div>
              <div className="rounded-[30px] max-lg:rounded-[25px] max-mlg:rounded-[20px] max-md:rounded-[15px] overflow-hidden relative  group h-[fit-content] xxl:max-h-[350px] max-h-[350px] after:absolute after:top-[0px] after:left-[0px] after:w-[100%] after:h-[100%] after:content-[''] after:bg-[linear-gradient(0deg,rgba(0,0,0,0.56)_0%,rgba(255,255,255,0)_100%)] cursor-pointer  relative">
                <Image
                  width={800}
                  height={600}
                  className="w-[100%] h-[100%] object-cover object-center transition duration-1000 group-hover:scale-[1.1]"
                  alt="Ayurvedic Cosmetology"
                  src={`${ASSET_PREFIX}/assets/images/ayurvedic-cosmetology-hospital.webp`}
                />
                <div className="z-[5] absolute flex justify-between items-end top-0 bottom-0 right-0 w-[100%] h-[100%] p-[30px]  max-lg:p-[20px] gap-[40px]  max-2xl:gap-[30px]  max-lg:gap-[20px]   max-mlg:gap-[20px] max-mlg:justify-start max-mlg:flex-col-reverse max-mlg:items-start">
                  <p className="xxl:text-[28px] xxl:leading-[34px] text-[24px] leading-[30px]  max-2xl:text-[22px] max-2xl:leading-[26px]  max-lg:text-[20px] max-lg:leading-[24px] max-mlg:text-[18px] max-mlg:leading-[22px]  max-md:text-[16px] max-md:leading-[20px] text-[#fff]   ">
                    Ayur
                    <br />
                    Cosmetology
                  </p>
                  {/* <p className="xxl:text-[16px] xxl:leading-[24px] text-[16px] leading-[22px] max-mlg:text-[12px] max-mlg:leading-[20px]  max-[700px]:hidden text-[#fff]/70  opacity-0 group-hover:opacity-[100]  transition duration-800">
                    The Ayurveda Hospital in Ernakulam offers therapies
                    including panchakarma, abhyanga, elakizhi, nasyam,
                  </p> */}
                </div>
                <Link
                  href="/ayur-cosmetology-treatment-in-kerala"
                  className="absolute inset-0 z-10 cursor-pointer"
                  aria-label="Stretched link"></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
