import { useSelector } from "react-redux";
import Track from "./Track";

const MusicPlayer = () => {
  const { isActive, isPlaying, activeSong } = useSelector(
    (state) => state.player
  );

  return (
    <div className="relative sm:px-12 px-8 w-full flex justify-between items-center">
      <Track
        isPlaying={isPlaying}
        isActive={isActive}
        activeSong={activeSong}
      />
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
