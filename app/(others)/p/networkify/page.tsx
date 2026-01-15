import ProjectPage from "@/components/project-other-page";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function XKCDPage() {
  return (
    <ProjectPage
      name="networkify"
      description={
        <>
          Have you ever wanted to graph your Spotify follows?
          <br />
          No?
          <br />
          Well now you can, with networkify
          <br />I built networkify in Next.js as a project for Siege because I
          noticed that Spotify follows default to public and I was interested
          who I could find by looking at follows of follows, etc. And it worked
          really well (apart from using 2gb+ of ram)! I had to reverse engineer
          the Spotify API while trying to mostly not break the ToS. This took 17
          hours of coding to make.
        </>
      }
      links={[
        {
          title: "GitHub",
          icon: <FaGithub />,
          url: "https://github.com/ingoau/networkify",
        },
        {
          title: "Demo",
          icon: <ExternalLink />,
          url: "https://networkify.ingo.au/",
        },
      ]}
    />
  );
}
