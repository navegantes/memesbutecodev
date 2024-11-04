import { HeaderSubSection } from "../HeaderSubSection";
import { CommandCard } from "./CommandCard";
import { motion, AnimatePresence, Variants } from "framer-motion";

const cardVariants: Variants = {
  offscreenRL: {
    x: 400,
    opacity: 0,
  },
  offscreenLR: {
    x: -400,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: "tween",
      bounce: 0.7,
      duration: 1.2,
    },
  },
};

export function ButecosMoe() {
  const hoverImg =
    "hover:scale-[2] hover:z-20 hover:rotate-0 hover:transition hover:border-2 hover:rounded-lg hover:border-buteco-orange";
  return (
    <>
      <HeaderSubSection
        title="Nosso Bot: Moe do Buteco"
        hColor="text-buteco-orange"
        subTitle="Conheça alguns dos comandos do Moe do Buteco.
        O Moe do Buteco é implementado com toda a magia do PHP."
        bColor="text-[#EA2353]"
      />

      <div className="flex z-10 relative flex-col rounded- mt-10 w-[860px] gap-24">
        <AnimatePresence>
          <div className="relative flex flex-col gap-8">
            <motion.div
              viewport={{ once: true, amount: 0.8 }}
              initial="offscreenLR"
              whileInView="onscreen"
            >
              <motion.div
                className="relative flex flex-col gap-8"
                variants={cardVariants}
              >
                <CommandCard
                  title="Buteco Coins"
                  tagCommand="/coins"
                  bodyText="A moeda de troca oficial do servidor. Recupere suas ButecoCoins diárias."
                />
                <CommandCard
                  title="Aviõeszinhos"
                  tagCommand="/avioeszinhos"
                  bodyText='Envie "Pequenos aviões aleatoriamente no ar" para distribuir butecoCoins para usuários aleatórios.'
                />
              </motion.div>
            </motion.div>

            <motion.div
              viewport={{ once: true, amount: 0.4 }}
              initial="offscreenRL"
              whileInView="onscreen"
            >
              <motion.div
                style={{ position: "relative", top: -300 }}
                variants={cardVariants}
              >
                <img
                  className={`absolute scale-125 -top-5 right-44 -rotate-12 ${hoverImg}`}
                  src="/img/coins.png"
                  alt=""
                  width={215}
                  height={120}
                />
              </motion.div>
              <motion.div variants={cardVariants}>
                <img
                  className={`absolute scale-110 bottom-4 -right-10 rotate-12 ${hoverImg}`}
                  src="/img/avioeszinhos.png"
                  alt=""
                  width={175}
                  height={220}
                />
              </motion.div>
            </motion.div>
          </div>

          <div className="relative flex flex-col items-end w-full gap-8">
            <motion.div
              viewport={{ once: true, amount: 0.8 }}
              initial="offscreenRL"
              whileInView="onscreen"
            >
              <motion.div
                className="relative flex flex-col items-end w-full gap-8"
                variants={cardVariants}
              >
                <CommandCard
                  title="Patrões"
                  tagCommand="/top patroes"
                  bodyText="A lista dos magnatas com os maiores acumuladores/sortudos/apostadores da comunidade. Entre na disputa para entrar no top 10."
                />
                <CommandCard
                  title="Roleta"
                  tagCommand="/roleta"
                  bodyText="Não, não é jogo do tigrinho. A roleta é a forma saudável para gastar as suas coins."
                />
              </motion.div>
            </motion.div>

            <motion.div
              viewport={{ once: true, amount: 0.4 }}
              initial="offscreenLR"
              whileInView="onscreen"
            >
              <motion.div variants={cardVariants}>
                <img
                  className={`absolute scale-110 left-56 -top-6 -rotate-12 ${hoverImg}`}
                  src="/img/patroes.png"
                  alt=""
                  width={195}
                  height={190}
                />
              </motion.div>
              <motion.div variants={cardVariants}>
                <img
                  className={`absolute bottom-0 scale-125 -left-8 rotate-12 ${hoverImg}`}
                  src="/img/roleta.png"
                  alt=""
                  width={184}
                  height={204}
                />
              </motion.div>
            </motion.div>
          </div>

          <div className="relative flex flex-col gap-8">
            <motion.div
              viewport={{ once: true, amount: 0.9 }}
              initial="offscreenLR"
              whileInView="onscreen"
            >
              <motion.div
                className="relative flex flex-col gap-8"
                variants={cardVariants}
              >
                <CommandCard
                  title="Picasso"
                  tagCommand="/picasso"
                  bodyText="Peça para um dos pintores mais talentosos do mundo desenhar algo que você deseja, você só precisa pedir e explicar (com detalhes muito, muito pequenos) o que você quer."
                />
                <CommandCard
                  title="O Mestre (ChatGPT)"
                  tagCommand="/mestre"
                  bodyText="Este é o mestre, pergunte qualquer coisa e ele lhe dará uma resposta... às vezes pode não ser o que você espera, nem em um tom gentil... bem, tente a sua sorte"
                />
              </motion.div>
            </motion.div>

            <motion.div
              viewport={{ once: true, amount: 0.2 }}
              initial="offscreenRL"
              whileInView="onscreen"
            >
              <motion.div
                style={{ position: "relative", top: -400 }}
                variants={cardVariants}
              >
                <img
                  className={`absolute scale-90 -top-16 right-52 -rotate-12  ${hoverImg}`}
                  src="/img/picasso.png"
                  alt=""
                  width={215}
                  height={120}
                />
              </motion.div>
              <motion.div variants={cardVariants}>
                <img
                  className={`absolute scale-150 bottom-10 -right-8 rotate-12 ${hoverImg}`}
                  src="/img/mestre.png"
                  alt=""
                  width={175}
                  height={220}
                />
              </motion.div>
            </motion.div>
          </div>
        </AnimatePresence>

        <div className="flex flex-col gap-10 mb-10">
          <img
            className="self-center mt-8"
            src="/img/butecobot.png"
            alt=""
            width={270}
            height={112}
          />
          <p className="self-center text-2xl text-bold text-center w-[600px] text-[#4CC089]">
            Contribua, proponha uma funcionalidade, uma melhoria, faça parte da
            comunidade.
          </p>
        </div>
      </div>
    </>
  );
}
