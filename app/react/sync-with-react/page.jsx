"use client";

import VideoPlayer from "@/app/components/VideoPlayer";
import React, { useState } from "react";

const SyncWithReact = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div>
      <h1 className="font-bold text-3xl">sync with react tutorial</h1>
      <div>
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="bg-purple-600 rounded-xl hover:bg-purple-400 px-4 py-2 text-white"
        >
          {isPlaying ? "Pause" : "Play"}
        </button>
        <VideoPlayer
          src={
            "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          }
          isPlaying={isPlaying}
        />
      </div>
    </div>
  );
};

export default SyncWithReact;
