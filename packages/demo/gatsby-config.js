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
                SNIPCART_API_KEY: process.env.SNIPCART_API_KEY
            }
        },
        'gatsby-plugin-emotion',
    ]
}