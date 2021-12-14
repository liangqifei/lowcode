const path = require("path");
const HtmlWebpackPlugin=require('html-webpack-plugin')
module.exports = {
  mode: 'development',
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].[contenthash].js",
    clean: true
  },
  optimization: {
    runtimeChunk: 'single',
  },
  resolve: {
      fallback: {
          "fs": false
      },
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/i,
        generator: {
          filename: 'static/img/[hash][ext][query]'
        },
        type: 'asset/resource'
      },
      { test: /\.jsx$/, use: "babel-loader" },
      { test: /\.js$/, use: "babel-loader" },
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          "css-loader"]
      },
      {
        test: /\.s[ac]ss$/i,
        exclude:/node_modules/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
          "postcss-loader"
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../public/index.html'),
    })
  ],
  devServer: {
    port: 9000,
    host:'localhost'
  },
};
