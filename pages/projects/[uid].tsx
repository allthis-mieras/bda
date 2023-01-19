import { GetStaticProps, GetStaticPaths } from 'next'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'
import useUpdatePreviewRef from './../../utils/useUpdatePreviewRef'
import { Client } from './../../utils/prismicHelpers'
import { queryRepeatableDocuments } from '../../utils/queries'

import {
  Cards,
  Cta,
  Intro,
  Layout,
  Panorama,
  SliceZone,
} from '../../components'
import { renderRichText } from '../../utils/utils'

const Page = ({
  doc,
  menu,
  general,
  relatedProjects,
  nextProject,
  preview,
}) => {
  useUpdatePreviewRef(preview, doc.id)

  const { asPath } = useRouter()

  if (doc) {
    const {
      meta_title,
      meta_description,
      og_title,
      og_description,
      og_image,
      panorama_heading,
      panorama_subtitle,
      panorama_image,
      meta_logo,
      intro_title,
      intro_intro,
      intro_text,
      intro_small,
      body,
      cta_heading,
      cta_text,
      cta_links,
    } = doc.data

    return (
      <Layout general={general} menu={menu} variant="dark">
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

        {renderRichText(panorama_heading) && panorama_image.url ? (
          <Panorama
            heading={panorama_heading}
            subtitle={panorama_subtitle}
            image={panorama_image}
            logo={meta_logo}
          />
        ) : null}

        {renderRichText(intro_title) ? (
          <Intro
            heading={intro_title}
            intro={intro_intro}
            text={intro_text}
            small={intro_small}
          />
        ) : null}

        <SliceZone sliceZone={body} />

        <Cta heading={cta_heading} text={cta_text} links={cta_links} />

        {relatedProjects && relatedProjects.length > 0 ? (
          <Cards cards={relatedProjects.slice(0, 2)} variant="related" />
        ) : null}

        {nextProject.data &&
        renderRichText(nextProject?.data?.panorama_heading) ? (
          <Panorama
            heading={nextProject.data.panorama_heading}
            image={nextProject.data.panorama_image}
            link={nextProject.uid}
            variant="nextProject"
          />
        ) : null}
      </Layout>
    )
  }

  // Call the standard error page if the document was not found
  return null
}

export const getStaticProps: GetStaticProps = async ({
  params,
  previewData,
}) => {
  const ref = previewData ? previewData.ref : null

  const client = Client()

  const doc =
    (await client.getByUID('project', params.uid, ref ? { ref } : null)) || {}
  const general =
    (await client.getSingle('general', ref ? { ref } : null)) || {}
  const menu = (await client.getSingle('menu', ref ? { ref } : null)) || {}

  let relatedProjects
  if (doc.data.related[0].project.id) {
    const ids = await doc.data.related.map((project) => project.project.id)
    relatedProjects = (await client.getByIDs(ids, ref ? { ref } : null)) || {}
  } else {
    relatedProjects = []
  }

  let nextProject
  if (doc.data.next_project.id) {
    nextProject =
      (await client.getByID(doc.data.next_project.id, ref ? { ref } : null)) ||
      {}
  } else {
    nextProject = {}
  }

  return {
    props: {
      preview: {
        activeRef: ref,
      },
      menu,
      general,
      relatedProjects: relatedProjects.results || null,
      nextProject: nextProject || null,
      doc: doc || null,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const documents = await queryRepeatableDocuments(
    (doc) => doc.type === 'project'
  )

  return {
    paths: documents.map((doc) => `/projects/${doc.uid}`),
    fallback: false, // just show the 404 page when page isn't found
  }
}

export default Page
