import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import TopNavbar from "../components/top-navbar";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import TopNavbarr from "../components/top-navbarr";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mega Foundries",
  description: "Mega Foundries Product Landing Page",
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
          <TopNavbar />
        </div>
        <TopNavbarr />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
