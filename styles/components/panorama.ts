const Panorama = {
  parts: [
    'container',
    'inner',
    'content',
    'heading',
    'subtitle',
    'link',
    'logo',
  ],
  baseStyle: {
    container: {
      position: 'relative',

      _before: {
        content: "''",
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: 1,
        background:
          'linear-gradient(180deg, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0.87) 100%)',
      },
    },
    inner: {
      layerStyle: 'grid',
      paddingBottom: { base: '156%', md: '71.4%' },
    },
    content: {
      gridColumnStart: { base: 2, sm: 3, '3xl': 5 },
      gridColumnEnd: { base: 25, sm: 24, '3xl': 22 },
      position: 'absolute',
      bottom: 0,
      paddingBottom: { base: 12, md: 32 },
      color: 'neutral.0',
      zIndex: 2,
    },
    heading: {
      fontFamily: 'wideDark',
      fontSize: 'clamp(2.25rem, 0.1837rem + 8.8163vw, 9rem)',
      minHeight: '0vw', // safari clamp hack
      lineHeight: 'none',
      letterSpacing: 'tight',
    },
    subtitle: {
      fontSize: 'clamp(2rem, 1.2347rem + 3.2653vw, 4.5rem)',
      minHeight: '0vw', // safari clamp hack
      lineHeight: 'short',
      letterSpacing: 'tight',
      marginTop: 2,
    },
    link: {
      fontSize: 'clamp(2rem, 1.2347rem + 3.2653vw, 4.5rem)',
      minHeight: '0vw', // safari clamp hack
      lineHeight: 'short',
      letterSpacing: 'tight',
      color: 'neutral.0',
      textDecoration: 'none',
      textTransform: 'lowerCase',

      _hover: {
        textDecoration: 'none',
      },
    },
    logo: {
      width: { base: '112px', md: '192px' },
      height: { base: '112px', md: '192px' },
      position: 'absolute',
      bottom: 0,
      right: 0,
      transform: 'translateY(50%)',
      borderRadius: '50%',
      overflow: 'hidden',
      bg: 'white',
      display: 'flex',
      justifyContent: 'center',

      '> *': {
        maxWidth: { base: '80px', md: '140px' },
        width: '100%',
      },
    },
  },
  variants: {
    nextProject: {
      container: {
        position: 'relative',
        overflow: 'hidden',
        marginBottom: { base: 12, sm: 16, md: 24 },

        _after: {
          content: "''",
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          bg: 'rgba(0, 0, 0, 0.5)',
          opacity: 0,
          transition: 'opacity 0.2s ease-in-out',
        },

        h2: {
          transform: 'translateY(0)',
          transition: 'transform 0.2s ease-in-out',
          zIndex: -1,
        },

        _hover: {
          _after: {
            opacity: 1,
          },

          h2: {
            transform: { lg: 'translateY(-8px)' },
          },
        },
      },
      inner: {
        height: { base: '500px', md: '600px' },
        paddingBottom: { base: 0, md: 0 },
        position: 'relative',
      },
      content: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        paddingBottom: { base: 16, md: 8, lg: 0 },
        height: { base: '500px', md: '600px' },
      },
      heading: {
        marginTop: { lg: 6 },
        marginBottom: { lg: -32, xl: '-150px', '2xl': '-50px' },
      },
      subtitle: {
        display: 'none',
      },
    },
  },
}

export default Panorama
