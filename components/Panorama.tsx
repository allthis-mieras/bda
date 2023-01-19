import Image from 'next/image'
import { default as NextLink } from 'next/link'
import { RichText, RichTextBlock } from 'prismic-reactjs'
import {
  useMultiStyleConfig,
  Box,
  Grid,
  GridItem,
  Heading,
  Text,
  LinkBox,
  LinkOverlay,
} from '@chakra-ui/react'
import { renderRichText } from '../utils/utils'

type Props = {
  heading: RichTextBlock[]
  subtitle?: string
  image: {
    alt: string
    url: string
  }
  link?: {
    url: string
  }
  logo?: {
    alt: string
    url: string
  }
  variant?: 'nextProject'
}

export default function Panorama({
  heading,
  subtitle,
  image,
  link,
  logo,
  variant,
}: Props) {
  let styles = useMultiStyleConfig('Panorama', { variant })

  if (renderRichText(heading) && image?.url) {
    return (
      <LinkBox as="div" sx={styles.container}>
        {image ? (
          <Image
            src={image.url}
            alt={image.alt}
            layout="fill"
            objectFit="cover"
          />
        ) : null}

        <Grid sx={styles.inner}>
          {heading && heading.length > 0 && heading[0].text !== '' ? (
            <GridItem sx={styles.content}>
              {link ? (
                <NextLink passHref href={`/projects/${link}`}>
                  <LinkOverlay sx={styles.link}>
                    <span>Next projects</span>
                  </LinkOverlay>
                </NextLink>
              ) : null}

              {renderRichText(heading) ? (
                <Heading sx={styles.heading}>
                  {RichText.asText(heading)}
                </Heading>
              ) : null}

              {subtitle ? <Text sx={styles.subtitle}>{subtitle}</Text> : null}

              {logo && logo.url ? (
                <Box sx={styles.logo}>
                  <Image
                    src={logo.url}
                    alt={logo.alt}
                    layout="responsive"
                    width={180}
                    height="100%"
                    objectFit="contain"
                  />
                </Box>
              ) : null}
            </GridItem>
          ) : null}
        </Grid>
      </LinkBox>
    )
  }

  // If 'heading' is empty, return nothing/null
  return null
}
