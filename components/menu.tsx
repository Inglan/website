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

export default function SiteMenu() {
  const { menuOpen, setMenuOpen, toggleMenu } = useMenu();

  return (
    <>
      <Button
        className="top-3 right-3 fixed"
        size="icon"
        variant="ghost"
        onClick={toggleMenu}
      >
        <Menu />
      </Button>
      <Drawer
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        direction="right"
      >
        <DrawerContent>
          <DrawerTitle>Menu</DrawerTitle>
        </DrawerContent>
      </Drawer>
    </>
  );
}
