import Search from "@/components/search";
import Hotkeys from "@/lib/hotkeys";
import { Toaster } from "@/components/ui/sonner";
import { Footer } from "@/components/footer";
import { StripedSeparator } from "@/components/striped-separator";
import Navbar from "@/components/navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="max-w-4xl mx-auto w-full bg-background">{children}</div>
      <StripedSeparator className="grow" />
      <Footer />
      <div className="w-full h-full bg-striped-gradient bg-size-[80px_80px] bg-fixed fixed top-0 left-0 -z-50 opacity-25"></div>
    </div>
  );
}
