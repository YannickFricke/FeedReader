const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

const commonConfig = {
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
    },
    node: {
        __dirname: false
    }
};

module.exports = [
    Object.assign({
        target: 'electron-main',
        entry: {
            main: './src/main.ts'
        },
        mode: 'production'
    }, commonConfig),
    Object.assign({
        target: 'electron-renderer',
        entry: {
            gui: './src/gui.tsx'
        },
        plugins: [new htmlWebpackPlugin({
            template: 'src/index.html'
        })],
        mode: 'production'
    }, commonConfig)
];
