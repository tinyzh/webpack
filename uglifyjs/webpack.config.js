/**
 * Created by zhangchao on 16/3/4.
 */
var webpack = require('webpack');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

    module.exports = {
        entry:'./main.js',
        output:{
            filename:'./bundle.js'
        },
        plugins:[
            new uglifyJsPlugin({
                compress: {
                    warnings: true
                }
            })
        ]
    };