import { useMultiStyleConfig, Box } from '@chakra-ui/react'
import {
  ImageSection,
  StickyContent,
  TextImage,
  TextSection,
} from '../components'

const SliceZone = ({ sliceZone }) => {
  const styles = useMultiStyleConfig('SliceZone', {})

  return (
    <Box sx={styles}>
      {sliceZone.map((slice, index: number) => {
        const { heading, image, text, intro, caption, image_position, dark } =
          slice.primary
        switch (slice.slice_type) {
          case 'image':
            return (
              <ImageSection
                key={`slice-${index}`}
                image={image}
                caption={caption}
              />
            )

          case 'sticky_image': {
            let links = [
              {
                label: slice.primary.link_label,
                link: slice.primary.link,
              },
            ]
            return (
              <StickyContent
                key={`slice-${index}`}
                links={links}
                blocks={slice.items}
                dark={dark}
              />
            )
          }

          case 'image___text': {
            return (
              <TextImage
                key={`slice-${index}`}
                heading={heading}
                text={text}
                image={image}
                image_position={image_position}
                dark={dark}
              />
            )
          }

          case 'text':
            return (
              <TextSection
                key={`slice-${index}`}
                heading={heading}
                intro={intro}
                text={text}
              />
            )

          default:
            return null
        }
      })}
    </Box>
  )
}

export default SliceZone
