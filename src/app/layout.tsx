// "use client"
import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/widgets/Footer";
import Header from "@/components/widgets/Header";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MoodMart",
  description: "Косметика для всех",
  icons: {
    icon: 'favicon.ico',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const { fetchProducts } = useProductStore();
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
