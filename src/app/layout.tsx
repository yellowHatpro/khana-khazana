import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import localFont from "@next/font/local";

export const metadata: Metadata = {
  title: "Khana Khazana",
  description: "Food something app",
};

const satoshiFont = localFont({
  src: [
    {
      path: '../../public/fonts/satoshi-variable.ttf',
      style: 'normal'
    }
  ],
  variable: '--font-satoshi'
})

const hiromisakeFont = localFont({
  src: [
    {
      path: "../../public/fonts/hiromisake.ttf"
    }
  ],
  variable: '--font-hiromisake'
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${satoshiFont.variable} ${hiromisakeFont.variable} font-satoshi `}>
      <body>
        <Navbar/>
      {children}
        <Footer/>
      </body>
    </html>
  );
}
