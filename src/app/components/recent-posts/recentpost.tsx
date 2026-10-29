import Image from "next/image";
import Link from "next/link";
import { ASSET_PREFIX } from "../../../../config";

export default function Recentpost() {
  const featuredData = [
    {
      image: `/assets/images/ayurvedic-medical-tourism-guide-2025.webp`,
      title: "Your Ultimate Ayurvedic Medical Tourism Guide in 2025",
      date: "Jul 25 2025",

      link: "/your-ultimate-ayurvedic-medical-tourism-guide-in-2025",
    },
    {
      image: `/assets/images/ayurveda-wellness-retreat.webp`,
      title: "Ultimate Guide To Planning An Ayurveda Wellness Retreat",
      date: "Mar 11 2025",

      link: "/ultimate-guide-to-planning-an-ayurveda-wellness-retreat",
    },
    {
      image: `/assets/images/panchakarma-treatment-guide-2025.webp`,
      title: "What to Expect? A Simple Panchakarma Treatment Guide for 2025",
      date: "Mar 07 2025",

      link: "/what-to-expect-a-simple-panchakarma-treatment-guide-for-2025",
    },
  ];

  return (
    <div className="sticky top-[130px] z-[1]">
      <div className="mb-[40px] md-mb-[50px] mlg:mb-[60px] bg-[#c8e3d2] rounded-[90px_90px_0px_0px] pr-[30px]  py-[50px] max-2xl:pr-[20px] max-2xl:py-[80px]  max-lg:px-[20px]  ">
        <h2 className=" text-[var(--secondary)]  font-[source,serif4] text-center mb-[20px] text-[24px] leading-[28px] max-xl:text-[22px]  max-xl:leading-[26px] max-xl:text-[20px]  max-xl:leading-[24px]">
          Recent Post
        </h2>

        <div className=" max-lg:grid grid-cols-[repeat(2,_1fr)] gap-[30px] justify-between max-sm:block">
          {featuredData.map((item, index) => (
            <div
              className="relative grid grid-cols-[120px_auto] max-xl:grid-cols-1 max-xl:gap-[0px] justify-between p-[20px] relative rounded-[0px_20px_20px_0px] max-lg:rounded-[20px]  after:absolute after:bottom-[-2px] after:w-[90%] after:h-[1px] after:bg-[#fff] after:right-[5%] cursor-pointer  transition duration-300 hover:bg-[#fff] bg-transparent hover:bg-[#fff] gap-[20px] items-center group"
              key={index}>
              <div className="rounded-[10px] max-mlg:max-w-[220px]  min-w-[110px] max-mlg:max-w-none overflow-hidden">
                <Image
                  src={`${ASSET_PREFIX}${item.image}`}
                  width={238}
                  height={175}
                  alt="Featured Blog"
                  className="w-full h-full object-cover object-end group-hover:scale-[1.1] transition duration-300 ease-linear"
                />
              </div>

              <div className="text-[#60696e]">
                <h3 className="my-[10px] text-[18px] leading-[28px]  max-xxl:text-[16px] max-xxl:leading-[26px]   max-xl:my-[15px] mt-[0] transition-all  duration-300  group-hover:text-[#e36300]">
                  {item.date}
                </h3>

                <p className="text-[var(--secondary)] mt-[20px] text-[20px] leading-[28px] font-light max-xxl:text-[18px] max-xxl:leading-[26px]  transition-colors duration-300  max-mlg:text-[16px] max-mlg:leading-[24px] max-xl:mt-[15px] ">
                  {item.title}
                </p>
              </div>
              <Link href={item.link} className="absolute inset-0 z-[99]"></Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
