"use client";

import clsx from "clsx";
import Link from "next/link";
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
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";

const menuItems = [
  { url: "/", label: "Home" },
  { url: "/about", label: "About" },
  { url: "/projects", label: "Projects" },
  { url: "/blog", label: "Blog" },
  { url: "/contact", label: "Contact" },
];

export default function Menu() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      <div className="min-w-96 h-screen sticky top-0 left-0 justify-center p-4 px-10 flex-col gap-4 border-r border-dashed hidden md:flex">
        {menuItems.map((item) => (
          <MenuItem
            key={item.url}
            url={item.url}
            label={item.label}
            setMobileMenuOpen={setMobileMenuOpen}
          />
        ))}
      </div>

      <Drawer open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <DrawerContent>
          <DrawerTitle className="sr-only">Menu</DrawerTitle>
          <div className="flex flex-col gap-4 p-5 h-full justify-end">
            {menuItems.map((item) => (
              <MenuItem
                key={item.url}
                url={item.url}
                label={item.label}
                setMobileMenuOpen={setMobileMenuOpen}
              />
            ))}
          </div>
        </DrawerContent>
      </Drawer>

      <Button
        className="fixed bottom-3 left-3 text-2xl size-15 md:hidden"
        size="icon"
        variant="outline"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        -
      </Button>
    </>
  );
}

function MenuItem({
  url,
  label,
  setMobileMenuOpen,
}: {
  url: string;
  label: string;
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const pathname = usePathname();
  return (
    <Link
      href={url}
      onClick={() => {
        setMobileMenuOpen(false);
      }}
    >
      <motion.span
        animate={{ color: pathname == url ? "var(--primary)" : "var(--muted)" }}
        className="sm:text-7xl text-6xl text-muted"
      >
        {label}
      </motion.span>
    </Link>
  );
}
