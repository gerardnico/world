// Module import
const path = require('path');
const webpack = require('webpack'); //to access built-in plugins

// The main file
let entry = "./index.js";

// Expose the library as a global variable name
// Minus is not possible in a variable
const libraryName = 'graphunc';

// Create the library as an UMD
// Ie Expose it for the browser and Node
const libraryTarget = 'umd';

// Webpack will build by default in the dist subdirectory
let buildDirectory = 'dist';

// Minify
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var env = process.env.WEBPACK_ENV;

let outputFileName = "function-grapher";
var outputFile = outputFileName + '.js';
if (env === 'build') {
    plugins.push(new UglifyJsPlugin({ minimize: true }));
    outputFile = outputFileName + '.min.js';
}


module.exports = {
    entry: entry,
    output: {
        filename: outputFile,
        library: libraryName,
        path: path.resolve(__dirname, buildDirectory),
        libraryTarget: libraryTarget,
        umdNamedDefine: true
    },
    devtool: 'source-map'
};
