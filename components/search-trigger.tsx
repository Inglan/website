"use client";

import { useUiState } from "@/lib/state";

export default function SearchTrigger({ className }: { className?: string }) {
  const setSearchOpen = useUiState((state) => state.setSearchOpen);

  return (
    <button onClick={() => setSearchOpen(true)} className={className}>
      Search
    </button>
  );
}
