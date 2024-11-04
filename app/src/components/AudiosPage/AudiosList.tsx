import { Loading } from "../loading";
import { useDataSpot } from "../../context/DataSpotContext";

const baseUrl = import.meta.env.VITE_APP_BASEURL;

export function AudiosList() {
  const { dataContent, isLoading, handleCLick } = useDataSpot();

  const sliceSize = 35;

  return (
    <div className="flex flex-wrap items-center justify-center flex-1 max-w-6xl gap-4 py-4 mx-auto mt-8">
      {isLoading ? (
        <Loading />
      ) : (
        dataContent?.map((item: string) => {
          return (
            <div
              key={item}
              className="flex flex-col items-center justify-between h-36 p-4 w-[32rem] max-h-36 gap-2 border-4 border-[#6F767C] rounded-xl bg-[#07131D] hover:border-buteco-lager hover:cursor-pointer"
              onClick={() => handleCLick(item)}
            >
              <audio src={`${baseUrl}/${item}`} controls />
              <p className="flex justify-center w-full">
                {item.split(".")[0].length > sliceSize
                  ? item.slice(0, sliceSize - 15) +
                    "..." +
                    item.slice(item.length - sliceSize + 15, item.length)
                  : item}
              </p>
            </div>
          );
        })
      )}
    </div>
  );
}
