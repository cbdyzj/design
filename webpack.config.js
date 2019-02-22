const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }, {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: [{ loader: 'file-loader', options: { outputPath: 'assets' } }],
            },
            {
                test: /\.css$/,
                use: [{ loader: 'style-loader' }, { loader: 'css-loader', options: { modules: true } }]
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
    mode: 'development',
}

module.exports = config
