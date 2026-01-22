"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Webrings() {
  return (
    <div className="flex flex-col bg-background sm:w-fit w-full border-b border-dashed sm:border-0">
      <div className="sm:border-l border-b border-t sm:border-t-0 border-dashed bg-background p-2 font-mono text-lg">
        Webrings
      </div>
      {[
        {
          name: "ultrafastparrot",
          url: "https://ultrafastparrot.net",
          next: "https://ultrafastparrot.net/next/ingo",
          prev: "https://ultrafastparrot.net/prev/ingo",
        },
        {
          name: "catppuccin",
          url: "https://ctp-webr.ing/",
          next: "https://ctp-webr.ing/ingo/next",
          prev: "https://ctp-webr.ing/ingo/prev",
        },
        {
          name: "page ring",
          onClick: () => {
            if (
              (window as Window & { pagering?: { open: () => void } }).pagering
            ) {
              (
                window as Window & { pagering?: { open: () => void } }
              ).pagering?.open();
            } else {
              location.href = "https://pagering.gideon.sh/";
            }
          },
          next: "https://pagering.gideon.sh/to/ingo/next",
          prev: "https://pagering.gideon.sh/to/ingo/prev",
        },
      ].map((item, index) => (
        <div
          className="flex flex-row border-b border-dashed w-full last:border-0"
          key={index}
        >
          <Button
            variant="ghost"
            size="icon"
            className="sm:border-l border-dashed duration-200 ease-out hover:bg-card active:brightness-75"
            asChild
          >
            <Link href={item.prev}>
              <span className="sr-only">Previous</span>
              <ArrowLeft />
            </Link>
          </Button>
          <Button
            variant="ghost"
            className="border-l border-dashed duration-200 ease-out hover:bg-card active:brightness-75 grow cursor-pointer"
            onClick={() => {
              if (item.onClick) item.onClick();
            }}
            asChild
          >
            {item.url ? (
              <Link href={item.url}>{item.name}</Link>
            ) : (
              <span className="select-none">{item.name}</span>
            )}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="border-l border-dashed duration-200 ease-out hover:bg-card active:brightness-75"
            asChild
          >
            <Link href={item.next}>
              <span className="sr-only">Next</span>
              <ArrowRight />
            </Link>
          </Button>
        </div>
      ))}
    </div>
  );
}
