import CardSpeakerWorkshop from "./card-speaker-workshop"

const SpeakerWorkshop = () => {
  return (
    <section id="speaker" className="mb-56 px-4 py-16">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8">
        <div className="flex flex-col space-y-1">
          <h2 className="text-center font-[family-name:var(--font-modani-arabic-bold)] text-4xl text-white">
            Palestrantes<span className="text-[#F3E902]"> Confirmados!</span>
          </h2>
          <p className="text-center text-base text-white text-opacity-50">
            Os melhores palestrantes para ajudar você a decolar de vez no
            mercado de ações
          </p>
        </div>
        <div className="flex w-full flex-wrap items-center justify-center gap-6 md:items-start">
          <CardSpeakerWorkshop
            srcProfile="/perfil-1.png"
            dataCard="Sáb 23/11"
            timeCard="9:00 às 9:30"
            nameProfile="WAGNER LUIZ"
            description="Oportunidades: Empreendendo no Mercado Financeiro."
          />
          <CardSpeakerWorkshop
            srcProfile="/perfil-2.png"
            dataCard="Sáb 23/11"
            timeCard="9:30 às 10:00"
            nameProfile="THIAGO EVANGELISTA"
            description="Primeiros Passos: Sobrevivência ao Crescimento."
          />
          <CardSpeakerWorkshop
            srcProfile="/perfil-3.png"
            dataCard="Sáb 23/11"
            timeCard="10:00 às 10:30"
            timeCardTwo="11:00 às 11:20"
            nameProfile="CAIO HENRIQUE"
            description="Estratégias Quantitativas: como usar os DADOS a seu favor."
          />
          <CardSpeakerWorkshop
            srcProfile="/perfil-4.png"
            dataCard="Sáb 23/11"
            timeCard="11:20 às 11:45"
            nameProfile="ISMAEL GUIMARÃES"
            description="Gerenciamento de Risco: o Segredo dos 5% que vencem."
          />
        </div>
        <a
          href="https://checkout.doppus.app/62766955"
          target="_blank"
          className="mx-auto w-full max-w-96 rounded-md bg-[#F3E902] px-8 py-4 text-center text-black"
        >
          Quero participar
        </a>
      </div>
    </section>
  )
}

export default SpeakerWorkshop
