module.exports = {
  pathPrefix: "/bet350-paper",
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'Work Sans',
        ]
      }
    },
  ]
};
