"use client"

import React from "react"
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
} from "chart.js"
import { Line, Bar } from "react-chartjs-2"

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Tooltip,
  Legend
)

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
}

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
}

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
}

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
}

const RelatorioPage = () => {
  return (
    <section className="bg-black px-6 py-16 text-white">
      <div className="mx-auto max-w-6xl space-y-12">
        <h1 className="text-4xl font-bold text-center">
          Relatório de Performance - Blackbridge
        </h1>

        <p className="text-base text-justify opacity-80">
          Gestão conduzida por economista com atuação no mercado financeiro desde 2014, especializada no mercado de ações norte-americano. A estratégia Blackridge é orientada por modelos quantitativos, com foco na análise de dados e no desenvolvimento de abordagens estatísticas robustas.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="rounded border border-[#0097b2] p-4 text-center">
            <p className="text-sm opacity-70">ROI YTD</p>
            <p className="text-2xl font-bold">28.6%</p>
          </div>
          <div className="rounded border border-[#0097b2] p-4 text-center">
            <p className="text-sm opacity-70">Média Mensal</p>
            <p className="text-2xl font-bold">10.16%</p>
          </div>
          <div className="rounded border border-[#0097b2] p-4 text-center">
            <p className="text-sm opacity-70">Melhor Mês</p>
            <p className="text-2xl font-bold">20.38%</p>
          </div>
          <div className="rounded border border-[#0097b2] p-4 text-center">
            <p className="text-sm opacity-70">Pior Mês</p>
            <p className="text-2xl font-bold">-3.92%</p>
          </div>
          <div className="rounded border border-[#0097b2] p-4 text-center">
            <p className="text-sm opacity-70">Assertividade</p>
            <p className="text-2xl font-bold">49%</p>
          </div>
          <div className="rounded border border-[#0097b2] p-4 text-center">
            <p className="text-sm opacity-70">Risco / Retorno</p>
            <p className="text-2xl font-bold">1:4</p>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Evolução Mensal</h2>
          <div className="w-full">
            <Line data={lineData} options={lineOptions} />
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Ficha Técnica</h2>
          <ul className="list-disc pl-5 text-base opacity-80">
            <li>Gestor: Caio Henrique</li>
            <li>Estratégia iniciada: Nov/2024</li>
            <li>Mercado: Ações EUA</li>
            <li>Plataforma: Excent Web Trader</li>
            <li>Custódia: Excent Capital</li>
            <li>Taxa de Performance: 30% sobre o lucro mensal.</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Comparativo de Resultado</h2>
          <div className="w-full">
            <Bar data={barData} options={barOptions} />
          </div>
          <p className="text-sm text-justify opacity-60">
            O gráfico ilustra o desempenho acumulado em 2025, onde o Blackbridge, com expressivos 28,6%, supera amplamente os principais benchmarks do mercado. Essa performance reafirma nossa capacidade diferenciada de gerar retornos superiores, deixando para trás as alternativas tradicionais.
          </p>
        </div>

        <p className="text-sm text-justify opacity-60">
          Investimentos envolvem riscos e podem resultar em perdas. A performance passada não é garantia de retorno futuro. Os dados apresentados têm finalidade informativa e não constituem recomendação de investimento.
        </p>
      </div>
    </section>
  )
}

export default RelatorioPage
