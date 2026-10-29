"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { ASSET_PREFIX } from "../../../../config";
import Link from "next/link";

export default function Aboutus() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <section className="py-[140px] max-2xl:py-[100px] max-xl:py-[80px] max-md:py-[70px]  ">
        <div className="w-[85%] m-auto max-2xl:w-[90%] max-lg:w-[90%] max-w-[100rem] relative z-[40]">
          <div className="grid  grid-cols-[40%_45%] max-2xl:grid-cols-[40%_50%]   max-mlg:grid-cols-[100%]! justify-center gap-[120px] max-2xl:gap-[100px] max-xl:gap-[0px]  max-xl:justify-between  ">
            <div>
              {/* <p className="uppercase text-[#361902cc] text-[18px] leading-[22px] max-xl:text-[16px] max-xl:leading-[20px]  max-lg:text-[16px] max-lg:leading-[20px]  font-semibold  text-start w-[fit-content] tracking-[1px]">
                THE AYURVEDIC Hospital
              </p> */}
              <h2
                className="text-[#314a10] font-[source,serief4] my-[20px] font-normal text-start w-[fit-content]


             text-[30px] leading-[36px]
                sm:text-[34px] sm:leading-[40px]
                   md:text-[38px] md:leading-[45px]
                      xl:text-[45px] xl:leading-[52px]
                         2xl:text-[60px] 2xl:leading-[65px]

           ">
                Authentic Ayurvedic Therapies
              </h2>
              <div
                className="relative w-[100%] h-[auto]   relative  z-[1] after:absolute  after:content-[] after:w-[100%] after:h-[100%]
                  after:top-[-30px] after:right-[-30px] max-xl:after:top-[-20px] max-xl:after:right-[-20px] max-sm:after:top-[-15px] max-sm:after:right-[-15px]   after:border-[1px_1px_1px_1px]  after:rounded-[120px_120px_0px_0px]  after:rounded-[25px_25px_25px_0px] max-sm:rounded-[15px_15px_25px_0px]  max-xl:after:rounded-[25px_25px_25px_0px] after:border-[#ed9b5d] after:z-[-4]  hidden max-mlg:block  max-[767px]:max-w-[500px] max-[767px]:m-[auto] max-mlg:mt-[60px] max-sm:mt-[40px] max-mlg:w-[80%] mx-auto min-h-[200px] ">
                <div className=" overflow-hidden">
                  <div
                    className="  rounded-[25px] overflow-hidden group cursor-pointer relative "
                    onClick={() => setOpen(true)}>
                    <Image
                      width={560}
                      height={315}
                      alt="Ayurveda hospital in Kerala"
                      src={`${ASSET_PREFIX}/assets/images/ayurveda-hospital-in-kerala.webp`} // <<< change to your static thumbnail// <<< change to your static thumbnail
                      className="w-full h-full transition duration-1000 group-hover:scale-[1.1] min-h-[200px] object-cover"
                    />

                    {/* Play Icon */}
                    <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
                      <svg
                        width="80"
                        height="80"
                        viewBox="0 0 100 100"
                        className="opacity-90 transition group-hover:opacity-100 max-[480px]:w-[40px]">
                        <circle
                          cx="50"
                          cy="50"
                          r="48"
                          fill="rgba(255, 254, 254, 0.55)"
                          stroke="white"
                          strokeWidth="3"
                        />
                        <polygon
                          points="40,30 75,50 40,70"
                          fill="#73904d"
                          className="group-hover:fill-[#e36300] transition-all duration-300"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <AnimatePresence>
                  {open && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-[99999] "
                      onClick={() => setOpen(false)}>
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white rounded-2xl max-w-3xl relative max-sm:max-w-[90%] w-[90%] top-[50px] "
                        onClick={(e) => e.stopPropagation()}>
                        {/* Close Button */}
                        <button
                          onClick={() => setOpen(false)}
                          className="absolute -top-8 right-0 text-white hover:text-red cursor-pointer text-2xl">
                          ✕
                        </button>

                        {/*  VIDEO IFRAME (STATIC URL)  */}
                        <iframe
                          width="100%"
                          height="450"
                          src="https://www.youtube.com/embed/tqFGGdcEp6M?si=3afnNSg8y1Gvvp0o"
                          title="YouTube video"
                          loading="lazy"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="rounded-xl w-full max-[480px]:max-h-[250px] max-h-[400px]"></iframe>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
                <div
                  className="absolute rounded-[50%] overflow-hidden    w-[150px] h-[150px] max-sm:w-[100px] max-sm:h-[100px]  max-xl:w-[200px] max-xl:h-[200px] max-lg:w-[150px] max-lg:h-[150px] left-[-60px] max-sm:left-[-30px]
                 max-[480px]:!h-[90px] max-[480px]:!w-[90px]  bottom-[-10px]  bg-[#fff] z-[20]">
                  <Image
                    width={50}
                    height={50}
                    className="w-[100%] h-[auto]"
                    alt="Samwarthika Logo"
                    src={`${ASSET_PREFIX}/assets/images/samwarthika-logo.webp`}
                  />
                </div>
              </div>
              <p className="text-[16px] leading-[24xpx]  text-[#341802]  my-[40px]  w-[80%]  max-md:w-[90%] max-sm:w-[100%]">
                {" "}
                Discover a complete range of Authentic Ayurvedic Treatment designed to detoxify, heal and rejuvenate your body. Experience the best with the Best Ayurvedic Hospital in Kerala, with Ayurvedic Treatments provided by experienced physicians and trained therapists.
              </p>
              <ul className="pl-[0] sm:pl-[20px]">
                <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[#341802]  max-md:leading-[22px]">
                  <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30px"
                      height="30px"
                      viewBox="0 0 24 24">
                      <path
                        fill="none"
                        stroke="#000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m10 17l5-5l-5-5"
                      />
                    </svg>
                  </div>
                  NABH-accredited Ayurveda Hospital in Kerala
                </li>
                <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[#341802]  max-md:leading-[22px]">
                  <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30px"
                      height="30px"
                      viewBox="0 0 24 24">
                      <path
                        fill="none"
                        stroke="#000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m10 17l5-5l-5-5"
                      />
                    </svg>
                  </div>
                  Authentic Kerala Ayurvedic therapies
                </li>
                <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[#341802]  max-md:leading-[22px]">
                  <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30px"
                      height="30px"
                      viewBox="0 0 24 24">
                      <path
                        fill="none"
                        stroke="#000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m10 17l5-5l-5-5"
                      />
                    </svg>
                  </div>
                  Panchakarma, rejuvenation & detox programmes
                </li>
                <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[#341802]  max-md:leading-[22px]">
                  <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30px"
                      height="30px"
                      viewBox="0 0 24 24">
                      <path
                        fill="none"
                        stroke="#000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m10 17l5-5l-5-5"
                      />
                    </svg>
                  </div>
                  Integrated physiotherapy & rehabilitation
                </li>
                <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[#341802]  max-md:leading-[22px]">
                  <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30px"
                      height="30px"
                      viewBox="0 0 24 24">
                      <path
                        fill="none"
                        stroke="#000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m10 17l5-5l-5-5"
                      />
                    </svg>
                  </div>
                  Comfortable rooms & healing environment
                </li>
                <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[#341802]  max-md:leading-[22px]">
                  <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30px"
                      height="30px"
                      viewBox="0 0 24 24">
                      <path
                        fill="none"
                        stroke="#000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m10 17l5-5l-5-5"
                      />
                    </svg>
                  </div>
                  24×7 care with support for international guests
                </li>
              </ul>
              <h3 className="text-[24px] leading-[30px] max-xl:text-[22px] max-xl:leading-[26px] max-md:text-[20px] max-md:leading-[24px]  text-[#e36300] max-sm:text-[#c25400]  font-[source,serif4]  mt-[40px] mb-[30px] max-xl:mt-[30px] max-xl:mb-[20px]">
                Recognized By
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3  md:grid-cols-5 mlg:grid-cols-[120px_120px_120px]  gap-[40px] my-[35px] sm:my-[20px] max-2xl:gap-[30px] max-xl:gap-[20px] flex-wrap items-center">
                <div className="group flex flex-col items-center">
                  <Image
                    width={90}
                    className="w-[90px] h-[auto]  max-xl:w-[70px]  max-md:w-[55px] transition duration-400 group-hover:scale-[1.05]"
                    height={90}
                    src={`${ASSET_PREFIX}/assets/images/nabh-logo.webp`}
                    alt="NABH Logo"
                  />
                </div>
                <div className="group flex flex-col items-center">
                  <Image
                    width={90}
                    className="w-[90px] h-[auto]  max-xl:w-[70px]  max-md:w-[55px] transition duration-400 group-hover:scale-[1.05]"
                    height={90}
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
                <div className="group flex flex-col items-center">
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
                <div className="group flex flex-col items-center">
                  <Image
                    width={100}
                    className="w-[90px] h-[auto]  max-xl:w-[70px]  max-md:w-[55px] transition duration-400 group-hover:scale-[1.05]"
                    height={90}
                    src={`${ASSET_PREFIX}/assets/images/emblem-of-kerala.webp`}
                    alt="Emblem of kerala"
                  />
                </div>
                <div className="group flex flex-col items-center">
                  <Image
                    width={100}
                    className="w-[90px] h-[auto]  max-xl:w-[70px]  max-md:w-[55px] transition duration-400 group-hover:scale-[1.05]"
                    height={90}
                    src={`${ASSET_PREFIX}/assets/images/trip-advisor-icon.webp`}
                    alt="Trip Advisor Icon"
                  />
                </div>
                <div className="group flex flex-col items-center">
                  <Image
                    width={90}
                    className="w-[100px] h-[auto]  max-xl:w-[70px]    transition duration-400 group-hover:scale-[1.05] "
                    height={90}
                    src={`${ASSET_PREFIX}/assets/images/kerala-tourism.webp`}
                    alt="Kerala Tourism"
                  />
                </div>
                <div className="group flex flex-col items-center">
                  <Image
                    width={90}
                    className="w-[100px] h-[auto]  max-xl:w-[70px]    transition duration-400 group-hover:scale-[1.05] "
                    height={90}
                    src={`${ASSET_PREFIX}/assets/images/glcouncil-logo.webp`}
                    alt="GL Council"
                  />
                </div>
              </div>
              <div className="btn-wrp flex flex-wrap gap-[10px] sm:gap-[20px]  ">
                <Link
                  href={"/about-us"}
                  className="text-[#5D773D] border-[#5d773d80]  uppercase border-1  py-[9px] px-[15px]    max-md:leading-[18px] flex  w-[fit-content] hover:bg-[#304A10] transition duration-300  hover:text-[#fff] tracking-[2px] text-[16px]">
                  View More
                </Link>
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
            <div>
              <div
                className="  relative w-[100%] h-[auto]   relative  z-[1] after:absolute  after:content-[] after:w-[100%] after:h-[100%]
                  after:top-[-20px] after:right-[-20px] max-xl:after:top-[-20px] max-xl:after:right-[-20px] after:border-[1px_1px_1px_1px]  after:rounded-[25px_25px_25px_0px]  max-xl:after:rounded-[25px_25px_25px_0px] after:border-[#ed9b5d] after:z-[-4]  max-mlg:hidden max-h-[500px] h-full sticky top-[170px] ">
                <div className=" overflow-hidden h-full">
                  <div
                    className="rounded-[25px] overflow-hidden group cursor-pointer relative h-full"
                    onClick={() => setOpen(true)}>
                    <Image
                      width={560}
                      height={315}
                      alt="Ayurveda hospital in Kerala"
                      src={`${ASSET_PREFIX}/assets/images/ayurveda-hospital-in-kerala.webp`} // <<< change to your static thumbnail
                      className="w-full h-full transition duration-1000 group-hover:scale-[1.1] object-cover"
                    />

                    {/* Play Icon */}
                    <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
                      <svg
                        width="80"
                        height="80"
                        viewBox="0 0 100 100"
                        className="opacity-90 transition group-hover:opacity-100 max-[480px]:w-[40px]">
                        <circle
                          cx="50"
                          cy="50"
                          r="48"
                          fill="rgba(255, 254, 254, 0.55)"
                          stroke="white"
                          strokeWidth="3"
                        />
                        <polygon
                          points="40,30 75,50 40,70"
                          fill="#73904d"
                          className="group-hover:fill-[#e36300] transition-all duration-300"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <AnimatePresence>
                  {open && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-[9999]"
                      onClick={() => setOpen(false)}>
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white rounded-2xl max-w-3xl  relative max-sm:max-w-[90%] w-[90%] top-[50px]"
                        onClick={(e) => e.stopPropagation()}>
                        {/* Close Button */}
                        <button
                          onClick={() => setOpen(false)}
                          className="absolute -top-8 right-0 text-white hover:text-red cursor-pointer text-2xl">
                          ✕
                        </button>

                        {/*  VIDEO IFRAME (STATIC URL)  */}
                        <iframe
                          width="100%"
                          height="450"
                          src="https://www.youtube.com/embed/tqFGGdcEp6M?si=3afnNSg8y1Gvvp0o"
                          title="YouTube video"
                          loading="lazy"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="rounded-xl w-full"></iframe>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
                <div className="absolute rounded-[50%] overflow-hidden   w-[150px] h-[150px] max-xl:w-[120px] max-xl:h-[120px] max-lg:w-[150px] max-lg:h-[150px] left-[-9%] bottom-[0px]  bg-[#fff] z-[20]">
                  <Image
                    width={50}
                    height={50}
                    className="w-[100%] h-[auto]"
                    alt="Samwarthika Logo"
                    src={`${ASSET_PREFIX}/assets/images/samwarthika-logo.webp`}
                  />
                </div>
                {/* <Image
                   width={424}
                  height={23}
                  className="w-[80%] h-[auto] absolute right-[0px] bottom-[40px]"
                  alt="Wave"
                  src={`${ASSET_PREFIX}/assets/images/wave-shape.webp`}
                /> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
