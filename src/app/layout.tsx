import type { Metadata } from "next";
import { Inter } from "next/font/google";
import '@/UI/scss/globals.scss';
import '@/UI/scss/normalize.scss';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Crypto Wallet",
  description: "description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`body ${inter.className}`}>{children}</body>
    </html>
  );
}
