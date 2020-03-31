const HtmlWebpackPlugin = require('html-webpack-plugin')

// default config value
const host =  '192.168.0.7'
const port = '3000'

module.exports = (projectName) => {
  return {
    mode: 'development',
    entry: `./${projectName}/main.js`,
    output: {
      filename: '[name].js',
      chunkFilename: '[name].js'
    },
    module: {
      rules:[
        {
          test: /\.scss$/,
          use: ['style-loader', 'css-loader', 'sass-loader']
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
    plugins: [
      new HtmlWebpackPlugin({template: `./${projectName}/index.html`})
    ],
    optimization: {
      splitChunks: {
        chunks: 'all'
      }
    },
    devServer: {
      host: host,
      port: port,
      // respond to 404s with index.html
      historyApiFallback: true,
      // open the browser
      open: true,
      hot: true,
    }
  }
}
