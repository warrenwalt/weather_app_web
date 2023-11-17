import ProductCard from "@/app/components/ProductCard";
import React from "react";

const layout = ({ children }) => {
  return (
    <>
      <div className="text-3xl text-green-700">Am individual product </div>
      <ProductCard />
      {children}
    </>
  );
};

export default layout;
