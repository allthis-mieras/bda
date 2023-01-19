const TextImage = {
  parts: ['container', 'content', 'image', 'copyright'],
  baseStyle: {
    container: {
      layerStyle: 'gridBlock',
    },
    content: {
      gridRowStart: { base: 2, lg: 1 },
      gridColumnStart: { base: 2, sm: 3, '3xl': 5 },
      gridColumnEnd: { base: 25, sm: 24, lg: 15, xl: 12 },
      alignSelf: { lg: 'center' },
      marginTop: { base: 8, lg: 0 },

      '> p': {
        marginTop: 8,

        _first: {
          textStyle: 'intro',
        },
      },

      a: {
        color: 'currentColor',
      },
    },

    image: {
      position: 'relative',
      paddingBottom: { base: '100%', lg: '161.8%' },
      alignSelf: { lg: 'center' },
      gridRowStart: 1,
      gridColumnStart: { base: 1, md: 3, lg: 16, xl: 14, '3xl': 14 },
      gridColumnEnd: { base: -1, md: 24, lg: -1, xl: 24, '3xl': 22 },
    },
    copyright: {
      fontSize: 'xs',
      position: 'absolute',
      bottom: 0,
      right: 0,
      padding: 2,
      textAlign: 'right',
      zIndex: 1,
      color: 'white',
      background:
        'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 100%)',
      width: '100%',
    },
  },
  variants: {
    left: {
      content: {
        gridColumnStart: { lg: 12, xl: 15, '3xl': 15 },
        gridColumnEnd: { lg: 24, xl: 24, '3xl': 22 },
      },
      image: {
        gridColumnStart: { lg: 1, xl: 3, '3xl': 5 },
        gridColumnEnd: { lg: 11, xl: 13, '3xl': 13 },
      },
    },
  },
}

export default TextImage
