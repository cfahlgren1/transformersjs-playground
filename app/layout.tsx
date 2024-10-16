import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from 'next/font/google'; 
import "./globals.css";
import Navbar from "@/components/Navbar";

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

const inter = Inter({ subsets: ['latin'] }); 

export const metadata: Metadata = {
  title: "TransformersJS Playground",
  description: "A playground for experimenting with TransformersJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.className} antialiased`} 
      >
        <Navbar />
        <main className="container mx-auto py-8">
          {children}
        </main>
      </body>
    </html>
  );
}
