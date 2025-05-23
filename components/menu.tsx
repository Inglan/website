"use client";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Menu } from "lucide-react";
import { useMenu } from "@/context/MenuContext";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function SiteMenu() {
  const { menuOpen, setMenuOpen, toggleMenu } = useMenu();

  const menuContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (menuOpen && menuContainer.current) {
      menuContainer.current.style.display = "flex";
      gsap.to(menuContainer.current, {
        opacity: 1,
        duration: 0.4,
        ease: "power2.out",
      });
    } else if (menuContainer.current) {
      gsap.to(menuContainer.current, {
        opacity: 0,
        duration: 0.4,
        ease: "power2.in",
        onComplete: () => {
          if (menuContainer.current) {
            menuContainer.current.style.display = "none";
          }
        },
      });
    }
  }, [menuOpen]);

  return (
    <>
      <Button
        className="top-3 right-3 fixed z-50"
        size="icon"
        variant="ghost"
        onClick={toggleMenu}
      >
        <Menu />
      </Button>
      <div
        ref={menuContainer}
        className="fixed top-0 left-0 h-full w-full bg-surface0/50 z-40 justify-center items-center backdrop-blur-2xl opacity-0 hidden"
      ></div>
    </>
  );
}
