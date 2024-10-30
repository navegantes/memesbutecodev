import { useEffect } from "react";
import { MemeSpot } from "../components/MemesPage/MemeSpot";
import { MemesList } from "../components/MemesPage/MemesList";
import { useDataSpot } from "../context/DataSpotContext";
import { getContent } from "../services/getContentData";

export function Memes() {
  const { isClicked, setData, handleLoadingState } = useDataSpot();

  useEffect(() => {
    (async () => {
      const result = await getContent();
      const data = await result.json();

      setData(data?.images);
      handleLoadingState(false);
    })();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="flex flex-col items-center justify-center">
      {isClicked ? (
        <MemeSpot />
      ) : (
        <div className="flex flex-col items-center w-full">
          <h1 className="my-5 text-5xl font-bold font-FigTree">Memes da Galera</h1>
          <p className="text-[#999EA2] text-xl">
            Aqui você encontrará todos os memes da comunidade.
          </p>
        </div>
      )}

      <MemesList />
    </section>
  );
}
