import { preloadQuery } from "convex/nextjs";
import { api } from "@/convex/_generated/api";
import { ProjectContent } from "./content";
import { notFound } from "next/navigation";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  try {
    const preloadedProject = await preloadQuery(api.projects.get, {
      slug: slug,
    });
    return <ProjectContent preloadedProject={preloadedProject} />;
  } catch (error) {
    notFound();
  }
}
