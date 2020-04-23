const styleRule = require('./helpers')

const cssRegex = /\.css$/
const scssRegex = /\.scss$/
const sassRegex = /\.sass$/

const styleRules = [
  {
    /* handles global CSS imports */
    test: cssRegex,
  },

  {
    /* handles global SCSS imports */
    test: scssRegex,
  },

  {
    /* handles global SASS imports */
    test: sassRegex,
  },
]

module.exports = isServer => [
  ...styleRules.map(options => styleRule({ ...options, isServer })),
]
