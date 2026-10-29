import dynamic from "next/dynamic";
import type { Metadata } from "next";
import { getMeta } from "../lib/getMeta";

// ── Above the fold: static imports (critical, no lazy load) ──────────────────
import Header from "./components/layout/Header";
import Banner from "./components/home/homebanner";
import Footer from "./components/layout/Footer";
import { Suspense } from "react";

// ── Below the fold: dynamic imports (deferred, code-split) ───────────────────
const ThumbSlider = dynamic(() => import("./components/home/DepartmentSlider"));
const Statistics = dynamic(() => import("./components/home/Statistics"));
const Aboutus = dynamic(() => import("./components/home/About"));
const BannerWithTabs = dynamic(() => import("./components/home/treatment"));
const Treatmentslist = dynamic(() => import("./components/home/Treatmentslist"));
const Ourdoctors = dynamic(() => import("./components/Ourdoctors"));
const Therapyofchoice = dynamic(() => import("./components/home/Therapyofchoice"));
const Insurance = dynamic(() => import("./components/layout/Insurance"));
const LatestDocVlog = dynamic(() => import("./components/home/LatestDocVlog"));
const FAQ = dynamic(() => import("./components/home/Faq"));
const Getquote = dynamic(() => import("./components/layout/Getquote"));
const CustomSlider = dynamic(() => import("./components/home/slider"));

export async function generateMetadata(): Promise<Metadata> {
  return getMeta("/");
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="h-[70vh] sm:h-[80vh] xl:h-[98vh] 2xl:h-[85vh] relative">
          <Banner />
        </section>
        <ThumbSlider />
        <Statistics />
        <Aboutus />
        <BannerWithTabs />
        <Treatmentslist />
        <Ourdoctors />
        <Therapyofchoice />
        <Suspense fallback={<div className="min-h-[200px]" />}>
          <Insurance />
        </Suspense>
        <Suspense fallback={<div className="min-h-[200px]" />}>
          <LatestDocVlog />
        </Suspense>
        <Suspense fallback={<div className="min-h-[200px]" />}>
          <FAQ />
        </Suspense>
        <Suspense fallback={<div className="min-h-[200px]" />}>
          <Getquote />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}