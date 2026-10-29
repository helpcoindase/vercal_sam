"use client";
import { usePathname } from "next/navigation";
import { metaConfig, schemaConfig } from "../lib/metaConfig";
import Script from "next/script";

export default function Schema() {
  const pagePath = usePathname();

  const pageSchema = schemaConfig[pagePath];

  return (
    <>
      {pageSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(pageSchema).replace(/</g, "\\u003c"),
          }}
        />
      )}
    </>
  );
}
