"use client";

import React, { useEffect } from "react";

const Error = ({ error, reset }) => {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);
  return (
    <div>
      <h2 className="font-bold">Something went wrong</h2>
      <button
        className="bg-red-400 text-white px-2 py-1"
        onClick={() => {
          reset();
          console.log("reset clicked");
        }}
      >
        Try again?
      </button>
    </div>
  );
};

export default Error;
