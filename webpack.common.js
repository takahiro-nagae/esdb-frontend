const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const dotenv = require('dotenv');
var webpack = require("webpack");
const env = dotenv.config().parsed;

module.exports = () => ({
    entry: './src/index.tsx',
    context: path.resolve(__dirname, './'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.ts|.tsx$/,
                exclude: /node_modules/,
                use: ['ts-loader'],
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ]
    },
    plugins: [
        new ESLintPlugin({
            extensions: ['.ts', '.tsx'],
            exclude: 'node_modules',
            fix: true
        }),
        new CopyPlugin({
            patterns: [
                {
                    context: "./public",
                    from: '*.json',
                    to: '.'
                },
                {
                    context: "./public",
                    from: '*.ico',
                    to: '.'
                },
                {
                    context: "./public",
                    from: '*.png',
                    to: '.'
                },
            ]
        }),
        new webpack.DefinePlugin({
            'process.env': JSON.stringify(env),
        }),
    ],
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
});