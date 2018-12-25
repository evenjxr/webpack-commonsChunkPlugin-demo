const webpack = require('webpack')
const path  = require('path')

module.exports = {
  entry : {
    main: './src/main.js',
    vendor: ['jquery']
  },
  output: {
    path: path.resolve('./dist'),
    filename: '[name].js',
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
      name: 'vendor',
      filename: '[name].js'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      children: true,
      async: 'children-async',
      name: ['main']
    })
  ]
}