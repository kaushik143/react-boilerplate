import { config } from "node-config-ts";

const { merge } = require('webpack-merge');
const common = require('./webpack.base.js');

module.exports = merge(common, {
   mode: config.webpackMode,
   output: {
    filename: config.webpackFileNameJS,
  },
});