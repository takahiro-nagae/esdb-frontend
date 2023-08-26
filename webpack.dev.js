const webpackMerge = require('webpack-merge').merge;
const commonConf = require('./webpack.common');
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const outputFile = '[name]';

module.exports = () => webpackMerge(commonConf(outputFile), {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        open: true,
        port: 3000,
        static: {
            directory: path.join(__dirname, 'dist'),
        },
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: "public/index.html",
            manifest: "public/manifest.json",
        }),
    ]
});