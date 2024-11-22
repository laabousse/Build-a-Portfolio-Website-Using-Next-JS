import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
// components
import Header from "../components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import { Toaster } from "sonner";
import Footer from "@/components/Footer";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata = {
  title: "Laabousse - Portfolio",
  description:
    "Showcasing expertise in Web development, this portfolio highlights a curated collection of projects, achievements and professional experiences. Explore innovative solutions, creative designs, and a commitment to excellence.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
        <Toaster position="top-right" richColors />
        <Footer />
      </body>
    </html>
  );
}
