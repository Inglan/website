"use client";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { MENU_ITEMS } from "@/lib/constants";
import { useUiState } from "@/lib/state";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { SanityDocument } from "sanity";

interface PostWithSlug extends SanityDocument {
  slug?: {
    current: string;
  };
  body?: Array<{ children?: Array<{ text?: string }> }>;
}

interface SearchDialogProps {
  posts: PostWithSlug[];
}

export function SearchDialog({ posts }: SearchDialogProps) {
  const searchOpen = useUiState((state) => state.searchOpen);
  const setSearchOpen = useUiState((state) => state.setSearchOpen);
  const router = useRouter();

  const commands = [
    {
      label: "Copy Email",
      onSelect: () => {
        navigator.clipboard.writeText("me@ingo.au");
        setSearchOpen(false);
        toast.success("Copied");
      },
    },
    {
      label: "Email",
      onSelect: () => {
        location.href = "mailto:me@ingo.au";
        setSearchOpen(false);
      },
    },
    {
      label: "Signal",
      onSelect: () => {
        window.open(
          "https://signal.me/#eu/aON_wvkns7bfeU-UAj_09B1Yym8WVC2QIWWV8rIhYZzPc2xGLUtBeLWMc9LJoWNB"
        );
        setSearchOpen(false);
      },
    },
  ];

  return (
    <CommandDialog
      className="top-4 md:top-24 translate-y-0"
      open={searchOpen}
      onOpenChange={setSearchOpen}
    >
      <CommandInput placeholder="Search" />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Pages">
          {MENU_ITEMS.map((item) => (
            <CommandItem
              className="cursor-pointer"
              key={item.url}
              onSelect={() => {
                router.push(item.url);
                setSearchOpen(false);
              }}
            >
              {item.label}
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandGroup heading="Posts">
          {posts.map((post) => {
            const excerpt =
              post.body
                ?.map((b: { children?: Array<{ text?: string }> }) =>
                  (b.children || [])
                    .map((c: { text?: string }) => c.text || "")
                    .join("")
                )
                .join(" ")
                .split("\n")[0] || "";

            return (
              <CommandItem
                className="cursor-pointer flex-col items-start gap-1"
                key={post._id}
                onSelect={() => {
                  if (post.slug?.current) {
                    router.push(`/blog/${post.slug.current}`);
                    setSearchOpen(false);
                  }
                }}
              >
                <div className="font-medium">{post.title as string}</div>
                {excerpt && (
                  <div className="text-xs text-muted-foreground line-clamp-1">
                    {excerpt}
                  </div>
                )}
              </CommandItem>
            );
          })}
        </CommandGroup>
        <CommandGroup heading="Commands">
          {commands.map((command) => (
            <CommandItem key={command.label} onSelect={command.onSelect}>
              {command.label}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
