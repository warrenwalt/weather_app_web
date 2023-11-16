import React from "react";

const layout = ({ children }) => {
  return (
    <>
      <div>layout for the entire post routes (and its sub-routes)</div>
      {children}
    </>
  );
};

export default layout;
