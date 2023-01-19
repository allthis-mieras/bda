import { Box, Link } from '@chakra-ui/react'

export default function ExitPreview() {
  return (
    <Box
      position="fixed"
      bottom={0}
      right={0}
      width="100%"
      layerStyle="ocean"
      zIndex={100}
      textAlign="center"
      p={2}
    >
      <p>
        You are in preview mode:{' '}
        <Link href="/api/exit-preview">Exit Preview</Link>
      </p>
    </Box>
  )
}
