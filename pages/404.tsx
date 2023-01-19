import { GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'
import useUpdatePreviewRef from './../utils/useUpdatePreviewRef'
import { Client } from './../utils/prismicHelpers'
import { Cta, Layout, Newsletter } from '../components'

const Custom404 = ({ doc, menu, general, preview }) => {
  useUpdatePreviewRef(preview, doc.id)

  if (doc) {
    const {
      meta_title,
      meta_description,
      og_title,
      og_description,
      og_image,
      error_heading,
      error_links,
    } = doc.data

    const { newsletter_heading, newsletter_text, newsletter_links } = general

    return (
      <Layout general={general} menu={menu}>
        <NextSeo
          title={meta_title}
          description={meta_description}
          openGraph={{
            title: og_title,
            description: og_description,
            images: [
              {
                url: og_image.url,
              },
            ],
          }}
        />

        <Cta heading={error_heading} links={error_links} variant="cover" />

        <Newsletter
          heading={newsletter_heading}
          text={newsletter_text}
          links={newsletter_links}
        />
      </Layout>
    )
  }

  // Call the standard error page if the document was not found
  return null
}

export const getStaticProps: GetStaticProps = async ({ previewData }) => {
  const ref = previewData ? previewData.ref : null

  const client = Client()

  const doc = (await client.getSingle('404', ref ? { ref } : null)) || {}
  const general =
    (await client.getSingle('general', ref ? { ref } : null)) || {}
  const menu = (await client.getSingle('menu', ref ? { ref } : null)) || {}

  return {
    props: {
      doc: doc || null,
      menu,
      general,
      preview: {
        activeRef: ref,
      },
    },
  }
}

export default Custom404
