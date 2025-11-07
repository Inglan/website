"use client";

import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { MENU_ITEMS } from "@/lib/constants";
import { ArrowLeft, Menu, Search } from "lucide-react";
import { useUiState } from "@/lib/state";

export default function Navbar() {
  const setSearchOpen = useUiState((state) => state.setSearchOpen);

  return (
    <div className="w-full sticky top-0 bg-background pt-4 z-50">
      <nav className="w-full max-w-4xl mx-auto border border-dashed flex flex-row">
        <MenuLink
          href="/"
          containerClassName="border-l-0"
          className="text-xl py-4! px-4!"
          animation={false}
        >
          Ingo Wolf
        </MenuLink>
        <div className="grow"></div>
        <div className="hidden md:flex flex-row">
          {MENU_ITEMS.map((item) => (
            <MenuLink key={item.url} href={item.url}>
              {item.label}
            </MenuLink>
          ))}
        </div>
        <MenuLink
          className="px-6!"
          onClick={() => {
            setSearchOpen(true);
          }}
        >
          <Menu className="size-4 md:hidden" />
          <Search className="size-4 md:block hidden" />
        </MenuLink>
      </nav>
    </div>
  );
}

export function PostNavbar({ title }: { title: string }) {
  const setSearchOpen = useUiState((state) => state.setSearchOpen);

  return (
    <div className="w-full sticky top-0 bg-background pt-4 z-50">
      <nav className="w-full max-w-4xl mx-auto border border-dashed flex flex-row">
        <MenuLink
          href="./"
          className="px-6!"
          containerClassName="border-l-0"
          animation={false}
        >
          <ArrowLeft className="size-4" />
        </MenuLink>
        <div className="grow flex items-center min-h-full py-4 px-2 text-xl line-clamp-1">
          {title}
        </div>
        <MenuLink
          className="px-6!"
          containerClassName="border-l-0"
          onClick={() => {
            setSearchOpen(true);
          }}
        >
          <Menu className="size-4" />
        </MenuLink>
      </nav>
    </div>
  );
}

function MenuLink({
  children,
  href,
  className,
  containerClassName,
  animation = true,
  onClick,
}: {
  children: React.ReactNode;
  href?: string;
  className?: string;
  containerClassName?: string;
  animation?: boolean;
  onClick?: () => void;
}) {
  const pathname = usePathname();

  const isActive = animation && pathname === href;

  const linkClassName = clsx(
    "h-full px-8 py-4 w-fit flex justify-center items-center duration-200 ease-out",
    "hover:bg-card active:brightness-75",
    isActive && "text-primary",
    className,
  );

  return (
    <div className={clsx("border-l border-dashed", containerClassName)}>
      {href ? (
        <Link href={href} onClick={onClick} className={linkClassName}>
          {children}
        </Link>
      ) : (
        <a className={clsx("cursor-pointer", linkClassName)} onClick={onClick}>
          {children}
        </a>
      )}
    </div>
  );
}
