const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const { staticCSSDevPath, staticCSSProdPath } = require('./paths')

const { inDevelopment } = process.env

const inDev = inDevelopment === 'true'
const filename = inDev ? staticCSSDevPath : staticCSSProdPath
const chunkFilename = filename

module.exports = isServer => {
  const plugins = []

  if (!isServer) {
    plugins.push(
      /* extracts css chunks for client */
      new MiniCssExtractPlugin({
        filename,
        chunkFilename,
      })
    )
  }

  return plugins
}
