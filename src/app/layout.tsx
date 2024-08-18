import type { Metadata } from "next";
import { DM_Sans, Rubik } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/header";

const sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});
const rubik = Rubik({ subsets: ["latin"], variable: "--font-rubik" });

export const metadata: Metadata = {
  title: "Marketplace",
  description: "An e-commerce application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sans.variable} ${rubik.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
