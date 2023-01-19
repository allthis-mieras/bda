const Filter = {
  parts: ['container', 'text', 'scrollContainer'],
  baseStyle: {
    container: {
      display: { base: 'grid', lg: 'flex' },
      paddingTop: { base: 12, sm: 16, md: 24, '2xl': 32 },
      gridTemplateColumns: 'repeat(25, 1fr)',
      alignItems: { lg: 'center' },
      justifyContent: { lg: 'center' },
    },
    text: {
      gridColumnStart: { base: 2, sm: 3 },
      gridColumnEnd: { base: 25, sm: 24 },
      color: 'neutral.400',
      fontSize: '24px',
    },
    scrollContainer: {
      gridColumnStart: { base: 2, sm: 3 },
      gridColumnEnd: { base: 25, sm: 24 },
      py: { base: 4, lg: 1 },
      px: { base: 4, lg: 4 },
      display: { base: 'flex', lg: 'inline-flex' },
      flexWrap: 'nowrap',
      width: { base: '100%', lg: 'auto' },
      overflowX: { base: 'scroll', lg: 'auto' },
      scrollSnapType: 'x mandatory',

      '> *': {
        minWidth: 'auto !important', // Shame: button fix for dynamic labels
        mx: 2,
        scrollSnapAlign: 'start',
      },
    },
  },
}

export default Filter
