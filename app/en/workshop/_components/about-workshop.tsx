import Profile from "./profile"

const AboutWorkshop = () => {
  return (
    <section
      id="about"
      className="bg-[url('/banner-about.webp')] bg-cover bg-right bg-no-repeat px-4 py-16"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 md:flex-row">
        <div className="mx-auto flex w-full flex-col items-center gap-5">
          <h2 className="font-[family-name:var(--font-modani-arabic-bold)] text-4xl text-white">
            O que é o <span className="text-[#F3E902]"> evento?</span>
          </h2>
          <div
            className="h-[1px] w-full max-w-[340px]"
            style={{
              background:
                "linear-gradient(90deg, rgba(255,255,255, .3) 0%, rgba(255,255,255,0) 90%)",
            }}
          ></div>
          <div className="flex flex-col gap-4">
            <div className="relative flex">
              <Profile srcProfile="/perfil-1.png" />
              <Profile
                className="absolute left-[60px]"
                srcProfile="/perfil-4.png"
              />
              <Profile
                className="absolute left-[120px]"
                srcProfile="/perfil-5.png"
              />
              <Profile
                className="absolute left-[180px]"
                srcProfile="/perfil-2.png"
              />
              <Profile
                className="absolute left-[240px]"
                srcProfile="/perfil-3.png"
              />
            </div>
            <div className="flex flex-col items-start">
              <p className="text-sm font-light text-white text-opacity-50">
                Somos dezenas de
              </p>
              <span className="font-[family-name:var(--font-modani-arabic-bold)] text-3xl text-white">
                TRADERS NOS 5%{" "}
              </span>
            </div>
          </div>
          <div
            className="h-[1px] w-full max-w-[340px]"
            style={{
              background:
                "linear-gradient(90deg, rgba(255,255,255, 0) 0%, rgba(255,255,255, .3) 90%)",
            }}
          ></div>
        </div>
        <div className="w-full space-y-2">
          <p className="text-sm text-white">
            Para você que deseja de fato prosperar, e quer aprender a entrar e
            entender de verdade, como funciona o Mercado Financeiro, temos um
            convite para você.
          </p>
          <p className="text-sm text-white">
            Nosso Workshop Presencial acontecerá neste mês de outubro, e pode
            ter certeza que você sairá de lá com uma compreensão única sobre o
            Mercado, e terá todo o suporte para ter sucesso.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutWorkshop
