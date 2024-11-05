import { useEffect, useState } from "react";
import { Loading } from "../loading";

export function MemeImg({ className, src }: { className: string; src: string }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  function handleImageLoaded() {
    console.log("Loaded");
    setLoaded(true);
  }

  return (
    <>
      {loaded ? (
        <img className={className} src={src} onLoad={handleImageLoaded} />
      ) : (
        <Loading />
      )}
    </>
  );
}
