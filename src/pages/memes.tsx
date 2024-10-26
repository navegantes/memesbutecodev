/* eslint-disable @typescript-eslint/no-unused-expressions */

import { useEffect, useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import { MemeSpot } from "../components/MemesPage/MemeSpot";
import { MemesList } from "../components/MemesPage/MemesList";
import { useDataSpot } from "../context/DataSpotContext";
import { getContent } from "../services/getContentData";

export function Memes() {
  const [showToUpButton, setShowToUpButton] = useState(false);

  const { isClicked, setData, handleLoadingState } = useDataSpot();

  useEffect(() => {
    (async () => {
      const result = await getContent();
      const data = await result.json();

      setData(data?.images);
      handleLoadingState(false);
    })();

    window.addEventListener("scroll", () => {
      window.scrollY > 100 ? setShowToUpButton(true) : setShowToUpButton(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="flex flex-col items-center justify-center">
      {showToUpButton && (
        <a href="#" className="fixed flex right-10 bottom-4">
          <FaArrowCircleUp
            className="p-2 text-gray-500 rounded-full hover:text-buteco-orange"
            size={52}
          />
        </a>
      )}

      {isClicked ? (
        <MemeSpot />
      ) : (
        <div className="flex flex-col items-center w-full">
          <h1 className="my-5 text-5xl font-bold font-FigTree">Memes da Galera</h1>
          <p className="text-[#999EA2]">
            Aqui você encontrará todos os memes da comunidade.
          </p>
        </div>
      )}

      <MemesList />
    </section>
  );
}
