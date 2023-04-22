import { useState } from 'react'
import { useRouter } from 'next/router'

export const useHeaderMain = () => {
  let w = 0
  const [isActive, setIsActive] = useState<boolean>(false)
  const toggleBool = () => {
    w = window.innerWidth
    if (w < 1024) return setIsActive(!isActive)
  }
  const router = useRouter()
  const currentPath = router.asPath
  return { isActive, toggleBool, currentPath }
}
