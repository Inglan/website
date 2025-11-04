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
        <MenuLink
          href="/"
          containerClassName="border-l-0 border-r"
          className="text-xl"
          animation={false}
        >
          Ingo Wolf
        </MenuLink>
        <div className="grow"></div>
        <div className="hidden md:flex flex-row">
          {menuItems.map((item) => (
            <MenuLink key={item.url} href={item.url}>
              {item.label}
            </MenuLink>
          ))}
        </div>
        <MenuLink containerClassName="md:hidden" onClick={() => {}}>
          Menu
        </MenuLink>
      </nav>
    </div>
  );
}

function MenuLink({
  children,
  href,
  className,
  containerClassName,
  animation = true,
  onClick,
}: {
  children: React.ReactNode;
  href?: string;
  className?: string;
  containerClassName?: string;
  animation?: boolean;
  onClick?: () => void;
}) {
  const pathname = usePathname();

  const itemChildren = (
    <motion.div
      className={clsx(
        "h-full px-8 py-4 w-fit flex justify-center items-center",
        className,
      )}
      animate={
        animation
          ? {
              color: pathname == href ? "var(--primary)" : "var(--foreground)",
            }
          : {}
      }
      whileHover={{
        color: "var(--primary)",
      }}
      whileTap={{ filter: "brightness(0.5)" }}
      transition={{ ease: NICE_EASE }}
    >
      {children}
    </motion.div>
  );

  return (
    <div className={clsx("border-l border-dashed", containerClassName)}>
      {href ? (
        <Link href={href} onClick={onClick}>
          {itemChildren}
        </Link>
      ) : (
        <a className="inline cursor-pointer" onClick={onClick}>
          {itemChildren}
        </a>
      )}
    </div>
  );
}
