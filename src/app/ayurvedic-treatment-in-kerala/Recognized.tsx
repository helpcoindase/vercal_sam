"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ASSET_PREFIX } from "../../../config";

export default function Recognized() {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <section
      className={`

   

      `}>
      <div className="w-[90%] m-[auto] max-w-[120rem]">
        <h2 className="text-center m-auto text-[#000] text-[40px] leading-[48px]  max-xl:text-[36px] max-xl:leading-[44px]  max-mlg:text-[32px] max-mlg:leading-[40px] max-sm:text-[30px] max-sm:leading-[38px]  mb-[40px]  max-xl:mb-[30px]  max-md:mb-[20px]">
          Recognized By
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 mlg:grid-cols-4 xl:grid-cols-7 justify-center items-center flex-wrap gap-[80px] max-2xl:gap-[60px] max-xl:gap-x-[60px] max-xl:gap-x-[130px] max-mlg:gap-x-[50px] max-mlg:gap-[60px] max-md:gap-x-[50px] max-md:gap-y-[30px] max-sm:gap-x-[30px]">
          <div className="group flex flex-col items-center ">
            <Image
              width={114}
              className="w-[120px] h-[auto]  max-xl:w-[100px]  max-md:w-[80px] transition duration-300 ease-in group-hover:scale-[1.1]"
              height={114}
              src={`${ASSET_PREFIX}/assets/images/nabh-logo.webp`}
              alt="NABH Logo"
            />
          </div>
          <div className="group flex flex-col items-center ">
            <Image
              width={200}
              className="w-[150px] h-[auto]  max-xl:w-[100px]  max-md:w-[80px] transition duration-300 ease-in group-hover:scale-[1.1]"
              height={200}
              src={`${ASSET_PREFIX}/assets/images/ayur-diamond.webp`}
              alt="Ayur Diamond"
            />
          </div>
          {/* <div className="group">
            <Image
              width={200}
              className="w-[150px] h-[auto]  max-xl:w-[100px]  max-md:w-[80px] transition duration-300 ease-in group-hover:scale-[1.1]"
              height={200}
              src={`${ASSET_PREFIX}/assets/images/bharat-petroleum-logo.webp`}
              alt="Bharat Petroleum"
            />
          </div> */}
          <div className="group flex flex-col items-center ">
            <Image
              width={200}
              height={200}
              className="w-[100px] h-auto max-xl:w-[100px] max-md:w-[80px] transition duration-300 ease-in-out group-hover:scale-[1.1]"
              src={`${ASSET_PREFIX}/assets/images/bharat-petroleum-logo.webp`}
              alt="Bharat Petroleum"
            />

            <p className="mt-[10px] text-[12px] leading-[20px] sm:text-[11px] md:text-[12px] font-semibold leading-tight text-[#000] text-center">
              BPCL empaneled <br /> hospital
            </p>
          </div>
          <div className="group flex flex-col items-center ">
            <Image
              width={100}
              className="w-[150px] h-[auto]  max-xl:w-[100px]  max-md:w-[80px] transition duration-300 ease-in group-hover:scale-[1.1]"
              height={200}
              src={`${ASSET_PREFIX}/assets/images/emblem-of-kerala.webp`}
              alt="Emblem of kerala"
            />
          </div>
          <div className="group flex flex-col items-center ">
            <Image
              width={200}
              className="w-[150px] h-[auto]  max-xl:w-[100px]  max-md:w-[80px] transition duration-300 ease-in group-hover:scale-[1.1]"
              height={200}
              src={`${ASSET_PREFIX}/assets/images/trip-advisor-icon.webp`}
              alt="Trip Advisor Icon"
            />
          </div>
          <div className="group flex flex-col items-center ">
            <Image
              width={200}
              className="w-[150px] h-[auto]  max-xl:w-[100px]  max-md:w-[80px] transition duration-300 ease-in group-hover:scale-[1.1]"
              height={200}
              src={`${ASSET_PREFIX}/assets/images/kerala-tourism.webp`}
              alt="Kerala Tourism"
            />
          </div>
           <div className="group flex flex-col items-center">
            <Image
              width={200}
              className="w-[150px] h-[auto]  max-xl:w-[100px]  max-md:w-[80px] transition duration-300 ease-in group-hover:scale-[1.1]"
              height={200}
              src={`${ASSET_PREFIX}/assets/images/glcouncil-logo.webp`}
              alt="GL Council"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
