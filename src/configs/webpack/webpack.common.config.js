const path                              = require('path');
const htmlWebpackPlugin                 = require('html-webpack-plugin');
const createStyledComponentsTransformer = require('typescript-plugin-styled-components').default;
const styledComponentsTransformer       = createStyledComponentsTransformer();

module.exports = {
    output: {
        path: path.resolve(__dirname, '..', '..', '..', 'out'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader',
                options: {
                    getCustomTransformers: () => ({ before: [styledComponentsTransformer] })
                }
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.jpe?g$|\.gif$|\.ico$|\.png$|\.svg$/,
                use: [
                    'file-loader?name=[name].[ext]?[hash]',
                    'image-webpack-loader'
                ],
            },
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.png']
    },
    node: {
        __dirname: false
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.resolve(__dirname, '..', '..', 'index.html')
        }),
    ]
};