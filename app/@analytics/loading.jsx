import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const Loading = () => {
  return (
    <div className="">
      {/* <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <Skeleton containerClassName="flex-1" />
      </SkeletonTheme> */}
      <h1 className="font-bold">Loading...</h1>
      <small className="text-sm font-lightweight">
        hopefully not for long :)
      </small>
    </div>
  );
};

export default Loading;
