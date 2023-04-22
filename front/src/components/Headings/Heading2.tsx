import { Container } from '@/components/Containers'
import { styles } from '@/styles/components/Headings/Heading2.styles'

type Heading2Props = {
  title: string
}

export const Heading2 = ({ title }: Heading2Props) => {
  return (
    <Container bgColor="none">
      <div css={styles.headingWrapper}>
        <h2 css={styles.title}>{title}</h2>
      </div>
    </Container>
  )
}
