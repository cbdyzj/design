const { resolve } = require('path')
const { ESBuildPlugin } = require('esbuild-loader')
const CopyPlugin = require('copy-webpack-plugin')
const templatePlugin = require('./template.plugin.js')

const config = {
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [{
                    loader: 'esbuild-loader',
                    options: {
                        loader: 'tsx',
                        target: 'es2020'
                    }
                }],
                exclude: /node_modules/,
            }, {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: [{ loader: 'file-loader', options: { outputPath: 'assets' } }],
            }, {
                test: /\.(css|less)$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader', options: { modules: true } },
                    { loader: 'less-loader' },
                ],
                exclude: [resolve(__dirname, 'node_modules')]
            }, {
                test: /\.(css|less)$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'less-loader' },
                ],
                include: [resolve(__dirname, 'node_modules')]
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    plugins: [
        new ESBuildPlugin(),
        new CopyPlugin({ patterns: ['favicon.ico'] }),
        ...templatePlugin,
    ],
    optimization: {
        splitChunks: {
            chunks: 'all',
            automaticNameDelimiter: '_',
        },
    },
    output: {
        filename: '[name].[chunkhash].js',
        chunkFilename: '[name].[chunkhash].js',
        path: resolve(__dirname, 'dist')
    },
    mode: 'development',
}

module.exports = config
