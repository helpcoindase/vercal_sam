import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import TreatmentListbnr from "../components/treatments-list/TreatmentListbnr";
import TreatmentListpg from "../components/treatments-list/TreatmentListpg";
import { getMeta } from "@/lib/getMeta";

export async function generateMetadata() {
  return getMeta("/treatments");
}

export default function Treatment() {
  return (
    <>
      <Header />
      <main>
        <TreatmentListbnr />
        <TreatmentListpg />
      </main>
      <Footer />
    </>
  );
}
