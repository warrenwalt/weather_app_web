"use client";
import React from "react";

const Error = ({ error, reset }) => {
  return (
    <div>
      <h1 className="font-extrabold text-3xl text-red-500">
        An error occured!
      </h1>
      {/* <p className="font-bold">{error}</p> */}
      <div className="flex">
        <p>
          please{" "}
          <button
            onClick={reset}
            className="px-3 py-2 bg-gray-500 rounded-2xl text-white"
          >
            try again
          </button>
        </p>
      </div>
    </div>
  );
};

export default Error;
