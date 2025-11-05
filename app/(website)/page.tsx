import { Building, Building2, Earth, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full mx-auto flex flex-row h-fit border border-t-0 border-dashed max-w-4xl">
      <div className="w-64 min-w-64 border-r border-dashed">
        <Image
          width={255}
          height={255}
          alt=""
          className="w-full aspect-square border-b border-dashed"
          src="/icons/main.svg"
        />
        <div className="flex flex-col">
          <h1 className="text-2xl p-2 border-b border-dashed">Ingo Wolf</h1>
          {[
            { icon: Earth, content: <>Canberra, Australia</> },
            {
              icon: Building,
              content: (
                <a
                  href="https://cloudearth.au"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cloud Earth
                </a>
              ),
            },
            { icon: Mail, content: <a href="mailto:me@ingo.au">me@ingo.au</a> },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-row gap-2 items-center p-2 border-b border-dashed last:border-b-0"
            >
              <item.icon className="size-5" /> {item.content}
            </div>
          ))}
        </div>
      </div>
      <div className="p-4 flex flex-col gap-2">
        <h1 className="text-primary text-4xl">Hello! I&apos;m Ingo Wolf!</h1>
        <p className="text-xl">
          I am a 15 year old from Canberra. I like building random stuff,
          usually with web technologies using overkill tech stacks. When
          I&apos;m not building stuff, I&apos;m spinning up docker containers in
          <Link href="https://notoverkill.com" target="_blank">
            {" "}
            my homelab
          </Link>{" "}
          and reconfiguring my 100% not overkill networking setup.
        </p>
      </div>
    </div>
  );
}
