/* eslint-disable @typescript-eslint/no-unused-expressions */

import { useEffect, useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import { useDataSpot } from "../context/DataSpotContext";
import { getContent } from "../services/getContentData";
// import { DocViewer } from "../components/DocsPage/DocViewer";
import { DocsList } from "../components/DocsPage/DocsList";

// import { Worker } from "@react-pdf-viewer/core";

export function Docs() {
  const [showToUpButton, setShowToUpButton] = useState(false);

  const { setData, handleLoadingState } = useDataSpot();

  useEffect(() => {
    (async () => {
      const result = await getContent();
      const data = await result.json();

      setData(data?.docs);
      handleLoadingState(false);
    })();

    window.addEventListener("scroll", () => {
      window.scrollY > 100 ? setShowToUpButton(true) : setShowToUpButton(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="z-0 flex flex-col items-center justify-center h-full">
      {showToUpButton && (
        <a href="#" className="fixed flex right-10 bottom-4">
          <FaArrowCircleUp
            className="p-2 text-gray-500 rounded-full hover:text-buteco-orange"
            size={52}
          />
        </a>
      )}
      {/* 
      {isClicked ? (
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
          <DocViewer />
        </Worker>
      ) : ( */}
      <div className="flex flex-col items-center w-full">
        <h1 className="my-5 text-5xl font-bold font-FigTree">
          Produções Acadêmicas
        </h1>
        <p className="text-[#999EA2] text-xl">
          Os nobres bacharéis do{" "}
          <b className="text-buteco-orange">Buteco dos Devs</b> também fazem suas
          contribuições a academia.
        </p>
      </div>
      {/* )} */}

      <DocsList />
    </section>
  );
}
