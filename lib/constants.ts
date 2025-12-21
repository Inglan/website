import { Easing } from "motion";
import { FaDiscord, FaGit, FaGithub, FaGoogle } from "react-icons/fa";

export const NICE_EASE: Easing | Easing[] = [0.165, 0.84, 0.44, 1.0];

export const MENU_ITEMS = [
  { url: "/", label: "Home" },
  // { url: "/projects", label: "Projects" },
  { url: "/blog", label: "Blog" },
  { url: "/contact", label: "Contact" },
];

export const OTHER_PAGES = [{ url: "/guestbook", label: "Guestbook" }];

export const AUTH_PROVIDERS = [
  { label: "GitHub", id: "github", icon: FaGithub, type: "social" },
  { label: "Google", id: "google", icon: FaGoogle, type: "social" },
  { label: "Discord", id: "discord", icon: FaDiscord, type: "social" },
  { label: "git.gay", id: "gitdotgay", icon: FaGit, type: "oauth2" },
];
