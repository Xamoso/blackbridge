import { MapPin } from "lucide-react"
import Image from "next/image"

const LocationWorkshop = () => {
  return (
    <section id="location" className="bg-[#F3E902] py-8">
      <div className="-mt-60 flex flex-col gap-2">
        <h2 className="text-center font-[family-name:var(--font-modani-arabic-bold)] text-4xl text-white">
          Local do <span className="text-[#F3E902]">Evento</span>
        </h2>
        <Image
          quality={100}
          src="/banner-ipog.png"
          alt="Banner Localização Ipog"
          width={0}
          height={0}
          sizes="100vh"
          className="mx-auto h-full max-h-[530px] w-full max-w-4xl object-cover px-4"
        />
      </div>
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 pt-16 md:flex-row">
        <div className="flex flex-col items-start gap-2">
          <h2 className="font-[family-name:var(--font-modani-arabic-bold)] text-4xl text-black">
            IPOG - Instituto de Pós-Graduação e Graduação
          </h2>
          <a
            href="https://maps.app.goo.gl/kpqJHU5aKt5z7RsY7"
            target="_blank"
            className="border-b-[1px] border-black text-sm text-black"
          >
            Av. T-1, 2390 - St. Bueno, Goiânia - GO, 74210-045
          </a>
        </div>
        <div className="flex flex-col items-center gap-6">
          <p className="text-sm text-black">
            Preparamos um local exclusivo para nosso Workshop, com todo conforto
            e estrutura para te receber.
          </p>
          <div className="flex w-full flex-col items-center justify-between gap-6 md:flex-row">
            <a
              href="https://maps.app.goo.gl/kpqJHU5aKt5z7RsY7"
              target="_blank"
              className="flex items-center gap-1 border-b-[1px] border-black pb-[2px] text-black"
            >
              <MapPin color="#000" /> Ir Para o local
            </a>
            <a
              href="https://checkout.doppus.app/62766955"
              target="_blank"
              className="rounded-md bg-black px-16 py-4 text-[#F3E902]"
            >
              Quero participar
            </a>
          </div>
        </div>
      </div>
      <div className="pt-16">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.45208511985!2d-49.27147132463107!3d-16.70427984601803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef13c9dee07a7%3A0x3199ea4956c320a3!2sAv.%20T-1%2C%202390%20-%20St.%20Bueno%2C%20Goi%C3%A2nia%20-%20GO%2C%2074215-022!5e0!3m2!1spt-BR!2sbr!4v1727955453283!5m2!1spt-BR!2sbr"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-[450px] w-full"
        ></iframe>
      </div>
    </section>
  )
}

export default LocationWorkshop
