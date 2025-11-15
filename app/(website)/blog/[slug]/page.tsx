import {
  FilteredResponseQueryOptions,
  PortableText,
  type SanityDocument,
} from "next-sanity";
import { client } from "@/sanity/lib/client";
import { PostNavbar } from "@/components/navbar";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import imageUrlBuilder from "@sanity/image-url";
import urlBuilder from "@sanity/image-url";
import { getImageDimensions } from "@sanity/asset-utils";
import Image from "next/image";
import clsx from "clsx";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;

const options: FilteredResponseQueryOptions = {
  next: { revalidate: 30 },
  cache: "no-cache",
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
      <article className="max-w-4xl w-full mx-auto border border-t-0 border-dashed">
        <div className="w-full mx-auto flex h-fit p-4 border-b border-dashed flex-col gap-2">
          <h1 className="text-6xl text-primary">{post.title}</h1>
          <p>Published: {new Date(post.publishedAt).toLocaleDateString()}</p>
        </div>
        <div className="prose max-w-full p-4">
          {Array.isArray(post.body) && (
            <PortableText
              components={{
                types: {
                  image: ({ value, isInline }) => {
                    const { width, height } = getImageDimensions(value);
                    return (
                      <Image
                        src={urlBuilder(client)
                          .image(value)
                          .width(isInline ? 100 : 800)
                          .fit("max")
                          .auto("format")
                          .url()}
                        alt={value.alt || " "}
                        width={width}
                        height={height}
                        className={clsx(!isInline && "w-full")}
                        style={{
                          // Display alongside text if image appears inside a block text span
                          display: isInline ? "inline-block" : "block",

                          // Avoid jumping around with aspect-ratio CSS property
                          aspectRatio: width / height,
                        }}
                      />
                    );
                  },
                },
              }}
              value={post.body}
            />
          )}
        </div>
      </article>
    </>
  );
}
