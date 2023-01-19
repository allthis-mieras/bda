import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'
import useUpdatePreviewRef from './../utils/useUpdatePreviewRef'
import { Client } from './../utils/prismicHelpers'

import {
  Address,
  Cta,
  Layout,
  Newsletter,
  TextBlock,
  TextImage,
} from '../components'

const ContactPage = ({ doc, menu, general, team, preview }) => {
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
      image,
    } = doc.data

    const {
      city,
      company_name,
      floor,
      office,
      postal,
      socials,
      street,
      newsletter_heading,
      newsletter_text,
      newsletter_links,
    } = general.data

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

        <TextImage image={image} image_position="Left">
          <Address
            city={city}
            companyName={company_name}
            floor={floor}
            office={office}
            postal={postal}
            socials={socials}
            street={street}
          />

          {team && team.length > 0
            ? team.map(({ data }, index: number) => {
                const { name, job_title, links } = data
                return (
                  <TextBlock
                    key={index}
                    heading={name}
                    subtitle={job_title}
                    links={links}
                  />
                )
              })
            : null}
        </TextImage>

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

  const doc = (await client.getSingle('contact', ref ? { ref } : null)) || {}
  const general =
    (await client.getSingle('general', ref ? { ref } : null)) || {}
  const menu = (await client.getSingle('menu', ref ? { ref } : null)) || {}

  let team
  if (doc.data.contacts.length > 0 && doc.data.contacts[0].contact.id) {
    const ids = await doc.data.contacts.map((contact) => contact.contact.id)
    team = (await client.getByIDs(ids, ref ? { ref } : null)) || {}
  }

  return {
    props: {
      doc: doc || null,
      menu,
      general,
      team: team.results || null,
      preview: {
        activeRef: ref,
      },
    },
  }
}

export default ContactPage
