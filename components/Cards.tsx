import { useRouter } from 'next/router'
import { RichText } from 'prismic-reactjs'
import { useMultiStyleConfig, Grid, GridItem } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'
import { Box, Heading } from '@chakra-ui/react'
import { Card, ButtonGroup } from '../components'
import { renderRichText, renderArray } from '../utils/utils'

export default function Cards({ cards, heading, links, variant }) {
  const router = useRouter()
  let styles = useMultiStyleConfig('Grid', { variant })

  if (renderArray(cards)) {
    const alterdCards = cards.map((data, index: number) => {
      let obj = Object.assign({}, data)

      if (variant === 'cards') {
        // Every fourth element should be tall starting from 3th
        if (index % 4 == 2) {
          if (obj.type === 'article') {
            obj.variant = 'articleTall'
            return obj
          } else {
            obj.variant = 'tall'
            return obj
          }
        }
        // Every fourth element should be wide starting from 4th
        if (index % 4 == 3) {
          if (obj.type === 'article') {
            obj.variant = 'articleWide'
            return obj
          } else {
            obj.variant = 'wide'
            return obj
          }
        } else {
          if (obj.type === 'article') {
            obj.variant = 'article'
            return obj
          } else {
            obj.variant = 'project'
            return obj
          }
        }
      } else {
        // Second element should be tall
        if (index === 1) {
          if (obj.type === 'article') {
            obj.variant = 'articleTall'
            return obj
          } else {
            obj.variant = 'tall'
            return obj
          }
        } else {
          return obj
        }
      }
    })

    return (
      <Box
        as={router.pathname === '/projects' ? 'div' : 'section'}
        py={{ base: 12, sm: 16, md: 24, '2xl': 32 }}
      >
        {renderRichText(heading) ? (
          <Grid mb={{ base: 8, md: 16 }}>
            <GridItem
              colStart={{ base: 2, sm: 4, md: 2, '3xl': 4 }}
              colEnd={{ base: 25, sm: 24 }}
            >
              <Heading textAlign={{ base: 'center', lg: 'left' }}>
                {RichText.asText(heading)}
              </Heading>
            </GridItem>
          </Grid>
        ) : null}

        <Grid sx={styles}>
          <AnimatePresence>
            {alterdCards.map((data, index: number) => {
              let { uid, type, variant } = data
              let {
                panorama_heading,
                intro_intro,
                meta_date,
                panorama_image,
                article_heading,
                article_text,
                article_date,
                article_image,
                article_link,
              } = data.data

              return type === 'article' ? (
                <Card
                  key={`article-${index}`}
                  heading={article_heading}
                  text={article_text}
                  variant={variant}
                  type={type}
                  date={article_date}
                  url={article_link.url}
                  image={article_image}
                />
              ) : (
                <Card
                  key={`project-${index}`}
                  heading={panorama_heading}
                  text={intro_intro}
                  variant={variant}
                  type={type}
                  date={meta_date}
                  url={uid}
                  image={panorama_image}
                />
              )
            })}
          </AnimatePresence>
        </Grid>
        {renderArray(links) ? (
          <Box
            sx={{
              px: {
                base: 'calc(100vw /25)',
                sm: 'calc(100vw / 25 * 2)',
                lg: 0,
              },
            }}
          >
            <ButtonGroup
              links={links}
              variant="center"
              buttonVariants={[{ variant: 'outline', arrow: true }]}
            />
          </Box>
        ) : null}
      </Box>
    )
  }

  return null
}
