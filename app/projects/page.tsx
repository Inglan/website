"use client";
import { api } from "@/convex/_generated/api";
import { usePaginatedQuery, usePreloadedQuery, useQuery } from "convex/react";
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
import { Button, buttonVariants } from "@/components/ui/button";
import { AnimatePresence, stagger } from "motion/react";
import { motion } from "motion/react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function ProjectsPage() {
  const {
    results: projects,
    status,
    loadMore,
  } = usePaginatedQuery(api.projects.list, {}, { initialNumItems: 10 });
  const [lastLoadedCount, setLastLoadedCount] = useState(0);
  const me = useQuery(api.auth.getMe);

  return (
    <Content>
      <h1>Projects</h1>
      <AnimatePresence>
        <div className="not-prose flex gap-2 flex-col">
          <div className="min-w-full grid grid-cols-1 lg:grid-cols-2 gap-2">
            {projects.map((project, index) => (
              <motion.div
                key={project._id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{
                  ease: "easeOut",
                  delay: (index - lastLoadedCount) * 0.1,
                }}
              >
                <Link href={`/projects/${project.slug}`}>
                  <Card className="mb-2 h-full">
                    <CardHeader>
                      <CardTitle>{project.name}</CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-center items-center h-full">
            {status === "LoadingFirstPage" ? (
              <LoaderCircle className="animate-spin" />
            ) : (
              <motion.div
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-row gap-2"
              >
                <Button
                  disabled={!(status === "CanLoadMore")}
                  onClick={() => {
                    setLastLoadedCount(projects.length);
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
                {me?.role === "write" && (
                  <Dialog>
                    <DialogTrigger className={buttonVariants()}>
                      Create
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Create Project</DialogTitle>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                )}
              </motion.div>
            )}
          </div>
        </div>
      </AnimatePresence>
    </Content>
  );
}
