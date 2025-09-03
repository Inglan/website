"use client";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import Content from "@/components/content";
import { AnimatePresence } from "motion/react";
import { motion } from "motion/react";
import clsx from "clsx";
import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export default function Posts({
  posts,
  tag,
}: {
  posts: SanityDocument[];
  tag?: string;
}) {
  return (
    <Content>
      <h1>
        Blog
        <br />
        {tag && (
          <div className="text-sm p-1 pl-4 flex flex-row gap-2 justify-center items-center w-fit border rounded-md my-2">
            {tag}
            <Button variant="ghost" size="icon" asChild>
              <Link href="/blog">
                <X />
              </Link>
            </Button>
          </div>
        )}
      </h1>
      <div className="min-w-full grid grid-cols-1 lg:grid-cols-2 gap-2 not-prose">
        {posts.map((post, index) => (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{
              ease: [0.165, 0.84, 0.44, 1.0],
              delay: 0.1 * index + 0.1,
            }}
            key={post._id}
          >
            <Link href={`/blog/${post.slug.current}`}>
              <Card className={clsx("mb-2 h-full")}>
                <CardHeader>
                  <CardTitle>{post.title}</CardTitle>
                  <CardDescription>
                    {new Date(post.publishedAt).toLocaleDateString("en-AU", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                    {post.description && " - " + post.description}
                  </CardDescription>
                </CardHeader>
                <CardFooter className="flex flex-row flex-wrap gap-1">
                  {post.tags &&
                    (post.tags as { title: string }[]).map((tag) => (
                      <Badge variant="outline" key={tag.title}>
                        {tag.title}
                      </Badge>
                    ))}
                </CardFooter>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </Content>
  );
}
