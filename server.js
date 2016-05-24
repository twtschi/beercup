var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(3000, '10.8.53.71', function (err, result) {
  if (err) {
    return console.log(err);
  }

  console.log('Listening at http://10.8.53.71:3000/')
});