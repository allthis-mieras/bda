import { RichText, RichTextBlock } from 'prismic-reactjs'
import { linkResolver } from '../config/prismic-configuration'
import { customLink } from '../utils/prismicHelpers'
import {
  useMultiStyleConfig,
  Box,
  Grid,
  GridItem,
  SimpleGrid,
} from '@chakra-ui/react'
import { renderRichText } from '../utils/utils'

type Props = {
  heading: RichTextBlock[]
  intro: RichTextBlock[]
  text: RichTextBlock[]
  small?: RichTextBlock[]
}

export default function Intro({ heading, intro, text, small }: Props) {
  let styles = useMultiStyleConfig('Intro', {})

  if (renderRichText(heading)) {
    return (
      <Grid sx={styles.container}>
        <GridItem sx={styles.inner}>
          {renderRichText(heading) ? <RichText render={heading} /> : null}

          <SimpleGrid
            columns={{ xl: small[0]?.text ? 3 : 2 }}
            spacing={{ base: 6, xl: 10, '2xl': 16 }}
          >
            {renderRichText(intro) ? (
              <Box sx={styles.intro}>
                <RichText
                  render={intro}
                  linkResolver={linkResolver}
                  serializeHyperlink={customLink}
                />
              </Box>
            ) : null}

            {renderRichText(text) ? (
              <Box>
                <RichText
                  render={text}
                  linkResolver={linkResolver}
                  serializeHyperlink={customLink}
                />
              </Box>
            ) : null}

            {renderRichText(small) ? (
              <Box sx={styles.small}>
                <RichText
                  render={small}
                  linkResolver={linkResolver}
                  serializeHyperlink={customLink}
                />
              </Box>
            ) : null}
          </SimpleGrid>
        </GridItem>
      </Grid>
    )
  }

  return null
}
