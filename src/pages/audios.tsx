import { useEffect, useState } from "react";
import { getContent } from "../services/getContentData";
import { useDataSpot } from "../context/DataSpotContext";
import { FaArrowCircleUp } from "react-icons/fa";
import { AudiosList } from "../components/AudiosPage/AudiosList";
import { Player } from "../components/AudiosPage/Player";

export function Audios() {
  const [showToUpButton, setShowToUpButton] = useState(false);
  const { isClicked, setData, handleLoadingState } = useDataSpot();

  useEffect(() => {
    (async () => {
      const result = await getContent();
      const data = await result.json();

      setData(data?.audios);
      handleLoadingState(false);
    })();

    window.addEventListener("scroll", () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
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
        <Player />
      ) : (
        <div className="flex flex-col items-center w-full">
          <h1 className="my-5 text-5xl font-bold font-FigTree">
            Audios da Comunidade
          </h1>
          <p className="text-[#999EA2]">
            Aqui você encontrará todos os audios da comunidade.
          </p>
        </div>
      )}

      <AudiosList />
    </section>
  );
}
