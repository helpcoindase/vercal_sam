import Footer from "../components/layout/Footer";
import Getquote from "../components/layout/Getquote";
import Header from "../components/layout/Header";
import ClientTestimonialsBanner from "./TestimonialsBanner";
import TestimonialsList from "./TestimonialsList";
import { getMeta } from "@/lib/getMeta";

export async function generateMetadata() {
  return getMeta("/client-testimonials");
}
export default function ClientTestimonials() {
  return (
    <>
      <Header />
<main>
      <ClientTestimonialsBanner />
      <TestimonialsList />      
      <Getquote />
      </main>
<Footer />
    </>
  );
}
