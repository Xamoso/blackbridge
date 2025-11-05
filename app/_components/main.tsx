"use client";

import { ArrowRight } from "lucide-react";
import React from "react";
import VideoBanner from "./banner-video";

const Main = () => {
  return (
    <>
      {/* SEÇÃO PRINCIPAL COM VÍDEO */}
      <section className='h-[800px] bg-[url("/banner-main-m.webp")] bg-cover bg-center bg-no-repeat py-16 md:bg-none'>
        <VideoBanner />
        <div className="mx-auto mt-20 flex h-full max-w-6xl flex-col items-center justify-center gap-4 px-4 md:mt-8 md:items-start">
          <h4 className="text-base text-white text-justify md:text-start">
            Reconhecer valor onde ele é sutil exige outro tipo de visão.{" "}
            <span className="text-[#0097b2]">A sua.</span>
          </h4>

          <h1 className="max-w-[580px] text-justify font-[family-name:var(--font-modani-arabic-bold)] text-xl md:text-2xl text-white leading-snug">
            A Blackbridge é construída sobre{" "}
            <span className="text-[#0097b2]">método</span>,{" "}
            <span className="text-[#0097b2]">clareza</span> e{" "}
            <span className="text-[#0097b2]">precisão</span> — atributos que
            ressoam apenas em mentes treinadas para enxergar além do{" "}
            <span className="text-[#0097b2]">óbvio</span>.
          </h1>

          <p className="max-w-[480px] text-justify text-base text-white">
            Estar aqui é um <span className="text-[#0097b2]">privilégio</span>{" "}
            reservado a quem entende que pensar diferente é a primeira forma de
            operar com vantagem.
          </p>

          <div className="flex w-full max-w-[480px] items-center justify-end">
            <a className="group/edit text-base" href="/pt/contato">
              <button className="flex items-center justify-center gap-1 text-center text-[#0097b2]">
                Saiba mais{" "}
                <ArrowRight
                  className="transition-all delay-75 group-hover/edit:translate-x-1"
                  color="#0097b2"
                />
              </button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
