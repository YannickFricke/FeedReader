const path = require('path');
const commonConfig = {
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
    }
};

module.exports = Object.assign({
    entry: {
        main: './src/main.ts'
    },
    mode: 'production'
}, commonConfig);
