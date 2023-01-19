const Newsletter = {
  parts: ['container', 'inner'],
  baseStyle: {
    container: {
      layerStyle: 'gridBlock',
    },
    inner: {
      layerStyle: 'ocean',
      gridColumnStart: { base: 1, md: 3, '3xl': 5 },
      gridColumnEnd: { base: -1, md: 24, '3xl': 22 },
      paddingTop: { base: 8, lg: 16 },
      paddingBottom: { base: 12, lg: 20 },
      px: { base: 8, md: 16 },
      textAlign: 'center',

      p: {
        maxWidth: '1088px',
        marginTop: 6,
        mx: 'auto',
      },
    },
  },
}

export default Newsletter
