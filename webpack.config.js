const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')
module.exports = {
  // devServer: {
  //   contentBase: path.join(__dirname, 'dist'),
  //   index:'./index.html'
  // },
  entry:{
    markdown:  './src/markdown.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath:'/',
    chunkFilename:'[name].js',
    filename: '[name].js'
  },
  module: {

    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.(sc|c)ss$/i,
        use:    [
            {loader:MiniCssExtractPlugin.loader,
            options:{
              publicPath: (resourcePath, context) => {
                 return path.relative(path.dirname(resourcePath), context) + '/';
              },
            }},
            // 'style-loader',
            'css-loader',
            // 'postcss-loader',
            'sass-loader'
          ],
      },
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/markdown.html",
      filename: "./markdown.html",
      minify:false
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
      chunkFilename: '[id].css',
    })
  ],

};
