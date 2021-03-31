module.exports = {
  siteMetadata: {
    title: `INST377 Group 2 UMD Basketball`,
    description: `A prototype website for accessing and managing UMD men's basketball statistics`,
    author: `Griffin Barlow, Abhishek Padmanabhan, Brandon Pennington, Joseph Sanchez, Vig Vishwanathan`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `UMD Men's Basketball`,
        short_name: `Basketball`,
        start_url: `/`,
        background_color: `#ECECEC`,
        theme_color: `#D20A0A`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
