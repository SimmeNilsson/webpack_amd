const path = require("path");

module.exports = {
    entry: {
        "webpackAmdModule": "./webpackAmdModule.js"
    },
    mode: "development",
    devtool: "source-map",
    output: {
        path: path.join(__dirname, "dist"),
        libraryTarget: "amd"
    },
    optimization: {
        runtimeChunk: "single"        
    }
}