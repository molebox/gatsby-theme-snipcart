let activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development" || "production"

require("dotenv").config({
  path: `.env.${activeEnv}`,
})

module.exports = {
    plugins: [
        {
            resolve: 'gatsby-theme-snipcart',
            options: {
                SNIPCART_API_KEY: process.env.SNIPCART_API_KEY,
                version: 'v3'
            }
        },
        {
          resolve: 'gatsby-source-sanity',
          options: {
            projectId: process.env.SANITY_PROJECT_ID,
            dataset: process.env.SANITY_PROJECT_DATASET,
            watchMode: true
          }
        },
        {
          resolve: 'gatsby-plugin-google-fonts',
          options: {
            fonts: [
              'Josefin Sans',
              'Poppins',
              `Open Sans`,
              `source sans pro\:300,400,400i,700` 
            ]
          }
      },
      `gatsby-transformer-sharp`, 
      `gatsby-plugin-sharp`,
      'gatsby-plugin-theme-ui'
    ]
}