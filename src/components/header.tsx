import ButecoLogo from "../assets/logoRet3.svg";
import { HiLightBulb } from "react-icons/hi";
import { Bounce, toast, ToastContainer } from "react-toastify";
import ChipTabs from "./ChipTabs";
import { useEffect, useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
// import { SlideTabs } from "./SlideTab";

export function Header() {
  const [showToUpButton, setShowToUpButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShowToUpButton(true);
      } else {
        setShowToUpButton(false);
      }
    });
  }, []);

  return (
    <header className="flex flex-row items-center justify-center gap-6 p-4 mb-6 border-b-2 border-b-buteco-lager bg-[#07131D]">
      <div className="flex w-40 -translate-y-2 -rotate-[16deg] h-18 cursor-pointer">
        <a href="/">
          <ButecoLogo />
        </a>
      </div>

      <ChipTabs />
      {/* <SlideTabs /> */}

      <div>
        <button
          className="flex flex-row items-center justify-center"
          onClick={() => {
            toast(
              "Calma aí parsa, relaxa que os dev vão fazer o tema claro em breve. Confia!",
              {
                icon: () => "🍺",
                position: "top-right",
                transition: Bounce,
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                progress: undefined,
                theme: "dark",
              }
            );
          }}
        >
          <HiLightBulb
            className="text-buteco-orange hover:text-buteco-lager size-8"
            width="24"
            height="24"
          />
        </button>
        <ToastContainer icon={false} />
      </div>
      {showToUpButton && (
        <a href="#" className="fixed z-30 flex right-10 bottom-4">
          <FaArrowCircleUp
            className="p-2 text-gray-500 rounded-full hover:text-buteco-orange"
            size={52}
          />
        </a>
      )}
    </header>
  );
}
