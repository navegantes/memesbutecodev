/* eslint-disable @typescript-eslint/no-unused-expressions */

import { useEffect, useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import { useDataSpot } from "../context/DataSpotContext";
import { getContent } from "../services/getContentData";
import { VideosList } from "../components/VideosPage/VideosList";
import { VideoPlayer } from "../components/VideosPage/VideoPlayer";

export function Videos() {
  const [showToUpButton, setShowToUpButton] = useState(false);

  const { isClicked, setData, handleLoadingState } = useDataSpot();

  useEffect(() => {
    (async () => {
      const result = await getContent();
      const data = await result.json();

      setData(data?.videos);
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
        <VideoPlayer />
      ) : (
        <div className="flex flex-col items-center w-full">
          <h1 className="my-5 text-5xl font-bold font-FigTree">
            Vídeos da Comunidade
          </h1>
          <p className="text-[#999EA2] text-xl">
            Aqui você encontrará toda a criatividade em formato de vídeo produzido na
            comunidade.
          </p>
        </div>
      )}

      <VideosList />
    </section>
  );
}
