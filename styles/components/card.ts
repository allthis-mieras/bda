const Card = {
  parts: ['container', 'inner', 'content', 'heading', 'text', 'meta', 'link'],
  baseStyle: {
    container: {
      boxShadow: '0px 16px 32px rgba(0, 0, 0, 0.05)',
      borderRadius: 12,
      paddingBottom: { base: '110%', sm: '90%', '2xl': '65%' },
      overflow: 'hidden',
      position: 'relative',
    },
    inner: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'flex-end',
      position: 'relative',
      width: '100%',
      height: '100%',
      padding: {
        base: '24px 40px 24px 12px',
        sm: '32px 56px 32px 24px',
        md: '40px 64px 40px 32px',
      },
      color: 'neutral.0',
      background:
        'linear-gradient(180deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.6) 100%)',
      zIndex: 1,

      _after: {
        content: "''",
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        bg: 'rgba(0, 0, 0, 0.2)',
        opacity: 0,
        transition: 'opacity 0.2s ease-in-out',
        zIndex: -1,
      },

      _hover: {
        _after: {
          opacity: 1,
        },
      },
    },
    heading: {
      marginTop: 3,
      fontFamily: 'narrowBlack',
      fontSize: 'clamp(2rem, 1.5408rem + 1.9592vw, 3.5rem)',
      minHeight: '0vw', // safari clamp hack
      lineHeight: 'none',
      letterSpacing: 'wide',
    },
    text: {
      marginTop: 4,
      fontSize: 'clamp(1rem, 0.8469rem + 0.6531vw, 1.5rem)',
      minHeight: '0vw', // safari clamp hack
      lineHeight: 'shorter',
      letterSpacing: 'wide',
    },
    link: {
      marginTop: 6,
      fontSize: 'sm',
    },
    meta: {
      fontSize: 'sm',
      textTransform: 'capitalize',

      li: {
        listStyle: 'none',
      },

      time: {
        opacity: '0.5',
        textTransform: 'none',
      },

      'li:not(:first-of-type)::before': {
        display: 'inline-block',
        content: '"—"',
        mx: '2',
      },
    },
  },
  variants: {
    article: {
      heading: {
        fontFamily: 'tightRegular',
        fontSize: 'clamp(2.5rem, 1.5816rem + 3.9184vw, 4.5rem)',
        minHeight: '0vw', // safari clamp hack
        lineHeight: 'shortest',
        letterSpacing: 'wide',
      },
    },
    tall: {
      container: {
        // gridRow: 'span 2'
        paddingBottom: { base: '141%', lg: '136%', xl: '136%', '2xl': '136%' },
      },
    },
    articleTall: {
      container: {
        // gridRow: 'span 2',
        paddingBottom: { base: '141%', lg: '136%', xl: '136%', '2xl': '136%' },
      },
      heading: {
        fontFamily: 'tightRegular',
        fontSize: 'clamp(2.5rem, 1.1224rem + 5.8776vw, 7rem)',
        minHeight: '0vw', // safari clamp hack
        lineHeight: 'shortest',
        letterSpacing: 'wide',
      },
      text: {
        marginTop: { base: 4, lg: 8 },
      },
    },
    wide: {
      container: {
        paddingBottom: { base: '196%', lg: '61%', xl: '61%', '2xl': '61%' },
      },
      content: {
        padding: {
          base: '24px 40px 24px 12px',
          sm: '32px 56px 32px 24px',
          md: '40px 64px 40px 32px',
          xl: '80px 64px 80px 32px',
        },
      },
      heading: {
        fontFamily: 'wideDark',
        fontSize: 'clamp(2rem, 0.5459rem + 6.2041vw, 6.75rem)',
        minHeight: '0vw', // safari clamp hack
        lineHeight: 'none',
        letterSpacing: 'tight',
      },
      text: {
        marginTop: { base: 4, lg: 8 },
      },
    },
    articleWide: {
      container: {
        paddingBottom: { base: '196%', lg: '61%', xl: '61%', '2xl': '61%' },
      },
      content: {
        padding: {
          base: '24px 40px 24px 12px',
          sm: '32px 56px 32px 24px',
          md: '40px 64px 40px 32px',
          lg: '80px 64px 80px 32px',
          xl: '80px 64px 80px 32px',
        },
      },
      heading: {
        fontFamily: 'tightRegular',
        fontSize: 'clamp(2.5rem, 0.2041rem + 9.7959vw, 10rem)',
        minHeight: '0vw', // safari clamp hack
        lineHeight: 'shortest',
        letterSpacing: 'wide',
      },
      text: {
        marginTop: { base: 4, lg: 8 },
      },
    },
  },
}

export default Card
