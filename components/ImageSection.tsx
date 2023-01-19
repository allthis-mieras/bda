import Image from 'next/image'

import {
  useMultiStyleConfig,
  Box,
  Grid,
  GridItem,
  Text,
} from '@chakra-ui/react'

type Props = {
  image: {
    alt: string
    url: string
    copyright: string
  }
  caption?: string
}

const ImageSection = ({ image, caption }: Props) => {
  const styles = useMultiStyleConfig('ImageSection', {})

  if (image && image.url) {
    return (
      <Grid sx={styles.container}>
        <GridItem sx={styles.inner}>
          <Box as="figure" sx={styles.image}>
            <Image
              src={image.url}
              alt={image.alt}
              layout="fill"
              objectFit="cover"
            />
            {image.copyright ? (
              <Text as="small" sx={styles.copyright}>
                Photo by {image.copyright}
              </Text>
            ) : null}
          </Box>
          <Text as="figcaption" sx={styles.caption}>
            {caption}
          </Text>
        </GridItem>
      </Grid>
    )
  }
  return null
}

export default ImageSection
