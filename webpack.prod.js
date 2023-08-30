const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCssPlugin = require('optimize-css-assets-webpack-plugin');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge').merge;
const commonConf = require('./webpack.common');

module.exports = () => webpackMerge(commonConf(), {
    mode: 'production',
    plugins: [
        new HtmlWebpackPlugin({
            template: "public/index.html",
            manifest: "public/manifest.json",
            inject: 'body',
            minify: {
                collapseWhitespace: true,
                keepClosingSlash: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
              }
        }),
        new webpack.EnvironmentPlugin({
            APP_ENV: 'prod'
        })
    ],
    optimization: {
        minimizer: [
            new TerserPlugin(),
            new OptimizeCssPlugin()
        ]
    }
});