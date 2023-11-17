import React from "react";

const page = ({ params }) => {
  return (
    <div>
      <h1>
        Your in whaterver room based on these multi-slug(catch-all segments):
      </h1>
      <p>Welcome</p>
      <ol>
        {params.slug.map((slg, index) => (
          <li key={index}>
            {index} - {slg}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default page;
