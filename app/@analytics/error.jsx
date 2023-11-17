"use client";
import React from "react";

const Error = () => {
  return (
    <div className="p-2 border-2 border-black rounded-lg">
      <h1>somehting went wrong(analytics)</h1>
      <button className="rounded-lg bg-red-600 text-white px-3 py-1">
        Try again?
      </button>
    </div>
  );
};

export default Error;
