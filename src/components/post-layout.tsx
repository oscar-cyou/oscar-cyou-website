"use client";
import { IPost } from "@/types/posts";

export function PostLayout({
  post,
  children,
}: {
  post: IPost;
  children: React.ReactNode;
}) {
  return (
    <article>
      <h1>{post.title}</h1>
      <time dateTime={post.date} />
      <div data-mdx-content>{children}</div>
    </article>
  );
}
