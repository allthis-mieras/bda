const Intro = {
  parts: ['container', 'inner', 'heading', 'small'],
  baseStyle: {
    container: {
      layerStyle: 'gridBlock',
      bg: 'ocean.50',
    },
    inner: {
      gridColumnStart: { base: 2, sm: 3, '3xl': 5 },
      gridColumnEnd: { base: 25, sm: 24, '3xl': 22 },

      h3: {
        marginBottom: 8,
      },
    },
    intro: {
      textStyle: 'intro',
    },
    small: {
      p: {
        fontSize: 'sm',
      },
    },
  },
}

export default Intro
