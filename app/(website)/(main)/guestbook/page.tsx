"use client";

import Header from "@/components/header";
import { api } from "@/convex/_generated/api";
import {
  Authenticated,
  AuthLoading,
  Unauthenticated,
  useMutation,
  useQuery,
} from "convex/react";
import Entry from "./entry";
import { Skeleton } from "@/components/ui/skeleton";
import { Spinner } from "@/components/ui/spinner";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";
import { AUTH_PROVIDERS } from "@/lib/constants";
import { usePathname } from "next/navigation";
import { LogOut, Pencil } from "lucide-react";
import { StripedSeparator } from "@/components/striped-separator";
import posthog from "posthog-js";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";

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
  const session = authClient.useSession();
  const entries = useQuery(api.guestbook.get);
  const post = useMutation(api.guestbook.add);
  const [authLoading, setAuthLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <div className="max-w-4xl w-full mx-auto border-x border-dashed">
      <Header>Guestbook</Header>
      <div className="flex flex-col items-center justify-center h-52 border-b border-dashed">
        <Authenticated>
          <textarea
            disabled={loading}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full h-full resize-none p-4 outline-0"
            placeholder="Your message here"
          />
          <div className="border-t border-dashed w-full flex sm:flex-row flex-col">
            <div className="flex flex-row sm:border-0 border-b border-dashed">
              <div className="border-r border-dashed px-4 py-2 sm:w-auto w-full">
                Posting as{" "}
                <span className="text-primary">{session.data?.user.name}</span>
              </div>
              {/*<Button
                disabled={loading}
                variant="ghost"
                className="aspect-square h-full flex items-center justify-center cursor-pointer sm:border-r border-dashed duration-200 ease-out hover:bg-card active:brightness-75 bg-background"
              >
                <Pencil className="size-4" />
              </Button>*/}
            </div>
            <div className="flex flex-row sm:border-0 border-b border-dashed">
              <div
                className={cn(
                  "border-r border-dashed px-4 py-2 sm:w-auto w-full",
                  session.data?.user.role === "admin" && "text-red-400",
                )}
              >
                {session.data?.user.email}
              </div>
              <Button
                disabled={loading}
                variant="ghost"
                className="aspect-square h-full flex items-center justify-center cursor-pointer sm:border-r border-dashed duration-200 ease-out hover:bg-card active:brightness-75 bg-background"
                onClick={() => {
                  setLoading(true);
                  toast.promise(authClient.signOut(), {
                    loading: "Signing out...",
                    success: () => {
                      posthog.reset();
                      return "Signed out";
                    },
                    error: "Failed to sign out",
                    finally: () => setLoading(false),
                  });
                }}
              >
                <LogOut className="size-4" />
              </Button>
            </div>
            <div className="hidden sm:block grow bg-striped-gradient bg-size-[80px_80px]"></div>
            <Button
              disabled={loading || message.length === 0}
              variant="ghost"
              className="px-8 py-2 sm:h-full flex items-center justify-center cursor-pointer sm:border-l border-dashed duration-200 ease-out hover:bg-card active:brightness-75 bg-background border-0"
              onClick={async () => {
                setLoading(true);
                toast.promise(post({ message }), {
                  loading: "Posting...",
                  success: () => {
                    setMessage("");
                    return "Posted!";
                  },
                  error: "Failed to post",
                  finally: () => {
                    setLoading(false);
                  },
                });
              }}
            >
              Post
            </Button>
          </div>
        </Authenticated>
        <Unauthenticated>
          <div className="flex flex-col justify-center w-full h-full bg-striped-gradient bg-size-[80px_80px]">
            <h2 className="text-xl ml-6 p-2 h-full border-l border-dashed flex items-end">
              Log in to post to the guestbook
            </h2>
            <Carousel
              className="w-full border-y border-dashed"
              opts={{ skipSnaps: true }}
              plugins={[WheelGesturesPlugin()]}
            >
              <CarouselContent className="px-10">
                {AUTH_PROVIDERS.map((provider) => (
                  <CarouselItem
                    key={provider.id}
                    className="basis-auto pl-0 border-r first:border-l border-dashed"
                  >
                    <SignInButton
                      key={provider.id}
                      provider={provider}
                      setAuthLoading={setAuthLoading}
                      disabled={authLoading}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            <div className="h-full border-l border-dashed ml-6"></div>
          </div>
        </Unauthenticated>
        <AuthLoading>
          <Spinner />
        </AuthLoading>
      </div>

      <StripedSeparator className="border-x-0" />

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

function SignInButton({
  provider,
  setAuthLoading,
  disabled,
}: {
  provider: (typeof AUTH_PROVIDERS)[number];
  setAuthLoading: (loading: boolean) => void;
  disabled?: boolean;
}) {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();

  return (
    <Button
      variant="ghost"
      className="cursor-pointer px-4 py-2 duration-200 ease-out hover:bg-card active:brightness-75 bg-background"
      key={provider.id}
      onClick={async () => {
        setLoading(true);
        setAuthLoading(true);
        toast.promise(
          new Promise((resolve, reject) => {
            if (provider.type == "social") {
              authClient.signIn
                .social({
                  provider: provider.id,
                  callbackURL: pathname,
                })
                .then((result) =>
                  result.error ? reject(result.error) : resolve(null),
                );
            } else {
              authClient.signIn
                .oauth2({
                  providerId: provider.id,
                  callbackURL: pathname,
                })
                .then((result) =>
                  result.error ? reject(result.error) : resolve(null),
                );
            }
          }),
          {
            loading: "Signing in...",
            success: "Redirecting...",
            error: (error) => `Failed to sign in: ${error.message}`,
          },
        );
      }}
      disabled={loading || disabled}
    >
      <Spinner
        className={cn(
          "duration-200 absolute opacity-0",
          loading && "opacity-100",
        )}
      />
      <provider.icon
        className={cn("duration-200 opacity-100", loading && "opacity-0")}
      />
      <span className={cn("duration-200 opacity-100", loading && "opacity-0")}>
        {provider.label}
      </span>
    </Button>
  );
}
