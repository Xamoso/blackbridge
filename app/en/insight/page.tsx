import React from "react";

const InsightPageEN = () => {
  return (
    <>
      <section className="h-[600px] bg-[url('/banner-main-products-m.webp')] bg-cover bg-right-top bg-no-repeat px-6 pt-72 pb-16 md:bg-[url('/banner-main-products-d.webp')] md:h-[800px] md:pt-16">
        <div className="mx-auto flex h-full max-w-6xl flex-col items-start justify-center gap-4 md:gap-8">
          <h1 className="max-w-[1080px] text-start text-4xl text-white md:text-6xl lg:text-7xl">
            Strategy, Rigor, and Consistency in{" "}
            <span style={{ color: "#0097b2" }}>Quantitative Investments</span>
          </h1>
          <p className="max-w-[1080px] text-base text-white opacity-80 mt-4 md:text-lg lg:text-xl text-justify">
            Blackbridge is a quantitative investment strategy focused on the U.S. equity market, led by an economist with over a decade of experience in the financial industry. Based on robust statistical models, the approach prioritizes consistency, capital protection, and operational efficiency.
            <br /><br />
            This page presents the Blackbridge Insight — a document that consolidates key data, metrics, and strategy results. It provides a clear and objective view of recent performance, risk structure, operational methodology, and comparisons with traditional benchmarks — reaffirming our commitment to disciplined and sustainable alpha generation.
          </p>
        </div>
      </section>

      <section className="px-4 py-8">
        <div className="mx-auto max-w-6xl flex flex-col items-center">
          {/* Desktop only title */}
          <h2 className="hidden md:block font-[family-name:var(--font-modani-arabic-bold)] text-3xl text-white mb-6 text-center">
            View or Download the Document:
          </h2>

          {/* PDF embed on desktop */}
          <div className="hidden md:block h-[800px] w-full max-w-4xl border border-white">
            <iframe
              src="/The Blackbridge Insight - EN.pdf"
              className="h-full w-full"
              frameBorder="0"
              title="Blackbridge Insight PDF"
            ></iframe>
          </div>

          {/* Mobile download button */}
          <div className="block md:hidden text-center mt-40">
            <a
              href="/The Blackbridge Insight - EN.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded bg-[#0097b2] px-6 py-3 text-white font-semibold"
            >
              Open Insight
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default InsightPageEN;
