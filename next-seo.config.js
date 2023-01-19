const website = require("./config/website")

export default {
    defaultTitle: website.defaultTitle,
    titleTemplate: `%s • ${website.titleTemplate}`,
    description: website.description,
    additionalLinkTags: [
      {
        rel: 'apple-touch-icon',
        href: website.favicon,
        sizes: '180x180',
      }
    ],
    openGraph: {
      type: 'website',
      locale: website.locale,
      url: 'https://businessdesignagency.nl/',
      site_name: website.defaultTitle,
      title: website.defaultTitle,
      description: website.description,
      images: [
          {
              width: 1200,
              height: 630
          }
      ]
    },
    twitter: {
      handle: website.twitterHandle,
      site: website.twitterHandle,
      cardType: 'summary_large_image',
    },
 };