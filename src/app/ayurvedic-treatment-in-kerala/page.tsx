import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import LatestDocVlog from "../components/layout/LatestDocVlog";
import Getquote from "./Getquote";
import Insurance from "../components/layout/Insurance";
import TreatmentSubbnr from "./TreatmentSubbnr";
import TreatmentAbout from "./treatmentAbout";
import Treatment from "./treatments";
import BalanceDiet from "./balanceDiet";
import FAQ from "./Faq";
import Treatmentslist from "../components/home/Treatmentslist";
import Ourdoctors from "@/app/components/Ourdoctors";
import { getMeta } from "@/lib/getMeta";
import Regimen from "./Regimen";
import KeralaAyur from "./KeralaAyur";
import Diet from "./Diet";
import Tenfold from "./Tenfold";
import AyurContact from "./AyurContact";
import Recognized from "./Recognized";

export async function generateMetadata() {
  return getMeta("/ayurvedic-treatment-in-kerala");
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <TreatmentSubbnr />
        <TreatmentAbout />
        <Treatment />
        <Tenfold />
        <BalanceDiet />
        <Diet />
        <Regimen />
        <KeralaAyur />
        <Insurance />
        <Treatmentslist />
        <Ourdoctors />
        <AyurContact />
        <LatestDocVlog />
        <FAQ />
        <div className="py-[70px]   max-xl:py-[60px]  max-md:py-[40px]">
          <Recognized />
        </div>
        <Getquote />
      </main>
      <Footer />
    </>
  );
}
