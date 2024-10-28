import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useDataSpot } from "../../context/DataSpotContext";

export interface MemeSpotProps {
  data: string[];
  clickedItem: string;
}

const baseUrl = import.meta.env.VITE_APP_BASEURL;

export function VideoSpot() {
  const { selectedItem, playNext, playPrevious } = useDataSpot();

  return (
    <div className="sticky top-0 z-10 flex flex-col items-center justify-between w-full p-4 mt-6 shadow-xl shadow-buteco-dark bg-buteco-dark">
      <div className="flex flex-row items-center gap-2">
        <button
          onClick={playPrevious}
          className="hover:bg-buteco-lager active:bg-buteco-orange transition-all h-[10rem]"
        >
          <IoIosArrowBack size={42} />
        </button>
        <div className="flex flex-col items-center justify-between p-6 w-[46.5rem] h-[36rem] gap-2 border-4 border-[#6F767C] rounded-3xl bg-[#07131D]">
          <div className="w-full h-full max-h-[29.5rem]">
            <video
              controls
              autoPlay
              className="object-contain w-full h-full transition-all rounded-lg"
              src={`${baseUrl}/${selectedItem}`}
            />
          </div>
          <div className="flex justify-center w-full">
            <span className="text-base">{selectedItem}</span>
          </div>
        </div>
        <button
          onClick={playNext}
          className="hover:bg-buteco-lager active:bg-buteco-orange transition-all h-[10rem]"
        >
          <IoIosArrowForward size={42} />
        </button>
      </div>
      <h1 className="mt-5 text-5xl font-bold font-FigTree">Mais Vídeos</h1>
      <p className="text-[#999EA2] text-xl">
        Faça o seu vídeo meme e compartilhe com a comunidade!
      </p>
    </div>
  );
}
