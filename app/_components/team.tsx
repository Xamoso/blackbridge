import React from "react"
import ProfileTeam from "./profile-team"

const Team = () => {
  return (
    <section className="flex h-auto min-h-[400px] justify-center bg-[url('/banner-team-m.webp')] bg-cover bg-center bg-no-repeat px-4 py-16 md:bg-[url('/banner-team-d.webp')]">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 lg:flex-row">
        <div className="flex w-full flex-col items-start gap-6">
          <h2 className="font-[family-name:var(--font-modani-arabic-bold)] text-4xl text-white">
            Investimentos de{" "}
            <span className="text-yellow-color"> sucesso </span>!
          </h2>
          <div className="flex w-full flex-col items-center gap-6">
            <div
              className="h-[1px] w-full"
              style={{
                background:
                  "linear-gradient(90deg, rgba(255,255,255, .3) 0%, rgba(255,255,255,0) 90%)",
              }}
            ></div>
            <div className="flex w-full flex-col items-center gap-4 md:flex-row">
              <div className="flex w-full items-center justify-center pl-[100px] md:w-3/5">
                <ProfileTeam srcProfile="/perfil-1.png" />
                <ProfileTeam
                  className="-translate-x-[20px]"
                  srcProfile="/perfil-2.png"
                />
                <ProfileTeam
                  className="-translate-x-[40px]"
                  srcProfile="/perfil-3.png"
                />
                <ProfileTeam
                  className="-translate-x-[60px]"
                  srcProfile="/perfil-4.png"
                />
                <ProfileTeam
                  className="-translate-x-[80px]"
                  srcProfile="/perfil-5.png"
                />
              </div>
              <div className="flex w-full flex-col items-center md:w-2/5 md:items-start">
                <span className="text-sm text-white opacity-50">
                  Somos dezenas de
                </span>
                <h4 className="text-2xl text-white">TRADERS NOS 5%</h4>
              </div>
            </div>
            <div
              className="h-[1px] w-full"
              style={{
                background:
                  "linear-gradient(90deg, rgba(255,255,255, 0) 0%, rgba(255,255,255, .3) 90%)",
              }}
            ></div>
          </div>
        </div>
        <div className="flex w-full flex-col gap-2">
          <p className="text-sm text-white opacity-50">
            Se você deseja entender sobre o Mercado Financeiro com transparência
            e credibilidade de quem atuava dentro das mesas dos bancos, e hoje
            têm como missão expandir esse conhecimento raro, essa é a chance
            única para você.
          </p>
          <p className="text-sm text-white opacity-50">
            Nosso time de especialistas desenvolveu um método único para te
            ajudar a entender como esse mercado funciona, como os grandes atuam,
            como de fato conseguir aprender que esse mercado não é um mar de
            rosas, mas que é possível sim escalar e prosperar muito.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Team
