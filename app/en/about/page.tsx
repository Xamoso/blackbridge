import React from "react";

const AboutPageEN = () => {
  return (
    <>
      <section className="relative min-h-screen md:min-h-[100vh] overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 -z-10 w-full h-full bg-cover bg-center bg-no-repeat bg-[url('/banner-quem-somos-d-1.webp')]" />

        {/* First section */}
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 pt-32 lg:flex-row">
          {/* Text */}
          <div className="flex h-full w-full flex-col items-center justify-center gap-6">
            <h1 className="text-4xl font-[family-name:var(--font-modani-arabic-bold)] text-white text-justify text-center md:text-start">
              <span style={{ color: "#0097b2" }}>Blackbridge</span> was not created for everyone — and that choice is part of what defines us.
            </h1>

            <div className="space-y-4">
              <p className="text-sm text-white text-justify opacity-80">
                We were born with a clear purpose: to apply quantitative thinking, analytical discipline, and methodological rigor to risk-taking. We don’t rely on uninformed intuition or easy consensus. We operate with intelligence, calculation, and conviction.
              </p>
              <p className="text-sm text-white text-justify opacity-80">
                Our edge lies not in grand promises, but in the quiet construction of real advantage — anchored in data, logic, and asymmetry. We work where many don’t look. And we see what many don’t perceive.
              </p>
              <p className="text-sm text-white text-justify opacity-80">
                Here, performance is a consequence. Before that comes process: robust models, deep research, sharp market insight. Everything is designed for a single purpose — to turn complexity into decision and uncertainty into strategy.
              </p>
              <p className="text-sm text-white text-justify opacity-80">
                We serve those who value clarity where noise reigns. Who understand that thinking differently is not a style — it’s a method. Who recognize that excellence isn’t improvised — it’s built.
              </p>
              <p className="text-sm text-white text-justify opacity-80">
                Blackbridge is for those who demand more from logic, from risk, and from themselves.
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

        {/* Second section — ML + human reasoning */}
        <div className="mx-auto mt-12 max-w-6xl px-4 pb-24 space-y-8">
          <h2 className="text-4xl font-[family-name:var(--font-modani-arabic-bold)] text-white text-justify">
            Intelligence isn’t just programmed — it’s{" "}
            <span style={{ color: "#0097b2" }}>built</span>.
          </h2>

          <p className="text-white text-justify text-sm opacity-80">
            At Blackbridge, complexity doesn’t intimidate us — it drives us. We use Machine Learning models that don’t just process data, but learn from every calculation, adapt with every new piece of information, and evolve with every market movement.
          </p>

          <p className="text-white text-justify text-sm opacity-80">
            These models are designed to detect patterns invisible to the human eye. They test hypotheses at impossible speeds, measure asymmetries in real time, and simulate scenarios with a precision that goes beyond intuition. Every data point feeds an intelligence that grows, refines, and becomes more efficient with each iteration.
          </p>

          <p className="text-white text-justify text-sm opacity-80">
            But here, technology doesn’t replace thought — it enhances it.
          </p>

          <p className="text-white text-justify text-sm opacity-80">
            Does the model decide? Never alone. Behind every algorithm is the analytical mind of someone who’s lived the market for over a decade — trained to spot noise, false positives, and statistical traps that even the best machine wouldn’t catch on its own.
          </p>

          <p className="text-white text-justify text-sm opacity-80">
            It’s this symbiosis between calculation and critique, automation and discernment, that allows us to operate with anticipation — not just reaction.
          </p>

          <p className="text-white text-justify text-sm opacity-80">
            We’re not guided by impulses or trends. At Blackbridge, decisions are the tip of a deeper structure — where data is organized, read, and interpreted with rigor. The machine gives us reach. The manager defines the target.
          </p>
        </div>
      </section>
    </>
  );
};

export default AboutPageEN;
