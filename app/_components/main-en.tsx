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

// Register chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Tooltip,
  Legend
);

// Data for charts
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

const MainEN = () => {
  return (
    <>
      {/* MAIN HERO SECTION */}
      <section className='h-[800px] bg-[url("/banner-main-m.webp")] bg-cover bg-center bg-no-repeat py-16 md:bg-none'>
        <VideoBanner />
        <div className="mx-auto mt-20 flex h-full max-w-6xl flex-col items-center justify-center gap-4 px-4 md:mt-8 md:items-start">
          <h4 className="text-base text-white text-justify md:text-start">
            Recognizing value where it is subtle requires a different kind of vision.{" "}
            <span className="text-[#0097b2]">Yours.</span>
          </h4>

          <h1 className="max-w-[580px] text-justify font-[family-name:var(--font-modani-arabic-bold)] text-xl md:text-2xl text-white leading-snug">
            Blackbridge is built on{" "}
            <span className="text-[#0097b2]">method</span>,{" "}
            <span className="text-[#0097b2]">clarity</span>, and{" "}
            <span className="text-[#0097b2]">precision</span> — attributes that
            resonate only with minds trained to see beyond the{" "}
            <span className="text-[#0097b2]">obvious</span>.
          </h1>

          <p className="max-w-[480px] text-justify text-base text-white">
            Being here is a <span className="text-[#0097b2]">privilege</span> reserved for those who understand that thinking differently is the first way to operate with an advantage.
          </p>

          <div className="flex w-full max-w-[480px] items-center justify-end">
            <a className="group/edit text-base" href="/en/contact">
              <button className="flex items-center justify-center gap-1 text-center text-[#0097b2]">
                Learn more{" "}
                <ArrowRight
                  className="transition-all delay-75 group-hover/edit:translate-x-1"
                  color="#0097b2"
                />
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* SPACER TO AVOID VIDEO OVERLAP */}
      <div className="h-8 md:h-16"></div>

      {/* INSIGHT SECTION */}
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

          <p className="text-xs text-justify opacity-60" style={{ fontSize: "10px" }}>
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

export default MainEN;
