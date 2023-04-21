import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import { Global } from '@emotion/react'
import { Layout } from '@/components/Layouts'
import { SEO } from '@/config/next-seo.config'
import { globalStyle } from '@/styles/globalStyle'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Global styles={globalStyle} />
      <DefaultSeo {...SEO} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      yarn
    </>
  )
}

export default App
