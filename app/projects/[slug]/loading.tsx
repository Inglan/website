"use client";

import { Skeleton } from "@/components/ui/skeleton";
import Content from "@/components/content";
import { motion } from "motion/react";

export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Content>
        <div className="not-prose mb-4">
          <Skeleton className="h-[20px] w-[200px] rounded-full" />
        </div>
        <h1>
          <Skeleton className="h-[50px] w-[300px] rounded-full" />
        </h1>
        <div className="space-y-4">
          {Array.from({ length: 10 }).map((_, index) => (
            <Skeleton
              key={index}
              className="h-6"
              style={{ width: 50 + Math.random() * 50 + "%" }}
            />
          ))}
        </div>
      </Content>
    </motion.div>
  );
}
