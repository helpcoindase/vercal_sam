import Header from "../components/layout/Header";
import CustomSlider from "../components/home/slider";
import Footer from "../components/layout/Footer";
import BannerWithTabs from "../components/home/treatment";
import Treatmentslist from "../components/home/Treatmentslist";
import Ourdoctors from "../components/home/Ourdoctors";
import Insurance from "../components/layout/Insurance";
import Aboutus from "../components/home/About";
import LatestDocVlog from "../components/home/LatestDocVlog";
import FAQ from "../components/home/Faq";
import Statistics from "../components/home/Statistics";
import Therapyofchoice from "../components/home/Therapyofchoice";
import Getquote from "../components/layout/Getquote";
import type { Metadata } from "next";
import { getMeta } from "../../lib/getMeta";
import ThumbSlider from "../components/home/DepartmentSlider";
import Banner from "../components/home/homebanner";

export async function generateMetadata(): Promise<Metadata> {
  return getMeta("/");
}




export default function Home() {
  return (
    <>
      <Header />
<main>
      <main>
        {/* <section className="h-[70vh] sm:h-[80vh] xl:h-[85vh] relative"><Banner /></section> */}
        <ThumbSlider />
        <Statistics />
        <Aboutus />
        <BannerWithTabs />
        <Treatmentslist />
        <Ourdoctors />
        <Therapyofchoice />
        <Insurance />
        <LatestDocVlog />
        <FAQ />
        <Getquote />

      </main>
      </main>
<Footer />
    </>
  );
}
