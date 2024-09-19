import ButecoLogo from "../assets/logoRet3.svg";
import { ImGithub } from "react-icons/im";
import { HiLightBulb } from "react-icons/hi";
import { FaDiscord } from "react-icons/fa";
import { Bounce, toast, ToastContainer } from "react-toastify";
import { useState } from "react";
import ChipTabs from "./ChipTabs";
// import { SlideTabsExample } from "./SlideTab";
// import { useLocation } from "react-router-dom";
// import ChipTabs from "./ChipTabs";

export function Header() {
  const [currentNavPath, setCurrentNavPath] = useState<string>("");
  // const location = useLocation();
  const fullURL = window.location.href.split("/");
  const route = fullURL[fullURL.length - 1];
  // console.log(location);

  const handleClick = (path: string) => {
    setCurrentNavPath(path);
    console.log("PATH: ", path);
  };

  return (
    <header className="flex flex-row items-center justify-center gap-6 p-4 mb-6 border-b-2 border-b-buteco-lager bg-buteco-dark">
      <div className="flex w-40 -translate-y-2 -rotate-[16deg] h-18 cursor-pointer">
        <a href="/">
          <ButecoLogo />
        </a>
      </div>

      {/* <nav className="flex gap-6">
        {[
          ["/memes", "Memes"],
          ["/audios", "Audios"],
          ["/videos", "Videos"],
          ["/docs", "Documentos"],
        ].map(([path, item]) => {
          return (
            <a
              key={item}
              href={path}
              onClick={() => handleClick(path)}
              className={`${
                "/" + route === currentNavPath
                  ? "bg-gradient-to-br from-buteco-orange to-buteco-pilsen"
                  : ""
              } box-content px-4 py-2 rounded-full hover:text-buteco-macchi hover:bg-buteco-cream`}
            >
              <span className="text-lg font-bold">{item}</span>
            </a>
          );
        })}
      </nav> */}

      <ChipTabs />
      {/* <SlideTabsExample /> */}

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
      <div className="flex flex-row gap-4">
        <a target="_blank" href="">
          <ImGithub className="text-gray-500 size-8 hover:text-buteco-pilsen" />
        </a>
        <a target="_blank" href="https://discord.gg/butecodosdevs">
          <FaDiscord className="text-gray-500 size-8 hover:text-buteco-pilsen" />
        </a>
      </div>
    </header>
  );
}
