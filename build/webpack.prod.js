const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
  entry: {
    app: path.join(__dirname, '../src/app')
  },
  output: {
    filename: '[name].[chunkhash:8].js',
    path: path.join(__dirname, '../dist'),
    publicPath: '/'
  },
  module: {
    rules:[
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.js$/,
        use: ['react-hot-loader/webpack','babel-loader?presets[]=react,presets[]=es2015'],
        include: path.join(__dirname, '../src')
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: path.join(__dirname, '../src/index.html')}),
    new ExtractTextPlugin('[name].[contenthash:8].css'),
    new OptimizeCssAssetsPlugin({
      cssProcessorOptions: { discardComments: {removeAll: true } }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module) {
        // this assumes your vendor imports exist in the node_modules directory
        return module.context && module.context.indexOf('node_modules') !== -1;
      }
    }),
    new webpack.optimize.UglifyJsPlugin(),
  ]
};