import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SidebarContainer from "@/components/SidebarContainer";
import ToastContainer from "@/components/toast/ToastContainer";
import PrayerFloating from "@/components/prayer/PrayerFloating";
import PrayerFetcher from "@/components/prayer/PrayerFetcher";
import QueryProvider from "./providers/queryProvider";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Naskh_Arabic } from "next/font/google";
import "./globals.css";

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
  title: "Muslim Pocket - Al-Qur'an Digital",
  description:
    "Muslim Pocket adalah aplikasi Al-Qur'an digital dengan tampilan modern, fitur pencarian, dan akses mudah ke surah dan ayat harian.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
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
      </body>
    </html>
  );
}
