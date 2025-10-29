import { Badge } from "@/components/ui/badge";
import clsx from "clsx";
import Link from "next/link";
import { motion } from "motion/react";
import ContactMethod from "./ContactMethod";

const contactMethods = [
  {
    title: "Signal",
    subtitle: "ingo.392",
    url: "https://signal.me/#eu/aON_wvkns7bfeU-UAj_09B1Yym8WVC2QIWWV8rIhYZzPc2xGLUtBeLWMc9LJoWNB",
    preferred: true,
  },
  {
    title: "Email",
    subtitle: "me@ingo.au",
    url: "mailto:me@ingo.au",
  },
  {
    title: "Discord",
    subtitle: "@ingo.au",
    url: "https://discord.com/users/907855965934714930",
  },
];

const socials = [
  { name: "GitHub", username: "@Inglan", link: "https://github.com/Inglan" },
  {
    name: "Spotify",
    username: "Ingo Wolf",
    link: "https://open.spotify.com/user/31fo6w35yvebzqgz53cczfuro3bi",
  },
  {
    name: "Last.fm",
    username: "ingoau",
    link: "https://last.fm/user/ingoau",
  },
  {
    name: "stats.fm",
    username: "ingowolf",
    link: "https://stats.fm/ingowolf",
  },
  {
    name: "Monkeytype",
    username: "ingow",
    link: "https://monkeytype.com/profile/ingow",
  },
  {
    name: "Scrapbook",
    username: "ingo",
    link: "https://scrapbook.hackclub.com/ingo",
  },
  {
    name: "Hack Club Slack",
    username: "Ingo",
    link: "https://hackclub.slack.com/team/U0923H02Y3B",
  },
  {
    name: "Nitrotype",
    username: "ingowolf",
    link: "https://www.nitrotype.com/racer/ingowolf",
  },
  {
    name: "Youtube",
    username: "@ingoau",
    link: "https://youtube.com/@ingoau",
    unimportant: true,
  },
  {
    name: "Apple Music",
    username: "ingo_wolf",
    link: "https://music.apple.com/profile/ingo_wolf",
    unimportant: true,
  },
  {
    name: "Wikipedia",
    username: "Ingowolfau",
    link: "https://en.wikipedia.org/wiki/User:Ingowolfau",
    unimportant: true,
  },
  {
    name: "Samsung Members",
    username: "ingowolf",
    link: "https://r1.community.samsung.com/t5/user/viewprofilepage/user-id/162878944",
    unimportant: true,
  },
  {
    name: "Twitter",
    username: "@IngoWolfAU",
    link: "https://twitter.com/IngoWolfAU",
    unimportant: true,
  },
  {
    name: "Bluesky",
    username: "@ingo.au",
    link: "https://bsky.app/profile/ingo.au",
    unimportant: true,
  },
  {
    name: "Roblox",
    username: "ingowolfau",
    link: "https://www.roblox.com/users/9763303750/profile",
    unimportant: true,
  },
];

export default function Contact() {
  return (
    <div className="max-w-4xl p-4 w-full mx-auto">
      <div>
        <div className="w-full mx-auto flex h-fit p-4 border border-dashed">
          <h1 className="text-6xl text-primary">Contact</h1>
        </div>
        <div className="grid grid-cols-2 border-l border-dashed">
          {contactMethods.map((method, index) => (
            <div key={index} className={clsx(method.preferred && "col-span-2")}>
              <Link
                href={method.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 border-b border-r border-dashed hover:bg-card flex flex-col"
              >
                <div className="text-2xl inline-flex gap-2 items-center">
                  {method.title}
                </div>
                <div className="text-xl inline-flex gap-2 items-center">
                  {method.subtitle}
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="flex flex-col border-b border-x p-4 border-dashed bg-card">
          <h2 className="text-4xl">Socials</h2>
          <div>(Sorted by order of importance)</div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 border-l border-dashed">
          {socials.map((social, index) => (
            <div key={index}>
              <Link
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 border-b border-r border-dashed hover:bg-card flex flex-col"
              >
                <div
                  className={clsx(
                    "text-2xl inline-flex gap-2 items-center",
                    social.unimportant && "text-foreground/50",
                  )}
                >
                  {social.name}
                </div>
                <div
                  className={clsx(
                    "text-xl inline-flex gap-2 items-center",
                    social.unimportant && "text-foreground/50",
                  )}
                >
                  {social.username}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
