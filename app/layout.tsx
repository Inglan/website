import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Menu from "@/components/menu";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ingo Wolf",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Menu />
        {children}
      </body>
    </html>
  );
}
