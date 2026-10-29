import { Mulish } from "next/font/google";
import './globals.css';
import { ASSET_PREFIX } from "../../config";
import { ReactNode } from "react";
import GoogleTranslateLoader from "./GoogleTranslate";
import Script from "next/script";
import type { Metadata } from "next";
import Schema from "./Schema";

const mulish = Mulish({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
  variable: '--font-mulish', // needed only if using Tailwind
})

export const metadata: Metadata = {
  title: "Samwarthika Ayurveda Hospital | Authentic Ayurvedic Treatment in Kerala",
  description: "Samwarthika Ayurveda Hospital provides authentic Ayurvedic treatments with experienced doctors, offering personalized care and holistic healing in Kerala.",
  icons: {
    icon: `${ASSET_PREFIX}/favicon.ico`,
  },
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        {/* Ahrefs */}
         <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="+/cz6ps7oXc9aOkolVoSSQ"
          async
          strategy="beforeInteractive"
        /> 

        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="beforeInteractive">
          {`
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NPFTB6C');
          `}
        </Script>

        <Script id="gtm-script-pp8th8w2" strategy="beforeInteractive">
          {`
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PP8TH8W2');
          `}
        </Script>
       



        {/* Microsoft Clarity */}
        <Script id="clarity-script" strategy="beforeInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "rt2czuxqoi");
          `}
        </Script> 

        {/* ✅ Global JSON-LD (Organization + WebSite) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://www.samwarthika.com",
                  "name": "Samwarthika Ayurvedic Hospital",
                  "alternateName": "Samwarthika Ayurvedic Hospital",
                  "url": "https://www.samwarthika.com",
                  "logo": "https://www.samwarthika.com/assets/images/samwarthika-footer-logo.webp",
                  "description":
                    "Samwarthika is the Best Ayurveda Hospital near Kochi, Kerala with a dedicated team of experienced doctors. We provide Ayurveda Panchakarma, Physiotherapy, etc.",
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+91 94463 65601",
                    "contactType": "customer service",
                    "areaServed": "IN",
                    "availableLanguage": ["en", "ml-IN"]
                  },
                  "sameAs": [
                    "https://www.facebook.com/Samwarthika/",
                    "https://x.com/samwarthika/",
                    "https://www.instagram.com/samwarthika/",
                    "https://www.youtube.com/channel/UCVMqijUl9EqRzKt7W0ye-2g/",
                    "https://www.linkedin.com/company/samwarthika-ayurveda-hospital/"
                  ],
                  "mainEntityOfPage": {
                    "@id": "https://www.samwarthika.com/#website"
                  }
                },
                {
                  "@type": "WebSite",
                  "@id": "https://www.samwarthika.com#website",
                  "url": "https://www.samwarthika.com",
                  "name": "Samwarthika Ayurvedic Hospital",
                  "description":
                    "Samwarthika is the Best Ayurveda Hospital near Kochi, Kerala with a dedicated team of experienced doctors. We provide Ayurveda Panchakarma, Physiotherapy, etc.",
                  "inLanguage": "en-IN",
                  "potentialAction": {
                    "@type": "SearchAction",
                    "target": "https://www.samwarthika.com/?s={query}",
                    "query-input": "required name=query"
                  }
                },
                {
                  "@context": "https://schema.org/",
                  "@type": "MedicalOrganization",
                  "name": "Samwarthika Ayurveda Hospital",
                  "url": "https://www.samwarthika.com/",
                  "logo": "https://www.samwarthika.com/assets/images/samwarthika-footer-logo.webp",
                  "alternateName": "Samwarthika Ayurveda Hospital",
                  "description": "Samwarthika Ayurveda Hospital provides authentic Ayurvedic treatments with experienced doctors, offering personalized care and holistic healing in Kerala.",
                  "sameAs": [
                    "https://www.facebook.com/Samwarthika/",
                    "https://www.instagram.com/samwarthika/",
                    "https://www.linkedin.com/company/samwarthika-ayurveda-hospital/",
                    "https://x.com/samwarthika",
                    "https://www.youtube.com/channel/UCVMqijUl9EqRzKt7W0ye-2g"
                  ]
                },
                {
                  "@context": "https://schema.org",
                  "@type": "LocalBusiness",
                  "name": "Samwarthika Ayurveda Hospital",
                  "image": "https://www.samwarthika.com/assets/images/samwarthika-footer-logo.webp",
                  "url": "https://www.samwarthika.com/",
                  "telephone": "+91 94463 65601",
                  "priceRange": "₹₹",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Pallikkavu Road Jn, Arakuzha Road",
                    "addressLocality": "Muvattupuzha",
                    "addressRegion": "Kerala",
                    "postalCode": "686661",
                    "addressCountry": "IN"
                  },
                  "geo": {
                  
                    "@type": "GeoCoordinates",
                    "latitude": "9.970849842601542",
                    "longitude": "76.58572340849048"
                  },
                  "openingHoursSpecification": {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": [
                      "Monday",
                      "Tuesday",
                      "Wednesday",
                      "Thursday",
                      "Friday",
                      "Saturday",
                      "Sunday"
                    ],
                    "opens": "00:00",
                    "closes": "23:59"
                  },
                  "sameAs": [
                    "https://www.facebook.com/Samwarthika/",
                    "https://www.instagram.com/samwarthika/",
                    "https://www.linkedin.com/company/samwarthika-ayurveda-hospital/",
                    "https://x.com/samwarthika",
                    "https://www.youtube.com/channel/UCVMqijUl9EqRzKt7W0ye-2g"
                  ]
                }
              ]
            }), 
          }}
        /> 

        {/* page Schema */}
        <Schema /> 
      </head>

      <body className={`${mulish.variable} ${mulish.className} antialiased  bg-[#fff]`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NPFTB6C"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PP8TH8W2"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript> 

        <GoogleTranslateLoader />
        {children}
      </body>
    </html>
  );
}
