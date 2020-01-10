const MiniHtmlWebpackPlugin = require('mini-html-webpack-plugin')
const { generateJSReferences } = MiniHtmlWebpackPlugin

function template({ publicPath, js }) {
    const jsTags = generateJSReferences({
        files: js,
        publicPath
    })
    return `<!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>design</title>
</head>
<body>
    <div id="app"></div>
    ${jsTags}
</body>
</html>`
}

module.exports = [
    new MiniHtmlWebpackPlugin({ template })
]
