import Getquote from "./Getquote";
import TreatmentSubbnr from "./TreatmentSubbnr";
import TreatmentAbout from "./treatmentAbout";
import Treatment from "./treatments";
import BalanceDiet from "./balanceDiet";

import FAQ from "./Faq";
import Header from "@/app/components/layout/Header";
import Recognized from "@/app/components/layout/recognizedby";
import Insurance from "@/app/components/layout/Insurance";
import Treatmentslist from "../components/home/Treatmentslist";
import LatestDocVlog from "@/app/components/layout/LatestDocVlog";
import Footer from "@/app/components/layout/Footer";
import Ourdoctors from "@/app/components/Ourdoctors";
import { getMeta } from "@/lib/getMeta";
import AyurContact from "../ayurvedic-treatment-in-kerala/AyurContact";

export async function generateMetadata() {
  return getMeta("/panchakarma-treatment-in-kerala");
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <TreatmentSubbnr />
        <TreatmentAbout />
        <Treatment />
        <BalanceDiet />
        <Insurance />
        <Treatmentslist />
        <Ourdoctors />
        <AyurContact />
        <LatestDocVlog />
        <Recognized />
        <FAQ />
        <Getquote />
      </main>
      <Footer />
    </>
  );
}
