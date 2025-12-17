import { ArrowRight, Building, ClockIcon, Earth, Mail } from "lucide-react";
import Image from "next/image";
import Link from "@/components/custom-link";
import Clock from "@/components/clock";
import { Metadata } from "next";
import { Technologies } from "./technologies";

export const metadata: Metadata = {
  description:
    "I am a 16 year old tech nerd from Canberra. I like building random projects, usually with web technologies, especially Next.js.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <StripedSeparator />
      <Things />
      <StripedSeparator />
      <Technologies />
    </>
  );
}

export function Hero() {
  return (
    <div className="w-full mx-auto flex flex-col-reverse sm:flex-row h-fit border border-t-0 border-dashed max-w-4xl">
      <div className="w-full sm:w-0 min-w-64 sm:border-r border-dashed">
        <Image
          width={255}
          height={255}
          alt=""
          className="w-full hidden sm:block aspect-square border-b border-dashed object-cover"
          src="/icons/main.svg"
        />
        <div className="flex flex-col border-t sm:border-t-0 border-dashed">
          {[
            { icon: Earth, content: <>Canberra, Australia</> },
            {
              icon: ClockIcon,
              content: <Clock />,
            },
            {
              icon: Building,
              content: (
                <Link
                  href="https://cloudearth.au"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cloud Earth
                </Link>
              ),
            },
            {
              icon: Mail,
              content: <Link href="mailto:me@ingo.au">me@ingo.au</Link>,
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-row gap-2 items-center p-4 sm:p-2 border-b border-dashed sm:last:border-b-0 font-mono"
            >
              <item.icon className="size-5" /> {item.content}
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col border-b border-dashed">
          <h1 className="text-primary text-4xl/12 lg:text-5xl/15 border-b border-dashed w-full p-4 font-mono bg-striped-gradient bg-size-[80px_80px] bg-fixed">
            Hello, <br /> I&apos;m Ingo Wolf!
          </h1>
          <p className="text-xl p-4">
            I am a 16 year old tech nerd from Canberra. I like building random
            projects, usually with web technologies, especially Next.js. I also
            like spinning up docker containers in{" "}
            <Link href="https://notoverkill.com" target="_blank">
              my homelab
            </Link>{" "}
            and reconfiguring my not at all overkill home network. And when
            I&apos;m not doing any of that, I&apos;m probably doing schoolwork,
            reading, walking, or chatting on the{" "}
            <Link
              href="https://hackclub.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hack Club
            </Link>{" "}
            Slack.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 h-full">
          {[
            // { text: "Projects", link: "/projects" },
            { text: "Blog", link: "/blog" },
            { text: "Contact", link: "/contact" },
          ].map((item, index) => (
            <div
              className="border-b md:border-b-0 md:border-r border-dashed last:border-0"
              key={index}
            >
              <Link
                className="flex flex-row gap-2 items-center justify-center p-4 h-full w-full hover:bg-card duration-200 ease-out active:brightness-75"
                href={item.link}
                key={index}
              >
                {item.text}
                <ArrowRight className="size-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Things() {
  return (
    <div className="w-full mx-auto grid grid-cols-1 sm:grid-cols-3 max-w-4xl border-l border-dashed border-b">
      <div className="border-r border-dashed p-4 border-b sm:border-b-0">
        <h2 className="text-2xl text-primary">Web</h2>
        <p>
          I have built many websites for friends and community things, such as
          Hack Club YSWSes. I also build web apps to solve my problems, and for
          fun.
        </p>
      </div>
      <div className="border-r border-dashed p-4 border-b sm:border-b-0">
        <h2 className="text-2xl text-primary">Infrastructure</h2>
        <p>
          I run and maintain about 40 Docker containers in my homelab which are
          behind Traefik. I have also set up SSO to everything with authentik.
        </p>
      </div>
      <div className="border-r border-dashed p-4">
        <h2 className="text-2xl text-primary">Networking</h2>
        <p>
          I have set up VLANs in my home network for security and organization,
          and force my family to use username/password auth.
        </p>
      </div>
    </div>
  );
}

function StripedSeparator() {
  return (
    <div className="w-full mx-auto max-w-4xl border-x border-dashed h-10 bg-striped-gradient bg-size-[80px_80px] border-b"></div>
  );
}
