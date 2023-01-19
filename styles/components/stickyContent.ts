const StickyContent = {
  parts: [
    'container',
    'content',
    'image',
    'stickyContainer',
    'stickyContent',
    'stickyText',
    'copyright',
  ],
  baseStyle: {
    container: {
      layerStyle: 'gridBlock',

      a: {
        color: 'currentColor',
      },
    },
    image: {
      display: { base: 'block', lg: 'none' },
      gridColumnStart: { base: 1, lg: 12 },
      gridColumnEnd: -1,
      position: 'relative',
      paddingBottom: { base: '100%', lg: '161.8%' },
    },
    content: {
      gridColumnStart: { base: 2, sm: 3, '3xl': 5 },
      gridColumnEnd: { base: 25, sm: 24, lg: 12, xl: 11 },
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      minHeight: { lg: '100vh' },
      paddingTop: 8,
      paddingBottom: { base: 16, lg: 0 },
    },
    stickyContainer: {
      display: { base: 'none', lg: 'block' },
      gridRowStart: { lg: 1 },
      gridColumnStart: { lg: 13 },
      gridColumnEnd: { lg: -1 },
      alignContent: { lg: 'center' },
      position: { lg: 'sticky' },
      top: { lg: 0 },
      height: { lg: '100vh' },
      transition: 'background-color 0.2s ease-in-out',
    },
    stickyContent: {
      display: { lg: 'flex' },
      justifyContent: { lg: 'center' },
      alignContent: { lg: 'center' },
      height: { lg: '100%' },
    },
    stickyText: {
      display: { base: 'block', lg: 'flex' },
      position: { base: 'absolute', lg: 'relative' },
      placeItems: { lg: 'center' },
      textAlign: 'center',
      width: { base: '100%', lg: 'auto' },
      fontSize: 'clamp(20rem, 10.7500rem + 46.2500vw, 57rem)',
      minHeight: '0vw', // safari clamp hack
      lineHeight: { base: 0.9, sm: 1.1, md: 1.5, lg: 0.85 },
      transform: { lg: 'translatey(-10%)' },
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

export default StickyContent
