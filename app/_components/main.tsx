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
  labels: ["Dez", "Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
  datasets: [
    {
      label: "Rentabilidade (%)",
      data: [5, 13, 20, 25, 22.5, 25, 29],
      borderColor: "#0097b2",
      backgroundColor: "transparent",
      tension: 0.4,
    },
  ],
};

const barData = {
  labels: [
    "Blackbridge",
    "BOVA11 (Ibovespa)",
    "Bloomberg US Aggregate Bond Index",
    "S&P 500 Index",
    "CDI",
    "Câmbio",
    "BKadima High VOL FIM",
  ],
  datasets: [
    {
      label: "Performance (%)",
      data: [28.6, 14.3, 11.02, 8.52, 7.50, 6.87, -3.31],
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

      {/* ESPAÇAMENTO EXTRA PARA NÃO CORTAR O VÍDEO */}
      <div className="h-8 md:h-16 "></div>

      {/* SEÇÃO DE INSIGHTS */}
      <section className="bg-black px-6 py-16 text-white">
        <div className="mx-auto max-w-6xl space-y-12">
          <h1 className="text-4xl font-bold text-center">
            Relatório de Performance – Blackbridge
          </h1>

          <p className="text-base text-justify opacity-80">
            Gerido por um economista atuante no mercado financeiro desde 2014,
            especializado no mercado de ações dos EUA. A estratégia Blackbridge
            é impulsionada por modelos quantitativos, com foco na análise de
            dados e no desenvolvimento de abordagens estatísticas robustas.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[["Retorno no Ano", "28.6%"],
              ["Média Mensal", "10.16%"],
              ["Melhor Mês", "20.38%"],
              ["Pior Mês", "-3.92%"],
              ["Taxa de Acerto", "49%"],
              ["Risco / Retorno", "1:4"]
            ].map(([label, value]) => (
              <div key={label} className="rounded border border-[#0097b2] p-4 text-center">
                <p className="text-sm opacity-70">{label}</p>
                <p className="text-2xl font-bold">{value}</p>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Performance Mensal</h2>
            <div className="w-full">
              <Line data={lineData} options={lineOptions} />
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Comparativo de Performance</h2>
            <div className="w-full">
              <Bar data={barData} options={barOptions} />
            </div>
            <p className="text-sm text-justify opacity-60">
              O gráfico ilustra a performance acumulada em 2025, onde a
              Blackbridge, com impressionantes 28,6%, supera significativamente
              os principais benchmarks de mercado. Esse desempenho reforça nossa
              capacidade diferenciada de entregar retornos superiores,
              superando alternativas tradicionais.
            </p>
          </div>

          <p className="text-xs text-justify opacity-60" style={{ fontSize: "10px" }}>
            Investimentos envolvem riscos e podem gerar perdas. A performance
            passada não garante retornos futuros. As informações apresentadas
            têm caráter meramente informativo e não constituem recomendação de
            investimento.
          </p>
        </div>
      </section>
    </>
  );
};

export default Main;
