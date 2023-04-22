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
  thumbnail
}: CardServiceProps) => {
  return (
    <Link css={styles.cardWrapper} href={`service/${serviceId}`}>
      <div>
        {/* TODO:next/imageでthumbnailを表示 */}
        <div css={styles.thumbnail}>{thumbnail}</div>
        <p css={styles.title}>{title}</p>
        <p>{description}</p>
      </div>
    </Link>
  )
}
