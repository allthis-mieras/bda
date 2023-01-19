import Image from 'next/image'
import { RichText, RichTextBlock } from 'prismic-reactjs'
import { linkResolver } from '../config/prismic-configuration'
import { customLink } from '../utils/prismicHelpers'
import {
  useMultiStyleConfig,
  useDisclosure,
  AspectRatio,
  Box,
  Button as ChakraButton,
  Collapse,
  Text,
} from '@chakra-ui/react'

import { LinkList } from '../components'
import { renderArray, renderRichText } from '../utils/utils'
import { AddIcon, MinusIcon } from '@chakra-ui/icons'

type Props = {
  heading: RichTextBlock[]
  text?: RichTextBlock[]
  expandContent?: RichTextBlock[]
  image?: {
    url: string
    alt: string
  }
  links?: {
    label: string
    link: {
      link_type: string
      url: string
    }
  }[]
  subtitle?: RichTextBlock[]
  expandable?: boolean
}

// Make seperate component?
function CollapseEx({ content }) {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <>
      <Collapse in={isOpen} animateOpacity startingHeight={1}>
        {renderRichText(content) ? <RichText render={content} /> : null}
      </Collapse>
      <ChakraButton
        onClick={onToggle}
        variant="outline"
        leftIcon={isOpen ? <MinusIcon w={4} h={4} /> : <AddIcon w={4} h={4} />}
      >
        {isOpen ? 'Read less' : 'Read more'}
      </ChakraButton>
    </>
  )
}

export default function TextBlock({
  heading,
  text,
  expandContent,
  image,
  links,
  subtitle,
  expandable,
}: Props) {
  let styles = useMultiStyleConfig('TextBlock', {})

  return (
    <Box sx={styles.container}>
      {image ? (
        <AspectRatio ratio={1 / 1.618} display={{ base: 'block', lg: 'none' }}>
          <Image
            src={image.url}
            alt={image.alt}
            layout="fill"
            objectFit="cover"
          />
        </AspectRatio>
      ) : null}

      {renderRichText(heading) ? <RichText render={heading} /> : null}

      {subtitle ? <Text sx={styles.subtitle}>{subtitle}</Text> : null}

      {renderRichText(text) ? (
        <RichText
          render={text}
          linkResolver={linkResolver}
          serializeHyperlink={customLink}
        />
      ) : null}

      {expandable && renderRichText(expandContent) ? (
        <CollapseEx content={expandContent} />
      ) : null}

      {renderArray(links) ? (
        <LinkList
          links={links}
          linkResolver={linkResolver}
          serializeHyperlink={customLink}
        />
      ) : null}
    </Box>
  )
}
