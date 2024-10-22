import { createContext, ReactNode, useContext, useEffect, useState } from "react";
// import { getContent } from "../services/getContentData";

interface MemeSpotContextType {
  imgContent: string[];
  selectedItem: string;
  isClicked: boolean;
  isLoading: boolean;
  setData: (data: string[]) => void;
  arrowsClick: (clickedItem: string, forward: boolean) => void;
  handleCLick: (item: string) => void;
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
  const [imgContent, setImgContent] = useState<string[]>([]);
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
    setImgContent(data);
  }

  function setMemeSpotItem(clickedItem: string) {
    setIndexItem(imgContent.indexOf(clickedItem as string));
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
    if (forward) {
      const hasNext = indexItem + 1 > imgContent?.length - 1;
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      hasNext
        ? setMemeSpotItem(clickedItem)
        : setMemeSpotItem(
            imgContent?.find(
              (item: string) => imgContent?.indexOf(item) === indexItem + 1
            ) as string
          );
    } else {
      const hasBackward = indexItem - 1 < 0;
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      hasBackward
        ? setMemeSpotItem(clickedItem)
        : setMemeSpotItem(
            imgContent?.find(
              (item: string) => imgContent?.indexOf(item) === indexItem - 1
            ) as string
          );
    }
  }

  return (
    <MemeSpotContext.Provider
      value={{
        imgContent,
        selectedItem,
        isClicked,
        isLoading,
        setData,
        handleLoadingState,
        setMemeSpotItem,
        arrowsClick,
        handleCLick,
      }}
    >
      {children}
    </MemeSpotContext.Provider>
  );
}
