const Grid = {
  baseStyle: {
    position: 'relative',
    gridTemplateColumns: 'repeat(25, 1fr)',
  },
  variants: {
    related: {
      rowGap: { base: '32px', md: '48px', xl: '64px' },

      '& > *': {
        gridColumn: {
          base: '2 / 25',
          sm: '3 / 24',
        },
      },

      '& > :first-of-type': {
        alignSelf: { lg: 'center', xl: 'center' },
        gridColumn: {
          lg: '2 / 13',
          xl: '4 / 13',
        },
      },

      '& > :last-of-type': {
        gridColumn: {
          lg: '14 / 25',
          xl: '14 / 23',
        },
      },
    },
    cards: {
      gridAutoFlow: { base: null, lg: 'column' },
      rowGap: { base: '32px', md: '48px', xl: '64px' },
      '& > *': {
        gridColumn: {
          base: '2 / 25',
          sm: '3 / 24',
          lg: 'span 11',
          '3xl': 'span 9',
        },
      },
      '& > :nth-of-type(8n+2)': {
        gridColumn: {
          lg: '14 / 25',
          '3xl': '14 / 23',
        },
      },
      '& > :nth-of-type(8n+3)': {
        gridRow: {
          lg: 'span 2',
        },
        gridColumn: {
          lg: '2 / 13',
          '3xl': '4 / 13',
        },
      },
      '& > :nth-of-type(8n+5)': {
        gridColumn: {
          lg: '2 / 13',
          '3xl': '4 / 13',
        },
      },
      '& > :nth-of-type(8n+6)': {
        gridColumn: {
          lg: '2 / 13',
          '3xl': '4 / 13',
        },
      },
      '& > :nth-of-type(8n+1)': {
        gridColumn: {
          lg: '14 / 25',
          '3xl': '14 / 23',
        },
      },
      '& > :nth-of-type(8n+7)': {
        gridRow: {
          lg: 'span 2',
        },
        gridColumn: {
          lg: '14 / 25',
          '3xl': '14 / 23',
        },
      },
      '& > :nth-of-type(4n)': {
        gridColumn: {
          lg: '2 / 25',
          '3xl': '4 / 23',
        },
      },
    },
  },
}

export default Grid
