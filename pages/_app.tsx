import { useEffect } from 'react'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { DefaultSeo } from 'next-seo'
import { ChakraProvider } from '@chakra-ui/react'
import * as gtag from '../utils/gtag'
import customTheme from '../styles/theme'
import { Global, css } from '@emotion/react'
import SEO from './../next-seo.config'

const GlobalStyles = css`
  @font-face {
    font-family: 'RightGrotesk-NarrowBlack';
    src: url('/fonts/RightGrotesk-NarrowBlack.otf') format('opentype');
    font-style: normal;
    fontweight: 400;
    fontdisplay: swap;
  }

  @font-face {
    font-family: 'RightGrotesk-Regular';
    src: url('/fonts/RightGrotesk-Regular.otf') format('opentype');
    font-style: normal;
    fontweight: 400;
    fontdisplay: swap;
  }

  @font-face {
    font-family: 'RightGrotesk-TightDark';
    src: url('/fonts/RightGrotesk-TightDark.otf') format('opentype');
    font-style: normal;
    fontweight: 400;
    fontdisplay: swap;
  }

  @font-face {
    font-family: 'RightGrotesk-TightRegular';
    src: url('/fonts/RightGrotesk-TightRegular.otf') format('opentype');
    font-style: normal;
    fontweight: 400;
    fontdisplay: swap;
  }

  @font-face {
    font-family: 'RightGrotesk-WideDark';
    src: url('/fonts/RightGrotesk-WideDark.otf') format('opentype');
    font-style: normal;
    fontweight: 400;
    fontdisplay: swap;
  }

  @font-face {
    font-family: 'RightGrotesk-WideRegular';
    src: url('/fonts/RightGrotesk-WideRegular.otf') format('opentype');
    font-style: normal;
    fontweight: 400;
    fontdisplay: swap;
  }
`

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on('routeChangeComplete', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <ChakraProvider theme={customTheme}>
      <DefaultSeo {...SEO} />
      <Global styles={GlobalStyles} />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
