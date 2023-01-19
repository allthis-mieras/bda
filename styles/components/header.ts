const Header = {
  parts: ['container', 'logo'],
  baseStyle: {
    container: {
      layerStyle: 'grid',
      position: 'fixed',
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
      width: { base: '48px', md: '72px' },
      height: { base: '80px', md: '112px' },
    },
  },
}

export default Header
