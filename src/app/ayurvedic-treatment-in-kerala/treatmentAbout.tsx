import Image from "next/image";
import { ASSET_PREFIX } from "../../../config";
import Link from "next/link";

export default function About() {
  return (
    <>
      <section className="pt-[70px]   max-xl:pt-[60px]  max-md:pt-[40px]">
        <div className="w-[80%] m-auto max-2xl:w-[80%] max-lg:w-[90%] max-w-[100rem]">
          <div className="grid  grid-cols-[50%_38%] max-2xl:grid-cols-[45%_35%] max-xl:grid-cols-[50%_40%] max-md:grid-cols-[55%_35%]  max-[767px]:grid-cols-[100%]! justify-between items-center gap-[150px] max-2xl:gap-[100px] max-xl:gap-[0px]  max-xl:justify-between">
            <div className="">
              {/* <p className="uppercase text-[#361902cc] text-[18px] leading-[22px] max-xl:text-[16px] max-xl:leading-[20px]  max-lg:text-[16px] max-lg:leading-[20px]  font-semibold  text-start w-[fit-content] tracking-[1px]">
                THE AYURVEDIC Hospital
              </p> */}
              <h2
                className="text-[#314a10] font-[source,serief4] my-[20px] font-normal text-start w-[fit-content]
            text-[30px] leading-[36px] sm:text-[34px] sm:leading-[40px] md:text-[38px] md:leading-[45px]
            xl:text-[45px] xl:leading-[52px] 2xl:text-[60px] 2xl:leading-[65px] mt-[0]
            
                       ">
                Samwarthika Ayurveda Hospital in Kerala
              </h2>
              <div
                className="relative w-[100%] h-[auto]   relative  z-[1] after:absolute  after:content-[] after:w-[100%] after:h-[100%]
                              after:top-[-15px] after:left-[0px] after:border-[1px_1px_0px_1px]  after:rounded-[120px_120px_0px_0px]  max-xl:after:rounded-[90px_90px_0px_0px] max-md:after:rounded-[70px_70px_0px_0px] after:border-[#ed9b5d] after:z-[-4]  hidden max-md:block  max-[767px]:max-w-[400px] max-[767px]:m-[auto] max-[767px]:mt-[60px] max-sm:mt-[40px] max-[700px]:w-[70%]  max-[767px]:hidden!">
                <div className="rounded-[120px_120px_0px_0px] max-xl:rounded-[90px_90px_0px_0px] max-md:rounded-[70px_70px_0px_0px] overflow-hidden">
                  <Image
                    width={580}
                    height={750}
                    className="w-[100%] h-[auto]"
                    alt="Best Ayurvedic Treatment in Kerala"
                    src={`${ASSET_PREFIX}/assets/images/best-ayurvedic-treatment-in-kerala.webp`}
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

              <p className="text-[16px] leading-[24xpx]  text-[#341802]  mt-[40px] mb-[20px]  w-[80%]  max-md:w-[90%] max-sm:w-[100%] max-[767px]:!mt-0 max-[500px]:text-center">
                Offers the best Ayurvedic treatment in Kochi and Kerala. Unlike
                other Ayurvedic treatment centers in Kerala, the practice of
                traditional Ayurveda is predominant at Samwarthika. Modern
                diagnostic methods using laboratory tests and imaging services
                are also used to support Physicians in their diagnosis.
                Ayurvedic treatment at Samwarthika is one of the best and the
                medicines prepared here are strictly guided and supervised by
                our Physicians following the classical texts. Oral medicines,
                physical therapies and the application of medicaments are
                advised to the patients after consulting the Physician. A
                full-fledged pharmacy and five fully equipped treatment rooms
                are here to support our patients. All Ayurveda treatments
                including Kerala Panchakarma procedures are carried out here by
                well-experienced therapists under the supervision of qualified
                Physicians. Yoga is suggested to the patients according to their
                disease conditions.{" "}
                <Link
                  href="/contact-us"
                  className="text-[#304a10] font-[600] border-b border-[#304a10] hover:border-[#e36300] hover:text-[#e36300]">
                  Get in touch
                </Link>{" "}
                with us and we are more than happy to help you choose the right
                treatment plan.
              </p>
              <p className="text-[22px] leading-[30xpx] font-[600] text-[#341802] mt-[30px] mb-[20px]  w-[80%]  max-md:w-[90%] max-sm:w-[100%]">
                Basic Concept of Ayurveda
              </p>
              <p className="text-[16px] leading-[24xpx]  text-[#341802]  mb-[40px]  w-[80%]  max-md:w-[90%] max-sm:w-[100%] max-[500px]:text-center">
                A Physician of knowledge needs to enter the inner body of the
                patient with the lamp of knowledge and understanding to treat
                diseases properly. Correct diagnosis is essential for effective
                treatment.
              </p>
              <div
                className="relative w-[100%] h-[auto]   relative  z-[1] after:absolute  after:content-[] after:w-[100%] after:h-[100%]
                              after:top-[-15px] after:left-[0px] after:border-[1px_1px_0px_1px]  after:rounded-[120px_120px_0px_0px]  max-xl:after:rounded-[90px_90px_0px_0px] max-md:after:rounded-[70px_70px_0px_0px] after:border-[#ed9b5d] after:z-[-4]   max-[767px]:max-w-[400px] max-[767px]:m-[auto] max-[767px]:mt-[60px] max-sm:mt-[40px] max-[700px]:w-[70%]  hidden max-[767px]:block">
                <div className="rounded-[120px_120px_0px_0px] max-xl:rounded-[90px_90px_0px_0px] max-md:rounded-[70px_70px_0px_0px] overflow-hidden">
                  <Image
                    width={580}
                    height={750}
                    className="w-[100%] h-[auto]"
                    alt="Best Ayurvedic Treatment in Kerala"
                    src={`${ASSET_PREFIX}/assets/images/best-ayurvedic-treatment-in-kerala.webp`}
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

            <div className="h-full">
              <div
                className="mt-[20px] relative w-[100%] h-[auto]   relative  z-[1] after:absolute  after:content-[] after:w-[100%] after:h-[100%]
                  after:top-[-15px] after:left-[0px] after:border-[1px_1px_0px_1px]  after:rounded-[170px_170px_0px_0px]  max-xl:after:rounded-[90px_90px_0px_0px] after:border-[#ed9b5d] after:z-[-4] sticky top-[150px] max-[767px]:hidden">
                <div className="rounded-[170px_170px_0px_0px] max-xl:rounded-[90px_90px_0px_0px] overflow-hidden  ">
                  <Image
                    width={580}
                    height={750}
                    className=" w-[100%] h-[auto] max-h-[800px]"
                    alt="Best Ayurvedic Treatment in Kerala"
                    src={`${ASSET_PREFIX}/assets/images/best-ayurvedic-treatment-in-kerala.webp`}
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
            className="grid  grid-cols-[38%_50%] max-2xl:grid-cols-[35%_45%] max-xl:grid-cols-[40%_50%] max-md:grid-cols-[35%_55%]  max-[767px]:grid-cols-[100%]! justify-between items-center gap-[150px] max-2xl:gap-[100px] max-xl:gap-[0px]  max-xl:justify-between
          mt-[2 0px] md:mt-[50px] 2xl:mt-[80px]">
            <div className="h-full">
              <div
                className=" mt-[20px] relative w-[100%] h-[auto]   relative  z-[1] after:absolute  after:content-[] after:w-[100%] after:h-[100%]
                  after:top-[-15px] after:left-[0px] after:border-[1px_1px_0px_1px]  after:rounded-[170px_170px_0px_0px]  max-xl:after:rounded-[90px_90px_0px_0px] after:border-[#ed9b5d] after:z-[-4] sticky top-[150px] max-[767px]:hidden">
                <div className="rounded-[170px_170px_0px_0px] max-xl:rounded-[90px_90px_0px_0px] overflow-hidden">
                  <Image
                    width={580}
                    height={750}
                    className=" w-[100%] h-[auto] max-h-[800px]"
                    alt="Best Ayurvedic Treatment in Kerala"
                    src={`${ASSET_PREFIX}/assets/images/best-ayurvedic-treatment-in-kerala.webp`}
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
                                     2xl:text-[60px] 2xl:leading-[65px]  max-w-[70%]  max-xl:max-e-[80%]  max-mlg:max-w-[90%]  max-sm:max-w-[100%]  mt-[0] max-[767px]:mt-[40px]
            
                       ">
                The diagnosis process in Ayurveda
              </h3>
              <div
                className="relative w-[100%] h-[auto]   relative  z-[1] after:absolute  after:content-[] after:w-[100%] after:h-[100%]
                              after:top-[-15px] after:left-[0px] after:border-[1px_1px_0px_1px]  after:rounded-[120px_120px_0px_0px]  max-xl:after:rounded-[90px_90px_0px_0px] max-md:after:rounded-[70px_70px_0px_0px] after:border-[#ed9b5d] after:z-[-4]  hidden max-md:block  max-[767px]:max-w-[400px] max-[767px]:m-[auto] max-[767px]:mt-[60px] max-sm:mt-[40px] max-[700px]:w-[70%] max-[767px]:hidden!">
                <div className="rounded-[120px_120px_0px_0px] max-xl:rounded-[90px_90px_0px_0px] max-md:rounded-[70px_70px_0px_0px] overflow-hidden">
                  <Image
                    width={580}
                    height={750}
                    className="w-[100%] h-[auto]"
                    alt="Best Ayurvedic Treatment in Kerala"
                    src={`${ASSET_PREFIX}/assets/images/best-ayurvedic-treatment-in-kerala.webp`}
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
              <p className="text-[16px] leading-[24xpx]  text-[#341802]  mt-[40px] mb-[20px]  w-[80%]  max-md:w-[90%] max-sm:w-[100%] max-[767px]:!mt-0 max-[500px]:text-center">
                Based on the definition of the inborn constitutional health
                state of a patient - Prakriti. The biomedical validity of
                constitutional assessment followed in Ayurveda has received
                confirmations from genomic studies.Health is an individual,
                relative state and constitution - prakriti- may explain why
                peculiar diseases occur to one patient and not to another one.
                The determination of - prakriti - which is assessed by
                considering psycho-physical attitudes and socio-cultural
                circumstances - allows to define how the individual can achieve
                good health. The patient needs to follow the Physician&apos;s
                Personal guidelines in order to achieve and maintain his ideal
                healthy state.
              </p>
              <p className="text-[16px] leading-[24xpx]  text-[#341802]  mb-[40px]  w-[80%]  max-md:w-[90%] max-sm:w-[100%] max-[500px]:text-center">
                According to Ayurveda, all matter in this Universe is made up of
                five eternal substances in various proportions known as
                Panchamahabhoothas - earth, air, fire, water and space. It
                further explains, humans are the micro version of the Universe.
                These five elements combined with the soul to create a living
                being. All the five elements exist in all things including our
                bodies and have specific qualities. These occur as Thridoshas -
                Vatha, Pitha and Kapha - in humans. Ayurveda speaks on balancing
                the body, mind and soul for a healthy life through balancing
                these three doshas.
              </p>

              <div
                className="relative w-[100%] h-[auto]   relative  z-[1] after:absolute  after:content-[] after:w-[100%] after:h-[100%]
                              after:top-[-15px] after:left-[0px] after:border-[1px_1px_0px_1px]  after:rounded-[120px_120px_0px_0px]  max-xl:after:rounded-[90px_90px_0px_0px] max-md:after:rounded-[70px_70px_0px_0px] after:border-[#ed9b5d] after:z-[-4]  hidden max-md:block  max-[767px]:max-w-[400px] max-[767px]:m-[auto] max-[767px]:mt-[60px] max-sm:mt-[40px] max-[700px]:w-[70%] max-[480px]:hidden">
                <div className="rounded-[120px_120px_0px_0px] max-xl:rounded-[90px_90px_0px_0px] max-md:rounded-[70px_70px_0px_0px] overflow-hidden">
                  <Image
                    width={580}
                    height={750}
                    className="w-[100%] h-[auto]"
                    alt="Best Ayurvedic Treatment in Kerala"
                    src={`${ASSET_PREFIX}/assets/images/best-ayurvedic-treatment-in-kerala.webp`}
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
