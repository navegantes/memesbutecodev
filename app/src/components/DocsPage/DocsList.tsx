import { Loading } from "../loading";
import { useDataSpot } from "../../context/DataSpotContext";
import pdfIcon from "../../assets/pdfIcon.png";
// import { lazy, Suspense } from "react";

// const MemeImg = lazy(() =>
//   import("./MemeImg").then((module) => ({ default: module.MemeImg }))
// );

const baseUrl = import.meta.env.VITE_APP_BASEURL;

export function DocsList() {
  const { dataContent, isLoading, selectedItem, handleCLick } = useDataSpot();

  const sliceSize = 25;

  return (
    <div className="flex flex-col items-center justify-start max-w-6xl gap-4 py-4 mx-auto mt-8">
      {isLoading ? (
        <Loading />
      ) : (
        dataContent?.map((item: string) => {
          return (
            <a
              key={item}
              // className="flex items-center justify-between"
              target="_blank"
              href={`${baseUrl}${selectedItem}`}
            >
              <div
                className="flex flex-row items-center justify-start p-4 w-[34rem] max-h-36 gap-6 border-4 border-[#6F767C] rounded-xl bg-[#07131D] hover:border-buteco-lager hover:cursor-pointer"
                onClick={() => handleCLick(item)}
              >
                <img className="h-24" src={pdfIcon} />
                <p className="flex justify-start w-full">
                  {item.split(".")[0].length > sliceSize
                    ? item.slice(0, sliceSize - 5) +
                      "..." +
                      item.slice(item.length - sliceSize + 5, item.length)
                    : item}
                </p>
              </div>
            </a>
          );
        })
      )}
    </div>
  );
}
