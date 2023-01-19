const layerStyles = {
  dark: {
    bg: 'neutral.800',
    color: 'neutral.50',
  },
  ocean: {
    bg: 'ocean.50',
    color: 'neutral.800',
  },
  pink: {
    bg: 'pink.50',
    color: 'neutral.800',
  },
  grid: {
    position: 'relative',
    display: 'grid',
    gridTemplateColumns: 'repeat(25, 1fr)',
  },
  gridBlock: {
    position: 'relative',
    display: 'grid',
    gridTemplateColumns: 'repeat(25, 1fr)',
    py: { base: 12, sm: 16, md: 24, '2xl': 32 },
  },
}

export default layerStyles
