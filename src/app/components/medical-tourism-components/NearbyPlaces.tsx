import Link from "next/link";
import { ASSET_PREFIX } from "../../../../config";
import Image from "next/image";
export default function NearbyPlaces() {
  return (
    <>
      <section className="pt-[140px]  max-2xl:pt-[100px]   max-xl:pt-[80px]  max-md:pt-[50px]">
        <div className="w-[90%] m-[auto] max-w-[120rem]">
          {/* <p className="m-auto uppercase text-[#361902cc] text-[20px]  leading-[24px] max-xl:text-[18px] max-xl:leading-[22px]  max-lg:text-[16px] max-lg:leading-[20px]  font-medium  text-center w-[fit-content]">
            THE AYURVEDIC TREATMENTS
          </p> */}
          <h3
            className="m-auto text-[#304A10] font-[source,serief4] mb-[20px] mt-[8px] text-[60px] leading-[65px] max-2xl:text-[52px]
           leading-[58px] max-xl:text-[46px] max-xl:leading-[50px] max-lg:text-[40px] max-lg:leading-[46px] max-mlg:text-[38px] max-mlg:leading-[42px] font-normal   text-center  max-w-[600px]">
            Beyond Healing Explore Local Gems
          </h3>
          <div className="w-[80%] mt-[80px] max-xl:mt-[60px] max-md:mt-[40px] flex flex-wrap gap-[30px] max-md:flex-col justify-end m-[auto]  max-[1200px]:w-[100%] max-mlg:w-[90%]  max-md:w-[100%] relative">
            {/* <div className="kn-div  relative grid grid-cols-[60%_165px] max-xxl:grid-cols-[60%_165px] max-[1200px]:grid-cols-[100%] gap-[225px] max-xxl:gap-[5%] max-[1200px]:gap-[20px] justify-end max-[1200px]:justify-center items-end max-[1200px]:items-center mt-[80px]  max-2xl:mt-[60px] max-lg:mt-[40px] max-mlg:mt-[20px]"> */}
            <p className="text-center text-[#341903] text-[16px] leading-[24px] font-medium   w-[50%] max-lg:w-[100%] max-2xl:w-[60%] max-md:w-[100%] m-auto">
              Enhance your Ayurveda journey with visits to nearby cultural
              landmarks like temples, churches and beaches-all easily
              accessible from Samwarthika while you rejuvenate.
            </p>
            {/* <div className="flex  justify-end absolute bottom-[0px]  right-[0px] max-lg:relative">
              <Link
                href=""
                className="uppercase border-1 text-[var(--primary)] border-[var(--primary)]  uppercase border-1  py-[10px] px-[30px] max-xl:py-[8px] max-xl:px-[25px] max-md:text-[16px] max-md:leading-[18px] flex  w-[fit-content] h-fit hover:bg-[#304A10] transition duration-300  hover:text-[#fff] tracking-[2px]">
                Know More
              </Link>
            </div> */}
            {/* </div> */}
          </div>
          <div className="mt-[60px] max-xl:mt-[40px] grid max-sm:grid-cols-1 grid-cols-3 max-mlg:grid-cols-2 gap-[30px] max-2xl:gap-[20px] max-mlg:gap-[15px] pt-[50px]  max-2xl:pt-[35px]  max-lg:pt-[25px] w-[80%] max-[1200px]:w-[100%] max-mlg:w-[90%]  max-md:w-[100%] mx-auto">
            <div className="grid gap-[30px] max-2xl:gap-[20px] max-mlg:gap-[15px]">
              <div className="rounded-[30px] max-lg:rounded-[25px] max-mlg:rounded-[20px] overflow-hidden relative  group h-[fit-content] xxl:max-h-[295px] max-h-[260px] after:absolute after:top-[0px] after:left-[0px] after:w-[100%] after:h-[100%] after:content-[''] after:bg-[linear-gradient(0deg,rgba(0,0,0,0.56)_0%,rgba(255,255,255,0)_100%)]  ">
                <Image
                  width={800}
                  height={600}
                  className="w-[100%] h-[100%] object-cover object-center transition duration-1000 group-hover:scale-[1.1]"
                  alt="Chotanikkara Temple"
                  src={`${ASSET_PREFIX}/assets/images/chotanikkara-temple.webp`}
                />
                <div className="z-[5] absolute flex flex-col gap-[15px] items-start justify-end top-0 bottom-0 right-0 w-[100%] h-[100%] p-[30px]  max-lg:p-[20px]  ">
                  <p className="p-[8px_15px] rounded-xl text-white border text-[16px] leading-[22px] ">
                    {" "}
                    30.2 km from Samwarthika{" "}
                  </p>
                  <p className="xxl:text-[28px] xxl:leading-[34px] text-[24px] leading-[30px]  max-2xl:text-[22px] max-2xl:leading-[26px]  max-lg:text-[20px] max-lg:leading-[24px] max-mlg:text-[18px] max-mlg:leading-[22px]  max-md:text-[16px] max-md:leading-[20px] text-[#fff]   ">
                    Chottanikkara
                    <br />
                    Temple
                  </p>

                  {/* <p className="xxl:text-[16px] xxl:leading-[24px] text-[16px] leading-[22px] max-mlg:text-[12px] max-mlg:leading-[20px]  max-[700px]:hidden text-[#fff]/70  opacity-0 group-hover:opacity-[100]  transition duration-800">
                    The Ayurveda Hospital in Ernakulam offers therapies
                    including panchakarma, abhyanga, elakizhi, nasyam,
                  </p> */}
                </div>
              </div>
              <div className="rounded-[30px] max-lg:rounded-[25px] max-mlg:rounded-[20px] overflow-hidden relative  group h-[fit-content] xxl:max-h-[295px] max-h-[260px] after:absolute after:top-[0px] after:left-[0px] after:w-[100%] after:h-[100%] after:content-[''] after:bg-[linear-gradient(0deg,rgba(0,0,0,0.56)_0%,rgba(255,255,255,0)_100%)] ">
                <Image
                  width={800}
                  height={600}
                  className="w-[100%] h-[100%] object-cover object-center transition duration-1000 group-hover:scale-[1.1]"
                  alt="Syrian Church"
                  src={`${ASSET_PREFIX}/assets/images/syrian-church.webp`}
                />
                <div className="z-[5] absolute flex flex-col gap-[15px] items-start justify-end top-0 bottom-0 right-0 w-[100%] h-[100%] p-[30px]  max-lg:p-[20px]  ">
                  <p className="p-[8px_15px] rounded-xl text-white border text-[16px] leading-[22px] ">
                    {" "}
                    29 km from Samwarthika{" "}
                  </p>
                  <p className="xxl:text-[28px] xxl:leading-[34px] text-[24px] leading-[30px]  max-2xl:text-[22px] max-2xl:leading-[26px]  max-lg:text-[20px] max-lg:leading-[24px] max-mlg:text-[18px] max-mlg:leading-[22px]  max-md:text-[16px] max-md:leading-[20px] text-[#fff]   ">
                    Marth Mariam Jacobite <br />
                    Syrian Church
                  </p>
                  {/* <p className="xxl:text-[16px] xxl:leading-[24px] text-[16px] leading-[22px] max-mlg:text-[12px] max-mlg:leading-[20px]  max-[700px]:hidden text-[#fff]/70  opacity-0 group-hover:opacity-[100]  transition duration-800">
                    The Ayurveda Hospital in Ernakulam offers therapies
                    including panchakarma, abhyanga, elakizhi, nasyam,
                  </p> */}
                </div>
              </div>
            </div>
            <div className="rounded-[30px] overflow-hidden relative  group">
              <Image
                width={800}
                height={600}
                className="w-[100%] h-[100%] object-cover object-center transition duration-1000 group-hover:scale-[1.1]"
                alt="Athirapalli Waterfalls"
                src={`${ASSET_PREFIX}/assets/images/athirapalli-waterfalls.webp`}
              />
              <div className="z-[5] absolute flex flex-col justify-end items-start top-0 bottom-0 right-0 w-[100%] h-[100%] p-[30px]  max-lg:p-[20px] gap-[15px]   max-mlg:gap-[20px]   max-mlg:items-start after:absolute after:top-[0px] after:left-[0px] after:w-[100%] after:h-[100%] after:content-[''] after:bg-[linear-gradient(0deg,rgba(0,0,0,0.56)_0%,rgba(255,255,255,0)_100%)] ">
                <p className="p-[8px_15px] rounded-xl text-white border text-[16px] leading-[22px] z-[5] ">
                  {" "}
                  64 km from Samwarthika{" "}
                </p>
                <p className="z-[5] xxl:text-[28px] xxl:leading-[34px] text-[24px] leading-[30px]  max-2xl:text-[22px] max-2xl:leading-[26px]  max-lg:text-[20px] max-lg:leading-[24px] max-mlg:text-[18px] max-mlg:leading-[22px]  max-md:text-[16px] max-md:leading-[20px] text-[#fff]   ">
                  Athirapally Waterfalls
                </p>
                {/* <p className="xxl:text-[16px] xxl:leading-[24px] text-[16px] leading-[22px] max-mlg:text-[12px] max-mlg:leading-[20px]  max-[700px]:hidden text-[#fff]/70  opacity-0 group-hover:opacity-[100]  transition duration-800">
                  The Ayurveda Hospital in Ernakulam offers therapies including
                  panchakarma, abhyanga, elakizhi, nasyam,
                </p> */}
              </div>
            </div>
            <div className="grid gap-[30px] max-2xl:gap-[20px] max-mlg:gap-[15px] ">
              <div className="rounded-[30px] max-lg:rounded-[25px] max-mlg:rounded-[20px] overflow-hidden relative  group h-[fit-content] xxl:max-h-[295px] max-h-[260px] after:absolute after:top-[0px] after:left-[0px] after:w-[100%] after:h-[100%] after:content-[''] after:bg-[linear-gradient(0deg,rgba(0,0,0,0.56)_0%,rgba(255,255,255,0)_100%)] h-full">
                <Image
                  width={800}
                  height={600}
                  className="w-[100%] h-[100%] object-cover object-center transition duration-1000 group-hover:scale-[1.1]"
                  alt="Munnar Hill Station"
                  src={`${ASSET_PREFIX}/assets/images/munnar-hill-station.webp`}
                />
                <div className="z-[5] absolute flex flex-col gap-[15px] items-start justify-end top-0 bottom-0 right-0 w-[100%] h-[100%] p-[30px]  max-lg:p-[20px] ">
                  <p className="p-[8px_15px] rounded-xl text-white border text-[16px] leading-[22px]  ">
                    {" "}
                    87 km from Samwarthika{" "}
                  </p>
                  <p className="xxl:text-[28px] xxl:leading-[34px] text-[24px] leading-[30px]  max-2xl:text-[22px] max-2xl:leading-[26px]  max-lg:text-[20px] max-lg:leading-[24px] max-mlg:text-[18px] max-mlg:leading-[22px]  max-md:text-[16px] max-md:leading-[20px] text-[#fff]   ">
                    Munnar <br />
                  </p>
                  {/* <p className="xxl:text-[16px] xxl:leading-[24px] text-[16px] leading-[22px] max-mlg:text-[12px] max-mlg:leading-[20px]  max-[700px]:hidden text-[#fff]/70  opacity-0 group-hover:opacity-[100]  transition duration-800">
                    The Ayurveda Hospital in Ernakulam offers therapies
                    including panchakarma, abhyanga, elakizhi, nasyam,
                  </p> */}
                </div>
              </div>
              <div className="rounded-[30px] max-lg:rounded-[25px] max-mlg:rounded-[20px] overflow-hidden relative  group h-[fit-content] xxl:max-h-[295px] max-h-[260px] after:absolute after:top-[0px] after:left-[0px] after:w-[100%] after:h-[100%] after:content-[''] after:bg-[linear-gradient(0deg,rgba(0,0,0,0.56)_0%,rgba(255,255,255,0)_100%)] max-mlg:hidden h-full">
                <Image
                  width={800}
                  height={600}
                  className="w-[100%] h-[100%] object-cover object-center transition duration-1000 group-hover:scale-[1.1]"
                  alt="Adishankara Temple"
                  src={`${ASSET_PREFIX}/assets/images/adishankara-temple.webp`}
                />
                <div className="z-[5] absolute flex flex-col gap-[15px] items-start justify-end top-0 bottom-0 right-0 w-[100%] h-[100%] p-[30px]  max-lg:p-[20px ">
                  <p className="p-[8px_15px] rounded-xl text-white border text-[16px] leading-[22px]  ">
                    {" "}
                    30 km from Samwarthika{" "}
                  </p>
                  <p className="xxl:text-[28px] xxl:leading-[34px] text-[24px] leading-[30px]  max-2xl:text-[22px] max-2xl:leading-[26px]  max-lg:text-[20px] max-lg:leading-[24px] max-mlg:text-[18px] max-mlg:leading-[22px]  max-md:text-[16px] max-md:leading-[20px] text-[#fff]   ">
                    AdiSankara <br /> Temple, Kalady
                  </p>
                  {/* <p className="xxl:text-[16px] xxl:leading-[24px] text-[16px] leading-[22px] max-mlg:text-[12px] max-mlg:leading-[20px]  max-[700px]:hidden text-[#fff]/70  opacity-0 group-hover:opacity-[100]  transition duration-800">
                    The Ayurveda Hospital in Ernakulam offers therapies
                    including panchakarma, abhyanga, elakizhi, nasyam,
                  </p> */}
                </div>
              </div>
            </div>
            <div className="rounded-[30px] max-lg:rounded-[25px] max-mlg:rounded-[20px] overflow-hidden relative  group h-[fit-content] xxl:max-h-[295px] max-h-[260px] after:absolute after:top-[0px] after:left-[0px] after:w-[100%] after:h-[100%] after:content-[''] after:bg-[linear-gradient(0deg,rgba(0,0,0,0.56)_0%,rgba(255,255,255,0)_100%)] hidden  max-mlg:block h-full">
              <Image
                width={800}
                height={600}
                className="w-[100%] h-[100%] object-cover object-center transition duration-1000 group-hover:scale-[1.1]"
                alt="Adishankara Temple"
                src={`${ASSET_PREFIX}/assets/images/adishankara-temple.webp`}
              />
              <div className="z-[5] absolute flex flex-col gap-[15px] items-start justify-end top-0 bottom-0 right-0 w-[100%] h-[100%] p-[30px]  max-lg:p-[20px ">
                <p className="p-[8px_15px] rounded-xl text-white border text-[16px] leading-[22px]  ">
                  {" "}
                  30 km from Samwarthika{" "}
                </p>
                <p className="xxl:text-[28px] xxl:leading-[34px] text-[24px] leading-[30px]  max-2xl:text-[22px] max-2xl:leading-[26px]  max-lg:text-[20px] max-lg:leading-[24px] max-mlg:text-[18px] max-mlg:leading-[22px]  max-md:text-[16px] max-md:leading-[20px] text-[#fff]   ">
                  AdiSankara <br /> Temple, Kalady
                </p>
                {/* <p className="xxl:text-[16px] xxl:leading-[24px] text-[16px] leading-[22px] max-mlg:text-[12px] max-mlg:leading-[20px]  max-[700px]:hidden text-[#fff]/70  opacity-0 group-hover:opacity-[100]  transition duration-800">
                    The Ayurveda Hospital in Ernakulam offers therapies
                    including panchakarma, abhyanga, elakizhi, nasyam,
                  </p> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
