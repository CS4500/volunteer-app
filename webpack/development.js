var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var autoprefixer = require('autoprefixer')

//move configs elsewhere once we have more
const config = {
  env : process.env.NODE_ENV || 'development',
  path_base  : path.resolve(__dirname, '..'),
  dir_app    : 'app',
  dir_dist   : 'static/dist',
  dir_test   : 'tests'
}

module.exports = {
  devtool: process.env.WEBPACK_DEVTOOL || 'source-map',
  resolve: {
    root: path.resolve(config.path_base, config.dir_app),
    extensions: ['', '.js', '.jsx']
  },
  debug: true,
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:3000',
    'webpack/hot/only-dev-server',
    path.resolve(config.path_base, config.dir_app) + '/main.js'
  ],
  output: {
    path: path.resolve(config.path_base, config.dir_dist),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(config.path_base, config.dir_app) + '/index.html',
      hash: false,
      filename: 'index.html',
      inject: 'body',
      minify: {
        collapseWhitespace: true
      }})
  ],
  postcss: function () {
    return [autoprefixer];
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot', 'babel'],
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loaders: [
          'style?sourceMap',
          'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
          'postcss-loader',
          // may want to change css-loader to react-css-modules
          //'resolve-url',
          'sass?sourceMap'
        ]
      }
    ],
  }
}
