const webpack = require('webpack')

module.exports = {
  mode: 'production',
  entry : {
    a: './src/a.js',
    b: './src/b.js'
  },
  output: {
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