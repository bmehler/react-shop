const { merge } = require('webpack-merge');
const Common = require('./webpack.config.common.js');

module.exports = merge(Common, {
    mode: "production",
    devServer: {
        open: true,
        compress: true,
    }
}) 