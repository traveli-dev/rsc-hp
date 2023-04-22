import { css } from '@emotion/react'
import { theme } from '@/styles/theme'

export const styles = {
  cardWrapper: css`
    text-decoration: none;
  `,
  thumbnail: css`
    width: 300px;
    height: 300px;
    background-color: ${theme.color.black};
    border-radius: 16px;
  `,
  title: css`
    font-size: 2.4rem;
  `
}
