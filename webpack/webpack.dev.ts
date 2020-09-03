import { config } from "node-config-ts";
const webpack = require("webpack");

const { merge } = require('webpack-merge');
const common = require('./webpack.base.js');

module.exports = merge(common, {
  mode: config.webpackMode,
  devtool: config.webpackDevtool,
  devServer: {
    contentBase: "/",
    port: config.port,
    hotOnly: true,
    publicPath: '/'
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  output: {
    filename: config.webpackFileNameJS,
    publicPath:'/'
  },
});
