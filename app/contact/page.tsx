import { Badge } from "@/components/ui/badge";
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
    name: "Twitter",
    username: "@IngoWolfAU",
    link: "https://twitter.com/IngoWolfAU",
  },
  {
    name: "Bluesky",
    username: "@ingo.au",
    link: "https://bsky.app/profile/ingo.au",
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        {socials.map((social, index) => (
          <Link
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            className="p-4 border rounded-xl bg-card flex flex-col"
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
