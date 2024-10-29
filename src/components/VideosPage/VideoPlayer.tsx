import { useEffect, useRef, useState } from "react";
import { useDataSpot } from "../../context/DataSpotContext";
import {
  PiPauseFill,
  PiPlayFill,
  PiSkipBackFill,
  PiSkipForwardFill,
} from "react-icons/pi";
import Slider from "rc-slider";
import { convertDurationToTimeString } from "../../utils/convertDurationToString";

export interface MemeSpotProps {
  data: string[];
  clickedItem: string;
}

const baseUrl = import.meta.env.VITE_APP_BASEURL;

export function VideoPlayer() {
  const mediaRef = useRef<HTMLVideoElement | null>(null);
  const [progress, setProgress] = useState<number | number[]>(0);

  const {
    selectedItem,
    hasPrevious,
    hasNext,
    isPlaying,
    togglePlay,
    setPlayingState,
    playNext,
    playPrevious,
  } = useDataSpot();

  useEffect(() => {
    if (!mediaRef.current) {
      return;
    }

    if (isPlaying) {
      mediaRef.current.play();
    } else {
      mediaRef.current.pause();
    }
  }, [isPlaying]);

  function setupProgressListener() {
    mediaRef.current.currentTime = 0;
    mediaRef.current?.addEventListener("timeupdate", () => {
      setProgress(Math.floor(mediaRef.current.currentTime));
    });
  }

  function handleSeek(amount: number | number[]) {
    mediaRef.current.currentTime = amount as number;
    setProgress(amount);
  }

  const sliceSize = 45;

  return (
    <div className="sticky top-0 z-10 flex flex-col items-center justify-between w-full p-4 mt-6 shadow-xl shadow-buteco-dark bg-buteco-dark">
      <div className="flex flex-col items-center gap-2 w-[46.5rem] h-[38rem] ">
        <div className="flex flex-col items-center justify-between pt-2 px-6 border-4 border-[#6F767C] rounded-3xl w-full h-full bg-[#07131D]">
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
          <header className="flex flex-col items-center">
            <div className="my-2">
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
          </header>
          <div className="flex flex-col items-center justify-between w-full">
            <div className="w-full p-2">
              <Slider
                className="flex items-center w-full h-1 bg-buteco-cream"
                max={Math.floor(mediaRef.current?.duration as number)}
                value={progress}
                onChange={handleSeek}
                styles={{
                  track: {
                    backgroundColor: "#ff8400",
                    height: 4,
                  },
                  handle: {
                    backgroundColor: "#ff8400",
                    borderRadius: 50,
                    height: 28,
                    width: 28,
                    transform: "translateX(0%)",
                  },
                  rail: {},
                }}
              />
              <div className="flex justify-center w-full mt-4">
                <span>{convertDurationToTimeString(progress as number)}</span>
                <span> / </span>
                <span>
                  {convertDurationToTimeString(mediaRef.current?.duration ?? 0)}
                </span>
              </div>
            </div>
            <div className="flex justify-center gap-4 my-2 ">
              <button
                className={`${
                  hasPrevious
                    ? "hover:text-buteco-lager active:text-buteco-orange text-buteco-cream"
                    : "text-slate-600"
                }`}
                type="button"
                onClick={playPrevious}
                disabled={!hasPrevious}
              >
                <PiSkipBackFill size={42} />
              </button>
              <button type="button" onClick={togglePlay}>
                {isPlaying ? (
                  <PiPauseFill
                    className="text-buteco-cream hover:text-buteco-lager active:text-buteco-orange"
                    size={42}
                  />
                ) : (
                  <PiPlayFill
                    className="text-buteco-cream hover:text-buteco-lager active:text-buteco-orange"
                    size={42}
                  />
                )}
              </button>
              <button
                className={`${
                  hasNext
                    ? "hover:text-buteco-lager active:text-buteco-orange text-buteco-cream"
                    : "text-slate-600"
                }`}
                type="button"
                onClick={playNext}
                disabled={!hasNext}
              >
                <PiSkipForwardFill size={42} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <h1 className="mt-5 text-5xl font-bold font-FigTree">Mais Vídeos</h1>
      <p className="text-[#999EA2] text-xl">
        Faça o seu vídeo meme e compartilhe com a comunidade!
      </p>
    </div>
  );
}
