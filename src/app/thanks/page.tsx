
import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Subbanner from "./Subbanner";
import Link from "next/link";
import { getMeta } from "@/lib/getMeta";

export async function generateMetadata() {
  return getMeta("/thanks");
}
export default function Thanks() {
  return (
    <>
      <Header />
<main>
      <Subbanner />
      <section className="py-[140px]  max-2xl:py-[100px]   max-xl:py-[80px]  max-md:py-[50px]  h-[450px]  max-lg:h-[400px]  max-md:h-[350px]">
        <div className="h-[100%] flex flex-col justify-center items-center  w-[60%] m-auto  max-2xl:w-[70%] max-lg:w-[80%]  max-md:w-[90%]">
          {/* <p className="m-auto uppercase text-[#361902cc] text-[20px]  leading-[24px] max-xl:text-[18px] max-xl:leading-[22px]  max-lg:text-[16px] max-lg:leading-[20px]  font-medium  text-center w-[fit-content]">
            THE AYURVEDIC TREATMENTS
          </p> */}
          <h3 className="m-auto text-[#314a10] font-[source,serief4]    font-normal my-0     text-[30px] leading-[36px]   sm:text-[34px] sm:leading-[40px]   md:text-[38px] md:leading-[45px]   xl:text-[45px] xl:leading-[52px]   2xl:text-[60px] 2xl:leading-[65px]   text-center w-[fit-content]">
            Thank you For Contacting Us
            
          </h3>
          <p className="text-[16px] leading-[24xpx]  text-[#341802]  my-[30px]  w-[80%]  max-md:w-[90%] max-sm:w-[100%] text-center">
            Thank you for reaching out to us. We appreciate your patience and
            will get back to you as soon as possible. In the meantime, if you
            have any urgent questions or need immediate assistance, please do
            not hesitate to contact us directly at <Link data-cta="call-now" href="tel:+9194463 65601" className="text-[#e36300] hover:text-[var(--secondary)] duration-300">+91 94463 65601</Link>. We are
            here to help and ensure your concerns are addressed promptly.
          </p>
        </div>
      </section>
      </main>
<Footer />
    </>
  );
}
