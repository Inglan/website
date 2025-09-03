import Content from "@/components/content";
import { Metadata } from "next";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <Content>
      <h1>About Me</h1>
      <p>I am a web developer but also know a bit of game development</p>
      <h2>I know</h2>
      <div className="not-prose grid grid-cols-3 gap-2">
        {[
          { name: "React" },
          { name: "NextJS" },
          { name: "Svelte" },
          { name: "TypeScript" },
          { name: "Python" },
          { name: "Godot" },
        ].map((item, index) => (
          <div
            className="bg-card p-2 rounded-md flex flex-col justify-center items-center"
            key={index}
          >
            {item.name}
          </div>
        ))}
      </div>
    </Content>
  );
}
