import Link from 'next/link'
import { styles } from '@/styles/components/Cards/CardService.styles'

type CardServiceProps = {
  serviceId: string
  title: string
  description: string
  url: string
  thumbnail: string
}

export const CardService = ({
  serviceId,
  title,
  description,
  url,
  thumbnail
}: CardServiceProps) => {
  return (
    <Link css={styles.cardWrapper} href={`service/${serviceId}`}>
      <div>
        {/* next/image */}
        <div css={styles.thumbnail}></div>
        <p css={styles.title}>{title}</p>
        <p>{description}</p>
      </div>
    </Link>
  )
}
