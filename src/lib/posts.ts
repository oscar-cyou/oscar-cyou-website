import { glob } from "fast-glob";

import { IBlogModule, IPostWithSlug } from "@/types/posts";

async function formatPostData(mdxFilePath: string): Promise<IPostWithSlug> {
  const { post } = (await import(`../app/blog/${mdxFilePath}`)) as IBlogModule;

  return {
    slug: mdxFilePath.replace(/\/page\.mdx$|\.mdx$/, ""),
    ...post,
  };
}

export async function getAllPosts() {
  const allMdxFilePaths = await glob("*/page.mdx", {
    cwd: "./src/app/blog",
  });

  const posts = await Promise.all(allMdxFilePaths.map(formatPostData));

  return posts.sort((a, b) => +new Date(b.date) - +new Date(a.date));
}
