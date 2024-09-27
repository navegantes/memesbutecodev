import { ButecosMoe } from "./BotSection/ButecosMoe";
import { Workshops } from "./Workshops";

import Squares from "./../../assets/bg/Squares.svg";
import Diamonds from "./../../assets/bg/Diamonds.svg";

export function ShowBusiness() {
  return (
    <section className="flex justify-center relative w-full px-8 py-8]">
      <div className="flex flex-col items-center justify-center w-full mt-20 bg-[#001221]">
        <span className="flex items-center mb-12 h-14 text-3xl font-extrabold text-transparent md:text-5xl font-FigTree bg-clip-text bg-gradient-to-r from-[#C13053] to-[#509AF4]">
          {"$NOSSAS->ATRAÇÕES;"}
        </span>
        <Workshops />
        <ButecosMoe />
      </div>

      <Squares className="absolute z-0 scale-125 right-16 top-1/3 text-[#313B43]" />
      <Diamonds className="absolute z-0 scale-150 top-48 left-24 text-[#313B43]" />
    </section>
  );
}
