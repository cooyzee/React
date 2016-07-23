var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true
}).listen(3000, '172.16.20.140', function (err, result) {
    if (err) console.log(err);
    console.log('Listening at 172.16.20.140:3000');
});