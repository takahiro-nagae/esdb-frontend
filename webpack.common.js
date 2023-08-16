const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (outputFile) => ({
    entry: './src/index.tsx',
    context: path.resolve(__dirname, './'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: `${outputFile}.js`,
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
        new HtmlWebpackPlugin({
            template: "public/index.html",
            manifest: "public/manifest.json",
        }),
        // new CopyPlugin({
        //     patterns: [
        //         {   
        //             from: './public',
        //             to: '.'
        //         }
        //     ]
        // }),
    ],
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
});