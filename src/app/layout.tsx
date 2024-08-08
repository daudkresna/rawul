import type { Metadata } from "next";
import { Gupter, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/navbar";

const inter = Inter({ subsets: ["latin"] });

const gupter = Gupter({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-gupter",
});

export const metadata: Metadata = {
  title: "Rawul",
  description: "Dog Pics and Facts with API",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
