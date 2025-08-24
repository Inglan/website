"use client";
import Content from "@/components/content";
import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { Preloaded, usePreloadedQuery, useQuery } from "convex/react";
import Link from "next/link";

export function ProjectContent(props: {
  preloadedProject: Preloaded<typeof api.projects.get>;
}) {
  const me = useQuery(api.auth.getMe);

  const projectData = usePreloadedQuery(props.preloadedProject);
  return (
    <Content>
      {me?.role === "write" && (
        <div className="flex flex-row gap-2 p-2 not-prose">
          <Button asChild>
            <Link href={`/projects/${projectData.slug}/edit`}>Edit</Link>
          </Button>
        </div>
      )}
      <h1>{projectData.name}</h1>
      <div dangerouslySetInnerHTML={{ __html: projectData.contenthtml }} />
    </Content>
  );
}
