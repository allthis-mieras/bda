const Experts = {
  parts: ['container', 'heading', 'items', 'item', 'cardHeading'],
  baseStyle: {
    container: {
      layerStyle: 'grid',
      paddingTop: { base: 12, sm: 16, md: 24, '2xl': 32 },
    },
    heading: {
      textStyle: 'h4',
      marginBottom: 16,

      textAlign: 'center',
    },
    items: {
      display: 'grid',
      gridTemplateColumns: {
        base: '1fr',
        md: 'repeat(2, 1fr)',
        xl: 'repeat(3, 1fr)',
      },
      gridColumnStart: { base: 2, sm: 3, '3xl': 5 },
      gridColumnEnd: { base: 25, sm: 24, '3xl': 22 },
      borderRadius: '32px',
      overflow: 'hidden',
      boxShadow: 'inset 0 0 0 1px #efefef',
    },
    item: {
      display: 'grid',
      gridTemplateColumns: 'auto 1fr',
      gap: '16px',
      paddingTop: 8,
      paddingRight: 6,
      paddingBottom: 8,
      paddingLeft: 6,
      margin: '0 -1px -1px 0',
      border: '1px solid',
      borderColor: 'neutral.50',

      h4: {
        fontSize: { base: 'lg', sm: '2xl', lg: '3xl' },
      },

      span: {
        fontSize: 'sm',
        color: 'neutral.400',
      },

      ul: {
        display: 'flex',
        gap: 8,
        marginTop: 4,
        listStyle: 'none',
        fontSize: '12px',

        a: {
          textDecoration: 'underline',

          _hover: {
            color: 'red.600',
          },
        },
      },
    },
    cardHeading: {
      fontFamily: 'tightDark',
      fontSize: '3xl',
      letterSpacing: 'wide',
      lineHeight: 'shortest',
      textTransform: 'uppercase',
    },
  },
}

export default Experts
