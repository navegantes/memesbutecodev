import { MutableRefObject, useRef, useState } from "react";

import { useDataSpot } from "../../context/DataSpotContext";
import { ControlPanel } from "../Media/ControlPanel";
import { SpotCloseButton } from "../Buttons/SpotCloseButton";

const baseUrl = import.meta.env.VITE_APP_BASEURL;

export function AudioPlayer() {
  const audioRef = useRef() as MutableRefObject<HTMLAudioElement>;
  const [progress, setProgress] = useState<number | number[]>(0);

  const { selectedItem, setPlayingState } = useDataSpot();

  function setupProgressListener() {
    audioRef.current.currentTime = 0;
    audioRef.current.addEventListener("timeupdate", () => {
      setProgress(audioRef.current.currentTime);
    });
  }

  function handleSeek(amount: number | number[]) {
    audioRef.current.currentTime = amount as number;
    setProgress(amount);
  }

  const sliceSize = 35;

  return (
    <div className="sticky top-0 z-10 flex flex-col items-center justify-between w-full p-4 mt-6 shadow-xl shadow-buteco-dark bg-buteco-dark">
      <div className="flex relative flex-col justify-center w-2/5 gap-2 px-4 bg-[#07131D] border-4 border-[#6F767C] rounded-xl">
        <SpotCloseButton />
        <p className="flex flex-col items-center mt-2">
          {selectedItem.split(".")[0].length > sliceSize
            ? selectedItem.slice(0, sliceSize - 15) +
              "..." +
              selectedItem.slice(
                selectedItem.length - sliceSize + 15,
                selectedItem.length
              )
            : selectedItem}
        </p>
        <ControlPanel
          mediaRef={audioRef}
          progress={progress as number}
          handleSeek={handleSeek}
        />
        <audio
          src={`${baseUrl}${selectedItem}`}
          ref={audioRef}
          autoPlay
          onPlay={() => setPlayingState(true)}
          onPause={() => setPlayingState(false)}
          onLoadedMetadata={setupProgressListener}
        />
      </div>
      <h1 className="mt-5 text-5xl font-bold font-FigTree">Outros Memes</h1>
      <p className="text-[#999EA2]">Veja todos os outros memes da galera!</p>
    </div>
  );
}
