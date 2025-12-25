import Header from "@/components/header";
import PostCard from "@/components/post-card";
import { client } from "@/sanity/lib/client";
import { SanityDocument } from "next-sanity";
import Image from "next/image";
const POSTS_QUERY = `*[
  _type == "project"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt, body, "mainImageUrl": mainImage.asset->url}`;
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
            <h2 className="border-b w-full border-dashed p-4 text-2xl">
              {project.title}
            </h2>
            <p className="p-4 border-b border-dashed">
              {project.body
                .map((b: { children?: { text?: string }[] }) =>
                  (b.children || [])
                    .map((c: { text?: string }) => c.text || "")
                    .join(""),
                )
                .join(" ")}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
