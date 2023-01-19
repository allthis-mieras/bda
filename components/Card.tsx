import Image from 'next/image'
import Link from 'next/link'
import { RichText, RichTextBlock } from 'prismic-reactjs'
import { formatDistanceToNow } from 'date-fns'
import {
  useMultiStyleConfig,
  Box,
  Heading,
  Flex,
  LinkBox,
  LinkOverlay,
  Text,
} from '@chakra-ui/react'
import { LinkIcon } from '@chakra-ui/icons'
import { motion } from 'framer-motion'
import { renderRichText } from '../utils/utils'

type Props = {
  heading: RichTextBlock[]
  text: {
    text: string
  }[]
  date: string
  image: {
    alt: string
    url: string
  }
  type: 'article' | 'project'
  variant?:
    | 'project'
    | 'tall'
    | 'wide'
    | 'article'
    | 'articleTall'
    | 'articleWide'
  url?: string
}

export default function Card({
  heading,
  text,
  date,
  image,
  variant,
  type,
  url,
}: Props) {
  let styles = useMultiStyleConfig('Card', { variant })

  function cleanURL(url: string) {
    let domain = new URL(url)

    let hostName = domain.hostname

    let cleanURL = hostName.replace('www.', '')

    return cleanURL
  }

  const truncate = (input: string) =>
    input.length > 100 ? `${input.substring(0, 100)}...` : input

  function formatDate(input: string) {
    let formattedDate = formatDistanceToNow(new Date(input), {
      addSuffix: true,
    })

    if (formattedDate === '1 day ago') {
      return 'Yesterday'
    }

    return formattedDate
  }

  // const formatTheme = (input: string) => input.replace('-', ' ')

  const MotionBox = motion(LinkBox)
  const boxVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3,
        duration: 1,
      },
    },
    exit: {
      opacity: 0,
      y: 100,
      transition: {
        duration: 0.5,
        opacity: {
          duration: 0.3,
        },
      },
    },
  }

  return (
    <MotionBox
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={boxVariants}
      as="article"
      sx={styles.container}
    >
      <Box sx={styles.inner}>
        {image ? (
          <Image
            src={image.url}
            alt={image.alt}
            layout="fill"
            objectFit="cover"
          />
        ) : null}
        <Box sx={styles.content}>
          <Flex as="ul" sx={styles.meta}>
            {type ? <li>{type}</li> : null}

            {/* {theme ? <li>{formatTheme(theme)}</li> : null} */}

            {date ? (
              <li>
                <time dateTime={date}>{formatDate(date)}</time>
              </li>
            ) : null}
          </Flex>

          {url ? (
            <Link href={type === 'project' ? `/projects/${url}` : url} passHref>
              <LinkOverlay isExternal={type !== 'project'}>
                {renderRichText(heading) ? (
                  <Heading as="h3" sx={styles.heading}>
                    {RichText.asText(heading)}
                  </Heading>
                ) : null}
              </LinkOverlay>
            </Link>
          ) : null}

          {text ? <Text sx={styles.text}>{truncate(text[0].text)}</Text> : null}

          {type === 'article' ? (
            <Text sx={styles.link}>
              <LinkIcon marginRight="8px" />
              {cleanURL(url)}
            </Text>
          ) : null}
        </Box>
      </Box>
    </MotionBox>
  )
}
