import Contactbnr from "../components/contact-us/Contactbnr";
import Contactform from "../components/contact-us/Contactform";
import Contactstats from "../components/contact-us/Contactstats";
import Map from "../components/contact-us/Map";
import Footer from "../components/layout/Footer"; 
import Header from "../components/layout/Header";
import Recognized from "../components/layout/recognizedby";
import { getMeta } from "@/lib/getMeta";

export async function generateMetadata() {
  return getMeta("/contact-us");
}


export default function Contactus() {
  return (
    <>
      <Header />
<main>
      <Contactbnr />
      
      <Contactform />
      <Recognized />
      <Contactstats />
      <Map />
      {/* <Getquote /> */}
      </main>
<Footer />
    </>
  );
}
