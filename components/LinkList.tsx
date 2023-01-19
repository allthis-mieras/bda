import { default as NextLink } from 'next/link'
import { RichTextBlock } from 'prismic-reactjs'
import { Link } from 'prismic-reactjs'
import { hrefResolver } from '../config/prismic-configuration'
import { useStyleConfig, Link as ChakraLink, VStack } from '@chakra-ui/react'

type Props = {
  links: {
    label: RichTextBlock[]
    link: {
      url: string
      link_type?: string
    }
  }[]
}

export default function LinkList({ links }: Props) {
  const styles = useStyleConfig('LinkList')

  return (
    <VStack sx={styles}>
      {links.map(({ label, link }, index: number) => {
        return link.link_type === 'Web' ? (
          <ChakraLink isExternal key={`external-${index}`} href={link.url}>
            {label}
          </ChakraLink>
        ) : (
          <NextLink
            key={`document-${index}`}
            passHref
            href={Link.url(link, hrefResolver)}
          >
            <ChakraLink>{label}</ChakraLink>
          </NextLink>
        )
      })}
    </VStack>
  )
}
