"use server";

import LocationCard from "@/app/components/LocationCard";
import React, { Suspense } from "react";

const page = ({ params }) => {
  return (
    <>
      <Suspense>
        <div className="mt-5">
          <h1 className="text-xl font-bold">You are in this location:</h1>
          {params.location.map((loc, index) => (
            <p className="border-2 border-black" key={index}>
              {loc}
            </p>
          ))}
        </div>
      </Suspense>
      <Suspense fallback={<p>Loading. Pleas be patient...</p>}>
        <LocationCard />
      </Suspense>
    </>
  );
};

export default page;
