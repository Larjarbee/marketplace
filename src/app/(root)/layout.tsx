import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";
import { Suspense } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Suspense>
      <Header />
      <main>{children}</main>
      <Footer />
    </Suspense>
  );
}
