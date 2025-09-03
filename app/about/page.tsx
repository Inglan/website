import Content from "@/components/content";
import { Metadata } from "next";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <Content>
      <h1>About Me</h1>
      <p>I am a web developer but also know a bit of game development</p>
      <h2>I know</h2>
      <ul>
        <li>NodeJS</li>
        <li>React</li>
        <li>NextJS</li>
        <li>Svelte</li>
        <li>TypeScript</li>
        <li>Godot</li>
        <li>Python</li>
        <li>Docker</li>
      </ul>
    </Content>
  );
}
