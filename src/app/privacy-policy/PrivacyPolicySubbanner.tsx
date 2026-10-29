import Image from "next/image";
import Link from "next/link";
import { ASSET_PREFIX } from "../../../config";

export default function PrivacyPolicySubbanner() {
  const image =
    "/assets/images/subbanner/ayurvedic-treatment-rheumatoid-arthritis-in-kerala.webp";
  return (
    <section className="">
      <div className="bg-[#c8e3d2]">
        <div className="w-[90%] mx-auto max-w-[120rem]">
          <div className="grid grid-cols-1 mlg:grid-cols-[45%_55%]">
            <div className=" py-[25px] xsm:p-[25px] md:p-[70px_40px] mlg:p-[90px_60px]">
              <h1 className="text-[var(--secondary)] mb-[25px] xxl:text-[64px] xxl:leading-[70px] text-[60px] leading-[65px] max-xxl:text-[55px] max-xxl:leading-[65px] max-2xl:text-[50px] max-2xl:leading-[58px]  max-mlg:text-[45px] max-mlg:leading-[48px] max-sm:text-[38px] max-sm:leading-[40px] font-normal font-[source,serif4] w-full mlg:w-[100%] mb-[35px]">
                Privacy Policy
              </h1>

              <div className="btn-wrp flex flex-wrap gap-[10px] sm:gap-[20px]  ">
                <Link
                  className="book-app-sub"
                  data-cta="book-appoinment"
                  href="/contact-us">
                  <div className="text-[16px] leading-[18px] tracking-[2px] uppercase  font-light  px-5 py-3 bg-[var(--primary)]  border-1 border-[var(--primary)] text-[#fff]   hover:bg-[transparent] hover:text-[var(--primary)] transition duration-300">
                    Book Appointment
                  </div>
                </Link>
                {/* <Link
                  className=" text-[16px] leading-[18px] tracking-[2px] uppercase font-light px-5 py-3  hover:bg-[#fff] border-1 border-[var(--secondary)]  hover:text-[var(--primary)] hover:border-[#fff] transition duration-300 text-[var(--secondary)] "
                  href="/client-testimonials">
                  What Customer Says
                </Link> */}
              </div>
            </div>
            <div className="relative mlg:pr-[3%]">
              <div className="relative w-full h-[250px] sm:h-[350px] mlg:h-full">
                <Image
                  src={`${ASSET_PREFIX}${image}`}
                  alt={`Ayurveda Slide 1`}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="breadcrumbs  w-[90%] m-auto max-w-[120rem]  flex  max-md:flex-wrap gap-[10px]  max-lg:gap-[8px]  max-md:gap-[5px]  pt-[8px] max-sm:pt-[5px] xsm:p-[10px_25px] md:p-[10px_40px] mlg:p-[10px_60px] text-[#000]/60 text-[16px] leading-[22px]  max-xl:text-[16px]  max-xl:leading-[22px]">
        <Link
          href={"/"}
          className="text-[#e36300]/70 transition duration-300 hover:text-orange-600">
          Home
        </Link>{" "}
        /<p>Privacy Plolicy</p>
      </div>
    </section>
  );
}
