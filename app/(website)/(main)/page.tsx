import { ArrowRight, Building, ClockIcon, Earth, Mail } from "lucide-react";
import Image from "next/image";
import Link from "@/components/custom-link";
import Clock from "@/components/clock";

export default function Home() {
  return (
    <div className="w-full mx-auto flex flex-col sm:flex-row h-fit border border-t-0 border-dashed max-w-4xl">
      <div className="w-full sm:w-0 min-w-60 sm:border-r border-dashed">
        <Image
          width={255}
          height={255}
          alt=""
          className="w-full aspect-square border-b border-dashed"
          src="/icons/main.svg"
        />
        <div className="flex flex-col">
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
              className="flex flex-row gap-2 items-center p-4 sm:p-2 border-b border-dashed sm:last:border-b-0"
            >
              <item.icon className="size-5" /> {item.content}
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col">
        <div className="p-4 flex flex-col gap-2 border-b border-dashed">
          <h1 className="text-primary text-4xl">Hello! I&apos;m Ingo Wolf!</h1>
          <p className="text-xl">
            I am a 15 year old tech nerd from Canberra who listens to too much
            music. I like building random stuff, usually with web technologies
            using overkill tech stacks. I also like spinning up random docker
            containers in{" "}
            <Link href="https://notoverkill.com" target="_blank">
              my homelab
            </Link>{" "}
            and reconfiguring my not overkill networking setup. And when
            I&apos;m not doing any of that, I&apos;m probably doing schoolwork,
            reading, or chatting on the{" "}
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
        <div className="grid grid-cols-1 md:grid-cols-3 h-full">
          {[
            { text: "Projects", link: "/projects" },
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
