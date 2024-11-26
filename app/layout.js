import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Home from "@/components/Home";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Certificates from "@/components/Certificates";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "SakshamWeb",
  description: "Portfolio Website of Saksham Gupta",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="./favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <Home />
        <Services />
        <Skills />
        <Certificates />
        <Education />
        <Projects />
        <Contact />
        {children}
      </body>
    </html>
  );
}
