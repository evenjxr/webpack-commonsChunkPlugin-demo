const webpack = require('webpack')
const path  = require('path')

module.exports = {
  mode: 'production',
  entry : {
    a: './src/a.js',
    b: './src/b.js'
  },
  output: {
    path: path.resolve('./dist'),
    filename: '[name].js',
    chunkFilename: '[name].common.js'
  },
  module: {
    rules: [{
        test: /\.js$/,
        loader:'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "common",
      filename: "common.js"
    })
  ]
}