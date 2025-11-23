import { client } from "@/sanity/lib/client";
import { SanityDocument } from "sanity";
import { CommandItem } from "./ui/command";
const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt, body}`;
const options = { next: { revalidate: 30 } };

export async function DynamicSearchEntries() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);
  return (
    <>
      {posts.map((post) => (
        <CommandItem className="cursor-pointer" key={post._id}>
          {post.title as string}
        </CommandItem>
      ))}
    </>
  );
}
