const { readFileSync } = require('fs')
const { resolve } = require('path')
const { MiniHtmlWebpackPlugin, generateJSReferences } = require('mini-html-webpack-plugin')

const indexHtml = readFileSync(resolve(__dirname, './index.html')).toString('utf-8') || ''

function render(template = '', scope = {}) {
    return template.replace(/(\${(\w+)})/g, (...args) => scope[args[2]] || args[0])
}

function htmlTemplate({ publicPath, js }) {
    const jsTags = generateJSReferences({ files: js, publicPath })
    return render(indexHtml, { jsTags })
}

module.exports = function (options = {}) {
    return new MiniHtmlWebpackPlugin({ template: htmlTemplate, ...options })
}
