import React from "react";

export const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const Page = async () => {
  await delay(3000);

  if (Math.random() < 0.5) {
    throw new Error("Oops! Something went wrong.");
  }

  console.log("done");

  return (
    <div className="font-bold border-2 border-black p-10">
      <h1>Analytics page</h1>
    </div>
  );
};

export default Page;
