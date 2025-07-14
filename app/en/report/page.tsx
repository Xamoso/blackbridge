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

const ReportPageEN = () => {
  return (
    <section className="bg-black px-6 py-16 text-white">
      <div className="mx-auto max-w-6xl space-y-12">
        <h1 className="text-4xl font-bold text-center">
          Performance Report – Blackbridge
        </h1>

        <p className="text-base text-justify opacity-80">
          Managed by an economist active in the financial market since 2014, specialized in the U.S. stock market. The Blackbridge strategy is driven by quantitative models, focusing on data analysis and the development of robust statistical approaches.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="rounded border border-[#0097b2] p-4 text-center">
            <p className="text-sm opacity-70">YTD ROI</p>
            <p className="text-2xl font-bold">28.6%</p>
          </div>
          <div className="rounded border border-[#0097b2] p-4 text-center">
            <p className="text-sm opacity-70">Monthly Avg</p>
            <p className="text-2xl font-bold">10.16%</p>
          </div>
          <div className="rounded border border-[#0097b2] p-4 text-center">
            <p className="text-sm opacity-70">Best Month</p>
            <p className="text-2xl font-bold">20.38%</p>
          </div>
          <div className="rounded border border-[#0097b2] p-4 text-center">
            <p className="text-sm opacity-70">Worst Month</p>
            <p className="text-2xl font-bold">-3.92%</p>
          </div>
          <div className="rounded border border-[#0097b2] p-4 text-center">
            <p className="text-sm opacity-70">Accuracy</p>
            <p className="text-2xl font-bold">49%</p>
          </div>
          <div className="rounded border border-[#0097b2] p-4 text-center">
            <p className="text-sm opacity-70">Risk / Return</p>
            <p className="text-2xl font-bold">1:4</p>
          </div>
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
            The chart illustrates cumulative performance in 2025, where Blackbridge, with an impressive 28.6%, significantly outperforms major market benchmarks. This performance reaffirms our differentiated ability to deliver superior returns, outperforming traditional alternatives.
          </p>
        </div>

        <p className="text-sm text-justify opacity-60">
          Investments involve risk and may result in losses. Past performance is not a guarantee of future returns. The information presented is for informational purposes only and does not constitute investment advice.
        </p>
      </div>
    </section>
  );
};

export default ReportPageEN;
