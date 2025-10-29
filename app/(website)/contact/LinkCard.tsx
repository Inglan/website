"use client";

import clsx from "clsx";
import Link from "next/link";
import { ReactNode } from "react";
import { motion } from "motion/react";

interface LinkCardProps {
  href: string;
  children: ReactNode;
  colSpan?: number;
}

export default function LinkCard({ href, children, colSpan }: LinkCardProps) {
  return (
    <motion.div className={clsx(colSpan && `col-span-${colSpan}`)}>
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="p-4 border-b border-r border-dashed hover:bg-card flex flex-col"
      >
        {children}
      </Link>
    </motion.div>
  );
}
