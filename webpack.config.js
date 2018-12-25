const path  = require('path')

module.exports = {
  entry : {
    a: './src/a.js',
    b: './src/b.js'
  },
  output: {
    path: path.resolve('./dist'),
    filename: '[name].js',
    chunkFilename: '[name].chunk.js'
  },
  module: {
    rules: [{
        test: /\.js$/,
        loader:'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
}