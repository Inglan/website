"use client";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { MENU_ITEMS } from "@/lib/constants";
import { useUiState } from "@/lib/state";
import { useRouter } from "next/navigation";

export default function Search() {
  const searchOpen = useUiState((state) => state.searchOpen);
  const setSearchOpen = useUiState((state) => state.setSearchOpen);
  const router = useRouter();

  return (
    <>
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
        </CommandList>
      </CommandDialog>
    </>
  );
}
