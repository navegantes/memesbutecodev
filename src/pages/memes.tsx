/* eslint-disable @typescript-eslint/no-unused-expressions */
// import { getLinks } from "../crawler/crawler";

import { useEffect, useState } from "react";
import { Loading } from "../components/loading";
import { getContent } from "../services/getContentData";
import { FaArrowCircleUp } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// type DataType = {
//   audios: string[];
//   docs: string[];
//   images: string[];
//   videos: string[];
// };

export function Memes() {
  const [imgContent, setImgContent] = useState<string[]>();
  const [isLoading, setIsLoading] = useState(true);
  const [isClicked, setIsClicked] = useState(false);
  const [clickedItem, setClickedItem] = useState("");
  const [show, setShow] = useState(false);
  const [activeItemNum, setActiveItemNum] = useState<number | undefined>(0);

  const baseUrl = import.meta.env.VITE_APP_BASEURL;
  const sliceSize = 15;

  useEffect(() => {
    (async () => {
      const result = await getContent();
      const data = await result.json();

      setImgContent(data?.images);
      setIsLoading(false);
    })();

    window.addEventListener("scroll", () => {
      window.scrollY > 100 ? setShow(true) : setShow(false);
    });
  }, []);

  function handleCLick(item: string) {
    setIsClicked(true);
    setClickedItem(item);
    setActiveItemNum(imgContent?.indexOf(item));
    console.log(item.split(".")[0], activeItemNum, item);
  }

  const arrowsClick = (clickedItem: string, forward: boolean) => {
    const currItemNum = imgContent?.indexOf(clickedItem);
    setActiveItemNum(currItemNum);
    console.log(
      "Arrow: ",
      clickedItem.split(".")[0],
      imgContent?.indexOf(clickedItem),
      clickedItem,
      currItemNum
    );

    if (forward) {
      setActiveItemNum(activeItemNum + 1);
    } else {
      setActiveItemNum(activeItemNum - 1);
    }

    if (activeItemNum < 0 || activeItemNum > imgContent?.length - 1) {
      setClickedItem(clickedItem);
      setActiveItemNum(currItemNum);
    } else {
      setClickedItem(
        imgContent?.find(
          (item: string) => imgContent?.indexOf(item) === activeItemNum
        )
      );
    }
  };

  return (
    <section className="flex flex-col items-center justify-center">
      {show && (
        <a href="#" className="fixed flex right-10 bottom-4">
          <FaArrowCircleUp
            className="p-2 text-gray-500 rounded-full hover:text-buteco-orange"
            size={52}
          />
        </a>
      )}
      {isClicked ? (
        <div className="sticky top-0 flex flex-col items-center justify-between w-full p-4 mt-6 bg-buteco-dark">
          <div className="flex flex-row items-center gap-2">
            <IoIosArrowBack
              className="hover:bg-buteco-lager transition-all h-[10rem]"
              onClick={() => arrowsClick(clickedItem, false)}
              size={42}
            />
            <div className="flex flex-row items-center justify-between p-4 w-fit h-[32rem] gap-2 border-2 border-[#6F767C] rounded-3xl bg-[#07131D]">
              <img
                className="object-contain w-full h-full transition-all rounded-lg"
                src={`${baseUrl}${clickedItem}`}
              />
            </div>
            <IoIosArrowForward
              className="hover:bg-buteco-lager transition-all h-[10rem]"
              onClick={() => arrowsClick(clickedItem, true)}
              size={42}
            />
          </div>
          <h1 className="mt-5 text-5xl font-bold font-FigTree">Outros Memes</h1>
          <p className="text-[#999EA2]">Veja todos os outros memes da galera!</p>
        </div>
      ) : (
        <div className="flex flex-col items-center w-full">
          <h1 className="my-5 text-5xl font-bold font-FigTree">Memes da Galera</h1>
          <p className="text-[#999EA2]">
            Aqui você encontrará todos os memes da comunidade.
          </p>
        </div>
      )}

      <div className="flex flex-wrap items-center justify-center max-w-6xl gap-4 py-4 mt-8">
        {isLoading ? (
          <Loading />
        ) : (
          imgContent?.map((item: string) => {
            return (
              <div
                key={item}
                className="flex flex-row items-center justify-between h-36 p-4 w-[32rem] max-h-36 gap-2 border-2 border-[#6F767C] rounded-xl bg-[#07131D] hover:border-buteco-lager"
                onClick={() => handleCLick(item)}
              >
                <img
                  className="object-cover bg-slate-200 h-full transition rounded-lg hover:scale-[2.5] hover:w-fit hover:h-fit w-full max-w-32"
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
    </section>
  );
}
