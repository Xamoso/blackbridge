import React from "react";

const ExcentPageEN = () => {
  return (
    <>
      <section className="relative min-h-screen overflow-hidden bg-black text-white">
        {/* Centered video banner with margin */}
        <div className="mx-auto mt-24 max-w-5xl px-6">
          <video
            src="/excent.mp4"
            autoPlay
            muted
            loop
            playsInline
           className="w-full h-[120px] md:h-[200px] object-cover rounded"


          />
        </div>

        {/* Content below the video */}
        <div className="mx-auto max-w-5xl px-6 py-16 space-y-8">
          <h1 className="text-4xl font-[family-name:var(--font-modani-arabic-bold)] text-justify leading-tight">
            <span style={{ color: "#0097b2" }}>Excent Capital</span> — The structure behind our excellence
          </h1>

          <p className="text-lg text-justify opacity-90">
            The partnership between Blackbridge and Excent Capital is the result of a careful choice for efficiency, reliability, and technical alignment.
          </p>

          <p className="text-lg text-justify opacity-90">
            We chose Excent as our exclusive execution broker for one clear reason — shared excellence. While we apply method, clarity, and precision to generate results, Excent delivers simplicity, security, and performance in what matters most: fast, reliable, and intelligent execution of every trade.
          </p>

          <p className="text-lg text-justify opacity-90">
            Beyond its solid infrastructure, Excent follows a relationship model based on integration between BDMs, traders, and investors. Within this ecosystem, Blackbridge operates as an authorized manager, serving clients referred by partners and becoming one of the top-performing strategies on the platform.
          </p>

          <p className="text-lg text-justify opacity-90">
            Choosing Excent was not a matter of convenience — it was a matter of method. And this foundation allows us to focus on what truly matters: turning data into decisions and risk into return.
          </p>
        </div>
      </section>
    </>
  );
};

export default ExcentPageEN;
