import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import TopNavbar from "../components/top-navbar";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import TopNavbarr from "../components/top-navbarr";
import BackgroundMusic from "../components/BackgroundMusic";
import FixedQuoteBtn from "../components/FixedQuoteBtn";
import EntrySystem from "../components/EntrySystem";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Canada Foundries",
  description: "Canada Foundries Product Landing Page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/apple-touch-icon.png" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="hidden md:block">
          <BackgroundMusic />
          <TopNavbar />
        </div>
        <TopNavbarr />
        <EntrySystem />
        <FixedQuoteBtn />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
