import ProjectPage from "@/components/project-other-page";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function XKCDPage() {
  return (
    <ProjectPage
      name="xkcd-webapp"
      description="A webapp I made to read XKCD. It was my first project with a backend, which I used Convex for. This project took 11 hours of coding to make."
      links={[
        {
          title: "GitHub",
          icon: <FaGithub />,
          url: "https://github.com/ingoau/xkcd-webapp",
        },
        {
          title: "Demo",
          icon: <ExternalLink />,
          url: "https://xkcd.ingo.au/",
        },
      ]}
    />
  );
}
