import { Geist_Mono } from "next/font/google";
import Search from "@/components/search";
import Navbar from "@/components/navbar";
import Hotkeys from "@/lib/hotkeys";
import { Toaster } from "@/components/ui/sonner";
import Link from "@/components/custom-link";

const geistMono = Geist_Mono({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div
        vaul-drawer-wrapper=""
        className="flex flex-col w-full bg-background min-h-screen p-4 pt-0"
      >
        {/*<Sidebar />*/}
        <Navbar />
        {children}
        <div className="grow"></div>
        <div className="max-w-4xl w-full mx-auto text-sm text-center text-foreground/75 mt-4">
          This website is{" "}
          <Link href="https://github.com/Inglan/website" target="_blank">
            open source
          </Link>
        </div>
      </div>
      <Toaster position="top-right" offset={{ top: 16, right: 16 }} />
      <Hotkeys />
      <Search />
    </>
  );
}
