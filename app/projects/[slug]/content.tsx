"use client";
import Content from "@/components/content";
import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { Preloaded, usePreloadedQuery, useQuery } from "convex/react";
import Link from "next/link";
import { motion } from "motion/react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export function ProjectContent(props: {
  preloadedProject: Preloaded<typeof api.projects.get>;
}) {
  const me = useQuery(api.auth.getMe);

  const projectData = usePreloadedQuery(props.preloadedProject);
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Content>
        <Breadcrumb className="not-prose mb-4">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/projects">Projects</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{projectData.name}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
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
    </motion.div>
  );
}
