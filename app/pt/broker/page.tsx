import React from "react";

const ExcentPagePT = () => {
  return (
    <>
      <section className="relative min-h-screen overflow-hidden bg-black text-white">
        {/* Banner de vídeo centralizado e com margem */}
        <div className="mx-auto mt-24 max-w-5xl px-6">
          <video
            src="/excent.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-[200px] object-cover rounded md:h-[200px] h-[150px]"
          />
        </div>

        {/* Conteúdo abaixo do vídeo */}
        <div className="mx-auto max-w-5xl px-6 py-16 space-y-8">
          <h1 className="text-4xl font-[family-name:var(--font-modani-arabic-bold)] text-justify leading-tight">
            <span style={{ color: "#0097b2" }}>Excent Capital</span> — A estrutura que sustenta nossa excelência
          </h1>

          <p className="text-lg text-justify opacity-90">
            A parceria entre a Blackbridge e a Excent Capital é resultado de uma escolha criteriosa por eficiência, confiabilidade e alinhamento técnico.
          </p>

          <p className="text-lg text-justify opacity-90">
            Selecionamos a Excent como nosso broker de execução exclusivo por uma razão clara — excelência compartilhada. Enquanto nós aplicamos método, clareza e precisão na geração de resultados, a Excent entrega simplicidade, segurança e performance naquilo que mais importa: a execução rápida, confiável e inteligente de cada operação.
          </p>

          <p className="text-lg text-justify opacity-90">
            Além da estrutura robusta, a Excent adota um modelo de relacionamento baseado em integração entre BDMs, traders e investidores. Dentro desse ecossistema, a Blackbridge opera como gestora autorizada, atendendo aos clientes indicados por parceiros e consolidando-se como uma das principais estratégias de performance na plataforma.
          </p>

          <p className="text-lg text-justify opacity-90">
            Optar pela Excent não foi uma decisão de conveniência — foi uma decisão de método. E essa base nos permite focar no que realmente importa: transformar dados em decisões e risco em retorno.
          </p>
        </div>
      </section>
    </>
  );
};

export default ExcentPagePT;
