import { Suspense } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Blogbanner from "../components/blog-listing/blogbanner";
import Blogmain from "../components/blog-listing/Blogmain";

import { getMeta } from "@/lib/getMeta";

export async function generateMetadata() {
  return getMeta("/blog");
}

export default function BlogPage() {
  return (
    <>
      <Header />
      <main>
        <Blogbanner />
        <Suspense fallback={<div className="min-h-[400px] flex items-center justify-center text-gray-400">Loading articles...</div>}>
          <Blogmain />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
