import loading from "../assets/loading.gif";

export function Loading() {
  return (
    <div className="flex flex-col w-1/4 my-10 justify-center items-center">
      <img className="rounded-full" src={loading} alt="Carregando" />
      <span className="text-2xl m-4">Carregando...</span>
    </div>
  );
}
