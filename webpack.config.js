"use strict";

const webpack = require("webpack");
const path = require("path");

module.exports = (env = {}) => ({
  entry: {
    index: "./src/index.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    library: "Cntdwn",
    libraryTarget: "umd2"
  },
  module: {
    rules: [
      {
        use: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".js"]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
    })
  ]
});
