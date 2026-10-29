"use client";
import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

type CounterProps = {
  end: number;
  suffix?: string;
};

const Counter = ({ end, suffix = "+" }: CounterProps) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const duration = 2000; // 2 seconds
      const increment = end / (duration / 16); // 60fps

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          clearInterval(timer);
          setCount(end);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [inView, end]);

  return (
    <p
      ref={ref}
      className="text-[60px] leading-[60px] max-2xl:text-[50px] max-2xl:leading-[50px]  max-lg:text-[45px] max-lg:leading-[45px] max-sm:text-[30px] max-sm:leading-[38px]  text-[#e36300] font-medium font-[serif4] mb-[20px]  max-lg:mb-[15px]  max-mlg:mb-[10px] max-md:mb-[8px]  font-[source,serif4]  font-medium">
      {count}
      {suffix}
    </p>
  );
};

export default function Contactstats() {
  return (
    <>
      <section className=" relative after:-z-[7] after:absolute after:content-[''] after:top-[0px] after:w-[100%] after:h-[125%]   ">
        <div className="w-[90%] m-auto max-w-[130rem]">
           <div
            className="
  my-[90px] mt-[0px]! max-xxl:my-[80px] max-2xl:my-[70px] max-lg:my-[60px]  max-md:my-[40px]  grid grid-cols-[150px_150px_150px_150px] max-lg:grid-cols-[120px_120px_120px_120px] max-mlg:grid-cols-[100px_100px_100px_100px] max-sm:grid-cols-2 max-sm:gap-[30px]  max-sm: max-sm:pl-[0px] 
  grid grid-cols-[150px_150px_150px_150px] max-lg:grid-cols-[120px_120px_120px_120px] max-mlg:grid-cols-[100px_100px_100px_100px] max-sm:grid-cols-2 max-sm:gap-[30px]  max-sm:place-items-center max-sm:pl-[0px]
  gap-[60px] max-md:gap-[40px] w-[60%] max-2xl:w-[70%]  max-xl:w-[80%]  max-mlg:w-[85%] h-full m-auto 
  justify-between px-[40px] max-lg:px-[20px] max-lg:pr-[10px] max-sm:px-[25px] max-sm:pr-[0px]
  relative  bg-[#fff] 
  after:absolute after:content-[''] after:inset-0
  after:top-[50px] after:left-[-10%] after:w-[120%]
  after:h-full  
  after:border after:border-[#8b796c] after:rounded-[50px] max-sm:after:rounded-[30px] 
  after:-z-2 ">
            <div className="max-sm:max-w-[120px]">
              <p className="text-[60px] leading-[60px] max-2xl:text-[50px] max-2xl:leading-[50px] max-lg:text-[45px] max-lg:leading-[45px] max-sm:text-[30px] max-sm:leading-[34px] text-[#e36300] mb-[20px] max-lg:mb-[15px] max-mlg:mb-[10px] max-md:mb-[8px] font-[source,serif4] font-medium">
                25+
              </p>
              <p className="text-[22px] leading-[26px] max-lg:text-[20px] max-lg:leading-[24px] max-md:text-[18px] max-md:leading-[22px]  max-sm:text-[16px] max-sm:leading-[20px] text-[#472e19] font-[source,serif4] font-normal">
                Years of <br /> Trusted Care
              </p>
            </div>
            <div className="max-sm:max-w-[120px]">
              <p className="text-[60px] leading-[60px] max-2xl:text-[50px] max-2xl:leading-[50px] max-lg:text-[45px] max-lg:leading-[45px] max-sm:text-[30px] max-sm:leading-[34px] text-[#e36300] mb-[20px] max-lg:mb-[15px] max-mlg:mb-[10px] max-md:mb-[8px] font-[source,serif4] font-medium">
                20+
              </p>
              <p className="text-[22px] leading-[26px] max-lg:text-[20px] max-lg:leading-[24px] max-md:text-[18px] max-md:leading-[22px]  max-sm:text-[16px] max-sm:leading-[20px] text-[#472e19] font-[source,serif4] font-normal">
                Dedicated <br /> Doctors 
              </p>
            </div>
            <div className="max-sm:max-w-[120px]">
              <p className="text-[60px] leading-[60px] max-2xl:text-[50px] max-2xl:leading-[50px] max-lg:text-[45px] max-lg:leading-[45px] max-sm:text-[30px] max-sm:leading-[34px] text-[#e36300] mb-[20px] max-lg:mb-[15px] max-mlg:mb-[10px] max-md:mb-[8px] font-[source,serif4] font-medium">
                12+
              </p>
              <p className="text-[22px] leading-[26px] max-lg:text-[20px] max-lg:leading-[24px] max-md:text-[18px] max-md:leading-[22px]  max-sm:text-[16px] max-sm:leading-[20px] text-[#472e19] font-[source,serif4] font-normal">
               Personalised <br /> Packages 
              </p>
            </div>
            <div className="max-sm:max-w-[120px]">
              <p className="text-[60px] leading-[60px] max-2xl:text-[50px] max-2xl:leading-[50px] max-lg:text-[45px] max-lg:leading-[45px] max-sm:text-[30px] max-sm:leading-[34px] text-[#e36300] mb-[20px] max-lg:mb-[15px] max-mlg:mb-[10px] max-md:mb-[8px] font-[source,serif4] font-medium">
                50+
              </p>
              <p className="text-[22px] leading-[26px] max-lg:text-[20px] max-lg:leading-[24px] max-md:text-[18px] max-md:leading-[22px]  max-sm:text-[16px] max-sm:leading-[20px] text-[#472e19] font-[source,serif4] font-normal">
               Healing <br /> Therapies
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
