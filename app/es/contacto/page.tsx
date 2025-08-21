"use client";

import React from "react";
import Image from "next/image";
import { Mail, MessageCircle } from "lucide-react";

const ContactoPageES = () => {
  return (
    <section className="min-h-screen bg-black text-white px-6 py-32">
      <div className="mx-auto max-w-5xl">
        {/* Título con palabra turquesa */}
        <h1 className="text-4xl font-[family-name:var(--font-modani-arabic-bold)] leading-tight text-center">
          El primer paso también es <span style={{ color: "#0097b2" }}>calculado</span>.
        </h1>

        {/* Párrafo introductorio */}
        <p className="mt-6 text-sm text-white opacity-80 text-justify max-w-5xl mx-auto px-0">
          El proceso de acercamiento a Blackbridge se realiza con la misma precisión con la que tomamos decisiones: sin atajos.
          Cada contacto es gestionado de forma exclusiva y profesional por un representante autorizado.
        </p>

        {/* Tarjetas de contacto lado a lado / apiladas en mobile */}
        <div className="mx-auto mt-20 grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Card Gabriel */}
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
                href="https://wa.me/5551994018190?text=Hola,%20me%20gustaría%20iniciar%20una%20conversación%20sobre%20Blackbridge."
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-[#0097b2] text-white py-2 rounded hover:opacity-90 transition"
              >
                <MessageCircle size={18} /> WhatsApp
              </a>
            </div>
          </div>

          {/* Card Natalie */}
          <div className="bg-[#111] rounded-xl p-10 shadow-md flex flex-col items-center gap-6">
            <Image
              src="/foto-natalie.jpeg" // puede pegar la foto con este nombre
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
                href="https://wa.me/5511961049299?text=Hola,%20me%20gustaría%20iniciar%20una%20conversación%20sobre%20Blackbridge."
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

export default ContactoPageES;
