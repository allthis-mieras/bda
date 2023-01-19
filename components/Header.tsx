import { useRef } from 'react'
import { default as NextLink } from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { RichText } from 'prismic-reactjs'
import {
  useMultiStyleConfig,
  useDisclosure,
  Box,
  Button,
  Grid,
  Link as ChakraLink,
  Modal,
  ModalContent,
  ModalBody,
} from '@chakra-ui/react'
import { motion, useViewportScroll, useAnimation } from 'framer-motion'

type Props = {
  menu: any
  general: any
}

const MotionGrid = motion(Grid)

const Header = ({ menu, general, variant }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { scrollY } = useViewportScroll()
  const controls = useAnimation()
  const delta = useRef(0)
  const lastScrollY = useRef(0)

  scrollY.onChange((val) => {
    const diff = Math.abs(val - lastScrollY.current)

    if (val >= lastScrollY.current) {
      delta.current = delta.current >= 10 ? 10 : delta.current + diff
    } else {
      delta.current = delta.current <= -10 ? -10 : delta.current - diff
    }

    if (delta.current >= 10 && val > 200) {
      controls.start('hidden')
    } else if (delta.current <= -10 || val < 200) {
      controls.start('visible')
    }
    lastScrollY.current = val
  })

  const handleNav = () => {
    onOpen()
  }

  const styles = useMultiStyleConfig('Header', {})

  return (
    <>
      <MotionGrid
        as="header"
        sx={styles.container}
        initial="visible"
        animate={controls}
        variants={{
          visible: { transform: 'translateY(0%)' },
          hidden: { transform: 'translateY(-100%)' },
        }}
      >
        <NextLink href="/">
          <Box as="a" sx={styles.logo}>
            <Image
              src="/images/logo.svg"
              height={112}
              width={72}
              alt="Business Design Agency logo"
            />
          </Box>
        </NextLink>
        <Button
          variant="outline"
          aria-label="Toggle Menu"
          onClick={() => handleNav()}
        >
          Menu
        </Button>
      </MotionGrid>
      <MenuLinks
        menu={menu}
        general={general}
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  )
}

const MenuLinks = ({ menu, general, isOpen, onClose }) => {
  const styles = useMultiStyleConfig('Nav', {})

  const { city, floor, office, postal, street } = general

  if (menu) {
    return (
      <Modal onClose={onClose} size="full" isOpen={isOpen}>
        <ModalContent sx={styles.container}>
          <Box sx={styles.header}>
            <NextLink href="/">
              <Box as="a" sx={styles.logo}>
                <Image
                  src="/images/logo.svg"
                  height={112}
                  width={72}
                  alt="Business Design Agency logo"
                />
              </Box>
            </NextLink>
            <Button variant="white" aria-label="Toggle Menu" onClick={onClose}>
              Close
            </Button>
          </Box>
          <ModalBody sx={styles.inner}>
            <ul>
              {menu.menu_links.map((menuLink: string, index: number) => (
                <MenuLink menuLink={menuLink} key={`menulink-${index}`} />
              ))}
            </ul>
            <Box as="address">
              {office ? office : null} <br />
              {street ? street : null} • {floor ? floor : null} <br />
              {postal ? postal : null} {city ? city : null} <br />
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    )
  }
  return null
}

const MenuLink = ({ menuLink }) => {
  const router = useRouter()

  return (
    <li>
      <NextLink
        passHref
        href={
          menuLink.link.slug === 'homepage' ? '/' : `/${menuLink.link.slug}`
        }
      >
        <ChakraLink
          className={
            router.pathname === `/${menuLink.link.slug}`
              ? 'is-active'
              : menuLink.link.slug === 'homepage' && router.pathname === '/'
              ? 'is-active'
              : null
          }
        >
          {RichText.asText(menuLink.label)}
        </ChakraLink>
      </NextLink>
    </li>
  )
}

export default Header
