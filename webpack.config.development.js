const { merge } = require('webpack-merge');
const Common = require('./webpack.config.common.js')

module.exports = merge(Common, {
    mode: "development",
    devServer: {
        open: true,
        hot: true,
    }
}) 