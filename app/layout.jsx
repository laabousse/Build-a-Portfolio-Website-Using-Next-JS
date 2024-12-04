import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
// components
import Header from "../components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import { Toaster } from "sonner";
import Footer from "@/components/Footer";
import ErrorBoundary from "@/components/ErrorBoundary";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata = {
  metadataBase: new URL("https://laabousse.com"),
  title: {
    default: "Laabousse - Portfolio",
    template: "%s | Laabousse",
  },
  description:
    "Web Developer specializing in modern web technologies and information security",
  keywords: ["web development", "react", "next.js", "portfolio"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://laabousse.com",
    title: "Laabousse - Portfolio",
    description: "Web Developer Portfolio",
    siteName: "Laabousse Portfolio",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <ErrorBoundary>
          <Header />
          <StairTransition />
          <PageTransition>{children}</PageTransition>
          <Toaster position="top-right" richColors />
          <Footer />
        </ErrorBoundary>
      </body>
    </html>
  );
}
