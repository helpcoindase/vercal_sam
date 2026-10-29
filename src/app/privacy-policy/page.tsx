import Link from "next/link";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import PrivacyPolicySubbanner from "./PrivacyPolicySubbanner";
import { getMeta } from "@/lib/getMeta";

export async function generateMetadata() {
  return getMeta("/privacy-policy");
}

export default function PrivacyPolicy() {
  return (
    <div>
      <Header />
      <main>
        <PrivacyPolicySubbanner />
        <section className="py-[140px]  max-2xl:py-[100px]   max-xl:py-[80px]  max-md:py-[50px]  ">
          <div className="h-[100%] flex flex-col justify-start items-start  w-[90%] sm:w-[80%] md:w-[70%] mx-auto ">


            <p className="text-[16px] leading-[24xpx]  text-[#341802]  mb-[30px]  w-[80%]  max-md:w-[90%] max-sm:w-[100%]  ">
              We are dedicated to preserving your personal data and respecting your right to privacy.
            </p>
            <h2 className=" font-[source,serief4] font-normal mb-[15px] text-[26px] leading-[32px] md:text-[30px] md:leading-[40px]  text-black"> We may collect personal information </h2>
            <p className="text-[16px] leading-[24xpx]  text-[#341802] mb-[15px]  w-[80%]  max-md:w-[90%] max-sm:w-[100%]">
              Contact : your name, email address, phone number and postal address </p>
            <p className="text-[16px] leading-[24xpx]  text-[#341802]  mb-[30px]  w-[80%]  max-md:w-[90%] max-sm:w-[100%]">
              Usage : website and services, such as IP addresses, device information, browser type Accounts </p>
            <h2 className=" font-[source,serief4] font-normal mb-[15px] text-[26px] leading-[32px] md:text-[30px] md:leading-[40px]  text-black"> Sharing Your Information </h2>
            <p className="text-[16px] leading-[24xpx]  text-[#341802]  mb-[30px] w-[80%]  max-md:w-[90%] max-sm:w-[100%]">
              Your personal information is never distributed to outside parties by us. Your information is private and secure with us at all times. </p>
            <h2 className=" font-[source,serief4] font-normal mb-[15px] text-[26px] leading-[32px] md:text-[30px] md:leading-[40px]  text-black "> Get in touch with us </h2>
            <p className="text-[16px] leading-[24xpx]  text-[#341802]  mb-[0  ]  w-[80%]  max-md:w-[90%] max-sm:w-[100%]">
              Please get in touch with us at if you have any queries -   <Link href="mailto:info@samwarthika.com" data-cta="email-cta" className="text-[#e36300] hover:underline transition duration-300">info@samwarthika.com </Link> </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}