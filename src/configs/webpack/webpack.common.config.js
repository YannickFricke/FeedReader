const path                              = require('path');
const htmlWebpackPlugin                 = require('html-webpack-plugin');
const miniCssExtractPlugin              = require('mini-css-extract-plugin');
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
                test: /\.scss$/,
                use: [
                    {
                        loader: miniCssExtractPlugin.loader
                    },
                    {
                        loader   : 'css-loader',
                        options: {
                            sourceMap: process.env.NODE_ENV === 'development'
                        }
                    },
                    {
                        loader   : 'sass-loader',
                        options: {
                            sourceMap: process.env.NODE_ENV === 'development'
                        }
                    }
                ]
            },
            {
                test: /\.css/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.jpe?g$|\.gif$|\.ico$|\.png$|\.svg$/,
                use: [
                    'file-loader?name=[name].[ext]?[hash]',
                    'image-webpack-loader'
                ],
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader?limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader'
            },
            {
                test: /\.otf(\?.*)?$/,
                use: 'file-loader?name=/fonts/[name].[ext]&mimetype=application/font-otf'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.scss']
    },
    node: {
        __dirname: false
    },
    plugins: [
        new miniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        }),
        new htmlWebpackPlugin({
            template: path.resolve(__dirname, '..', '..', 'index.html')
        }),
    ]
};