import { Clock } from "lucide-react"
import Image from "next/image"

interface CardSpeakerProps {
  srcProfile: string
  dataCard: string
  timeCard: string
  timeCardTwo?: string
  nameProfile: string
  description: string
}

const CardSpeakerWorkshop = ({
  srcProfile,
  dataCard,
  timeCard,
  timeCardTwo,
  nameProfile,
  description,
}: CardSpeakerProps) => {
  return (
    <div className="mx-auto flex w-full max-w-[300px] flex-col items-center space-y-2 md:items-start">
      <div className="w-full rounded-2xl border-[1px] border-[#F3E902] p-3">
        <Image
          src={srcProfile}
          alt={`Icone Perfil ${nameProfile}`}
          height={0}
          width={0}
          sizes="100vh"
          className="h-auto w-full"
        />
      </div>
      <h3 className="font-[family-name:var(--font-modani-arabic-bold)] text-lg text-[#F3E902]">
        {dataCard}
      </h3>
      <div className="flex items-center gap-1">
        <Clock color="#ffffff" size={16} />
        <span className="text-sm text-white">{`${timeCard}`}</span>
      </div>
      <div className="flex items-center gap-1">
        <span className="text-sm text-white">{timeCardTwo}</span>
      </div>
      <h4 className="text-center font-[family-name:var(--font-modani-arabic-bold)] text-base text-white md:text-start">
        {nameProfile}
      </h4>
      <p className="text-center text-base text-white text-opacity-50 md:text-start">
        {description}
      </p>
    </div>
  )
}

export default CardSpeakerWorkshop
