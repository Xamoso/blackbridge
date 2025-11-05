"use client";

import { ArrowRight } from "lucide-react";
import React from "react";
import VideoBanner from "./banner-video";

const MainEN = () => {
  return (
    <>
      {/* MAIN HERO SECTION WITH VIDEO */}
      <section className='h-[800px] bg-[url("/banner-main-m.webp")] bg-cover bg-center bg-no-repeat py-16 md:bg-none'>
        <VideoBanner />
        <div className="mx-auto mt-20 flex h-full max-w-6xl flex-col items-center justify-center gap-4 px-4 md:mt-8 md:items-start">
          <h4 className="text-base text-white text-justify md:text-start">
            Recognizing value where it is subtle requires a different kind of vision.{" "}
            <span className="text-[#0097b2]">Yours.</span>
          </h4>

          <h1 className="max-w-[580px] text-justify font-[family-name:var(--font-modani-arabic-bold)] text-xl md:text-2xl text-white leading-snug">
            Blackbridge is built on{" "}
            <span className="text-[#0097b2]">method</span>,{" "}
            <span className="text-[#0097b2]">clarity</span>, and{" "}
            <span className="text-[#0097b2]">precision</span> — attributes that
            resonate only with minds trained to see beyond the{" "}
            <span className="text-[#0097b2]">obvious</span>.
          </h1>

          <p className="max-w-[480px] text-justify text-base text-white">
            Being here is a <span className="text-[#0097b2]">privilege</span> reserved for those who understand that thinking differently is the first way to operate with an advantage.
          </p>

          <div className="flex w-full max-w-[480px] items-center justify-end">
            <a className="group/edit text-base" href="/en/contact">
              <button className="flex items-center justify-center gap-1 text-center text-[#0097b2]">
                Learn more{" "}
                <ArrowRight
                  className="transition-all delay-75 group-hover/edit:translate-x-1"
                  color="#0097b2"
                />
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* EXTRA SPACING TO AVOID VIDEO CUT */}
      <div className="h-8 md:h-16 "></div>
    </>
  );
};

export default MainEN;
