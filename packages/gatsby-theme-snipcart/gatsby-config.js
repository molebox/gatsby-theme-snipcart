
module.exports = (options) => {
    const {SNIPCART_API_KEY} = options;
    console.log('Your API_KEY: ', SNIPCART_API_KEY);

    return {
        siteMetadata: {},
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
        ]
    }
}