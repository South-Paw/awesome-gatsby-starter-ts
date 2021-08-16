module.exports = {
  siteMetadata: {
    name: 'Awesome Gatsby Starter TypeScript',
    siteUrl: 'https://awesome-gatsby-starter-ts.netlify.app',
    description: 'A TypeScript starter for GatsbyJS with a preconfigured MDX, Storybook and ESLint environment',
    keywords: ['gatsby', 'gatsbyjs', 'gatsby starter', 'typescript', 'github'],
    type: 'website',
    image: 'https://awesome-gatsby-starter-ts.netlify.app/ok.png',
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet-async',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'awesome-gatsby-starter-ts',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/ok.png', // This path is relative to the root of the site
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/assets/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        defaultLayouts: {
          pages: require.resolve('./src/templates/Page.tsx'),
        },
      },
    },

    // The following are all optional plugins that you may find useful - note that you'll need to install them yourself!

    // https://www.gatsbyjs.com/plugins/gatsby-plugin-offline
    // 'gatsby-plugin-offline',

    // https://www.gatsbyjs.com/plugins/gatsby-plugin-google-gtag
    // {
    //   resolve: 'gatsby-plugin-google-gtag',
    //   options: {
    //     trackingIds: ['YOUR_GOOGLE_ANALYTICS_TRACKING_ID'],
    //     pluginConfig: {
    //       head: false,
    //       respectDNT: false,
    //       exclude: [],
    //     },
    //   },
    // },

    // https://www.gatsbyjs.com/plugins/gatsby-plugin-advanced-sitemap
    // 'gatsby-plugin-advanced-sitemap',
  ],
};
