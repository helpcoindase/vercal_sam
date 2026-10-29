import { getMeta } from "@/lib/getMeta";
import Insbanner from "../components/insurance/Insbanner";
import InsuranceList from "../components/insurance/InsuranceList";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import Overview from "./Overview";
import FAQ from "./Faq";
import Recognized from "../components/insurance/Recognized";

export async function generateMetadata() {
  return getMeta("/insurance");
}

export default function Insurance() {
  return (
    <>
      <Header />
<main>
      <Insbanner />
      <Overview />
      <InsuranceList />
      <Recognized />
      <FAQ />
      </main>
<Footer />
    </>
  );
}
