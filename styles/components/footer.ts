const Footer = {
  parts: ['container', 'inner', 'logo', 'nav', 'meta'],
  baseStyle: {
    container: {
      layerStyle: 'grid',
    },
    inner: {
      gridColumnStart: 2,
      gridColumnEnd: 25,
      paddingTop: 16,
      paddingBottom: { base: 8, md: 16 },
      px: { base: 8, md: 16 },
      borderTopRadius: '32px',
      bg: 'neutral.800',
    },
    nav: {
      color: 'neutral.0',
      fontFamily: 'wideRegular',
      fontSize:
        'clamp(var(--chakra-fontSizes-md), 0.8571rem + 1.1429vw, var(--chakra-fontSizes-xl))',
      minHeight: '0vw', // safari clamp hack
      lineHeight: 'shorter',
      letterSpacing: 'wide',
      textTransform: 'lowercase',

      ul: {
        listStyle: 'none',

        'li:not(:last-child)': {
          marginBottom: 2,
        },
      },

      a: {
        textDecoration: 'none',

        '&.is-active': {
          pointerEvents: 'none',
          cursor: 'default',
          textDecoration: 'none',
          color: 'neutral.600',
        },

        _hover: {
          color: 'red.500',
        },
      },
    },
    meta: {
      display: { sm: 'flex' },
      justifyContent: 'space-between',
      marginTop: 8,
      color: 'neutral.200',
      fontSize: 'xs',
      fontStyle: 'normal',

      ul: {
        display: { lg: 'flex' },
        marginTop: { base: 4, sm: 0 },
        listStyle: 'none',

        'li:not(:first-of-type)::before': {
          lg: {
            mx: 1,
            content: "'•'",
          },
        },
      },
    },
  },
}

export default Footer
