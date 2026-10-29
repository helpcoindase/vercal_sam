"use client";
import { ASSET_PREFIX } from "../../../../config";
import Image from "next/image";





export default function MedicalTourLocation() {
 
  return (
    <>
      <section className="py-[140px]  max-2xl:py-[100px]   max-xl:py-[80px]  max-md:py-[50px]">
        {/* Section 2 */}
        <div className="w-[90%] m-[auto]">
          <h3
            className="m-auto text-[#304A10] font-[source,serief4] mb-[20px] mt-[8px] text-[60px] leading-[65px] max-2xl:text-[52px]
           leading-[58px] max-xl:text-[46px] max-xl:leading-[50px] max-lg:text-[40px] max-lg:leading-[46px] max-mlg:text-[38px] max-mlg:leading-[42px] font-light   text-center w-[fit-content]">
            How Your Day Flows (Typical)
          </h3>
          {/* <p className="text-center text-[#341903] text-[16px] leading-[24px] font-medium   w-[50%] max-lg:w-[100%] max-2xl:w-[60%] max-md:w-[100%] m-auto">
           
          </p> */}
        </div>
        <div className="w-[50%]  max-2xl:w-[60%] max-xl:w-[75%] max-lg:w-[90%] m-auto grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-[80px] max-2xl:gap-[70px]  max-md:gap-[60px] mt-[60px]">
          <div
            className="relative  p-[20px] rounded-[20px] border-1  border-[#c3efd2]   transition duration-300 bg-[#effff5] hover:bg-transparent min-w-[150px]
            max-sm:grid max-sm:grid-cols-[60px_auto] max-sm:gap-[15px] max-sm:wrap max-sm:items-center
          after:absolute after:right-[-60.7188px] max-2xl:after:right-[-57.1875px]  max-md:after:right-[-53.1875px] after:top-[35%] after:content-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MHB4IiBoZWlnaHQ9IjQwcHgiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0iIzM0MTgwMiIgZD0iTTQgMTJoMTIuMjVMMTEgNi43NWwuNjYtLjc1bDYuNSA2LjVsLTYuNSA2LjVsLS42Ni0uNzVMMTYuMjUgMTNINHoiLz48L3N2Zz4=')]
          
          max-sm:after:bottom-[-57.1875px] max-sm:after:top-[auto] max-sm:after:left-[auto] max-sm:after:right-[45%] max-sm:after:content-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MHB4IiBoZWlnaHQ9IjQwcHgiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0iIzM0MTgwMiIgZD0iTTEyIDV2MTIuMjVMMTcuMjUgMTJsLjc1LjY2bC02LjUgNi41bC02LjUtNi41bC43NS0uNjZMMTEgMTcuMjVWNXoiLz48L3N2Zz4=')]
          ">
            <div className=" rounded-[50%] w-[70px] h-[70px] max-sm:h-[60px] max-sm:w-[60px] overflow-hidden  bg-[#304A10] flex justify-center items-center">
              <Image
                src={`${ASSET_PREFIX}/assets/images/weight-loss-treatment.svg`}
                height={60}
                width={60}
                unoptimized
                className="brightness-[20.5] max-sm:w-[50px] max-sm:h-[50px]"
                alt="Weight Loss Treatment"
              />
            </div>
            <p className="mt-[15px]  max-sm:mt-0 text-[#171717]">
              Consultation & <br /> assessment
            </p>
          </div>
          <div
            className="relative  p-[20px] rounded-[20px] border-1  border-[#c3efd2]   transition duration-300 bg-[#effff5] hover:bg-transparent min-w-[150px]
            max-sm:grid max-sm:grid-cols-[60px_auto] max-sm:gap-[15px] max-sm:wrap max-sm:items-center 
          after:absolute after:right-[-60.7188px] max-2xl:after:right-[-57.1875px] after:top-[35%] after:content-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MHB4IiBoZWlnaHQ9IjQwcHgiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0iIzM0MTgwMiIgZD0iTTQgMTJoMTIuMjVMMTEgNi43NWwuNjYtLjc1bDYuNSA2LjVsLTYuNSA2LjVsLS42Ni0uNzVMMTYuMjUgMTNINHoiLz48L3N2Zz4=')]
          
          max-md:after:right-[45%] max-md:after:bottom-[-57.1875px] max-md:after:h-[46px] max-md:after:top-[auto] max-md:after:content-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MHB4IiBoZWlnaHQ9IjQwcHgiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0iIzM0MTgwMiIgZD0iTTEyIDV2MTIuMjVMMTcuMjUgMTJsLjc1LjY2bC02LjUgNi41bC02LjUtNi41bC43NS0uNjZMMTEgMTcuMjVWNXoiLz48L3N2Zz4=')]
          ">
            <div className=" rounded-[50%] w-[70px] h-[70px] max-sm:h-[60px] max-sm:w-[60px] overflow-hidden  bg-[#304A10] flex justify-center items-center">
              <Image
                src={`${ASSET_PREFIX}/assets/images/autsim.svg`}
                height={60}
                width={60}
                unoptimized
                className="brightness-[20.5] max-sm:w-[50px] max-sm:h-[50px]"
                alt="Autism Treatment"
              />
            </div>
            <p className="mt-[15px]  max-sm:mt-0 text-[#171717]">
              Pre-procedures{" "}
            </p>
          </div>
          <div
            className="relative  p-[20px] rounded-[20px] border-1  border-[#c3efd2]   transition duration-300 bg-[#effff5] hover:bg-transparent min-w-[150px]
            max-sm:grid max-sm:grid-cols-[60px_auto] max-sm:gap-[15px] max-sm:wrap max-sm:items-center  
           after:absolute after:right-[45%] after:bottom-[-69.1875px]  max-2xl:after:bottom-[-62.1875px]  max-md:after:bottom-[-57.1875px] after:content-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MHB4IiBoZWlnaHQ9IjQwcHgiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0iIzM0MTgwMiIgZD0iTTEyIDV2MTIuMjVMMTcuMjUgMTJsLjc1LjY2bC02LjUgNi41bC02LjUtNi41bC43NS0uNjZMMTEgMTcuMjVWNXoiLz48L3N2Zz4=')]  max-md:hidden">
            <div className="rounded-[50%] w-[70px] h-[70px] max-sm:h-[60px] max-sm:w-[60px] overflow-hidden  bg-[#304A10] flex justify-center items-center">
              <Image
                src={`${ASSET_PREFIX}/assets/images/weight-loss-treatment.svg`}
                height={60}
                width={60}
                unoptimized
                className="brightness-[20.5] max-sm:w-[50px] max-sm:h-[50px]"
                alt="Weight Loss Treatment"
              />
            </div>
            <p className="mt-[15px]  max-sm:mt-0 text-[#171717]">
              Panchakarma <br /> session
            </p>
          </div>

          <div className="relative  invisible max-md:hidden"></div>
          <div
            className="relative  p-[20px] rounded-[20px] border-1  border-[#c3efd2]   transition duration-300 bg-[#effff5] hover:bg-transparent min-w-[150px]
            max-sm:grid max-sm:grid-cols-[60px_auto] max-sm:gap-[15px] max-sm:wrap max-sm:items-center  
          after:absolute after:right-[-57.8906px] max-2xl:after:right-[-52.8906px] max-md:after:left-[-48px] max-md:after:right-[auto] after:top-[35%] after:content-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNXB4IiBoZWlnaHQ9IjM1cHgiIHZpZXdCb3g9IjAgMCAyNTYgMjU2Ij48cGF0aCBmaWxsPSIjMzQxODAyIiBkPSJNMjIyIDEyOGE2IDYgMCAwIDEtNiA2SDU0LjQ5bDYxLjc1IDYxLjc2YTYgNiAwIDEgMS04LjQ4IDguNDhsLTcyLTcyYTYgNiAwIDAgMSAwLTguNDhsNzItNzJhNiA2IDAgMCAxIDguNDggOC40OEw1NC40OSAxMjJIMjE2YTYgNiAwIDAgMSA2IDYiLz48L3N2Zz4=')]

          max-sm:after:bottom-[-57.1875px] max-sm:after:top-[auto] max-sm:after:left-[auto] max-sm:after:right-[45%] max-sm:after:content-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MHB4IiBoZWlnaHQ9IjQwcHgiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0iIzM0MTgwMiIgZD0iTTEyIDV2MTIuMjVMMTcuMjUgMTJsLjc1LjY2bC02LjUgNi41bC02LjUtNi41bC43NS0uNjZMMTEgMTcuMjVWNXoiLz48L3N2Zz4=')]
          max-md:hidden max-sm:hidden">
            <div className=" rounded-[50%] w-[70px] h-[70px] max-sm:h-[60px] max-sm:w-[60px] overflow-hidden  bg-[#304A10] flex justify-center items-center">
              <Image
                src={`${ASSET_PREFIX}/assets/images/hair-loss-treatment.svg`}
                height={60}
                width={60}
                unoptimized
                className="brightness-[20.5] max-sm:w-[50px] max-sm:h-[50px]"
                alt="Hair Loss Treatment"
              />
            </div>
            <p className="mt-[15px]  max-sm:mt-0 text-[#171717]">
              {" "}
              Gentle routine & <br /> follow-up
            </p>
          </div>
          <div
            className="relative  p-[20px] rounded-[20px] border-1  border-[#c3efd2]   transition duration-300 bg-[#effff5] hover:bg-transparent min-w-[150px]
            max-sm:grid max-sm:grid-cols-[60px_auto] max-sm:gap-[15px] max-sm:wrap max-sm:items-center  
          after:absolute after:right-[45%] after:bottom-[-69.1875px]  max-2xl:after:bottom-[-62.1875px]  max-md:after:bottom-[-57.1875px] after:content-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MHB4IiBoZWlnaHQ9IjQwcHgiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0iIzM0MTgwMiIgZD0iTTEyIDV2MTIuMjVMMTcuMjUgMTJsLjc1LjY2bC02LjUgNi41bC02LjUtNi41bC43NS0uNjZMMTEgMTcuMjVWNXoiLz48L3N2Zz4=')]
           hidden max-md:block  max-sm:hidden">
            <div className=" rounded-[50%] w-[70px] h-[70px] max-sm:h-[60px] max-sm:w-[60px] overflow-hidden  bg-[#304A10] flex justify-center items-center">
              <Image
                src={`${ASSET_PREFIX}/assets/images/arthritis-treatment.svg`}
                height={60}
                width={60}
                unoptimized
                className="brightness-[20.5] max-sm:w-[50px] max-sm:h-[50px]"
                alt="Arthritis Treatment"
              />
            </div>
            <p className="mt-[15px]  max-sm:mt-0 text-[#171717]">
              {" "}
              Rest & diet <br />
              (medicated gruel as advised)
            </p>
          </div>
          <div
            className="relative  p-[20px] rounded-[20px] border-1  border-[#c3efd2]   transition duration-300 bg-[#effff5] hover:bg-transparent min-w-[150px]
            max-sm:grid max-sm:grid-cols-[60px_auto] max-sm:gap-[15px] max-sm:wrap max-sm:items-center  
           after:absolute after:right-[-57.8906px] max-2xl:after:right-[-52.8906px] max-md:after:left-[-48px] max-md:after:right-[auto] after:top-[35%] after:content-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNXB4IiBoZWlnaHQ9IjM1cHgiIHZpZXdCb3g9IjAgMCAyNTYgMjU2Ij48cGF0aCBmaWxsPSIjMzQxODAyIiBkPSJNMjIyIDEyOGE2IDYgMCAwIDEtNiA2SDU0LjQ5bDYxLjc1IDYxLjc2YTYgNiAwIDEgMS04LjQ4IDguNDhsLTcyLTcyYTYgNiAwIDAgMSAwLTguNDhsNzItNzJhNiA2IDAgMCAxIDguNDggOC40OEw1NC40OSAxMjJIMjE2YTYgNiAwIDAgMSA2IDYiLz48L3N2Zz4=')]

          max-sm:after:bottom-[-57.1875px] max-sm:after:top-[auto] max-sm:after:left-[auto] max-sm:after:right-[45%] max-sm:after:content-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MHB4IiBoZWlnaHQ9IjQwcHgiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0iIzM0MTgwMiIgZD0iTTEyIDV2MTIuMjVMMTcuMjUgMTJsLjc1LjY2bC02LjUgNi41bC02LjUtNi41bC43NS0uNjZMMTEgMTcuMjVWNXoiLz48L3N2Zz4=')]   hidden max-md:block  max-sm:hidden">
            <div className="rounded-[50%] w-[70px] h-[70px] max-sm:h-[60px] max-sm:w-[60px] overflow-hidden  bg-[#304A10] flex justify-center items-center">
              <Image
                src={`${ASSET_PREFIX}/assets/images/weight-loss-treatment.svg`}
                height={60}
                width={60}
                unoptimized
                className="brightness-[20.5] max-sm:w-[50px] max-sm:h-[50px]"
                alt="Weight Loss Treatment"
              />
            </div>
            <p className="mt-[15px]  max-sm:mt-0 text-[#171717]">
              Panchakarma <br /> session
            </p>
          </div>
          <div
            className="relative  p-[20px] rounded-[20px] border-1  border-[#c3efd2]   transition duration-300 bg-[#effff5] hover:bg-transparent min-w-[150px]
          max-sm:grid max-sm:grid-cols-[60px_auto] max-sm:gap-[15px] max-sm:wrap max-sm:items-center
          after:hidden max-sm:after:block
          after:absolute after:right-[45%] after:bottom-[-69.1875px]  max-2xl:after:bottom-[-62.1875px]  max-md:after:bottom-[-57.1875px] after:content-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MHB4IiBoZWlnaHQ9IjQwcHgiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0iIzM0MTgwMiIgZD0iTTEyIDV2MTIuMjVMMTcuMjUgMTJsLjc1LjY2bC02LjUgNi41bC02LjUtNi41bC43NS0uNjZMMTEgMTcuMjVWNXoiLz48L3N2Zz4=')]
          max-md:hidden
          
          ">
            <div className=" rounded-[50%] w-[70px] h-[70px] max-sm:h-[60px] max-sm:w-[60px] overflow-hidden  bg-[#304A10] flex justify-center items-center">
              <Image
                src={`${ASSET_PREFIX}/assets/images/arthritis-treatment.svg`}
                height={60}
                width={60}
                unoptimized
                className="brightness-[20.5] max-sm:w-[50px] max-sm:h-[50px]"
                alt="Arthritis Treatment"
              />
            </div>
            <p className="mt-[15px]  max-sm:mt-0 text-[#171717]">
              {" "}
              Rest & diet <br />
              (medicated gruel as advised)
            </p>
          </div>
          <div
            className="relative  p-[20px] rounded-[20px] border-1  border-[#c3efd2]   transition duration-300 bg-[#effff5] hover:bg-transparent min-w-[150px]
            max-sm:grid max-sm:grid-cols-[60px_auto] max-sm:gap-[15px] max-sm:wrap max-sm:items-center  
          
           hidden  max-md:block">
            <div className=" rounded-[50%] w-[70px] h-[70px] max-sm:h-[60px] max-sm:w-[60px] overflow-hidden  bg-[#304A10] flex justify-center items-center">
              <Image
                src={`${ASSET_PREFIX}/assets/images/hair-loss-treatment.svg`}
                height={60}
                width={60}
                unoptimized
                className="brightness-[20.5] max-sm:w-[50px] max-sm:h-[50px]"
                alt="Hair Loss Treatment"
              />
            </div>
            <p className="mt-[15px]  max-sm:mt-0 text-[#171717]">
              {" "}
              Gentle routine & <br /> follow-up
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
