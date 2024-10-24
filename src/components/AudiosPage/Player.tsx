import { MutableRefObject, useEffect, useRef, useState } from "react";
// import Image from "next/image";
import { usePlayer } from "../../context/PlayerContext";
import Slider from "rc-slider";

import {
  PiPlayFill,
  PiPauseFill,
  PiSkipBackFill,
  PiSkipForwardFill,
  // PiShuffleBold,
  // PiRepeatBold,
} from "react-icons/pi";

// import "rc-slider/assets/index.css";
// import styles from "./styles.module.scss";
import { convertDurationToTimeString } from "../../utils/convertDurationToString";
import { useMemeSpot } from "../../context/MemeSpotContext";

const baseUrl = import.meta.env.VITE_APP_BASEURL;

export function Player() {
  const audioRef = useRef() as MutableRefObject<HTMLAudioElement>;
  const { selectedItem, isClicked } = useMemeSpot();
  const [progress, setProgress] = useState(0);

  const {
    isPlaying,
    // currentAudioIndex,
    togglePlay,
    setPlayingState,
    playNext,
    playPrevious,
    hasNext,
    hasPrevious,
  } = usePlayer();

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
    audioRef.current?.addEventListener("timeupdate", () => {
      setProgress(Math.floor(progress));
    });
  }

  function handleSeek(amount: number | number[]) {
    audioRef.current.currentTime = amount as number;
    setProgress(amount as number);
  }

  // function handleEpisodeEnded() {
  //   if (hasNext) {
  //     playNext();
  //   } else {
  //     clearPlayerState();
  //   }
  // }

  const audio = {
    title: selectedItem,
    duration: audioRef.current?.duration,
    src: `${baseUrl}${selectedItem}`,
  };
  //audioList[currentAudioIndex];

  return (
    <div className="w-full">
      <header className="flex flex-col items-center">
        <div className="my-2">
          {audio ? (
            <strong>{audio.title}</strong>
          ) : (
            <strong>Selecione um audio para ouvir</strong>
          )}
        </div>
      </header>

      {/* <footer className={!audio ? "border " : "border-2"}> */}
      <footer>
        <div className="flex justify-center gap-4 my-2 ">
          <button
            className={`${
              !audio || !hasPrevious
                ? "text-slate-600"
                : "hover:text-buteco-orange text-buteco-cream"
            }`}
            type="button"
            onClick={playPrevious}
            disabled={!audio || !hasPrevious}
          >
            <PiSkipBackFill size={42} />
          </button>
          <button
            type="button"
            // disabled={!episode}
            onClick={togglePlay}
          >
            {isPlaying ? (
              <PiPauseFill
                className="text-buteco-cream hover:text-buteco-orange"
                size={42}
              />
            ) : (
              <PiPlayFill
                className="text-buteco-cream hover:text-buteco-orange"
                size={42}
              />
            )}
          </button>
          <button
            className={`${
              !audio || !hasNext
                ? "text-slate-600"
                : "hover:text-buteco-orange text-buteco-cream"
            }`}
            type="button"
            onClick={playNext}
            disabled={!audio || !hasNext}
          >
            <PiSkipForwardFill size={42} />
          </button>

          {/* <div className="flex flex-col gap-1">
            <button
              type="button"
              disabled={!audio}
              onClick={toggleLoop}
              className={isLooping ? "border " : ""}
            >
              <PiRepeatBold
                className="text-buteco-cream hover:text-buteco-orange"
                size={18}
              />
            </button>
            <button
              type="button"
              // disabled={!episode || audioList.length === 1}
              // onClick={toggleShuffle}
              className={isShuffling ? "border " : ""}
            >
              <PiShuffleBold
                className="text-buteco-cream hover:text-buteco-orange"
                size={18}
              />
            </button>
          </div> */}
        </div>
        {audio && (
          <audio
            src={audio.src} //{episode.url}
            ref={audioRef}
            autoPlay={isClicked}
            // onEnded={handleEpisodeEnded}
            // loop={isLooping}
            onPlay={() => setPlayingState(true)}
            onPause={() => setPlayingState(false)}
            onLoadedMetadata={setupProgressListener}
          />
        )}

        <div className="p-2">
          {/* <div className="mt-2 mb-2"> */}
          {audio ? (
            <Slider
              className="flex items-center h-1 bg-buteco-cream"
              max={audio.duration}
              value={progress}
              onChange={handleSeek}
              styles={{
                track: { backgroundColor: "#ff8400", height: 4 },
                handle: {
                  borderColor: "#ff8400",
                  borderWidth: 12,
                  borderRadius: 50,
                  height: 24,
                  width: 24,
                },
                rail: { backgroundColor: "#fff", borderColor: "#9f75ff" },
              }}
            />
          ) : (
            <div className=""> </div>
          )}
          {/* </div> */}
          <div className="flex justify-center w-full mt-4">
            <span>{convertDurationToTimeString(progress)}</span>
            <span> / </span>
            <span>
              {convertDurationToTimeString(audioRef.current?.duration ?? 0)}
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
