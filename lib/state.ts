import { create } from "zustand";

interface UiState {
  searchOpen: boolean;
  setSearchOpen: (value: boolean) => void;
}

export const useUiState = create<UiState>((set) => ({
  searchOpen: false,
  setSearchOpen: (value) => set({ searchOpen: value }),
}));
