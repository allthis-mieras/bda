import { useStyleConfig, Box } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { Button } from '../components'

type Props = {
  links: {
    label: string
    link?: {
      link_type: string
    }
    variant?: string
    arrow?: boolean
  }[]
  buttonVariants?: {
    arrow?: boolean
    variant?: string
  }[]
  variant?: 'center' | 'filter'
  params?: string
}

export default function ButtonGroup({
  links,
  buttonVariants,
  params,
  variant,
}: Props) {
  const styles = useStyleConfig('ButtonGroup', { variant })

  let buttons = links

  if (buttonVariants) {
    buttons = buttons.map((button, index) => {
      button.variant = buttonVariants[index].variant
      button.arrow = buttonVariants[index].arrow
      return button
    })
  }

  return (
    <Box sx={styles} variant={variant}>
      {buttons.map((button, index) => {
        const { arrow, label, link, variant } = button
        return (
          <Button
            key={`${label}-${index}`}
            link={link}
            params={params}
            label={label}
            variant={variant || 'primary'}
            rightIcon={arrow ? <ChevronRightIcon /> : null}
          />
        )
      })}
    </Box>
  )
}
