const Cta = {
  parts: ['container', 'inner', 'column'],
  baseStyle: {
    container: {
      layerStyle: 'gridBlock',
    },
    inner: {
      layerStyle: 'ocean',
      py: { base: 12, '2xl': 16 },
      px: 'calc(100vw / 25)',
      gridColumnStart: { base: 2, sm: 3, '3xl': 5 },
      gridColumnEnd: { base: 25, sm: 24, '3xl': 22 },
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      textAlign: 'center',

      h2: {
        textStyle: 'h3',
        marginBottom: 6,

        em: {
          textDecoration: 'underline',
          fontStyle: 'normal',
          textDecorationThickness: '4px',
        },

        strong: {
          fontFamily: 'narrowBlack',
        },

        'em strong': {
          fontFamily: 'wideDark',
        },
      },

      p: {
        _first: {
          marginTop: 0,
          textStyle: 'intro',
        },
      },
    },
    column: {
      textStyle: 'body',
      marginTop: { base: 8, lg: 0 },

      ul: {
        listStyle: 'none',

        li: {
          position: 'relative',
          paddingLeft: 4,

          '::before': {
            content: "'•'",
            position: 'absolute',
            left: 0,
          },

          a: {
            textDecoration: 'underline',

            _hover: {
              color: 'red.600',
            },
          },
        },
      },
    },
  },
  variants: {
    cover: {
      inner: {
        layerStyle: null,
        paddingBottom: { base: 0, sm: 0, md: 0, lg: 0, '2xl': 0 },
      },
    },
    left: {
      inner: {
        layerStyle: null,
        gridColumnStart: { '3xl': 5 },
        gridColumnEnd: { '3xl': 22 },
        paddingBottom: { base: 0, sm: 0, md: 0, lg: 0, '2xl': 0 },
        px: 0,
        textAlign: 'left',
      },
    },
  },
}

export default Cta
