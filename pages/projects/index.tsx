import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'
import useUpdatePreviewRef from './../../utils/useUpdatePreviewRef'
import { Client } from './../../utils/prismicHelpers'

import { Cta, Filter, Layout } from '../../components'

const ProjectsPage = ({ doc, menu, general, projects, clients, preview }) => {
  useUpdatePreviewRef(preview, doc.id)

  const { asPath, query } = useRouter()

  if (doc) {
    const {
      meta_title,
      meta_description,
      og_title,
      og_description,
      og_image,
      intro_heading,
      intro_text,
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

        <Cta heading={intro_heading} text={intro_text} variant="cover" />

        {projects && projects.length > 0 ? (
          <Filter projects={projects} query={query} />
        ) : null}
      </Layout>
    )
  }

  // Call the standard error page if the document was not found
  return null
}

export const getStaticProps: GetStaticProps = async ({ previewData }) => {
  const ref = previewData ? previewData.ref : null

  const client = Client()

  const doc = (await client.getSingle('projects', ref ? { ref } : null)) || {}
  const general =
    (await client.getSingle('general', ref ? { ref } : null)) || {}
  const menu = (await client.getSingle('menu', ref ? { ref } : null)) || {}

  let projects
  if (doc.data.projects.length > 0 && doc.data.projects[0]?.project.id) {
    const ids = await doc.data.projects.map((project) => project.project.id)
    projects = (await client.getByIDs(ids, ref ? { ref } : null)) || {}
  }

  return {
    props: {
      doc: doc || null,
      menu,
      general,
      projects: projects.results || null,
      preview: {
        activeRef: ref,
      },
    },
  }
}

export default ProjectsPage
