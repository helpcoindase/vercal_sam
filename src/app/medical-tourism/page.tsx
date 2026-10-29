import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import Getquote from "../components/medical-tourism-components/Getquote";
import Medicaltourismbanner from "../components/medical-tourism-components/Medicaltourismbanner";
import MedicalTourLocation from "../components/medical-tourism-components/MedicalTourLocation";
import MedKerala from "../components/medical-tourism-components/MedKerala";
import NearbyPlaces from "../components/medical-tourism-components/NearbyPlaces";
import Testimonials from "../components/medical-tourism-components/TestimonialsSlider";
import { getMeta } from "@/lib/getMeta";

export async function generateMetadata() {
  return getMeta("/medical-tourism");
}

export default function MedicalTourism() {
  return (
    <>
      <Header />
<main>
      <Medicaltourismbanner />
      <MedKerala />
      <Testimonials />
      <NearbyPlaces />
      <MedicalTourLocation />
      <Getquote />
      </main>
<Footer />
    </>
  );
}
