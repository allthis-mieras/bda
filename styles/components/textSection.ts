const TextSection = {
  parts: ['container', 'heading', 'intro'],
  baseStyle: {
    container: {
      layerStyle: 'gridBlock',
    },
    heading: {
      gridColumnStart: { base: 2, sm: 3, '3xl': 5 },
      gridColumnEnd: { base: 25, sm: 24, '3xl': 22 },
      marginBottom: { base: 8, md: 16 },
    },
    intro: {
      gridColumnStart: { base: 2, sm: 3, '3xl': 5 },
      gridColumnEnd: { base: 25, sm: 24, lg: 13 },

      'p:first-of-type': {
        fontSize:
          'clamp(var(--chakra-fontSizes-lg), 1.3469rem + 0.6531vw, var(--chakra-fontSizes-xl))',
        minHeight: '0vw', // safari clamp hack
      },
    },
    text: {
      gridColumnStart: { base: 2, sm: 3, lg: 14 },
      gridColumnEnd: { base: 25, sm: 24, '3xl': 22 },
    },
  },
}

export default TextSection
