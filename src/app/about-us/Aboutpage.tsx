import { Suspense } from "react";
import dynamic from "next/dynamic";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import AboutBanner from "../components/about/Aboutbanner";

const Vissionmission = dynamic(() => import("../components/about/Visionmission"));
const Managementmessage = dynamic(() => import("../components/about/Managementmessage"));
const TimelineSwiper = dynamic(() => import("../components/about/Timeline"));
const About = dynamic(() => import("../components/about/about"));
const Statistics = dynamic(() => import("../components/about/Statistics"));
const TreatmentList = dynamic(() => import("../components/about/Treatmentslist"));
const Ourdoctors = dynamic(() => import("../components/Ourdoctors"));
const Getquote = dynamic(() => import("../components/layout/Getquote"));
const QuickLink = dynamic(() => import("../components/layout/QuickLink"));
const Recognized = dynamic(() => import("../components/about/recognizedby"));

function AboutusContent() {
  return (
    <>
      <Header />
      <main>
        <AboutBanner />
        <QuickLink />
        <Recognized />
        <Statistics />
        <About />
        <Vissionmission />
        <Managementmessage />
        <TimelineSwiper />
        <Ourdoctors />
        <TreatmentList />

        <Getquote />
      </main>
      <Footer />
    </>
  );
}

export default function Aboutus() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AboutusContent />
    </Suspense>
  );
}
