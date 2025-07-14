import React from "react";

const SobrePagePT = () => {
  return (
    <>
      <section className="relative min-h-screen md:h-[100vh] overflow-hidden">
        {/* Imagem de fundo em toda a seção */}
        <div className="absolute inset-0 -z-10 w-full h-full bg-cover bg-center bg-no-repeat bg-[url('/banner-quem-somos-d-1.webp')] md:bg-[url('/banner-quem-somos-d-1.webp')]" />

        <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-4 py-32 lg:flex-row">
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

          <div className="flex w-full justify-center">
            <video
              src="/video-business.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full max-w-[900px] object-cover rounded"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default SobrePagePT;
