import { RichText, RichTextBlock } from 'prismic-reactjs'
import { linkResolver } from '../config/prismic-configuration'
import { customLink } from '../utils/prismicHelpers'
import { useMultiStyleConfig, Grid, GridItem } from '@chakra-ui/react'
import { renderArray, renderRichText } from '../utils/utils'
import { ButtonGroup } from '../components'

type Props = {
  heading: RichTextBlock[]
  text?: RichTextBlock[]
  links?: {
    label: string
    link: {
      link_type: string
    }
  }[]
  column2?: RichTextBlock[]
  variant?: 'left' | 'cover'
  ref?: any
}

export default function Cta({ heading, text, links, column2, variant }: Props) {
  const styles = useMultiStyleConfig('Cta', { variant })

  // Only render component if 'heading' is not empty
  if (renderRichText(heading)) {
    return (
      <Grid sx={styles.container}>
        <GridItem sx={styles.inner}>
          {renderRichText(heading) ? (
            <RichText
              render={heading}
              linkResolver={linkResolver}
              serializeHyperlink={customLink}
            />
          ) : null}

          {variant === 'left' ? (
            <Grid
              templateColumns={{ lg: '2fr 1fr' }}
              columnGap={{
                lg: variant === 'left' ? 16 : 0,
                xl: variant === 'left' ? 32 : 0,
              }}
            >
              <GridItem>
                {renderRichText(text) ? (
                  <RichText
                    render={text}
                    linkResolver={linkResolver}
                    serializeHyperlink={customLink}
                  />
                ) : null}

                {renderArray(links) ? (
                  <ButtonGroup
                    links={links}
                    buttonVariants={[{ variant: 'outline', arrow: false }]}
                  />
                ) : null}
              </GridItem>

              {variant === 'left' && column2 ? (
                <GridItem sx={styles.column}>
                  <RichText
                    render={column2}
                    linkResolver={linkResolver}
                    serializeHyperlink={customLink}
                  />
                </GridItem>
              ) : null}
            </Grid>
          ) : (
            <>
              {renderRichText(text) ? (
                <RichText
                  render={text}
                  linkResolver={linkResolver}
                  serializeHyperlink={customLink}
                />
              ) : null}

              {renderArray(links) ? (
                <ButtonGroup
                  links={links}
                  buttonVariants={[
                    { variant: 'primary', arrow: false },
                    { variant: 'outline', arrow: true },
                  ]}
                />
              ) : null}
            </>
          )}
        </GridItem>
      </Grid>
    )
  }

  // If 'heading' is empty, return nothing/null
  return null
}
