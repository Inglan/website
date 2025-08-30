import { PortableText, type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import Content from "@/components/content";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]{_id, title, slug, mainImage, tags[]-> { title, slug }, body, publishedAt}`;

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const options = { next: { revalidate: 30 } };

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const post = await client.fetch<SanityDocument>(
    POST_QUERY,
    await params,
    options,
  );
  const postImageUrl = post.mainImage
    ? urlFor(post.mainImage)?.width(550).height(310).url()
    : null;

  return (
    <>
      <Content>
        <div className="w-full min-h-72 rounded-t-md relative overflow-hidden not-prose">
          {postImageUrl && (
            <img
              src={postImageUrl}
              alt={post.title}
              className="w-full h-full absolute top-0 left-0 object-cover"
              width="550"
              height="310"
            />
          )}
          <div className="w-full h-full z-10 absolute top-0 left-0 from-transparent to-background bg-gradient-to-b"></div>
          <div className="w-full h-full top-0 bottom-0 p-2 flex flex-col z-20 absolute">
            <div>
              <Button variant="secondary" asChild>
                <Link href="/blog">
                  <ChevronLeft />
                  Back
                </Link>
              </Button>
            </div>
            <div className="grow"></div>
            <div className="flex flex-row gap-2 w-full">
              <div className="flex flex-col gap-2">
                <h1 className="text-6xl">{post.title}</h1>
                <div className="flex flex-row gap-1">
                  {post.tags &&
                    (
                      post.tags as {
                        title: string;
                        slug: { current: string };
                      }[]
                    ).map((tag) => (
                      <Badge key={tag.title} asChild>
                        <Link href={`/blog/tag/${tag.slug.current}`}>
                          {tag.title}
                        </Link>
                      </Badge>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <p>
          Published:{" "}
          {new Date(post.publishedAt).toLocaleDateString("en-AU", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>
        {Array.isArray(post.body) && <PortableText value={post.body} />}
      </Content>
    </>
  );
}
