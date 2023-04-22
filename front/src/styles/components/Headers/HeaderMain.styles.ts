import { css, keyframes } from '@emotion/react'
import { theme } from '@/styles/theme'
import { mq } from '@/styles/utils'

const fadeInAnime = keyframes`
from {
  opacity: 0;
  transform: translateX(100px);
}

to {
  opacity: 1;
  transform: translateX(0);
}
`

export const styles = {
  header: css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 128px;
    ${mq('sm')} {
      height: 98px;
    }
  `,
  headerActive: css`
    min-height: 100vh;
  `,
  link: css`
    position: relative;
    font-size: ${theme.fontSize.md};
    text-decoration: none;
    @media screen and (prefers-reduced-motion: reduce) {
      &::after {
        position: absolute;
        right: 0px;
        bottom: -16px;
        left: 0px;
        display: block;
        width: 8px;
        height: 8px;
        margin: 0 auto;
        visibility: hidden;
        content: '';
        background-color: ${theme.color.black};
        border-radius: 10px;
        opacity: 0;
        transition: none;
      }
    }
    &::after {
      position: absolute;
      right: 0px;
      bottom: -16px;
      left: 0px;
      display: block;
      width: 8px;
      height: 8px;
      margin: 0 auto;
      visibility: hidden;
      content: '';
      background-color: ${theme.color.black};
      border-radius: 10px;
      opacity: 0;
      transition: all 0.3s ease;
    }
  `,
  focusLink: css`
    &::after {
      visibility: visible;
      opacity: 1;
      ${mq('lg')} {
        visibility: hidden;
        opacity: 0;
      }
    }
  `,
  logo: css`
    position: absolute;
    top: 48px;
    left: 64px;
    font-size: 3rem;
    font-weight: bold;
    text-decoration: none;
    transition: all 0.6s;
    ${mq('sm')} {
      top: 32px;
      left: 16px;
    }
  `,
  logoActive: css`
    z-index: 9998;
    color: white;
  `,
  menuBtn: css`
    display: none;
    ${mq('lg')} {
      position: absolute;
      top: 48px;
      right: 56px;
      z-index: 9999;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 34px;
      height: 34px;

      span {
        @media screen and (prefers-reduced-motion: reduce) {
          &,
          &::before,
          &::after {
            position: absolute;
            display: block;
            width: 21px;
            height: 3px;
            background-color: ${theme.color.black};
            border-radius: 3px;
            transition: none;
          }
        }
        &,
        &::before,
        &::after {
          position: absolute;
          display: block;
          width: 21px;
          height: 3px;
          background-color: ${theme.color.black};
          border-radius: 3px;
          transition: all 0.6s;
        }
        &::before {
          bottom: 7px;
          content: '';
        }
        &::after {
          top: 7px;
          content: '';
        }
      }
    }
    ${mq('sm')} {
      top: 32px;
      right: 16px;
    }
  `,
  menuBtnChecked: css`
    display: none;
    ${mq('lg')} {
      &:checked {
        ~ label span {
          background-color: transparent;
          @media screen and (prefers-reduced-motion: reduce) {
            &::before {
              bottom: 0;
              background-color: ${theme.color.white};
              transition: none;
              transform: rotate(45deg);
            }
          }
          &::before {
            bottom: 0;
            background-color: ${theme.color.white};
            transition: all 0.6s;
            transform: rotate(45deg);
          }
          @media screen and (prefers-reduced-motion: reduce) {
            &::after {
              top: 0;
              background-color: ${theme.color.white};
              transition: none;
              transform: rotate(-45deg);
            }
          }
          &::after {
            top: 0;
            background-color: ${theme.color.white};
            transition: all 0.6s;
            transform: rotate(-45deg);
          }
        }
      }
    }
  `,
  menuContent: css`
    position: absolute;
    top: 48px;
    right: 64px;
    ul {
      display: flex;
      gap: 64px;
      justify-content: space-between;
      padding: 0;
      list-style: none;
    }
    ${mq('lg')} {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      display: inline-block;
      min-width: 100%;
      padding: 0 64px;
      margin: 180px 0;
      visibility: hidden;
      opacity: 0;
      /* transition: all 0.6s; */
      ul {
        flex-direction: column;
        gap: 32px;
        li {
          a {
            font-size: 2.8rem;
            color: ${theme.color.white};
          }
        }
      }
    }
  `,
  menuContentActive: css`
    ${mq('lg')} {
      z-index: 9998;
      visibility: visible;
      opacity: 1;
      animation: ${fadeInAnime} 0.8s ease;
    }
  `,
  circleBg: css`
    position: fixed;
    top: -50px;
    right: -50px;
    z-index: 1;
    width: 100px;
    height: 100px;
    background-color: ${theme.color.black};
    border-radius: 50%;
    transition: all 0.6s ease-in-out; /* 0.6秒かけてアニメーション */
    transform: scale(0);
  `,
  circleBgActive: css`
    transform: scale(30);
  `
}
