import { Testimonials } from "../components/Testimonials";

export function Home() {
  return (
    <>
      <main className="flex flex-col items-center justify-center">
        <section className="flex flex-col items-center justify-center w-full px-8">
          <div className="flex flex-col items-center justify-center w-full max-w-screen-md my-10 text-2xl text-justify text-buteco-cream">
            <span className="flex items-center mb-6 text-4xl font-extrabold text-transparent font-FigTree bg-clip-text bg-gradient-to-br from-violet-500 to-fuchsia-500">
              #define NOSSA COMUNIDADE;
            </span>
            <p className="">
              O conceito do <b className="text-buteco-orange">Buteco dos Devs </b>{" "}
              foi cuidadosamente elaborado para capturar a essência vibrante da nossa
              comunidade, formada por profissionais e estudantes das diversas áreas
              da tecnologia. Este é um ambiente descontraído que acolhe todos os
              momentos do dia e as diferentes características da semana. Seja uma
              conversa leve acompanhada de café pela manhã ou um encontro animado com
              amigos e cerveja à noite, assim como um autêntico buteco brasileiro.
            </p>
            <p className="mt-4">
              Inspirados por essa atmosfera única, criamos o ícone do copo de café e
              cerveja brindando, com um toque binário em sua composição. Esse símbolo
              representa a fusão de ideias e pensamentos que tornam o{" "}
              <b className="text-buteco-orange">Buteco dos Devs</b> um espaço tão
              especial e único.
            </p>
          </div>
        </section>
        <Testimonials />
        <section className="flex flex-col items-center justify-center w-full px-8">
          <div className="flex justify-start w-1/2 mt-10">
            <p className="flex items-center mb-6 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0b9aec] to-[#6edfde]">
              #define NOSSAS REGRAS;
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

//
