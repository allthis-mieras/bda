import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'
import useUpdatePreviewRef from './../utils/useUpdatePreviewRef'
import { Client } from './../utils/prismicHelpers'

import { Cta, Layout, SliceZone, StickyContent } from '../components'

const ApproachPage = ({ doc, menu, general, preview }) => {
  useUpdatePreviewRef(preview, doc.id)

  const { asPath } = useRouter()

  if (doc) {
    const {
      meta_title,
      meta_description,
      og_title,
      og_description,
      og_image,
      intro_heading,
      intro_text,
      column_2,
      themes,
      // process,
      body,
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
        <Cta
          heading={intro_heading}
          text={intro_text}
          column2={column_2}
          variant="left"
        />

        {/* {process && process.length > 0 ? (
          <Approach process={process} variant="outline" />
        ) : null} */}

        <StickyContent blocks={themes} variant="text" />
        <SliceZone sliceZone={body} />
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

  const doc = (await client.getSingle('approach', ref ? { ref } : null)) || {}
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

export default ApproachPage
