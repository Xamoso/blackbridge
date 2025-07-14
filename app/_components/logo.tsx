import Image from "next/image"
import Link from "next/link"

const Logo = () => {
  return (
    <Link href="/">
      <Image
        src="/logo-aurum.svg"
        alt="Logo Aurum"
        height={28}
        width={145}
        className="cursor-pointer"
      />
    </Link>
  )
}

export default Logo
