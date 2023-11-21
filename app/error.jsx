"use client";
import React from "react";

const Error = ({ reset, retry }) => {
  return (
    <div>
      <h1 className="text-red-500 font-bold">An error occured!</h1>
      <button className="px-2 py-1 gb-red-500 text-white">Try again</button>
    </div>
  );
};

export default Error;
