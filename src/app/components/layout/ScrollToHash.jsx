"use client";
import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function ScrollToHash() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const hash = window.location.hash;

    if (hash) {
      const id = hash.replace("#", "");
      const el = document.getElementById(id);

      if (el) {
        setTimeout(() => {
          // dynamically get header height
          const header = document.querySelector("header");
          const headerHeight = header ? header.clientHeight : 0;

          const elementPosition = el.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementPosition - headerHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth", // 👈 smooth scroll with offset
          });
        }, 150); // wait for page to load
      }
    }
  }, [pathname, searchParams]);

  return null;
}
