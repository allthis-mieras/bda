const ImageSection = {
  parts: ['container', 'inner', 'image', 'caption', 'copyright'],
  baseStyle: {
    container: {
      layerStyle: 'gridBlock',
    },
    inner: {
      gridColumnStart: { base: 1, md: 2, '3xl': 4 },
      gridColumnEnd: { base: -1, md: 25, '3xl': 24 },
    },
    image: {
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      paddingBottom: '90%',
    },
    caption: {
      marginTop: 3,
      px: { base: 4, md: 0 },
      fontSize: 'xs',
      color: 'neutral.400',
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

export default ImageSection
