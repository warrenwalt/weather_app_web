"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const layout = async ({ children }) => {
  const pathName = usePathname();
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const categories = await response.json();
  return (
    <div>
      <div>Categories page</div>
      <p>list of Categories</p>

      {categories.map((cat) => (
        <Link
          href={`/categories/${cat.username}`}
          className={
            pathName == `/categories/${cat.username}`
              ? "flex flex-col underline text-orange-600"
              : "flex flex-col underline text-green-600"
          }
          key={cat.id}
        >
          {cat.name}
        </Link>
      ))}
      {children}
    </div>
  );
};

export default layout;
