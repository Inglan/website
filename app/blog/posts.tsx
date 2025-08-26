"use client";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import Content from "@/components/content";
import { AnimatePresence } from "motion/react";
import { motion } from "motion/react";
import clsx from "clsx";
import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt}`;

const options = { next: { revalidate: 30 } };

export default function Posts({ posts }: { posts: SanityDocument[] }) {
  return (
    // <Content>
    //   <h1>Projects</h1>
    //   <AnimatePresence>
    //     <div className="not-prose flex gap-2 flex-col">
    //       <div className="min-w-full grid grid-cols-1 lg:grid-cols-2 gap-2">
    //         <motion.div
    //           initial={{ opacity: 0, y: 10 }}
    //           animate={{ opacity: 1, y: 0 }}
    //           exit={{ opacity: 0, y: 10 }}
    //           transition={{
    //             ease: "easeOut",
    //             delay: 0.1,
    //           }}
    //         >
    //           <Link href={`/projects/`}>
    //             <Card className={clsx("mb-2 h-full")}>
    //               <CardHeader>
    //                 <CardTitle>Title</CardTitle>
    //                 <CardDescription>Description</CardDescription>
    //               </CardHeader>
    //             </Card>
    //           </Link>
    //         </motion.div>
    //       </div>
    //       {/*<div className="flex justify-center items-center h-full">
    //         {status === "LoadingFirstPage" ? (
    //           <LoaderCircle className="animate-spin" />
    //         ) : (
    //           <motion.div
    //             layout
    //             initial={{ opacity: 0 }}
    //             animate={{ opacity: 1 }}
    //             exit={{ opacity: 0 }}
    //             className="flex flex-row gap-2"
    //           >
    //             <Button
    //               disabled={!(status === "CanLoadMore")}
    //               onClick={() => {
    //                 setLastLoadedCount(projects.length);
    //                 loadMore(10);
    //               }}
    //             >
    //               {status === "LoadingMore" ? (
    //                 <LoaderCircle className="animate-spin" />
    //               ) : (
    //                 <ChevronDown />
    //               )}
    //               More
    //             </Button>
    //             {me?.role === "write" && (
    //               <Dialog>
    //                 <DialogTrigger asChild>
    //                   <Button>Create</Button>
    //                 </DialogTrigger>
    //                 <DialogContent>
    //                   <form
    //                     className="grid w-full gap-4"
    //                     onSubmit={(event) => {
    //                       event.preventDefault();
    //                       const form = event.target as HTMLFormElement;
    //                       const nameInput = form.elements.namedItem(
    //                         "name",
    //                       ) as HTMLInputElement | null;
    //                       toast.promise(
    //                         new Promise((resolve, reject) => {
    //                           create({
    //                             name: nameInput?.value ?? "",
    //                           })
    //                             .then((slug) => {
    //                               router.push(`/projects/${slug}/edit`);
    //                               resolve("Project created!");
    //                             })
    //                             .catch(() => {
    //                               reject("Failed to create project");
    //                             });
    //                         }),
    //                         {
    //                           loading: "Creating project...",
    //                           success: "Project created!",
    //                           error: "Failed to create project",
    //                         },
    //                       );
    //                     }}
    //                   >
    //                     <DialogHeader>
    //                       <DialogTitle>Create Project</DialogTitle>
    //                     </DialogHeader>
    //                     <div className="grid gap-4">
    //                       <div className="grid gap-3">
    //                         <Label htmlFor="project-name">Project Name</Label>
    //                         <Input
    //                           required
    //                           id="project-name"
    //                           name="name"
    //                           defaultValue=""
    //                         />
    //                       </div>
    //                     </div>
    //                     <DialogFooter>
    //                       <DialogClose asChild>
    //                         <Button variant="outline">Cancel</Button>
    //                       </DialogClose>
    //                       <Button type="submit">Create</Button>
    //                     </DialogFooter>
    //                   </form>
    //                 </DialogContent>
    //               </Dialog>
    //             )}
    //           </motion.div>
    //         )}
    //         </div>*/}
    //     </div>
    //   </AnimatePresence>
    // </Content>
    //

    <main className="container mx-auto min-h-screen max-w-3xl p-8">
      <h1 className="text-4xl font-bold mb-8">Posts</h1>
      <ul className="flex flex-col gap-y-4">
        {posts.map((post) => (
          <li className="hover:underline" key={post._id}>
            <Link href={`/blog/${post.slug.current}`}>
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p>
                {new Date(post.publishedAt).toLocaleDateString("en-AU", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
