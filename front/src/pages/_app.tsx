import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import { Global } from '@emotion/react'
import { HeaderMain } from '@/components/Headers'
import { SEO } from '@/config/next-seo.config'
import { globalStyle } from '@/styles/globalStyle'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Global styles={globalStyle} />
      <DefaultSeo {...SEO} />
      <HeaderMain />
      <Component {...pageProps} />
    </>
  )
}

export default App
