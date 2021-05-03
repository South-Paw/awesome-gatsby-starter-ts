module.exports = {
  siteMetadata: {
    name: 'Awesome Gatsby Starter TypeScript',
    basepath: 'https://awesome-gatsby-starter-ts.netlify.app',
    description: 'A TypeScript starter for GatsbyJS with a preconfigured MDX, Storybook and ESLint environment',
    keywords: ['gatsby', 'gatsbyjs', 'gatsby starter', 'typescript', 'github'],
    type: 'website',
    image: 'https://awesome-gatsby-starter-ts.netlify.app/ok.png',
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-react-helmet-async',
    'gatsby-plugin-styled-components',
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

    // The following are all optional plugins that you may find useful.

    // https://www.gatsbyjs.com/plugins/gatsby-plugin-offline
    // 'gatsby-plugin-offline',

    // https://www.gatsbyjs.com/plugins/gatsby-plugin-google-analytics
    // {
    //   resolve: 'gatsby-plugin-google-analytics',
    //   options: {
    //     trackingId: 'YOUR_GOOGLE_ANALYTICS_TRACKING_ID',
    //     head: false,
    //     anonymize: false,
    //     respectDNT: false,
    //   },
    // },

    // https://www.gatsbyjs.com/plugins/gatsby-plugin-google-tagmanager
    // {
    //   resolve: "gatsby-plugin-google-tagmanager",
    //   options: {
    //     id: "YOUR_GOOGLE_TAGMANAGER_ID",
    //     defaultDataLayer: { platform: "gatsby" },
    //   },
    // },

    // https://www.gatsbyjs.com/plugins/gatsby-plugin-advanced-sitemap
    // "gatsby-plugin-advanced-sitemap",
  ],
};
