import { Badge } from "@/components/ui/badge";
import clsx from "clsx";
import Link from "next/link";

const contactMethods = [
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
    <div className="max-w-4xl p-2 w-full mx-auto space-y-2">
      <h1 className="text-6xl text-primary">Contact</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <Link
          href="https://signal.me/#eu/aON_wvkns7bfeU-UAj_09B1Yym8WVC2QIWWV8rIhYZzPc2xGLUtBeLWMc9LJoWNB"
          target="_blank"
          rel="noopener noreferrer"
          className="col-span-2 p-4 border rounded-xl bg-card flex flex-col"
        >
          <div className="text-2xl inline-flex gap-2 items-center">
            Signal <Badge>Preferred</Badge>
          </div>
          <div className="text-xl inline-flex gap-2 items-center">ingo.392</div>
        </Link>
        {contactMethods.map((method, index) => (
          <Link
            href={method.url}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            className="p-4 border rounded-xl bg-card flex flex-col"
          >
            <div className="text-2xl inline-flex gap-2 items-center">
              {method.title}
            </div>
            <div className="text-xl inline-flex gap-2 items-center">
              {method.subtitle}
            </div>
          </Link>
        ))}
      </div>
      <h2 className="text-4xl">Socials</h2>
      <div>(Sorted by order of importance)</div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        {socials.map((social, index) => (
          <Link
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            className={clsx(
              "p-4 border rounded-xl bg-card flex flex-col",
              social.unimportant ? "border-dashed bg-transparent" : "",
            )}
          >
            <div className="text-2xl inline-flex gap-2 items-center">
              {social.name}
            </div>
            <div className="text-xl inline-flex gap-2 items-center">
              {social.username}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
