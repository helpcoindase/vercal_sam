import Link from "next/link";

export default function Getquote() {
  return (
    <>
      <search className="py-[30px] sm:py-[40px] lg:py-[60px] bg-[#e8f5d9]">
        <div className="w-[100%] px-[20%] max-w-[120rem] max-lg:px-[10%]  max-md:py-[5%] pr-[14%]  max-2xl:pr-[9%] xxl:gap-[28%]  max-2xl:gap-[11%]     max-xxl:gap-[17%] max-2xl:-gap-[8%] max-xl:gap-[6%] max-lg:gap-[20px] m-[auto]  max-md:mr-[auto]  flex  justify-center lg:justify-end items-center  max-lg:flex-wrap max-lg:items-end">
          <p className="text-[20px] leading-[24px] max-xl:text-[18px] max-xl:leading-[22px] max-md:text-[16px] max-md:leading-[24px] text-[#384e20] font-semibold text-center lg:text-left">
            Book a Treatment or Schedule an Appointment With Us Now!
          </p>
          <Link
            className="book-app-get"
            data-cta="book-app-get"
            href="/contact-us">
            <div className="text-[16px] leading-[18px] tracking-[2px] uppercase  font-light  px-5 py-3 bg-[var(--primary)]  border-1 border-[var(--primary)] text-[#fff]  hover-text-white  hover:bg-[#e36300]  transition duration-300  min-w-[220px] sm:text-nowrap">
              Book Appointment
            </div>
          </Link>
        </div>
      </search>
    </>
  );
}
