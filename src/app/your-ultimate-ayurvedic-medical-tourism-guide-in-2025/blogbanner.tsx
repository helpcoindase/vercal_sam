import Image from "next/image";
import Link from "next/link";
import { ASSET_PREFIX } from "../../../config";

export default function Blogbanner() {
  const image = "/assets/images/ayurveda-treatment.webp";
  return (
    <section className="">
      <div className="bg-[#c8e3d2]">
        <div className="w-[90%] mx-auto max-w-[120rem]">
          <div className="grid grid-cols-1 mlg:grid-cols-[45%_55%]">
            <div className=" py-[25px] xsm:p-[25px] md:p-[70px_40px] mlg:p-[90px_60px]">
              <h1 className="mb-[25px] text-[var(--secondary)] xxl:text-[50px] xxl:leading-[56px] text-[60px] leading-[65px] max-xxl:text-[45px] max-xxl:leading-[50px] max-2xl:text-[40px] max-2xl:leading-[46px]   max-sm:text-[38px] max-sm:leading-[40px] font-normal font-[source,serif4]  w-full mlg:w-[95%]   xl:w-[85%] z">
                Blog Detail
              </h1>
              <p className="my-[25px]  mlg:mb-[30px] mlg:mt-[20px]  text-[var(--secondary)] w-full mlg:w-[90%]  max-mlg:text-[16px] max-mlg:leading-[20px] text-[18px] leading-[24px]  max-sm:hidden">
                To keep alive the legacy of Ayurveda by adapting modern
                innovations into holistic healing practices in building a
                healthier world.
              </p>
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
                  alt={`Ayurveda Treatment`}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Pagination Dots */}
              <div className="absolute bottom-4 right-4 mlg:bottom-[5%] mlg:right-[7%] flex gap-[5px] z-10 w-fit ">
                {[0, 1, 2].map((idx) => (
                  <span
                    key={idx}
                    className={`w-[12px] h-[12px] rounded-full
              ${idx === 0 ? "bg-white w-[35px] " : "bg-white/50"}`}
                  />
                ))}
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
        /
        <Link
          href={"/blog"}
          className="text-[#e36300]/70 transition duration-300 hover:text-orange-600">
          Blog
        </Link>{" "}
        /<p>Your Ultimate Ayurvedic Medical Tourism Guide in 2025</p>
      </div>
    </section>
  );
}
