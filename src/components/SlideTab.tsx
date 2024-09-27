/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useRef, useState } from "react";
import { motion } from "framer-motion";

export const SlideTabsExample = () => {
  return (
    <div className="">
      <SlideTabs />
    </div>
  );
};

export const SlideTabs = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className="relative flex gap-6 mx-auto w-fit"
    >
      <Tab setPosition={setPosition} linkTo="/memes">
        Memes
      </Tab>
      <Tab setPosition={setPosition} linkTo="/audios">
        Audios
      </Tab>
      <Tab setPosition={setPosition} linkTo="/videos">
        Videos
      </Tab>
      <Tab setPosition={setPosition} linkTo="/docs">
        Documentos
      </Tab>

      <Cursor position={position} />
      {/* <motion.li
        animate={{
          ...position,
        }}
        className="absolute z-0 h-12 rounded-full text-buteco-cream bg-buteco-orange"
      /> */}
    </ul>
  );
};

// @ts-expect-error
const Tab = ({ children, setPosition, linkTo }) => {
  const ref = useRef(null);

  return (
    <a href={linkTo}>
      <li
        ref={ref}
        onMouseEnter={() => {
          if (!ref?.current) return;

          const { width } = ref.current.getBoundingClientRect();

          setPosition({
            left: ref.current.offsetLeft,
            width,
            opacity: 1,
          });
        }}
        className="relative z-10 block px-4 py-2 font-bold text-gray-500 cursor-pointer sm:text-sm md:px-4 md:py-2 md:text-lg"
      >
        {children}
      </li>
    </a>
  );
};

// @ts-expect-error
const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-12 rounded-full bg-buteco-orange "
    />
  );
};
