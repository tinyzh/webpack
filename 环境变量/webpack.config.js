/**
 * Created by zhangchao on 16/3/4.
 */
var webpack = require('webpack');

var devFlagPlugin = new webpack.DefinePlugin({
    __DEV__:JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
});

module.exprots = {
    entry:'./main.js',
    output:{
        filename:'./index.js'
    },
    plugins:[devFlagPlugin]
}