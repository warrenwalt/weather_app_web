import React from "react";

const page = ({ params }) => {
  return (
    <div>
      <h1>Post</h1>
      <p>id of: {params.slug}</p>
    </div>
  );
};

export default page;
