import { HeaderSubSection } from "./HeaderSubSection";

export function Workshops() {
  return (
    <>
      <HeaderSubSection
        title="Aulas e Workshops"
        hColor="text-buteco-orange"
        subTitle="Na comunidade do Buteco os membros se dispõem a compartilhar seus
        conhecimentos e experiências."
        bColor="text-[#4C81C0]"
      />

      <div className="flex flex-col w-[70rem] items-center py-8 px-16 mb-10 z-10 bg-[#1D2535] rounded-2xl">
        <div className="flex flex-col gap-8 w-fit h-fit">
          <div className="flex flex-row justify-center gap-4">
            <div className="flex flex-col">
              <span className="text-[1.5rem] mb-2 text-end text-buteco-pilsen font-bold">
                Curso de Design Patterns
              </span>
              <p className="text-lg text-end">
                Cada padrão é como uma planta de construção que você pode customizar
                para resolver um problema de projeto particular em seu código.
              </p>
              <span className="mt-8 text-end">Instrutor Pedro Pietro</span>
            </div>
            <a
              className="w-[800px] h-[190px]"
              href="https://www.youtube.com/watch?v=feFRJTGQKdQ"
              target="_blank"
            >
              <img
                className="rounded-lg border-4 border-transparent hover:scale-105 hover:rotate-3 transition-transform hover:border-[#EA2353] hover:border-4"
                src="/img/patterns.jpg"
                alt=""
                width={390}
                height={230}
              />
            </a>
          </div>
          <div className="flex flex-row justify-center gap-8">
            <a
              className="w-[800px] h-[190px]"
              href="https://www.youtube.com/playlist?list=PLj5boa9mZAPffGQXYwYKLLcdsN0Zn3PZs"
              target="_blank"
            >
              <img
                className="rounded-lg border-4 border-transparent  hover:scale-105 hover:-rotate-3 transition-transform hover:border-[#EA2353] hover:border-4"
                src="/img/english.jpg"
                alt=""
                width={390}
                height={230}
              />
            </a>
            <div className="flex flex-col">
              <span className="text-[1.5rem] text-buteco-pilsen font-bold">
                English Buteco Friday
              </span>
              <p className="mt-2 text-lg text-left">
                Curso aberto de vocabulário de inglês para todos os níveis. Aprenda
                inglês e deixe de ser um mulambo. Toda Sexta às 19:00h.
              </p>
              <span className="mt-6 text-left">Prof. Gustavo Machado</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
