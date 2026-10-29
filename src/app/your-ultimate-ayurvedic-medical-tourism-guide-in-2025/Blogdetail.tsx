"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ASSET_PREFIX } from "../../../config";

export default function Blogdetail() {
  return (
    <>
      <section className="pb-[100px]  max-2xl:pb-[80px]   max-xl:pb-[60px]  max-md:pb-[40px]">
        <div className="w-[90%] m-[auto]">
          {/* <h2 className="m-auto uppercase text-[#553e2b] text-[20px]  leading-[24px] max-xl:text-[18px] max-xl:leading-[22px]  max-lg:text-[16px] max-lg:leading-[20px]  font-medium  text-center w-[fit-content]">
                        THE AYURVEDIC TREATMENTS
                    </h2>
                    <h3 className="m-auto text-[#314a10] font-[source,serief4] my-[20px] text-[50px] leading-[52px] max-2xl:text-[42px]
           leading-[48px] max-xl:text-[36px] max-xl:leading-[40px] max-lg:text-[30px] max-lg:leading-[36px] max-mlg:text-[28px] max-mlg:leaing-[32px] font-normal   text-center w-[fit-content]">
                        Latest Doctors Talk
                    </h3> */}
          <div className="grid grid-cols-3 max-mlg:grid-cols-2 max-sm:grid-cols-1 gap-[30px] max-2xl:gap-[20px]   mt-[60px]">
            <div className="group rounded-[30px] overflow-hidden">
              <div className="rounded-[10px] overflow-hidden">
                <Link href={""} className="block relative w-full h-[300px]">
                  <Image
                    fill
                    alt="Dr. K. N. Subramanian Namboothiri about Cancer Treatment in Ayurveda"
                    src={`${ASSET_PREFIX}/assets/images/dr-kn-subramanian-namboothiri-cancer-treatment-ayurveda.webp`}
                    className="w-full h-[300px] object-cover group-hover:scale-[1.1] transition duration-300 ease-linear"
                  />
                </Link>
              </div>

              <div className=" p-2">
                <p
                  className="text-[#60696e] mt-[20px] mb-[14px] text-[22px] leading-[30px] font-light 
      max-xxl:text-[20px] max-xxl:leading-[28px] 
      group-hover:text-[#5d773d] transition-colors duration-300  
      max-mlg:text-[18px] max-mlg:leading-[26px] 
      max-xl:mt-[15px] max-xl:mb-[9px] overflow-hidden">
                  Your Ultimate Ayurvedic Medical Tourism Guide in 2025
                </p>
                <h3
                  className="my-[20px] text-[20px] leading-[30px]  
      max-xxl:text-[18px] max-xxl:leading-[26px]  
      max-mlg:text-[16px] max-mlg:leading-[24px] 
      max-xl:my-[15px]">
                  Jul 25, 2025
                </h3>
              </div>
            </div>

            <div className="group rounded-[30px] overflow-hidden">
              <div className="rounded-[10px] overflow-hidden">
                <Link href={""} className="block relative w-full h-[300px]">
                  <Image
                    fill
                    alt="Dr. K. N. Subramanian Namboothiri about Cancer Treatment in Ayurveda"
                    src={`${ASSET_PREFIX}/assets/images/dr-kn-subramanian-namboothiri-cancer-treatment-ayurveda.webp`}
                    className="w-full h-[300px] object-cover group-hover:scale-[1.1] transition duration-300 ease-linear"
                  />
                </Link>
              </div>

              <div className=" p-2">
                <p
                  className="text-[#60696e] mt-[20px] mb-[14px] text-[22px] leading-[30px] font-light 
      max-xxl:text-[20px] max-xxl:leading-[28px] 
      group-hover:text-[#5d773d] transition-colors duration-300  
      max-mlg:text-[18px] max-mlg:leading-[26px] 
      max-xl:mt-[15px] max-xl:mb-[9px] overflow-hidden">
                  Your Ultimate Ayurvedic Medical Tourism Guide in 2025
                </p>
                <h3
                  className="my-[20px] text-[20px] leading-[30px]  
      max-xxl:text-[18px] max-xxl:leading-[26px]  
      max-mlg:text-[16px] max-mlg:leading-[24px] 
      max-xl:my-[15px]">
                  Jul 25, 2025
                </h3>
              </div>
            </div>
            <div className="group rounded-[30px] overflow-hidden">
              <div className="rounded-[10px] overflow-hidden">
                <Link href={""} className="block relative w-full h-[300px]">
                  <Image
                    fill
                    alt="Dr. K. N. Subramanian Namboothiri about Cancer Treatment in Ayurveda"
                    src={`${ASSET_PREFIX}/assets/images/dr-kn-subramanian-namboothiri-cancer-treatment-ayurveda.webp`}
                    className="w-full h-[300px] object-cover group-hover:scale-[1.1] transition duration-300 ease-linear"
                  />
                </Link>
              </div>

              <div className="text-[#60696e] p-2">
                <p
                  className="text-[#60696e] mt-[20px] mb-[14px] text-[22px] leading-[30px] font-light 
      max-xxl:text-[20px] max-xxl:leading-[28px] 
      group-hover:text-[#5d773d] transition-colors duration-300  
      max-mlg:text-[18px] max-mlg:leading-[26px] 
      max-xl:mt-[15px] max-xl:mb-[9px] overflow-hidden">
                  Your Ultimate Ayurvedic Medical Tourism Guide in 2025
                </p>
                <h3
                  className="my-[20px] text-[20px] leading-[30px]  
      max-xxl:text-[18px] max-xxl:leading-[26px]  
      max-mlg:text-[16px] max-mlg:leading-[24px] 
      max-xl:my-[15px]">
                  Jul 25, 2025
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
