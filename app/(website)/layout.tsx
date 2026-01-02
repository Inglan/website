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
      <div
        vaul-drawer-wrapper=""
        className="flex flex-col w-full bg-background min-h-screen px-4"
      >
        {children}
        <StripedSeparator />
        <Footer />
      </div>
    </>
  );
}
