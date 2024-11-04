import Slider from "rc-slider";
import { useDataSpot } from "../../context/DataSpotContext";
import {
  PiPauseFill,
  PiPlayFill,
  PiSkipBackFill,
  PiSkipForwardFill,
} from "react-icons/pi";
import { convertDurationToTimeString } from "../../utils/convertDurationToString";
import { MutableRefObject, useEffect } from "react";

// const baseUrl = import.meta.env.VITE_APP_BASEURL;

export function ControlPanel({
  mediaRef,
  progress,
  handleSeek,
}: {
  mediaRef: MutableRefObject<HTMLVideoElement> | MutableRefObject<HTMLAudioElement>;
  progress: number;
  handleSeek: (amount: number | number[]) => void;
}) {
  const { isPlaying, hasNext, hasPrevious, togglePlay, playNext, playPrevious } =
    useDataSpot();

  useEffect(() => {
    if (!mediaRef?.current) {
      return;
    }

    if (isPlaying) {
      mediaRef.current.play();
    } else {
      mediaRef.current.pause();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPlaying]);

  return (
    <footer className="w-full ">
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

      <div className="p-2">
        <Slider
          className="flex items-center h-1 bg-buteco-cream"
          max={Math.floor(mediaRef.current?.duration)}
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
            {convertDurationToTimeString(mediaRef?.current?.duration ?? 0)}
          </span>
        </div>
      </div>
    </footer>
  );
}
