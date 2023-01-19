const ButtonGroup = {
  baseStyle: {
    display: { base: 'block', md: 'inline-flex' },
    alignSelf: 'center',
    gap: { base: '16px', md: '32px' },
    marginTop: { base: 8, sm: 10 },
    justifyContent: 'start',

    '> *:not(:first-of-type)': {
      marginTop: { base: 6, md: 0 },
    },
  },
  variants: {
    center: {
      display: { base: 'flex' },
      justifyContent: 'center',
      width: '100%',
    },
    filter: {
      gap: '16px',
      marginTop: 0,
    },
  },
}

export default ButtonGroup
