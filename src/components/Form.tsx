"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "iconsax-react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { z } from "zod";
import Motion from "./Motion";
import { cardsData } from "@/utils/cards";
import Image from "next/image";

const SchemaValidation = z.object({
  impregnated: z.boolean(),
  diabetic: z.boolean(),
  asthma: z.boolean(),
  gender: z.enum(["Masculino", "Feminino"]),
});

type FormData = z.infer<typeof SchemaValidation>;

const options = ["Masculino", "Feminino"] as const;

export default function Form() {
  const { control, handleSubmit, watch } = useForm<FormData>({
    defaultValues: {
      impregnated: false,
      diabetic: false,
      asthma: false,
      gender: "Masculino",
    },
    resolver: zodResolver(SchemaValidation),
  });

  const [isLoading, setIsLoading] = useState(false);
  const [successModal, setSuccessModal] = useState(false);

  async function OnSubmit() {
    setIsLoading(true);
    console.log(watch());
    setIsLoading(false);
    setSuccessModal(true);
  }
  return (
    <>
      <form className="flex gap-8 flex-col items-center justify-center">
        <div className="flex flex-col items-start justify-center w-full gap-3">
          <p>Você possui diabetes?</p>
          <Controller
            name="diabetic"
            control={control}
            render={({ field }) => (
              <div className="flex items-center">
                <label className="cursor-pointer flex min-w-[150px] w-full justify-between flex-row h-fit">
                  <span className="text-center">Não</span>
                  <div className="relative flex w-12">
                    <input
                      type="checkbox"
                      id="toggle"
                      className="hidden"
                      checked={field.value}
                      onChange={field.onChange}
                    />
                    <div
                      className={`toggle__line w-10 h-4 rounded-full shadow-inner absolute top-1 left-0 ${
                        field.value ? "bg-blue-500" : "bg-gray-400"
                      }`}
                    />
                    <div
                      className={`toggle__dot absolute w-6 h-6 rounded-full shadow left-0 top-0 transition ${
                        field.value
                          ? "transform translate-x-full bg-blue-500"
                          : "bg-gray-400"
                      }`}
                    />
                  </div>
                  <span className="text-center">Sim</span>
                </label>
              </div>
            )}
          />
        </div>

        <div className="flex flex-col items-start justify-center w-full gap-3">
          <p>Você possui asma?</p>
          <Controller
            name="asthma"
            control={control}
            render={({ field }) => (
              <div className="flex items-center">
                <label className="cursor-pointer flex min-w-[150px] w-full justify-between flex-row h-fit">
                  <span className="text-center">Não</span>
                  <div className="relative flex w-12">
                    <input
                      type="checkbox"
                      id="toggle"
                      className="hidden"
                      checked={field.value}
                      onChange={field.onChange}
                    />
                    <div
                      className={`toggle__line w-10 h-4 rounded-full shadow-inner absolute top-1 left-0 ${
                        field.value ? "bg-blue-500" : "bg-gray-400"
                      }`}
                    />
                    <div
                      className={`toggle__dot absolute w-6 h-6 rounded-full shadow left-0 top-0 transition ${
                        field.value
                          ? "transform translate-x-full bg-blue-500"
                          : "bg-gray-400"
                      }`}
                    />
                  </div>
                  <span className="text-center">Sim</span>
                </label>
              </div>
            )}
          />
        </div>

        <div className="flex flex-col items-start justify-center w-full gap-3">
          <p>Qual o seu gênero</p>
          <Controller
            name="gender"
            control={control}
            render={({ field }) => (
              <select
                id="selector"
                className="border py-2 px-4 rounded"
                value={field.value}
                onChange={field.onChange}
              >
                {options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            )}
          />
        </div>

        {watch("gender") === "Feminino" && (
          <div className="flex flex-col items-start justify-center w-full gap-3">
            <p>Você está grávida?</p>
            <Controller
              name="impregnated"
              control={control}
              render={({ field }) => (
                <div className="flex items-center">
                  <label className="cursor-pointer flex min-w-[150px] w-full justify-between flex-row h-fit">
                    <span className="text-center">Não</span>
                    <div className="relative flex w-12">
                      <input
                        type="checkbox"
                        id="toggle"
                        className="hidden"
                        checked={field.value}
                        onChange={field.onChange}
                      />
                      <div
                        className={`toggle__line w-10 h-4 rounded-full shadow-inner absolute top-1 left-0 ${
                          field.value ? "bg-blue-500" : "bg-gray-400"
                        }`}
                      />
                      <div
                        className={`toggle__dot absolute w-6 h-6 rounded-full shadow left-0 top-0 transition ${
                          field.value
                            ? "transform translate-x-full bg-blue-500"
                            : "bg-gray-400"
                        }`}
                      />
                    </div>
                    <span className="text-center">Sim</span>
                  </label>
                </div>
              )}
            />
          </div>
        )}

        <button
          onClick={handleSubmit(OnSubmit)}
          className="bg-main rounded-lg py-4 w-[200px] flex flex-row text-white items-center justify-center gap-2"
        >
          {isLoading ? (
            <div className="flex w-6 h-6 rounded-full border-[2px] border-t-white border-b-white/30 animate-spin"></div>
          ) : (
            <>
              <p>Enviar</p>
              <Send variant="TwoTone" color="#fff" size={32} />
            </>
          )}
        </button>
      </form>

      <div
        className={`${
          successModal ? "lef-[0vw]" : "left-[100vw]"
        } flex flex-col text-center gap-4 fixed ease-linear duration-300 top-0 bg-white z-40 w-screen h-screen justify-center items-center`}
      >
        <Image
          alt="Ilustação"
          src={"/images/ilustration.svg"}
          width={278}
          height={208}
          className="w-1/2 h-1/3"
        />

        <p className="w-4/5">
          De acordo com as suas respostar nós conseguimos te enquadrar em um
          grupo:
        </p>

        <>
          {cardsData
            .filter((card) => card.title === "Fora do grupo de risco")
            .map((card) => (
              <Motion
                key={card.id}
                identifier={card.id}
                direction="top"
                className="flex items-center justify-center w-full"
              >
                <div className="flex relative h-[250px] bg-white flex-col items-start gap-4 justify-center w-4/5 rounded-lg shadow-2xl shadow-gray-400 dark:shadow-main/40 p-6">
                  <div className="flex w-full bg-main dark:bg-white absolute top-0 left-0 h-[1px]" />

                  {card.icon}

                  <h3 className="text-main font-medium">{card.title}</h3>
                  <p className="text-sm">
                    {" "}
                    Não utilize esta classificação como auto avaliação, procure
                    um médico ou técnico especializado
                  </p>
                </div>
              </Motion>
            ))}
        </>

        <button
          onClick={() => setSuccessModal(false)}
          className="bg-main rounded-lg py-4 w-[200px] flex flex-row text-white items-center justify-center gap-2"
        >
          Ok, entendi!
        </button>
      </div>
    </>
  );
}
