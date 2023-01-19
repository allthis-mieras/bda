import Image from 'next/image'
import { useMultiStyleConfig, Grid, GridItem, Text } from '@chakra-ui/react'

import { TextBlock } from '../components'

type Props = {
  members: { data: any }[]
}

export default function Team({ members }: Props) {
  const styles = useMultiStyleConfig('Team', {})

  return (
    <Grid sx={styles.container}>
      {members.map((member) => {
        const { name, text, expand, job_title, links, image } = member.data

        return (
          <GridItem key={name} sx={styles.item}>
            <GridItem sx={styles.image}>
              <>
                {image && image.url ? (
                  <Image
                    src={image.url}
                    alt={image.alt}
                    layout="fill"
                    objectFit="cover"
                  />
                ) : null}
                {image.copyright ? (
                  <Text as="small" sx={styles.copyright}>
                    Photo by {image.copyright}
                  </Text>
                ) : null}
              </>
            </GridItem>
            <GridItem sx={styles.content}>
              <TextBlock
                heading={name}
                text={text}
                expandContent={expand}
                subtitle={job_title}
                links={links}
                expandable
              />
            </GridItem>
          </GridItem>
        )
      })}
    </Grid>
  )
}
