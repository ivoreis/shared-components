const path = require('path')

exports.onCreateWebpackConfig = ({
  actions
}) => {
  const extraConfig = {
    resolve: {
      alias: {
        '~root': path.resolve(__dirname, '..', 'src'),
        '~base': path.resolve(__dirname, '..', '..'),
        '@emotion/core': path.resolve(__dirname, '..', '..', '..', 'node_modules', '@emotion/core')
      }
    }
  }

  actions.setWebpackConfig(extraConfig)
}
