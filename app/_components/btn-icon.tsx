import Image from "next/image"
import React from "react"

interface BtnIconProps {
  srcImage: string
  altImage: string
  hrefBtn: string
}

const BtnIcon = ({ srcImage, altImage, hrefBtn }: BtnIconProps) => {
  return (
    <a
      target="_blank"
      href={hrefBtn}
      className="rounded-full bg-yellow-color p-4"
    >
      <Image src={srcImage} alt={altImage} width={20} height={20} />
    </a>
  )
}

export default BtnIcon
