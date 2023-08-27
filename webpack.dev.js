const webpackMerge = require('webpack-merge').merge;
const commonConf = require('./webpack.common');
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const outputFile = '[name]';
const historyApiFallback = require("connect-history-api-fallback");

// アドオンに historyApiFallback を追加
const addon = (app, middleware, option) => {
    app.use(convert(historyApiFallback()));
};

module.exports = () => webpackMerge(commonConf(outputFile), {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        open: true,
        port: 3000,
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        historyApiFallback: true,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: "public/index.html",
            manifest: "public/manifest.json",
        }),
    ]
});