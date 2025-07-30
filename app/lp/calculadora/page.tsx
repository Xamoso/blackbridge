// app/lp/calculadora/page.tsx
import { Metadata } from 'next';
import LeadGate from './components/LeadGate';
import Results from './components/Results';
import CtaAfterCalc from './components/CtaAfterCalc';

export const metadata: Metadata = {
  title: 'Calculadora de Rentabilidade — Blackbridge',
  description:
    'Veja quanto seu dinheiro teria hoje se você tivesse dolarizado e investido com a Blackbridge desde janeiro. Compare com benchmarks globais.',
  robots: { index: false, follow: false, nocache: true, googleBot: { index: false, follow: false } },
  openGraph: { title: 'Calculadora Blackbridge', description: 'Simule dolarização + performance.' },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-10">
        <header className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-semibold">
            Patrimônio não cresce parado. Quanto você deixou na mesa por não investir com a Blackbridge?
          </h1>
          <p className="text-neutral-300 mt-2">
            Compare o efeito do câmbio e o retorno da Blackbridge, além de benchmarks do Brasil e do mundo.
          </p>

          {/* Botão aparece só após o cálculo */}
          <CtaAfterCalc />
        </header>

        {/* Gate de Lead → após enviar, libera os resultados */}
        <LeadGate />

        {/* A área de resultados é montada pelo LeadGate via custom event para manter a página limpa */}
        <Results />
      </section>
    </main>
  );
}
