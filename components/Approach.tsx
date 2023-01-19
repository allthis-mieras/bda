import { useRouter } from 'next/router'
import {
  useMultiStyleConfig,
  Box,
  Grid,
  GridItem,
  Heading,
  SimpleGrid,
} from '@chakra-ui/react'
import { ButtonGroup } from '../components'
import { RichText, RichTextBlock } from 'prismic-reactjs'
import { linkResolver } from '../config/prismic-configuration'
import { customLink } from '../utils/prismicHelpers'
import { renderRichText, renderArray } from '../utils/utils'

type Props = {
  process: {
    process_heading: RichTextBlock[]
    process_text: RichTextBlock[]
    process_subtitle?: string
  }[]
  heading?: RichTextBlock[]
  links?: any
  variant?: string
}

export default function Approach({ process, heading, links, variant }: Props) {
  const styles = useMultiStyleConfig('Approach', { variant })

  const router = useRouter()

  if (process && renderRichText(process[0].process_heading)) {
    const phase0 = process[0]

    let cloneArray = process.slice()
    cloneArray.shift()

    function chunkArray(myArray, chunk_size: number) {
      var results = []

      while (myArray.length) {
        results.push(myArray.splice(0, chunk_size))
      }

      return results
    }

    var result = chunkArray(cloneArray, 3)

    return (
      <Grid as="section" sx={styles.container}>
        {router.pathname === '/approach' ? (
          <GridItem
            sx={styles.card}
            borderBottomLeftRadius="32px"
            borderBottomRightRadius="32px"
            colStart={{
              base: 2,
              sm: 3,
              '3xl': 5,
            }}
            colEnd={{
              base: 25,
              sm: 24,
              '3xl': 22,
            }}
          >
            <Box sx={styles.cardGrid}>
              {phase0.process_subtitle ? (
                <span>{phase0.process_subtitle}</span>
              ) : null}

              {renderRichText(phase0.process_heading) ? (
                <Heading as="h3" sx={styles.cardHeading}>
                  {RichText.asText(phase0.process_heading)}
                </Heading>
              ) : null}

              {renderRichText(phase0.process_text) ? (
                <RichText
                  render={phase0.process_text}
                  linkResolver={linkResolver}
                  serializeHyperlink={customLink}
                />
              ) : null}
            </Box>
          </GridItem>
        ) : (
          <GridItem colStart={{ base: 2, sm: 3 }} colEnd={{ base: 25, sm: 24 }}>
            <Heading textAlign="center">{RichText.asText(heading)}</Heading>
          </GridItem>
        )}

        <GridItem
          colStart={{
            base: 2,
            sm: 3,
            '3xl': 5,
          }}
          colEnd={{ base: 25, sm: 24, '3xl': 22 }}
        >
          <SimpleGrid columns={{ xl: 2 }} gap={{ base: '48px', '2xl': '64px' }}>
            {result.map((item, index) => {
              let cols = item.slice(0, 2)
              let footer = item.slice(2, 3)
              return (
                <GridItem key={index} sx={styles.card}>
                  <SimpleGrid sx={styles.cardGrid}>
                    {cols.map((col, index: number) => {
                      return (
                        <Box key={index}>
                          {col.process_subtitle ? (
                            <span>{col.process_subtitle}</span>
                          ) : null}

                          {renderRichText(col.process_heading) ? (
                            <Heading as="h3" sx={styles.cardHeading}>
                              {RichText.asText(col.process_heading)}
                            </Heading>
                          ) : null}

                          {renderRichText(col.process_text) ? (
                            <RichText
                              render={col.process_text}
                              linkResolver={linkResolver}
                              serializeHyperlink={customLink}
                            />
                          ) : null}
                        </Box>
                      )
                    })}
                  </SimpleGrid>
                  <Box as="footer" sx={styles.cardFooter}>
                    {renderRichText(footer[0].process_heading) ? (
                      <Heading as="h4" sx={styles.cardHeading}>
                        {RichText.asText(footer[0].process_heading)}
                      </Heading>
                    ) : null}

                    {renderRichText(footer[0].process_text) ? (
                      <RichText
                        render={footer[0].process_text}
                        linkResolver={linkResolver}
                        serializeHyperlink={customLink}
                      />
                    ) : null}
                  </Box>
                </GridItem>
              )
            })}
          </SimpleGrid>
        </GridItem>

        {renderArray(links) ? (
          <GridItem colStart={{ base: 2, sm: 3 }} colEnd={{ base: 25, sm: 24 }}>
            <ButtonGroup
              links={links}
              variant="center"
              buttonVariants={[{ variant: 'gray', arrow: true }]}
            />
          </GridItem>
        ) : null}
      </Grid>
    )
  }

  // Return nothing if the heading of the first process block is empty
  return null
}
