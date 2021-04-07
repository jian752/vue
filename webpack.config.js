const path = require('path');

const config = {
    entry: './src/main.js', // entry point
    output: {
        path: path.resolve(__dirname + '/dist'), // package destination, need absolute path
        filename: '[name].build.js', // package name
    },
};
module.exports = config;
