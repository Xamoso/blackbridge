"use client"
import Image from "next/image"
import React from "react"

const BtnWtpp = () => {
  return (
    <a
      href="https://wa.me/556235832540"
      target="_blank"
      className="fixed bottom-[5vh] right-2 z-50 h-12 w-12"
    >
      <Image
        src="/btn-wtpp.svg"
        alt="Botão do WhatsApp"
        width={0}
        height={0}
        sizes="100vh"
        className="h-full w-full"
      />
    </a>
  )
}

export default BtnWtpp
