interface CardStageProps {
  titleCard: string
  tagsCard: string[]
  descriptionCard: string
  isEspecial?: boolean
}

const CardStage = ({
  titleCard,
  tagsCard,
  descriptionCard,
  isEspecial,
}: CardStageProps) => {
  const randomIndex = Math.floor(Math.random() * tagsCard.length)
  return (
    <div
      className={`${isEspecial ? "bg-yellow-color" : "bg-[#1D1D1D]"} flex max-w-[410px] flex-col items-start gap-4 rounded-2xl p-6`}
    >
      <h3
        className={`${isEspecial ? "pb-32 text-black" : "pb-0 text-white"} text-start font-[family-name:var(--font-modani-arabic-bold)] text-2xl`}
      >
        {titleCard}
      </h3>
      <div className="flex flex-wrap items-start gap-3">
        {tagsCard.map((tag, index) => (
          <span
            className={`${
              index === randomIndex && !isEspecial
                ? "border-none bg-yellow-color text-black"
                : isEspecial
                  ? "border-[1px] border-black bg-transparent text-black"
                  : "border-[1px] border-[#838687] bg-transparent text-[#838687]"
            } rounded-3xl px-6 py-3 text-start text-base`}
            key={index}
          >
            {tag}
          </span>
        ))}
      </div>
      <p
        className={`${isEspecial ? "text-black" : "text-[#838687]"} text-base`}
      >
        {descriptionCard}
      </p>
    </div>
  )
}

export default CardStage
