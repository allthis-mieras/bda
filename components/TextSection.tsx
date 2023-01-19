import { RichText, RichTextBlock } from 'prismic-reactjs'
import { linkResolver } from '../config/prismic-configuration'
import { customLink } from '../utils/prismicHelpers'
import { useMultiStyleConfig, Grid, GridItem } from '@chakra-ui/react'
import { renderRichText } from '../utils/utils'

type Props = {
  intro: RichTextBlock[]
  text: RichTextBlock[]
  heading?: RichTextBlock[]
}

const TextSection = ({ heading, intro, text }: Props) => {
  const styles = useMultiStyleConfig('TextSection', {})

  if (renderRichText(text)) {
    return (
      <Grid as="section" sx={styles.container}>
        {renderRichText(heading) ? (
          <GridItem sx={styles.heading}>
            <RichText render={heading} />
          </GridItem>
        ) : null}
        {renderRichText(intro) ? (
          <GridItem sx={styles.intro}>
            <RichText
              render={intro}
              linkResolver={linkResolver}
              serializeHyperlink={customLink}
            />
          </GridItem>
        ) : null}
        {renderRichText(text) ? (
          <GridItem sx={styles.text}>
            <RichText
              render={text}
              linkResolver={linkResolver}
              serializeHyperlink={customLink}
            />
          </GridItem>
        ) : null}
      </Grid>
    )
  }

  // If text empty return null
  return null
}

export default TextSection
