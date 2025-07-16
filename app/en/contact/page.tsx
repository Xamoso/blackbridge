"use client";

import React from "react";
import Image from "next/image";
import { Mail, MessageCircle } from "lucide-react";

const ContactPageEN = () => {
  return (
    <section className="min-h-screen bg-black text-white px-6 py-32">
      <div className="mx-auto max-w-4xl">
        {/* Title with turquoise word */}
        <h1 className="text-4xl font-[family-name:var(--font-modani-arabic-bold)] leading-tight text-justify">
          The first step is also <span style={{ color: "#0097b2" }}>calculated</span>.
        </h1>

        {/* Intro paragraph */}
        <p className="mt-6 text-sm text-white opacity-80 text-justify max-w-5xl mx-auto px-0">
          The approach process with Blackbridge is conducted with the same precision we apply to decision-making: no shortcuts.
          Every inquiry is handled exclusively and professionally by an authorized representative.
        </p>

        {/* Contact card with spacing */}
        <div className="mx-auto max-w-md bg-[#111] rounded-xl p-10 shadow-md flex flex-col items-center gap-6 mt-20">
          <Image
            src="/foto-ib.jpeg"
            alt="Authorized Representative"
            width={120}
            height={120}
            className="rounded-full object-cover"
          />
          <h2 className="text-xl font-semibold text-center w-full">Gabriel Calero</h2>
          <p className="text-sm opacity-70 text-justify">
            Blackbridge is represented by a single authorized IB who rigorously oversees each introduction process.
          </p>

          <div className="flex w-full gap-4 mt-4">
            <a
              href="mailto:gabrielcalero05@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-[#0097b2] text-white py-2 rounded hover:opacity-90 transition"
            >
              <Mail size={18} /> E-mail
            </a>
            <a
              href="https://wa.me/5551994018190?text=Hello,%20I%20would%20like%20to%20start%20a%20conversation%20regarding%20Blackbridge."
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-[#0097b2] text-white py-2 rounded hover:opacity-90 transition"
            >
              <MessageCircle size={18} /> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPageEN;
