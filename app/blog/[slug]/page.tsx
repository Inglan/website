import { PortableText, type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import Content from "@/components/content";
import { Badge } from "@/components/ui/badge";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]{_id, title, slug, image, tags[]-> { title, slug }, body, publishedAt}`;

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
  const postImageUrl = post.image
    ? urlFor(post.image)?.width(550).height(310).url()
    : null;

  return (
    <>
      <div className="w-full min-h-72 flex items-end not-prose rounded-md justify-center p-4 relative">
        {postImageUrl && (
          <img
            src={postImageUrl}
            alt={post.title}
            className="aspect-video rounded-xl"
            width="550"
            height="310"
          />
        )}
        <div className="w-full max-w-prose p-2 flex flex-row gap-2">
          <div className="flex flex-col gap-2">
            <h1 className="text-6xl">{post.title}</h1>
            <div className="flex flex-row gap-1">
              {post.tags &&
                (
                  post.tags as { title: string; slug: { current: string } }[]
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
      <Content>
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
