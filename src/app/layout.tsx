import { Analytics } from "@vercel/analytics/next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SidebarContainer from "@/components/SidebarContainer";
import ToastContainer from "@/components/toast/ToastContainer";
import PrayerFloating from "@/components/prayer/PrayerFloating";
import PrayerFetcher from "@/components/prayer/PrayerFetcher";
import QueryProvider from "./providers/queryProvider";
import { metadataMap } from "@/lib/metadata";
import { createOGMeta } from "@/lib/ogMeta";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Naskh_Arabic } from "next/font/google";
import "./globals.css";
import SchemaJsonLd from "@/components/SchemaJsonLd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const arabicFont = Noto_Naskh_Arabic({
  variable: "--font-arabic",
  subsets: ["arabic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: metadataMap.home.title,
  description: metadataMap.home.description,
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: createOGMeta({
    title: metadataMap.home.title,
    description: metadataMap.home.description,
    url: "https://muslimpocket.id",
    type: "website",
  }),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <meta name="apple-mobile-web-app-title" content="Muslimpocket.id" />
        {/* TODO(schema jsonld): MAKE IT DYNAMIC DATA BASED ON EACH PAGE */}
        <SchemaJsonLd />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${arabicFont.variable} antialiased`}
      >
        <QueryProvider>
          <PrayerFetcher />
          <section className="w-full max-w-[500px] mx-auto bg-white shadow-xl">
            <SidebarContainer />
            <Header />
            <PrayerFloating />
            <div className="flex flex-col gap-8 items-center justify-between min-h-[calc(100vh-53px)]">
              {children}
              <Footer />
            </div>
          </section>
          <ToastContainer />
        </QueryProvider>
        <Analytics
          mode={process.env.NEXT_PUBLIC_TYPE === "production" ? "production" : "development"}
        />
      </body>
    </html>
  );
}
