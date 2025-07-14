import React from "react"

const ProductsPage = () => {
  return (
    <>
      <section className="h-[600px] bg-[url('/banner-main-products-m.webp')] bg-cover bg-right-top bg-no-repeat px-6 pt-72 pb-16 md:bg-[url('/banner-main-products-d.webp')] md:h-[800px] md:pt-16">
        {/* ↑ pt-52 no mobile para descer o texto principal */}
        <div className="mx-auto flex h-full max-w-6xl flex-col items-start justify-center gap-4 md:gap-8">
          <h1 className="max-w-[1080px] text-start text-4xl text-white md:text-6xl lg:text-7xl">
            Estratégia, Rigor e Consistência em Investimentos{" "}
            <span style={{ color: "#0097b2" }}>Quantitativos</span>
          </h1>
          <p className="max-w-[1080px] text-base text-white opacity-80 mt-4 md:text-lg lg:text-xl text-justify">
            A Blackbridge é uma estratégia quantitativa de investimentos voltada para o mercado de ações norte-americano, conduzida por um economista com mais de uma década de experiência no mercado financeiro. Com base em modelos estatísticos robustos, a abordagem prioriza a consistência, a proteção do capital e a eficiência operacional.
            <br /><br />
            Esta página apresenta o Blackbridge Insight, um documento que consolida os principais dados, métricas e resultados da estratégia. Ele oferece uma visão clara e objetiva da performance recente, estrutura de risco, metodologia de operação e comparativos com benchmarks tradicionais — reafirmando o compromisso com a entrega de alfa sustentável e disciplinada.
          </p>
        </div>
      </section>

      <section className="px-4 py-8">
        <div className="mx-auto max-w-6xl flex flex-col items-center">
          {/* Desktop only title */}
          <h2 className="hidden md:block font-[family-name:var(--font-modani-arabic-bold)] text-3xl text-white mb-6 text-center">
            Leia ou baixe o Documento:
          </h2>

          {/* Mostrar PDF embed apenas em desktop */}
          <div className="hidden md:block h-[800px] w-full max-w-4xl border border-white">
            <iframe
              src="/blackbridge-insight.pdf"
              className="h-full w-full"
              frameBorder="0"
              title="Blackbridge Insight PDF"
            ></iframe>
          </div>

          {/* Botão no mobile para abrir PDF em nova aba */}
          <div className="block md:hidden text-center mt-40">
            {/* ↑ mt-12 no mobile para descer o botão */}
            <a
              href="/blackbridge-insight.pdf"
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
  )
}

export default ProductsPage
