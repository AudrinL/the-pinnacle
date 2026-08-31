import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.thepinnaclekigali.com"),
  title: "The Pinnacle Kigali | Ultra-Luxury Boutique Hotel in Rwanda",
  description:
    "The Pinnacle Kigali — our love letter to Kigali. A five-star boutique hotel of nine rooms above Rwanda's capital of a thousand hills. Named one of TIME's World's Greatest Places 2026.",
  keywords: [
    "luxury hotel Kigali",
    "5-star hotel Rwanda",
    "boutique hotel Kigali",
    "The Pinnacle Kigali",
    "luxury accommodation Rwanda",
    "fine dining Kigali",
  ],
  openGraph: {
    title: "The Pinnacle Kigali | Ultra-Luxury Boutique Hotel",
    description:
      "A love letter to Kigali, from our family to yours. Named one of TIME's World's Greatest Places 2026.",
    url: "https://www.thepinnaclekigali.com",
    siteName: "The Pinnacle Kigali",
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <head>
        <noscript>
          <style>{`.rv,.stagger>*,.rv-img-inner{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body className="min-h-full">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
