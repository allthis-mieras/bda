import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useMultiStyleConfig, Box, Button, Text } from '@chakra-ui/react'

import { Cards } from '../components'

export default function Filter({ projects, themes, query }) {
  const styles = useMultiStyleConfig('Filter', {})

  const initialValue = 'All'

  const [displayCategory, setDisplayCategory] = useState(initialValue)

  const [data, setData] = useState(projects)

  // Sort projects by theme
  const projectsGroupedByTheme = projects.reduce(
    (accumulator, currentValue) => {
      // Get theme name and convert to lowercase to avoid conflicts

      const themes = currentValue.data.themes.map((theme) => {
        if (theme.theme.uid) {
          return theme.theme.uid.toLowerCase()
        }
      })

      // Add all categorie
      if (!accumulator['All']) {
        accumulator['All'] = []
      }

      themes.map((theme) => {
        // If theme returns undefined form CMS directly return
        // When accidentaly not filled in in Prismic
        if (theme === undefined) {
          return
        }
        // If there is no theme yet create new array
        if (!accumulator[theme]) {
          accumulator[theme] = []
        }

        // Push theme into corresponding array
        accumulator[theme].push(currentValue)
      })

      return accumulator
    },
    {}
  )

  const handleCategory = (category: string) => {
    setDisplayCategory(category)

    router.push(
      '/projects',
      { query: { category: category } },
      { shallow: true }
    )

    if (category === 'All') {
      setData(projects)
    } else {
      setData(projectsGroupedByTheme[category])
    }
  }
  const router = useRouter()

  useEffect(() => {
    if (!query.category) {
      return null
    } else {
      router.push(
        '/projects',
        { query: { category: query.category } },
        { shallow: true }
      )
    }
    handleCategory(query.category)
  }, [router.query.category])

  return (
    <>
      <Box sx={styles.container}>
        <Text as="span" sx={styles.text}>
          Filter
        </Text>
        <Box sx={styles.scrollContainer}>
          {Object.keys(projectsGroupedByTheme).map(
            (category, index: number) => {
              return (
                <Button
                  key={index}
                  onClick={() => handleCategory(category)}
                  isActive={displayCategory === category}
                  variant="outline"
                >
                  {category.replace('-', ' ')}
                </Button>
              )
            }
          )}
        </Box>
      </Box>
      <Cards cards={data} variant="cards" />
    </>
  )
}
