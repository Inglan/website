import { Geist_Mono } from "next/font/google";
import Search from "@/components/search";
import Navbar from "@/components/navbar";
import Hotkeys from "@/lib/hotkeys";
import { Toaster } from "@/components/ui/sonner";
import Link from "@/components/custom-link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

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
        {children}
        <div className="grow"></div>
        <div className="max-w-4xl w-full mx-auto text-sm text-center text-foreground/75 mt-4">
          <div className="flex flex-row w-fit items-center  mx-auto">
            <Button variant="ghost" size="icon" asChild>
              <Link
                href="https://ctp-webr.ing/ingo/previous"
                className="aspect-square h-full"
              >
                <ArrowLeft />
              </Link>
            </Button>
            <Button variant="outline" className="border-dashed" asChild>
              <Link href="https://ctp-webr.ing/">Catppuccin webring</Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://ctp-webr.ing/ingo/next">
                <ArrowRight />
              </Link>
            </Button>
          </div>
          <br />
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
