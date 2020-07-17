// vue.config.js
const path = require("path");
const fs = require("fs");
const cache = path.resolve(__dirname, "./src/pages");
const webpack = require("webpack");
const AddAssetHtmlPlugin = require("add-asset-html-webpack-plugin");
const isProduction = process.env.NODE_ENV === "production";
const pagesConfig = () => {
    let pages = {};
    const viewArr = fs.readdirSync(cache);
    viewArr.forEach(name => {
        pages[name] = {
            entry: `./src/pages/${name}/main.ts`,
            template: "./public/index.html",
            // tslint:disable-next-line: object-literal-sort-keys
            filename: name + ".html",
            title: name,
        };
    });
    return pages;
};
module.exports = {
    devServer: {
        proxy: {
            "/api": {
                target: "http://62.234.90.11:3303/",
            },
        },
    },
    pluginOptions: {
        "style-resources-loader": {
            preProcessor: "less",
            // tslint:disable-next-line: object-literal-sort-keys
            patterns: [
                path.resolve(__dirname, "./src/assets/css/mixin.less"),
            ],
        },
    },
    // tslint:disable-next-line: object-literal-sort-keys
    pages: pagesConfig(),
    productionSourceMap: false,
    parallel: require("os").cpus().length > 1,
    // configureWebpack: (config) => {
    //     if (isProduction) {
    //         config.plugins.push(new webpack.DllReferencePlugin({
    //             context: process.cwd(),
    //             manifest: require("./vender-manifest.json"),
    //         }));
    //         config.plugins.push(new AddAssetHtmlPlugin({
    //             filepath: path.resolve(__dirname, "./public/static/vender.dll.js"),
    //             publicPath: "/front/static",
    //             outputPath: "/static/",
    //         }));
    //     }
    // },
};
