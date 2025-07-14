import Image from "next/image"
import React from "react"

interface CardTeamProps {
  srcImage: string
  titleCard: string
}

const CardTeam = ({ srcImage, titleCard }: CardTeamProps) => {
  return (
    <div className="bg mx-auto flex w-full max-w-[380px] flex-col rounded-lg border-[1px] border-yellow-color bg-black">
      <Image
        src={srcImage}
        alt={`Imagem de perfil ${titleCard}`}
        width={0}
        height={280}
        sizes="100vw"
        className="w-full rounded-lg object-cover"
      />
      <h4 className="p-4 font-[family-name:var(--font-modani-arabic-bold)] text-xl text-white">
        {titleCard}
      </h4>
    </div>
  )
}

export default CardTeam
