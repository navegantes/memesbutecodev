import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useMemeSpot } from "../../context/MemeSpotContext";

export interface MemeSpotProps {
  data: string[];
  clickedItem: string;
}

const baseUrl = import.meta.env.VITE_APP_BASEURL;

export function AudioSpot() {
  const { selectedItem, arrowsClick } = useMemeSpot();

  return (
    <>
      <div className="sticky top-0 flex flex-col items-center justify-between w-full p-4 mt-6 shadow-xlg shadow-buteco-dark bg-buteco-dark">
        <div className="flex flex-row items-center gap-2">
          <IoIosArrowBack
            className="hover:bg-buteco-lager transition-all h-[10rem]"
            onClick={() => arrowsClick(selectedItem, false)}
            size={42}
          />
          <div className="flex flex-col items-center justify-between p-6 w-[46.5rem] h-[36rem] gap-2 border-4 border-[#6F767C] rounded-3xl bg-[#07131D]">
            <div className="w-full h-full max-h-[29.5rem]">
              <audio
                controls
                className="object-contain w-full h-full transition-all rounded-lg"
                src={`${baseUrl}${selectedItem}`}
              />
            </div>
            <div className="flex justify-center w-full">
              <span className="text-base">{selectedItem}</span>
            </div>
          </div>
          <IoIosArrowForward
            className="hover:bg-buteco-lager transition-all h-[10rem]"
            onClick={() => arrowsClick(selectedItem, true)}
            size={42}
          />
        </div>
        <h1 className="mt-5 text-5xl font-bold font-FigTree">Outros Memes</h1>
        <p className="text-[#999EA2]">Veja todos os outros memes da galera!</p>
      </div>
    </>
  );
}
