import Nav from "@/components/nav";
import { mainColor } from "@/utils/colors";
import {
  ArrowDown,
  ArrowUp2,
  Blur,
  BoxSearch,
  EmojiSad,
  Send,
} from "iconsax-react";
import Image from "next/image";

const questionsData = [
  { id: 0, title: "Pergunta 1" },
  { id: 1, title: "Pergunta 2" },
  { id: 2, title: "Pergunta 3" },
  { id: 3, title: "Pergunta 4" },
  { id: 4, title: "Pergunta 5" },
  { id: 5, title: "Pergunta 6" },
];

export default function Home() {
  return (
    <main className="flex flex-col py-[100px] gap-20 items-center justify-start w-screen min-h-screen bg-white text-black">
      <Nav />

      <section
        id="home"
        className="flex flex-col items-center justify-center w-4/5"
      >
        <div className="text-center items-center justify-center gap-8 flex flex-col px-2">
          <h1 className="text-6xl">Síndrome respiratória aguda?</h1>
          <p className="text-main text-lg font-medium">
            Saiba em qual grupo de risco está!
          </p>
          <a
            href="#form"
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

      <section
        id="about"
        className="flex flex-col items-center justify-center w-4/5"
      >
        <div className="text-center items-center justify-center gap-8 flex flex-col">
          <p className="text-main font-medium">A ideia principal</p>
          <h2 className="text-3xl">Queremos classificar você em algum grupo</h2>
        </div>

        <div className="flex flex-col gap-12 items-center justify-start mt-12">
          <div className="flex relative h-[250px] flex-col items-start gap-4 justify-center w-4/5 rounded-lg shadow-2xl shadow-gray-400 p-6">
            <div className="flex w-full bg-main absolute top-0 left-0 h-[1px]"></div>

            <Blur size="32" color={`${mainColor}`} variant="TwoTone" />
            <h3 className="text-main font-medium">Fora do grupo de risco</h3>
            <p>
              After conducting an examination with a specialist we can help find
              the right healing method
            </p>
          </div>

          <div className="flex relative h-[250px] flex-col items-start gap-4 justify-center w-4/5 rounded-lg shadow-2xl shadow-gray-400 p-6">
            <div className="flex w-full bg-main absolute top-0 left-0 h-[1px]"></div>

            <BoxSearch size="32" color={`${mainColor}`} variant="TwoTone" />
            <h3 className="text-main font-medium">Potencial grupo de risco</h3>
            <p>
              After conducting an examination with a specialist we can help find
              the right healing method
            </p>
          </div>

          <div className="flex relative h-[250px] flex-col items-start gap-4 justify-center w-4/5 rounded-lg shadow-2xl shadow-gray-400 p-6">
            <div className="flex w-full bg-main absolute top-0 left-0 h-[1px]"></div>

            <EmojiSad size="32" color={`${mainColor}`} variant="TwoTone" />
            <h3 className="text-main font-medium">Grupo de risco</h3>
            <p>
              After conducting an examination with a specialist we can help find
              the right healing method
            </p>
          </div>
        </div>
      </section>

      <section
        id="form"
        className="flex flex-col items-center justify-center w-4/5 gap-6"
      >
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

      <footer className="flex flex-col items-start justify-center w-4/5 gap-8 text-gray-700">
        <div className="flex flex-col items-start justify-center gap-3">
          <Image
            alt="Logomarca"
            width={220}
            height={33}
            src={"/images/logo.svg"}
          />

          <p>
            This free App provides a solution to your health needs by offering
            you a one-stop access to complete information about various medical
            checkups. This App carries simple tips and advice to help you
            maintain a healthy lifestyle.
          </p>
        </div>

        <div className="flex flex-col items-start justify-center gap-3">
          <p className="text-main font-medium">Devs</p>

          <a href="#">Emmanuel Rodrigues</a>
          <a href="#">Nikollas Rufino</a>
          <a href="#">Italo Gonçalves</a>
        </div>

        <div className="flex flex-col items-start justify-center gap-3">
          <p className="text-main font-medium">Instituição</p>

          <a href="#">UNIFAP</a>
        </div>
      </footer>

      <a
        href="#"
        className="rounded-full bg-main shadow-xl shadow-gray-300 fixed bottom-4 right-4 p-6"
      >
        <ArrowUp2 color="#fff" size={24} />
      </a>
    </main>
  );
}
