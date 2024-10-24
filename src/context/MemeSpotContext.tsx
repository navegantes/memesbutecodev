import { createContext, ReactNode, useContext, useEffect, useState } from "react";
// import { getContent } from "../services/getContentData";

interface MemeSpotContextType {
  dataContent: string[];
  selectedItem: string;
  isClicked: boolean;
  isLoading: boolean;
  indexItem: number;
  setData: (data: string[]) => void;
  arrowsClick: (clickedItem: string, forward: boolean) => void;
  handleCLick: (item: string) => void;
  setIndexItem: (index: number) => void;
  handleLoadingState: (value: boolean) => void;
  setMemeSpotItem: (clickedItem: string) => void;
}

const MemeSpotContext = createContext({} as MemeSpotContextType);

// eslint-disable-next-line react-refresh/only-export-components
export function useMemeSpot() {
  const context = useContext(MemeSpotContext);

  if (context === null) {
    throw new Error("useNavbar must be used within a MemeSpotProvider");
  }
  return context;
}

interface MemeSpotProviderProps {
  // data: string[];
  children: ReactNode;
}

export function MemeSpotProvider({ children }: MemeSpotProviderProps) {
  const [dataContent, setDataContent] = useState<string[]>([]);
  const [selectedItem, setSelectedItem] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [indexItem, setIndexItem] = useState<number>(0);

  useEffect(() => {
    (async () => {
      // const result = await getContent();
      // const data = await result.json();

      // setData(data?.images);
      handleLoadingState(false);
    })();
  }, []);

  function setData(data: string[]) {
    setDataContent(data);
  }

  function setMemeSpotItem(clickedItem: string) {
    setIndexItem(dataContent.indexOf(clickedItem as string));
    setSelectedItem(clickedItem);
  }

  function handleLoadingState(value: boolean) {
    setIsLoading(value);
  }

  function handleCLick(item: string) {
    setIsClicked(true);
    setMemeSpotItem(item);
  }

  function arrowsClick(clickedItem: string, forward: boolean) {
    console.log("ArrowCLICKED");
    if (forward) {
      const hasNext = indexItem + 1 > dataContent?.length - 1;
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      hasNext
        ? setMemeSpotItem(clickedItem)
        : setMemeSpotItem(
            dataContent?.find(
              (item: string) => dataContent?.indexOf(item) === indexItem + 1
            ) as string
          );
    } else {
      const hasBackward = indexItem - 1 < 0;
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      hasBackward
        ? setMemeSpotItem(clickedItem)
        : setMemeSpotItem(
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
    setMemeSpotItem,
    setIndexItem,
    arrowsClick,
    handleCLick,
  };

  return (
    <MemeSpotContext.Provider value={contexValues}>
      {children}
    </MemeSpotContext.Provider>
  );
}
