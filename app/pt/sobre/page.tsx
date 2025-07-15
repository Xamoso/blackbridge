import React from "react";

const SobrePagePT = () => {
  return (
    <>
      <section className="relative min-h-screen md:min-h-[100vh] overflow-hidden">
        {/* Imagem de fundo */}
        <div className="absolute inset-0 -z-10 w-full h-full bg-cover bg-center bg-no-repeat bg-[url('/banner-quem-somos-d-1.webp')]" />

        {/* Container principal com padding top apenas */}
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 pt-32 lg:flex-row">
          {/* Texto */}
          <div className="flex h-full w-full flex-col items-center justify-center gap-6">
            <h1 className="text-4xl font-[family-name:var(--font-modani-arabic-bold)] text-white text-justify text-center md:text-start">
              <span style={{ color: "#0097b2" }}>Blackbridge</span> não foi criada para todos — e essa escolha é parte do que nos define.
            </h1>

            <div className="space-y-4">
              <p className="text-sm text-white text-justify opacity-80">
                Nascemos com um propósito claro: aplicar pensamento quantitativo, disciplina analítica e rigor metodológico à tomada de risco. Não apostamos na intuição desinformada nem nos consensos fáceis. Operamos com inteligência, cálculo e convicção.
              </p>
              <p className="text-sm text-white text-justify opacity-80">
                Nosso diferencial não está em promessas grandiosas, mas na construção silenciosa de vantagem real — ancorada em dados, lógica e assimetria. Trabalhamos onde muitos não olham. E vemos o que muitos não percebem.
              </p>
              <p className="text-sm text-white text-justify opacity-80">
                Aqui, performance é consequência. Antes dela, vem o processo: modelos robustos, pesquisa profunda, leitura aguda dos mercados. Tudo é projetado para uma finalidade só — transformar complexidade em decisão e incerteza em estratégia.
              </p>
              <p className="text-sm text-white text-justify opacity-80">
                Atendemos quem valoriza a clareza onde reina o ruído. Quem entende que pensar diferente não é estilo — é método. Quem reconhece que excelência não se improvisa — se constrói.
              </p>
              <p className="text-sm text-white text-justify opacity-80">
                A Blackbridge é para quem exige mais da lógica, do risco e de si mesmo.
              </p>
            </div>
          </div>

          {/* Vídeo */}
          <div className="flex w-full justify-center">
            <video
              src="/quant.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full max-w-[900px] object-cover rounded"
            />
          </div>
        </div>

        {/* Texto sobre Machine Learning (mesma largura e padding horizontal) */}
        <div className="mx-auto mt-12 max-w-6xl px-4 pb-24 space-y-8">

<h2 className="text-4xl font-[family-name:var(--font-modani-arabic-bold)] text-white text-justify">
  Inteligência não é apenas programada — é{" "}
  <span style={{ color: "#0097b2" }}>construída</span>.
</h2>



          <p className="text-white text-justify text-sm opacity-80">
            Na Blackbridge, a complexidade não nos intimida — ela nos move. Utilizamos modelos de Machine Learning que não apenas processam dados, mas aprendem com cada cálculo, ajustam-se com cada nova informação e evoluem com cada movimento de mercado.
          </p>

          <p className="text-white text-justify text-sm opacity-80">
            Esses modelos foram desenvolvidos para absorver padrões invisíveis ao olho humano. Eles testam hipóteses a velocidades impossíveis, medem assimetrias em tempo real e simulam cenários com uma precisão que transcende a intuição. Cada ponto de dado alimenta uma inteligência que cresce, refina e se torna mais eficiente a cada iteração.
          </p>

          <p className="text-white text-justify text-sm opacity-80">
            Mas aqui, tecnologia não substitui pensamento — ela o amplifica.
          </p>

          <p className="text-white text-justify text-sm opacity-80">
            O modelo decide? Nunca sozinho. Por trás de cada algoritmo, há o olhar analítico de quem vive o mercado há mais de uma década, treinado para reconhecer ruídos, falsos positivos e armadilhas estatísticas que nem mesmo a melhor máquina detectaria sozinha.
          </p>

          <p className="text-white text-justify text-sm opacity-80">
            É essa simbiose entre cálculo e crítica, entre automação e discernimento, que nos permite operar com antecipação e não apenas reação.
          </p>

          <p className="text-white text-justify text-sm opacity-80">
            Não nos guiamos por impulsos, nem por modismos. Na Blackbridge, a decisão é a ponta de uma estrutura profunda, onde dados são organizados, lidos e interpretados com rigor. A máquina fornece alcance. O gestor define o alvo.
          </p>
        </div>
      </section>
    </>
  );
};

export default SobrePagePT;
