import { create } from "zustand";

interface AppState {
  searchOpen: boolean;
  setSearchOpen: (value: boolean) => void;
}

export const useAppState = create<AppState>((set) => ({
  searchOpen: false,
  setSearchOpen: (value) => set({ searchOpen: value }),
}));
