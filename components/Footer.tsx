import { useRouter } from 'next/router'
import { default as NextLink } from 'next/link'
import { RichText, RichTextBlock } from 'prismic-reactjs'
import { useMultiStyleConfig, Box, Grid, GridItem } from '@chakra-ui/react'

type Props = {
  general: {
    city: string
    company_name: string
    floor: string
    office: string
    postal: string
    street: string
    bank: string
    kvk: string
    vat: string
  }
  menu: {
    menu_links: {
      label: RichTextBlock[]
      link: {
        slug: string
      }
    }[]
  }
}

const Footer = ({ general, menu }: Props) => {
  const router = useRouter()
  const styles = useMultiStyleConfig('Footer', {})

  const { city, company_name, floor, postal, street, kvk, bank, vat } = general
  const { menu_links } = menu

  return (
    <Grid as="footer" sx={styles.container}>
      <GridItem sx={styles.inner}>
        <Box as="nav" sx={styles.nav}>
          <ul>
            {menu_links.map((item, index: number) => (
              <li key={`menulinkFooter-${index}`}>
                <NextLink
                  href={
                    item.link.slug === 'homepage' ? '/' : `/${item.link.slug}`
                  }
                >
                  <a
                    className={
                      router.pathname === `/${item.link.slug}`
                        ? 'is-active'
                        : item.link.slug === 'homepage' &&
                          router.pathname === '/'
                        ? 'is-active'
                        : null
                    }
                  >
                    {RichText.asText(item.label)}
                  </a>
                </NextLink>
              </li>
            ))}
          </ul>
        </Box>
        <Box sx={styles.meta}>
          <ul>
            <li>{company_name ? company_name : null}</li>
            <li>{street ? street : null}</li>
            <li>{floor ? floor : null}</li>
            <li>
              {postal ? postal : null} {city ? city : null}
            </li>
          </ul>
          <ul>
            <li>{kvk ? kvk : null}</li>
            <li>{bank ? bank : null}</li>
            <li>{vat ? vat : null}</li>
          </ul>
        </Box>
      </GridItem>
    </Grid>
  )
}

export default Footer
