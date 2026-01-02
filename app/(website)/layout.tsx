import Search from "@/components/search";
import Hotkeys from "@/lib/hotkeys";
import { Toaster } from "@/components/ui/sonner";
import { Footer } from "@/components/footer";
import { StripedSeparator } from "@/components/striped-separator";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <StripedSeparator />
      <Footer />
      <div className="w-full h-full bg-striped-gradient bg-size-[80px_80px] bg-fixed fixed top-0 left-0 -z-10 opacity-25"></div>
    </>
  );
}
