module.exports = {
  siteMetadata: {
    title: "cvq",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `ewvfxi42`,
        dataset: `production`,
      },
    },
  ],
};
