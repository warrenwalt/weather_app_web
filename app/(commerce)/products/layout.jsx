import React from "react";

const layout = ({ children }) => {
  return (
    <>
      <div className="text-4xl text-green-500">list of all the products</div>
      {children}
    </>
  );
};

export default layout;
