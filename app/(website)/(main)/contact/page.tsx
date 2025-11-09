import ContactMethodCard from "./ContactMethodCard";
import SocialCard from "./SocialCard";

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
];

export default function Contact() {
  return (
    <div className="max-w-4xl w-full mx-auto">
      <div>
        <div className="w-full mx-auto flex h-fit p-4 border border-t-0 border-dashed">
          <h1 className="text-6xl text-primary">Contact</h1>
        </div>
        <div className="grid grid-cols-2 border-l border-dashed">
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
          <h2 className="text-4xl">Socials</h2>
          <div>(Sorted by order of importance)</div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 border-l border-dashed">
          {socials.map((social, index) => (
            <SocialCard
              key={index}
              name={social.name}
              username={social.username}
              link={social.link}
              unimportant={social.unimportant}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
