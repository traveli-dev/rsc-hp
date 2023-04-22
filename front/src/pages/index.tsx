import Image from 'next/image'
import { Container } from '@/components/Containers'
import { Heading1, Heading2 } from '@/components/Headings'
import { VisualMain } from '@/components/Visuals'
import { styles } from '@/styles/components/Headings/Heading2.styles'

const Index = () => {
  return (
    <>
      <VisualMain />
      <VisualMain />
      <VisualMain />
      <Heading1 subTitle="TODAYs PROGRESS" title="本日の進捗" />
      <Heading2 title="Dockerを用いたnode環境構築" />
      <Container bgColor="none">
        <p css={styles.text}>ちゃんといい感じにまとめたよ！</p>
        <Image
          alt="img"
          css={styles.img}
          height={400}
          src="/images/d.png"
          width={600}
        />
      </Container>
      <Heading2 title="rsc-hpのテンプレート" />
      <Container bgColor="none">
        <p css={styles.text}>
          ヘッダーを通してアニメーションのコツをつかんだよ！
        </p>
        <Image
          alt="img"
          css={styles.img}
          height={400}
          src="/images/h.png"
          width={600}
        />
      </Container>
      <Heading2 title="そのほかやったこと" />
      <Container bgColor="none">
        <p css={styles.text}>チームのコンセプトを考えたよ！</p>
        <p css={styles.text}>
          rcs-blogの環境構築ができたよ！NotionからすぐにAPIで記事公開できるものがそのうちできるでしょう！
        </p>
      </Container>
    </>
  )
}

export default Index
