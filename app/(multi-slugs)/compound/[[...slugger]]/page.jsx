import React from "react";

const page = ({ params }) => {
  console.log(params);
  return (
    <div>
      <h1>Default compound page</h1>
      {params.slugger &&
        params.slugger.map((slg, index) => <p key={index}>{slg}</p>)}
    </div>
  );
};

export default page;
