import React from "react";

const layout = ({ children }) => {
  return (
    <>
      {children}
      <footer className="flex space-x-3 mt-4">
        <div className="border-black border-4 p-3">section a of footer</div>
        <div className="border-black border-4 p-3">section b of footer</div>
      </footer>
    </>
  );
};

export default layout;
