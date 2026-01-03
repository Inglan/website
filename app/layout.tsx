import type { Metadata } from "next";
import { Geist_Mono, Jost } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import Search from "@/components/search";
import Hotkeys from "@/lib/hotkeys";
import { ConvexClientProvider } from "./ConvexClientProvider";
import ErrorParamHandler from "@/components/error-param-handler";
import { Suspense } from "react";
import PosthogIdentify from "@/components/posthog-identify";

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
        <ConvexClientProvider>
          <ThemeProvider attribute="class" forcedTheme="dark">
            {children}
            <Toaster position="top-right" offset={{ top: 16, right: 16 }} />
            <Search />
            <PosthogIdentify />
            <Suspense>
              <ErrorParamHandler />
            </Suspense>
          </ThemeProvider>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
