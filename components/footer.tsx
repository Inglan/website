import Link from "@/components/custom-link";
import NextLink from "next/link";
import { ArrowLeft, ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";

export function Footer() {
  return (
    <div className="max-w-4xl w-full mx-auto text-sm border-b border-x border-dashed grid grid-cols-4">
      <div className="flex flex-col border-r border-dashed">
        <div className="text-xl p-2 border-b border-dashed bg-card">
          Ingo Wolf
        </div>
        <div className="flex flex-row">
          <NextLink
            href="mailto:me@ingo.au"
            target="_blank"
            className="border-r border-dashed p-2 aspect-square w-fit flex justify-center items-center duration-200 ease-out hover:bg-card active:brightness-75"
          >
            <Mail className="size-4" />
          </NextLink>
          <NextLink
            href="https://github.com/Inglan"
            target="_blank"
            className="border-r border-dashed p-2 aspect-square w-fit flex justify-center items-center duration-200 ease-out hover:bg-card active:brightness-75"
          >
            <FaGithub className="size-4" />
          </NextLink>
        </div>
      </div>
      {/*<div className="flex flex-row w-fit items-center  mx-auto">
        <Button variant="ghost" size="icon" asChild>
          <Link
            href="https://ctp-webr.ing/ingo/previous"
            className="aspect-square h-full"
          >
            <span className="sr-only">Previous</span>
            <ArrowLeft />
          </Link>
        </Button>
        <Button variant="outline" className="border-dashed" asChild>
          <Link href="https://ctp-webr.ing/">Catppuccin webring</Link>
        </Button>
        <Button variant="ghost" size="icon" asChild>
          <Link href="https://ctp-webr.ing/ingo/next">
            <span className="sr-only">Next</span>
            <ArrowRight />
          </Link>
        </Button>
      </div>
      <br />
      This website is{" "}
      <Link href="https://github.com/Inglan/website" target="_blank">
        open source
      </Link>*/}
    </div>
  );
}
