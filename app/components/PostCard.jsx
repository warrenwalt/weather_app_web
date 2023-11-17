"use client";

import React from "react";

const PostCard = (props) => {
  return (
    <div className="flex flex-col space-y-3 shadow-xl py-4">
      <h1 className="text-2xl font-bold">{props.title}</h1>
      {/* <p>{props.body}</p> */}
    </div>
  );
};

export default PostCard;
