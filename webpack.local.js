const webpackMerge = require('webpack-merge').merge;
const commonConf = require('./webpack.common');
const webpack = require('webpack');
const path = require('path');
const historyApiFallback = require("connect-history-api-fallback");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// アドオンに historyApiFallback を追加
const addon = (app, middleware, option) => {
    app.use(convert(historyApiFallback()));
};

module.exports = () => webpackMerge(commonConf(), {
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
        new HtmlWebpackPlugin({
            template: "public/index.html",
            manifest: "public/manifest.json",
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.EnvironmentPlugin({
            APP_ENV: 'local'
        })
    ]
});