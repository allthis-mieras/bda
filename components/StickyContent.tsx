import { useState } from 'react'
import { RichTextBlock } from 'prismic-reactjs'
import Image from 'next/image'
import { useMultiStyleConfig, Box, GridItem, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { InView } from 'react-intersection-observer'

import { ButtonGroup, TextBlock } from '.'
import { renderArray } from '../utils/utils'

type Props = {
  blocks: {
    heading: RichTextBlock[]
    text: RichTextBlock[]
    image?: {
      alt: string
      url: string
      copyright: string
    }
  }[]
  dark?: boolean
  links?: {
    label: string
    link: {
      link_type: string
    }
  }[]
  variant?: 'text'
}

export default function StickyContent({ blocks, links, dark, variant }: Props) {
  const [currentPhase, setCurrentPhase] = useState(0)

  const [currentImage, setCurrentImage] = useState(blocks[0].image)

  const styles = useMultiStyleConfig('StickyContent', { variant })
  // Only render component if 'blocks' is not empty
  if (renderArray(blocks)) {
    const MotionBox = motion(Box)
    const boxVariants = {
      hidden: { opacity: variant !== 'text' ? 0 : 1 },
      visible: {
        opacity: 1,
        transition: {
          ease: 'easeInOut',
          duration: 0.75,
        },
      },
    }

    const MotionText = motion(Text)
    const textVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          duration: 1,
        },
      },
    }

    function handleInView(inView: boolean, index: number, image: any) {
      if (inView) {
        setCurrentPhase(index)
        setCurrentImage(image)
      }
    }

    return (
      <Box
        as="section"
        sx={styles.container}
        bg={dark ? 'neutral.800' : null}
        color={dark ? 'neutral.50' : null}
      >
        {blocks.map(({ heading, text, image }, index: number) => {
          return (
            <InView
              threshold={0.5}
              key={index}
              onChange={(inView) =>
                handleInView(inView, index, blocks[index].image)
              }
            >
              {({ ref }) => {
                return (
                  <>
                    {(image && image.url) || variant === 'text' ? (
                      <GridItem
                        sx={styles.image}
                        layerStyle={
                          variant === 'text' && index > 2
                            ? 'ocean'
                            : variant === 'text' && index > 0
                            ? 'pink'
                            : null
                        }
                      >
                        {variant !== 'text' ? (
                          <Image
                            src={image.url}
                            alt={image.alt}
                            layout="fill"
                            objectFit="cover"
                          />
                        ) : null}
                        {variant !== 'text' && image.copyright ? (
                          <Text as="small" sx={styles.copyright}>
                            Photo by {image.copyright}
                          </Text>
                        ) : null}
                        {variant === 'text' ? (
                          <Text sx={styles.stickyText}>{index}</Text>
                        ) : null}
                      </GridItem>
                    ) : null}
                    <GridItem sx={styles.content}>
                      <Box ref={ref}>
                        <TextBlock key={index} heading={heading} text={text} />
                      </Box>
                    </GridItem>
                  </>
                )
              }}
            </InView>
          )
        })}
        <GridItem colStart={{ base: 2, sm: 3, '3xl': 5 }} colEnd={-1}>
          {renderArray(links) && links[0].label ? (
            <ButtonGroup
              links={links}
              buttonVariants={[{ variant: 'link', arrow: true }]}
            />
          ) : null}
        </GridItem>
        <GridItem sx={styles.stickyContainer}>
          <MotionBox
            initial="hidden"
            animate="visible"
            variants={boxVariants}
            sx={styles.stickyContent}
            layerStyle={
              currentPhase > 2 ? 'ocean' : currentPhase === 0 ? null : 'pink'
            }
          >
            {variant === 'text' ? (
              <MotionText
                initial="hidden"
                animate="visible"
                variants={textVariants}
                sx={styles.stickyText}
              >
                {currentPhase}
              </MotionText>
            ) : currentImage.url ? (
              <Image
                src={currentImage.url}
                alt={currentImage.alt}
                layout="fill"
                objectFit="cover"
              />
            ) : null}
            {variant !== 'text' && currentImage.copyright ? (
              <Text as="small" sx={styles.copyright}>
                Photo by {currentImage.copyright}
              </Text>
            ) : null}
          </MotionBox>
        </GridItem>
      </Box>
    )
  }

  // If 'blocks' is empty, return nothing/null
  return null
}
