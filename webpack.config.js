var webpack = require('webpack');
//插件项目，用于提取多个入口文件的公共脚本部分，然后生成一个common.js来方便多页面之间进行复用。
// var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = {
    // plugins: [commonsPlugin],
    entry: {
        app: [
            // 'webpack-dev-server/client?http://172.16.20.140:3000',
            // 'webpack/hot/only-dev-server',
            './app/js/app'
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    output: {
        path: __dirname + '/app/dist',
        filename: '[name].js',
        // libraryTarget: 'umd',
        publicPath:'/app/dist'
    },
    // externals: {'react': 'React', 'react-dom': 'ReactDOM', 'react-router': 'ReactRouter'},
    module: {
        loaders:[
            {
                test: /\.scss$/,
                loaders: ["style", "css", "sass"]
            },
            {
                test: /\.js$/,
                loader: 'react-hot!babel-loader?presets[]=react,presets[]=es2015',
                exclude: /node_modules/
            }
        ]
    },
    // sassLoader: {
    //     includePaths: [path.resolve(__dirname, "app/style")]
    // },
    plugins: [
        // new webpack.HotModuleReplacementPlugin(),
        // new webpack.NoErrorsPlugin(),
        // new ExtractTextPlugin("styles.css"),
        // new webpack.optimize.UglifyJsPlugin()
    ]
};
