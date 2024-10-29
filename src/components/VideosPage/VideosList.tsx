import { Loading } from "../loading";
import { useDataSpot } from "../../context/DataSpotContext";

const baseUrl = import.meta.env.VITE_APP_BASEURL;

export function VideosList() {
  const { dataContent, isLoading, handleCLick } = useDataSpot();

  const sliceSize = 15;

  return (
    <>
      <div className="flex flex-wrap items-center justify-center max-w-6xl gap-4 py-4 mt-8">
        {isLoading ? (
          <Loading />
        ) : (
          dataContent?.map((item: string) => {
            return (
              <div
                key={item}
                className="flex flex-row items-center justify-between h-36 p-4 w-[32rem] max-h-36 gap-2 border-4 border-[#6F767C] rounded-xl bg-[#07131D] hover:border-buteco-lager hover:cursor-pointer"
                onClick={() => handleCLick(item)}
              >
                <video
                  controls
                  className="object-cover bg-slate-200 h-full transition rounded-lg hover:scale-[2.5] hover:w-fit hover:h-full w-full max-w-32"
                  src={`${baseUrl}/${item}`}
                />
                <p className="flex justify-center w-full">
                  {item.split(".")[0].length > sliceSize
                    ? item.slice(0, sliceSize - 5) +
                      "..." +
                      item.slice(item.length - sliceSize + 5, item.length)
                    : item}
                </p>
              </div>
            );
          })
        )}
      </div>
    </>
  );
}
