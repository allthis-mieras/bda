const Logos = {
  parts: ['container', 'heading', 'items', 'item', 'logo'],
  baseStyle: {
    container: {
      layerStyle: 'gridBlock',
    },
    heading: {
      textStyle: 'h4',
      marginBottom: 16,
      textAlign: 'center',
    },
    items: {
      display: 'grid',
      gridColumnStart: { base: 2, sm: 3, '3xl': 5 },
      gridColumnEnd: { base: 25, sm: 24, '3xl': 22 },
      gridTemplateColumns: { base: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
    },
    item: {
      height: {
        base: '120px',
        '2xl': '160px',
      },
      margin: '0 -1px -1px 0',
      border: '1px solid',
      borderColor: 'neutral.50',
      paddingTop: 8,
      paddingRight: 10,
      paddingBottom: 8,
      paddingLeft: 10,
    },
    logo: {
      position: 'relative',
      height: '100%',
      maxWidth: '200px',
      margin: '0 auto',
    },
  },
}

export default Logos
