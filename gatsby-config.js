require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "CVQ",
    menuLinks: [
      {
        name: "Inicio",
        link: "/",
      },
      {
        name: "Conócenos",
        link: "/about",
      },
      {
        name: "CVQ",
        link: "/cvq",
      },
      {
        name: "RWQO",
        link: "/rwqo",
      },
      {
        name: "Publicaciones",
        link: "/publicaciones",
      },
      {
        name: "Evaluadores",
        link: "/evaluadores",
      },
    ],
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
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `archivos`,
        path: `${__dirname}/archivos`,
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `u6k2eqtx7wrd`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // Footnotes mode (default: true)
        footnotes: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        
        "excerpt_separator": `<!-- endexcerpt -->`,
        // Plugins configs
        plugins: [],
      },
    },
  ],
};
