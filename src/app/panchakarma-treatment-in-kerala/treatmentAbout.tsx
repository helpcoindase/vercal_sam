import Image from "next/image";
import { ASSET_PREFIX } from "../../../config";

export default function About() {
  return (
    <>
      <section className="pt-[140px]  max-2xl:pt-[100px]   max-xl:pt-[80px]  max-md:pt-[50px]">
        <div className="w-[80%] m-auto max-2xl:w-[80%] max-lg:w-[90%] max-w-[100rem]">
          <div className="grid  grid-cols-[45%_38%] max-2xl:grid-cols-[45%_35%] max-xl:grid-cols-[50%_40%] max-md:grid-cols-[55%_35%]  max-[767px]:grid-cols-[100%]! justify-between items-center gap-[150px] max-2xl:gap-[100px] max-xl:gap-[0px]  max-xl:justify-between">
            <div>
              {/* <p className="uppercase text-[#361902cc] text-[18px] leading-[22px] max-xl:text-[16px] max-xl:leading-[20px]  max-lg:text-[16px] max-lg:leading-[20px]  font-semibold  text-start w-[fit-content] tracking-[1px]">
                THE AYURVEDIC Hospital
              </p> */}
              <h2
                className="text-[#314a10] font-[source,serief4] my-[20px] font-normal text-start w-[fit-content]


                         text-[30px] leading-[36px]
                            sm:text-[34px] sm:leading-[40px]
                               md:text-[38px] md:leading-[45px]
                                  xl:text-[45px] xl:leading-[52px]
                                     2xl:text-[60px] 2xl:leading-[65px]

                       ">
                Panchakarma Treatment
              </h2>
              <div
                className=" mt-[20px] relative w-[100%] h-[auto]   relative  z-[1] after:absolute  after:content-[] after:w-[100%] after:h-[100%]
                  after:top-[-15px] after:left-[0px] after:border-[1px_1px_0px_1px]  after:rounded-[170px_170px_0px_0px]  max-xl:after:rounded-[90px_90px_0px_0px] after:border-[#ed9b5d] after:z-[-4] sticky top-[30px] hidden max-[767px]:hidden!">
                <div className="rounded-[170px_170px_0px_0px] max-xl:rounded-[90px_90px_0px_0px] overflow-hidden">
                  <Image
                    width={580}
                    height={750}
                    className=" w-[100%] h-[auto] max-h-[800px]"
                    alt="Ayuvedic Knee Pain Treatment"
                    src={`${ASSET_PREFIX}/assets/images/ayurvedic-knee-pain-treatment.webp`}
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
                <Image
                  width={424}
                  height={23}
                  className="w-[80%] h-[auto] absolute right-[0px] bottom-[40px]"
                  alt="Wave"
                  src={`${ASSET_PREFIX}/assets/images/wave-shape.webp`}
                />
              </div>
              <p className="text-[16px] leading-[24xpx] text-[#341802] mt-[40px] mb-[20px]  w-[80%]  max-md:w-[90%] max-sm:w-[100%] max-[500px]:text-center">
                Panchakarma Treatment in Kerala is much recognized and
                preferred and has remained one of the major attractive elements
                in medical tourism. It is a stream of ayurvedic treatment that
                is followed and primarily performed to remove toxins from one’s
                body. At Samwarthika, we help our clients to get the best result
                out of Panchakarma treatment.
              </p>
              <p className="text-[16px] leading-[24xpx] text-[#341802] mb-[20px] w-[80%]  max-md:w-[90%] max-sm:w-[100%] max-[500px]:text-center">
                As the name suggests,’ Pancha’ means 5 and ‘Karma’ indicates
                actions, thus Panchakarma means the five methods of actions
                performed following ayurveda to get the desired results. These
                actions are performed to purify your body from harmful and
                undesirable toxins. These 5 body cleansing actions are Vamana (a
                bio-cleansing measure meant to eliminate various impurities that
                get accumulated in the upper gastrointestinal tract), Virechana
                (a procedure in which the vitiated doshas are eliminated through
                the anal path), Vasthi (a procedure by which the medicines are
                held in suspension and administered through one’s rectum or
                genitourinary tract), Nasya (The process of administration of
                medicines through nostrils is called Nasya), Rakthamokshana (the
                procedure of eliminating impure and toxic blood from the
                patient’s body)
              </p>

              <div
                className="relative w-[100%] h-[auto]   relative  z-[1] after:absolute  after:content-[] after:w-[100%] after:h-[100%]
                              after:top-[-15px] after:left-[0px] after:border-[1px_1px_0px_1px]  after:rounded-[120px_120px_0px_0px]  max-xl:after:rounded-[90px_90px_0px_0px] max-md:after:rounded-[70px_70px_0px_0px] after:border-[#ed9b5d] after:z-[-4]  hidden max-md:block  max-[767px]:max-w-[400px] max-[767px]:m-[auto] max-[767px]:mt-[60px] max-sm:mt-[40px] max-[700px]:w-[70%] hidden max-[767px]:block">
                <div className="rounded-[120px_120px_0px_0px] max-xl:rounded-[90px_90px_0px_0px] max-md:rounded-[70px_70px_0px_0px] overflow-hidden">
                  <Image
                    width={580}
                    height={750}
                    className="w-[100%] h-[auto]"
                    alt="Ayuvedic Knee Pain Treatment"
                    src={`${ASSET_PREFIX}/assets/images/ayurvedic-knee-pain-treatment.webp`}
                  />
                </div>
                <div className="absolute rounded-[50%] overflow-hidden  max-lg:p-[6px] w-[180px] h-[180px] max-xl:w-[150px] max-xl:h-[150px]  left-[-25%] bottom-[-3%]  bg-[#fff]  max-:w-[100px] max-:h-[100px] ">
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
            <div>
              <div
                className=" mt-[20px] relative w-[100%] h-[auto]   relative  z-[1] after:absolute  after:content-[] after:w-[100%] after:h-[100%]
                  after:top-[-15px] after:left-[0px] after:border-[1px_1px_0px_1px]  after:rounded-[170px_170px_0px_0px]  max-xl:after:rounded-[90px_90px_0px_0px] after:border-[#ed9b5d] after:z-[-4] sticky top-[30px] max-[767px]:hidden">
                <div className="rounded-[170px_170px_0px_0px] max-xl:rounded-[90px_90px_0px_0px] overflow-hidden">
                  <Image
                    width={580}
                    height={750}
                    className=" w-[100%] h-[auto] max-h-[800px]"
                    alt="Ayuvedic Knee Pain Treatment"
                    src={`${ASSET_PREFIX}/assets/images/ayurvedic-knee-pain-treatment.webp`}
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

          <div
            className="grid  grid-cols-[38%_45%] max-2xl:grid-cols-[35%_45%] max-xl:grid-cols-[40%_50%] max-md:grid-cols-[35%_55%]  max-[767px]:grid-cols-[100%]! justify-between items-center gap-[150px] max-2xl:gap-[100px] max-xl:gap-[0px]  max-xl:justify-between 
          mt-[20px] sm:mt-[30px] md:mt-[40px] lg:mt-[50px] xl:mt-[60px] 2xl:mt-[100px]">
            <div>
              <div
                className=" mt-[20px] relative w-[100%] h-[auto]   relative  z-[1] after:absolute  after:content-[] after:w-[100%] after:h-[100%]
                  after:top-[-15px] after:left-[0px] after:border-[1px_1px_0px_1px]  after:rounded-[170px_170px_0px_0px]  max-xl:after:rounded-[90px_90px_0px_0px] after:border-[#ed9b5d] after:z-[-4] sticky top-[30px] max-[767px]:hidden">
                <div className="rounded-[170px_170px_0px_0px] max-xl:rounded-[90px_90px_0px_0px] overflow-hidden">
                  <Image
                    width={580}
                    height={750}
                    className=" w-[100%] h-[auto] max-h-[800px]"
                    alt="Ayuvedic Knee Pain Treatment"
                    src={`${ASSET_PREFIX}/assets/images/ayurvedic-knee-pain-treatment.webp`}
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
                <Image
                  width={424}
                  height={23}
                  className="w-[80%] h-[auto] absolute right-[0px] bottom-[40px]"
                  alt="Wave"
                  src={`${ASSET_PREFIX}/assets/images/wave-shape.webp`}
                />
              </div>
            </div>

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
                Benefits of Panchakarma Treatment in Kerala
              </h3>
              <div
                className="relative w-[100%] h-[auto]   relative  z-[1] after:absolute  after:content-[] after:w-[100%] after:h-[100%]
                              after:top-[-15px] after:left-[0px] after:border-[1px_1px_0px_1px]  after:rounded-[120px_120px_0px_0px]  max-xl:after:rounded-[90px_90px_0px_0px] max-md:after:rounded-[70px_70px_0px_0px] after:border-[#ed9b5d] after:z-[-4]  hidden max-md:block  max-[767px]:max-w-[400px] max-[767px]:m-[auto] max-[767px]:mt-[60px] max-sm:mt-[40px] max-[700px]:w-[70%]  max-[768px]:hidden!">
                <div className="rounded-[120px_120px_0px_0px] max-xl:rounded-[90px_90px_0px_0px] max-md:rounded-[70px_70px_0px_0px] overflow-hidden">
                  <Image
                    width={580}
                    height={750}
                    className="w-[100%] h-[auto]"
                    alt="Ayuvedic Knee Pain Treatment"
                    src={`${ASSET_PREFIX}/assets/images/ayurvedic-knee-pain-treatment.webp`}
                  />
                </div>
                <div className="absolute rounded-[50%] overflow-hidden  max-lg:p-[6px] w-[180px] h-[180px] max-xl:w-[150px] max-xl:h-[150px]  left-[-25%] bottom-[-3%]  bg-[#fff]  max-:w-[100px] max-:h-[100px] ">
                  <Image
                    width={50}
                    height={50}
                    className="w-[100%] h-[auto]"
                    alt="Samwarthika Logo"
                    src={`${ASSET_PREFIX}/assets/images/samwarthika-logo.webp`}
                  />
                </div>
              </div>
              <p className="text-[16px] leading-[24xpx]  text-[#341802]  mt-[40px] mb-[20px]  w-[80%]  max-md:w-[90%] max-sm:w-[100%] max-[500px]:text-center">
                The benefit of this mode of treatment is many. The five
                procedures involved in the treatment removes toxic components
                from one’s body effectively. Panchakarma improves both physical
                and mental wellness and restore the complete balance of your
                wealth. Besides this, it also installs a better state of health
                by enabling the body to adopt resistance to toxins and diseases
                by building a strong immune system. Therefore you get a complete
                rejuvenation of your body and soul. Getting Panchakarma
                Treatment in Kerala from Samwarthika Ayurveda Hospital will
                contribute to your overall well-being and improves fitness.
              </p>
              <p className="text-[16px] leading-[24xpx]  text-[#341802] mb-[20px]  w-[80%]  max-md:w-[90%] max-sm:w-[100%] max-[500px]:text-center">
                How often should you do Panchakarma and are there any side
                effects? Based on one&apos;s health condition and body state,
                Panchakarma treatment span can vary. It is better to seek the
                advice of our expert Panchakarma practioners in case of more
                serious health conditions.
              </p>
              <p className="text-[16px] leading-[24xpx]  text-[#341802] mb-[20px]  w-[80%]  max-md:w-[90%] max-sm:w-[100%] max-[500px]:text-center">
                Ayurveda is a treatment method that is administered in a
                specific method and the patients have to follow a healthy
                lifestyle in order to get the desired result. On the contrary
                there can be side effects if the patients fail to keep up with
                the instructions. Samwarthika Ayurveda Hospital employs only the
                best-qualified panchakarma practitioners for your treatment.
              </p>

              <div
                className="relative w-[100%] h-[auto]   relative  z-[1] after:absolute  after:content-[] after:w-[100%] after:h-[100%]
                              after:top-[-15px] after:left-[0px] after:border-[1px_1px_0px_1px]  after:rounded-[120px_120px_0px_0px]  max-xl:after:rounded-[90px_90px_0px_0px] max-md:after:rounded-[70px_70px_0px_0px] after:border-[#ed9b5d] after:z-[-4]  hidden max-md:block  max-[767px]:max-w-[400px] max-[767px]:m-[auto] max-[767px]:mt-[60px] max-sm:mt-[40px] max-[700px]:w-[70%] max-[768px]:hidden">
                <div className="rounded-[120px_120px_0px_0px] max-xl:rounded-[90px_90px_0px_0px] max-md:rounded-[70px_70px_0px_0px] overflow-hidden">
                  <Image
                    width={580}
                    height={750}
                    className="w-[100%] h-[auto]"
                    alt="Ayuvedic Knee Pain Treatment"
                    src={`${ASSET_PREFIX}/assets/images/ayurvedic-knee-pain-treatment.webp`}
                  />
                </div>
                <div className="absolute rounded-[50%] overflow-hidden  max-lg:p-[6px] w-[180px] h-[180px] max-xl:w-[150px] max-xl:h-[150px]  left-[-25%] bottom-[-3%]  bg-[#fff]  max-:w-[100px] max-:h-[100px] ">
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
        </div>
      </section>
    </>
  );
}
