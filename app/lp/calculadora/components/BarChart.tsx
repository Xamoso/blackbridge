// app/lp/calculadora/components/BarChart.tsx
'use client';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  type ChartOptions,
  type ChartData,
  type TooltipItem,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const TURQUOISE = 'rgba(0,151,178,0.9)'; // #0097b2
const NEUTRAL = 'rgba(148,163,184,0.9)'; // slate-300 aprox

export default function BarChart({
  labels,
  data,
  highlightIndex,
}: {
  labels: string[];
  data: number[]; // percentuais (ex.: 12.8)
  highlightIndex?: number;
}) {
  const colors = data.map((_, i) => (i === highlightIndex ? TURQUOISE : NEUTRAL));

  const options: ChartOptions<'bar'> = {
    indexAxis: 'y',
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (ctx: TooltipItem<'bar'>) => `${String(ctx.raw)}%`,
        },
      },
    },
    scales: {
      x: {
        grid: { color: 'rgba(255,255,255,0.06)' },
        // evita "any": a assinatura aceita (value: number|string, index: number, ticks: Tick[]) => string|number
        ticks: {
          color: 'rgba(229,229,229,0.9)',
          callback: (value: number | string) => `${value}%`,
        },
      },
      y: {
        grid: { display: false },
        ticks: { color: 'rgba(229,229,229,0.9)' },
      },
    },
  };

  const ds: ChartData<'bar'> = {
    labels,
    datasets: [
      {
        data,
        backgroundColor: colors,
        borderColor: colors, // mantém o mesmo tom no contorno
        borderWidth: 0,
        borderRadius: 6,
        borderSkipped: false,
        barThickness: 22,
        hoverBackgroundColor: colors.map((c) =>
          c === TURQUOISE ? 'rgba(0,151,178,1)' : 'rgba(148,163,184,1)'
        ),
      },
    ],
  };

  return <Bar options={options} data={ds} />;
}
