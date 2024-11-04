import ButecoLogo from "../assets/logoRet3.svg";
import { ImGithub } from "react-icons/im";
import { FaDiscord, FaLinkedin } from "react-icons/fa";
import { PiYoutubeLogoFill } from "react-icons/pi";

export function Footer() {
  return (
    <footer className="flex flex-row relative bottom-0 z-10 items-center w-full justify-center gap-6 py-12 mt-8 border-t-2 border-b-buteco-lager bg-[#07131D]">
      <div className="flex w-40 cursor-pointer h-18">
        <a href="/">
          <ButecoLogo />
        </a>
      </div>

      <div className="flex flex-row gap-4">
        <a target="_blank" href="https://github.com/butecodosdevs">
          <ImGithub className="text-gray-500 size-8 hover:text-buteco-pilsen" />
        </a>
        <a target="_blank" href="https://discord.gg/butecodosdevs">
          <FaDiscord className="text-gray-500 size-8 hover:text-buteco-pilsen" />
        </a>
        <a target="_blank" href="https://www.youtube.com/@ButecodosDevs">
          <PiYoutubeLogoFill className="text-gray-500 size-8 hover:text-buteco-pilsen" />
        </a>
        <a target="_blank" href="https://www.linkedin.com/company/buteco-dos-devs">
          <FaLinkedin className="text-gray-500 size-8 hover:text-buteco-pilsen" />
        </a>
      </div>
    </footer>
  );
}
