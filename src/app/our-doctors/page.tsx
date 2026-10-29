import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import DoctorDetail from "./DoctorDetail";
import SubBanner from "./SubBanner";

import { getMeta } from "@/lib/getMeta";

export async function generateMetadata() {
  return getMeta("/our-doctors");
}

export default function Ourdoctors() {
  return (
    <>
      <Header />
      <main>
        <SubBanner />
        <DoctorDetail />
      </main>
      <Footer />
    </>
  );
}
