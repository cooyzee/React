const path = require('path')
const shell = require('shelljs')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJsPlugin = require("uglifyjs-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = (projectName) => {
  const distDir = path.resolve('dist', projectName)
  shell.rm('-rf', distDir)
  shell.mkdir('-p', distDir)
  shell.cp('-R', path.resolve(projectName, 'assets'), distDir)

  return {
    mode: 'production',
    entry: path.resolve(projectName, 'main.js'),
    output: {
      path: distDir,
      filename: '[name].[chunkhash:8].js',
      chunkFilename: '[name].[chunkhash:8].js',
      publicPath: '/' + projectName
    },
    module: {
      rules:[
        {
          test: /\.scss$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'postcss-loader',
            'sass-loader'
          ]
        },
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/
        }
      ]
    },
    resolve: {
      alias: {
        'react-dom': '@hot-loader/react-dom'
      }
    },
    optimization: {
      minimizer: [
        new UglifyJsPlugin(),
        new OptimizeCssAssetsPlugin({
          cssProcessorOptions: { discardComments: {removeAll: true } }
        })
      ],
      splitChunks: {
        chunks: 'all'
      }
    },
    plugins: [
      new HtmlWebpackPlugin({template: path.resolve(projectName, 'index.html')}),
      new MiniCssExtractPlugin({
        filename: "app.[contenthash:8].css",
      })
    ]
  }
}
