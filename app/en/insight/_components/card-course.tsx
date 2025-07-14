import Image from "next/image"
import Link from "next/link"

interface CardCourseProps {
  hrefCard: string
  srcImage: string
  altImage: string
}

const CardCourse = ({ hrefCard, srcImage, altImage }: CardCourseProps) => {
  return (
    <Link className="h-auto min-w-[220px]" href={hrefCard}>
      <Image
        src={srcImage}
        alt={altImage}
        width={0}
        height={0}
        className="w-full"
        sizes="100vh"
      />
    </Link>
  )
}

export default CardCourse
