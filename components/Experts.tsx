import {
  useStyleConfig,
  useMultiStyleConfig,
  Avatar,
  Grid,
  GridItem,
  Heading,
} from '@chakra-ui/react'
import { RichTextBlock } from 'prismic-reactjs'
import { renderArray } from '../utils/utils'

type Expert = {
  name: RichTextBlock[]
  expertise: string
  avatar: {
    url: string
  }
  links: {
    label: string
    link: {
      url: string
    }
  }[]
}

type Props = {
  experts: {
    data: Expert
  }[]
}

export default function Experts({ experts }: Props) {
  const styles = useMultiStyleConfig('Experts', {})
  const gridStyles = useStyleConfig('Grid')

  if (experts) {
    return (
      <Grid sx={styles.container}>
        <GridItem colStart={{ base: 2, sm: 3 }} colEnd={{ base: 25, sm: 24 }}>
          <Heading sx={styles.heading} as="h3">
            Network
          </Heading>
        </GridItem>

        <GridItem colStart={{ base: 1 }} colEnd={{ base: -1 }}>
          <Grid sx={gridStyles}>
            <GridItem sx={styles.items}>
              {experts.map((expert) => {
                const { name, avatar, expertise, links } = expert.data

                return name[0] ? (
                  <GridItem sx={styles.item} key={name[0].text}>
                    <Avatar
                      bg="neutral.50"
                      marginTop={2}
                      size="lg"
                      getInitials={() => null}
                      name={name[0].text}
                      src={avatar.url}
                    />
                    <div>
                      {expertise ? <span>{expertise}</span> : null}
                      {name[0].text ? (
                        <Heading as="h4" sx={styles.cardHeading}>
                          {name[0].text}
                        </Heading>
                      ) : null}

                      {renderArray(links) && links[0].label ? (
                        <ul>
                          {links.map((link) => (
                            <li key={`${link.label}-${name[0].text}`}>
                              <a
                                href={link.link.url}
                                target="_blank"
                                rel="noopener noreffer noreferrer"
                              >
                                {link.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                  </GridItem>
                ) : null
              })}
            </GridItem>
          </Grid>
        </GridItem>
      </Grid>
    )
  }

  // If no experts return null
  return null
}
