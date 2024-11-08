/* eslint-disable @typescript-eslint/ban-ts-comment */
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const tabs = [
  ["/memes", "Memes"],
  ["/audios", "Audios"],
  ["/videos", "Videos"],
  ["/docs", "Documentos"],
];

const ChipTabs = () => {
  const [selected, setSelected] = useState("");

  return (
    <div className="flex flex-wrap items-center gap-6 p-2 ">
      {tabs.map((tab) => (
        <Chip
          text={tab[1]}
          selected={selected === tab[1]}
          setSelected={setSelected}
          linkTo={tab[0]}
          key={tab[1]}
        />
      ))}
    </div>
  );
};

// @ts-expect-error
const Chip = ({ text, selected, setSelected, linkTo }) => {
  useEffect(() => {
    if (window.location.pathname === linkTo) {
      setSelected(text);
    }
  }, []);

  return (
    <a
      href={linkTo}
      onClick={() => setSelected(text)}
      className={`${
        selected
          ? "text-buteco-white"
          : "text-gray-500 hover:text-buteco-macchi hover:bg-buteco-cream"
      } text-lg font-bold py-2 px-4 rounded-full relative`}
    >
      <span
        className={`${
          selected &&
          "absolute inset-0 z-0 rounded-full bg-gradient-to-r from-buteco-orange to-buteco-pilsen text-buteco-macchi"
        } relative z-10`}
      >
        {text}
      </span>
      {selected && (
        <motion.span
          layoutId="pill-tab"
          transition={{ type: "spring", duration: 0.5 }}
          className="absolute inset-0 z-0 rounded-full bg-gradient-to-r from-buteco-orange to-buteco-pilsen"
        ></motion.span>
      )}
    </a>
  );
};

export default ChipTabs;
