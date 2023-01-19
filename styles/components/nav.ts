const Nav = {
  parts: ['container', 'header', 'inner', 'logo'],
  baseStyle: {
    container: {
      display: 'grid',
      gridTemplateColumns: 'repeat(25, 1fr)',
      margin: 0,
      color: 'neutral.0',
      backgroundColor: 'black',
      borderRadius: 0,

      _before: {
        content: "''",
        position: 'absolute',
        top: { base: 0 },
        right: { base: 0 },
        bottom: { base: '40%', md: 0 },
        width: { base: '100%', md: '75%', xl: '50%' },
        bg: 'black',
        backgroundImage: 'url(../images/nav.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        zIndex: -1,
      },

      _after: {
        content: "''",
        position: 'absolute',
        top: 0,
        right: 0,
        width: { base: '100%', md: '75%', xl: '50%' },
        height: { base: '60%', md: '100%' },
        backgroundImage: 'url(../images/menuMask.svg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        zIndex: -1,
      },
    },

    header: {
      layerStyle: 'grid',
      position: 'absolute',
      top: 0,
      alignItems: 'center',
      zIndex: 3,
      width: '100%',

      button: {
        gridColumnStart: { base: 13 },
        gridColumnEnd: { base: 25 },
        marginLeft: 'auto',
        width: 'auto',
      },
    },

    logo: {
      gridColumnStart: { base: 2 },
      gridColumnEnd: { base: 12 },
      width: { base: '48px', lg: '72px' },
      height: { base: '80px', lg: '112px' },
      filter: 'invert(1)',
    },

    inner: {
      gridColumnStart: { base: 2, sm: 3 },
      gridColumnEnd: { base: 25, sm: 24 },
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      px: 0,
      pb: { base: 8, sm: 16 },

      address: {
        marginTop: { base: 8, md: 16, '2xl': 32 },
        textStyle: 'body',
        fontStyle: 'normal',
      },

      ul: {
        display: { md: 'flex' },
        flexWrap: { md: 'wrap' },
        padding: 0,
        listStyle: 'none',

        li: {
          marginRight: { md: 8 },

          ':nth-of-type(4n)': {
            width: { md: '100%' },
          },

          a: {
            color: 'neutral.50',
            textDecoration: 'none',
            fontSize: 'clamp(3.5rem, 2.1224rem + 5.8776vw, 8rem)',
            lineHeight: 'none',
            fontFamily: 'tightDark',
            textTransform: 'uppercase',

            _hover: {
              textDecoration: 'underline',
              color: 'neutral.0',
            },

            _focus: {
              textDecoration: 'underline',
              color: 'neutral.0',
            },

            '&.is-active': {
              pointerEvents: 'none',
              cursor: 'default',
              textDecoration: 'none',
              color: 'neutral.600',
            },
          },
        },
      },
    },
  },
}

export default Nav
