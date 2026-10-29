import AccomSubbanner from "../components/Accomodations/AccomSubbanner";
import GetQuote from "../components/Accomodations/GqtQuote";
import PatientFriendly from "../components/Accomodations/PatientFriendly";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import { getMeta } from "@/lib/getMeta";
import ImagePopupGallery from "../infrastructure/Imagepopup";

export async function generateMetadata() {
  return getMeta("/facilities");
}
export default function Accom() {
  return (
    <>
      <Header />
      <main>
        <AccomSubbanner />
        {/* <About /> */}
        <PatientFriendly />
        <ImagePopupGallery />
        <GetQuote />
      </main>
      <Footer />
    </>
  );
}
