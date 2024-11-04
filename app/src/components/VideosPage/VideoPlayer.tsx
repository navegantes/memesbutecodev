import { MutableRefObject, useRef, useState } from "react";
import { useDataSpot } from "../../context/DataSpotContext";

import { ControlPanel } from "../Media/ControlPanel";
import { SpotCloseButton } from "../Buttons/SpotCloseButton";

export interface MemeSpotProps {
  data: string[];
  clickedItem: string;
}

const baseUrl = import.meta.env.VITE_APP_BASEURL;

export function VideoPlayer() {
  const mediaRef = useRef() as MutableRefObject<HTMLVideoElement>;
  const [progress, setProgress] = useState<number | number[]>(0);

  const { selectedItem, setPlayingState } = useDataSpot();

  function setupProgressListener() {
    mediaRef.current.currentTime = 0;
    mediaRef.current?.addEventListener("timeupdate", () => {
      setProgress(mediaRef.current.currentTime);
    });
  }

  function handleSeek(amount: number | number[]) {
    mediaRef.current.currentTime = amount as number;
    setProgress(amount);
  }

  const sliceSize = 45;

  return (
    <div className="sticky top-0 z-10 flex flex-col items-center justify-between w-full p-4 mt-6 shadow-xl shadow-buteco-dark bg-buteco-dark">
      <div className="flex relative flex-col items-center gap-2 w-[46.5rem] h-[38rem] px-4 py-2 border-4 border-[#6F767C] rounded-3xl bg-[#07131D]">
        <SpotCloseButton />
        <p className="flex justify-center w-full">
          {selectedItem.split(".")[0].length > sliceSize
            ? selectedItem.slice(0, sliceSize - 15) +
              "..." +
              selectedItem.slice(
                selectedItem.length - sliceSize + 15,
                selectedItem.length
              )
            : selectedItem}
        </p>
        <div className="flex flex-col items-center">
          {selectedItem ? (
            <div className="max-h-[29.5rem]">
              <video
                ref={mediaRef}
                controls
                autoPlay
                onPlay={() => setPlayingState(true)}
                onPause={() => setPlayingState(false)}
                onLoadedMetadata={setupProgressListener}
                className="object-contain h-[26rem] transition-all rounded-lg"
                src={`${baseUrl}/${selectedItem}`}
              />
            </div>
          ) : (
            <strong>Selecione um audio para ouvir</strong>
          )}
        </div>

        <ControlPanel
          mediaRef={mediaRef as MutableRefObject<HTMLVideoElement>}
          progress={progress as number}
          handleSeek={handleSeek}
        />
      </div>
      <h1 className="mt-5 text-5xl font-bold font-FigTree">Mais Vídeos</h1>
      <p className="text-[#999EA2] text-xl">
        Faça o seu vídeo meme e compartilhe com a comunidade!
      </p>
    </div>
  );
}
