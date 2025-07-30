// app/lp/calculadora/components/Results.tsx
'use client';

import { useEffect, useMemo, useState } from 'react';
import BarChart from './BarChart';

type FxJSON = {
  t0: { perUSD: Record<string, number>; date: string };
  t1: { perUSD: Record<string, number>; date: string };
};

type Benchmark = {
  key: string;
  label: string;
  currency: 'USD' | 'BRL' | 'EUR' | 'GBP';
  ytdReturn: number; // em decimal, ex: 0.128 = 12.8%
};

type DataJSON = {
  fx: FxJSON;
  benchmarks: Benchmark[];
  blackbridge: { ytdReturnUSD: number };
};

function toUSD(amount: number, ccy: string, perUSD: Record<string, number>) {
  const rate = perUSD[ccy];
  if (!rate) throw new Error(`FX ausente para ${ccy}`);
  return amount / rate; // ccy por USD
}

function fromUSD(amountUSD: number, ccy: string, perUSD: Record<string, number>) {
  const rate = perUSD[ccy];
  if (!rate) throw new Error(`FX ausente para ${ccy}`);
  return amountUSD * rate;
}

function finalValueForInstrument(
  A0_user: number,
  userCcy: string,
  instrumentCcy: string,
  ytdReturn: number,
  fx: FxJSON,
) {
  // 1) Converter A0 para a moeda do instrumento no t0 (via USD como pivô)
  const A0_usd = toUSD(A0_user, userCcy, fx.t0.perUSD);

  // USD -> moeda do instrumento no t0 (se necessário)
  let A0_instrument: number;
  if (instrumentCcy === 'USD') {
    A0_instrument = A0_usd;
  } else {
    const perUSD_t0 = fx.t0.perUSD[instrumentCcy];
    if (!perUSD_t0) throw new Error(`FX ausente para ${instrumentCcy}`);
    A0_instrument = A0_usd * perUSD_t0;
  }

  // 2) Aplicar retorno do instrumento
  const A1_instrument = A0_instrument * (1 + ytdReturn);

  // 3) Converter de volta para a moeda do usuário no t1 (via USD)
  let A1_usd: number;
  if (instrumentCcy === 'USD') {
    A1_usd = A1_instrument;
  } else {
    const perUSD_t1 = fx.t1.perUSD[instrumentCcy];
    if (!perUSD_t1) throw new Error(`FX ausente para ${instrumenCcy}`);
    A1_usd = A1_instrument / perUSD_t1;
  }

  const A1_user = fromUSD(A1_usd, userCcy, fx.t1.perUSD);
  return A1_user;
}

export default function Results() {
  const [lead, setLead] = useState<{ amount: number; currency: string; name?: string } | null>(null);
  const [data, setData] = useState<DataJSON | null>(null);
  const [viewCcy, setViewCcy] = useState<string | null>(null); // moeda de exibição (toggle futuro)
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    function onLead(e: any) {
      setLead(e.detail);
      setViewCcy(e.detail.currency);
    }
    window.addEventListener('blackbridge:lead_submitted', onLead);
    return () => window.removeEventListener('blackbridge:lead_submitted', onLead);
  }, []);

  useEffect(() => {
    if (!lead) return;
    setLoading(true);
    fetch('/api/data')
      .then((r) => r.json())
      .then((json: DataJSON) => setData(json))
      .catch((e) => {
        console.error(e);
        alert('Falha ao carregar dados de mercado.');
      })
      .finally(() => setLoading(false));
  }, [lead]);

  const result = useMemo(() => {
    if (!lead || !data || !viewCcy) return null;
    const { amount: A0, currency: userCcy } = lead;
    const fx = data.fx;

    // 1) Câmbio (USD em caixa)
    const onlyUSD_value = finalValueForInstrument(A0, userCcy, 'USD', 0, fx);

    // 2) Blackbridge
    const bb_value = finalValueForInstrument(A0, userCcy, 'USD', data.blackbridge.ytdReturnUSD, fx);

    // 3) Benchmarks
    const benches = data.benchmarks.map((b) => {
      const v = finalValueForInstrument(A0, userCcy, b.currency, b.ytdReturn, fx);
      return { ...b, finalValue: v, pct: v / A0 - 1 };
    });

    const rows = [
      { key: 'bb', label: 'Blackbridge', finalValue: bb_value, pct: bb_value / A0 - 1 },
      { key: 'usd_cash', label: 'Câmbio', finalValue: onlyUSD_value, pct: onlyUSD_value / A0 - 1 },
      ...benches,
    ].sort((a, b) => b.pct - a.pct);

    return {
      A0,
      userCcy,
      t0: data.fx.t0.date,
      t1: data.fx.t1.date,
      rows,
    };
  }, [lead, data, viewCcy]);

  if (!lead) return <div id="bb-results" />;

  return (
    <section id="bb-results" className="mt-8">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-semibold">Resultados</h2>
        <div className="text-sm text-neutral-400">
          Período: desde {data?.fx.t0.date} até {data?.fx.t1.date}
        </div>
      </div>

      {loading && (
        <div className="animate-pulse bg-neutral-900/60 border border-neutral-800 rounded-xl h-40 w-full mb-6" />
      )}

      {result && (
        <>
          {/* Cards resumo */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <div className="bg-neutral-900/60 border border-neutral-800 rounded-xl p-4">
              <div className="text-neutral-400 text-sm mb-1">Câmbio</div>
              <div className="text-2xl font-semibold">
                {result.rows.find((r) => r.key === 'usd_cash')?.finalValue.toLocaleString(undefined, {
                  style: 'currency',
                  currency: result.userCcy,
                })}
              </div>
            </div>

            {/* Card Blackbridge com turquesa */}
            <div className="bg-neutral-900/60 border rounded-xl p-4" style={{ borderColor: '#0097b2' }}>
              <div className="text-sm mb-1" style={{ color: '#0097b2' }}>
                Blackbridge (Câmbio + Performance)
              </div>
              <div className="text-2xl font-semibold">
                {result.rows.find((r) => r.key === 'bb')?.finalValue.toLocaleString(undefined, {
                  style: 'currency',
                  currency: result.userCcy,
                })}
              </div>
            </div>

            <div className="bg-neutral-900/60 border border-neutral-800 rounded-xl p-4">
              <div className="text-neutral-400 text-sm mb-1">Diferença vs. Câmbio</div>
              <div className="text-2xl font-semibold">
                {(() => {
                  const bb = result.rows.find((r) => r.key === 'bb')!;
                  const usd = result.rows.find((r) => r.key === 'usd_cash')!;
                  const diff = bb.finalValue - usd.finalValue;
                  return diff.toLocaleString(undefined, { style: 'currency', currency: result.userCcy });
                })()}
              </div>
            </div>
          </div>

          {/* Gráfico comparativo (ranking) */}
          <div className="bg-neutral-900/60 border border-neutral-800 rounded-xl p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold">Comparativo de Performance (YTD)</h3>
              <div className="text-xs text-neutral-400">
                Exibindo em {result.userCcy} • Valores relativos ao aporte inicial
              </div>
            </div>

            <BarChart
              labels={result.rows.map((r) => r.label)}
              data={result.rows.map((r) => Math.round((r.pct || 0) * 1000) / 10)} // em %
              highlightIndex={result.rows.findIndex((r) => r.key === 'bb')}
            />

            <div className="text-xs text-neutral-500 mt-3">
              Nota: “Câmbio” isola o efeito da dolarização (manter em USD). “Blackbridge” soma câmbio + retorno do
              fundo (USD). Benchmarks são convertidos para a sua moeda.
            </div>
          </div>
        </>
      )}
    </section>
  );
}
