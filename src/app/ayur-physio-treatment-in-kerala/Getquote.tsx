import Link from "next/link";

export default function Getquote() {
  return (
    <>
      <search className="py-[30px] sm:py-[40px] lg:py-[60px] bg-[#e8f5d9]">
        <div className=" w-[75%] mx-auto max-w-[120rem] xxl:gap-[28%]  max-2xl:gap-[11%] max-xxl:gap-[17%] max-2xl:-gap-[8%] max-xl:gap-[6%] max-lg:gap-[20px] flex  justify-center lg:justify-end items-center max-lg:flex-wrap max-lg:items-end">
          <div>
            <p className="text-[22px] leading-[26px] max-xl:text-[20px] max-xl:leading-[24px] max-md:text-[18px] max-md:leading-[22px] text-[#384e20] font-bold text-center lg:text-left  mb-[20px]  max-lg:mb-[12px]">
              Discover your health&apos;s healing naturally.
            </p>
            <p className="text-[18px] leading-[22px] max-xl:text-[16px] max-xl:leading-[20px] max-md:text-[16px] max-md:leading-[22px] text-[#384e20] font-medium text-center lg:text-left">
              Book an exclusive consultation with an Ayur-Physio expert and
              relearn the strength and mobility at Samwarthika.
            </p>
          </div>
          <Link
            data-cta="book-app-get"
            className="text-[16px] leading-[18px] tracking-[2px] uppercase  font-light  px-5 py-3 bg-[var(--primary)]  border-1 border-[var(--primary)] text-[#fff]  hover-text-white  hover:bg-[#e36300]  transition duration-300  min-w-[220px] sm:text-nowrap w-fit! "
            href="/contact-us">
            Book Appointment
          </Link>
        </div>
      </search>
    </>
  );
}
