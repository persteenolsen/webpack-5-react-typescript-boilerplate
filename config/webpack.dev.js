const paths = require('./paths')

const webpack = require('webpack')
const { merge } = require('webpack-merge')

const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');

const common = require('./webpack.common.js')

module.exports = merge(common, {
  // Set the mode to development or production
  mode: 'development',

  // Control how source maps are generated
  devtool: 'inline-source-map',

  // Enable: It is possible testing in IE 11, but reload / replacement will break due to a bug in webpack 5 !
  // Disable: It is possible to use hot relad / replacement but not using IE 11 !
  // target: ['web', 'es5'], 

  // Spin up a server for quick development
  devServer: {
    historyApiFallback: true,
    contentBase: paths.build,
    open: true,
    compress: true,
    hot: true,
    port: 8080,
  },

  plugins: [

    // Note: Only update what has changed on hot reload 
    // Require the statement "module.hot.accept();" in the root index.jsx !
    new webpack.HotModuleReplacementPlugin(),

    new FriendlyErrorsPlugin()
  ],
})
