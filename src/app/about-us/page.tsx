import Aboutus from "./Aboutpage";
import { getMeta } from "@/lib/getMeta";

export async function generateMetadata() {
  return getMeta("/about-us");
}


export default function Aboutuspage() {
  return (
    <Aboutus />
  );
}
