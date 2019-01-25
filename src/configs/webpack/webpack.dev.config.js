const path              = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const commonConfig      = require('./webpack.common.config');

const electronMain = Object.assign({
    target: 'electron-main',
    entry : {
        main: path.resolve(__dirname, '..', '..', 'main.ts')
    },
    mode: 'development'
}, commonConfig);

const electronRenderer = Object.assign({
    target: 'electron-renderer',
    entry : {
        gui: path.resolve(__dirname, '..', '..', 'gui.tsx'),
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.resolve(__dirname, '..', '..', 'index.html')
        })
    ],
    mode     : 'development',
    devServer: {
        contentBase: path.join(__dirname, '..', '..', '..', 'dist'),
        hot        : true,
        inline     : true,
        port       : 8080,
        stats      : 'normal'
    }
}, commonConfig);

const tsLintLoader = {
    loader : 'tslint-loader',
    options: {
        fix       : true,
        configFile: 'tslint.json',
        emitErrors: true,
        typeCheck : true
    }
};

// Push the tslint loader
electronMain.module.rules[0].use.push(tsLintLoader);
electronRenderer.module.rules[0].use.push(tsLintLoader);

module.exports = [
    electronMain,
    electronRenderer
];
