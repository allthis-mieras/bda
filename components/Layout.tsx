import Head from 'next/head'
import { useRouter } from 'next/router'

import { Footer, Header, ExitPreview } from '../components'

type Props = {
  children: React.ReactNode
  general: any
  menu: any
  variant?: string
}

const Layout = ({ children, general, menu, variant }: Props) => {
  const { isPreview } = useRouter()

  return (
    <>
      <Head>
        <link
          rel="preload"
          href="/fonts/RightGrotesk-NarrowBlack.otf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/RightGrotesk-Regular.otf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/RightGrotesk-TightDark.otf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/RightGrotesk-TightRegular.otf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/RightGrotesk-WideDark.otf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/RightGrotesk-WideRegular.otf"
          as="font"
          crossOrigin=""
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header general={general.data} menu={menu.data} />
      <main style={{ position: 'relative' }}>{children}</main>
      <Footer general={general.data} menu={menu.data} />
      {isPreview ? <ExitPreview /> : null}
    </>
  )
}

export default Layout
