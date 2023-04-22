import { css } from '@emotion/react'
import { theme } from '@/styles/theme'

export const styles = {
  title: css`
    position: relative;
    font-size: 3rem;
    font-weight: bold;
    letter-spacing: 0.1em;
    line-height: 2.5;

  `,
  headingWrapper: css`
    margin: 200px 0 0 0;
    display: flex;

    span {
      display: block;
      width: 40px;
      height: 40px;
      margin: 20px;
      background-color: ${theme.color.black};
    }
  `,
  img: css`
    padding-left: 80px;
  `,
  text: css`
    padding-left: 80px;
    margin: 32px 0 ;
    font-weight: bold;
    font-size: 2rem;
  `
}
