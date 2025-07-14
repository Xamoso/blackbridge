import React from "react"

interface CardAboutProps {
  titleCard: string
  descriptionCard: string
}

const CardAbout = ({ titleCard, descriptionCard }: CardAboutProps) => {
  return (
    <div className="w-full max-w-[320px] rounded-md bg-[url('/banner-card-2.webp')] bg-cover bg-center bg-no-repeat px-6 py-8">
      <div className="space-y-4">
        <h4 className="font-[family-name:var(--font-modani-arabic-bold)] text-base text-yellow-color">
          {titleCard}
        </h4>
        <p className="text-sm text-white opacity-50">{descriptionCard}</p>
      </div>
    </div>
  )
}

export default CardAbout
