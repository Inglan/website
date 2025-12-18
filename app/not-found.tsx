"use client";

import { Footer } from "@/components/footer";
import Navbar from "@/components/navbar";
import { useUiState } from "@/lib/state";
import Link from "next/link";

export default function NotFound() {
  const setSearchOpen = useUiState((state) => state.setSearchOpen);

  return (
    <>
      <Navbar />
      <div className="w-full max-w-4xl mx-auto border-x border-b border-dashed py-20 flex flex-col items-center justify-center gap-8 bg-striped-gradient bg-size-[80px_80px] bg-fixed">
        <div className="flex flex-col items-center">
          <h1 className="text-9xl">404</h1>
          <p className="text-2xl">Page not found</p>
        </div>
        <div className="w-full border-y border-dashed flex justify-center">
          <div className="w-full"></div>
          <Link
            href="/"
            className="px-8 py-4 border-l border-dashed duration-200 ease-out hover:bg-card active:brightness-75 bg-background"
          >
            Home
          </Link>
          <button
            onClick={() => setSearchOpen(true)}
            className="cursor-pointer px-8 py-4 border-x border-dashed duration-200 ease-out hover:bg-card active:brightness-75 bg-background"
          >
            Search
          </button>
          <div className="w-full"></div>
        </div>
      </div>
      <Footer />
    </>
  );
}
