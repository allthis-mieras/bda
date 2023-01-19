// Info: Clamp calculations https://css-tricks.com/linearly-scale-font-size-with-css-clamp-based-on-the-viewport/
const textStyles = {
  body: {
    fontSize:
      'clamp(var(--chakra-fontSizes-md), 1.0102rem + 0.4898vw, var(--chakra-fontSizes-lg))',
    minHeight: '0vw', // safari clamp hack
    lineHeight: 'base',
    letterSpacing: 'normal',
  },
  intro: {
    fontSize:
      'clamp(var(--chakra-fontSizes-lg), 1.3469rem + 0.6531vw, var(--chakra-fontSizes-xl))',
  },
  h2: {
    fontSize:
      'clamp(var(--chakra-fontSizes-3xl), 2.5408rem + 1.9592vw, var(--chakra-fontSizes-6xl))',
    minHeight: '0vw', // safari clamp hack
    lineHeight: 'short',
    letterSpacing: 'tight',
  },
  h3: {
    fontSize:
      'clamp(var(--chakra-fontSizes-2xl), 2.0408rem + 1.9592vw, var(--chakra-fontSizes-5xl))',
    minHeight: '0vw', // safari clamp hack
    lineHeight: 'shorter',
    letterSpacing: 'tight',
  },
  h4: {
    fontSize:
      'clamp(var(--chakra-fontSizes-2xl), 2.3469rem + 0.6531vw, var(--chakra-fontSizes-3xl))',
    minHeight: '0vw', // safari clamp hack
    lineHeight: 'shorter',
    letterSpacing: 'tight',
  },
}

export default textStyles
