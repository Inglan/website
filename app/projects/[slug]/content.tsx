"use client";
import { api } from "@/convex/_generated/api";
import { Preloaded, usePreloadedQuery } from "convex/react";

export function ProjectContent(props: {
  preloadedProject: Preloaded<typeof api.projects.get>;
}) {
  const projectData = usePreloadedQuery(props.preloadedProject);
  return (
    <div>
      <h1>{projectData.name}</h1>
      <p>{projectData.description}</p>
    </div>
  );
}
