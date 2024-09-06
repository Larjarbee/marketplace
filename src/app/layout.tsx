import type { Metadata } from "next";
import { DM_Sans, Rubik } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import ProviderWrapper from "@/configs/provider";

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
        <ProviderWrapper>{children}</ProviderWrapper>
        <Toaster />
      </body>
    </html>
  );
}
