import React from "react";

const InsightPageES = () => {
  return (
    <>
      <section className="h-[600px] bg-[url('/banner-main-products-m.webp')] bg-cover bg-right-top bg-no-repeat px-6 pt-72 pb-16 md:bg-[url('/banner-main-products-d.webp')] md:h-[800px] md:pt-16">
        {/* ↑ pt-52 en móvil para mover el texto principal hacia abajo */}
        <div className="mx-auto flex h-full max-w-6xl flex-col items-start justify-center gap-4 md:gap-8">
          <h1 className="max-w-[1080px] text-start text-4xl text-white md:text-6xl lg:text-7xl">
            Estrategia, Rigor y Consistencia en Inversiones{" "}
            <span style={{ color: "#0097b2" }}>Cuantitativas</span>
          </h1>
          <p className="max-w-[1080px] text-base text-white opacity-80 mt-4 md:text-lg lg:text-xl text-justify">
            Blackbridge es una estrategia cuantitativa de inversión enfocada en el mercado accionario estadounidense, dirigida por un economista con más de una década de experiencia en el sector financiero. Basada en modelos estadísticos sólidos, la estrategia prioriza la consistencia, la protección del capital y la eficiencia operativa.
            <br /><br />
            Esta página presenta el Blackbridge Insight, un documento que consolida los principales datos, métricas y resultados de la estrategia. Ofrece una visión clara y objetiva del desempeño reciente, estructura de riesgo, metodología operativa y comparativos con benchmarks tradicionales — reafirmando el compromiso con la entrega de alfa sostenible y disciplinado.
          </p>
        </div>
      </section>

      <section className="px-4 py-8">
        <div className="mx-auto max-w-6xl flex flex-col items-center">
          {/* Título solo para escritorio */}
          <h2 className="hidden md:block font-[family-name:var(--font-modani-arabic-bold)] text-3xl text-white mb-6 text-center">
            Lee o descarga el documento:
          </h2>

          {/* Mostrar PDF embebido solo en escritorio */}
          <div className="hidden md:block h-[800px] w-full max-w-4xl border border-white">
            <iframe
              src="/The Blackbridge Insight - ES.pdf"
              className="h-full w-full"
              frameBorder="0"
              title="The Blackbridge Insight ES"
            ></iframe>
          </div>

          {/* Botón en móvil para abrir PDF en nueva pestaña */}
          <div className="block md:hidden text-center mt-40">
            <a
              href="/The Blackbridge Insight - ES.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded bg-[#0097b2] px-6 py-3 text-white font-semibold"
            >
              Abrir Insight
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default InsightPageES;
