"use client";
import Content from "@/components/content";
import { api } from "@/convex/_generated/api";
import { Preloaded, usePreloadedQuery } from "convex/react";

export function ProjectContent(props: {
  preloadedProject: Preloaded<typeof api.projects.get>;
}) {
  const projectData = usePreloadedQuery(props.preloadedProject);
  return (
    <Content>
      <h1>{projectData.name}</h1>
      <div dangerouslySetInnerHTML={{ __html: projectData.contenthtml }} />
    </Content>
  );
}
