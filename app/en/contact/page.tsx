"use client";

import React from "react";
import Image from "next/image";
import { Mail, MessageCircle } from "lucide-react";

const ContactPageEN = () => {
  return (
    <section className="min-h-screen bg-black text-white px-6 py-32">
      <div className="mx-auto max-w-5xl">
        {/* Title with turquoise word */}
        <h1 className="text-4xl font-[family-name:var(--font-modani-arabic-bold)] leading-tight text-center">
          The first step is also <span style={{ color: "#0097b2" }}>calculated</span>.
        </h1>

        {/* Intro paragraph */}
        <p className="mt-6 text-sm text-white opacity-80 text-justify max-w-5xl mx-auto px-0">
          The approach process with Blackbridge is conducted with the same precision we apply to decision-making: no shortcuts.
          Every inquiry is handled exclusively and professionally by an authorized representative.
        </p>

        {/* Contact cards side by side / stacked on mobile */}
        <div className="mx-auto mt-20 grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Gabriel Card */}
          <div className="bg-[#111] rounded-xl p-10 shadow-md flex flex-col items-center gap-6">
            <Image
              src="/foto-gabriel.jpeg"
              alt="Gabriel Calero"
              width={120}
              height={120}
              className="rounded-full object-cover"
            />
            <h2 className="text-xl font-semibold text-center w-full">Gabriel Calero</h2>

            <div className="flex w-full gap-4 mt-4 flex-col sm:flex-row">
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

          {/* Natalie Card */}
          <div className="bg-[#111] rounded-xl p-10 shadow-md flex flex-col items-center gap-6">
            <Image
              src="/foto-natalie.jpeg" // cole a foto com esse nome
              alt="Natalie Figueira"
              width={120}
              height={120}
              className="rounded-full object-cover"
            />
            <h2 className="text-xl font-semibold text-center w-full">Natalie Figueira</h2>

            <div className="flex w-full gap-4 mt-4 flex-col sm:flex-row">
              <a
                href="mailto:nataliefigueira@blackbridge.fund"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-[#0097b2] text-white py-2 rounded hover:opacity-90 transition"
              >
                <Mail size={18} /> E-mail
              </a>
              <a
                href="https://wa.me/5511961049299?text=Hello,%20I%20would%20like%20to%20start%20a%20conversation%20regarding%20Blackbridge."
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-[#0097b2] text-white py-2 rounded hover:opacity-90 transition"
              >
                <MessageCircle size={18} /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPageEN;
