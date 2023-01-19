const Approach = {
  parts: ['container', 'card', 'cardGrid'],
  baseStyle: {
    container: {
      layerStyle: 'gridBlock',
      rowGap: { base: '32px', md: '64px' },
      bg: 'neutral.800',
      color: 'neutral.50',
    },
    card: {
      display: 'flex',
      flexDirection: 'column',
      borderTopRightRadius: '32px',
      borderTopLeftRadius: '32px',

      p: {
        marginTop: 4,
        fontSize: 'sm',
      },
    },
    cardGrid: {
      gridTemplateColumns: { '2xl': 'repeat(2, 1fr)' },
      gap: { base: '48px', '2xl': '64px' },
      paddingTop: { base: 8, md: 12 },
      paddingBottom: { base: 6, md: 12 },
      px: { base: 6, md: 12 },
    },
    cardHeading: {
      fontFamily: 'tightDark',
      fontSize: '3xl',
      letterSpacing: 'wide',
      lineHeight: 'shorter',
      textTransform: 'uppercase',
    },
    cardFooter: {
      marginTop: 'auto',
      p: { base: 6, md: 12 },

      h4: {
        fontSize: 'lg',
      },
    },
  },
  variants: {
    outline: {
      card: {
        border: '1px solid',
        borderColor: 'neutral.600',

        p: {
          color: 'neutral.300',
        },
      },
      cardFooter: {
        borderTop: '1px solid',
        borderColor: 'neutral.600',
      },
    },
    filled: {
      card: {
        layerStyle: 'pink',

        _last: {
          layerStyle: 'ocean',
        },
      },
      cardFooter: {
        bg: 'white',
      },
    },
  },
  defaultProps: {
    variant: 'filled',
  },
}

export default Approach
