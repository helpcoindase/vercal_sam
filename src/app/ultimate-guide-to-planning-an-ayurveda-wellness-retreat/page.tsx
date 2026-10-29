import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

import Recentpost from "../components/recent-posts/recentpost";
import Blogbanner from "./blogbanner";
import BlogPage from "./BlogPage";
import { getMeta } from "@/lib/getMeta";

export async function generateMetadata() {
  return getMeta("/ultimate-guide-to-planning-an-ayurveda-wellness-retreat");
}

export default function BlogDetail() {
  return (
    <>
      <Header />
<main>
      <Blogbanner />
      <section className="py-[100px] max-xxl:py-[80px] max-xl:py-[70px] max-mlg:py-[50px] ">
        <div className="w-[85%] max-lg:w-[90%] mx-auto">
          <div className="grid grid-cols-1  lg:grid-cols-[55%_35%] xl:grid-cols-[60%_30%] gap-[40px] lg:gap-[80px] justify-between ">
            <div className="">
              <BlogPage />
            </div>
            <div className="">
              <Recentpost />
            </div>
          </div>
        </div>
      </section>
      </main>
<Footer />
    </>
  );
}
