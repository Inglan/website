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
import Link from "next/link";

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
        className="hidden fixed top-0 left-0 h-full w-full bg-surface0/50 z-40 justify-center items-center backdrop-blur-2xl opacity-0 gap-3"
      >
        <div className="overflow-auto max-h-full p-3 grid grid-cols-3 gap-3 max-w-screen">
          {Array(100)
            .fill(Math.random())
            .map((item, index) => (
              <Link
                href="/about"
                className="flex bg-surface0 rounded-xl grow h-32 overflow-hidden relative text-3xl justify-center items-center w-56"
              >
                <div className="relative z-10 flex flex-row gap-3 justify-center items-center">
                  About
                </div>
                <div className="absolute top-0 left-0 w-full h-full opacity-30"></div>
              </Link>
            ))}
        </div>
      </div>
    </>
  );
}
