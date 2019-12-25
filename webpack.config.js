const MiniHtmlWebpackPlugin = require('mini-html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const path = require('path')

function template({publicPath, js}) {
    const jsTags = MiniHtmlWebpackPlugin.generateJSReferences({
        files: js,
        publicPath
    })
    return `<!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>TSX and CSS</title>
</head>
<body>
    <div id="app"></div>
    ${jsTags}
</body>
</html>`
}

const config = {
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [{loader: 'ts-loader'}],
                exclude: /node_modules/,
            }, {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: [{loader: 'file-loader', options: {outputPath: 'assets'}}],
            }, {
                test: /\.(css|less)$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader', options: {modules: true}},
                    {loader: 'less-loader'},
                ],
                exclude: [path.resolve(__dirname, 'node_modules')]
            }, {
                test: /\.(css|less)$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'},
                    {loader: 'less-loader'},
                ],
                include: [path.resolve(__dirname, 'node_modules')]
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    plugins: [
        new CopyPlugin(['favicon.ico']),
        new MiniHtmlWebpackPlugin({ template }),
    ],
    optimization: {
        splitChunks: {
            chunks: 'all',
            automaticNameDelimiter: '_',
        },
    },
    output: {
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'development',
}

module.exports = config
