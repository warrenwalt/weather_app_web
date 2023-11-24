"use client";

import React, { useEffect, useRef } from "react";

const VideoPlayer = ({ src, isPlaying }) => {
  const ref = useRef(null);
  useEffect(() => {
    if (isPlaying) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  }, [isPlaying]);

  return (
    <div>
      <video
        className="w-1/5 h-1/5 rounded-xl"
        ref={ref}
        src={src}
        playsInline
        loop
      />
    </div>
  );
};

export default VideoPlayer;
