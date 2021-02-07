const { resolve } = require('path')
const CopyPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = function (env) {

    return {
        mode: 'development',
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    use: [{
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-react'],
                        }
                    }],
                    exclude: /node_modules/,
                }, {
                    test: /\.(png|jpg|jpeg|gif)$/,
                    use: [{
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            fallback: {
                                loader: 'file-loader',
                                options: { outputPath: 'assets' }
                            }
                        }
                    }],
                }, {
                    test: /\.module\.(css|less)$/,
                    use: [
                        { loader: 'style-loader' },
                        { loader: 'css-loader', options: { modules: true } },
                        { loader: 'less-loader' },
                    ],
                }, {
                    test: (name) => /\.(css|less)$/.test(name) && !/\.module\.(css|less)$/.test(name),
                    use: [
                        { loader: 'style-loader' },
                        { loader: 'css-loader' },
                        { loader: 'less-loader' },
                    ],
                },
            ]
        },
        resolve: {
            extensions: ['.js', '.jsx'],
            alias: { '@': resolve(__dirname, 'src') },
        },
        plugins: [
            new CopyPlugin({ patterns: ['favicon.ico'] }),
            new HtmlWebpackPlugin({
                template: 'index.html',
            }),
        ],
        optimization: {
            splitChunks: {
                chunks: 'all',
                automaticNameDelimiter: '_',
            },
        },
        entry: './src/index.jsx',
        output: {
            filename: '[name].[chunkhash].js',
            chunkFilename: '[name].[chunkhash].js',
            path: resolve(__dirname, 'dist')
        },
    }
}
