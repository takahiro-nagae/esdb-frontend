const webpackMerge = require('webpack-merge').merge;
const commonConf = require('./webpack.common');
const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = () => webpackMerge(commonConf(), {
    mode: 'development',
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: "public/index.html",
            manifest: "public/manifest.json",
        }),
        new webpack.EnvironmentPlugin({
            APP_ENV: 'dev'
        })
    ]
});