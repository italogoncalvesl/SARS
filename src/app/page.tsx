import CardList from "@/components/CardList";
import Nav from "@/components/Nav";
import DarkModeButton from "@/components/ui/darkModeButton";
import { ArrowDown, ArrowUp2, Send } from "iconsax-react";
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
    <main className="flex flex-col pt-[100px] gap-20 items-center justify-start w-screen min-h-screen bg-white text-black dark:bg-dark dark:text-white">
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

        <CardList />
      </section>

      <section
        id="form"
        className="flex flex-col items-center justify-center w-4/5 gap-6"
      >
        <div className="text-center items-center justify-center gap-8 flex flex-col">
          <h2 className="text-4xl">Responda algumas breves perguntas</h2>
          <p className="text-gray-700 dark:text-gray-300 text-sm font-medium">
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
                className="bg-white dark:bg-dark border-gray-200 flex items-start justify-center shadow-xl shadow-gray-300 dark:shadow-main/30 rounded-lg p-6"
              />
            </div>
          ))}

          <button className="bg-main rounded-lg py-4 w-[200px] flex flex-row text-white items-center justify-center gap-2">
            <p>Enviar</p>
            <Send variant="TwoTone" color="#fff" size={32} />
          </button>
        </form>
      </section>

      <footer className="flex bg-main text-sm px-[10%] text-white flex-col items-start justify-center w-full py-[100px] gap-8 dark:text-white">
        <div className="flex flex-col items-start justify-center gap-3">
          <Image
            alt="Logomarca"
            width={220}
            height={33}
            src={"/images/footerLogo.svg"}
          />

          <p>
            Este é um projeto gratuito com fins institucionais criado para
            auxiliar na classificação de grupos de risco dentro da problemática:
            Síndrome Respiratória Aguda.
            <br />
            <br />
            Este foi um trabalho feito em Nextjs com uso de typescript e backend
            em python.
          </p>
        </div>

        <div className="flex flex-col items-start justify-center gap-3">
          <p className="font-bold">- Devs -</p>

          <a className="underline" href="https://github.com/im4nu">
            Emmanuel Rodrigues
          </a>
          <a className="underline" href="https://github.com/Ndav07">
            Nikollas Rufino
          </a>
          <a className="underline" href="https://github.com/italogoncalvesl">
            Italo Gonçalves
          </a>
        </div>

        <div className="flex flex-col items-start justify-center gap-3">
          <p className="font-bold">- Instituição -</p>

          <a href="#">UNIFAP</a>
        </div>

        <div className="flex w-full items-center">
          <p className="text-center">
            Pi3 - UNIFAP todos os direitos reservados, Design por:{" "}
            <a
              className="underline font-bold"
              href="https://www.linkedin.com/in/m4nu/"
            >
              Emmanuel Rodrigues
            </a>
          </p>
        </div>
      </footer>

      <DarkModeButton />
      <a
        href="#"
        className="rounded-full bg-main dark:bg-white shadow-xl shadow-dark-300 dark:shadow-main/30 fixed bottom-4 right-4 p-6"
      >
        <ArrowUp2 size={18} className="text-white dark:text-main" />
      </a>
    </main>
  );
}
