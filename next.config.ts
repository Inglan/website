import type { NextConfig } from "next";
import createMDX from "@next/mdx";
import { client } from "./sanity/lib/client";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  async redirects() {
    const redirects = await client.fetch(
      `*[_type == "redirect"]{
        "source":source.current,
        "destination":destination.current,
        permanent
      }`,
    );
    return redirects;
  },
};

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
});

export default withMDX(nextConfig);
