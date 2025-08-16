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
import { LogOut, MenuIcon, Pen, Settings } from "lucide-react";
import { Authenticated, Unauthenticated } from "convex/react";
import { useMutation, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

const menuItems = [
  { url: "/", label: "Home" },
  { url: "/about", label: "About" },
  { url: "/projects", label: "Projects" },
  { url: "/blog", label: "Blog" },
  { url: "/contact", label: "Contact" },
];

export default function Menu() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const me = useQuery(api.auth.getMe);
  return (
    <>
      <div className="h-screen sticky top-0 left-0 justify-center p-4 px-10 flex-col gap-4 border-r border-dashed hidden md:flex">
        {menuItems.map((item) => (
          <MenuItem
            key={item.url}
            url={item.url}
            label={item.label}
            setMobileMenuOpen={setMobileMenuOpen}
          />
        ))}
        <Authenticated>
          <User />
        </Authenticated>
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
            <Authenticated>
              <User />
            </Authenticated>
          </div>
        </DrawerContent>
      </Drawer>

      <Button
        className="fixed bottom-3 left-3 text-2xl size-15 md:hidden"
        size="icon"
        variant="outline"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        <MenuIcon />
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

function User() {
  const me = useQuery(api.auth.getMe);
  return (
    <div
      className={clsx(
        "flex w-full items-center border border-dashed rounded p-3 gap-3",
        me?.role == "write" ? "border-primary" : "",
      )}
    >
      {me?.role == "write" && <Pen className="size-4" />}
      <div className="flex flex-col grow">
        <span>{me?.name}</span>
        <span>{me?.email}</span>
      </div>
      <Button variant="ghost" size="icon">
        <Settings />
      </Button>
      <Button variant="ghost" size="icon">
        <LogOut />
      </Button>
    </div>
  );
}
