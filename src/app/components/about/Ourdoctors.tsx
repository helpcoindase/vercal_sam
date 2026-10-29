"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useRef } from "react";
import Image from "next/image";
import type { NavigationOptions } from "swiper/types";
import Link from "next/link";
import { ASSET_PREFIX } from "../../../../config";
export default function Ourdoctors() {
  const doctors = [
    {
      img: "/assets/images/dr-kn-subramanian-namboothiri.webp",
      name: "Dr. K. N. Subramanian Namboothiri",
      id: "dr-k-subramanian",
      degree: "BAMS, MD(Ay) - Medical Director",
    },
    {
      img: "/assets/images/dr-jeevan-k-jose.webp",
      name: "Dr. Jeevan K Jose",
      id: "dr-k-jeevan",
      degree: "BAMS, MD(Ay), PGDCFT, MBA(Hrm) - Senior Medical Officer",
    },
    {
      img: "/assets/images/dr-valsaladevi-k.webp",
      name: "Dr. Valsaladevi K",
      id: "dr-k-valsaladevi",
      degree: "BAMS, FAGE, YIC, CNAD, MBA - Senior Consultant",
    },
    {
      img: "/assets/images/dr-jomy-joseph.webp",
      name: "Dr. Jomy Joseph",
      id: "dr-jomy",
      degree: "BAMS, MD(Ay) - Senior Consultant",
    },
    // {
    //   img: "/assets/images/dr-roshni-chellappan.webp",
    //   name: "Dr Roshni Chellappan",
    //   id: "dr-roshini",
    //   degree: "BAMS, PG Diploma in Panchakarma",
    // },
    {
      img: "/assets/images/dr-surumi.webp",
      name: "Dr. Surumi",
      id: "dr-surumi",
      degree: "BAMS, PGDCC",
    },
    // {
    //   img: "/assets/images/dr-meghna-c-k.webp",
    //   name: "Dr. Meghna C.K",
    //   id: "dr-meghna",
    //   degree: "Resident Medical Officer (RMO)",
    // },
  ];
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const scrollToId = (id: string): void => {
    if (!id) return;
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <>
      <section
        className="bg-[#E8F5D9] py-[80px]  max-2xl:py-[60px]   max-xl:py-[70px]  max-md:py-[50px]"
        id="doctors">
        <div className="w-[90%] m-auto max-w-[120rem]">
          {/* <h2 className="m-auto uppercase text-[#361902cc] text-[20px]  leading-[24px] max-xl:text-[18px] max-xl:leading-[22px]  max-lg:text-[16px] max-lg:leading-[20px]  font-medium  text-center w-[fit-content] font-mulish">
            THE AYURVEDIC DOCTORS
          </h2> */}
          <h3
            className="m-auto text-[#314a10] font-[source,serief4] my-[20px] font-normal text-[30px] leading-[36px]
                sm:text-[34px] sm:leading-[40px]
                   md:text-[38px] md:leading-[45px]
                      xl:text-[45px] xl:leading-[52px]
                         2xl:text-[60px] 2xl:leading-[65px]   text-center w-[fit-content]">
            Our Ayurvedic Consultants
          </h3>
          <div className="w-[80%]  flex flex-wrap gap-[20px] max-md:flex-col justify-end m-[auto]  max-[1200px]:w-[90%] max-mlg:w-[90%]  max-md:w-[100%] relative">
            <p className="text-center text-[#341903] text-[16px] leading-[24px] font-medium   w-[65%] max-lg:w-[100%] max-2xl:w-[60%] max-md:w-[100%] m-auto  ">
              Here, you’ll meet doctors who approach Ayurveda with both skill
              and sincerity. Every consultant at Samwarthika brings strong
              academic grounding and hands-on clinical experience. Their
              specialised skills span Panchakarma, chronic pain care,
              rehabilitation and lifestyle disorders.
            </p>
            <p className="text-center text-[#341903] text-[16px] leading-[24px] font-medium   w-[50%] max-[1200px]:!w-[100%] max-2xl:w-[60%] max-md:w-[100%] m-auto">
              They work closely with you to understand the root cause of your
              concerns.{" "}
            </p>
            <div className="flex  justify-end absolute right-[50px] min-[1200px]:bottom-[0px]  min-[1200px]:right-[0px] max-[1200px]:relative max-[600px]:!justify-center max-[600px]:right-[0px]">
              <Link
                href={"/our-doctors"}
                className="text-[16px] flex justify-center leading-[18px] tracking-[2px] uppercase  font-light px-[30px] py-[11px] bg-[var(--primary)]  border-1 border-[var(--primary)] text-[#fff]   hover:bg-[transparent] hover:text-[var(--primary)] transition duration-300 ">
                View all
              </Link>{" "}
            </div>
          </div>
          {/*
            <Link
              href={"/our-doctors"}
              className="text-[16px] flex justify-center leading-[18px] tracking-[2px] uppercase  font-light px-[30px] py-[11px] bg-[var(--primary)]  border-1 border-[var(--primary)] text-[#fff]   hover:bg-[transparent] hover:text-[var(--primary)] transition duration-300  min-w-[220px] max-w-[220px]">
              View all
            </Link>{" "}
         */}
          <div className="flex gap-[20px] w-[85%] m-[auto] pb-[0] sm:py-[50px] relative mt-[60px] max-2xl:mt-[40px] max-mlg:mt-[30px]">
            <Swiper
              modules={[Navigation]}
              spaceBetween={10}
              slidesPerView={1}
              breakpoints={{
                0: { slidesPerView: 1 },
                580: { slidesPerView: 2 },
                1050: { slidesPerView: 3 },
                1600: { slidesPerView: 4 },
              }}
              onSwiper={(swiper) => {
                setTimeout(() => {
                  if (!swiper || swiper.destroyed || !swiper.params) return;
                  const navigation = swiper.params.navigation as NavigationOptions;
                  if (navigation && typeof navigation !== 'boolean' && prevRef.current && nextRef.current) {
                    navigation.prevEl = prevRef.current;
                    navigation.nextEl = nextRef.current;

                    swiper.navigation?.destroy();
                    swiper.navigation?.init();
                    swiper.navigation?.update();
                  }
                });
              }}
              className="w-full mx-[10%] max-mlg:mx-[13%]">
              {doctors.map((doc, index) => (
                <SwiperSlide key={index} className="flex h-full group">
                  <div
                    className="doc-div flex flex-col justify-start p-3 bg-white rounded-2xl w-full border border-transparent hover:border-[#b4d191] cursor-pointer h-full pb-10 relative"
                    onClick={() => scrollToId(`#${doc.id}`)}>
                    <div className="w-full h-fit rounded-2xl overflow-hidden group relative">
                      <div className="w-full h-full overflow-hidden rounded-2xl">
                        <Image
                          alt={doc.name}
                          width={342}
                          height={100}
                          className="w-full h-auto transition duration-500 group-hover:scale-105 object-cover"
                          src={`${ASSET_PREFIX}${doc.img}`}
                        />
                      </div>
                    </div>

                    <div className="p-3 pb-[0px] max-h-[180px] h-full flex flex-col justify-between gap-[20px] ">
                      <div>
                        <h3 className="xxl:text-[20px] xxl:leading-[26px] max-xl:text-[18px] max-xl:leading-[24px] text-lg leading-6 text-[#593e29] pt-2 font-semibold font-[mulish]!">
                          {doc.name}
                        </h3>
                        <p className="xxl:text-[18px] xxl:leading-[24px] max-xl:text-[16px] max-xl:leading-[22px]  text-[#b98c68] pt-1">
                          {doc.degree}
                        </p>
                      </div>
                      <Link
                        href={"/contact-us"}
                        className="block   w-fit mr-[0] text-[16px] xl:text-[16px] 2xl:text-[16px] leading-[24px] 2xl:leading-[24px]  border-[1px] border-[var(--primary)]  hover:text-[#fff]    bg-[#fff] hover:bg-[#304A10]/90 text-[var(--primary)] py-[8px] h-[fit-content] px-[15px] sm:px-[30px] rounded-[50px] font-normal text-center items-center  hover:bg-[#304A10] transition duration-300  hover:text-[#fff] relative z-[25]">
                        Book Appointment
                      </Link>
                    </div>
                    <Link
                      href={`/our-doctors#${doc.id}`}
                      className="absolute top-[0px] w-full h-full"
                      aria-label="doctor"></Link>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation Buttons */}
            <div
              ref={prevRef}
              className="prev-nav absolute top-1/2 -translate-y-1/2 left-[-4.5rem] max-md:left-[-2.5rem] max-sm:left-[-1.5rem] z-10 cursor-pointer bg-white hover:bg-[#f4f4f4] p-[4px] sm:p-3 rounded-full shadow-lg transition duration-200 border-1 border-[#d6cbbe]
              w-[35px] h-[35px] sm:w-[auto] sm:h-[auto]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="#553e2b"
                className="w-6 h-6 text-gray-700">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </div>

            <div
              ref={nextRef}
              className="next-nav absolute top-1/2 -translate-y-1/2 right-[-4.5rem] max-md:right-[-2.5rem] max-sm:right-[-1.5rem] z-10 cursor-pointer bg-white hover:bg-[#f4f4f4] p-[4px] sm:p-3 rounded-full shadow-lg transition duration-200 border-1 border-[#d6cbbe]
              w-[35px] h-[35px] sm:w-[auto] sm:h-[auto]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="#553e2b"
                className="w-6 h-6 text-gray-700">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>

            {/* <div className="doc-div  p-[10px] bg-[#fff] rounded-[30px] w-[fit-content] border-1 border-[transparent] hover:border-[#b4d191]  cursor-pointer">
              <div>
                <Image
                  alt="dr-k-n-subramanian-namboothiri"
                  width={342}
                  height={100}
                  className="w-[100%] h-[auto] rounded-[30px] overflow-hidden"
                  src={`${ASSET_PREFIX}/assets/images/dr-kn-subramanian-namboothiri.webp`}
                />
              </div>
              <div className="p-[10px] pb-[40px]">
                <h3 className="text-[18px] leading-[22px] text-[#593e29] pt-[10px] font-semibold">
                  Dr. K. N. Subramanian Namboothiri
                </h3>
                <p className="text-[#b98c68] pt-[3px]">
                  BAMS, MD(Ay) -Medical Director
                </p>
              </div>
            </div>
            <div className="doc-div  p-[10px] bg-[#fff] rounded-[30px] w-[fit-content] border-1 border-[transparent] hover:border-[#b4d191]  cursor-pointer">
              <div>
                <Image
                  alt="dr-k-n-subramanian-namboothiri"
                  width={342}
                  height={100}
                  className="w-[100%] h-[auto] rounded-[30px] overflow-hidden"
                  src={`${ASSET_PREFIX}/assets/images/dr-jeevan-k-jose.jpg`}
                />
              </div>
              <div className="p-[10px] pb-[40px]">
                <h3 className="text-[18px] leading-[22px] text-[#593e29] pt-[10px] font-semibold">
                  Dr. Jeevan K Jose
                </h3>
                <p className="text-[#b98c68] pt-[3px]">
                  BAMS, MD(Ay), PGDCFT, MBA(Hrm) Senior Medical Officer --
                </p>
              </div>
            </div>
            <div className="doc-div  p-[10px] bg-[#fff] rounded-[30px] w-[fit-content] border-1 border-[transparent] hover:border-[#b4d191]  cursor-pointer">
              <div>
                <Image
                  alt="dr-k-n-subramanian-namboothiri"
                  width={342}
                  height={100}
                  className="w-[100%] h-[auto] rounded-[30px] overflow-hidden"
                  src={`${ASSET_PREFIX}/assets/images/dr-valsaladevi-k.jpg`}
                />
              </div>
              <div className="p-[10px] pb-[40px]">
                <h3 className="text-[18px] leading-[22px] text-[#593e29] pt-[10px] font-semibold">
                  Dr. Valsaladevi K
                </h3>
                <p className="text-[#b98c68] pt-[3px]">
                  BAMS,FAGE,YIC, CNAD,MBA -Senior Consultant
                </p>
              </div>
            </div>
            <div className="doc-div  p-[10px] bg-[#fff] rounded-[30px] w-[fit-content] border-1 border-[transparent] hover:border-[#b4d191]  cursor-pointer">
              <div>
                <Image
                  alt="dr-k-n-subramanian-namboothiri"
                  width={342}
                  height={100}
                  className="w-[100%] h-[auto] rounded-[30px] overflow-hidden"
                  src={`${ASSET_PREFIX}/assets/images/dr-jomy-joseph.jpg`}
                />
              </div>
              <div className="p-[10px] pb-[40px]">
                <h3 className="text-[18px] leading-[22px] text-[#593e29] pt-[10px] font-semibold">
                  Dr. Jomy Joseph
                </h3>
                <p className="text-[#b98c68] pt-[3px]">
                  BAMS,MD(Ay) -Senior Consultant
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}
