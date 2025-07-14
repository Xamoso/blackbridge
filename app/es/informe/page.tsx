"use client";

import React from "react";
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Tooltip,
  Legend
);

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
    "S&P 500 Index",
    "CDI",
    "BOVA11 (Ibovespa)",
    "JGP Strategy FIC FIM",
    "Kadima High VOL FIM",
    "Bloomberg US Aggregate Bond Index",
    "Blackbridge",
  ],
  datasets: [
    {
      label: "Performance (%)",
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

const InformePage = () => {
  return (
    <section className="bg-black px-6 py-16 text-white">
      <div className="mx-auto max-w-6xl space-y-12">
        <h1 className="text-4xl font-bold text-center">
          Informe de Rendimiento - Blackbridge
        </h1>

        <p className="text-base text-justify opacity-80">
          Gestión liderada por un economista con experiencia en el mercado financiero desde 2014, especializado en el mercado de acciones de EE.UU. La estrategia Blackbridge está guiada por modelos cuantitativos con enfoque en el análisis de datos y el desarrollo de enfoques estadísticos sólidos.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="rounded border border-[#0097b2] p-4 text-center">
            <p className="text-sm opacity-70">ROI YTD</p>
            <p className="text-2xl font-bold">28.6%</p>
          </div>
          <div className="rounded border border-[#0097b2] p-4 text-center">
            <p className="text-sm opacity-70">Media Mensual</p>
            <p className="text-2xl font-bold">10.16%</p>
          </div>
          <div className="rounded border border-[#0097b2] p-4 text-center">
            <p className="text-sm opacity-70">Mejor Mes</p>
            <p className="text-2xl font-bold">20.38%</p>
          </div>
          <div className="rounded border border-[#0097b2] p-4 text-center">
            <p className="text-sm opacity-70">Peor Mes</p>
            <p className="text-2xl font-bold">-3.92%</p>
          </div>
          <div className="rounded border border-[#0097b2] p-4 text-center">
            <p className="text-sm opacity-70">Aciertos</p>
            <p className="text-2xl font-bold">49%</p>
          </div>
          <div className="rounded border border-[#0097b2] p-4 text-center">
            <p className="text-sm opacity-70">Riesgo / Retorno</p>
            <p className="text-2xl font-bold">1:4</p>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Evolución Mensual</h2>
          <div className="w-full">
            <Line data={lineData} options={lineOptions} />
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Ficha Técnica</h2>
          <ul className="list-disc pl-5 text-base opacity-80">
            <li>Gestor: Caio Henrique</li>
            <li>Estrategia iniciada: Nov/2024</li>
            <li>Mercado: Acciones EE.UU.</li>
            <li>Plataforma: Excent Web Trader</li>
            <li>Custodia: Excent Capital</li>
            <li>Comisión de Éxito: 30% sobre el beneficio mensual.</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Comparativo de Resultados</h2>
          <div className="w-full">
            <Bar data={barData} options={barOptions} />
          </div>
          <p className="text-sm text-justify opacity-60">
            El gráfico ilustra el rendimiento acumulado en 2025, donde Blackbridge, con un destacado 28.6%, supera ampliamente a los principales benchmarks del mercado. Este desempeño reafirma nuestra capacidad diferenciada para generar retornos superiores, dejando atrás las alternativas tradicionales.
          </p>
        </div>

        <p className="text-sm text-justify opacity-60">
          Las inversiones conllevan riesgos y pueden resultar en pérdidas. El rendimiento pasado no garantiza resultados futuros. Los datos presentados tienen fines informativos y no constituyen una recomendación de inversión.
        </p>
      </div>
    </section>
  );
};

export default InformePage;
