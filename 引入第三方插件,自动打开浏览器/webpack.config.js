/**
 * Created by zhangchao on 16/3/4.
 */
var HtmlwebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
    entry:'./main.js',
    output:{
        filename:'./bundle.js'
    },
    plugins:[
        new HtmlwebpackPlugin({
            title:'webpack'
        }),
        new OpenBrowserPlugin({
            url : 'http:/localhost:8080'
        })
    ]
};