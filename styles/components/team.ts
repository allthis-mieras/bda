const Team = {
  parts: ['container', 'item', 'image', 'content', 'copyright'],
  baseStyle: {
    container: {
      layerStyle: 'grid',
      rowGap: { base: '3rem', sm: '4rem', md: '6rem', '2xl': '8rem' }, // Same padding as layerStyle 'gridBlock'
    },
    item: {
      display: 'grid',
      alignItems: 'start',
      gridTemplateColumns: { lg: 'repeat(2, 1fr)' },
      gridColumnStart: { base: 2, sm: 3, '3xl': 5 },
      gridColumnEnd: { base: 25, sm: 24, '3xl': 22 },
      rowGap: { base: '2rem', lg: 0 },
      columnGap: { lg: 'calc(100vw / 25)' },
    },
    image: {
      position: 'relative',
      paddingBottom: '100%',
    },
    copyright: {
      fontSize: 'xs',
      position: 'absolute',
      bottom: 0,
      right: 0,
      padding: 2,
      textAlign: 'right',
      zIndex: 1,
      color: 'white',
      background:
        'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 100%)',
      width: '100%',
    },
  },
}

export default Team
