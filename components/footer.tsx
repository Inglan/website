import Link from "@/components/custom-link";
import NextLink from "next/link";
import { ArrowLeft, ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";
import { SiSignal } from "react-icons/si";
import { MENU_ITEMS, OTHER_PAGES } from "@/lib/constants";
import Image from "next/image";
import { m } from "motion/react";

export function Footer() {
  return (
    <>
      <div className="max-w-4xl w-full mx-auto text-sm sm:border-b border-l border-dashed flex flex-col sm:flex-row">
        <div className="flex flex-col border-r border-dashed col-span-3">
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
              className="border-r border-b  border-dashed p-4 aspect-square w-fit flex justify-center items-center duration-200 ease-out hover:bg-card active:brightness-75"
            >
              <span className="sr-only">Email</span>
              <Mail className="size-4" />
            </NextLink>
            <NextLink
              href="https://github.com/Inglan"
              target="_blank"
              className="border-r border-b  border-dashed p-4 aspect-square w-fit flex justify-center items-center duration-200 ease-out hover:bg-card active:brightness-75"
            >
              <span className="sr-only">GitHub</span>
              <FaGithub className="size-4" />
            </NextLink>
            <NextLink
              href="https://signal.me/#eu/aON_wvkns7bfeU-UAj_09B1Yym8WVC2QIWWV8rIhYZzPc2xGLUtBeLWMc9LJoWNB"
              target="_blank"
              className="border-r border-b  border-dashed p-4 aspect-square w-fit flex justify-center items-center duration-200 ease-out hover:bg-card active:brightness-75"
            >
              <span className="sr-only">Signal</span>
              <SiSignal className="size-4" />
            </NextLink>
            <NextLink
              href="/contact"
              className="border-r border-b  border-dashed p-4 aspect-square w-fit flex justify-center items-center duration-200 ease-out hover:bg-card active:brightness-75"
            >
              <span className="sr-only">Contact</span>
              <ArrowRight className="size-4" />
            </NextLink>
            <div className="border-b border-dashed grow bg-striped-gradient bg-size-[80px_80px] bg-fixed min-w-20"></div>
          </div>
          <div className="hidden sm:block h-full bg-striped-gradient bg-size-[80px_80px] bg-fixed min-h-10"></div>
        </div>
        <div className="hidden sm:block bg-striped-gradient bg-size-[80px_80px] bg-fixed border-r border-dashed grow"></div>
        <div className="flex flex-col min-w-64">
          <div className="flex-col grid grid-cols-2 h-fit">
            {[...MENU_ITEMS, ...OTHER_PAGES].map((item) => (
              <NextLink
                key={item.url}
                href={item.url}
                className="w-full p-2 border-b border-r border-dashed duration-200 ease-out hover:bg-card active:brightness-75"
              >
                {item.label}
              </NextLink>
            ))}
          </div>
          <div className="hidden sm:block h-full bg-striped-gradient bg-size-[80px_80px] bg-fixed min-h-10 border-r border-dashed"></div>
        </div>
      </div>
      <div className="max-w-4xl w-full mx-auto flex border-b border-x border-dashed items-center bg-striped-gradient bg-size-[80px_80px]">
        <div className="px-8 h-14 sm:border-r border-dashed flex items-center justify-center w-full sm:w-fit border-t sm:border-t-0">
          <span>
            This website is{" "}
            <Link href="https://github.com/Inglan/website" target="_blank">
              open source
            </Link>
          </span>
        </div>
        <div className="grow"></div>
        <div className="flex flex-col">
          {[
            {
              name: "ultrafastparrot",
              url: "https://ultrafastparrot.net",
              next: "https://ultrafastparrot.net/next/ingo",
              prev: "https://ultrafastparrot.net/prev/ingo",
            },
          ].map((item, index) => (
            <div className="flex flex-row border-b border-dashed" key={index}>
              <Button
                variant="ghost"
                size="icon"
                className="border-l border-dashed duration-200 ease-out hover:bg-card active:brightness-75"
                asChild
              >
                <Link href={item.prev}>
                  <span className="sr-only">Previous</span>
                  <ArrowLeft />
                </Link>
              </Button>
              <Button
                variant="ghost"
                className="border-l border-dashed duration-200 ease-out hover:bg-card active:brightness-75"
                asChild
              >
                <Link href={item.url}>{item.name}</Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="border-l border-dashed duration-200 ease-out hover:bg-card active:brightness-75"
                asChild
              >
                <Link href={item.prev}>
                  <span className="sr-only">Next</span>
                  <ArrowRight />
                </Link>
              </Button>
            </div>
          ))}
        </div>

        {/*<div className="flex flex-row w-full sm:w-fit border-t sm:border-0 border-dashed">
          <Link
            href="https://ultrafastparrot.net/prev/ingo"
            className="aspect-square h-14 flex items-center justify-center duration-200 ease-out hover:bg-card active:brightness-75 sm:border-l border-dashed"
          >
            <span className="sr-only">Previous</span>
            <ArrowLeft className="size-4" />
          </Link>
          <Link
            href="https://ultrafastparrot.net"
            className="h-14 px-4 flex items-center justify-center duration-200 ease-out hover:bg-card active:brightness-75 border-l border-dashed grow"
          >
            ultrafastparrot
          </Link>
          <Link
            href="https://ultrafastparrot.net/next/ingo"
            className="aspect-square h-14 flex items-center justify-center duration-200 ease-out hover:bg-card active:brightness-75 border-l border-dashed"
          >
            <span className="sr-only">Next</span>
            <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="hidden sm:block aspect-square h-14 bg-striped-gradient bg-size-[80px_80px] bg-fixed border-l border-dashed"></div>
        <div className="flex flex-row w-full sm:w-fit">
          <Link
            href="https://ctp-webr.ing/ingo/previous"
            className="aspect-square h-14 flex items-center justify-center duration-200 ease-out hover:bg-card active:brightness-75 sm:border-l border-dashed"
          >
            <span className="sr-only">Previous</span>
            <ArrowLeft className="size-4" />
          </Link>
          <Link
            href="https://ctp-webr.ing"
            className="h-14 px-4 flex items-center justify-center duration-200 ease-out hover:bg-card active:brightness-75 border-l border-dashed grow"
          >
            CTP
          </Link>
          <Link
            href="https://ctp-webr.ing/ingo/next"
            className="aspect-square h-14 flex items-center justify-center duration-200 ease-out hover:bg-card active:brightness-75 border-l border-dashed"
          >
            <span className="sr-only">Next</span>
            <ArrowRight className="size-4" />
          </Link>
        </div>*/}
      </div>
      <div
        className="grid grid-cols-4 mx-auto p-2 gap-2 mt-4"
        style={{
          boxShadow:
            "0.5px 0.5px 0 0.5px black, inset 1px 1px #C2C6CA, inset -1px -1px #85898d, inset 2px 2px white",
          background: "#c2c6ca",
        }}
      >
        {[
          {
            src: "/buttons/convex.gif",
            alt: "Convex",
            href: "https://convex.dev",
          },
          {
            src: "/buttons/ctp.webp",
            alt: "Catppuccin",
            href: "https://catppuccin.com",
          },
          {
            src: "/buttons/github.png",
            alt: "GitHub",
            href: "https://github.com",
          },
          {
            src: "/buttons/hackclub.gif",
            alt: "Hack Club",
            href: "https://hackclub.com",
          },
          {
            src: "/buttons/next.gif",
            alt: "Next.js",
            href: "https://nextjs.org",
          },
          {
            src: "/buttons/home-assistant.gif",
            alt: "Home Assistant",
            href: "https://home-assistant.io",
          },
          {
            src: "/buttons/macosmade.gif",
            alt: "Made with macos",
            href: "https://apple.com",
          },
          {
            src: "/buttons/neovim.gif",
            alt: "Neovim",
            href: "https://neovim.io",
          },
          {
            src: "/buttons/codingcorner.png",
            alt: "Coding Corner",
            href: "https://codingcorner.dev",
          },
          {
            src: "/buttons/slitro.png",
            alt: "Slitro Studio",
            href: "https://site.slitrostudio.me/",
          },
          {
            src: "/buttons/ultrafastparrot.gif",
            alt: "Ultrafastparrot Cult",
            href: "https://ultrafastparrot.net",
          },
          {
            src: "/buttons/notoverkill.gif",
            alt: "Notoverkill",
            href: "https://notoverkill.com",
          },
        ].map((button) => (
          <Link key={button.alt} href={button.href} target="_blank">
            <Image
              loading="lazy"
              src={button.src}
              alt={button.alt}
              className="w-[88px] h-[31px]"
              width={88}
              height={31}
            />
          </Link>
        ))}
      </div>
    </>
  );
}
