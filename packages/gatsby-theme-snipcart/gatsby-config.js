
module.exports = (options) => {
    const {SNIPCART_API_KEY} = options;

    return {
        plugins: [
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
            'gatsby-plugin-emotion',
            'gatsby-plugin-theme-ui'
        ]
    }
}