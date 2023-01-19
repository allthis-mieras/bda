const Button = {
  baseStyle: {
    borderRadius: '9999px',
    fontWeight: 'normal',
    minHeight: '0vw', // safari clamp hack
    letterSpacing: 'wide',
    lineHeight: 'none',
    textTransform: 'lowercase',
    width: { base: '100%', md: 'auto' },

    span: {
      position: 'relative',
      top: '3px',
    },
  },
  sizes: {
    md: {
      fontSize:
        'clamp(var(--chakra-fontSizes-md), 1.0102rem + 0.4898vw, var(--chakra-fontSizes-lg))',
      h: { base: 12, md: 16 },
      minWidth: { base: 12, md: 16 },
      paddingBottom: 1, // correct font
      px: 8,
    },
  },
  variants: {
    primary: {
      bg: 'neutral.800',
      color: 'neutral.0',

      _hover: {
        bg: 'red.600',
      },

      _focus: {
        boxShadow: 'outlineComplex',
      },
    },
    gray: {
      bg: 'neutral.600',
      color: 'neutral.0',

      _hover: {
        bg: 'red.600',
      },

      _focus: {
        boxShadow: 'outlineComplex',
      },
    },
    white: {
      color: 'neutral.600',
      bg: 'neutral.50',

      _hover: {
        bg: 'neutral.600',
        color: 'neutral.50',
      },
    },
    outline: {
      color: 'neutral.700',
      borderColor: 'neutral.100',
      bg: 'white',

      _hover: {
        bg: 'white',
        borderColor: 'neutral.800',
      },

      _active: {
        bg: 'ocean.50',
        borderColor: 'ocean.50',
      },
    },
    link: {
      color: 'neutral.800',
      textDecoration: 'underline',
      justifyContent: 'start',

      _hover: {
        color: 'red.600',
      },

      _focus: {
        boxShadow: 'none',
        color: 'red.600',
      },
    },
  },
  defaultProps: {
    size: 'md',
    variant: 'primary',
  },
}

export default Button
