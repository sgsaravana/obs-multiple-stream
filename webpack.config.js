const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'source-map',
  resolve: {
    extensions : ['.js', '.json', '.ts', '.tsx'],
    // alias      : {
    //   jquery : "jquery/src/jquery"
    // }
  },
  module: {
    rules: [
      {
        test    : /\.(ts|tsx)$/,
        loader  : 'awesome-typescript-loader',
        exclude : /node_modules/
      }
      // {
      //   test: /\.(png|woff|woff2|eot|ttf|svg)$/,
      //   loader: 'url-loader?limit=100000'
      // },
      // {
      //   test    : /\.(scss|css)$/,
      //   loader  : 'style-loader!css-loader?modules!sass-loader',
      //   include : /react-flexboxgrid/,
      //   exclude : /(node_modules)/
      // },
      // {
      //   test    : /\.(scss)$/,
      //   exclude : /(node_modules)/,
      //   loader  : 'style-loader!css-loader!sass-loader'
      // },
      // {
      //   test    : /\.css$/,
      //   loader  : "style-loader!css-loader?modules",
      //   exclude : /react-flexboxgrid/,
      // }
    ]
  },
  plugins: [
    // new webpack.ProvidePlugin({
    //   $      : 'jquery',
    //   jQuery : 'jquery',
    // }),
    new CopyWebpackPlugin([
      {from: 'public/', to: '.'}
    ])
  ]
};
