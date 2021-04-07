const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    entry: './src/main.js', // entry point
    output: {
        path: path.resolve(__dirname + '/dist'), // package destination, need absolute path
        filename: '[name].build.js', // package name
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'public/index.html',
            favicon: 'public/favicon.ico',
        }),
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 3000,
        hot: true, // hot reload
        open: true, // auto open the web page after successful built
    },
};
module.exports = config;
