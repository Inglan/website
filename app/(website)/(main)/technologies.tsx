"use client";

import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { Share_Tech_Mono } from "next/font/google";
import { useState } from "react";

const technologies = {
  frontend: {
    title: "Frontend",
    items: [
      {
        name: "React",
        icon: <ArrowRight />,
      },
      {
        name: "Next.js",
        icon: <ArrowRight />,
      },
      {
        name: "TypeScript",
        icon: <ArrowRight />,
      },
      {
        name: "Tailwind",
        icon: <ArrowRight />,
      },
      {
        name: "Svelte",
        icon: <ArrowRight />,
      },
      {
        name: "HTML",
        icon: <ArrowRight />,
      },
      {
        name: "CSS",
        icon: <ArrowRight />,
      },
      {
        name: "JavaScript",
        icon: <ArrowRight />,
      },
    ],
  },
  backend: {
    title: "Backend",
    items: [
      {
        name: "Node.js",
        icon: <ArrowRight />,
      },
    ],
  },
};

export function Technologies() {
  const [selectedCategory, setSelectedCategory] =
    useState<keyof typeof technologies>("frontend");

  return (
    <div className="w-full mx-auto max-w-4xl border-l border-dashed">
      <div className="w-full border-b border-dashed overflow-auto border-r">
        <div className="flex flex-row">
          {Object.entries(technologies).map(([key, value]) => (
            <button
              key={key}
              className={cn(
                "border-r border-dashed cursor-pointer",
                "h-full px-8 py-4 w-fit flex justify-center items-center duration-200 ease-out",
                "hover:bg-card active:brightness-75",
                selectedCategory === key ? "text-primary" : "",
              )}
              onClick={() =>
                setSelectedCategory(key as keyof typeof technologies)
              }
            >
              {value.title}
            </button>
          ))}
        </div>
      </div>
      <div className="w-full grid grid-cols-5">
        {technologies[selectedCategory].items.map((item, index) => (
          <div
            key={item.name}
            className={cn(
              "flex flex-col gap-2 items-center justify-center aspect-square text-center border-b border-r border-dashed",
              index % 2 === 0 ? "" : "bg-striped-gradient bg-size-[80px_80px]",
            )}
          >
            {item.icon}
            <span>{item.name}</span>
          </div>
        ))}
        {Array(5 - (technologies[selectedCategory].items.length % 5))
          .fill(null)
          .map((_, index) => (
            <div
              key={index}
              className={cn(
                "border-b border-r border-dashed",
                (technologies[selectedCategory].items.length + index) % 2 === 0
                  ? ""
                  : "bg-striped-gradient bg-size-[80px_80px]",
              )}
            ></div>
          ))}
      </div>
    </div>
  );
}
