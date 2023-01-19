import { RichText } from 'prismic-reactjs'
import { linkResolver } from '../config/prismic-configuration'
import { customLink } from '../utils/prismicHelpers'
import { useMultiStyleConfig, Grid, GridItem } from '@chakra-ui/react'

import { ButtonGroup } from '../components'
import { renderArray, renderRichText } from '../utils/utils'

export default function Newsletter({ heading, links, text }) {
  const styles = useMultiStyleConfig('Newsletter', {})

  // Check if there is an newsletter
  if (renderRichText(heading)) {
    return (
      <Grid sx={styles.container}>
        <GridItem sx={styles.inner}>
          {renderRichText(heading) ? <RichText render={heading} /> : null}

          {renderRichText(text) ? (
            <RichText
              render={text}
              linkResolver={linkResolver}
              serializeHyperlink={customLink}
            />
          ) : null}

          {renderArray(links) ? (
            <ButtonGroup links={links} variant="center" />
          ) : null}
        </GridItem>
      </Grid>
    )
  }

  // Call the standard error page if the document was not found
  return null
}
