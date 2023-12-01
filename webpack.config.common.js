const path = require("path");
var webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: ["/src/index.js", "/src/styles.scss"],
    devtool: 'inline-source-map',
    output: { path: path.resolve(__dirname, "public") },
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                    },
                },
            },
            {
                test: /\.(sass|scss)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: { outputPath: './', name: '[name].min.css' }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                config: true,
                            },
                        },
                    },
                    {
                        loader: 'sass-loader', options: { sourceMap: true }
                    }
                ]
            },
        ],
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "src/index.html",
        }),
        /*new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),*/
    ],
    devServer: {
        https: false,
        host: 'localhost',
        port: 9000,
    },
};