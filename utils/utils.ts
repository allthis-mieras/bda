import { RichTextBlock } from 'prismic-reactjs'

export const renderRichText = (input: RichTextBlock[]): boolean => {
  if (input && input.length > 0 && input[0].text !== '') {
    return true
  } else {
    return false
  }
}

export const renderArray = (input: {}[]): boolean => {
  if (input && input.length > 0) {
    return true
  } else {
    return false
  }
}
