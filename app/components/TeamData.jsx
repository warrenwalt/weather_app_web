import React from "react";
import { delay } from "../@analytics/page";

const anaLists = ["tech", "hr", "projects", "QA", "business", "logistics"];

const TeamData = async () => {
  await delay(4000);

  return (
    <div>
      <div className="border-2 border-green-400 p-2 rounded-md">
        <ol>
          {anaLists.map((dep, index) => (
            <li key={index}>{dep}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default TeamData;
