import { FormattedDateTime } from "@/components/formatted-date";
import Header from "@/components/header";
import PostCard from "@/components/post-card";
import { Button } from "@/components/ui/button";
import { client } from "@/sanity/lib/client";
import { SanityDocument } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
const POSTS_QUERY = `*[
  _type == "project"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt, body, "mainImageUrl": mainImage.asset->url, links}`;
const options = { next: { revalidate: 30 } };

export const metadata = {
  title: "Projects",
};

export default async function Projects() {
  const projects = await client.fetch<SanityDocument[]>(
    POSTS_QUERY,
    {},
    options,
  );

  return (
    <div className="max-w-4xl w-full mx-auto border-l border-dashed">
      <Header className="border-r">Projects</Header>
      <div className="grid grid-cols-2">
        {projects.map((project, index) => (
          <div
            className="flex flex-col border-r border-b border-dashed"
            key={index}
          >
            <Image
              src={project.mainImageUrl}
              alt={project.title}
              width={16 * 100}
              height={9 * 100}
              className="aspect-video w-full object-cover border-b border-dashed"
            />
            <h2 className="w-full p-4 pb-0 text-2xl">{project.title}</h2>
            <h3 className="border-b w-full border-dashed p-4 pt-0 text-sm">
              {project.publishedAt && (
                <FormattedDateTime
                  date={project.publishedAt}
                  format="DATETIME"
                />
              )}
            </h3>
            <p className="p-4 border-b border-dashed">
              {project.body
                .map((b: { children?: { text?: string }[] }) =>
                  (b.children || [])
                    .map((c: { text?: string }) => c.text || "")
                    .join(""),
                )
                .join(" ")}
            </p>
            <div className="w-full flex flex-row">
              {project.links.map(
                (link: { title: string; url: string }, index: number) => (
                  <Button
                    key={index}
                    variant="ghost"
                    className="cursor-pointer px-4 py-2 duration-200 ease-out hover:bg-card active:brightness-75 bg-background border-r border-dashed"
                    asChild
                  >
                    <Link href={link.url} target="_blank">
                      {link.title}
                    </Link>
                  </Button>
                ),
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
