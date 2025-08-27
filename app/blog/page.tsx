import Link from "next/link";
import { type SanityDocument } from "next-sanity";

import { client } from "@/sanity/lib/client";
import Posts from "./posts";

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt, description, tags[]-> { title } }`;

const options = { next: { revalidate: 30 } };

export default async function PostsIndexPage() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

  return <Posts posts={posts} />;
}
