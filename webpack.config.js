var webpack = require('webpack');
var path = require('path');
//插件项目，用于提取多个入口文件的公共脚本部分，然后生成一个common.js来方便多页面之间进行复用。
// var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = {
    // plugins: [commonsPlugin],
    entry: {
        main: [
            'webpack-dev-server/client?http://localhost:3000',
            'webpack/hot/only-dev-server',
            './app/js/app'
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    output: {
        path: __dirname + '/app/dist',
        filename: '[name].js',
        publicPath:'/app/dist'
    },
    module: {
        loaders:[
            {
                test: /\.scss$/,
                loaders: ["style", "css", "sass"]
            },
            {
                test: /\.js$/,
                loader: 'react-hot!babel-loader?presets[]=react,presets[]=es2015',
                exclude: /node_modules/,
                include: path.resolve(__dirname,'app/js'),
            }
        ]
    },
    sassLoader: {
        includePaths: [path.resolve(__dirname, "app/style")]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};
