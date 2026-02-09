import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SocialBar from "../components/Socialbar";
import ScrollToTop from "@/components/ScrollToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata = {
  title: {
    default: "Yacht Booking Platform",
    template: "%s | Yacht Booking Platform",
  },
  description:
    "A modern yacht booking platform template built with Next.js and Tailwind CSS.",
  keywords: [
    "yacht booking",
    "yacht rental",
    "luxury yacht",
    "boat booking",
    "yacht charter",
  ],
  metadataBase: new URL("https://example.com"),
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
        <ScrollToTop />
        <SocialBar />
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
