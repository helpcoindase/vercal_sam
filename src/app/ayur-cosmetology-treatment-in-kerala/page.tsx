import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import LatestDocVlog from "../components/layout/LatestDocVlog";
import Getquote from "./Getquote";
import Insurance from "../components/layout/Insurance";
import Treatmentslist from "../components/home/Treatmentslist";
import TreatmentSubbnr from "./TreatmentSubbnr";
import Recognized from "../components/layout/recognizedby";
import TreatmentAbout from "./treatmentAbout";
import Treatment from "./treatments";
import BalanceDiet from "./balanceDiet";
import Form from "../ayurvedic-treatment-in-kerala/form";
import Ourdoctors from "@/app/components/Ourdoctors";
import { getMeta } from "@/lib/getMeta";
import FAQ from "./Faq copy";

export async function generateMetadata() {
  return getMeta("/ayur-cosmetology-treatment-in-kerala");
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
        <Form />
        <LatestDocVlog />
        <Recognized />
        <FAQ />
        <Getquote />
      </main>
      <Footer />
    </>
  );
}
