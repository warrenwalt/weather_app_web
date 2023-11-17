import PostCard from "@/app/components/PostCard";
import Link from "next/link";
import React, { Suspense } from "react";

const page = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  });
  const allPosts = await response.json();
  const posts = allPosts.slice(0, 10);
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <div>
        <h1 className="text-4xl text-blue-600">An array of blogs</h1>
        <ul className="flex flex-col space-y-2">
          {posts.map((post) => (
            <Link href={`/posts/${post.id}`} key={post.id}>
              <PostCard key={post.key} title={post.title} body={post.body} />
            </Link>
          ))}
        </ul>
      </div>
    </Suspense>
  );
};

export default page;
