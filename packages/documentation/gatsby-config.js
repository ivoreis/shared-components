module.exports = {
  plugins: [{
    resolve: 'gatsby-plugin-react-axe',
    options: {
      showInProduction: true,
      axeOptions: {
        reporter: 'v2'
        // See: https://github.com/dequelabs/axe-core/blob/master/doc/API.md#api-name-axeconfigure
      },
      axeContext: {
        include: [
          ["[data-testid='header']"],
          ["[data-testid='live-preview']"]
        ]
        // See: https://github.com/dequelabs/axe-core/blob/master/doc/API.md#context-parameter
      }
    }
  }]
}
