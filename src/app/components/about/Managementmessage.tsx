import { ASSET_PREFIX } from "../../../../config";
import Image from "next/image";

export default function Managementmessage() {
  return (
    <section className="pt-[180px]  max-2xl:pt-[100px]   max-xl:pt-[80px]  max-md:pt-[50px] mx-auto max-w-[120rem]" id="founder-message">
      <div className="w-[90%] mlg:w-[80%] 2xl:w-[60%] mx-auto ">
        {/* Title Section */}
        <div className="text-center mb-[40px] mlg:mb-[80px]">
          {/* <p className="m-auto uppercase text-[#361902cc] text-[20px]  leading-[24px] max-xl:text-[18px] max-xl:leading-[22px]  max-lg:text-[16px] max-lg:leading-[20px]  font-medium  text-center w-[fit-content]">
            the management
          </p> */}
          <h2 className="m-auto text-[#314a10] font-[source,serief4] mb-[20px] text-[60px] leading-[65px] max-2xl:text-[52px]   leading-[58px] max-xl:text-[46px] max-xl:leading-[50px] max-lg:text-[40px] max-lg:leading-[46px] max-mlg:text-[38px] max-mlg:leading-[42px] font-normal   text-center w-[fit-content]">
            Founder&apos;s Message
          </h2>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 mlg:grid-cols-[350px_auto] gap-[40px] mlg:gap-[80px] xl:gap-[120px] ">
          {/* Left Column - Image & Name */}
          <div className="text-center mlg:text-left">
            <div className="sticky top-[120px]">
              <div className="mb-[20px]  ">
                <Image
                  src={`${ASSET_PREFIX}/assets/images/sunilkumar.webp`}
                  alt="Dr. K. N. Subramanian Namboothiri"
                  width={350}
                  height={400}
                  className="rounded-[20px] mx-auto mlg:mx-0"
                />
              </div>
              <p className="text-[20px] leading-[28px] font-semibold text-[#341802]">
                Mr Sunilkumar PG
              </p>
              <p className="text-[18px] leading-[26px] text-[#e36300] mt-[4px]">
                Managing Director
              </p>
            </div>
          </div>

          {/* Right Column - Message */}
          <div>
            <p className="text-[#000] text-[18px] leading-[26px]  mlg:text-[20px] mlg:leading-[28px] xl:text-[22px] xl:leading-[30px]  w-full mb-[30px]  mlb:mb-[50px]">
              It gives me immense joy to welcome you to Samwarthika Ayurveda
              Hospital. A place born from a deep belief in the healing power of
              Ayurveda and the timeless wisdom it carries.
            </p>
            <p className="text-[16px] leading-[26px] text-[#4B4B4B] font-normal mb-[15px]">
              When we began this journey, our dream was simple: to create a
              sanctuary where people could experience authentic Ayurvedic care
              with compassion, dignity and trust. At Samwarthika, every patient
              is more than a case file, you are a part of our extended family.
              Our doctors, therapists and staff pour their hearts into every
              treatment, ensuring that your healing journey is as comfortable
              and transformative as possible.
            </p>{" "}
            <p className="text-[16px] leading-[26px] text-[#4B4B4B] font-normal mb-[15px]">
              {" "}
              We don’t just treat symptoms; we nurture the mind, body and soul,
              staying true to the essence of Ayurveda. Our NABH accreditation
              and partnerships with leading organizations reflect our dedication
              to quality, but our greatest achievement is the faith and
              gratitude of the people who walk through our doors. Every story of
              recovery, every smile we help restore, strengthens our resolve to
              serve even better. As we grow, we remain rooted in our values -
              authenticity, compassion and service. We will continue to blend
              tradition with innovation so that Ayurveda remains accessible,
              reliable and deeply impactful for all who seek it.
            </p>{" "}
            <p className="text-[16px] leading-[26px] text-[#4B4B4B] font-normal mb-[15px]">
              Thank you for trusting us with your health and well-being. We are
              honored to walk alongside you on your journey to wellness,
              naturally.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
