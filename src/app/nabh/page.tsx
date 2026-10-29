import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import Commitment from "./commitment ";
import Getquote from "./Getquote";
import Standards from "./standards ";
import About from "./treatmentAbout";
import Subbanner from "./TreatmentSubbnr";
import { getMeta } from "@/lib/getMeta";

export async function generateMetadata() {
  return getMeta("/nabh");
}

export default function Nabh() {
  return (
    <>
      <Header />
<main>
      <main>
        <Subbanner />
        <About />
        <Commitment />
        <Standards />
        <Getquote />
      </main>
      </main>
<Footer />
    </>
  );
}
