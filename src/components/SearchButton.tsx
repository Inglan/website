import { Search } from "lucide-react";
import { isMenuOpen } from "@/lib/state";

export default function SearchButton() {
  return (
    <div className="border-l w-fit">
      <button
        className="menu-item btn-interactive px-6 cursor-pointer"
        onClick={() => {
          isMenuOpen.set(true);
        }}
      >
        <Search className="size-4" />
      </button>
    </div>
  );
}
