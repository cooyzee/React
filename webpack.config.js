const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
//插件项目，用于提取多个入口文件的公共脚本部分，然后生成一个common.js来方便多页面之间进行复用。
// var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

const del = require('del');
del(['dist/*']);

module.exports = {
    // plugins: [commonsPlugin],
    entry: {
        app: [
            './src/js/app.js'
        ]
    },
    output: {
        path: __dirname+'/dist',
        filename: '[name].[chunkhash:8].js',
        // libraryTarget: 'umd'
    },
    // externals: {'react': 'React', 'react-dom': 'ReactDOM', 'react-router': 'ReactRouter'},
    module: {
        loaders:[
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract('style', 'css!sass')
            },
            {
                test: /\.js$/,
                loader: 'react-hot!babel-loader?presets[]=react,presets[]=es2015',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("[name].[contenthash:8].css"),
        new webpack.optimize.UglifyJsPlugin(),
        new HtmlWebpackPlugin({template: './src/index.html'})
    ]
};
