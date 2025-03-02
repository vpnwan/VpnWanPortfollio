import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Preloader from "./Projects/Comp/PriLoader";
import BackToTop from "./Components/ButtonUp";
import FloatingButtons from "./utils/float";
import Navbar from "./Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Vpnwan",
  description: "Software Company",
  openGraph: {
    title: "Vpnwan",
    description: "Software Company",
    url: "https://vpnwan.vercel.app/",
    type: "website",
    images: [
      {
        url: "https://aceternity.com/images/products/thumbnails/new/moonbeam.png", // Change this
        width: 1200,
        height: 630,
        alt: "VpnWan Industries",
      },
    ],
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <FloatingButtons />
        <BackToTop />
        <Preloader />
        {children}
      </body>
    </html>
  );
}
