const webpackMerge = require('webpack-merge').merge;
const commonConf = require('./webpack.common');
const outputFile = '[name]';
const webpack = require('webpack');
const path = require('path');

module.exports = () => webpackMerge(commonConf(outputFile), {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        open: true,
        port: 3000,
        static: [
            { 
                directory: path.resolve("dist"),
                watch: {
                    ignored: /node_modules/,
                },
            },
            { 
                directory: path.resolve("public") 
            },
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ]
});