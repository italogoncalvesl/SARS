"use client";

import { cardsData } from "@/utils/cards";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "iconsax-react";
import Image from "next/image";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import Motion from "./Motion";
import { api } from "@/service/axios.config";

const SchemaValidation = z.object({
  age: z.string({ required_error: "Campo obrigatório" }),
  impregnated: z.boolean(),
  asthma: z.boolean(),
  obesity: z.boolean(),
  dispneia: z.boolean(),
  cardiopat: z.boolean(),
  hepatic: z.boolean(),
  riscFactor: z.boolean(),
  gender: z.enum(["Masculino", "Feminino"]),
});

type FormData = z.infer<typeof SchemaValidation>;

const options = ["Masculino", "Feminino"] as const;

export default function Form() {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
    // reset,
  } = useForm<FormData>({
    defaultValues: {
      age: undefined,
      impregnated: false,
      asthma: false,
      gender: "Masculino",
      obesity: false,
      dispneia: false,
      cardiopat: false,
      hepatic: false,
      riscFactor: false,
    },
    resolver: zodResolver(SchemaValidation),
  });

  const [isLoading, setIsLoading] = useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const [classification, setClassification] = useState("");

  async function OnSubmit(data: FormData) {
    setIsLoading(true);
    try {
      const response = await api.post("/api/entrada", {
        CS_SEXO: data.gender === "Feminino" ? 0 : 1,
        NU_IDADE_N: data.age,
        CS_GESTANT: (+data.impregnated).toString(),
        NOSOCOMIAL: "0",
        AVE_SUINO: "0",
        FEBRE: "0",
        TOSSE: "0",
        GARGANTA: "0",
        DISPNEIA: (+data.dispneia).toString(),
        DESC_RESP: "0",
        SATURACAO: "0",
        DIARREIA: "0",
        VOMITO: "0",
        OUTRO_SIN: "0",
        PUERPERA: "0",
        FATOR_RISC: (+data.riscFactor).toString(),
        CARDIOPATI: (+data.cardiopat).toString(),
        HEMATOLOGI: "0",
        SIND_DOWN: "0",
        HEPATICA: (+data.hepatic).toString(),
        ASMA: (+data.asthma).toString(),
        DIABETES: "0",
        NEUROLOGIC: "0",
        PNEUMOPATI: "0",
        IMUNODEPRE: "0",
        RENAL: "0",
        OBESIDADE: (+data.obesity).toString(),
        VACINA: "0",
        ANTIVIRAL: "0",
        UTI: "0",
        SUPORT_VEN: "0",
        EVOLUCAO: "0",
        DOR_ABD: "0",
        FADIGA: "0",
        PERD_OLFT: "0",
        PERD_PALA: "0",
        TOMO_RES: "0",
        VACINA_COV: "0",
      });
      const { resultado } = response.data;
      if (resultado === 2) {
        setClassification("Grupo de alto risco");
      } else {
        setClassification("Fora do grupo de risco");
      }
    } finally {
      setIsLoading(false);
      setSuccessModal(true);
      // reset();
    }
  }

  return (
    <>
      <form className="flex gap-8 w-4/5 flex-col items-center justify-center">
        <div className="flex flex-col items-start justify-center w-full gap-3">
          <p>Você possui Asma?</p>
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
          <p>Você possui Obesidade?</p>
          <Controller
            name="obesity"
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
          <p>Você possui Dispneia - Dificuldade Respiratória?</p>
          <Controller
            name="dispneia"
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
          <p>Você possui Cardiopatia - Doença Cardíaca?</p>
          <Controller
            name="cardiopat"
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
          <p>Você possui alguma doença Hepática?</p>
          <Controller
            name="hepatic"
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
          <p>Você se enquadra em um fator de risco?</p>
          <p className="text-xs">
            - Condição que aumenta a probabilidade de uma pessoa desenvolver uma
            determinada doença
          </p>
          <Controller
            name="riscFactor"
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
          <p>
            Você trabalha ou tem contato direto com aves, suínos, ou outro
            animal?
          </p>
          {/*Aqui é Ave_suino*/}
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
          <p>Você está com febre?</p>
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
          <p>Você está com Tosse?</p>
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
          <p>Você está com dor de Garganta?</p>
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
          <p>Você está com algum disconforto respiratório?</p>
          {/*DESC_RESP*/}
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
          <p>Você está com Diarreia ou algum sintoma?</p>
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
          <p>Você está vomitando?</p>
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
          <p>Você possui Doença Hematológica Crônica</p>
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
          <p>Você possui possui Síndrome de Down?</p>
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
          <p>Você possui Diabetes?</p>
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
          <p>Você possui Doença Neurológica?</p>
          <p className="text-xs">
            - Patologias que interferem no funcionamento do sistema nervoso
            central e periférico.
          </p>
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
          <p>Você possui Pneumopatia crônica?</p>
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
          <p>Você possui Imunodeficiência ou Imunodepressão</p>
          <p className="text-xs">
            - Diminuição da função do sistema imunológico.
          </p>
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
          <p>Você possui Doença Renal Crônica?</p>
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
          <p>Você foi vacinado contra gripe na última campanha,</p>
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
          <p>Você fez uso suporte ventilatório nos ultimos dias?</p>
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
          <p>Você sentiu dores abdominais?</p>
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
          <p>Você apresentou fadiga nesses últimos dias?</p>
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
          <p>Você esta com perda do olfato?</p>
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
          <p>Você esta com perda do paladar</p>
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
          <p>Você tomou alguma vacina para COVID-19</p>
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
          <p>Você adquiriu Nossocomial?</p>
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
          <p>Sua saturação de 02 no sangue está maior que 95%?</p>
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
          <p>Você ficou internado na UTI devido a SARS?</p>
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
          <p>Você possui outro sintoma?</p>
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
          <p>Você tomou alguma vacina para COVID-19</p>
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
                className="border py-2 px-4 rounded dark:bg-dark dark:text-white dark:border-white/30"
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
            <p>Você está Gestante?</p>
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

        <div className="flex flex-col items-start justify-center w-full gap-3">
          <p>Você está com Puerpera?</p>
          <p className="text-xs">
            - Mulher que pariu recentemente – até 45 dias do parto?
          </p>
          <Controller
            name="riscFactor"
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
          <p>Qual a sua Idade em anos?</p>
          <Controller
            name="age"
            control={control}
            render={({ field }) => (
              <input
                type="number"
                placeholder="Digite sua idade"
                value={field.value}
                onChange={field.onChange}
                className="bg-white dark:bg-dark border-gray-200 flex items-start justify-center shadow-xl shadow-gray-300 dark:shadow-main/30 rounded-lg p-6"
              />
            )}
          />
          {errors.age && <p className="text-red-500">{errors.age.message}</p>}
        </div>

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
        } flex flex-col text-center gap-4 fixed ease-linear duration-300 top-0 bg-white dark:bg-dark dark:text-white z-40 w-screen h-screen justify-center items-center`}
      >
        <Image
          alt="Ilustação"
          src={
            classification === "Fora do grupo de risco"
              ? "/images/ilustration.svg"
              : "/images/sad_ilustration.svg"
          }
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
            .filter((card) => card.title === classification)
            .map((card) => (
              <Motion
                key={card.id}
                identifier={card.id}
                direction="top"
                className="flex items-center justify-center w-full"
              >
                <div className="flex relative h-[250px] bg-white dark:bg-dark flex-col items-start gap-4 justify-center w-4/5 rounded-lg shadow-2xl shadow-gray-400 dark:shadow-main/40 p-6">
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
