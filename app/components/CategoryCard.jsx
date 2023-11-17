"use client";

import { usePathname } from "next/navigation";
import React from "react";

const CategoryCard = () => {
  const pathName = usePathname();
  return (
    <div>
      <p>category card: {pathName}</p>
    </div>
  );
};

export default CategoryCard;
