import { useState } from 'react'
import Link from 'next/link'
import { styles } from '@/styles/components/Headers/HeaderMain.styles'

export const HeaderMain = () => {
  const [isActive, setIsActive] = useState<boolean>(false)
  const toggleBool = () => setIsActive(!isActive)
  return (
    <header css={[styles.header, isActive && styles.headerActive]}>
      <Link css={[styles.logo, isActive && styles.logoActive]} href="/">
        LOGO
      </Link>
      <input
        css={styles.menuBtnChecked}
        id="menuBtnChecked"
        type="checkbox"
        onClick={toggleBool}
      />
      <label css={styles.menuBtn} htmlFor="menuBtnChecked">
        <span></span>
      </label>
      <div css={[styles.circleBg, isActive && styles.circleBgActive]}></div>
      <nav css={[styles.menuContent, isActive && styles.menuContentActive]}>
        <ul>
          <li>
            <Link css={styles.link} href="about">
              ABOUT
            </Link>
          </li>
          <li>
            <Link css={styles.link} href="service">
              SERVICE
            </Link>
          </li>
          <li>
            <Link css={styles.link} href="work">
              WORK
            </Link>
          </li>
          <li>
            <Link css={styles.link} href="member">
              MEMBER
            </Link>
          </li>
          <li>
            <Link css={styles.link} href="contact">
              CONTACT
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
