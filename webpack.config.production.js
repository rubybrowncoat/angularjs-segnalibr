const path = require('path')

module.exports = {
  extends: path.resolve(__dirname, 'webpack.config.base.js'),
  name: 'production',
  devtool: 'source-map',
}
