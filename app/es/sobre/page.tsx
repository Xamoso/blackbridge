import React from "react";

const AboutPageES = () => {
  return (
    <>
      <section className="relative min-h-screen md:h-[100vh] overflow-hidden">
        {/* Imagen de fondo en toda la sección */}
        <div className="absolute inset-0 -z-10 w-full h-full bg-cover bg-center bg-no-repeat bg-[url('/banner-quem-somos-d-1.webp')] md:bg-[url('/banner-quem-somos-d-1.webp')]" />

        <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-4 py-32 lg:flex-row">
          <div className="flex h-full w-full flex-col items-center justify-center gap-6">
            <h1 className="text-4xl font-[family-name:var(--font-modani-arabic-bold)] text-white text-justify text-center md:text-start">
              <span style={{ color: "#0097b2" }}>Blackbridge</span> no fue creada para todos — y esa elección es parte de lo que nos define.
            </h1>

            <div className="space-y-4">
              <p className="text-sm text-white text-justify opacity-80">
                Nacimos con un propósito claro: aplicar pensamiento cuantitativo, disciplina analítica y rigor metodológico a la toma de riesgos. No apostamos por la intuición desinformada ni por consensos fáciles. Operamos con inteligencia, cálculo y convicción.
              </p>
              <p className="text-sm text-white text-justify opacity-80">
                Nuestra diferencia no está en promesas grandiosas, sino en la construcción silenciosa de una ventaja real — basada en datos, lógica y asimetría. Trabajamos donde muchos no miran. Y vemos lo que muchos no perciben.
              </p>
              <p className="text-sm text-white text-justify opacity-80">
                Aquí, el rendimiento es consecuencia. Antes de él, viene el proceso: modelos robustos, investigación profunda, lectura aguda de los mercados. Todo está diseñado con un solo propósito — transformar la complejidad en decisión y la incertidumbre en estrategia.
              </p>
              <p className="text-sm text-white text-justify opacity-80">
                Atendemos a quienes valoran la claridad donde reina el ruido. A quienes entienden que pensar diferente no es un estilo — es un método. A quienes reconocen que la excelencia no se improvisa — se construye.
              </p>
              <p className="text-sm text-white text-justify opacity-80">
                Blackbridge es para quienes exigen más de la lógica, del riesgo y de sí mismos.
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

export default AboutPageES;
