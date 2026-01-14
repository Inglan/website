import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

export default function ProjectPage({
  name,
  description,
  links,
}: {
  name: string;
  description: string | React.ReactNode;
  links: { title: string; icon: React.ReactNode; url: string }[];
}) {
  return (
    <div className="flex-col p-8 absolute w-full h-screen flex items-center">
      <div className="border border-b-0 border-dashed w-full max-w-2xl">
        <div className="p-4 border-b border-dashed flex flex-col gap-2 bg-card">
          <p>
            <Link href="/">
              <span className="text-primary">ingo.au</span>/
            </Link>
          </p>
          <h1 className="text-4xl lg:text-5xl text-primary">{name}</h1>
        </div>
        <p className="border-b border-dashed p-4">{description}</p>
        <div className="flex flex-col">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.url}
              className={cn(
                buttonVariants({ variant: "ghost", size: "lg" }),
                "border-b border-dashed hover:bg-muted active:brightness-75 duration-200 justify-start",
              )}
            >
              {link.icon}
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
