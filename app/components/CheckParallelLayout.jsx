"use client";

import { useSelectedLayoutSegment } from "next/navigation";
import React from "react";

const CheckParallelLayout = () => {
  const segment = useSelectedLayoutSegment("analytics");
  console.log(segment, "😎");
  return;
};

export default CheckParallelLayout;
