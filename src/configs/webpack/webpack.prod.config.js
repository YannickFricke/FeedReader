const commonConfig      = require('./webpack.common.config');
const path              = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

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
        mode: 'production',
        plugins: [
            new htmlWebpackPlugin({
                template: path.resolve(__dirname, '..', '..', 'index.html')
            }),
        ]
    }, commonConfig)
];
