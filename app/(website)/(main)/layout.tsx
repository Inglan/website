import Navbar from "@/components/navbar";
import Cursor from "./cursor";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <Cursor />
      {children}
    </>
  );
}
