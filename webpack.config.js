const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = [{
  entry: './js/popup.js',
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: 'babel-loader' },
      { test: /\.css$/, use: ['style-loader', 'css-loader']  },
    ]
  },
  plugins: [new HtmlWebPackPlugin({
    template: './index.html'
  })],
  output: {
    filename: 'popup_bundle.js',
    path: path.resolve(__dirname, 'build')
  }
},{
  entry: './js/pacman.js',
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: 'babel-loader' },
      { test: /\.css$/, use: ['style-loader', 'css-loader']  },
    ]
  },
  output: {
    filename: 'pacman_bundle.js',
    path: path.resolve(__dirname, 'build')
  }
}]
