import { GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'
import useUpdatePreviewRef from './../utils/useUpdatePreviewRef'
import { Client } from './../utils/prismicHelpers'

import {
  Approach,
  Cards,
  Cta,
  StickyContent,
  Layout,
  Logos,
} from '../components'

import { renderArray, renderRichText } from '../utils/utils'

const HomePage = ({
  doc,
  menu,
  general,
  projects,
  approach,
  clients,
  preview,
}) => {
  useUpdatePreviewRef(preview, doc.id)

  if (doc) {
    const {
      meta_title,
      meta_description,
      og_title,
      og_description,
      og_image,
      intro_heading,
      intro_text,
      intro_links,
      projects_heading,
      projects_links,
      themes,
      themes_links,
      approach_heading,
      approach_links,
      cta_heading,
      cta_text,
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
          links={intro_links}
          variant="cover"
        />

        {/* Only render component if not empty */}
        {renderArray(projects) ? (
          <Cards
            cards={projects}
            heading={projects_heading}
            links={projects_links}
            variant="cards"
          />
        ) : null}

        {themes.length > 0 && renderRichText(themes[0].heading) ? (
          <StickyContent blocks={themes} links={themes_links} />
        ) : null}

        {/* Only render component if not empty */}
        {renderArray(approach.process) ? (
          <Approach
            heading={approach_heading}
            process={approach.process}
            links={approach_links}
          />
        ) : null}

        <Logos clients={clients} />

        <Cta heading={cta_heading} text={cta_text} links={cta_links} />
      </Layout>
    )
  }

  // Call the standard error page if the document was not found
  return null
}

export const getStaticProps: GetStaticProps = async ({ previewData }) => {
  const ref = previewData ? previewData.ref : null

  const client = Client()

  const doc = (await client.getSingle('homepage', ref ? { ref } : null)) || {}
  const general =
    (await client.getSingle('general', ref ? { ref } : null)) || {}
  const menu = (await client.getSingle('menu', ref ? { ref } : null)) || {}
  const approach =
    (await client.getSingle('approach', ref ? { ref } : null)) || {}

  let projects
  if (doc.data.projects.length > 0 && doc.data.projects[0]?.project.id) {
    const ids = await doc.data.projects.map((project) => project.project.id)
    projects = (await client.getByIDs(ids, ref ? { ref } : null)) || {}
  }

  const clients =
    (await client.getSingle('clients', ref ? { ref } : null)) || {}

  return {
    props: {
      doc: doc || null,
      menu,
      general,
      projects: projects.results || null,
      approach: approach.data || null,
      clients: clients.data.clients || null,
      preview: {
        activeRef: ref,
      },
    },
  }
}

export default HomePage
