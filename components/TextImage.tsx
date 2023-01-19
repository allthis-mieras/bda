import Image from 'next/image'
import { RichText, RichTextBlock } from 'prismic-reactjs'
import { linkResolver } from '../config/prismic-configuration'
import { customLink } from './../utils/prismicHelpers'
import { useMultiStyleConfig, Grid, GridItem, Text } from '@chakra-ui/react'
import { ButtonGroup } from '../components'
import { renderArray, renderRichText } from '../utils/utils'

type Props = {
  dark?: boolean
  heading?: RichTextBlock[]
  image: {
    alt: string
    url: string
    copyright: string
  }
  image_position?: 'Left' | 'Right'
  text?: RichTextBlock[]
  links?: any
  uid?: string
  children?: React.ReactNode
}

export default function TextImage({
  dark,
  heading,
  image,
  image_position,
  text,
  links,
  uid,
  children,
}: Props) {
  function getVariant() {
    let variant: string | null

    if (image_position === 'Left') {
      variant = 'left'
      return variant
    } else {
      return null
    }
  }

  const styles = useMultiStyleConfig('TextImage', {
    variant: getVariant(),
  })

  return (
    <Grid
      as="section"
      sx={styles.container}
      bg={dark ? 'neutral.800' : null}
      color={dark ? 'neutral.50' : null}
    >
      <GridItem sx={styles.image}>
        <>
          {image && image.url ? (
            <Image
              src={image.url}
              alt={image.alt}
              layout="fill"
              objectFit="cover"
            />
          ) : null}
          {image.copyright ? (
            <Text as="small" sx={styles.copyright}>
              Photo by {image.copyright}
            </Text>
          ) : null}
        </>
      </GridItem>
      <GridItem sx={styles.content}>
        {renderRichText(heading) ? <RichText render={heading} /> : null}

        {renderRichText(text) ? (
          <RichText
            render={text}
            linkResolver={linkResolver}
            serializeHyperlink={customLink}
          />
        ) : null}
        {renderArray(links) ? (
          <ButtonGroup
            params={uid}
            links={links}
            buttonVariants={[{ variant: 'link', arrow: true }]}
          />
        ) : null}
        {children ? children : null}
      </GridItem>
    </Grid>
  )
}
