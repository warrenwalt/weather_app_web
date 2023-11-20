import React, { Suspense } from "react";
import { delay } from "../@analytics/page";
import TeamData from "../components/TeamData";

const Page = async () => {
  return (
    <div className="border-2 border-black p-10">
      <h1 className="font-bold">Teams page</h1>
      <Suspense fallback={<p>Loading list...</p>}>
        <TeamData />
      </Suspense>
    </div>
  );
};

export default Page;
