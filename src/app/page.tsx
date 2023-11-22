import {
  ArrowDown,
  Blur,
  BoxSearch,
  Data,
  EmojiSad,
  HambergerMenu,
  Send,
} from "iconsax-react";
import Image from "next/image";

const mainColor = "#4D77FF";

const questionsData = [
  { id: 0, title: "pergunta 1" },
  { id: 1, title: "pergunta 2" },
  { id: 2, title: "pergunta 3" },
  { id: 3, title: "pergunta 4" },
  { id: 4, title: "pergunta 5" },
  { id: 5, title: "pergunta 6" },
];

export default function Home() {
  return (
    <main className="flex flex-col pt-[100px] gap-20 items-center justify-start w-screen min-h-screen bg-white text-black">
      <nav className="flex z-20 bg-white fixed top-0 flex-row items-center justify-between max-w-7xl w-4/5 h-[100px]">
        <Image
          alt="Logomarca"
          width={220}
          height={33}
          src={"/images/logo.svg"}
        />

        <button>
          <HambergerMenu size="32" color={mainColor} variant="TwoTone" />
        </button>
      </nav>

      <section
        id="home"
        className="flex flex-col items-center justify-center w-4/5"
      >
        <div className="text-center items-center justify-center gap-8 flex flex-col px-2">
          <h1 className="text-6xl">Sindrome respiratória aguda</h1>
          <p className="text-main text-lg font-medium">
            Você sabe em qual grupo de risco está?
          </p>
          <a
            href="#"
            className="bg-main rounded-lg py-4 w-[200px] flex flex-row text-white items-center justify-center gap-2"
          >
            <p>Fazer teste</p>
            <ArrowDown
              size="32"
              color="#FFF"
              variant="TwoTone"
              className="animate-bounce"
            />
          </a>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center w-4/5">
        <div className="text-center items-center justify-center gap-8 flex flex-col">
          <p className="text-main font-medium">A ideia principal</p>
          <h2 className="text-3xl">Queremos classificar você em algum grupo</h2>
        </div>

        <div className="flex flex-col gap-12 items-center justify-start mt-12">
          <div className="flex relative h-[250px] flex-col items-start gap-4 justify-center w-4/5 rounded-lg shadow-2xl shadow-gray-400 p-6">
            <div className="flex w-full bg-main absolute top-0 left-0 h-[1px]"></div>

            <Blur size="32" color={mainColor} variant="TwoTone" />
            <h3 className="text-main font-medium">Fora do grupo de risco</h3>
            <p>
              After conducting an examination with a specialist we can help find
              the right healing method
            </p>
          </div>

          <div className="flex relative h-[250px] flex-col items-start gap-4 justify-center w-4/5 rounded-lg shadow-2xl shadow-gray-400 p-6">
            <div className="flex w-full bg-main absolute top-0 left-0 h-[1px]"></div>

            <BoxSearch size="32" color={mainColor} variant="TwoTone" />
            <h3 className="text-main font-medium">Potencial grupo de risco</h3>
            <p>
              After conducting an examination with a specialist we can help find
              the right healing method
            </p>
          </div>

          <div className="flex relative h-[250px] flex-col items-start gap-4 justify-center w-4/5 rounded-lg shadow-2xl shadow-gray-400 p-6">
            <div className="flex w-full bg-main absolute top-0 left-0 h-[1px]"></div>

            <EmojiSad size="32" color={mainColor} variant="TwoTone" />
            <h3 className="text-main font-medium">Grupo de risco</h3>
            <p>
              After conducting an examination with a specialist we can help find
              the right healing method
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center w-4/5 gap-6">
        <div className="text-center items-center justify-center gap-8 flex flex-col">
          <h2 className="text-4xl">Responda algumas breves perguntas</h2>
          <p className="text-gray-700 text-sm font-medium">
            Elas serão importantes para classificarmos você em algum grupo
          </p>
        </div>

        <form className="flex gap-8 flex-col items-center justify-center">
          {questionsData.map((question) => (
            <div
              key={question.id}
              className="flex flex-col items-start justify-center w-full gap-3"
            >
              <p>{question.title}</p>
              <input
                type="text"
                placeholder="Digite sua resposta"
                className="bg-white flex items-start justify-center shadow-xl shadow-gray-300 rounded-lg p-6"
              />
            </div>
          ))}

          <button className="bg-main rounded-lg py-4 w-[200px] flex flex-row text-white items-center justify-center gap-2">
            <p>Enviar</p>
            <Send variant="TwoTone" color="#fff" size={32} />
          </button>
        </form>
      </section>
    </main>
  );
}
