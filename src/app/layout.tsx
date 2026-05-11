import type { Metadata, Viewport } from "next";
import { oasisConfig } from "@/config/oasis-links";
import "./globals.css";

const publicUrl = new URL(oasisConfig.publicUrl);
const metadataBase = new URL(publicUrl.origin);

export const metadata: Metadata = {
  metadataBase,
  title: oasisConfig.seo.title,
  description: oasisConfig.seo.description,
  alternates: {
    canonical: oasisConfig.publicUrl,
  },
  openGraph: {
    title: oasisConfig.seo.title,
    description: oasisConfig.seo.description,
    url: oasisConfig.publicUrl,
    siteName: oasisConfig.brand.name,
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: oasisConfig.seo.ogImage,
        width: 1200,
        height: 630,
        alt: oasisConfig.brand.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: oasisConfig.seo.title,
    description: oasisConfig.seo.description,
    images: [oasisConfig.seo.ogImage],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b1110",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
