import {
  FilteredResponseQueryOptions,
  PortableText,
  type SanityDocument,
} from "next-sanity";
import { client } from "@/sanity/lib/client";
import { PostNavbar } from "@/components/navbar";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;

const options: FilteredResponseQueryOptions = {
  next: { revalidate: 30 },
};

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

  return (
    <>
      <PostNavbar title={post.title} />
      <article className="max-w-4xl w-full mx-auto border border-t-0 border-dashed p-4">
        <h1 className="text-4xl font-bold mb-8">{post.title}</h1>
        <div className="prose">
          <p>Published: {new Date(post.publishedAt).toLocaleDateString()}</p>
          {Array.isArray(post.body) && <PortableText value={post.body} />}
        </div>
      </article>
    </>
  );
}
