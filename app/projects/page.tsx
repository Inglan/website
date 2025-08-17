"use client";
import { api } from "@/convex/_generated/api";
import { usePaginatedQuery, usePreloadedQuery } from "convex/react";
import { preloadQuery } from "convex/nextjs";

export default function ProjectsPage() {
  const {
    results: projects,
    status,
    loadMore,
  } = usePaginatedQuery(api.projects.list, {}, { initialNumItems: 10 });
  return (
    <div>
      <h1>Projects</h1>
      {projects.map((project) => (
        <div key={project._id}>{project.name}</div>
      ))}
    </div>
  );
}
