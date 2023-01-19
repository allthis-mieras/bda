const TextBlock = {
  parts: ['container', 'links'],
  baseStyle: {
    container: {
      'h2, h3': {
        '+ p': {
          _first: {
            textStyle: 'intro',
          },
        },
      },

      // Set default spacing inside
      '> * + *': {
        marginTop: 8,
      },

      // Set spacing after another Textblock comes directly after itself
      '& + &': {
        marginTop: { base: 8, md: 16 },
      },

      '.chakra-collapse': {
        paddingTop: 8,
        marginTop: -8,

        '> *': {
          marginTop: 8,
        },
      },

      ul: {
        listStyle: 'none',
        textStyle: 'body',

        li: {
          position: 'relative',
          paddingLeft: 4,

          _before: {
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

    subtitle: {
      marginTop: 2,
      color: 'neutral.400',
      textStyle: 'intro',
      fontFamily: 'wideRegular',
      lineHeight: 'shorter',
      letterSpacing: 'wide',
    },
  },
}

export default TextBlock
