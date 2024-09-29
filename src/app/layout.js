import Footer from "@/components/Footer";
import Logo from "@/components/Logo";

import localFont from "next/font/local";
import "./globals.css";
<<<<<<< HEAD
=======
import Head from "next/head";
>>>>>>> e688dbaf352b09b9ea1a67e4bf65cdaaeba518c9

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
  title: "Meddy",
  description: "Your HealthCare provider companion",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Logo />
        {children}
      </body>
    </html>
  );
}
