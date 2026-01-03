"use client";

import clsx from "clsx";
import Link from "next/link";
import { ReactNode } from "react";
import { motion } from "motion/react";
import { NICE_EASE } from "@/lib/constants";

interface LinkCardProps {
  href: string;
  children: ReactNode;
  span?: boolean;
  className?: string;
}

export default function LinkCard({
  href,
  children,
  span,
  className,
}: LinkCardProps) {
  return (
    <motion.div
      className={clsx(span && `col-span-2`)}
      initial={{ backgroundColor: "var(--background)" }}
      animate={{ backgroundColor: "var(--background)" }}
      whileHover={{ backgroundColor: "var(--card)" }}
      whileTap={{ filter: "brightness(0.7)" }}
      transition={{ ease: NICE_EASE }}
    >
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={clsx(
          "p-4 border-b border-r border-dashed flex flex-col",
          className,
        )}
      >
        {children}
      </Link>
    </motion.div>
  );
}
