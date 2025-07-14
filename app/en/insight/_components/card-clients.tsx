import { CircleUser } from "lucide-react"

interface CardClientsProps {
  name: string
  coment: string
}

const CardClients = ({ name, coment }: CardClientsProps) => {
  return (
    <div className="flex min-w-[280px] max-w-[280px] flex-col items-start gap-4 rounded-lg bg-[#1d1d1d] p-6 py-8">
      <div className="flex justify-center gap-2">
        <CircleUser size={28} color="#f3e902" />
        <h4 className="font-[family-name:var(--font-modani-arabic-bold)] text-base text-white">
          {name}
        </h4>
      </div>
      <p className="text-sm text-white">{coment}</p>
    </div>
  )
}

export default CardClients
