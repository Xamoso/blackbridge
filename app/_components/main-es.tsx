"use client";

import { ArrowRight } from "lucide-react";
import React from "react";
import VideoBanner from "./banner-video";

const MainES = () => {
  return (
    <>
      {/* SECCIÓN PRINCIPAL CON VIDEO */}
      <section className='h-[800px] bg-[url("/banner-main-m.webp")] bg-cover bg-center bg-no-repeat py-16 md:bg-none'>
        <VideoBanner />
        <div className="mx-auto mt-20 flex h-full max-w-6xl flex-col items-center justify-center gap-4 px-4 md:mt-8 md:items-start">
          <h4 className="text-base text-white text-justify md:text-start">
            Reconocer valor donde es sutil requiere otro tipo de visión.{" "}
            <span className="text-[#0097b2]">La tuya.</span>
          </h4>

          <h1 className="max-w-[580px] text-justify font-[family-name:var(--font-modani-arabic-bold)] text-xl md:text-2xl text-white leading-snug">
            Blackbridge se construye sobre{" "}
            <span className="text-[#0097b2]">método</span>,{" "}
            <span className="text-[#0097b2]">claridad</span> y{" "}
            <span className="text-[#0097b2]">precisión</span> — atributos que
            resuenan solo en mentes entrenadas para ver más allá de lo{" "}
            <span className="text-[#0097b2]">obvio</span>.
          </h1>

          <p className="max-w-[480px] text-justify text-base text-white">
            Estar aquí es un <span className="text-[#0097b2]">privilegio</span>{" "}
            reservado para quienes entienden que pensar diferente es la primera forma de operar con ventaja.
          </p>

          <div className="flex w-full max-w-[480px] items-center justify-end">
            <a className="group/edit text-base" href="/es/contacto">
              <button className="flex items-center justify-center gap-1 text-center text-[#0097b2]">
                Saber más{" "}
                <ArrowRight
                  className="transition-all delay-75 group-hover/edit:translate-x-1"
                  color="#0097b2"
                />
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* ESPACIO ADICIONAL ENTRE SECCIONES */}
      <div className="h-8 md:h-16 "></div>
    </>
  );
};

export default MainES;
