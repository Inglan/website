import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Menu from "@/components/menu";
import { ConvexClientProvider } from "./ConvexClientProvider";
import { ConvexAuthNextjsServerProvider } from "@convex-dev/auth/nextjs/server";
import { Toaster } from "@/components/ui/sonner";

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--geist-mono",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Ingo's Website",
    default: "Ingo's Website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ConvexAuthNextjsServerProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={`${geistMono.className} antialiased`}>
          <ConvexClientProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              disableTransitionOnChange
            >
              <div
                vaul-drawer-wrapper=""
                className="flex flex-row w-full bg-background"
              >
                <Menu />
                <div className="w-full">{children}</div>
              </div>
              <Toaster />
            </ThemeProvider>
          </ConvexClientProvider>
        </body>
      </html>{" "}
    </ConvexAuthNextjsServerProvider>
  );
}
