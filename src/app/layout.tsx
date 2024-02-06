import type { Metadata } from "next";
import { Oxygen } from "next/font/google";
import "./globals.css";

const oxygen = Oxygen({ subsets: ["latin"], weight: ['300', '400', '700'] });

export const metadata: Metadata = {
  title: "flowy | Move lighter and faster with flowy.",
  description: "Move lighter and faster with flowy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${oxygen.className}`}>{children}</body>
    </html>
  );
}
