import Script from "next/script";
import { Analytics as VercelAnalytics } from "@vercel/analytics/next";

const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export function AnalyticsProviders() {
  return (
    <>
      <VercelAnalytics />
      {gaMeasurementId ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaMeasurementId}', {
                page_title: document.title,
                page_location: window.location.href
              });
            `}
          </Script>
        </>
      ) : null}
    </>
  );
}

