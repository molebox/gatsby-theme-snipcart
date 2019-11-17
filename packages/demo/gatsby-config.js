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
                SNIPCART_API_KEY: 'S_Y2MzMDIwYWEtMDY3ZC00ZWI4LTk0NGEtMGNiMTVjZjI5ZTA4NjM3MDkzOTYxMTcwNDUxOTQ4'
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
      'gatsby-plugin-theme-ui'
    ]
}