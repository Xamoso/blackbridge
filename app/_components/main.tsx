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

// Dados dos gráficos
const lineData = {
  labels: ["Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Profitability (%)",
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
            <a className="group/edit text-base" href="/pt/sobre">
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

      {/* ESPAÇAMENTO EXTRA PARA NÃO CORTAR O VÍDEO */}
      <div className="h-8 md:h-16 "></div>

      {/* SEÇÃO DE INSIGHTS */}
      <section className="bg-black px-6 py-16 text-white">
        <div className="mx-auto max-w-6xl space-y-12">
          <h1 className="text-4xl font-bold text-center">
            Performance Report – Blackbridge
          </h1>

          <p className="text-base text-justify opacity-80">
            Managed by an economist active in the financial market since 2014,
            specialized in the U.S. stock market. The Blackbridge strategy is
            driven by quantitative models, focusing on data analysis and the
            development of robust statistical approaches.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              ["YTD ROI", "28.6%"],
              ["Monthly Avg", "10.16%"],
              ["Best Month", "20.38%"],
              ["Worst Month", "-3.92%"],
              ["Accuracy", "49%"],
              ["Risk / Return", "1:4"],
            ].map(([label, value]) => (
              <div key={label} className="rounded border border-[#0097b2] p-4 text-center">
                <p className="text-sm opacity-70">{label}</p>
                <p className="text-2xl font-bold">{value}</p>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Monthly Performance</h2>
            <div className="w-full">
              <Line data={lineData} options={lineOptions} />
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Technical Sheet</h2>
            <ul className="list-disc pl-5 text-base opacity-80">
              <li>Manager: Caio Henrique</li>
              <li>Strategy started: Nov/2024</li>
              <li>Market: U.S. Equities</li>
              <li>Platform: Excent Web Trader</li>
              <li>Custody: Excent Capital</li>
              <li>Performance Fee: 30% on monthly profit.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Performance Comparison</h2>
            <div className="w-full">
              <Bar data={barData} options={barOptions} />
            </div>
            <p className="text-sm text-justify opacity-60">
              The chart illustrates cumulative performance in 2025, where
              Blackbridge, with an impressive 28.6%, significantly outperforms
              major market benchmarks. This performance reaffirms our
              differentiated ability to deliver superior returns, outperforming
              traditional alternatives.
            </p>
          </div>

          <p className="text-sm text-justify opacity-60">
            Investments involve risk and may result in losses. Past performance
            is not a guarantee of future returns. The information presented is
            for informational purposes only and does not constitute investment
            advice.
          </p>
        </div>
      </section>
    </>
  );
};

export default Main;
