import loading from "../assets/loading.gif";

export function Loading() {
  return (
    <div className="flex flex-col items-center justify-center w-1/4 my-10">
      <img className="rounded-full" src={loading} alt="Carregando" />
      {/* <span className="m-4 text-2xl">Carregando...</span> */}
    </div>
  );
}
