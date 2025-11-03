"use client";

import Link from "next/link";
import { motion } from "motion/react";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { NICE_EASE } from "@/lib/constants";

const menuItems = [
  { url: "/", label: "Home" },
  { url: "/projects", label: "Projects" },
  { url: "/blog", label: "Blog" },
  { url: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <div className="w-full">
      <nav className="w-full max-w-4xl mx-auto border border-dashed flex flex-row">
        <MenuLink href="/" className="border-l-0 border-r">
          Ingo&apos;s Website
        </MenuLink>
        <div className="grow"></div>
        {menuItems.map((item) => (
          <MenuLink key={item.url} href={item.url}>
            {item.label}
          </MenuLink>
        ))}
      </nav>
    </div>
  );
}

function MenuLink({
  children,
  href,
  className,
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
}) {
  const pathname = usePathname();

  return (
    <div className="border-l border-dashed">
      <Link href={href}>
        <motion.div
          className={clsx("h-full px-8 py-4 block w-fit", className)}
          animate={{
            color: pathname == href ? "var(--primary)" : "var(--foreground)",
          }}
          whileHover={{
            color: "var(--primary)",
          }}
          whileTap={{ filter: "brightness(0.5)" }}
          transition={{ ease: NICE_EASE }}
        >
          {children}
        </motion.div>
      </Link>
    </div>
  );
}
