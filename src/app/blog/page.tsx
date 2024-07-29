import { PostContainer } from "@/components/post-container";
import { getAllPosts } from "@/lib/posts";

export default async function Blog() {
  const posts = await getAllPosts();

  return (
    <div>
      <h1>blog</h1>
      {posts.map((post) => (
        <PostContainer key={post.slug} post={post} />
      ))}
    </div>
  );
}
