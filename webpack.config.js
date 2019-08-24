const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const config = {
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }, {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: [
                    { loader: 'file-loader', options: { outputPath: 'assets' } }
                ],
            }, {
                test: /\.(css|less)$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader', options: { modules: true } },
                    { loader: 'less-loader' },
                ],
                exclude: [path.resolve(__dirname, 'node_modules')]
            },
            {
                test: /\.(css|less)$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'less-loader' },
                ],
                include: [path.resolve(__dirname, 'node_modules')]
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            favicon: 'favicon.ico',
        })
    ],
    optimization: {
        splitChunks: {
            chunks: 'all',
            automaticNameDelimiter: '_',
        }
    },
    mode: 'development',
}

module.exports = config
