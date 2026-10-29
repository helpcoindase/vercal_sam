"use client";
import Link from "next/link";
import { ASSET_PREFIX } from "../../../../config";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
export default function TreatmentList() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const sideImages = [
    {
      video: "https://www.youtube.com/watch?v=r7d9X3EMWk8",
    },
    {
      video: "https://www.youtube.com/watch?v=S0pp2wOcNzk",
    },
    {
      video: "https://www.youtube.com/watch?v=Rr3oC7NBNQE",
    },
    {
      video: "https://www.youtube.com/watch?v=O4ZwPlr_0Hg",
    },
    {
      video: "https://www.youtube.com/watch?v=JF4BYd0gmh8",
    },
  ];
  return (
    <>
      <section className="pb-[70px]   max-xl:pb-[60px]  max-md:pb-[40px]">
        <div className="w-[90%] m-[auto] max-w-[120rem]">
          {/* <p className="uppercase text-[#361902cc] text-[18px] leading-[22px] max-xl:text-[16px] max-xl:leading-[20px]  max-lg:text-[16px] max-lg:leading-[20px]  font-semibold  text-start w-[fit-content] tracking-[1px] m-auto">
            THE AYURVEDIC TREATMENTS
          </p> */}
          <h3
            className="m-auto text-[#314a10] font-[source,serief4] my-[20px] font-normal


             text-[30px] leading-[36px]
                sm:text-[34px] sm:leading-[40px]
                   md:text-[38px] md:leading-[45px]
                      xl:text-[45px] xl:leading-[52px]
                         2xl:text-[60px] 2xl:leading-[65px]   text-center   max-w-[35%] max-2xl:max-w-[45%] max-xl:max-w-[40%]  max-md:max-w-[55%] max-sm:max-w-[70%]">
            Hear From Those Who’ve Been Here
          </h3>
          <div className="w-[80%]  flex flex-wrap gap-[30px] max-md:flex-col justify-end m-[auto]  max-[1200px]:w-[100%] max-mlg:w-[90%]  max-md:w-[100%] relative">
            <p className="text-center text-[#341903] text-[16px] leading-[24px] font-medium   w-[65%] max-lg:w-[100%] max-2xl:w-[60%] max-md:w-[100%] m-auto  ">
              Samwarthika offers a calming retreat featuring cozy, patient-friendly rooms, a spacious dining hall and a lush herb garden for peaceful relaxation. Our vegetarian kitchen serves wholesome Ayurvedic meals, while our multilingual library provides a quiet escape. With Wi-Fi, hot water and laundry facilities available, comfort, rejuvenating Ayurvedic Treatments and well-being are always at hand.
            </p>
            <div className="flex absolute bottom-0 right-0 justify-end max-lg:relative max-lg:bottom-auto max-lg:right-auto max-[600px]:!justify-center">
              <Link
                href={"/client-testimonials"}
                className="text-[16px] flex justify-center leading-[18px] tracking-[2px] uppercase  font-light px-[30px] py-[11px] bg-[var(--primary)]  border-1 border-[var(--primary)] text-[#fff]   hover:bg-[transparent] hover:text-[var(--primary)] transition duration-300 ">
                View all
              </Link>{" "}
            </div>
          </div>
          <div className="mt-[60px] max-xl:mt-[40px] grid grid-cols-3 max-mlg:grid-cols-2 gap-[30px] max-2xl:gap-[20px] max-mlg:gap-[15px] pt-[50px]  max-2xl:pt-[35px]  max-lg:pt-[25px] w-[80%] max-[1200px]:w-[100%] max-mlg:w-[90%]  max-md:w-[100%] mx-auto">
            <div className="grid gap-[30px] max-2xl:gap-[20px] max-mlg:gap-[15px]">
              <div className="rounded-[30px] max-lg:rounded-[25px] max-mlg:rounded-[20px] max-md:rounded-[15px] overflow-hidden relative  group h-[fit-content] xxl:max-h-[295px] max-h-[260px] after:absolute after:top-[0px] after:left-[0px] after:w-[100%] after:h-[100%] after:content-[''] after:bg-[linear-gradient(0deg,rgba(0,0,0,0.56)_0%,rgba(255,255,255,0)_100%)] cursor-pointer cursor-pointer relative">
                <Image
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-[100%] h-[100%] object-cover object-center transition duration-1000 group-hover:scale-[1.1]"
                  alt="Parkinson Patients"
                  src={`${ASSET_PREFIX}/assets/images/parkinson-patients.webp`}
                />
                <div
                  className="z-[5] absolute flex justify-between items-end top-0 bottom-0 right-0 w-[100%] h-[100%] p-[30px]  max-lg:p-[20px] gap-[40px]  max-2xl:gap-[30px]  max-lg:gap-[20px]   max-mlg:gap-[20px] max-mlg:justify-start max-mlg:flex-col-reverse max-mlg:items-start"
                  onClick={() => setSelectedIndex(0)}>
                  {/* <p className="xxl:text-[28px] xxl:leading-[34px] text-[24px] leading-[30px]  max-2xl:text-[22px] max-2xl:leading-[26px]  max-lg:text-[20px] max-lg:leading-[24px] max-mlg:text-[18px] max-mlg:leading-[22px]  max-md:text-[16px] max-md:leading-[20px] text-[#fff]   ">
                    Ayurvedic <br />
                    Panchakarma
                  </p> */}
                  {/* <p className="xxl:text-[16px] xxl:leading-[24px] text-[16px] leading-[22px] max-mlg:text-[12px] max-mlg:leading-[20px]  max-[700px]:hidden text-[#fff]/70  opacity-0 group-hover:opacity-[100]  transition duration-800">
                    The Ayurveda Hospital in Ernakulam offers therapies
                    including panchakarma, abhyanga, elakizhi, nasyam,
                  </p> */}
                </div>
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex justify-center items-center  z-[35] rounded-[50%]  p-[8px] border-1 border-[#fff]  max-mlg:w-[40px] max-mlg:h-[40px]"
                  onClick={() => setSelectedIndex(0)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35px"
                    height="35px"
                    viewBox="0 0 2048 2048">
                    <path fill="#fff" d="M1792 1024L512 1920V128z" />
                  </svg>
                </div>
              </div>
              <div className="rounded-[30px] max-lg:rounded-[25px] max-mlg:rounded-[20px] max-md:rounded-[15px] overflow-hidden relative  group h-[fit-content] xxl:max-h-[295px] max-h-[260px] after:absolute after:top-[0px] after:left-[0px] after:w-[100%] after:h-[100%] after:content-[''] after:bg-[linear-gradient(0deg,rgba(0,0,0,0.56)_0%,rgba(255,255,255,0)_100%)] cursor-pointer">
                <Image
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-[100%] h-[100%] object-cover object-center transition duration-1000 group-hover:scale-[1.1]"
                  alt="Patient Testimonial - Varicose Veins"
                  src={`${ASSET_PREFIX}/assets/images/patient-testimonial-varicose-veins.webp`}
                />
                <div
                  className="z-[5] absolute flex justify-between items-end top-0 bottom-0 right-0 w-[100%] h-[100%] p-[30px]  max-lg:p-[20px] gap-[40px]  max-2xl:gap-[30px]  max-lg:gap-[20px]   max-mlg:gap-[20px] max-mlg:justify-start max-mlg:flex-col-reverse max-mlg:items-start "
                  onClick={() => setSelectedIndex(1)}>
                  {/* <p className="xxl:text-[28px] xxl:leading-[34px] text-[24px] leading-[30px]  max-2xl:text-[22px] max-2xl:leading-[26px]  max-lg:text-[20px] max-lg:leading-[24px] max-mlg:text-[18px] max-mlg:leading-[22px]  max-md:text-[16px] max-md:leading-[20px] text-[#fff]   ">
                    Ayur <br />
                    Cosmetology
                  </p> */}
                  {/* <p className="xxl:text-[16px] xxl:leading-[24px] text-[16px] leading-[22px] max-mlg:text-[12px] max-mlg:leading-[20px]  max-[700px]:hidden text-[#fff]/70  opacity-0 group-hover:opacity-[100]  transition duration-800">
                    The Ayurveda Hospital in Ernakulam offers therapies
                    including panchakarma, abhyanga, elakizhi, nasyam,
                  </p> */}
                </div>
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex justify-center items-center  z-[35] rounded-[50%]  p-[8px] border-1 border-[#fff]  max-mlg:w-[40px] max-mlg:h-[40px]"
                  onClick={() => setSelectedIndex(1)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35px"
                    height="35px"
                    viewBox="0 0 2048 2048">
                    <path fill="#fff" d="M1792 1024L512 1920V128z" />
                  </svg>
                </div>
              </div>
            </div>
            <div
              className="rounded-[30px] max-lg:rounded-[25px] max-mlg:rounded-[20px] max-md:rounded-[15px] overflow-hidden relative  group"
              onClick={() => setSelectedIndex(4)}>
              <Image
                loading="lazy"
                width={800}
                height={600}
                className="w-[100%] h-[100%] object-cover object-center transition duration-1000 group-hover:scale-[1.1]"
                alt="Difficulties of Parkinson Patients"
                src={`${ASSET_PREFIX}/assets/images/difficulties-of-parkinson-patients.webp`}
              />
              <div className="z-[5] absolute flex justify-between items-end top-0 bottom-0 right-0 w-[100%] h-[100%] p-[30px]  max-lg:p-[20px] gap-[40px]  max-2xl:gap-[30px]  max-lg:gap-[20px]   max-mlg:gap-[20px] max-mlg:justify-start max-mlg:flex-col-reverse max-mlg:items-start after:absolute after:top-[0px] after:left-[0px] after:w-[100%] after:h-[100%] after:content-[''] after:bg-[linear-gradient(0deg,rgba(0,0,0,0.56)_0%,rgba(255,255,255,0)_100%)] cursor-pointer cursor-pointer">
                {/* <p className="z-[5] xxl:text-[28px] xxl:leading-[34px] text-[24px] leading-[30px]  max-2xl:text-[22px] max-2xl:leading-[26px]  max-lg:text-[20px] max-lg:leading-[24px] max-mlg:text-[18px] max-mlg:leading-[22px]  max-md:text-[16px] max-md:leading-[20px] text-[#fff]   ">
                  Yoga & <br />
                  Meditations
                </p> */}
                {/* <p className="xxl:text-[16px] xxl:leading-[24px] text-[16px] leading-[22px] max-mlg:text-[12px] max-mlg:leading-[20px]  max-[700px]:hidden text-[#fff]/70  opacity-0 group-hover:opacity-[100]  transition duration-800">
                  The Ayurveda Hospital in Ernakulam offers therapies including
                  panchakarma, abhyanga, elakizhi, nasyam,
                </p> */}
              </div>
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex justify-center items-center  z-[35] rounded-[50%]  p-[8px] border-1 border-[#fff]  max-mlg:w-[40px] max-mlg:h-[40px]"
                onClick={() => setSelectedIndex(4)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35px"
                  height="35px"
                  viewBox="0 0 2048 2048">
                  <path fill="#fff" d="M1792 1024L512 1920V128z" />
                </svg>
              </div>
            </div>
            <div className="grid gap-[30px] max-2xl:gap-[20px] max-mlg:gap-[15px] ">
              <div
                className="rounded-[30px] max-lg:rounded-[25px] max-mlg:rounded-[20px] max-md:rounded-[15px] overflow-hidden relative  group h-[fit-content] xxl:max-h-[295px] max-h-[260px] after:absolute after:top-[0px] after:left-[0px] after:w-[100%] after:h-[100%] after:content-[''] after:bg-[linear-gradient(0deg,rgba(0,0,0,0.56)_0%,rgba(255,255,255,0)_100%)] cursor-pointer"
                onClick={() => setSelectedIndex(2)}>
                <Image
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-[100%] h-[100%] object-cover object-center transition duration-1000 group-hover:scale-[1.1]"
                  alt="Patient Testimonial from Kyrgyzstan"
                  src={`${ASSET_PREFIX}/assets/images/patient-testimonial-from-kyrgyzstan.webp`}
                />
                <div className="z-[5] absolute flex justify-between items-end top-0 bottom-0 right-0 w-[100%] h-[100%] p-[30px]  max-lg:p-[20px] gap-[40px]  max-2xl:gap-[30px]  max-lg:gap-[20px]   max-mlg:gap-[20px] max-mlg:justify-start max-mlg:flex-col-reverse max-mlg:items-start ">
                  {/* <p className="xxl:text-[28px] xxl:leading-[34px] text-[24px] leading-[30px]  max-2xl:text-[22px] max-2xl:leading-[26px]  max-lg:text-[20px] max-lg:leading-[24px] max-mlg:text-[18px] max-mlg:leading-[22px]  max-md:text-[16px] max-md:leading-[20px] text-[#fff]   ">
                    Ayur <br />
                    Physio
                  </p> */}
                  {/* <p className="xxl:text-[16px] xxl:leading-[24px] text-[16px] leading-[22px] max-mlg:text-[12px] max-mlg:leading-[20px]  max-[700px]:hidden text-[#fff]/70  opacity-0 group-hover:opacity-[100]  transition duration-800">
                    The Ayurveda Hospital in Ernakulam offers therapies
                    including panchakarma, abhyanga, elakizhi, nasyam,
                  </p> */}
                </div>
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex justify-center items-center  z-[35] rounded-[50%]  p-[8px] border-1 border-[#fff]  max-mlg:w-[40px] max-mlg:h-[40px]"
                  onClick={() => setSelectedIndex(2)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35px"
                    height="35px"
                    viewBox="0 0 2048 2048">
                    <path fill="#fff" d="M1792 1024L512 1920V128z" />
                  </svg>
                </div>
              </div>
              <div className="rounded-[30px] max-lg:rounded-[25px] max-mlg:rounded-[20px] max-md:rounded-[15px] overflow-hidden relative  group h-[fit-content] xxl:max-h-[295px] max-h-[260px] after:absolute after:top-[0px] after:left-[0px] after:w-[100%] after:h-[100%] after:content-[''] after:bg-[linear-gradient(0deg,rgba(0,0,0,0.56)_0%,rgba(255,255,255,0)_100%)] cursor-pointer  max-mlg:hidden">
                <Image
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-[100%] h-[100%] object-cover object-center transition duration-1000 group-hover:scale-[1.1]"
                  alt="Patient Testimonial from Oman"
                  src={`${ASSET_PREFIX}/assets/images/patient-testimonial-from-oman.webp`}
                />
                <div
                  className="z-[5] absolute flex justify-between items-end top-0 bottom-0 right-0 w-[100%] h-[100%] p-[30px]  max-lg:p-[20px] gap-[40px]  max-2xl:gap-[30px]  max-lg:gap-[20px]   max-mlg:gap-[20px] max-mlg:justify-start max-mlg:flex-col-reverse max-mlg:items-start "
                  onClick={() => setSelectedIndex(3)}>
                  {/* <p className="xxl:text-[28px] xxl:leading-[34px] text-[24px] leading-[30px]  max-2xl:text-[22px] max-2xl:leading-[26px]  max-lg:text-[20px] max-lg:leading-[24px] max-mlg:text-[18px] max-mlg:leading-[22px]  max-md:text-[16px] max-md:leading-[20px] text-[#fff]   ">
                    Ayurvedic <br />
                    Treatments
                  </p> */}
                  {/* <p className="xxl:text-[16px] xxl:leading-[24px] text-[16px] leading-[22px] max-mlg:text-[12px] max-mlg:leading-[20px]  max-[700px]:hidden text-[#fff]/70  opacity-0 group-hover:opacity-[100]  transition duration-800">
                    The Ayurveda Hospital in Ernakulam offers therapies
                    including panchakarma, abhyanga, elakizhi, nasyam,
                  </p> */}
                </div>
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex justify-center items-center  z-[35] rounded-[50%]  p-[8px] border-1 border-[#fff]  max-mlg:w-[40px] max-mlg:h-[40px]"
                  onClick={() => setSelectedIndex(3)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35px"
                    height="35px"
                    viewBox="0 0 2048 2048">
                    <path fill="#fff" d="M1792 1024L512 1920V128z" />
                  </svg>
                </div>
              </div>
            </div>
            <div
              className="rounded-[30px] max-lg:rounded-[25px] max-mlg:rounded-[20px] max-md:rounded-[15px] overflow-hidden relative  group h-[fit-content] xxl:max-h-[295px] max-h-[260px] after:absolute after:top-[0px] after:left-[0px] after:w-[100%] after:h-[100%] after:content-[''] after:bg-[linear-gradient(0deg,rgba(0,0,0,0.56)_0%,rgba(255,255,255,0)_100%)] cursor-pointer hidden  max-mlg:block"
              onClick={() => setSelectedIndex(3)}>
              <Image
                loading="lazy"
                width={800}
                height={600}
                className="w-[100%] h-[100%] object-cover object-center transition duration-1000 group-hover:scale-[1.1]"
                alt="Patient Testimonial from Oman"
                src={`${ASSET_PREFIX}/assets/images/patient-testimonial-from-oman.webp`}
              />
              <div className="z-[5] absolute flex justify-between items-end top-0 bottom-0 right-0 w-[100%] h-[100%] p-[30px]  max-lg:p-[20px] gap-[40px]  max-2xl:gap-[30px]  max-lg:gap-[20px]   max-mlg:gap-[20px] max-mlg:justify-start max-mlg:flex-col-reverse max-mlg:items-start "></div>
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex justify-center items-center  z-[35] rounded-[50%]  p-[8px] border-1 border-[#fff]  max-mlg:w-[40px] max-mlg:h-[40px]"
                onClick={() => setSelectedIndex(3)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35px"
                  height="35px"
                  viewBox="0 0 2048 2048">
                  <path fill="#fff" d="M1792 1024L512 1920V128z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <AnimatePresence>
          {selectedIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50"
              onClick={() => setSelectedIndex(null)} // close when clicking outside
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl  max-w-2xl w-[90%] relative max-sm:max-w-[90%] top-[30px]"
                onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
              >
                <button
                  aria-label="Button"
                  onClick={() => setSelectedIndex(null)}
                  className="absolute -top-7 right-0 text-white hover:text-red cursor-pointer ">
                  ✕
                </button>

                {sideImages[selectedIndex].video && (
                  <iframe
                    loading="lazy"
                    width="100%"
                    height="400"
                    src={sideImages[selectedIndex].video.replace(
                      "watch?v=",
                      "embed/",
                    )}
                    title={sideImages[selectedIndex].video}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-xl max-w-2xl"></iframe>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </>
  );
}
