import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'
import useUpdatePreviewRef from './../utils/useUpdatePreviewRef'
import { Client } from './../utils/prismicHelpers'

import { Cta, Layout, TextImage } from '../components'

const ThemesPage = ({ doc, menu, general, themes, preview }) => {
  useUpdatePreviewRef(preview, doc.id)

  const { asPath } = useRouter()

  if (doc && doc.data.themes[0]?.theme.id) {
    const {
      meta_title,
      meta_description,
      og_title,
      og_description,
      og_image,
      intro_heading,
      intro_text,
      cta_heading,
      cta_links,
    } = doc.data

    return (
      <Layout general={general} menu={menu}>
        <NextSeo
          title={meta_title}
          description={meta_description}
          openGraph={{
            title: og_title,
            description: og_description,
            url: `https://businessdesignagency.nl${asPath}`,
            images: [
              {
                url: og_image.url,
              },
            ],
          }}
        />

        <Cta heading={intro_heading} text={intro_text} variant="left" />

        {themes.map((theme, index) => {
          return (
            <TextImage
              key={index}
              heading={theme.data.heading}
              image={theme.data.image}
              image_position={index % 2 !== 0 ? 'Left' : 'Right'}
              text={theme.data.text}
              links={theme.data.links}
              uid={theme.uid}
            />
          )
        })}

        <Cta heading={cta_heading} links={cta_links} />
      </Layout>
    )
  }

  // Call the standard error page if the document was not found
  return null
}

export const getStaticProps: GetStaticProps = async ({ previewData }) => {
  const ref = previewData ? previewData.ref : null

  const client = Client()

  const doc = (await client.getSingle('themes', ref ? { ref } : null)) || {}
  const general =
    (await client.getSingle('general', ref ? { ref } : null)) || {}
  const menu = (await client.getSingle('menu', ref ? { ref } : null)) || {}

  let themes
  if (doc.data.themes && doc.data.themes[0]?.theme.id) {
    const ids = await doc.data.themes.map((theme) => theme.theme.id)
    themes = (await client.getByIDs(ids, ref ? { ref } : null)) || {}
  }

  return {
    props: {
      doc: doc || null,
      menu,
      general,
      themes: themes.results || null,
      preview: {
        activeRef: ref,
      },
    },
  }
}

export default ThemesPage
