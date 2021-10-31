module.exports = {
  siteMetadata: {
    title: 'Autopeças.pt',
    titleTemplate: '%s · Autopeças.pt',
    description: 'AUTOPEÇAS.PT - Peças para automóveis',
    url: 'https://autopecas.pt',
    siteUrl: 'https://autopecas.pt',
    image: 'https://autopecas.pt/logo.png',
    defaultImage: 'https://autopecas.pt/logo.png',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-breakpoints',
    'gatsby-plugin-htaccess',
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint:
          'https://autopecas.us5.list-manage.com/subscribe/post?u=97f0d3af42fa7b7459646b377&amp;id=bedd3d68f1',
        timeout: 3500,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        gfm: true,
        plugins: [],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
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
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /images/,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: [`PT Sans:400,700`],
        },
      },
    },
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        threshold: 1,
        once: true,
        disable: false,
      },
    },
  ],
}
