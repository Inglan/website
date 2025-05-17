"use client";

import React, { createContext, useState, useContext } from "react";

type MenuContextType = {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  toggleMenu: () => void;
};

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export function MenuProvider({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <MenuContext.Provider value={{ menuOpen, setMenuOpen, toggleMenu }}>
      {children}
    </MenuContext.Provider>
  );
}

export function useMenu() {
  const context = useContext(MenuContext);
  
  if (context === undefined) {
    throw new Error("useMenu must be used within a MenuProvider");
  }
  
  return context;
}