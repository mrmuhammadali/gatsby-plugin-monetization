module.exports = {
  siteMetadata: {
    title: `Gatsby Plugin Monetization`,
    description: `Gatsby Plugin Monetization`,
    author: `Muhammad Ali`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-monetization`,
      options: { paymentPointer: "$ilp.uphold.com/xyRjnWAq9BbL" },
    },
  ],
}
