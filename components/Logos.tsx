import Image from 'next/image'
import {
  useStyleConfig,
  useMultiStyleConfig,
  Box,
  Grid,
  GridItem,
  Heading,
} from '@chakra-ui/react'

type Props = {
  clients: {
    client_logo: {
      url: string
      dimensions: {
        width: string
        height: string
      }
    }
    client_name: string
  }[]
}

export default function Logos({ clients }: Props) {
  const styles = useMultiStyleConfig('Logos', {})
  const gridStyles = useStyleConfig('Grid')

  // Check if there are clients and if there is a logo
  if (clients.length > 0 && clients[0].client_logo.url) {
    return (
      <Grid sx={styles.container}>
        <GridItem colStart={{ base: 2, sm: 3 }} colEnd={{ base: 25, sm: 24 }}>
          <Heading sx={styles.heading} as="h3">
            Clients
          </Heading>
        </GridItem>

        <GridItem colStart={{ base: 1 }} colEnd={{ base: -1 }}>
          <Grid sx={gridStyles}>
            <GridItem sx={styles.items}>
              {clients.map((client) => {
                const { client_logo, client_name } = client
                return (
                  <GridItem key={client_name} sx={styles.item}>
                    <Box sx={styles.logo}>
                      <Image
                        src={client_logo.url}
                        alt={client_name}
                        layout="fill"
                        objectFit="contain"
                      />
                    </Box>
                  </GridItem>
                )
              })}
            </GridItem>
          </Grid>
        </GridItem>
      </Grid>
    )
  }

  // If no clients or logo specified return null
  return null
}
