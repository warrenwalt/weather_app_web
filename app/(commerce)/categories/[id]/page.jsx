import CategoryCard from "@/app/components/CategoryCard";
import React from "react";

const page = ({ params }) => {
  return (
    <div>
      <p>
        A category: <b>{params.id}</b>
      </p>
      <CategoryCard />
    </div>
  );
};

export default page;
