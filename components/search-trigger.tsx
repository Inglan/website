"use client";

import { useAppState } from "@/lib/state";

export default function SearchTrigger({ className }: { className?: string }) {
  const setSearchOpen = useAppState((state) => state.setSearchOpen);

  return (
    <button onClick={() => setSearchOpen(true)} className={className}>
      Search
    </button>
  );
}
