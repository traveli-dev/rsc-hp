import { useState } from 'react'
import { useRouter } from 'next/router'

export const useHeaderMain = () => {
  const [isActive, setIsActive] = useState<boolean>(false)
  const toggleBool = () => setIsActive(!isActive)
  const router = useRouter()
  const currentPath = router.asPath
  return { isActive, toggleBool, currentPath }
}
