// -- Prismic API endpoint
// Determines which repository to query and fetch data from
// Configure your site's access point here
export const apiEndpoint = process.env.PRISMIC_API_ENDPOINT

// -- Access Token if the repository is not public
// Generate a token in your dashboard and configure it here if your repository is private
export const accessToken = process.env.PRISMIC_API_ACCESS_TOKEN

// -- Link resolution rules
// Manages the url links to internal Prismic documents
export const linkResolver = (doc) => {
  if (doc.type === '404') {
    return '/404'
  }
  if (doc.type === 'project') {
    return `/projects/${doc.uid}`
  }
  if (doc.type === 'about') {
    return '/about';
  }
  if (doc.type === 'approach') {
    return '/approach';
  }
  if (doc.type === 'themes') {
    return '/themes';
  }
  if (doc.type === 'projects') {
    return '/projects';
  }
  if (doc.type === 'contact') {
    return '/contact';
  }
  return '/'
}

// Additional helper function for Next/Link component
export const hrefResolver = (doc) => {
  if (doc.type === '404') {
    return '/404'
  }
  if (doc.type === 'project') {
    return `projects/${doc.uid}`
  }
  if (doc.type === 'about') {
    return '/about';
  }
  if (doc.type === 'approach') {
    return '/approach';
  }
  if (doc.type === 'themes') {
    return '/themes';
  }
  if (doc.type === 'about') {
    return '/about';
  }
  if (doc.type === 'projects') {
    return '/projects';
  }
  if (doc.type === 'contact') {
    return '/contact';
  }
  return '/'
}