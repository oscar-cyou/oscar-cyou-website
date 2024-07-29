"use client";
import { IPostWithSlug } from "@/types/posts";

export function PostContainer({ post }: { post: IPostWithSlug }) {
  return (
    <article>
      <p>{post.title}</p>
    </article>
  );
}
