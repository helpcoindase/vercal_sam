import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import CoureForeignBnr from "./CoureindianBnr";
import CourseDetails from "./CourseDetails";
import About from "./treatmentAbout";
import { getMeta } from "@/lib/getMeta";

export async function generateMetadata() {
  return getMeta("/course-for-indian");
}

export default function CourseforInternational() {
  return (
    <>
      <Header />
<main>
      <CoureForeignBnr />
      {/* <About /> */}
      <CourseDetails />
      </main>
<Footer />
    </>
  );
}
