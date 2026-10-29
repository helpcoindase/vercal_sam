import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import DoctorTalkSubbnr from "./DoctorTalkSubbnr";
import DoctorTalkList from "./DoctorTalkList";
import { getMeta } from "@/lib/getMeta";

export async function generateMetadata() {
  return getMeta("/doctors-talk");
}

export default function ClientTestimonials() {
  return (
    <>
      <Header />
<main>
      <DoctorTalkSubbnr />
      <DoctorTalkList />
      </main>
<Footer />
    </>
  );
}
