import React from "react";

const MusicPlayer = () => {
  return (
    <div className="relative sm:px-12 px-8 w-full flex justify-between items-center">
      <div> Track</div>
      <div className="flex-1 flex flex-col items-center justify-center">
        <div>controls</div>
        <div>bar</div>
        <div>player</div>
      </div>
      <div>volume</div>
    </div>
  );
};

export default MusicPlayer;
