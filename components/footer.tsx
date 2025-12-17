import Link from "@/components/custom-link";
import NextLink from "next/link";
import { ArrowLeft, ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";
import { SiSignal } from "react-icons/si";

export function Footer() {
  return (
    <div className="max-w-4xl w-full mx-auto text-sm border-b border-x border-dashed grid grid-cols-6">
      <div className="flex flex-col border-r border-dashed col-span-2">
        <NextLink
          href="/"
          className="flex text-xl p-4 border-b border-dashed active:font-normal font-extrabold font-mono duration-200 ease-out hover:bg-card active:brightness-75"
        >
          Ingo Wolf
        </NextLink>
        <div className="flex flex-row">
          <NextLink
            href="mailto:me@ingo.au"
            target="_blank"
            className="border-r border-dashed p-4 aspect-square w-fit flex justify-center items-center duration-200 ease-out hover:bg-card active:brightness-75"
          >
            <Mail className="size-4" />
          </NextLink>
          <NextLink
            href="https://github.com/Inglan"
            target="_blank"
            className="border-r border-dashed p-4 aspect-square w-fit flex justify-center items-center duration-200 ease-out hover:bg-card active:brightness-75"
          >
            <FaGithub className="size-4" />
          </NextLink>
          <NextLink
            href="https://signal.me/#eu/aON_wvkns7bfeU-UAj_09B1Yym8WVC2QIWWV8rIhYZzPc2xGLUtBeLWMc9LJoWNB"
            target="_blank"
            className="border-r border-dashed p-4 aspect-square w-fit flex justify-center items-center duration-200 ease-out hover:bg-card active:brightness-75"
          >
            <SiSignal className="size-4" />
          </NextLink>
          <NextLink
            href="/contact"
            className="border-r border-dashed p-4 aspect-square w-fit flex justify-center items-center duration-200 ease-out hover:bg-card active:brightness-75"
          >
            <ArrowRight className="size-4" />
          </NextLink>
          <div className="grow bg-striped-gradient bg-size-[80px_80px] bg-fixed"></div>
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
