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
import { getThemeSelected } from "@/lib/getTheme";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const arabicFont = Noto_Naskh_Arabic({
  variable: "--font-arabic",
  subsets: ["arabic"],
  display: "swap",
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
    <html lang="id" suppressHydrationWarning className="bg-white dark:bg-dark-900">
      <head>
        <meta name="theme-color" content="#ffffff" />
        <meta name="apple-mobile-web-app-title" content="Muslimpocket.id" />
        {/* TODO(schema jsonld): MAKE IT DYNAMIC DATA BASED ON EACH PAGE */}
        <SchemaJsonLd />

        {/* TODO(line: 56): THIS CODES STILL AFFECT THE HYDRATION RENDER, FOR WHILE "ignore hydration warning" */}
        <script
          dangerouslySetInnerHTML={{
            __html: getThemeSelected,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${arabicFont.variable} antialiased`}
      >
        <QueryProvider>
          <PrayerFetcher />
          <section className="w-full max-w-[500px] mx-auto bg-white dark:bg-dark-900 shadow-xl dark:shadow-[#181818]">
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
        {process.env.NEXT_PUBLIC_TYPE === "production" && <Analytics mode="production" />}
      </body>
    </html>
  );
}
