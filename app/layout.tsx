import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Responsivenav from "./components/navigation/Responsivenav";
import Footer from "./components/footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://kenadrivingschool.vercel.app'),
  title: "Kena Driving School and Computer College",
  description: "Where your confidence behind the wheel and behind the computer is our top priority.",
  openGraph:{
    images:'/logo.png'
  },
  twitter: {
    card: 'summary_large_image', 
    images: '/logo.png',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      ><Responsivenav/>
        <main className="pt-18 lg:pt-24">
          {children}
        </main>
        
        <Footer/>
      </body>
    </html>
  );
}
