const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const { inDevelopment } = process.env
const inDev = inDevelopment === 'true'
const localIdentName = '[local]___[hash:base64:10]'

/**
 * Helper function to create a CSS/SCSS style webpack module rule.
 *
 * @function styleRule
 * @param {regex} test
 * @param {regex} include
 * @param {regex} exclude
 * @param {boolean} modules
 * @param {boolean} isServer
 * @returns {object}
 */
const styleRule = ({
  test,
  include = undefined,
  exclude = undefined,
  modules = false,
  isServer,
}) => ({
  test,
  include,
  exclude,
  use: [
    !isServer && inDev && 'extracted-loader',
    !isServer && MiniCssExtractPlugin.loader,
    {
      loader: isServer ? 'css-loader/locals' : 'css-loader',
      options: {
        modules,
        minimize: !inDev,
        sourceMap: inDev,
        importLoaders: 1,
        localIdentName,
      },
    },
    'sass-loader',
  ].filter(Boolean),
})

module.exports = styleRule
