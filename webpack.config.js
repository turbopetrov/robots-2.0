let path = require("path");
let imagemin = require('imagemin-webpack-plugin');
let CopyWebpackPlugin = require('copy-webpack-plugin');
let MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
let conf = {    
    entry: {
      app:[ 
    './src/js/index.js',
    './src/scss/style.scss',    
      ]
    },
    output:{
      path:  path.resolve(__dirname, 'dist'),
      filename: 'js/scripts.js',
      publicPath: '/dist',
    },
    // devServer: {
    //   contentBase: "./html", 
    // },
    module: {
      rules: [
        //pug
        {
          test: /\.pug$/,
          loaders: [
            {
              loader: "pug-loader",
              options: {
                "pretty":true
              }
            }
          ]
        },
        //pug end
        {
          test:/\.js$/,
          loader: 'babel-loader'
        },
        {         
          test: /\.scss$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: {sourceMap: true} 
            },
            {
              loader: "sass-loader",
              options: {sourceMap: true}
            },
          ]
        },     
        {
          test: /\.(png|gif|jpe?g)$/,
          loaders:[
            {
              loader: 'file-loader',
              options: {
                name: '/img/[name].[ext]'
              }
            },
            {loader: 'img-loader'},
          ],
        },
      ],
    },
    plugins:[
      //pug
      new HtmlWebpackPlugin(
        {
        filename: "index.html",
        template: './src/pug/pages/index.pug'
        }
      ),
      //pug end
      new MiniCssExtractPlugin(
          {
            filename: 'css/styles.css'
          }
        ),
      // new CleanWebpackPlugin(),
      new CopyWebpackPlugin (
        {
          patterns: [
            {from: './src/img', to: 'img'},
          ]
        }
      ) 
         
            ],
   
}
module.exports = conf;
