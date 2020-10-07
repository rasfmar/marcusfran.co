module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-scroll-reveal`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-156555564-1",
        head: false,
        anonymize: true,
        respectDNT: true,
        pageTransitionDelay: 0,
        defer: false
      },
    },
  ],
}
