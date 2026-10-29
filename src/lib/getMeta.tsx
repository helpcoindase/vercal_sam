// lib/getMeta.ts
import { metaConfig } from "./metaConfig";
import type { Metadata } from "next";
import { ASSET_PREFIX } from "../../config";

export function getMeta(path: string): Metadata {
  const meta = metaConfig[path];

  const canonicalUrl = `https://www.samwarthika.com${path}`;

  if (!meta) {
    return {
      title: "Samwarthika",
      description: "Samwarthika",
      keywords: "Samwarthika",
      alternates: {
        canonical: canonicalUrl,
      },
    };
  }

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,

    icons: {
      icon: `${ASSET_PREFIX}/favicon.ico`,
      shortcut: `${ASSET_PREFIX}/favicon.ico`,
      apple: `${ASSET_PREFIX}/favicon.ico`,
    },

    authors: [{ name: meta.author }],

    robots: {
      index: meta.robots.includes("index"),
      follow: meta.robots.includes("follow"),
      googleBot: meta.googlebot,
    },

    alternates: {
      canonical: canonicalUrl,
    },

    openGraph: {
      type: "website",
      url: canonicalUrl,
      title: meta.title,
      description: meta.description,
      images: meta.image,
    },

    verification: {
      google: "lCnErnd4rmHa4NEUplvb-u3lwsp49xhL00L0qh3spPU",
    },
  };
}