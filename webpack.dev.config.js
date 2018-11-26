const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

const commonConfig = {
    output: {
        path: path.resolve(__dirname, 'out'),
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
            },
            {
                test: /\.s[a|c]ss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
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
                use: 'file-loader?name=[name].[ext]?[hash]'
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
                use: 'file-loader?name=/fonts/[name].  [ext]&mimetype=application/font-otf'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.scss']
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
        mode: 'development'
    }, commonConfig),
    Object.assign({
        target: 'electron-renderer',
        entry: {
            gui: './src/gui.tsx'
        },
        plugins: [new htmlWebpackPlugin({
            template: 'src/index.html'
        })],
        mode: 'development',
        devServer: {
            contentBase: path.join(__dirname, 'dist'),
            hot: true,
            inline: true,
            port: 8080,
            stats: 'normal'
        }
    }, commonConfig)
];
