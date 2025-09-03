import Link from "next/link";
import { type SanityDocument } from "next-sanity";

import { client } from "@/sanity/lib/client";
import Posts from "../../posts";
import { Metadata } from "next";

const TAG_QUERY = `*[
  _type == "postTag"
  && slug.current == $slug
][0]{_id, title, "posts": *[_type == "post" && references(^._id)]{_id, title, slug, publishedAt, description, tags[]-> { title }}}`;
const options = { next: { revalidate: 30 } };

export const metadata: Metadata = {
  title: "Blog",
};

export default async function TagIndexPage({
  params,
}: {
  params: Promise<{ tag: string }>;
}) {
  const tag = await client.fetch<SanityDocument>(
    TAG_QUERY,
    { slug: (await params).tag },
    options,
  );

  // return <div>{JSON.stringify(tag)}</div>;
  return <Posts posts={tag.posts} tag={tag.title} />;
}
