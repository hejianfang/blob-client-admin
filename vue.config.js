// vue.config.js
const path = require('path')
const fs = require('fs')
const cache = path.resolve(__dirname, './src/pages')

function pagesConfig() {
    let pages = {}
    const viewArr = fs.readdirSync(cache)
    viewArr.forEach(name => {
        pages[name] = {
            entry: `./src/pages/${name}/main.ts`,
            template: './public/index.html',
            filename: name + '.html',
            title: name
        }
    })
    return pages
}
module.exports = {
    // devServer: {
    //   proxy: {}
    // },
    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'less',
            patterns: [
                path.resolve(__dirname, './src/assets/css/mixin.less')
            ]
        }
    },
    pages: pagesConfig(),
    productionSourceMap: false
}