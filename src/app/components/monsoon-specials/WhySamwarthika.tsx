import Link from "next/link";
import { ASSET_PREFIX } from "../../../../config";
import Image from "next/image";
export default function WhySamwarthika() {
  const sideImages = [
    {
      img: "/assets/images/hair-loss-treatment.svg",
      imgtitle: "Hair Loss Treatment",
      content: "Only NABH-accredited Ayurveda hospital in Muvattupuzha",
      link: "ayurvedic-treatment-in-kerala",
    },
    {
      img: "/assets/images/arthritis-treatment.svg",
      imgtitle: "Arthritis Treatment",
      content: "Experienced physicians & specially trained therapists",
      link: "panchakarma-treatment-in-kerala",
    },
    {
      img: "/assets/images/sinusitis.svg",
      imgtitle: "Sinusitis Treatment",
      content: "Medicines prepared under expert supervision",
      link: "sinusitis-ayurvedic-treatment-in-kerala",
    },
    {
      img: "/assets/images/autsim.svg",
      imgtitle: "Autism Treatment",
      content:
        "Well-equipped treatment rooms, comfortable accommodation, Wi-Fi",
      link: "best-ayurvedic-treatment-for-autism-in-kerala",
    },
    {
      img: "/assets/images/weight-loss-treatment.svg",
      imgtitle: "Weight Loss Treatment",
      content:
        "Calm, serene atmosphere and canteen serving Ayurvedic diet Your care follows authentic Ayurvedic guidelines from start to finish.",
      link: "weight-loss-ayurvedic-treatment-in-kerala",
    },
  ];

  return (
    <>
      <section className="pt-[140px]  max-2xl:pt-[100px]   max-xl:pt-[80px]  max-md:pt-[50px]">
        <div className="w-[90%] m-[auto]">
          {/* <p className="m-auto uppercase text-[#361902cc] text-[20px]  leading-[24px] max-xl:text-[18px] max-xl:leading-[22px]  max-lg:text-[16px] max-lg:leading-[20px]  font-medium  text-center w-[fit-content]">
            THE AYURVEDIC TREATMENTS
          </p> */}
          <h3
            className="m-auto text-[#304A10] font-[source,serief4] mb-[20px] mt-[8px] text-[60px] leading-[65px] max-2xl:text-[52px]
           leading-[58px] max-xl:text-[46px] max-xl:leading-[50px] max-lg:text-[40px] max-lg:leading-[46px] max-mlg:text-[38px] max-mlg:leading-[42px] font-normal   text-center w-[fit-content]">
            Why <br />
            Samwarthika
            
          </h3>

          <div
            className="grid gap-5 
  grid-cols-1 
  sm:grid-cols-2 
  lg:grid-cols-3   lg:w-[80%]  xl:w-[70%] 2xl:w-[60%] m-auto">
            {sideImages.map(({ img, imgtitle, link, content }, i) => (
              <div
                key={i}
                className="text-start w-full  h-full  m-auto flex justify-start items-start flex-col p-[30px]  max-lg:p-[20px] rounded-[20px] overflow-hidden border border-transparent hover:border-[#c3efd2] hover:bg-[#effff5]">
                <Image
                  src={`${ASSET_PREFIX}${img}`}
                  alt={imgtitle}
                  width={200}
                  height={200}
                  className="w-[80px] h-auto mx-0 sepia"
                />
                <p className="mt-2 text-[#31936d] xl:text-[18px] xl:leading-[26px] text-[16px] leading-[24px]  max-md:text-[16px] max-md:leading-[22px] font-semibold">
                  {imgtitle}
                </p>
                <p className="mt-2 text-[#171717] xl:text-[16px] xl:leading-[22x] text-[16px] leading-[22px] font-normal">
                  {content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
