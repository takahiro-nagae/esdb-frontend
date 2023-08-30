const webpackMerge = require('webpack-merge').merge;
const commonConf = require('./webpack.common');
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
    plugins: [
        new HtmlWebpackPlugin({
            template: "public/index.html",
            manifest: "public/manifest.json",
        }),
    ]
});