import React from "react";

const ExcentPageES = () => {
  return (
    <>
      <section className="relative min-h-screen overflow-hidden bg-black text-white">
        {/* Banner de video centrado con margen */}
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

        {/* Contenido debajo del video */}
        <div className="mx-auto max-w-5xl px-6 py-16 space-y-8">
          <h1 className="text-4xl font-[family-name:var(--font-modani-arabic-bold)] text-justify leading-tight">
            <span style={{ color: "#0097b2" }}>Excent Capital</span> — La estructura que respalda nuestra excelencia
          </h1>

          <p className="text-lg text-justify opacity-90">
            La asociación entre Blackbridge y Excent Capital es el resultado de una elección rigurosa por eficiencia, confiabilidad y alineación técnica.
          </p>

          <p className="text-lg text-justify opacity-90">
            Elegimos a Excent como nuestro bróker de ejecución exclusivo por una razón clara: excelencia compartida. Mientras nosotros aplicamos método, claridad y precisión en la generación de resultados, Excent entrega simplicidad, seguridad y desempeño en lo que realmente importa: la ejecución rápida, confiable e inteligente de cada operación.
          </p>

          <p className="text-lg text-justify opacity-90">
            Además de una estructura sólida, Excent adopta un modelo de relación basado en la integración entre BDMs, traders e inversionistas. Dentro de este ecosistema, Blackbridge actúa como gestora autorizada, atendiendo a los clientes indicados por socios y consolidándose como una de las principales estrategias de rendimiento en la plataforma.
          </p>

          <p className="text-lg text-justify opacity-90">
            Elegir a Excent no fue una decisión de conveniencia — fue una decisión de método. Y esta base nos permite enfocarnos en lo que realmente importa: transformar datos en decisiones y riesgo en retorno.
          </p>
        </div>
      </section>
    </>
  );
};

export default ExcentPageES;
