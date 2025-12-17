import { Footer } from "@/components/footer";
import Navbar from "@/components/navbar";

export default function NotFound() {
  return (
    <div>
      <Navbar />
      <div className="w-full max-w-4xl mx-auto border-x border-b border-dashed p-10 flex flex-col items-center justify-center">
        <h1 className="text-9xl">404</h1>
        <p className="text-2xl">Page not found</p>
      </div>
      <Footer />
    </div>
  );
}
