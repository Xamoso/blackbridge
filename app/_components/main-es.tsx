"use client";

import { ArrowRight } from "lucide-react";
import React from "react";
import VideoBanner from "./banner-video";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  BarElement,
  ChartOptions,
} from "chart.js";
import { Line, Bar } from "react-chartjs-2";

// Registro dos elementos do chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Tooltip,
  Legend
);

// Datos de los gráficos
const lineData = {
  labels: ["Dic", "Ene", "Feb", "Mar", "Abr", "May", "Jun"],
  datasets: [
    {
      label: "Rentabilidad (%)",
      data: [5, 13, 20, 25, 22.5, 25, 29],
      borderColor: "#0097b2",
      backgroundColor: "transparent",
      tension: 0.4,
    },
  ],
};

const barData = {
  labels: [
    "Índice S&P 500",
    "CDI",
    "BOVA11 (Ibovespa)",
    "JGP Strategy FIC FIM",
    "Kadima High VOL FIM",
    "Índice Bloomberg US Aggregate Bond",
    "Blackbridge",
  ],
  datasets: [
    {
      label: "Desempeño (%)",
      data: [1.75, 5.15, 17.43, 18.12, 11.28, 1.58, 28.6],
      backgroundColor: "#0097b2",
    },
  ],
};

const lineOptions: ChartOptions<"line"> = {
  responsive: true,
  plugins: {
    legend: { display: false },
  },
  scales: {
    x: {
      ticks: { color: "#fff" },
      grid: { color: "#333" },
    },
    y: {
      ticks: { color: "#fff" },
      grid: { color: "#333" },
    },
  },
};

const barOptions: ChartOptions<"bar"> = {
  responsive: true,
  indexAxis: "y",
  plugins: {
    legend: { display: false },
  },
  scales: {
    x: {
      ticks: { color: "#fff" },
      grid: { color: "#333" },
    },
    y: {
      ticks: { color: "#fff" },
      grid: { color: "#333" },
    },
  },
};

const MainES = () => {
  return (
    <>
      {/* SECCIÓN PRINCIPAL CON VIDEO */}
      <section className='h-[800px] bg-[url("/banner-main-m.webp")] bg-cover bg-center bg-no-repeat py-16 md:bg-none'>
        <VideoBanner />
        <div className="mx-auto mt-20 flex h-full max-w-6xl flex-col items-center justify-center gap-4 px-4 md:mt-8 md:items-start">
          <h4 className="text-base text-white text-justify md:text-start">
            Reconocer el valor donde es sutil requiere otro tipo de visión.{" "}
            <span className="text-[#0097b2]">La tuya.</span>
          </h4>

          <h1 className="max-w-[580px] text-justify font-[family-name:var(--font-modani-arabic-bold)] text-xl md:text-2xl text-white leading-snug">
            Blackbridge se construye sobre{" "}
            <span className="text-[#0097b2]">método</span>,{" "}
            <span className="text-[#0097b2]">claridad</span> y{" "}
            <span className="text-[#0097b2]">precisión</span>, atributos que
            resuenan solo en mentes entrenadas para ver más allá de lo{" "}
            <span className="text-[#0097b2]">obvio</span>.
          </h1>

          <p className="max-w-[480px] text-justify text-base text-white">
            Estar aquí es un <span className="text-[#0097b2]">privilegio</span> reservado para quienes entienden que pensar diferente es la primera forma de operar con ventaja.
          </p>

          <div className="flex w-full max-w-[480px] items-center justify-end">
            <a className="group/edit text-base" href="/es/sobre">
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
      <div className="h-8 md:h-16"></div>

      {/* SECCIÓN DE INSIGHTS */}
      <section className="bg-black px-6 py-16 text-white">
        <div className="mx-auto max-w-6xl space-y-12">
          <h1 className="text-4xl font-bold text-center">
            Informe de Rendimiento – Blackbridge
          </h1>

          <p className="text-base text-justify opacity-80">
            Gestionado por un economista activo en el mercado financiero desde 2014, especializado en el mercado de acciones de EE.UU. La estrategia de Blackbridge está impulsada por modelos cuantitativos, enfocándose en el análisis de datos y el desarrollo de enfoques estadísticos robustos.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              ["Rentabilidad YTD", "28.6%"],
              ["Promedio Mensual", "10.16%"],
              ["Mejor Mes", "20.38%"],
              ["Peor Mes", "-3.92%"],
              ["Precisión", "49%"],
              ["Riesgo / Retorno", "1:4"],
            ].map(([label, value]) => (
              <div key={label} className="rounded border border-[#0097b2] p-4 text-center">
                <p className="text-sm opacity-70">{label}</p>
                <p className="text-2xl font-bold">{value}</p>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Rendimiento Mensual</h2>
            <div className="w-full">
              <Line data={lineData} options={lineOptions} />
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Comparación de Rendimiento</h2>
            <div className="w-full">
              <Bar data={barData} options={barOptions} />
            </div>
            <p className="text-sm text-justify opacity-60">
              El gráfico ilustra el rendimiento acumulado en 2025, donde Blackbridge, con un impresionante 28.6%, supera significativamente a los principales índices del mercado. Este resultado reafirma nuestra capacidad diferenciada para ofrecer rendimientos superiores, superando las alternativas tradicionales.
            </p>
          </div>

          <p className="text-xs text-justify opacity-60" style={{ fontSize: "10px" }}>
            Las inversiones implican riesgo y pueden resultar en pérdidas. El rendimiento pasado no garantiza resultados futuros. La información presentada es solo para fines informativos y no constituye asesoramiento financiero.
          </p>
        </div>
      </section>
    </>
  );
};

export default MainES;
