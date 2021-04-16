define(["dist/webpackAmdModule"], function(namespace) {
    if(namespace) {
        console.log("Got exported object, 5.24 or earlier", namespace.default);
    } else {
        console.log("Got nothing from webpack module, 5.25+", namespace);
    }
});
