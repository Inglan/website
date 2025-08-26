"use client";

import { motion } from "motion/react";

export default function Content({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{
        ease: [0.165, 0.84, 0.44, 1.0],
      }}
      className="prose prose-lg prose-custom md:prose-xl mx-auto p-3 prose-headings:font-normal"
    >
      {children}
    </motion.div>
  );
}
