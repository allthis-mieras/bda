import { useStyleConfig, Box } from '@chakra-ui/react'

import { LinkList } from '../components'
import { renderArray } from '../utils/utils'

type Props = {
  city: string
  companyName: string
  floor: string
  office: string
  postal: string
  socials: {
    link: {
      url: string
      link_type: string
    }
    label: string
  }[]
  street: string
}

export default function Address({
  city,
  companyName,
  floor,
  office,
  postal,
  socials,
  street,
}: Props) {
  const styles = useStyleConfig('Address')

  return (
    <Box as="address" sx={styles}>
      <h2>{companyName}</h2> <br />
      {office} • {floor} <br />
      {street} • {postal} {city} <br />
      {renderArray(socials) ? <LinkList links={socials} /> : null}
    </Box>
  )
}
