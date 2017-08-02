const path = require('path');

module.exports = {
  entry: './client/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public', 'build'),
    publicPath: '/build/',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: [/node_modules/, /public/],
        loader: 'babel-loader',
      },

      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        exclude: [/node_modules/, /public/],
      },

      {
        test: /\.less$/,
        loaders: ['style-loader', 'css-loader', 'autoprefixer-loader', 'less-loader'],
        exclude: [/node_modules/, /public/],
      },

      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader', 'autoprefixer-loader', 'less-loader'],
        exclude: [/public/],
      }
    ],
  },
};
