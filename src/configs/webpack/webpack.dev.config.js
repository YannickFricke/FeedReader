const commonConfig        = require('./webpack.common.config');
const path                = require('path');
const cleanTerminalPlugin = require('clean-terminal-webpack-plugin');
const htmlWebpackPlugin   = require('html-webpack-plugin');

const electronMain = Object.assign({}, {
    target: 'electron-main',
    entry : {
        main: path.resolve(__dirname, '..', '..', 'main.ts')
    },
    mode: 'development'
}, commonConfig);

const electronRenderer = Object.assign({}, {
    target: 'electron-renderer',
    entry : {
        gui: path.resolve(__dirname, '..', '..', 'gui.tsx'),
    },
    devtool  : 'cheap-module-source-map',
    mode     : 'development',
    devServer: {
        contentBase: path.join(__dirname, '..', '..', '..', 'dist'),
        hot        : true,
        inline     : true,
        port       : 8080,
        stats      : 'normal'
    },
    plugins: [
        new cleanTerminalPlugin(),
        new htmlWebpackPlugin({
            template: path.resolve(__dirname, '..', '..', 'index.html')
        }),
    ]
}, commonConfig);

module.exports = [
    electronMain,
    electronRenderer
];
