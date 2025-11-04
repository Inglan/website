"use client";

import { useHotkeys } from "react-hotkeys-hook";
import { useUiState } from "./state";

export default function Hotkeys() {
  const setSearchOpen = useUiState((state) => state.setSearchOpen);

  useHotkeys("mod+k", () => {
    setSearchOpen(true);
  });

  return null;
}
