import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

import Getquote from "../components/layout/Getquote";
import FAQ from "./faq";
import CourseBnr from "./CourseBnr";
import Overview from "./Overview";
import Ourdoctors from "@/app/components/Ourdoctors";
import { getMeta } from "@/lib/getMeta";

export async function generateMetadata() {
  return getMeta("/course");
}

export default function Course() {
  return (
    <>
      <Header />
      <main>
        <CourseBnr />
        {/* <Overview /> */}
        <FAQ />
        <Ourdoctors />
        {/* <Getquote /> */}
      </main>
      <Footer />
    </>
  );
}
