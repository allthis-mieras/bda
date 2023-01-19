import { Button as ChakraButton } from '@chakra-ui/react'
import { default as NextLink } from 'next/link'
import { Link } from 'prismic-reactjs'
import { linkResolver, hrefResolver } from '../config/prismic-configuration'

type Props = {
  label: string
  link?: {
    link_type: string
    type: string
  }
  rightIcon?: React.ReactElement
  variant?: string
  onClick?: () => void
  params?: string
}

export default function Button({
  label,
  link,
  rightIcon,
  params,
  variant,
}: Props) {
  if (link) {
    const linkUrl = Link.url(link, linkResolver)

    // If the link is an internal link, then return a NextLink
    if (link.link_type && link.link_type === 'Document') {
      // If the link has some paramas and an internal link, then return a NextLink
      if (params) {
        return (
          <NextLink
            passHref
            href={{
              pathname: `/${link.type}`,
              query: { category: params },
            }}
          >
            <ChakraButton as="a" rightIcon={rightIcon} variant={variant}>
              {label}
            </ChakraButton>
          </NextLink>
        )
      } else {
        return (
          <NextLink passHref href={Link.url(link, hrefResolver)}>
            <ChakraButton as="a" rightIcon={rightIcon} variant={variant}>
              {label}
            </ChakraButton>
          </NextLink>
        )
      }
    }

    // Otherwise return a normal anchor element
    return (
      <ChakraButton
        as="a"
        href={linkUrl}
        rightIcon={rightIcon}
        variant={variant}
        target="_blank"
        rel="noopener noreferrer"
      >
        {label}
      </ChakraButton>
    )
  }
  return null
}
