let path = require('path');
let imagemin = require('imagemin-webpack-plugin');
let CopyWebpackPlugin = require('copy-webpack-plugin');
let MiniCssExtractPlugin = require('mini-css-extract-plugin');
let { CleanWebpackPlugin } = require('clean-webpack-plugin');
let HtmlWebpackPlugin = require('html-webpack-plugin')
let conf = { 
    context: path.resolve(__dirname, 'src'),   
    entry: {      
      app:[ 
    './js/index.js',
    './scss/style.scss',    
      ]
    },
    output:{
      path:  path.resolve(__dirname, './dist'),
      filename: 'scripts.js',
      publicPath: './',
    },
    devServer: {
      stats: 'errors-only',
      publicPath: '/' 
    },
    module: {
      rules: [        
        {
          test: /\.pug$/,
          loaders: [
            {
              loader: 'pug-loader',
              options: {
                'pretty':true
              }
            }
          ]
        },      
        {
          test:/\.js$/,
          loader: 'babel-loader'
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
          ]
        },     
        {
          test: /\.(png|gif|jpe?g)$/,
          loaders:[
            {
              loader: 'file-loader',
              options: {
                name: '[path][name].[ext]'
              }
            },
            {loader: 'img-loader'},
          ],
        },
      ],
    },
    plugins:[      
      new HtmlWebpackPlugin(
        {
        filename: 'index.html',
        template: './pug/pages/index.pug'
        }
      ),      
      new MiniCssExtractPlugin(
          {
            filename: 'styles.css'
          }
        ),
      new CleanWebpackPlugin(),
      new CopyWebpackPlugin (
        {
          patterns: [
            {from: './img', to: 'img'},
          ]
        }
      )         
            ],   
}
module.exports = conf;