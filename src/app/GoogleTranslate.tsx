"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    googleTranslateElementInit: () => void;
    google: {
      translate: {
        TranslateElement: {
          new (
            options: {
              pageLanguage: string;
              includedLanguages: string;
              layout: number;
              autoDisplay?: boolean;
            },
            elementId: string
          ): void;
          InlineLayout: {
            SIMPLE: number;
          };
        };
      };
    };
  }
}

export default function GoogleTranslateLoader() {
  useEffect(() => {
    // Define the callback used by Google's script
    window.googleTranslateElementInit = () => {
      if (!window.google || !window.google.translate) return;

      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "ar,en,hi,ta,te,ml,kn,fr,de,es,it,ru",
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false,
        },
        "google_translate_element"
      );
    };

    // Load Google's translate script only once the page is idle or the user
    // interacts, so it stays off the critical path.
    let loaded = false;
    const events = ["pointerdown", "keydown", "scroll", "touchstart"] as const;
    const loadScript = () => {
      if (loaded) return;
      loaded = true;
      events.forEach((e) => window.removeEventListener(e, loadScript));
      const script = document.createElement("script");
      script.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    };
    events.forEach((e) =>
      window.addEventListener(e, loadScript, { once: true, passive: true })
    );
    const idleTimer = window.setTimeout(loadScript, 4000);

    const hideBanner = () => {
      // 1) The iframe you see in the screenshot
      const barIframe = document.querySelector(
        "iframe.skiptranslate, .skiptranslate iframe"
      ) as HTMLIFrameElement | null;
      if (barIframe) {
        barIframe.style.display = "none";
        if (barIframe.parentElement) {
          barIframe.parentElement.style.display = "none";
        }
      }

      // 2) Original banner frame (for some browsers)
      const bannerFrame = document.querySelector(
        "iframe.goog-te-banner-frame"
      ) as HTMLIFrameElement | null;
      if (bannerFrame) {
        bannerFrame.style.display = "none";
        if (bannerFrame.parentElement) {
          bannerFrame.parentElement.style.display = "none";
        }
      }

      // 3) Any container with skiptranslate
      const skipDiv = document.querySelector(
        "div.skiptranslate"
      ) as HTMLElement | null;
      if (skipDiv) {
        skipDiv.style.display = "none";
      }

      // 4) Reset body offset (Google sets top:40px)
      if (document.body.style.top === "40px") {
        document.body.style.top = "0px";
      }
    };

    // run multiple times while Google injects stuff
    const intervalId = window.setInterval(hideBanner, 400);
    // Google finishes injecting within seconds; stop polling afterwards.
    let stopTimer: number | undefined;
    const startPoll = window.setInterval(() => {
      if (loaded && stopTimer === undefined) {
        stopTimer = window.setTimeout(() => window.clearInterval(intervalId), 15000);
        window.clearInterval(startPoll);
      }
    }, 500);

    return () => {
      window.clearInterval(intervalId);
      window.clearInterval(startPoll);
      window.clearTimeout(idleTimer);
      if (stopTimer !== undefined) window.clearTimeout(stopTimer);
      events.forEach((e) => window.removeEventListener(e, loadScript));
    };
  }, []);

  // Keep the element hidden; we use our own UI
  return <div id="google_translate_element" className="hidden" />;
}
