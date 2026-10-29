"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

export default function AnalyticsLoader() {
  const [isMainDomain, setIsMainDomain] = useState(false);

  useEffect(() => {
    const host = window.location.hostname;

    if (host === "samwarthika.com" || host === "www.samwarthika.com") {
      setIsMainDomain(true);
    }
  }, []);

  if (!isMainDomain) return null;

  return (
    <>
      <Script
        src="https://analytics.ahrefs.com/analytics.js"
        data-key="+/cz6ps7oXc9aOkolVoSSQ"
        strategy="afterInteractive"
      />

      <Script id="gtm-script" strategy="afterInteractive">
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

      <Script id="clarity-script" strategy="afterInteractive">
        {`
        (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "rt2czuxqoi");
        `}
      </Script>
    </>
  );
}