import Departmentlist from "../components/departments/Departmentlist";
import Deptbanner from "../components/departments/Deptbanner";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import { getMeta } from "@/lib/getMeta";

export async function generateMetadata() {
  return getMeta("/departments");
}

export default function Departments() {
  return (
    <>
      <Header />
<main>
      <Deptbanner />
      <Departmentlist /> 
      </main>
<Footer />
    </>
  );
}
