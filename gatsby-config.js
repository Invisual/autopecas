module.exports = {
  siteMetadata: {
    title: 'Website name',
    titleTemplate: '%s · Website name',
    description: 'Website site description',
    url: 'https://www.website-url.com',
    siteUrl: 'https://www.website-url.com',
    image: 'https://path-to-logo.com',
    defaultImage: 'https://path-to-logo.com',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-breakpoints',
    'gatsby-plugin-htaccess',
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'ID-AQUI',
        includeInDevelopment: false,
        defaultDataLayer: {
          platform: 'gatsby',
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ['ID-AQUI'],
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
        },
        pluginConfig: {
          head: true,
          respectDNT: true,
          exclude: ['/404/**'],
        },
      },
    },
  ],
}
