import ProjectPage from "@/components/project-other-page";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function XKCDPage() {
  return (
    <ProjectPage
      name="xkcd-webapp"
      description="A web application that displays xkcd comics"
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
