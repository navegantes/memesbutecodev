import { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface DataSpotContextType {
  dataContent: string[];
  selectedItem: string;
  isClicked: boolean;
  isLoading: boolean;
  indexItem: number;
  setData: (data: string[]) => void;
  handleCLick: (item: string) => void;
  setIndexItem: (index: number) => void;
  handleLoadingState: (value: boolean) => void;
  //
  isPlaying: boolean;
  setPlayingState: (state: boolean) => void;
  togglePlay: () => void;
  playNext: () => void;
  playPrevious: () => void;
  hasNext: boolean;
  hasPrevious: boolean;
}

const DataSpotContext = createContext({} as DataSpotContextType);

// eslint-disable-next-line react-refresh/only-export-components
export function useDataSpot() {
  const context = useContext(DataSpotContext);

  if (context === null) {
    throw new Error("useNavbar must be used within a MemeSpotProvider");
  }
  return context;
}

interface DataSpotProviderProps {
  children: ReactNode;
}

export function DataSpotProvider({ children }: DataSpotProviderProps) {
  const [dataContent, setDataContent] = useState<string[]>([]);
  const [selectedItem, setSelectedItem] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [indexItem, setIndexItem] = useState<number>(0);

  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    (async () => {
      handleLoadingState(false);
    })();
  }, []);

  function setData(data: string[]) {
    setDataContent(data);
  }

  function handleLoadingState(value: boolean) {
    setIsLoading(value);
  }

  function handleCLick(item: string) {
    setIsClicked(true);
    setIndexItem(dataContent.indexOf(item));
    setSelectedItem(item);
    setIsPlaying(true);
  }

  const hasPrevious = indexItem - 1 >= 0;
  const hasNext = indexItem + 1 < dataContent.length;

  function togglePlay() {
    setIsPlaying(!isPlaying);
  }

  function setPlayingState(state: boolean) {
    setIsPlaying(state);
  }

  function playNext() {
    if (hasNext) {
      setIndexItem(indexItem + 1);
      setSelectedItem(
        dataContent?.find(
          (item: string) => dataContent?.indexOf(item) === indexItem + 1
        ) as string
      );
    }
  }

  function playPrevious() {
    if (hasPrevious) {
      setIndexItem(indexItem - 1);
      setSelectedItem(
        dataContent?.find(
          (item: string) => dataContent?.indexOf(item) === indexItem - 1
        ) as string
      );
    }
  }

  const contexValues = {
    dataContent,
    selectedItem,
    isClicked,
    isLoading,
    indexItem,
    setData,
    handleLoadingState,
    setIndexItem,
    handleCLick,
    isPlaying,
    setPlayingState,
    togglePlay,
    playNext,
    playPrevious,
    hasNext,
    hasPrevious,
  };

  return (
    <DataSpotContext.Provider value={contexValues}>
      {children}
    </DataSpotContext.Provider>
  );
}
