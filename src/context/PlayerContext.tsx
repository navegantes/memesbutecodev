import { createContext, useState, ReactNode, useContext, useEffect } from "react";
import { useMemeSpot } from "./MemeSpotContext";

type AudioFile = {
  title: string;
  // members: string;
  // thumbnail: string;
  duration: number;
  src: string;
};

type PlayerContextData = {
  audioList: AudioFile[];
  currentAudioIndex: number;
  isPlaying: boolean;
  // isLooping: boolean;
  // isShuffling: boolean;
  play: (audio: AudioFile) => void;
  playList: (list: AudioFile[], index: number) => void;
  setPlayingState: (state: boolean) => void;
  togglePlay: () => void;
  // toggleLoop: () => void;
  // toggleShuffle: () => void;
  playNext: () => void;
  playPrevious: () => void;
  // clearPlayerState: () => void;
  hasNext: boolean;
  hasPrevious: boolean;
};

export const PlayerContext = createContext({} as PlayerContextData);

type PlayerContextProviderProps = {
  children: ReactNode;
};

// eslint-disable-next-line react-refresh/only-export-components
export const usePlayer = () => {
  const context = useContext(PlayerContext);

  if (context === null) {
    throw new Error("useNavbar must be used within a MemeSpotProvider");
  }
  return context;
};

const baseUrl = import.meta.env.VITE_APP_BASEURL;

export function PlayerContentProvider({ children }: PlayerContextProviderProps) {
  const [audioList, setAudioList] = useState<AudioFile[]>([]);
  const [currentAudioIndex, setCurrentAudioIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  // const [isLooping, setIsLooping] = useState(false);
  // const [isShuffling, setIsShuffling] = useState(false);
  const { dataContent, selectedItem, arrowsClick, setIndexItem, indexItem } =
    useMemeSpot();

  useEffect(() => {
    setAudioList(
      dataContent.map((item) => {
        return {
          title: item,
          duration: 0,
          src: `${baseUrl}${item}`,
        };
      }) as AudioFile[]
    );
  }, []);

  function play(audio: AudioFile) {
    setAudioList([audio]);
    setCurrentAudioIndex(0);
    setIsPlaying(true);
  }

  function playList(list: AudioFile[], index: number) {
    setAudioList(list);
    setCurrentAudioIndex(index);
    setIsPlaying(true);
  }

  function togglePlay() {
    setIsPlaying(!isPlaying);
  }

  // function toggleLoop() {
  //   setIsLooping(!isLooping);
  // }

  // function toggleShuffle() {
  //   setIsShuffling(!isShuffling);
  // }

  function setPlayingState(state: boolean) {
    setIsPlaying(state);
  }

  // function clearPlayerState() {
  //   setAudioList([]);
  //   setCurrentEpisodeIndex(0);
  // }

  const hasPrevious = currentAudioIndex > 0 || indexItem > 0;
  // const hasNext = isShuffling || currentEpisodeIndex + 1 < episodeList.length;
  const hasNext =
    currentAudioIndex + 1 < audioList.length || indexItem + 1 < audioList.length;

  function playNext() {
    // if (isShuffling) {
    //   const nextRandomEpisodeIndex = Math.floor(Math.random() * episodeList.length);
    //   setCurrentEpisodeIndex(nextRandomEpisodeIndex);
    // } else
    if (hasNext) {
      setCurrentAudioIndex(currentAudioIndex + 1);
      setIndexItem(currentAudioIndex + 1);
    }
    console.log("AudioNext: ", selectedItem, "Index: ", currentAudioIndex);
    arrowsClick(selectedItem, true);
  }

  function playPrevious() {
    console.log("AudioPrev: ", selectedItem, "Index: ", currentAudioIndex);
    if (hasPrevious) {
      setCurrentAudioIndex(currentAudioIndex - 1);
      setIndexItem(currentAudioIndex - 1);
    }
    arrowsClick(selectedItem, false);
  }

  return (
    <PlayerContext.Provider
      value={{
        audioList,
        currentAudioIndex,
        play,
        playList,
        playNext,
        playPrevious,
        isPlaying,
        // isLooping,
        // isShuffling,
        togglePlay,
        // toggleLoop,
        // toggleShuffle,
        setPlayingState,
        hasNext,
        hasPrevious,
        // clearPlayerState,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
}
