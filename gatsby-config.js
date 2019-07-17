module.exports = {
  siteMetadata: {
    title: 'Gatsby + Contentstack',
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentstack',
      options:{
        'api_key':'blt55bcafb7cda84134',
        'access_token':'cs05b384839a8c8628dd8eb494',
        'environment':'development'
      },
    },
    'gatsby-plugin-react-helmet'
  ],
}
