import React from "react"
import Logo from "./logo"
import BtnIcon from "./btn-icon"
import Link from "next/link"

const Footer = () => {
  return (
    <footer>
      <div className="mx-auto flex w-full max-w-6xl flex-col justify-center gap-8 px-4 py-8 lg:flex-row">
        <div className="flex w-full flex-col items-center gap-4 md:items-start">
          <Logo />
          <div className="flex items-center gap-2">
            <BtnIcon
              hrefBtn="https://www.instagram.com/aurum.cap/"
              srcImage="/icone-instagram.svg"
              altImage="Icone Instagram"
            />
            <BtnIcon
              hrefBtn="https://discord.gg/aurumcapital"
              srcImage="/icone-discord.svg"
              altImage="Icone Discord"
            />
            <BtnIcon
              hrefBtn="https://www.linkedin.com/company/somosaurumcapital/"
              srcImage="/icone-linkedin.svg"
              altImage="Icone Linkedin"
            />
          </div>
          <a href="#">
            <button className="border-b-[1px] border-white text-sm text-white transition-all delay-75 hover:border-yellow-color hover:text-yellow-color">
              Politica de Privacidade
            </button>
          </a>
        </div>
        <div className="flex w-full flex-col gap-4">
          <h4 className="pb-2 font-[family-name:var(--font-modani-arabic-bold)] text-base text-white">
            Mapa do Site
          </h4>
          <Link
            className="text-sm text-white transition-all delay-75 hover:text-yellow-color"
            href="/"
          >
            Home
          </Link>
          <Link
            className="text-sm text-white transition-all delay-75 hover:text-yellow-color"
            href="/quem-somos"
          >
            Quem Somos
          </Link>
          <Link
            className="text-sm text-white transition-all delay-75 hover:text-yellow-color"
            href="/servicos"
          >
            Serviços
          </Link>
          <Link
            className="text-sm text-white transition-all delay-75 hover:text-yellow-color"
            href="/contato"
          >
            Contato
          </Link>
          <Link
            className="text-sm text-white transition-all delay-75 hover:text-yellow-color"
            href="/workshop"
          >
            Workshop
          </Link>
        </div>
        <div className="flex w-full flex-col gap-4">
          <h4 className="pb-2 font-[family-name:var(--font-modani-arabic-bold)] text-base text-white">
            Onde estamos:
          </h4>
          <a href="" className="max-w-[380px] text-sm text-white">
            Avenida Segunda Avenida, Condomínio Cidade Empresarial, Edifício
            Montreal Office, Sala 612 - Aparecida de Goiânia - 74.934-605
          </a>
        </div>
        <div className="flex w-full flex-col gap-4">
          <h4 className="pb-2 font-[family-name:var(--font-modani-arabic-bold)] text-base text-white">
            Produtos
          </h4>
          <a
            className="text-sm text-white transition-all delay-75 hover:text-yellow-color"
            href="#"
          >
            Turma presencial
          </a>
          <a
            className="text-sm text-white transition-all delay-75 hover:text-yellow-color"
            href="#"
          >
            Comunidade Discord
          </a>
          <a
            className="text-sm text-white transition-all delay-75 hover:text-yellow-color"
            href="#"
          >
            Morning Call
          </a>
        </div>
        <div className="flex w-full flex-col gap-4">
          <h4 className="pb-2 font-[family-name:var(--font-modani-arabic-bold)] text-base text-white">
            SAC
          </h4>
          <a
            className="text-sm text-white transition-all delay-75 hover:text-yellow-color"
            href="tel: 6235832540"
          >
            (62) 3583-2540
          </a>
          <a
            className="text-sm text-white transition-all delay-75 hover:text-yellow-color"
            href="mailto:contato@aurumcapital.com"
          >
            contato@aurumcapital.com
          </a>
        </div>
      </div>
      <div className="bg-[#242424] p-4">
        <p className="text-center text-sm text-white">
          © Copyright 2024 Aurum Capital - Developed by Dlack Tecnologia
        </p>
      </div>
    </footer>
  )
}

export default Footer
