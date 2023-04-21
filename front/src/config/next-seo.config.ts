import { DefaultSeoProps } from 'next-seo'

export const SEO: DefaultSeoProps = {
  titleTemplate: '%s | rsc-hp',
  defaultTitle: 'rsc-hp',
  description: 'rscのホームページです',
  openGraph: {
    type: 'website',
    title: 'rsc-hp',
    description: 'rscのホームページです',
    site_name: 'rsc-hp',
    // url: 'https://traveli.app/',
    images: [
      {
        url: 'https://traveli.app/images/ogp.png',
        width: 1200,
        height: 630,
        alt: '',
        type: 'image/png'
      }
    ]
  },
  twitter: {
    handle: '@traveli_jp',
    site: '@traveli_jp',
    cardType: 'summary_large_image'
  }
}
