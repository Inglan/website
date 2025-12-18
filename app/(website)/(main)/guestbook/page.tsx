"use client";

import Header from "@/components/header";
import { api } from "@/convex/_generated/api";
import {
  Authenticated,
  AuthLoading,
  Unauthenticated,
  useQuery,
} from "convex/react";
import Entry from "./entry";
import { Skeleton } from "@/components/ui/skeleton";
import { Spinner } from "@/components/ui/spinner";

// Thanks to GPT-5.2 for this
// String -> 32-bit seed (sync)
function xfnv1a(str: string) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

// Seeded PRNG (sync). Returns a function rand() -> [0, 1)
function mulberry32(seed: number) {
  let t = seed >>> 0;
  return function () {
    t += 0x6d2b79f5;
    let x = Math.imul(t ^ (t >>> 15), 1 | t);
    x ^= x + Math.imul(x ^ (x >>> 7), 61 | x);
    return ((x ^ (x >>> 14)) >>> 0) / 4294967296;
  };
}

// Convenience: deterministic number in [min, max] from an input string
function deterministicInt(input: string, min: number, max: number) {
  const rand = mulberry32(xfnv1a(input));
  return Math.floor(min + rand() * (max - min + 1));
}
// End AI generated code

export default function Page() {
  const entries = useQuery(api.guestbook.get);

  return (
    <div className="max-w-4xl w-full mx-auto border border-t-0 border-dashed">
      <Header>Guestbook</Header>
      <div className="flex items-center justify-center h-40 border-b">
        <Authenticated>
          <div></div>
        </Authenticated>
        <Unauthenticated>
          <div className="flex flex-col gap-2 items-center justify-center w-full h-full bg-striped-gradient bg-size-[80px_80px]">
            <h2 className="text-xl">Log in to post to the guestbook</h2>
            <div className="flex flex-row items-center justify-center w-full border-y border-dashed">
              {[
                { label: "GitHub", id: "github" },
                { label: "Google", id: "google" },
              ].map((provider) => (
                <button
                  className="cursor-pointer px-4 py-2 first:border-l border-r border-dashed duration-200 ease-out hover:bg-card active:brightness-75 bg-background"
                  key={provider.id}
                >
                  {provider.label}
                </button>
              ))}
            </div>
          </div>
        </Unauthenticated>
        <AuthLoading>
          <Spinner />
        </AuthLoading>
      </div>

      {entries
        ? entries?.map((entry) => <Entry entry={entry} key={entry.id} />)
        : Array(3)
            .fill(null)
            .map((_, skeletonIndex) => (
              <div
                className="flex flex-col gap-2 p-2 border-b border-dashed"
                key={skeletonIndex}
              >
                <Skeleton className="w-[200px] h-8" />
                {Array(3)
                  .fill(null)
                  .map((_, index) => {
                    const width = deterministicInt(
                      String(index + skeletonIndex),
                      20,
                      100,
                    );
                    return (
                      <Skeleton
                        className="h-6"
                        style={{ maxWidth: `${width}%` }}
                        key={index}
                      />
                    );
                  })}
              </div>
            ))}
    </div>
  );
}
