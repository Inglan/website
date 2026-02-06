import { Search } from "lucide-react";

export default function SearchButton({ className = "" }) {
  return (
    <div className="border-l w-fit">
      <button className="menu-item btn-interactive px-6">
        <Search className="size-4" />
      </button>
    </div>
  );
}
