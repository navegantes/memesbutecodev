import { useEffect } from "react";
import { getContent } from "../services/getContentData";
import { useDataSpot } from "../context/DataSpotContext";
import { AudiosList } from "../components/AudiosPage/AudiosList";
import { AudioPlayer } from "../components/AudiosPage/AudioPlayer";

export function Audios() {
  const { isClicked, setData, handleLoadingState } = useDataSpot();

  useEffect(() => {
    (async () => {
      const result = await getContent();
      const data = await result.json();

      setData(data?.audios);
      handleLoadingState(false);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <section className="flex flex-col items-center justify-center">
      {isClicked ? (
        <AudioPlayer />
      ) : (
        <div className="flex flex-col items-center w-full">
          <h1 className="my-5 text-5xl font-bold font-FigTree">
            Audios da Comunidade
          </h1>
          <p className="text-[#999EA2] text-xl">
            Aqui você encontrará todos os audios da comunidade.
          </p>
        </div>
      )}

      <AudiosList />
    </section>
  );
}
