module.exports = {
  siteMetadata: {
    title: 'IBM AIOps Training',
    description: 'IBM AIOps Training',
    keywords: 'ibm,watson,aiops,waiops',
  },
  pathPrefix: `/ibm-aiops-training`,
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Carbon Design Gatsby Theme',
        icon: 'src/images/favicon.svg',
        short_name: 'Gatsby Theme Carbon',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#161616',
        display: 'browser',
      },
    },
    {
      resolve: 'gatsby-theme-carbon',
      options: {
        iconPath: 'src/images/favicon.svg',
        theme: {
          homepage: 'dark',
          interior: 'g10',
        },
        mediumAccount: 'carbondesign',
        repository: {
          baseUrl:
            'https://github.com/niklaushirt/ibm-waiops-training',
          subDirectory: '/',
        },
        isSwitcherEnabled: 'false',
      },
    },
  ],
};
