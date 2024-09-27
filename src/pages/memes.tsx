// import { getLinks } from "../crawler/crawler";

import { useEffect, useState } from "react";
import { Loading } from "../components/loading";
import { getContent } from "../services/getContentData";

type DataType = {
  audios: string[];
  docs: string[];
  images: string[];
  videos: string[];
};

export function Memes() {
  const [content, setContent] = useState<DataType>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const result = await getContent();
      const data = await result.json();

      setContent(data);
      setIsLoading(false);
    })();
  }, []);

  const baseUrl = import.meta.env.VITE_APP_BASEURL;
  const sliceSize = 15;

  return (
    <section>
      <div className="flex flex-wrap justify-center">
        {isLoading ? (
          <Loading />
        ) : (
          content?.images.map((item: string) => {
            return (
              <div className="flex flex-col items-center justify-between w-1/3 p-2 m-2 border-2 rounded-lg bg-buteco-moccha border-buteco-lager">
                <img className="m-auto" src={`${baseUrl}/${item}`} width="350" />
                <p className="flex flex-row justify-center w-full gap-4">
                  {item.length > sliceSize
                    ? item.slice(0, sliceSize) +
                      "...." +
                      item.slice(item.length - sliceSize, item.length)
                    : item}
                </p>
              </div>
            );
          })
        )}
      </div>
    </section>
  );
}
