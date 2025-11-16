import type { Metadata } from "next";
import { Geist_Mono, Jost, Nunito, Quicksand, Raleway } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const jost = Jost({
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--geist-mono",
});

export const metadata: Metadata = {
  title: { default: "Ingo's Site", template: "%s | Ingo's Site" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${jost.className} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" forcedTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
