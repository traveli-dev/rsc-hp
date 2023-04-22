import { css, keyframes } from '@emotion/react'
import { mq } from '@/styles/utils'

const fadeUpAnime = keyframes`
from {
    transform: translateY(100px);
    opacity: 0;
}

to {
    transform: translateY(0);
    opacity: 1;

}
`
export const styles = {
  title: css`
    font-size: 5rem;
    font-weight: bold;
    letter-spacing: 0.2em;
    ${mq('md')} {
      font-size: 4rem;
    }
  `,
  subTitle: css`
    margin: 16px 0 0 0;
    font-size: 3rem;
    font-weight: bold;
    letter-spacing: 0.2em;
    ${mq('md')} {
      margin: 8px 0 0 0;
      font-size: 3rem;
    }
  `,
  headingWrapper: css`
    margin: 200px 0;
    animation: ${fadeUpAnime} 0.6s ease;
    ${mq('sm')} {
      margin: 400px 0;
    }
  `
}
