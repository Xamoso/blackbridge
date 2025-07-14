import Image from "next/image"
import React from "react"

interface ProfileTeamProps {
  srcProfile: string
  className?: string
}

const ProfileTeam = ({ srcProfile, className }: ProfileTeamProps) => {
  return (
    <Image
      src={srcProfile}
      alt="Icone Perfil"
      height={0}
      width={0}
      sizes="100vh"
      className={`${className} h-[60px] w-[60px] rounded-full border-[1px] border-white object-cover`}
    />
  )
}

export default ProfileTeam
