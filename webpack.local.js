const webpackMerge = require('webpack-merge').merge;
const devConf = require('./webpack.dev');
const webpack = require('webpack');
const path = require('path');

module.exports = () => webpackMerge(devConf(), {
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
        new webpack.EnvironmentPlugin({
            APP_ENV: 'local'
        })
    ]
});