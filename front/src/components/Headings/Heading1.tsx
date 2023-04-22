import { Container } from '@/components/Containers'
import { styles } from '@/styles/components/Headings/Heading1.styles'

type Heading1Props = {
  title: string
  subTitle?: string
}

export const Heading1 = ({ title, subTitle }: Heading1Props) => {
  return (
    <Container bgColor="none">
      <div css={styles.headingWrapper}>
        <h1 css={styles.title}>{title}</h1>
        <p css={styles.subTitle}>{subTitle}</p>
      </div>
    </Container>
  )
}
