import { IoCloseCircle } from "react-icons/io5";
import { useDataSpot } from "../../context/DataSpotContext";

export function SpotCloseButton() {
  const { setIsClicked } = useDataSpot();

  return (
    <button
      className="absolute transition-all opacity-5 hover:text-buteco-pilsen hover:opacity-100 active:text-buteco-orange right-2 top-2"
      onClick={() => setIsClicked(false)}
    >
      <IoCloseCircle className="size-10" />
    </button>
  );
}
