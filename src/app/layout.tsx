import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import "@/UI/scss/normalize.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Crypto Wallet",
  description: "A crypto wallet & gateway to blockchain apps",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}
