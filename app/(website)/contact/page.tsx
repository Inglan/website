import Header from "@/components/header";
import ContactMethodCard from "./ContactMethodCard";
import SocialCard from "./SocialCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact me"
};

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
    title: "Whatsapp",
    subtitle: "Ingo Wolf",
    url: "https://wa.me/qr/2I6NBPFBJV3UN1",
  },
  {
    title: "Discord",
    subtitle: "@ingo.au",
    url: "https://discord.com/users/907855965934714930",
  },
];

const socials = [
  { name: "GitHub", username: "@ingoau", link: "https://github.com/ingoau" },
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
    name: "Nitrotype",
    username: "ingowolf",
    link: "https://www.nitrotype.com/racer/ingowolf",
  },
];

export default function Contact() {
  return (
    <div className="max-w-4xl w-full mx-auto">
      <div>
        <Header className="border-x">Contact</Header>
        <div className="grid grid-cols-1 md:grid-cols-2 border-l border-dashed">
          {contactMethods.map((method, index) => (
            <ContactMethodCard
              key={index}
              title={method.title}
              subtitle={method.subtitle}
              url={method.url}
              preferred={method.preferred}
            />
          ))}
        </div>
        <div className="flex flex-col border-b border-x p-4 border-dashed bg-card">
          <h2 className="text-4xl">(Not) Socials</h2>
          <div>
            Under Australia&apos;s social media law, none of this is social
            media
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 border-l border-dashed">
          {socials.map((social, index) => (
            <SocialCard
              key={index}
              name={social.name}
              username={social.username}
              link={social.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
