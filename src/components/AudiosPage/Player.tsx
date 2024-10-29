import { MutableRefObject, useEffect, useRef, useState } from "react";
import Slider from "rc-slider";

import {
  PiPlayFill,
  PiPauseFill,
  PiSkipBackFill,
  PiSkipForwardFill,
} from "react-icons/pi";

import { convertDurationToTimeString } from "../../utils/convertDurationToString";
import { useDataSpot } from "../../context/DataSpotContext";

const baseUrl = import.meta.env.VITE_APP_BASEURL;

export function Player() {
  const audioRef = useRef() as MutableRefObject<HTMLAudioElement>;
  const [progress, setProgress] = useState<number | number[]>(0);

  const {
    selectedItem,
    isPlaying,
    togglePlay,
    setPlayingState,
    playNext,
    playPrevious,
    hasNext,
    hasPrevious,
  } = useDataSpot();

  useEffect(() => {
    if (!audioRef.current) {
      return;
    }

    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  function setupProgressListener() {
    audioRef.current.currentTime = 0;
    audioRef.current.addEventListener("timeupdate", () => {
      setProgress(Math.floor(audioRef.current.currentTime));
    });
  }

  function handleSeek(amount: number | number[]) {
    audioRef.current.currentTime = amount as number;
    setProgress(amount);
  }

  return (
    <div className="sticky top-0 z-10 flex flex-col items-center justify-between w-full p-4 mt-6 shadow-xl shadow-buteco-dark bg-buteco-dark">
      <div className="flex flex-col justify-center w-2/5 gap-2 px-4 bg-[#07131D] border-4 border-[#6F767C] rounded-xl">
        <header className="flex flex-col items-center">
          <div className="my-2">
            {selectedItem ? (
              <strong>{selectedItem}</strong>
            ) : (
              <strong>Selecione um audio para ouvir</strong>
            )}
          </div>
        </header>

        <footer>
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
          <audio
            src={`${baseUrl}${selectedItem}`}
            ref={audioRef}
            autoPlay
            onPlay={() => setPlayingState(true)}
            onPause={() => setPlayingState(false)}
            onLoadedMetadata={setupProgressListener}
          />

          <div className="p-2">
            <Slider
              className="flex items-center h-1 bg-buteco-cream"
              max={Math.floor(audioRef.current?.duration)}
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
                {convertDurationToTimeString(audioRef.current?.duration ?? 0)}
              </span>
            </div>
          </div>
        </footer>
      </div>
      <h1 className="mt-5 text-5xl font-bold font-FigTree">Outros Memes</h1>
      <p className="text-[#999EA2]">Veja todos os outros memes da galera!</p>
    </div>
  );
}
