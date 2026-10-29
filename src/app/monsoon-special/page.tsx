import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";

import Getquote from "../components/monsoon-specials/Getquote";
import Medicaltourismbanner from "../components/monsoon-specials/Medicaltourismbanner";
import MedicalTourLocation from "../components/monsoon-specials/MedicalTourLocation";
import MedKerala from "../components/monsoon-specials/MedKerala";
import WhySamwarthika from "../components/monsoon-specials/WhySamwarthika";
import Package from "../components/monsoon-specials/Package"; 
import About from "../components/monsoon-specials/treatmentAbout";
import TypesOfCare from "../components/monsoon-specials/TypesOfCare";
import { getMeta } from "@/lib/getMeta";
import TestimonialsSlider from "../components/medical-tourism-components/TestimonialsSlider";
import Recognized from "../components/monsoon-specials/recognizedby";

export async function generateMetadata() {
  return getMeta("/monsoon-special");
}

export default function MedicalTourism() {
  return (
    <>
      <Header />
<main>
      <Medicaltourismbanner />
      <Recognized />
      <MedKerala />
      <About />
      {/* <TypesOfCare /> */}
      <Package />
      <TestimonialsSlider />
      <WhySamwarthika />
      <MedicalTourLocation />
      <Getquote />
      </main>
<Footer />
    </>
  );
}
