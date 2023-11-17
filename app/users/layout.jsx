import React from "react";

const Layout = ({ children }) => {
  return (
    <div>
      {children}
      <footer className="border-2 border-black">users footer</footer>
    </div>
  );
};

export default Layout;
