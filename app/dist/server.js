var WebpackDevServer = require("webpack-dev-server");
var webpack = require('webpack');
var compiler = webpack({
    entry: {
        app: []
    },
    output: {
        path: __dirname,
        publicPath: "/",
        filename: "bundle.js"
    }
});

new WebpackDevServer(compiler,{
    historyApiFallback: true,
    compress:true,
    stats: { colors: true }
}).listen(3000,'localhost');
