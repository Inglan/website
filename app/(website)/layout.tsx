import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Sidebar from "@/components/sidebar";
import Search from "@/components/search";
import Navbar from "@/components/navbar";

const geistMono = Geist_Mono({
  subsets: ["latin"],
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
    <>
      <div
        vaul-drawer-wrapper=""
        className="flex flex-col w-full bg-background min-h-screen p-4"
      >
        {/*<Sidebar />*/}
        <Navbar />
        {children}
      </div>
      <Search />
    </>
  );
}
