import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'
import useUpdatePreviewRef from './../utils/useUpdatePreviewRef'
import { Client } from './../utils/prismicHelpers'

import {
  Cta,
  Experts,
  Layout,
  Logos,
  Newsletter,
  Team,
  TextImage,
} from '../components'

const AboutPage = ({ doc, menu, general, team, experts, clients, preview }) => {
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
      heading,
      text,
      image,
    } = doc.data

    const { newsletter_heading, newsletter_text, newsletter_links } =
      general.data

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

        {team && team.length > 0 ? (
          <TextImage heading={heading} text={text} image={image} />
        ) : null}

        {team && team.length > 0 ? <Team members={team} image={image} /> : null}

        <Experts experts={experts} />

        <Logos clients={clients} />

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

  const doc = (await client.getSingle('about', ref ? { ref } : null)) || {}
  const general =
    (await client.getSingle('general', ref ? { ref } : null)) || {}
  const menu = (await client.getSingle('menu', ref ? { ref } : null)) || {}

  let team
  if (doc.data.team.length > 0 && doc.data.team[0].team_member.id) {
    const ids = await doc.data.team.map((member) => member.team_member.id)
    team = (await client.getByIDs(ids, ref ? { ref } : null)) || {}
  }

  let experts
  if (doc.data.experts.length > 0 && doc.data.experts[0].expert.id) {
    const ids = await doc.data.experts.map((expert) => expert.expert.id)
    experts = (await client.getByIDs(ids, ref ? { ref } : null)) || {}
  }

  const clients =
    (await client.getSingle('clients', ref ? { ref } : null)) || {}

  return {
    props: {
      doc: doc || null,
      menu,
      general,
      team: team.results || null,
      experts: experts.results || null,
      clients: clients.data.clients || null,
      preview: {
        activeRef: ref,
      },
    },
  }
}

export default AboutPage
