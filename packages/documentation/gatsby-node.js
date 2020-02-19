const path = require('path')

exports.onCreateWebpackConfig = ({
  actions
}) => {
  const extraConfig = {
    resolve: {
      alias: {
        '@emotion/core': path.resolve(__dirname, '..', '..', '..', 'node_modules', '@emotion/core')
      }
    }
  }

  actions.setWebpackConfig(extraConfig)
}
