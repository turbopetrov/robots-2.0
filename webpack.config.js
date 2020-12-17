const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    app: [
      './js/index.js',
      './scss/style.scss',
    ],
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'scripts.js',
    publicPath: './',
  },
  devServer: {
    stats: 'errors-only',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        loaders: [
          {
            loader: 'pug-loader',
            options: {
              pretty: true,
            },
          },
        ],
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.(svg|png|gif|jpe?g)$/,
        use: [{
          loader: 'url-loader',
          options: {
            name: '[path][name].[ext]',
            publicPath: '/',
            limit: 8000,
          },
        }],
      },
    ],
  },
  plugins: [
    // new ESLintPlugin(),
    new HtmlWebpackPlugin(
      {
        filename: 'index.html',
        template: './pug/pages/index.pug',
      },
    ),
    new MiniCssExtractPlugin(
      {
        filename: 'styles.css',
      },
    ),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin(
      {
        patterns: [
          { from: './img', to: 'img' },
        ],
      },
    ),
  ],
};
