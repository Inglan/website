"use client";

import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

const technologies = {
  frontend: {
    title: "Frontend",
    items: [
      {
        name: "React",
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
    <div className="w-full mx-auto max-w-4xl border-x border-dashed border-b">
      <div className="w-full border-b border-dashed overflow-auto">
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
        {technologies[selectedCategory].items.map((item) => (
          <div
            key={item.name}
            className="flex flex-col gap-2 items-center justify-center aspect-square text-center"
          >
            {item.icon}
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
