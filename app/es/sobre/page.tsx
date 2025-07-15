import React from "react";

const AboutPageES = () => {
  return (
    <>
      <section className="relative min-h-screen md:min-h-[100vh] overflow-hidden">
        {/* Imagen de fondo */}
        <div className="absolute inset-0 -z-10 w-full h-full bg-cover bg-center bg-no-repeat bg-[url('/banner-quem-somos-d-1.webp')]" />

        {/* Primera sección */}
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 pt-32 lg:flex-row">
          {/* Texto */}
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

          {/* Video */}
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

        {/* Segunda sección */}
        <div className="mx-auto mt-12 max-w-6xl px-4 pb-24 space-y-8">
          <h2 className="text-4xl font-[family-name:var(--font-modani-arabic-bold)] text-white text-justify">
            La inteligencia no solo se programa — se{" "}
            <span style={{ color: "#0097b2" }}>construye</span>.
          </h2>

          <p className="text-white text-justify text-sm opacity-80">
            En Blackbridge, la complejidad no nos intimida — nos impulsa. Utilizamos modelos de Machine Learning que no solo procesan datos, sino que aprenden con cada cálculo, se ajustan con cada nueva información y evolucionan con cada movimiento del mercado.
          </p>

          <p className="text-white text-justify text-sm opacity-80">
            Estos modelos fueron desarrollados para absorber patrones invisibles al ojo humano. Prueban hipótesis a velocidades imposibles, miden asimetrías en tiempo real y simulan escenarios con una precisión que trasciende la intuición. Cada punto de datos alimenta una inteligencia que crece, se refina y se vuelve más eficiente con cada iteración.
          </p>

          <p className="text-white text-justify text-sm opacity-80">
            Pero aquí, la tecnología no sustituye el pensamiento — lo amplifica.
          </p>

          <p className="text-white text-justify text-sm opacity-80">
            ¿El modelo decide? Nunca solo. Detrás de cada algoritmo está la mirada analítica de quienes viven el mercado desde hace más de una década, entrenados para reconocer ruidos, falsos positivos y trampas estadísticas que ni la mejor máquina detectaría por sí sola.
          </p>

          <p className="text-white text-justify text-sm opacity-80">
            Es esta simbiosis entre cálculo y crítica, entre automatización y discernimiento, la que nos permite operar con anticipación y no solo en reacción.
          </p>

          <p className="text-white text-justify text-sm opacity-80">
            No nos guiamos por impulsos ni por modas. En Blackbridge, la decisión es la punta de una estructura profunda, donde los datos se organizan, se leen y se interpretan con rigor. La máquina proporciona el alcance. El gestor define el objetivo.
          </p>
        </div>
      </section>
    </>
  );
};

export default AboutPageES;
