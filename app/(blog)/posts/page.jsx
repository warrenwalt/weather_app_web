import Link from "next/link";
import React from "react";

const page = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  });
  const allPosts = await response.json();
  const posts = allPosts.slice(0, 10);
  return (
    <div>
      <h1 className="text-4xl text-blue-600">An array of blogs</h1>
      <ul className="flex flex-col space-y-2">
        {posts.map((post) => (
          <li className="border-2 border-black" key={post.key}>
            <b className="border-2" key={post.id}>
              {post.title}
            </b>
            <Link href={`/posts/${post.id}`} key={post.id}>
              view post
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default page;
