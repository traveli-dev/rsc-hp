import Link from 'next/link'
import { useHeaderMain } from '@/hooks/headers'
import { styles } from '@/styles/components/Headers/HeaderMain.styles'

export const HeaderMain = () => {
  const { isActive, toggleBool, currentPath } = useHeaderMain()

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
            <Link
              css={[styles.link, currentPath === '/about' && styles.focusLink]}
              href="about"
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              css={[
                styles.link,
                currentPath === '/service' && styles.focusLink
              ]}
              href="service"
            >
              SERVICE
            </Link>
          </li>
          <li>
            <Link
              css={[styles.link, currentPath === '/work' && styles.focusLink]}
              href="work"
            >
              WORK
            </Link>
          </li>
          <li>
            <Link
              css={[styles.link, currentPath === '/member' && styles.focusLink]}
              href="member"
            >
              MEMBER
            </Link>
          </li>
          <li>
            <Link
              css={[
                styles.link,
                currentPath === '/contact' && styles.focusLink
              ]}
              href="contact"
            >
              CONTACT
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
