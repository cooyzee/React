var webpack = require('webpack');
//插件项目，用于提取多个入口文件的公共脚本部分，然后生成一个common.js来方便多页面之间进行复用。
// var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = {
    // plugins: [commonsPlugin],
    entry: {
        main: [
            'webpack-dev-server/client?http://localhost:3000',
            'webpack/hot/only-dev-server',
            './app/js/main'
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    output: {
        path: __dirname,
        filename: '[name].js'
    },
    module: {
        loaders:[
            // { test: /\.js$/, loader: 'babel-loader' },
            {
                test: /\.jsx$/,
                loader: ['react-hot','babel-loader'],
                query: {
                    presets: ['react', 'es2015']
                },
                include: __dirname
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};