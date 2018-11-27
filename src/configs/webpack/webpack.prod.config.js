const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const commonConfig = require('./webpack.common.config');

module.exports = [
    Object.assign({
        target: 'electron-main',
        entry: {
            main: path.resolve(__dirname, '..', '..', 'main.ts')
        },
        mode: 'production'
    }, commonConfig),
    Object.assign({
        target: 'electron-renderer',
        entry: {
            gui: path.resolve(__dirname, '..', '..', 'gui.tsx'),
        },
        plugins: [
            new htmlWebpackPlugin({
                template: path.resolve(__dirname, '..', '..', 'index.html')
            }),
            new miniCssExtractPlugin({
                filename: '[name].css',
                chunkFilename: '[id].css'
            })
        ],
        mode: 'production'
    }, commonConfig)
];
