import { css } from '@emotion/react'
import { theme } from '@/styles/theme'
import { mq } from '@/styles/utils'

export const styles = {
  wrapper: css`
    width: calc(100% - 128px);
    height: calc(100vh - 128px);
    margin: 128px auto;
    background-color: ${theme.color.black};
    ${mq('sm')} {
      width: calc(100% - 32px);
      height: calc(100vh - 98px);
      margin: 98px auto;
    }
  `
}
