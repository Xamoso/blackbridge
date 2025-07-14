import React from "react";

const AboutPageEN = () => {
  return (
    <>
      <section className="relative min-h-screen md:h-[100vh] overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 -z-10 w-full h-full bg-cover bg-center bg-no-repeat bg-[url('/banner-quem-somos-d-1.webp')] md:bg-[url('/banner-quem-somos-d-1.webp')]" />

        <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-4 py-32 lg:flex-row">
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

export default AboutPageEN;
