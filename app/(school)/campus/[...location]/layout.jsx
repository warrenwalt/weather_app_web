import React from "react";

const Layout = ({ children }) => {
  return (
    <div>
      <div>
        <h1>this is the header</h1>
        <div className="flex space-y-4">
          <p>one</p>
          <p>two</p>
          <p>three</p>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Layout;
