import Link from "next/link";
import { ASSET_PREFIX } from "../../../../config";
import Image from "next/image";
export default function TreatmentList() {
  return (
    <>
      <section
        className="py-[180px]  max-2xl:py-[100px]   max-xl:py-[80px]  max-md:py-[50px]"
        id="facilities">
        <div className="w-[90%] m-[auto] max-w-[120rem]">
          {/* <h2 className="m-auto uppercase text-[#553e2b] text-[20px]  leading-[24px] max-xl:text-[18px] max-xl:leading-[22px]  max-lg:text-[16px] max-lg:leading-[20px]  font-medium  text-center w-[fit-content]">
            THE AYURVEDIC TREATMENTS
          </h2> */}
          <h3
            className="m-auto text-[#314a10] font-[source,serief4]  mb-[20px] text-[60px] leading-[65px] max-2xl:text-[52px]
           leading-[58px] max-xl:text-[46px] max-xl:leading-[50px] max-lg:text-[40px] max-lg:leading-[46px] max-mlg:text-[38px] max-mlg:leading-[42px] font-normal   text-center w-[fit-content]">
            A Place to Heal, a Place to Feel Home
          </h3>
          {/* <div className="w-[80%] flex flex-wrap gap-[30px] max-md:flex-col justify-end m-[auto]  max-[1200px]:w-[100%] max-mlg:w-[90%]  max-md:w-[100%] relative"> */}
          <div className="w-[80%] flex flex-wrap gap-[30px] max-md:flex-col justify-end m-[auto]  max-[1200px]:w-[100%] max-mlg:w-[90%]  max-md:w-[100%] relative">
            {/* <div className="kn-div  relative grid grid-cols-[60%_165px] max-xxl:grid-cols-[60%_165px] max-[1200px]:grid-cols-[100%] gap-[225px] max-xxl:gap-[5%] max-[1200px]:gap-[20px] justify-end max-[1200px]:justify-center items-end max-[1200px]:items-center mt-[80px]  max-2xl:mt-[60px] max-lg:mt-[40px] max-mlg:mt-[20px]"> */}
            <p className="text-center text-[#341903] text-[16px] leading-[24px] font-medium   w-[50%] max-lg:w-[100%] max-2xl:w-[60%] max-md:w-[100%] m-auto">
              We want your healing journey to feel gentle and stress-free. Every
              space here is created with you in mind - a place where you can
              rest without worry, move at your own pace and focus on feeling
              better. Whether you’re spending quiet time, enjoying a peaceful
              meal or simply taking a moment to breathe, we make sure your
              environment supports your well-being every step of the way.
            </p>
            <div className="flex  justify-end absolute top-[0px]  right-[0px] max-lg:relative max-[600px]:!justify-center max-[600px]:right-[0px]">
              <Link
                href="/facilities"
                className="uppercase border-1 text-[var(--primary)] border-[var(--primary)]  uppercase border-1  py-[10px] px-[30px] max-xl:py-[8px] max-xl:px-[25px] max-md:text-[16px] max-md:leading-[18px] flex  w-[fit-content] h-fit hover:bg-[#304A10] transition duration-300  hover:text-[#fff]">
                Know More
              </Link>
            </div>
            {/* </div> */}
          </div>
          <div className="grid grid-cols-3 max-mlg:grid-cols-2 gap-[30px] max-2xl:gap-[20px] max-mlg:gap-[15px] pt-[50px]  max-2xl:pt-[35px]  max-lg:pt-[25px] w-[80%] max-[1200px]:w-[100%] max-mlg:w-[90%]  max-md:w-[100%] mx-auto">
            <div className="grid gap-[30px] max-2xl:gap-[20px] max-mlg:gap-[15px]">
              <div className="rounded-[30px] max-lg:rounded-[25px] max-mlg:rounded-[20px] overflow-hidden relative  group h-[fit-content] xxl:max-h-[295px] max-h-[260px]">
                <Image
                  width={800}
                  height={600}
                  className="w-[100%] h-[100%] object-cover object-center transition duration-1000 group-hover:scale-[1.1]"
                  alt="Samwarthika Ayurvedic Hospital Facilities"
                  src={`${ASSET_PREFIX}/assets/images/samwarthika-ayurvedic-hospital-facilities.webp`}
                />
                <div className="absolute flex justify-between items-end top-0 bottom-0 right-0 w-[100%] h-[100%] p-[30px]  max-lg:p-[20px] gap-[40px]  max-2xl:gap-[30px]  max-lg:gap-[20px]   max-mlg:gap-[20px] max-mlg:justify-start max-mlg:flex-col-reverse max-mlg:items-start">
                  {/* <p className="xxl:text-[28px] xxl:leading-[34px] text-[24px] leading-[30px]  max-2xl:text-[22px] max-2xl:leading-[26px]  max-lg:text-[20px] max-lg:leading-[24px] max-mlg:text-[18px] max-mlg:leading-[22px]  max-md:text-[16px] max-md:leading-[20px] max-xsm:text-[16px] max-xsm:leading-[18px]  text-[#fff]   ">
                    Treatment <br />
                    Room
                  </p> */}
                  {/* <p className="xxl:text-[16px] xxl:leading-[24px] text-[16px] leading-[22px] max-mlg:text-[12px] max-mlg:leading-[20px]  max-[700px]:hidden text-[#fff]/70  opacity-0 group-hover:opacity-[100]  transition duration-800">
                    The Ayurveda Hospital in Ernakulam offers therapies
                    including panchakarma, abhyanga, elakizhi, nasyam,
                  </p> */}
                </div>
              </div>
              <div className="rounded-[30px] max-lg:rounded-[25px] max-mlg:rounded-[20px] overflow-hidden relative  group h-[fit-content] xxl:max-h-[295px] max-h-[260px]">
                <Image
                  width={800}
                  height={600}
                  className="w-[100%] h-[100%] object-cover object-center transition duration-1000 group-hover:scale-[1.1]"
                  alt="Patient Care Facilities at Samwarthika"
                  src={`${ASSET_PREFIX}/assets/images/patient-care-facilities-at-samwarthika.webp`}
                />
                <div className="absolute flex justify-between items-end top-0 bottom-0 right-0 w-[100%] h-[100%] p-[30px]  max-lg:p-[20px] gap-[40px]  max-2xl:gap-[30px]  max-lg:gap-[20px]   max-mlg:gap-[20px] max-mlg:justify-start max-mlg:flex-col-reverse max-mlg:items-start ">
                  {/* <p className="xxl:text-[28px] xxl:leading-[34px] text-[24px] leading-[30px]  max-2xl:text-[22px] max-2xl:leading-[26px]  max-lg:text-[20px] max-lg:leading-[24px] max-mlg:text-[18px] max-mlg:leading-[22px]  max-md:text-[16px] max-md:leading-[20px] max-xsm:text-[16px] max-xsm:leading-[18px] text-[#fff]   ">
                    Vegetarian <br />
                    Kitchen
                  </p> */}
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
                alt="Samwarthika Hospital Hall Entrance"
                src={`${ASSET_PREFIX}/assets/images/samwarthika-hospital-hall-entrance.webp`}
              />
              <div className="absolute flex justify-between items-end top-0 bottom-0 right-0 w-[100%] h-[100%] p-[30px]  max-lg:p-[20px] gap-[40px]  max-2xl:gap-[30px]  max-lg:gap-[20px]   max-mlg:gap-[20px] max-mlg:justify-start max-mlg:flex-col-reverse max-mlg:items-start ">
                {/* <p className="xxl:text-[28px] xxl:leading-[34px] text-[24px] leading-[30px]  max-2xl:text-[22px] max-2xl:leading-[26px]  max-lg:text-[20px] max-lg:leading-[24px] max-mlg:text-[18px] max-mlg:leading-[22px]  max-md:text-[16px] max-md:leading-[20px] max-xsm:text-[16px] max-xsm:leading-[18px] text-[#fff]   ">
                  Hall <br />
                  Entrance
                </p> */}
                {/* <p className="xxl:text-[16px] xxl:leading-[24px] text-[16px] leading-[22px] max-mlg:text-[12px] max-mlg:leading-[20px]  max-[700px]:hidden text-[#fff]/70  opacity-0 group-hover:opacity-[100]  transition duration-800">
                  The Ayurveda Hospital in Ernakulam offers therapies including
                  panchakarma, abhyanga, elakizhi, nasyam,
                </p> */}
              </div>
            </div>
            <div className="grid gap-[30px] max-2xl:gap-[20px] max-mlg:gap-[15px] ">
              <div className="rounded-[30px] max-lg:rounded-[25px] max-mlg:rounded-[20px] overflow-hidden relative  group h-[fit-content] xxl:max-h-[295px] max-h-[260px]">
                <Image
                  width={800}
                  height={600}
                  className="w-[100%] h-[100%] object-cover object-center transition duration-1000 group-hover:scale-[1.1]"
                  alt="Modern Treatment Facilities at Samwarthika"
                  src={`${ASSET_PREFIX}/assets/images/modern-treatment-facilities-at-samwarthika.webp`}
                />
                <div className="absolute flex justify-between items-end top-0 bottom-0 right-0 w-[100%] h-[100%] p-[30px]  max-lg:p-[20px] gap-[40px]  max-2xl:gap-[30px]  max-lg:gap-[20px]   max-mlg:gap-[20px] max-mlg:justify-start max-mlg:flex-col-reverse max-mlg:items-start ">
                  {/* <p className="xxl:text-[28px] xxl:leading-[34px] text-[24px] leading-[30px]  max-2xl:text-[22px] max-2xl:leading-[26px]  max-lg:text-[20px] max-lg:leading-[24px] max-mlg:text-[18px] max-mlg:leading-[22px]  max-md:text-[16px] max-md:leading-[20px] max-xsm:text-[16px] max-xsm:leading-[18px] text-[#fff] text-nowrap  ">
                    Spacious
                    <br />
                    Dinning Hall
                  </p> */}
                  {/* <p className="xxl:text-[16px] xxl:leading-[24px] text-[16px] leading-[22px] max-mlg:text-[12px] max-mlg:leading-[20px]  max-[700px]:hidden text-[#fff]/70  opacity-0 group-hover:opacity-[100]  transition duration-800">
                    The Ayurveda Hospital in Ernakulam offers therapies
                    including panchakarma, abhyanga, elakizhi, nasyam,
                  </p> */}
                </div>
              </div>
              <div className="rounded-[30px] max-lg:rounded-[25px] max-mlg:rounded-[20px] overflow-hidden relative  group h-[fit-content] xxl:max-h-[295px] max-h-[260px] max-mlg:hidden">
                <Image
                  width={800}
                  height={600}
                  className="w-[100%] h-[100%] object-cover object-center transition duration-1000 group-hover:scale-[1.1]"
                  alt="Inpatient Facilities at Samwarthika Ayurvedic Hospital"
                  src={`${ASSET_PREFIX}/assets/images/inpatient-facilities-at-samwarthika-ayurvedic-hospital.webp`}
                />
                <div className="absolute flex justify-between items-end top-0 bottom-0 right-0 w-[100%] h-[100%] p-[30px]  max-lg:p-[20px] gap-[40px]  max-2xl:gap-[30px]  max-lg:gap-[20px]   max-mlg:gap-[20px] max-mlg:justify-start max-mlg:flex-col-reverse max-mlg:items-start ">
                  {/* <p className="xxl:text-[28px] xxl:leading-[34px] text-[24px] leading-[30px]  max-2xl:text-[22px] max-2xl:leading-[26px]  max-lg:text-[20px] max-lg:leading-[24px] max-mlg:text-[18px] max-mlg:leading-[22px]  max-md:text-[16px] max-md:leading-[20px] max-xsm:text-[16px] max-xsm:leading-[18px] text-[#fff]  text-nowrap ">
                    Patient Friendly <br />
                    Rooms
                  </p> */}
                  {/* <p className="xxl:text-[16px] xxl:leading-[24px] text-[16px] leading-[22px] max-mlg:text-[12px] max-mlg:leading-[20px]  max-[700px]:hidden text-[#fff]/70  opacity-0 group-hover:opacity-[100]  transition duration-800">
                    The Ayurveda Hospital in Ernakulam offers therapies
                    including panchakarma, abhyanga, elakizhi, nasyam,
                  </p> */}
                </div>
              </div>
            </div>
            <div className="rounded-[30px] max-lg:rounded-[25px] max-mlg:rounded-[20px] overflow-hidden relative  group h-auto hidden  max-mlg:block">
              <Image
                width={800}
                height={600}
                className="w-[100%] h-[100%] object-cover object-center transition duration-1000 group-hover:scale-[1.1]"
                alt="Inpatient Facilities at Samwarthika Ayurvedic Hospital"
                src={`${ASSET_PREFIX}/assets/images/inpatient-facilities-at-samwarthika-ayurvedic-hospital.webp`}
              />
              <div className="absolute flex justify-between items-end top-0 bottom-0 right-0 w-[100%] h-[100%] p-[30px]  max-lg:p-[20px] gap-[40px]  max-2xl:gap-[30px]  max-lg:gap-[20px]   max-mlg:gap-[20px] max-mlg:justify-start max-mlg:flex-col-reverse max-mlg:items-start ">
                {/* <p className="xxl:text-[28px] xxl:leading-[34px] text-[24px] leading-[30px]  max-2xl:text-[22px] max-2xl:leading-[26px]  max-lg:text-[20px] max-lg:leading-[24px] max-mlg:text-[18px] max-mlg:leading-[22px]  max-md:text-[16px] max-md:leading-[20px]  max-xsm:text-[16px] max-xsm:leading-[18px]  text-[#fff]   ">
                  Patient Friendly <br />
                  Rooms
                </p> */}
                {/* <p className="xxl:text-[16px] xxl:leading-[24px] text-[16px] leading-[22px] max-mlg:text-[12px] max-mlg:leading-[20px]  max-[700px]:hidden text-[#fff]/70  opacity-0 group-hover:opacity-[100]  transition duration-800">
                  The Ayurveda Hospital in Ernakulam offers therapies including
                  panchakarma, abhyanga, elakizhi, nasyam,
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
