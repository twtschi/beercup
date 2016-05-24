var webpack = require('webpack');

module.exports = {
  entry: [
    "webpack-dev-server/client?http://10.8.53.71:3000",
    "webpack/hot/only-dev-server",
    "index.html"
  ],
  output: {
    path: __dirname,
    filename: "build/js/bundle.js",
    publicPath: "/build"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'react-hot!jsx-loader?harmony'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}