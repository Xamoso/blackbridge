import { ArrowRight } from "lucide-react"
import React from "react"
import IconStar from "./icon-star"
import Image from "next/image"
import CardAbout from "./card-about"

const About = () => {
  return (
    <section className="h-full min-h-[600px] w-full bg-none bg-cover bg-center bg-no-repeat py-16 lg:bg-[url('/banner-about-d.webp')]">
      <div className="mx-auto flex max-w-6xl flex-col items-center lg:flex-row">
        <div className="flex min-h-[500px] w-full flex-col items-center gap-6 bg-[url('/banner-about-m-1.webp')] bg-cover bg-center bg-no-repeat px-4 py-4 lg:items-start lg:bg-none lg:py-8">
          <div className="flex flex-col items-center gap-5">
            <h2 className="text-center font-[family-name:var(--font-modani-arabic-bold)] text-4xl text-white">
              Quem é a <span className="text-yellow-color">Aurum</span> Capital?
            </h2>
            <div className="flex w-full items-center justify-center gap-4 lg:justify-start">
              <IconStar />
              <IconStar />
              <IconStar />
              <IconStar />
              <IconStar />
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-start text-sm text-white opacity-50">
              Nossa empresa nasceu com três principais propósitos: fazer
              dinheiro no Mercado Financeiro, ensinar as pessoas a como fazer e
              financiar os alunos que se destacam através de nossa Mesa
              Proprietária.
            </p>
            <p className="text-start text-sm text-white opacity-50">
              Nosso time de especialistas desenvolveu um método exclusivo para
              te ajudar a entender como esse mercado funciona, como os grandes
              atuam, como de fato aprender que esse mercado não é um mar de
              rosas, mas que é possível sim escalar e prosperar.
            </p>
          </div>
          <div className="flex w-full max-w-[480px] flex-col items-center justify-between gap-4 md:flex-row">
            <a
              className="mx-auto flex w-full max-w-[380px] items-center justify-center gap-2 rounded-md bg-yellow-color px-8 py-2 transition-all delay-75 hover:bg-[#D3CB18]"
              href="https://wa.me/556235832540"
              target="_blank"
            >
              <Image src="/icone-wtpp.svg" alt="" width={17} height={17} />
              <button className="pt-1 text-center text-sm text-black">
                Fale conosco
              </button>
            </a>
            <a
              className="group/edit w-full text-yellow-color"
              href="https://wa.me/556235832540"
              target="_blank"
            >
              <button className="flex w-full items-center justify-center gap-1 text-center">
                Saiba mais{" "}
                <ArrowRight
                  className="transition-all delay-75 group-hover/edit:translate-x-1"
                  color="#F3E902"
                />
              </button>
            </a>
          </div>
        </div>
        <div className="flex min-h-[600px] w-full flex-col items-end gap-8 bg-[url('/banner-about-m-2.webp')] bg-cover bg-center bg-no-repeat px-4 py-4 sm:items-center lg:bg-none lg:py-8">
          <div className="w-full max-w-[320px] rounded-md bg-[url('/banner-card-1.webp')] bg-cover bg-center bg-no-repeat px-6 py-8">
            <div className="mb-20 space-y-4">
              <h4 className="font-[family-name:var(--font-modani-arabic-bold)] text-base text-yellow-color">
                | Nossa historia
              </h4>
              <p className="text-sm text-white opacity-50">
                Nascemos em 2023 com a meta de ajuda as pessoas a prosperar
                nesse mercado
              </p>
            </div>
          </div>
          <CardAbout
            titleCard="| Resultados"
            descriptionCard="Em 6 meses atingimos um resultado e crescimento inesperados, nossos alunos atingiram as suas metas."
          />
          <CardAbout
            titleCard="| Presencial Aurum"
            descriptionCard="No mesmo ano fechamos a nossa turma Presencial de empresários que decidiram investir nesse mercado"
          />
        </div>
      </div>
    </section>
  )
}

export default About
