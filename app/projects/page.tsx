"use client";
import { api } from "@/convex/_generated/api";
import { usePaginatedQuery, usePreloadedQuery } from "convex/react";
import { preloadQuery } from "convex/nextjs";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import Content from "@/components/content";
import { ChevronDown, LoaderCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatePresence } from "motion/react";
import { motion } from "motion/react";

export default function ProjectsPage() {
  const {
    results: projects,
    status,
    loadMore,
  } = usePaginatedQuery(api.projects.list, {}, { initialNumItems: 5 });
  return (
    <Content>
      <h1>Projects</h1>
      <div className="not-prose flex gap-2 flex-col">
        <div className="min-w-full grid grid-cols-1 lg:grid-cols-2 gap-2">
          {projects.map((project) => (
            <Link href={`/projects/${project.slug}`} key={project._id}>
              <Card className="mb-2 h-full">
                <CardHeader>
                  <CardTitle>{project.name}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
        <div className="flex justify-center items-center h-full">
          <AnimatePresence>
            {status === "LoadingFirstPage" ? (
              <LoaderCircle className="animate-spin" />
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Button
                  disabled={!(status === "CanLoadMore")}
                  onClick={() => {
                    loadMore(10);
                  }}
                >
                  {status === "LoadingMore" ? (
                    <LoaderCircle className="animate-spin" />
                  ) : (
                    <ChevronDown />
                  )}
                  More
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </Content>
  );
}
