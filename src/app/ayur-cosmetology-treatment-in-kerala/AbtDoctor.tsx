import Image from "next/image";
import { ASSET_PREFIX } from "../../../config";

export default function AbtDoctor() {
  return (
    <section className="pt-[180px]  max-2xl:pt-[100px]   max-xl:pt-[80px]  max-md:pt-[50px]">
      <div className="w-[90%] mlg:w-[80%] 2xl:w-[60%] mx-auto ">
        {/* Title Section */}
        <div className="text-center mb-[40px] mlg:mb-[80px]">
          <h2 className="m-auto text-[#314a10] font-[source,serief4] mb-[20px] text-[60px] leading-[65px] max-2xl:text-[52px]   leading-[58px] max-xl:text-[46px] max-xl:leading-[50px] max-lg:text-[40px] max-lg:leading-[46px] max-mlg:text-[38px] max-mlg:leading-[42px] font-normal   text-center w-[fit-content]">
            About Doctor
            
          </h2>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 mlg:grid-cols-[350px_auto] gap-[40px] mlg:gap-[80px] xl:gap-[120px] ">
          {/* Left Column - Image & Name */}
          <div className="text-center mlg:text-left">
            <div className="mb-[20px]">
              <Image
                src={`${ASSET_PREFIX}/assets/images/dr-kn-subramanian-namboothiri.webp`}
                alt="Dr. K. N. Subramanian Namboothiri"
                width={350}
                height={400}
                className="rounded-[20px] mx-auto mlg:mx-0"
              />
            </div>
            <p className="text-[20px] leading-[28px] font-semibold text-[#341802]">
              Dr. K. N. Subramanian Namboothiri
            </p>
            <p className="text-[18px] leading-[26px] text-[#e36300] mt-[4px]">
              BAMS, MD(Ay) - Medical Director
            </p>
          </div>

          {/* Right Column - Message */}
          <div>
            <p className="text-[#000] text-[18px] leading-[26px]  mlg:text-[20px] mlg:leading-[28px] xl:text-[22px] xl:leading-[30px]  w-full mb-[30px]  mlb:mb-[50px]">
              Our mission is to popularize the holistic approach of Ayurveda
              worldwide which heals the body, mind and soul, we seek to provide
              qualified practitioners, state-of-the-art facilities and
              affordable quality healthcare to the society at large.
            </p>
            <p className="text-[16px] leading-[26px] text-[#4B4B4B] font-normal">
              Our mission is to popularize the holistic approach of Ayurveda
              worldwide which heals the body, mind and soul, we seek to provide
              qualified practitioners, state-of-the-art facilities and
              affordable quality healthcare to the society at large. Our mission
              is to popularize the holistic approach of Ayurveda worldwide which
              heals the body, mind and soul, we seek to provide qualified
              practitioners, state-of-the-art facilities and affordable quality
              healthcare to the society at large.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
