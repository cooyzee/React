var webpack = require('webpack');

module.exports = {
    entry: {
        app: [
            'webpack-dev-server/client?http://172.16.20.140:3000',
            'webpack/hot/only-dev-server',
            './src/js/app.js'
        ]
    },
    output: {
        path: __dirname,
        filename: '[name].js',
        publicPath:'/'
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
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};
